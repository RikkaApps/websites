# Changelog

## 5.4.5 (2021-05-21)

- 受限模式（不安裝增強模組）在 Android 12 Beta 1 上工作
- 為檔案監視新增「排除私有檔案」選項

## 5.4.3 (2021-05-06)

- 修了在可訪問資料夾模板需要較長時間才能載入的問題

## 5.4.1 (2021-05-04)

- 阻止 💩 MIUI 的「強制深色模式」弄壞自己的深色主題<sup>**〔1〕**</sup>

<sub><b>〔1〕</b>MIUI 有自己的「強制深色模式」，但是似乎即使應用程式正確地提供了深色主題，它也會繼續起作用，從而把顏色改亂。</sub>

## 5.4.0 (2021-05-03)

- 嘗試解決可能存在的不能隔離 Android 11 及以上版本的媒體儲存裝置的問題（在 MIUI 上，隔離它可能是必要的）
- 增加了多個針對 Android 11 及以上版本系統的防呆設定
- 記錄從始至終執行隔離的次數

## 5.3.5 (2021-04-28)

- 嘗試修復一個可能導致核心服務崩潰的問題
- 從應用列表隱藏部分應用程式（無元件的程式、無程式碼的程式、overlay 程式，此類程式無法執行，隔離它們沒有意義）

## 5.3.4 (2021-04-27)

- 修復一個只在極少的裝置上出現的「修復程序間互動」功能導致被隔離的應用程序卡死的問題

## 5.3.1 (2021-03-27)

