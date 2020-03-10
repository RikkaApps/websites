# 程式組

Android 系統的 Shared User ID 機制允許多個應用程式享有相同的 Linux user ID 及 Android 權限，相互訪問檔案甚至執行在同一個行程。這些應用程式需要有具有相同簽名。Shared User ID 不可在安裝後更改。為了簡化理解難度，我們在儲存空間隔離內稱 Shared User ID 機制為程式組。

這意味著：

* 一些沒有儲存權限的應用程式實際可以使用儲存空間
* 多個應用程式可以執行在同一個行程

隔離作用於行程層面。在 v4.0.0 之前的版本中，只有 package name 被用作判斷，這顯然會產生問題。

### 例子

媒體儲存、下載管理器、下載管理器 UI、MTP 主機擁有同一個 Shared User ID `android.media`，其中媒體儲存和下載管理器都設定了 `android:process="android.process.media"`。因此媒體儲存和下載管理器執行在同一個行程。

在 MIUI（或許還包括其他重度修改的系統）中，下載管理器有濫用儲存空間的行為，因此使用者會選擇為其啟用隔離並只允許其訪問 `Download` 資料夾。但由於媒體儲存也運行同一行程，因此媒體儲存實際也只能訪問 `Download`，這會造成使用者相簿無法更新。

另外，Shared User ID 機制可以做到使沒有儲存權限使用儲存空間。同樣是 MIUI（或許還包括其他重度修改的系統），使用者會沒有機會為這樣的應用程式啟用隔離，因為在舊版本中它們不會被展示。

因此 v4.0.0 後讓相同 Shared User ID 的應用程式使用相同的設定可以解決這個問題。

### 行為

假設有兩個應用程式 `com.example` `com.example2`，它們的 Shared User ID 是 `example`。

* 使用相同的設定（在內部被視為「同一個應用程式」）
* 隔離儲存空間位置位於 `Android/data/shared-example` 中
* 可相互訪問應用程式專有資料夾