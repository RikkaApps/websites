# 安裝

增強模組要求您的裝置首先安裝 Magisk，因為只有 Magisk 才能提供可靠的啟動指令碼。

Magisk 是一個功能強大的工具，它不僅提供 root，而且提供不修改系統檔案就修改系統等其他功能。

您可以從 [GitHub](https://github.com/topjohnwu/Magisk) 瞭解有關 Magisk 的更多資訊。

## 安裝前須知

1. 請務必確認已經瞭解如何在無法進入系統時刪除模組
2. 以防萬一，請先備份整個裝置的資料

## 下載

在 Magisk Manager 中下載安裝 **Riru (Riru - Core)** 和 **Riru - Enhanced mode for Storage Isolation (Storage Redirect)**。注意，請在 Magisk Manager 中**搜索「Riru」而非完整名稱**。

最新版本通常會延後一段時間上傳至 Magisk。如果最新版本尚未更新或你無法在 Magisk Manager 取得線上模組列表，你可以直接從 GitHub release 下載 [Riru](https://github.com/RikkaApps/Riru/releases) 及 [增強模組](https://github.com/RikkaApps/StorageRedirect-assets/releases/tag/assets) 的最新版本。

若安裝正常，你應該會看到下面的圖：

<img :src="$withBase('/images/magisk_modules.png')" alt="安裝正常圖示">

## 故障排除

### 需要 Magisk v20.0+

模組本身對 Magisk 版本沒有限制，版本限制在 Magisk Manager 方面。如果你出於某些原因要使用 v20 之前的 Magisk，請使用早期版本的 Magisk Manager。

### 無法進入系統（通常是由於隔離了系統元件）

你需要使用 adb 來禁用模組（這種情況下 adb 通常是可用的）。

```
adb shell
su
touch /data/adb/modules/riru_storage_redirect/disable
reboot
```

有關如何使用 adb，網路上有相當多的教程，在此我們不必贅述。。

另外，如果你有意幫助解決問題，你可以執行 `adb logcat > 1.txt` 來儲存 log 並將 log 傳送至 [support@rikka.app](mailto://support@rikka.app)。