- 採用[自己編譯的 libcxx](https://github.com/RikkaW/libcxx-prefab)來減少檔案大小（減少了約 300KB）
- 增強模組升級到 Riru 25
- 適應一個 Android 12 的改變
- 當增強模式沒有正常工作時給予提示
- 處理了一些 Android 11 及以上使用者主動關閉了 fuse 後的問題

## 5.2.0 (2021-01-27)

- 修了在 Android 11 上，對於非主使用者，所有需要列出檔案的功能均無法正常使用的問題

## 5.1.0 (2021-01-19)

- 支援通過 Sui（https://github.com/RikkaApps/Sui）啟動（當然由於這個應用程式複雜度過高，真的就只是啟動而已）
- 檔案監視現在顯示非主使用者的記錄

## 5.0.2 (2020-12-20)

- 修了一個可能導致有 `sharedUserId` 的應用程式（應用程式內稱為「程式組」）無法被隔離的問題
- 當「阻止系統重新掛載」可用時不再自動允許 `OP_REQUEST_INSTALL_PACKAGES`（以前這麼做的原因是 `OP_REQUEST_INSTALL_PACKAGES` 改變會觸發系統重新掛載導致隔離失效）

## 5.0.1 (2020-12-15)

- 修了在 Android 11 上新新增的「匯出被隔離的資料夾」規則不會立刻生效的問題

## 5.0.0 (2020-11-23)

- 支援出廠 Android 11 的移除了 `sdcardfs` 的裝置（如 Pixel 5，Pixel 4a 5G 等）
- 在 Android 11，「匯出被隔離的檔案」使用 `mount` 而不是 `hard link` 實現（因為媒體儲存裝置無權訪問連結檔案）
- 所有涉及 `untrusted_app` 域的跨程式通訊均已使用 binder（許多部分被完全重寫）
- 幾乎去除所有表明裝置已 root 的痕跡
- 使用 `/data/adb/storage-isolation` 資料夾，如果沒有問題你可以刪除 `/data/misc/storage_redirect`
- 講出所有的變化很難 😶

## 4.5.3 (2020-08-20)

- 改變核心部分做法，應該不再會有先前版本的「適應 Android 11 的改變」帶來的問題
- 適應 Android 11 beta 3 的變化

## 4.5.2 (2020-06-19)

- 不讓放任一個奇怪的錯誤<sup>**〔1〕**</sup>致使整個程式崩潰

<sub><b>〔1〕</b>An error related to Retrofit + Kotlin coroutines, stacktrace is empty</sub>

## 4.5.0 (2020-06-16)

- 修復在 Android 11 上隔離早於使用者解鎖啟動的應用程式會導致嚴重的問題
- 當「增強模式」-「禁止系統重新掛載」啟用時，隔離的應用程式的儲存權限不再不可改變<sup>**〔1〕**</sup>
- 增強模式：「禁止系統重新掛載」在 Android 11 上工作
- 增強模式：「修復程式間互動」在 Android 11 上工作
- 增強模式：移除「修復程式間互動」的 toast 提示（對於檢查的使用場景，請檢查 tag 為 "SRHook" 的 log）
- 增強模式 v22.6：修復應用程式級別的「修復程式間互動」開關不起作用
- 可自訂「匯出被隔離的檔案」規則標題
- 改善「應用程式設定」頁面效能
- 「相簿預覽」在 Android 11 上工作
- 當應用程式開機啟動，不要殺死由增強服務啟動的行程
- 提升目標 API 版本到 30
- 改變了圖示

<sub><b>〔1〕</b>根據使用者報告，這在 MIUI 這樣的 💩 系統上可能會出現問題。</sub>

> 根據使用者報告及調查，「修復程式間互動」在一些高度修改的系統（至少包括 💩 一加）上不工作。我們將會在未來切換到一個完全不同的方案。

## 4.4.1 (2020-05-01)

- 修復「檔案監視」頁面卡頓
- 修復「可訪問資料夾」-「其他程式的檔案」顯示錯誤

## 4.4.0 (2020-04-29)

- 修復程式間互動：移除 "startActivity hook"<sup>**〔1〕**</sup><sup>**〔2〕**</sup>
- 修復在一些情況下改變「預設隔離儲存空間位置」會一直等待
- 正確地實現「向上」（ActionBar 中的箭頭）<sup>**〔3〕**</sup><sup>**〔4〕**</sup>（但很悲傷，甚至系統程式也沒有做對 😰）
- 為所有顯示於系統欄下的列表修復 edge effect（幾乎所有程式都沒做對這個 😋）
- 因為相簿預覽在 Android R 上壞掉所以暫時隱藏

<sub><b>〔1〕</b>這會產生問題。</sub>
<br><sub><b>〔2〕</b>在 Android 10+，暴露 `file` uri 會導致崩潰，垃圾程式應該已經做出改變。我們不再需要去「幫助」它們。</sub>
<br><sub><b>〔3〕</b>根據<del>上古</del>規範，「返回」應導航至前一螢幕但「向上」應導航至邏輯上的上一級。例如，從 B 進入 A 的一個深層頁面，「返回」返回到 B 但是「向上」去往 A 的上一層。（這也需要 B 做對）</sub>
<br><sub><b>〔4〕</b>在 Android R 開發者預覽版本中，Google 弄壞了這個「沒人用的東西」，因此「向上」仍然像「返回」一樣運作。</sub>

## 4.3.1 (2020-04-05)

- 新增一個簡單一些的提交規則方式
- 修了不能為非主使用者的應用程式新增「可訪問資料夾」-「其他應用程式的資料夾」規則的問題
- 修了一些 UI bug

## 4.2.3 (2020-03-24)

- 解決與以 `setApplicationHiddenSettingAsUser` 為原理的凍結類應用程式一起使用時出現的問題

## 4.2.2 (2020-03-22)

- 修復程式設定中線上規則早於可訪問資料夾載入導致網路較差時體驗糟糕的問題

## 4.2.1 (2020-03-21)

- 改變「新程式通知」及「匯出被隔離的檔案」規則的通知的實現，這可以繞過 💩 MIUI 的系統 bug <sup>**〔1〕**</sup>以及另一個祖傳小問題 <sup>**〔2〕**</sup>
- 增強模組版本現在線上獲取
- 「可訪問資料夾模板」的應用程式列表現在正確支援多使用者
- 更多防呆設計

<sub>**〔1〕** 在不明確的情況下，MIUI 會在 system_server 中對 startActivity 傳入的 Intent 中的 Bundle 進行反序列化。如果 Bundle 中包含非系統的 Parcelable，則反序列化會失敗且無法復原，應用程式只會收到空白的 Bundle。</sub>
<br><sub>**〔2〕** 如果資料結構發生變化，且安裝新版本應用程式後尚未更新核心服務，則出現通知時應用程式會崩潰。</sub>

## 4.2.0 (2020-03-14)

- 為啟動較早的系統程式啟用隔離不再會有問題（但是，以防萬一，你仍需要[做好準備](./guide/enhanced_mode/install.html#無法進入系統（通常是由於隔離了系統元件）)）
- 完全修好恢復備份
- 修復特定的情況下程式失去響應（白屏）

## 4.1.7 (2020-03-10)

- 「匯出被隔離的檔案」規則現在參與「修復程式間互動」功能的計算（需要重新啟動受影響的應用程式才可以讓改動生效）
- 修復修改可訪問資料夾模板不會立刻生效的問題
- 修復由於系統更新導致的多使用者支援壞掉
- 為隔離重要系統程式及程式組的流程加入防呆設計

## 4.1.6 (2020-03-06)

- 可以使用內建 logcat 來取得開機 log（不再於啟動時清除 log & 修復 UI 不響應）
- 已解除安裝應用程式的「匯出被隔離的檔案」規則不再參與衝突檢查
- 修復一旦使用者進入其他頁面，「檔案監視」就不再重新整理的問題
- 修復極少數的「檔案監視」記錄不顯示的問題
- 修復罕見的被隔離的應用程式不啟動問題

## 4.1.5 (2020-03-04)

- 完全解決上個版本所解決的問題

## 4.1.4 (2020-03-03)

- 修复「禁止系統重新掛載」功能失效<sup>**〔1〕**</sup>

<sub>**〔1〕** 此功能應該只有 MIUI 11（或許只有中國大陸版本？）需要</sub>

## 4.1.3 (2020-03-01)

- 再次調整啟動核心服務的一部分的時機（在 MIUI 或許還有其他的奇奇怪怪的系統上，啟動太早或太晚都會有問題，太難了（
- 修復一個有關恢復備份的問題

## 4.1.2 (2020-02-29)

- 修復由 4.0.0 引入的部分人會出現購買資訊丟失的問題
- 新增「禁用匯出被隔離的檔案的通知」選項，因為在使用增強模式的「修復應用程式間互動」後通知沒有意義（該選項僅對新使用者預設啟用）
- 修復來自程式組的「匯出被隔離的檔案」規則在新增/更新/刪除時可能出現問題
- 修復恢復備份時部分應用程式無法被恢復的問題
- 修復數個有關「修復程式間互動」的問題

## 4.1.0 (2020-2-28)

- 為避免問題，所有非普通應用程式（uid < 10000）將在本次升級時停用隔離（根據回報，隔離 uid 1000 的應用程式可能會在 MIUI, OnePlus Oxygen OS 等重度修改系統上產生問題）
- 修復上個版本檔案監視不工作
- 修復上個版本可能的配置丟失

## 4.0.0 (2020-2-28)

- 修改程式名稱為「儲存空間隔離」，因為「重新導向」十分容易讓人誤以為是舊時代的「重新導向到 SD 卡」
- 正確支援 Android 系統的 `sharedUserId` 機制（幾乎所有部分都需要改動，上次更新到現在大部分時間都花費於此）
- 核心服務在「非正常重新啟動」後仍可正常運作
- 修復在 Android 10 上關閉隔離後儲存權限顯示為允許但實際為不允許且無法改為允許的問題
- 不再將 AOSP 程式視為已認證
- 現在如果有人沒事把 "Android" 資料夾重新命名為 "android" 甚至改來改去，「匯出被隔離的檔案」功能也能正常執行（到底是什麼人才會這麼無聊）
- 增強模式 v22：更早啟動核心服務中的一部分，這可以解決為非常早啟動的程式啟用隔離可能會導致無法開機的問題（對，這又是僅限 💩 MIUI 的問題）
- 增強模式及 Riru 版本號永遠不再顯示為未知
- 若重新安裝曾經啟用隔離的程式，原先的設定會被正確地恢復（是否啟用隔離的開關仍需要手動開啟）

## 3.2.2 (2019-12-22)

- 修復一個有關恢復備份的問題

## 3.2.0 (2019-12-18)

- 修復使用了增強模式時為非常早啟動的應用程式啟用隔離可能產生問題（對，這又是「為了繞過 💩 MIUI 的問題做出的改動」產生的問題）
- 幾乎改了每一處的 UI 改進

## 3.1.5 (2019-12-06)

- 退回 3.1.4 中的一些改動，因為在另外一部分人上又有問題（

## 3.1.4 (2019-12-05)

- 修復一個啟動過程的問題

## 3.1.3 (2019-11-24)

- 嘗試規避「禁止系統重新掛載」功能可能造成「重新啟動」的問題（注意，新的改變需要重新啟動後才會生效）
- 匯出被隔離的檔案（同步資料夾）功能會先刪除目標資料夾中同名的檔案，這是為了嘗試避免一些應用程式進行數個重新命名/移動等操作後「錯誤的」檔案被匯出的問題
- 增加本地規則預置字串以供關閉線上規則或網路不可用時使用

## 3.1.0 (2019-11-23)

- 增強模式：「修復程式間互動」現在可以處理對「下載管理器」的請求
- 修復在 Android 10 上儲存權限可能沒有正確授予的問題
- 其他小 BUG 修復與 UI 改進

## 3.0.0 (2019-11-21)

- 重新設計多處 UI，降低理解難度
- 重構多處 UI 相關部分，增加穩定性與流暢性
- 增強模式 v21：增加「禁止系統重新掛載」功能以避免系統觸發的重新掛載導致隔離失效（在 Android 9 以上可用）<sup>**〔1〕**</sup>
- 增強模式：加回「修復程序間交互」中的修改傳遞的文件路徑功能，但暫時只處理 `ACTION_VIEW`<sup>**〔2〕**</sup>，且不再經由儲存重新導向中轉<sup>**〔3〕**</sup>
- 重新設計在線規則，更加靈活

<sub>**〔1〕** 此功能應該只有 MIUI 11 需要</sub>
<br><sub>**〔2〕** 觸發反序列化 `extras` 很危險</sub>
<br><sub>**〔3〕** 即使我們什麼也不做，原始行爲在 Android 10 上已經會造成崩潰，我們沒有必要越庖代俎爲劣質應用「修復問題」</sub>

## 2.1.5 (2019-10-30)

- 修復一些 UI BUG

## 2.1.4 (2019-10-29)

- 改進一些核心部分的實現
- 修復一些 UI BUG

## 2.1.3 (2019-10-23)

- 繞過在 OnePlus 的 Android 10 上使用自動暗色主題會崩潰的問題（這個問題由 OnePlus 的引起）

## 2.1.1 (2019-10-23)

- 修復如果核心程序啟動晚於啟用的應用程式則該應用程式可能無法啟動的問題

## 2.1.0 (2019-10-22)

- 簡化允許訪問來自其他程式的檔案流程，現在只要是由其他程式建立的檔案都可以在「屬於其他程式的資料夾」中選擇
- 在每次程式啟動時檢查並授予權限，這可能解決由 MIUI 11 隨機篡改權限造成的問題
- 繞過在 Meizu 裝置上使用內建 su 時核心工作程序會被殺死的問題
- 臨時移除「修復程式間互動」中的修改傳遞的檔案路徑功能，因為這個功能在使用 plug-in 或 hot fix 技術的程式（常見於來自中國大陸地區的程式）中會產生問題，且目前主流程式應該都已使用 Content Provider 與其他程式共享檔案，移除此功能應該影響不大
- 其他 BUG 修復與大量 UI 改進

## 2.0.1 (2019-09-27)

- 修復「共享資料夾」規則實際沒有生效

## 2.0.0 (2019-09-27)

- 對「共享資料夾」及「同步資料夾」規則進行問題檢查（有問題的規則會被刪除有問題的部分或禁用），在下個版本會針對這個這個問題提供更加詳細的提示及教程
- 修復數個有關「同步資料夾」規則的問題
- 修復獨立「修復程式間互動」開關壞掉
- 增強模式 v20.1：修復「修復程式間互動」功能在 OnePlus Android 10（可能還有其他）上的問題
- 大量 UI 改進

## 1.9.1 (2019-09-09)

- 修復「修復程式間互動」可能沒有工作的問題
- 增加半透明狀態列及導航欄選項
- 修復數個 UI bug

## 1.9.0 (2019-09-08)

- 增強模式 v20.0：修復使用 [Adoptable Storage](https://source.android.com/devices/storage/adoptable) 時安裝在外接儲存卡的應用無效的問題
- 增強模式 v20.0：更改「修復程式間互動」功能的實現方法，不再會被「Xposed Taichi」破壞，同時也可能會解決一些其他的問題
- 增強模式 v20.0：「修復程式間互動」可單獨為每個程式開關
- 修復備份功能不能還原部分配置的問題
- 在 Android Q 上自動允許 `OP_REQUEST_INSTALL_PACKAGES`（因為其發生變化時會觸發系統重新掛載）

## 1.8.3 (2019-08-30)

- 修復一些 UI bug
- 修復「基礎模式」下的一個重大問題

## 1.8.2 (2019-08-27)

- 處理特殊系統程式（appId < 10000 或 appId > 19999, appId = uid % 100000）
- 不為特殊系統程式鎖定許可權
- 其他 bug 修復和 UI 改進

## 1.8.1 (2019-08-26)

- 改進選擇「可訪問資料夾」流程
- 可直接為「可訪問資料夾模板」選擇使用的應用
- 修復在 Android Q 上啟動服務時對已啟動的應用程式的重新導向會失效問題
- 修復長時間停留在主介面 CPU 佔用會越來越高問題
- 修復使用 API（暫未公開）的應用程式崩潰的問題
- 其他 bug 修復和 UI 改進

## 1.8.0 (2019-08-17)

- 選擇「可訪問資料夾」時可同時選擇多個模板及自訂
- 增加「資料夾分析」功能，獲知隔離儲存空間中資料夾大小
- 可訪問資料夾中選擇的資料夾不存在時會自動建立
- 一些些 UI 改進和 bug 修正

## 1.7.5 (2019-08-06)

- 修復「同步資料夾」功能壞掉

## 1.7.4 (2019-08-05)

- 在 Android Q 上使用 `FLAG_PERMISSION_SYSTEM_FIXED` 來固定權限
- 為 Huawei 裝置提供解決方法，[詳見此處](./guide/compatibility/huawei.html)
- 修復「同步資料夾」功能沒有嘗試處理「從目標資料夾移走檔案」事件
- 改進英語翻譯
- 其他小改動

## 1.7.2

- Fix "Code 5"
- Other bug fix

## 1.7.0

* Basic mode now works on Android Q beta 4
* Correctly handle hide/unhide (commonly used by "Freeze" apps)
* Change target SDK version to 29 (Android Q)

## 1.6.12

* Fix app list not refreshed after restoring backup
* Use a more reliable method to monitor app install/uninstall
* Notify user if no browser app available when opening help documents
* Fix a bug related "Fix app interaction issues" 
* Other bug fix
* UI improve

## 1.6.9

* Fix Enhanced mode not work for apps starts early than core service

## 1.6.8

* Fix apps not starting on new users
* Support Android Q beta 3 (including Enhanced mode)
* Remove the ability to choose "Android/sandbox" as isolated storage path since from Q beta 3 the system sandbox is only used for apps which declared support the sandbox

## 1.6.7

* Clear config (app info - storage - clear/manage data) feature dose clear all configs now
* Filter duplicates or incorrect mounts in the final stage to avoid problems from user misuse
* Fix "Fix app interaction issues" may incorrectly handle files in `Android/data(media, obb)/package`

## 1.6.6

* Fix app interaction issues (Enhanced mode): Grant content uri permission
* UI improve

## 1.6.4

* Fix app interaction issues (Enhanced mode): Always convert file uri to content uri on Android Q
* Enhanced mode: remove disable file uri expose check since it is meaningless
* Allow choosing "Android/sandbox" as isolated storage path on Android Q
* Other bug fix

## 1.6.3

* Enhanced mode works on Android Q
* Enhanced mode: force disable file uri expose check for Android Q system ui
* Improve App settings UI
* Try fix config lost (should be extremely rare), add "Debug info" for users to investigate this problem
* Fix storage permission can't be revoked if redirect is already disabled

## 1.6.2

* Add "View gallery as this app", you can learn which photos the app can access
* Bug fix & UI improve

## 1.6.0

* Works on Android Q DP2 (enhanced mode not supported yet)
* Change behavior, mount Android/media/xxx & Android/obb/xxx by default
* Huge UI improve
* Fix "Fix app interaction issues" never worked on some devices

## 1.5.7

* Continue fixing bugs caused by "Fix app interaction issues"
* Continue renaming options

## 1.5.6

* Fix new storage permission method breaks on MIUI
* Fix "Fix app interaction issues" feature causes app breaks on some situations (if extra contains Parcelables from non-BootClassloader)

## 1.5.5

* (Android 6.0-7.1) Fix "Fix app interaction issues" feature cause app crash or all media not shown
* Continue renaming options, app name would even change in the future
* Reduce extra app launching time
  
  On my OnePlus 3T, average extra time reduced from 0.3s to 0.16s
  
  * Enforce storage permission with API (do not need check everytime), save average 0.04s
  * (only on 7.0+) Limit "File monitor" hook target, save average 0.1s
  
## 1.5.3

* Enhancement module v19, please upgrade as soon as possible

  * "Fix app interaction issues": try bypassing the problem that apps use "Tencent app protect" (腾讯乐固) will crash (v19)
  * "Fix app interaction issues": fix some media are filtered incorrectly (app 1.5.1, v19)
  * "Fix app interaction issues": fix app may crash when "Access files from other redirected app" rules enabled (v18.1)

## 1.5.0

* New Enhancement module v18
  
  Rewrite "Fix file uri" feature, upgrade to "Fix app interaction issues" feature 
  
* UI change
* Rename some options, reduce the understanding difficulty

## 1.4.9

* Fix "Synced folders" feature is broken in 1.4.8

## 1.4.8

* Fix regex check of "Synced folders" rules is not proceed when enabling the rule
* Revoke app storage permission automatically when disabling redirect
* Other bug fix

## 1.4.7

* Fix Enhancement module installation error reporting
* Fix Google purchase issue reporting
* Bad connection with Google Play will not freeze the whole app forever (but 5s)
* Fix "Fix file uri" feature in Enhancement module may sometimes crash redirected app 
* Correctly report some type of error on start
* Other bug fix

## 1.4.6

* Improve Enhancement module installation detection and provide solution
* Improve "Invalid license" page
* Bug fix

## 1.4.4

* Bug fix

## 1.4.2

* Report Enhancement module not correctly installed
* Improve home

## 1.4.1

* Fix license check

## 1.4.0

* New home page
* Rename/re-layout options, reduce the understanding difficulty

  * "Non-redirect folders" -> "Read/writable folders in real storage"
  * "Link" -> "Synced folders"

* New Enhancement module v17, not more "I can't open redirected apps"
* Fix tons of bugs

## 1.3.3

* Fix bug of Enhance module v16

## 1.3.2

* Enhance module v16, fix a problem related to passing file uri
  (Example: can't open a received file in WeChat)
* New native starter (for some strange devices without executables like `chmod`, `rm`)
* Fix bugs related to link feature
* Other minor bug fix

## 1.2.2

* Fix mask template for link rule editor
* Add "Link function only" filter in "Logcat"
* Minor bug fix

## 1.2.1

* Add "Kill Media Storage on start" option
  (on some devices, Media Storage can use all CPU on boot, kill it can solve the problem
  (it can be started by other apps later))
* Add mask template for link rule editor
* Try to detect no log
* Minor bug fix

## 1.2.0

* Add "Shared folder" to solve the problem that files created by
  a redirected app can't be used by another redirected app
* Refreshed detail UI
* Enhanced "Redirect storage viewer"
* Enhanced filter for "File monitor"
* Enhance module v15, fix the problem that redirect apps can't move files between specific folders
  (Example: bilibili can't save gif)
* Minor bug fix

## 1.1.4

* Enhanced "Non-redirect folders" template mechanism
* Show conflicting rule info

## 1.1.2

* Simplified detail UI
* Try to support other su, confirmed support MagiskSU, SuperSU, LineageOS addonsu now
* Fix the problem that server may send wrong progress to client
  when change "Default redirect target"
* Delete redirected app config after that app uninstall
* Improve app list performance
* Improve chooser dialogs
* Improve File monitor
* Add non standard behavior check (use file monitor data)

## 1.0.2

* Fix UI not refreshed when add link rules online
* Fix the problem that "You have already own this item" happens on some Google Play users

## 1.0.0

* Add "Non-redirect folders" template, you can create different templates
  for different situations and apply them quickly
* Enhance module v14, changes behavior, may avoid some special problems on
  some devices
* Bug fix

## 1.0.0-rc9

* New logcat UI
* Fix unpaid state check
* Migrate to AndroidX library

## 1.0.0-rc8

* Improve user experience
* Minor bug fix

## 1.0.0-rc7

* Fix "Launch" button not work

## 1.0.0-rc6

* Improve user experience
* Bug fix

## 1.0.0-rc5

* Add White / Light blue theme
* Try to hide overlay packages
* Fix can't open installer in file browser
* Fix some link rules can't be added
* Bug fix

## 1.0.0-rc4

* Add manually set /data/media path for some special devices
* Bug fix

## 1.0.0-rc3

* Fix Android/data can be chosen as a "Non-redirect folder"
* Bug fix

## 1.0.0-rc1

* New theme
* New detail UI
* Add local link rule
* Multi-user support
* Fix backup bug, but backup files created before 1.0.0-rc1 is unavailable
* Try to detect real internal storage path

## 0.18.2-beta

* Fix bug

## 0.18.0-beta

* "Non-redirect folder" (old "Standard folder") is now customizable like "Redirect target folder"
* Add Backup & restore
* Works with LineageOS's addonsu, but some non-core feature may break, still recommended to use Magisk
* Fix crash when change filter in the main list
* Fix redirected files may not be moved when change redirect target folder in some cases

## 0.17.4-beta

* Fix link feature not on some (old? special?) devices
* Try to fix owner of linked files' is 0 on older Android system (chown ourselves)

## 0.17.3-beta

* Fix a critical bug that if an app's redirect target is set different
  from the default, it will not able to access files in public folders
* Fix others bugs in 0.17.x

## 0.17.1-beta

* Add set redirect target folder (globally and pre-app)
* Add app installed notification
* Also kill by uid when force stop package (for OnePlus stock ROM)
* Improved "Share helper"
* Bug fix

## 0.16.4-beta

* Add file stat for Redirect storage viewer
* Fix the problem that anyone is displayed as purchased
* Auto clean old server files
* Try to "fix" IAP problem "You have already own this item"
* Link files from target to source when enabling link rules

## 0.16.2-beta

* Enhanced File monitor: load more & filter by path / app
* Force grant storage permission for redirected apps
* Try to fix bug of link function (when create and delete files in a very short time)
* Create ".nomedia" file in Android/data/xxx automatically
* Add shortcut for File monitor (Android 7.1+)
* Fix crash when open help if no browser app installed
* Add more tips
* Fix bugs in 0.16.1 / 0.16.2

## 0.15.8-beta

* Files downloaded by redirected apps can be managed in Android's Files (DocumentUI) app
* Fix log parse (only some special ROM)
* Add "Show disabled apps" filter
* New app list style
* In-app logcat now catches logs from more sources

## 0.15.4-beta

* Fix reboot when new file created in folders monitored by link function (only on 8.0)
* Fix a bug of file monitoring function of the link function

## 0.15.2-beta

* Try to fix crash on boot (only some users)
* Fix log parse (only some special ROM)
* Auto shrink file monitor database file

## 0.15.1-beta

* Enhance module v12.1

  Fix problem that all apps unable to access the storage (only appears on some devices), but it brings some minor problems (only happens on limited situation), check Help for detail.

* Other minor changes

## 0.15.0-beta

* New Enhance module (check Settings and Help)
* File monitor: monitor file access in public storage (requires "Enhance module")
* Try to fix bugs in 0.14.3

## 0.14.3-beta

* Try to fix bugs in 0.14.1 / 0.14.2
* Magisk module v10 (check Help & support)

## 0.14.1-beta

* Provide new Magisk module to solve the problem that redirected apps still create files sometimes, check Help & support for detail
* New native daemon
* Adapt Magisk v16.4
* Improve UI
* App list will be loaded correctly now even if instant app is installed (Android 8.0's bug)

## 0.12.13-beta

* Link rule: fix the problem that some files are skipped

## 0.12.12-beta

* Fix the problem that some processes are ignored on **some special ROMs**
* Link rule: ignore file which extension ends with _tmp_ or _temp_ by default

## 0.12.11-beta

* Some bug fix

## 0.12.7-beta

* Fix the problem that some process is not redirected (from 0.12.6)
* Link rule: handle file downloaded notification by our app

## 0.12.6-beta

* Should work on Android P DP1
* Link rules ignore .tmp / .temp by default
* Some minor changes

## 0.12.5-beta

* Update Magisk module (download from Help & support)
* Some minor changes

## 0.12.4-beta

* New link rules UI
* Mark outdated (not exists in online configuration) link rules
* Try to avoid some magic
* Add "Share helper"

## 0.12.3-beta

* Add more log for starter
* More core files to /data/adb
* Try to avoid strange behavior on some devices when using Magisk module

## 0.12.1-beta
* **The core feature should works perfectly on all devices**
* Provide Magisk module for starting before all apps (see Help & support)

## 0.12.0-beta

* Fix major issue on some devices
* Add tip when log may be disabled
* Linked files will only be deleted when redirected app is running in the foreground

## 0.11.2-beta

> Version 0.11.2 changed some implementation details, to avoid some magic problems on users who have problems using version 0.11.0

* Should work on more devices now, to the user who still have problem, the problem should not break all things
* Storage permission (both runtime permission and appops) will be automatically grant to redirected apps (to avoid magic problem)

## 0.11.0-beta

> In 0.11.0 and later version, we use a completely different method of implementation. The problem that hard-coded `/sdcard` cannot be redirected is solved.
> If you have problem using the new version, please contact us for help.

* A completely different implementation, guarantee that all files will be redirected (**Read help in "Help & support" for more detail**)
* Server can be restarted without rebooting (**Reboot is required if upgrade from 0.9.x**)
* Add redirected file browser
* Add logcat
* Add detailed help
* Add "verified app" mark which means the app will never write files in non-standard dictionaries
* Remove "Block writing file" feature since it is unnecessary now
* Fix bug about link