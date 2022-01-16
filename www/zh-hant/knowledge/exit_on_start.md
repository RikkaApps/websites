# 啟動後立刻退出

Storage Isolation、AppOps 和 NoPopping 有反篡改機制。一旦檢測到篡改，應用程式會在啟動後立刻退出。

篡改行為包括但不限於：

* 重新簽名
* 在虛擬環境中執行
* 為應用程式啟用 Xposed
  
  主流的 Xposed 實現均有排除功能，請將應用程式從您使用的 Xposed 框架中排除。

請確保應用程式是從官方渠道下載，官方渠道包含 Google Play，GitHub release，酷安（針對中國大陸地區使用者）。

目前，有極少數的使用者報告從不同的渠道升級後出現此問題，但是尚不確定是否屬實。如果您是這種情況，請將當前安裝的 apk 傳送到 [support@rikka.app](mailto://support@rikka.app) 後解除安裝重灌。
