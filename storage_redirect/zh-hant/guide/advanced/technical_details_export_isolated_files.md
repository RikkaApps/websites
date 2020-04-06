# 技術細節（匯出被隔離的檔案）

假設有一個應用程式 `com.example` 儲存圖片至 `images` 資料夾。建立了一條來源資料夾 `images`，目標資料夾 `Pictures/Example` 的規則。

```
/storage/emulated/0
├───Android/data/com.example
│   └───sdcard      <---- com.example 的隔離儲存空間
│       └───images  <---- 儲存圖片的位置（來源資料夾）
│           ├───1.jpg
│           └───...
└───Pictures
    └───Example     <---- 匯出後的位置（目標資料夾）
        ├───1.jpg
        └───...
```

建立規則後，`Android/data/com.example/sdcard/images` 資料夾會被使用 [`inotify`](http://man7.org/linux/man-pages/man7/inotify.7.html) 監視並遵循如下的規則將其中的檔案使用 [`link` (hard link)](http://man7.org/linux/man-pages/man2/link.2.html) 「同步」至 `Pictures/Example`。

因為使用 hard link，所以只會佔用一份儲存空間。其他 app 或系統可能會因為沒有正確地處理這樣的情況而錯誤地回報使用情況。

規則的行為：
* 在來源資料夾中建立檔案/移動檔案至來源資料夾：link 至目標資料夾
* 刪除/移出來源資料夾中的檔案：若應用程式在前臺則同時刪除目標資料夾中的檔案；若不在前臺則什麼都不做（這是為了避免使用者/系統/第三方應用程式操作來來源資料夾而導致檔案丟失）
* 在目標資料夾中建立檔案/移動檔案至目標資料夾：在下次核心服務啟動時 link 至來源資料夾
* 刪除/移出目標資料夾中的檔案：刪除來源資料夾中的檔案
