# 不同版本的系統行為

每個 op 都有兩種 mode，分別為 `package mode` 和 `uid mode`。`uid mode` 有更高優先順序，即只有當 `uid mode` 為預設值時才會使用 `package mode`。**舊版本的 App Ops（v5.0.0 以前）只會讀取和修改 `package mode`。**

以下表格展示了從系統修改權限設定時，`uid mode` 會被如何設定。

#### Android 6 - Android 9
| 系統設定頁面 | uid mode                                    |
|--------------|---------------------------------------------|
| 允許         | allow                                       |
| 拒絕         | ignore（只對 target 23 以下的應用程式設定） |
| （尚未設定） | (allow)                                     |

#### Android 10

| 系統設定頁面         | uid mode       |
|----------------------|----------------|
| **僅在使用期間允許** | **foreground** |
| 允許                 | allow          |
| **拒絕**             | **ignore**     |
| （尚未設定）         | (allow)        |

#### Android 11

| 系統設定頁面         | uid mode       |
|----------------------|----------------|
| **每次都詢問**       | **ignore**     |
| **僅在使用期間允許** | **foreground** |
| 允許                 | allow          |
| 拒絕                 | ignore         |
| **（尚未設定）**     | **ignore**     |

* 設定 `package mode` 無效
* 設定 `uid mode` 時，若設定值不符合執行時權限狀態則無效
* 在特定的情況下（比如安裝應用程式後），系統將重設**全部應用程式**的 appops 設定到與執行時權限符合的狀態

### 舊版本 App Ops（v5.0.0 以前）從 Android 10 就不能正常工作

#### Android 10

簡單地說，只有在系統中是「允許」時 App Ops 的設定才有效。

例如，一旦從系統將位置權限設定為「僅在使用時允許」，則來自 App Ops 的設定將始終無效。因為系統已將 `uid mode` 修改為 `foreground`，舊版本 App Ops 修改的 `package mode` 永遠不會生效。

#### Android 11

幾乎不能正常工作。

### 新版本 App Ops 做出的變化

除了完全跟隨系統行為以外別無選擇。從 v5.0.0 版本起，除了「忽略」，其他選項與系統權限設定中的選項相同（要做的不止上面的表格所展示的，例如 `permission flags`）。

另外，因為 Android 11 會重置 appops 設定（所有「執行時權限允許，ops 忽略」會被重設為「執行時權限拒絕」），所以除了在系統之後再次重設以外別無選擇。

### 常見問題

#### 為什麼必須移除「root 模式」？

很簡單，純 root（執行指令）不可能做到上面所說的東西。

很多人會認為 root 無所不能，但實際上 root 基本上只提供了 Linux 世界的 `uid 0`。想要進入 Android 世界，通過 `app_process` 執行 dex 幾乎是唯一選擇。

「root 模式」的替代——「Shizuku 模式」使用 Shizuku（[GitHub](https://github.com/RikkaApps/Shizuku)）做這一部分的工作。如果不使用 Shizuku，則仍然需要執行類似 Shizuku 的東西，這樣做是沒有意義的，並且也將帶來無意義的資源使用。

#### 為什麼「託管裝置管理員模式」需要管理員程式支援特定的 API？

「託管裝置管理員模式」支援兩種 API，分別是由冰箱提供的 [Delegated Scopes Manager API](https://github.com/heruoxin/Delegated-Scopes-Manager) （被多個管理員程式使用）和 Island 提供的 [API](https://island.oasisfeng.com/api)。

在 Android 10 以上修改執行時權限不可避免，目前只有 Island 5.0 及以上版本提供此功能。

#### 為什麼「託管裝置管理員模式」下會「無法確認」？<br>為什麼「託管裝置管理員模式」下備份受限？

「託管裝置管理員模式」依賴被設為 `profile owner` 或 `device owner` 的管理員程式。但是，管理員程式只能「設定」執行時權限設定，不能「讀取」（事實上，即使是「設定」也必須藉助變通的方法才能實現）。

因此不可能取得真實的設定。比如，在 Android 10 以上，對於「ignore」，需要得知執行時權限是否允許才能區分是否真的是「忽略」。

#### 為什麼不再支援 v5.0.0 之前建立的備份？

在 v5.0.0 以前的 App Ops 的備份只包含了 appops 的設定。從 Android 10 開始，僅有 appops 設定並不能體現真實的情況。即使在低版本系統中，由於舊版的備份中缺失了一些必要的資訊，也可能導致錯誤。
