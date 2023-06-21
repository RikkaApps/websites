# 使用者手冊

[[toc]]

## 啟動 Shizuku

Shizuku 支援透過以下三種方式啟動。

::: tip 如果您正在使用 GrapheneOS

您可能需要關閉 系統設定 - 「安全」 - 「Secure app spawning」。

[來源](https://github.com/RikkaApps/websites/pull/79#issue-1751837442)

:::

### 透過 root 啟動

對於已 root 裝置，直接啟動即可。

### 透過無線偵錯啟動

透過無線除錯啟動適用於 Android 11 或以上版本。這種啟動方式無需連線電腦。由於系統限制，每次重新啟動後都需要再次進行啟動步驟。

#### 啟用無線偵錯

1. 在網路上搜索如何為您的機型啟用「開發人員選項」
2. 啟用「開發人員選項」和「USB 偵錯」<br><br><img :src="$withBase('/images/enable_dev_options.png')" style="max-width:320px;width:100%">
3. 進入「無線偵錯」<br><br><img :src="$withBase('/images/enter_wireless_debugging.png')" style="max-width:320px;width:100%">
4. 啟用「無線偵錯」<br><br><img :src="$withBase('/images/enable_wireless_debugging.png')" style="max-width:320px;width:100%">
   
#### 配對（僅需一次）

1. 在 Shizuku 內開始配對<br><img :src="$withBase('/images/start_paring_from_shizuku.png')" style="max-width:320px;width:100%">
2. [啟用無線偵錯](#啟用無線偵錯)
3. 點按「無線偵錯」中的「使用配對碼配對裝置」<br><img :src="$withBase('/images/start_pairing.png')" style="max-width:320px;width:100%">
4. 在 Shizuku 的通知中填入配對碼<br><img :src="$withBase('/images/enter_pairing_code.png')" style="max-width:320px;width:100%">

#### 啟動 Shizuku

<img :src="$withBase('/images/start_shizuku.png')" style="max-width:320px;width:100%">

如果無法啟動，嘗試禁用並啟用無線偵錯。

### 透過連線電腦啟動

該啟動方式適用於未 root 且執行 Android 10 及以下版本的裝置。很不幸，該啟動方式需要連線電腦。由於系統限制，每次重新啟動後都需要再次進行啟動步驟。

#### 什麼是 `adb`？

Android 除錯橋 (`adb`) 是一個通用命令列工具，其允許您與模擬器例項或連線的 Android 裝置進行通訊。它可為各種裝置操作提供便利，如安裝和除錯程式，並提供對 Unix shell（可用來在模擬器或連線的裝置上執行各種命令）的存取。

更多資訊請檢視 [Android Developer](https://developer.android.com/studio/command-line/adb)。

#### 安裝 `adb`

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

#### 設定 `adb`

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

#### 啟動 Shizuku

複製指令並貼上到終端中，如無問題你將會在 Shizuku 中看到已啟動成功。

::: details 適用於 Shizuku v11.2.0+ 的指令 

```
adb shell sh /sdcard/Android/data/moe.shizuku.privileged.api/start.sh
```
:::

## 常見問題

許多廠商對 Android 系統進行了修改，這會造成 Shizuku 無法正常工作。

### 透過無線除錯啟動：一直顯示「正在搜尋配對服務」

請允許 Shizuku 在背景執行。

搜尋配對服務需要訪問本地網路，許多廠商在應用程式不可見後立刻禁止應用程式訪問網路。您可以在網路上搜索如何在您的裝置上允許應用程式在背景執行。

### 透過無線除錯啟動：點選「輸入配對碼」後立刻提示失敗

#### MIUI（Xiaomi、POCO）

在系統設定的「通知管理」-「通知顯示設定」將通知樣式切換為「Android」。

### 透過無線除錯啟動/透過連線電腦啟動：adb 權限受限

#### MIUI（Xiaomi、POCO）

在「開發人員選項」中開啟「USB 偵錯（安全設定）」。**注意，這和「USB 偵錯」是兩個分開的選項。**

#### ColorOS（OPPO & OnePlus）

你需要在「開發人員選項」中關閉「權限監控」。

#### Flyme（魅族）

你需要在「開發人員選項」中關閉「Flyme 支付保護」。

### 透過無線除錯啟動/透過連線電腦啟動：Shizuku 隨機停止

#### 所有裝置

- 保證 Shizuku 可以在背景執行。
- 不要關閉「USB 偵錯」及「開發人員選項」。
- 在「開發人員選項」中將 USB 使用模式改為「僅充電」。
  
  在 Android 8 上的選項是「選擇 USB 配置」-「僅充電」。
  
  在 Android 9 及以上版本上選項是「預設 USB 配置」-「不進行資料傳輸」。

- （Android 11+）啟用「停用 ADB 授權逾時」選項。

#### EMUI (Huawei) 

你需要在「開發人員選項」中開啟「僅充電模式下允許 ADB 偵錯選項」。

#### MIUI（Xiaomi、POCO）

不要使用 MIUI 的「手機管家」的掃描功能，因為它會禁用「開發人員選項」。

#### Sony

不要點選連線 USB 後彈出的對話方塊，因為這會導致 USB 使用模式發生變化。

### 透過 root 啟動：無法開機啟動

請允許 Shizuku 在背景執行。
