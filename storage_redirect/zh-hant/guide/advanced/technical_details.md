# 技術細節

注意，這篇文檔並不會提及所有細節。

## 關於 root 權限使用

只會建立 `/data/misc/storage_redirect` 資料夾用於存放可執行文件及配置文件。

啓動時，會運行兩個行程，`storage_redirect` 和 `storage_redirect_server`。`storage_redirect` 負責核心功能；`storage_redirect_server` 會添加一個服務到 `ServiceManager`，負責與儲存重新導向應用程式通信。

## 關於儲存權限

儲存權限會被強制授予並鎖定（在系統權限管理中看到「由政策強制執行」）。鎖定的原因在於，在應用程式儲存權限發生變化後，系統會重新爲應用程式行程掛載 `/storage`（我們無法監控到這一變化），會導致我們所做的掛載丟失。

## 儲存空間隔離（重新導向）

在應用程式行程建立後，進入應用程式行程的掛載命名空間進行一系列的綁定掛載。

比如會掛載 `/mnt/runtime/write/emulated/0/Android/data/com.example/sdcard` 至 `/storage/emulated/0`，那麼對於應用程式行程， `/storage/emulated/0` 實際就是 `/storage/emulated/0/Android/data/com.example/sdcard`。

對「可訪問資料夾」中設置的各種規則，本質就是追加了更多綁定掛載。另外，無論怎麼設置，默認會至少會掛載 `Android/data/com.example`，`Android/media/com.example`，`Android/obb/com.example` 到 `Android/data/com.example/sdcard` 中。

### 關於獲知應用程式行程建立

  在不使用增強模式時，`logcat`。使用增強模式時，由應用程式行程透過 socket 連接至我們的 `storage_redirect` 行程。

###「同步資料夾」

藉助 inotify 與硬鏈接實現。另外，inotify 似乎並不能正確監控到文件被移走/移入，所以只有建立和刪除可以被正確處理。

## 增強模式

增強模式藉助 [Riru](https://github.com/RikkaApps/Riru) 實現注入應用程式行程。

### 修復應用程式間交互

在被重新導向應用程式行程中加載自己的 dex，會爲 `IActivityManager` 套上動態代理。

自己開啓 activity 時，請求啓動其他 activity 時對 intent 中攜帶的 file uri 進行修改，必要時轉換成 content uri 經由儲存重新導向中轉。

使用媒體儲存時，會根據「可訪問資料夾」設置對結果進行修改。

在 Android P 及以上，爲了反射不受限，還會強行關閉 hidden api 檢查（修改 `nativeForkAndSpecialize` 的 `runtime_flags`）。

### 修復 rename

通過在應用程式行程內 hook `rename`，如果返回 -1 且 `errno == EXDEV` 則先複製後刪除並修改返回值。

### 文件監視

通過在應用程式行程內 hook `open` 等函數並使用 socket 發送給 `storage_redirect` 行程。