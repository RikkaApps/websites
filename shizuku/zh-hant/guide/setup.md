# 如何啟動 Shizuku

## 透過 root 啟動

對於已 root 裝置，直接啟動即可。

## 由廠商造成的問題（非 root 方式）

### 1. MIUI（Xiaomi）💩

你需要在「開發人員選項」中開啟「USB 偵錯（安全設定）」。

對於 MIUI 11 及以上版本，你必須在 Shizuku 內授予使用者程式權限。這是因為自定義權限功能被破壞，參見 [Shizuku #45](https://github.com/RikkaApps/Shizuku/issues/45) 和 [android-in-china/Compatibility #16](https://github.com/android-in-china/Compatibility/issues/16)。

此外，**不要**使用 MIUI 的「手機管家」的掃描功能，因為它會禁用「開發人員選項」。

### 2. ColorOS（OPPO）💩

你需要在「開發人員選項」中關閉「權限監控」。

### 3. Flyme（Meizu）💩

你需要在「開發人員選項」中關閉「Flyme 支付保護」。

### 4. EMUI (Huawei) 💩

你需要在「開發人員選項」中開啟「僅充電模式下允許 ADB 偵錯選項」。

### 5. OriginOS (vivo) 💩

OriginOS 的設定不支援分屏，你需要在「開發者設定」中開啟「將活動強制設為可調整大小」。參見 [Shizuku #106](https://github.com/RikkaApps/Shizuku/issues/106)。

## 透過無線偵錯啟動

Android 11 添加了全新的無線偵錯功能，該功能位於「開發者設定」-「無線偵錯」。Shizuku v4.0.0 起支援此功能。

::: tip 提示

1. 裝置重新啟動後需要再次開啟「無線偵錯」選項並重新啟動 Shizuku。
2. 無 WiFi 連線時無法啟用「無線偵錯」（已啟動的 Shizuku 不受影響）。
3. 不可關閉「開發人員選項」或「USB 偵錯」。
:::

### 1. 配對（只需進行一次）

> 從 v4.1.0 起，通訊埠自動檢測。

1. 啟用「開發人員選項」（在網路上有非常多的教程）
2. 進入「無線偵錯」
3. 啟用系統的「分割畫面」（多視窗）功能（**必須，因為一旦離開「無線偵錯」，配對過程就會被停止**）
4. 輕觸「無線偵錯」中的「使用配對碼配對裝置」
5. 輕觸 Shizuku 中的「透過無線偵錯啟動」，輕觸「配對」
6. 填入「配對碼」及「通訊埠」後確定<br><img :src="$withBase('/images/wireless_adb_pairing.png')" alt="配對過程示意圖" style="max-width:320px;width:100%">
7. 如果配對成功，「無線偵錯」中的「已配對的裝置」中會出現「shizuku」<br><img :src="$withBase('/images/wireless_adb_pairing_succeeded.png')" alt="配對成功示意圖" style="max-width:320px;width:100%">
8. 如果你不希望重新進行此步驟，開啟「開發者設定」中的「停用 adb 授權超時功能」
9. 如果重新安裝 Shizuku，則需要再次執行此步驟

### 2. 使用

1. 開啟 Shizuku 中的「透過無線偵錯啟動」
2. 填入「無線偵錯」中的通訊埠（此通訊埠會在每次啟用「無線偵錯」時變化）<br><img :src="$withBase('/images/wireless_adb_port.png')" alt="通訊埠示意圖" style="max-width:320px;width:100%">

## 透過連線電腦啟動

對於未 root 裝置，需要藉助 adb 啟動。使用 adb 並不困難，請閱讀下面的教程。

::: tip 提示

1. 裝置重新啟動後需要再次連線電腦。
2. 在一些定製系統上 Shizuku 可能會隨機停止。閱讀最後的部分可以看到解決方案。
:::

### 1. 什麼是 `adb`？

Android 除錯橋 (`adb`) 是一個通用命令列工具，其允許您與模擬器例項或連線的 Android 裝置進行通訊。它可為各種裝置操作提供便利，如安裝和除錯程式，並提供對 Unix shell（可用來在模擬器或連線的裝置上執行各種命令）的存取。

更多資訊請檢視 [Android Developer](https://developer.android.com/studio/command-line/adb)。

### 2. 安裝 `adb`

1. 下載由 Google 提供的「SDK Platform Tools」並解壓至任意資料夾

   * [Windows](https://dl.google.com/android/repository/platform-tools-latest-windows.zip)
   * [Linux](https://dl.google.com/android/repository/platform-tools-latest-linux.zip)
   * [Mac](https://dl.google.com/android/repository/platform-tools-latest-darwin.zip)

2. 開啟資料夾，右鍵選擇

   * Windows 10：在此處開啟 PowerShell 視窗（**需要按住 Shift 才會顯示該選項**）
   * Windows 7：在此處開啟命令視窗（**需要按住 Shift 才會顯示該選項**）
   * Mac 或 Linux：打开 Terminal（終端）

3. 輸入 `adb` 如果可以看到一長串內容而不是提示找不到 adb 則表示成功

::: tip 提示
1. 請不要關閉該視窗，後面提到的「終端」都是指此視窗（如果關閉請重新進行第 2 步）。
2. 如果使用 PowerShell 或是 Linux 及 Mac，所有 `adb` 都要替換成 `./adb`。
:::

### 3. 設定 `adb`

要使用 `adb` 你首先需要在裝置上開啟 USB 偵錯功能，通常需要經過以下步驟：

1. 開啟系統設定，進入關於
2. 連續數次點選 "Build number" 後看到類似 "You are a developer" 的提示
3. 此時你應該可以在設定中找到「開發人員選項」，進入後開啟「USB 偵錯」
4. 連線裝置到電腦，在終端中輸入 `adb devices`
5. 此時裝置上會出現「是否允許偵錯」的對話方塊，勾選「總是允許」後確認
6. 再次在終端中輸入 `adb devices`，如無問題將會看到類似如下內容
   ```
   List of devices attached
   XXX      device
   ```

::: tip
不同裝置開啟「開發人員選項」的步驟可能有所不同，請自己搜尋。
:::

### 4. 啟動 Shizuku

複製指令並貼上到終端中，如無問題你將會在 Shizuku 中看到已啟動成功。

::: details 適用於 Shizuku v11.2.0+ 的指令 

```
adb shell sh /sdcard/Android/data/moe.shizuku.privileged.api/start.sh
```
:::

::: details 適用於 Shizuku v4.0.0+ 的指令
Android 6.0:

```
adb shell sh /data/user/0/moe.shizuku.privileged.api/start.sh
```

Android 7.0+:

```
adb shell sh /data/user_de/0/moe.shizuku.privileged.api/start.sh
```
:::

::: details 適用於 Shizuku v3.x 的指令

```
adb shell sh /sdcard/Android/data/moe.shizuku.privileged.api/files/start.sh
```
:::

### 5. Shizuku 隨機停止？

首先，不要關閉「USB 偵錯」及「開發人員選項」。

然後你需要保證在連線電腦期間 USB 使用模式不變。通常的做法是在「開發人員選項」中將 USB 使用模式改為「僅充電」。在 Android 8 上的選項是「選擇 USB 配置」-「僅充電」；在 Android 9+ 上選項是「預設 USB 配置」-「不進行資料傳輸」。

在一些裝置上（如三星），這麼做可能不起作用。此時你需要檢視連線電腦後出現的通知來檢視當前的 USB 使用模式，並將開發人員選項中的模式改為該模式。

如果還是不行，你可以嘗試開啟網路 adb（使用指令 `adb tcpip 5555`）後再啟動 Shizuku。

此外，如果你的系統在連線 USB 後會彈出類似「是否允許訪問檔案」的對話方塊，請不要點選它，因為點選後 USB 使用模式會發生變化。

#### Sony 裝置

不要點選連線 USB 後彈出的對話方塊。