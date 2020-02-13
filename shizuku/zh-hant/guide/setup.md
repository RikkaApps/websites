# 如何啟動 Shizuku

## 裝置已 root

對於已 root 裝置，直接在 Shizuku 程式啟動即可。

## 裝置未 root

對於未 root 裝置，需要藉助 adb 啟動。使用 adb 並不困難，請閱讀下面的教程。

### 1. 什麼是 `adb`？

Android 除錯橋 (`adb`) 是一個通用命令列工具，其允許您與模擬器例項或連線的 Android 裝置進行通訊。它可為各種裝置操作提供便利，如安裝和除錯程式，並提供對 Unix shell（可用來在模擬器或連線的裝置上執行各種命令）的存取。

更多資訊請檢視 [Android Developer](https://developer.android.com/studio/command-line/adb)。

### 2. 安裝 `adb`

#### 2.1. Windows

1. 下載由 Google 提供的 [SDK Platform Tools](https://dl.google.com/android/repository/platform-tools-latest-windows.zip) 並解壓至任意資料夾
2. 使用資源管理器開啟資料夾，按住 Shift 點選右鍵選擇「在此處開啟 PowerShell 視窗」（如果是 Windows 7 則是「在此處開啟命令視窗」）
3. 輸入 `adb` 如果可以看到一長串內容而不是提示找不到 adb 則表示成功

::: tip
請不要關閉該視窗，後面提到的「終端」都是指此視窗（如果關閉請重新進行第 2 步）。
:::

::: tip
如果使用 PowerShell，所有 `adb` 都要替換成 `./adb`。
:::

#### 2.2. Linux / macOS

你們一定可以自己解決 :D

### 3. 設定 `adb`

要使用 `adb` 你首先需要在裝置上開啟 USB 除錯功能，通常需要經過以下步驟：

1. 開啟系統設定，進入關於
2. 連續數次點選 "Build number" 後看到類似 "You are a developer" 的提示
3. 此時你應該可以在設定中找到「開發者選項」，進入後開啟「USB 除錯」
4. 連線裝置到電腦，在終端中輸入 `adb devices`
5. 此時裝置上會出現「是否允許除錯」的對話方塊，勾選「總是允許」後確認
6. 再次在終端中輸入 `adb devices`，如無問題將會看到類似如下內容
   ```
   List of devices attached
   XXX      device
   ```

::: tip
不同裝置開啟「開發者選項」的步驟可能有所不同，請自己搜尋。
:::

#### 3.1. MIUI 裝置

> 「<del>2019</del> 2020 年，💩 MIUI 還是會破壞 Android 的特性」

如果你使用 MIUI，你還需要開啟「USB 除錯（安全設定）」。

如果你使用 MIUI 11，MIUI 11 破壞了自訂權限（使用者程式無法請求自定義權限，參考 [這個 issue](https://github.com/RikkaApps/Shizuku/issues/45) 和 [這個 issue](https://github.com/android-in-china/Compatibility/issues/16)），你必須在 Shizuku app 內授予使用者程式權限。

### 4. 啟動 Shizuku

在終端中輸入 `adb shell sh /sdcard/Android/data/moe.shizuku.privileged.api/files/start.sh`，如無問題你將會在 Shizuku 中看到已啟動成功。

::: warning
重啟裝置後需要重新進行，因此請儘量避免關機和重新啟動。
:::

### 5. Shizuku 隨機停止？

1. 不要關閉「USB 除錯」及「開發者選項」
2. 連線裝置到電腦後不要修改 USB 使用模式
3. 在 Android 8 上你可以嘗試在「開發者選項」中將「選擇 USB 配置」改為「僅充電」；在 Android 9 及以上則是將「預設 USB 配置」改為「不進行資料傳輸」（如果不行，請嘗試別的選項）
4. 如果還是不行，你可以嘗試開啟網路 adb（使用指令 `adb tcpip 5555`）後再啟動 Shizuku

#### 5.1. Huawei 裝置

在「開發者選項」中開啟「僅充電模式下允許 ADB 除錯選項」。

#### 5.2 Sony 裝置

不要點選連線 USB 後彈出的對話方塊。