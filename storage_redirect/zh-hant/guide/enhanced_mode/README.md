# 介紹及安裝

## 為什麼需要「增強模式」

首先，「基礎模式」依賴 Android 的 logcat 機制來偵測 app 程序建立。但該機制並不完全可靠（比如在 Huawei EMUI 上 logcat 預設關閉），你會發現儲存重新導向完全不起作用。此外，日誌可以晚於應用程式本身執行，因此應用程式可以在時間間隔內建立/訪問檔案。

「增強模式」使用 [Riru](https://github.com/RikkaApps/Riru) 來注入 app 程序。因此，當 app 程序啟動時，它可以使用 socket 與儲存重新導向的核心程序進行通訊。這可以避免上述問題。

另外，一些影響體驗的問題也只能在「增強模式」下解決。你可以在儲存重新導中看到所有可用的功能。

## 效能影響

「增強模式」只帶來可以忽略不記的效能影響。

## 下載和安裝

我們暫時只提供 [Magisk](https://github.com/topjohnwu/Magisk) 模組，因為只有 Magisk 可以提供**可靠的**開機時執行指令碼。

### 安裝前須知

1. 請務必確認已經瞭解如何在無法進入系統時刪除模組
2. 以防萬一，請先備份整個裝置的資料
3. 如果有 v12 以前的模組，必須刪除

### 版本對應

**警告：你必須使用版本正確的模組，否則輕則功能不正常，重則無法開機。**

| App    | Riru - Storage Redirect | Riru - Core |
|--------|-------------------------|-------------|
| 1.6.9+ | v19.6+                  | v19+        |

::: tip
**提示**

從 v19.6 起，安裝時儲存重新導向版本會受到檢查，因此你只需要**總是使用最新版程式**和**安裝了新版本模組時不要降級程式**。
:::

### Magisk 模組

1. 在 **Magisk Manager** 中下載安裝 **Riru - Core**
2. 在 **Magisk Manager** 中下載安裝 **Riru - Storage Redirect**
3. 可選，下載 [檢測 app for v19.4](https://github.com/RikkaApps/Riru/releases/download/v19.4/app-release.apk) 來檢查 Riru 是否正常工作

### Magisk v19+

直接從 **Magisk Manager** 下載。

### Magisk v17-v18.1
* [Riru - Core v19.4](https://github.com/RikkaApps/Riru/releases/download/v19.4/magisk-v17-riru-core-v19.4.zip)
* [Riru - Storage Redirect v19.6](https://github.com/RikkaApps/StorageRedirect-assets/releases/download/assets/riru-storage-redirect-v19.6-magisk-v17.zip)