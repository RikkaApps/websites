# 程式組

Android 系統的 Shared User ID 機制允許多個應用程式享有相同的 Linux user ID 及 Android 權限，相互訪問檔案甚至執行在同一個行程。這些應用程式需要有具有相同簽名。Shared User ID 不可在安裝後更改。為了簡化理解難度，我們在儲存空間隔離內稱 Shared User ID 機制為程式組。

這意味著：

* 一些沒有儲存權限的應用程式實際可以使用儲存空間
* 多個應用程式可以執行在同一個行程

隔離作用於行程層面。在 v4.0.0 之前的版本中，只有 package name 被用作判斷，這顯然會產生問題。

### 行為變化

假設有兩個應用程式 `com.example` `com.example2`，它們的 Shared User ID 是 `example`。

* 使用相同的設定（在內部被視為「同一個應用程式」）
* 隔離儲存空間位置位於 `Android/data/shared-example` 中
* 可相互訪問應用程式專有資料夾