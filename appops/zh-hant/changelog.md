# 變更日誌

::: details Root 模式從 v4.0.0 被移除（<b>輕觸檢視我們為什麼必須這麼做</b>）

### 為什麼 root 模式必須被刪除？

首先，舊的 root 模式實現假定系統的某些內部實現，如果系統發生更改（不限於大版本升級），則會出現問題。你會發現 v3.1.1（最後一個帶有 root 的版本）無法在 Android 11 和某些 Android 10 上執行。

另外，將會在 v4.3.0 解決的核心功能不正常的問題（在 Android 10 以上會出現）也不幾乎不可能通過舊 root 實現（在下面查看下一部分）。

最後，除了使用者必須安裝 Shizuku 以外，Shizuku 模式在任何方面都勝過 root 模式（請參閱以下說明）。

即使我們繼續保留 root 模式，root 模式的體驗已經變得越來越差，總有一天也需要被刪除。

### 什麼是 Shizuku？

Shizuku 從 2017 年開始的一個免費且開源 （[GitHub](https://github.com/RikkaApps/Shizuku)）的應用程式。它旨在服務多個需要 root 或 adb 的應用程式。不僅 App Ops，一些其他開發者的應用程式也在使用 Shizuku（其中許多未在 Shizuku 的網站上列出）。

### 為什麼 Shizuku 比純 root 更好？

與使用純 root 相比，使用 Shizuku 快非常多（你可以感受到這一點），消耗的資源更少。

如果你是高階使用者和開發人員，則可以閱讀 <https://shizuku.rikka.app/introduction.html#shizuku-vs-old-school-method>。

### 為什麼不內建 Shizuku？

如果每個使用 Shizuku 的應用程式都如此，則你的裝置上將執行多個「Shizuku」。這顯然不是一個好主意。

### Shizuku 會消耗電池嗎？

不，僅當其他應用程式通過 Shizuku 使用 API ​​時才使用 CPU。這意味著功耗可忽略不計。

### 我還是想要舊版本

[下載舊版本（v3.1.1）](https://github.com/RikkaApps/App-Ops-issue-tracker/releases/download/files/appops-v3.1.1.r956.eec61b4.apk)

:::

::: details 核心功能更新/修復（計劃於 v4.3.0 釋出，對於 Android 10 及以上必不可少）
  
  從 Android 10 起，系統的權限實際上就和 appops 耦合（在 Android 11 上高度耦合），即當你嘗試在系統權限頁面修改權限時，不僅會執行時權限會被修改，appops 也會被修改。
  
  但是，系統內部有兩種不同的型別的 ops，系統和舊版本 App Ops 修改的不是同一種，因此你不能在舊版本中看到系統作出的修改。此外，系統所修改的那種型別優先於舊版本 App Ops 所修改的型別，這導致部分情況下在舊版本 App Ops 中作出的修改是無效的。**一個典型的例子是，一旦在系統設定中設定了“僅在使用時允許”，在舊版本 App Ops 作出的修改實際不起作用。**

  因此，我們除了完全跟隨系統行為以外別無選擇。下面的“與系統完全相同”背後遠比一些人可能的想象要複雜，這也是刪除舊 root 模式的原因之一。

| 名稱                           | 舊行為                 | 新行為                                                      |
|--------------------------------|------------------------|-------------------------------------------------------------|
| 使用時允許<sup>**〔1〕**</sup> | 修改 ops 為 foreground | 與系統完全相同                                              |
| 每次詢問<sup>**〔2〕**</sup>   | （不存在）             | 與系統完全相同                                              |
| 允許                           | 修改 ops 為 allow      | 與系統完全相同                                              |
| 拒絕                           | 修改 ops 為 ignore     | 與系統完全相同                                              |
| 靜默拒絕（暫定名稱）           | （不存在）             | 修改 ops（**另一種型別**）為 ignore<br>修改執行時權限為允許 |
| 預設                           | 修改 ops 為 default    | （不變）                                                    |

<sub><b>〔1〕</b>Android 9+，部分權限可用</sub>
<br><sub><b>〔2〕</b>Android 11+，部分權限可用</sub>

  對於託管裝置管理員模式，需要等待各個管理員程序提供需要的 API。

:::

## 4.2.2 (2020-07-16)

- 解決了從 v4.0.0 起出現的小概率隨機停止執行問題
- 「使用情況監視器」改進
- 重新整理字串，任何人都可以參與翻譯

## 4.2.0 (2020-07-12)

- 增加「使用情況監視器」（需要 Android 9 以上和通過 root 啟動的 Shizuku）

  當應用程式使用位置、相機或麥克風時收到提示

## 4.1.1 (2020-07-10)

- 剪貼簿監視：可設定「臨時訪問時限」
- 剪貼簿監視：修復一個有關「排除的程式」的 UI 問題
- 修復在 Android 10 以上，從 v4.0.0 起建立的備份可能損壞的問題
- 正確地回報來自託管裝置管理員模式的錯誤
- 暫時不使用 AAPT2 的資源優化功能，這可能可以解決部分使用者出現的隨機的設定介面崩潰問題

## 4.1.0 (2020-07-09)

- 剪貼簿監視：增加「視窗位置」和「排除的程式」選項
- 修復一旦主要程式死掉，「新程式行為」功能就會停止工作
- 修復權限檢視 UI 重新整理問題

## 4.0.1 (2020-07-05)

- 修復在某些情況下監視服務非正常地啟動

## 4.0.0 (2020-07-04)

用最新技術（部分）重寫。具有更多改進和新功能的全面重寫將在不久的將來出現。

- 新功能：剪貼簿監視（需要 Android 10 以上和通過 root 啟動的 Shizuku）<sup>**〔1〕**</sup>
- 在 Android 10 及 11 上工作
- 使用者介面翻新
- 修復一個有關恢復備份的問題
- 永遠使用內建的名稱<sup>**〔2〕**</sup>
- 對於免費版本，移除 Google Ads（轉而推薦我們的其他應用程式）
- 對於崩潰報告，使用 AppCenter 替代 Firebase Crashlytics（此外，崩潰報告可關閉）
- 目標 API 30
- 不再支援 system plugin 模式
- 不再支援 Android 6.0
- 不再支援古老的以 LineageOS 為基礎的 ROM 中的詢問模式<sup>**〔3〕**</sup>

<sub><b>〔1〕</b>從監視中排除應用程式的功能將在下個版本中加入</sub>
<br><sub><b>〔2〕</b>之前，權限的名稱被優先使用。但是隨著 Android 在每個版本間不斷改變權限名稱，權限名稱越來越不準確。</sub>
<br><sub><b>〔3〕</b>根據使用者報告，一些老舊的三星裝置表現得有這個功能，但是改為「詢問」將會導致系統無法啟動。</sub>

## 3.1.1 (2019-08-03)

- 修復無法編輯模板

## 3.1.0 (2019-08-02)

- 操作系統程式時提供更加明顯的警告
- 為套用模板對話方塊提供編輯與新增功能
- 修復使用託管裝置管理員模式時，如果先使用 Island 之後更換為其他也會被判定為正在使用 Island

## 3.0.3 (2019-07-29)

- 小 bug 修复
- 提供新的包含文档的网站：<https://appops.rikka.app/zh-hans>

## 3.0.2

- 修复托管设备管理员模式坏掉
- 修复错误的依赖

## 3.0.0

- 托管设备管理员模式：修复当使用 Island 时新应用安装可能不被出发
- （实验性）托管设备管理员模式：支持多用户（需要 Island 3.8+ 作为设备管理员，2019/7/24 在 Google Play alpha 通道提供)
- 模板：默认勾选“跳过检查”
- 模板：改进编辑 UI
- 如果一个 op 不被原生 Android 包含，显示提示
- 其他 bug 修复和 UI 改进

## 2.9.9

- 托管设备管理员模式：修复一些与 Island 支持有关的 bug
- 特权模式：修复总是需要旧式 Shizuku
- 显示所有工作模式（解释原因如果不支持）

## 2.9.8

- （实验性）托管设备管理员模式支持 Island 应用的“上帝模式” (com.oasisfeng.island)
- 特权模式：修复“adb 权限不足”提示从未显示（主要只给 MIUI）

## 2.9.7

- Try to fix "Code 5"

## 2.9.5

- Bring back access/reject time for Android Q beta 4 (but as Android Q changed data format and not open sourced yet, no detailed times like Android 9)
- Fix "Code 5 debug message: null" (by upgrading lib from Google :(
- Minor UI tweaks

## 2.9.4

- Target 29
- 修 2.9.2 带来的 bug

## 2.9.2

- 修复升级到 2.9.1 后模板丢失
- 通知语言现在应该完美跟随应用内语言设置

## 2.9.1

- 增加托管设备管理员模式（使用来自支持的设备管理员应用的 API）
- 修一些 bug
- 备份包含模板

## 2.8.2

- 修复 root 模式在 Android Q beta 3 上不工作
- 修复在低版本 Android 上少数功能可能不正常
- 修复“显示框架应用”选项在 root 模式下不工作
- 修复 root 模式下 overlay package 们没有被过滤

## 2.8.1

- 在 Android Q beta 3 上能用（但还不能看使用时间）
- 存储空间选项在 Q beta 3 上无效，这是系统 bug
- 暂时在 Q beta 3 上隐藏“存储空间沙盒”选项（默认关闭除非应用声明，如何强制开启方法尚不明确）
- 当未设定默认模板时自动设定第一个（用于拯救从不阅读提示的傻子）

## 2.8.0

- 支持 Android Q 添加的新 op
- UI 改进

## 2.7.0

- 在 Android 9 上再也不会出现“需要重启应用”
- 使用特权模式时不再会出现随机错误（需要升级到 Shizuku v3 并强行停止 App Ops）

## 2.6.4

- 更新其他语言的翻译
- 修复 bug

## 2.6.3

- 更新其他语言的翻译
- 修复 bug

## 2.6.2

- root 模式支持多用户（实验性）
- 为根据权限分组的列表加入“已禁用有限”选项
- 为 Android 9 用户优化控制“在后台运行”时的 UI
- 修复 bug

## 2.5.10

- 增加为 Android 9 准备的帮助
- 修复 bug

## 2.5.9

- 修复一个涉及多用户的 bug

## 2.5.8

- 修复 bug

## 2.5.7

- 简化详情界面 UI
- 修复当一些 op 的 opToSwitch 所对应的权限没有申请时就无法更改那些 op 的 bug

## 2.5.5

- 修复无 root 在 Android 9 上首次使用特权模式的流程
- 修复编辑中的模板如果进行旋转屏幕等操作会丢失已编辑内容的问题
- 编辑模板按下返回会询问是否保存
- 修复在模板名称按下回车会爆炸
- 默认隐藏未知的 op（对，又是你 MIUI）

## 2.5.3

- 修复一些关于新应用监控的问题
- 可能修复一些打开就爆炸

## 2.5.2

- 修复在 2.5.0 中系统插件模式无法使用
- 修复错误信息没有被正确展示
- 修复在 Android 7.x 上无法正常工作
- 修复部分 Google Play 用户会出现“您已拥有此物品”的问题
- 为了让监控新应用安装功能更加可靠，现在它需要运行一个前台服务（仅 Android 8.0 以上），
  但你可以禁用或将其设定为最低重要程度来避免被打扰

## 2.5.0

- 为 Android 9+ 移除系统插件（因为只有在插件拥有系统签名时才能工作）
- 简化系统插件安装，只提供 zip 下载
- 支持 Android 9 添加的 appops 特性（如 MODE_FOREGROUND 和 OP_RUN_ANY_IN_BACKGROUND）
- 新的 UI
- 多组模板
- 解决当长时间后返回， app 无法使用的问题

## 2.4.1

- 更新翻译
- 尝试修复部分付费用户会被当作未付费用户的问题

## 2.4.0

- 提升 root 模式速度

## 2.3.13

- 尝试修复 root 模式在部分设备无法工作
- 改变 Android 8+ 上的图标

## 2.3.12

- 尝试修复在恢复备份时可能崩溃

## 2.3.11

- 为所有列表添加全选（长按 -> 菜单里的三个点点 -> 全选）
- 系统插件模式现在为 Magisk 用户提供 template v1500 的模块

## 2.3.10

- 修复当恢复大量备份时崩溃
- 修复提示对话框内容不可以滚动的问题

## 2.3.9

- 修了在 Android P DP1 上崩溃（你可能会看到 "Detect problems with API compatibility" 的提示，但是对 App Ops 来说不使用隐藏 API 是不可能的）

## 2.3.8

- 增加“显示全部模式”选项（不懂是什么就别打开）

## 2.3.7

- _始终显示权限（操作）_ 将会排除一些绝对不可能的情况
- 增加被安装到外部存储的错误提示（都 8012 了怎么还有这种人）
- 更新葡萄牙语（巴西）翻译
- 移除一些未使用资源
- 修复创建备份坏掉

## 2.3.6

- 修了总是提示 Google play 不可用
- 增加一个显示全部支持的权限（操作）的列表
- 在应用列表中标记系统应用
- 增加 _始终显示的权限（操作）_ 列表，每个应用都会被当作可能使用选中的权限
- 调整设置 UI

## 2.3.5

- 修复备份预览坏掉
- 增加本地网络（特权模式需要使用）受限时的提示
- 处理一些未捕获的错误

## 2.3.4

- 修复 root 模式下重置无效的问题（真·上古 bug）
- 修复从应用列表重置或应用模板不会刷新 UI 的问题

## 2.3.3

- 修了两个上古 bug

## 2.3.2

- 修了 2.3.0 留下的 bug
- 异步读取其他信息（比如已修改的项数），因此现在读取应用列表速度会非常快

## 2.3.0

- 为应用列表增加已修改的项数
- 极大加速 root 模式下获取 appops 配置的速度
- Oreo 风格的应用详情视图
- 支持 Android 8.1 的亮色导航栏
- 修改一些令人疑惑的 UI
- (免费用户) 因为 Google 将在 2018 年 3 月后移除快捷原生广告，所以换回旧的横幅广告
- 修复一些和多用户有关的问题
- (付费用户) 修复在应用安装后，即使备份存在且打开了恢复备份，只要模板存在就被套用的问题
- 因为一些原因，移除对旧的 Shizuku （特权模式）的支持

## 2.2.6
- 修复 Shizuku Manager 比 App Ops 安装晚会无法使用的问题

## 2.2.5
- 为新应用监控添加开机启动
- 添加 Portuguese (Brazil) 语言

## 2.2.4
- 增加针对 adb 有读取 appops 配置但没有写入权限时的提示（比如 MIUI MIUI 和 MIUI）
- 使用新的 build tool 来避免一个只在部分低版本第三方 ROM 上出现的可怕的问题 ([看这里](https://issuetracker.google.com/issues/64434571))

## 2.2.3

- 修复_特权模式_使用旧版 _Shizuku Manager_ 可能会崩溃的问题
- 从通知套用模板时不再检查是否有 `RUN_IN_BACKGROUND`
- 修复切换工作模式时设置崩溃

## 2.2.2

- 修复选择_特权模式_时没有安装 _Shizuku Manager_ 会崩溃

## 2.2.1

- 增加指定界面语言的功能
- 更新翻译
- 通过反射 `PackageInfo#overlayTarget` 的方式过滤 overlay apps
- 修了新应用通知上的按钮在部分设备上可能不能用的问题
- 套用模板时不再检查是否有 `RUN_IN_BACKGROUND`

## 2.2.0

- 修复套用模板或恢复备份后通知不能消除的问题
- 重新规划主菜单项目
- 将“显示框架应用”移至主菜单
- 增加“根据更新时间排序”，“根据安装时间排序”
- 实验室增加 "Show target 0 apps" (为了过滤掉 substratum overlay)
- 重构设置向导，同时增加更多说明
- 调整设置 UI
- 修复通知不能显示自适应图标 (8.0+)

## 2.1.12 (beta)

- 在获取应用列表是请求更少数据

> 解决部分设备上只能获得部分应用（甚至出现 "Package Manager has died"）的问题。

> 会加快列表刷新速度。

> 但没有那些数据，we have to remove "show apps without icon" option because we can't know
if the app have a entrance, and "run in background" (Android 7.0+) will always shown because we can't
speculated if the app have background behavior.

- （特权模式）让 Shizuku manager 展示服务没有运行
- 新的版本号明明规则
- 适配 Font Provider API v8

## 2.1.11

- Fix system plugin broadcast does not work
- Fix notification didn't show when plugin stopped
- Improve Settings UI for RTL language
- 引入 Shizuku v2 (特权模式)，加入 Shizuku Manager 的测试来尝试
- Font Provider 默认开启

## 2.1.10

- 当系统插件权限不足时给用户更友好的提示
- 再次修复使用系统插件时有时需要手动刷新
- 更新 Font Provider 依赖到 1.3.2，应该没问题了
- 增加更多帮助
- 修了一些对话框的按钮颜色

## 2.1.9

- Fix NPE in WorkService
- Move system plugin download to GitHub release
- Fix crash when open help in runtime permission tip dialog
- Notify list refresh when system plugin connected
- Update translation
- Add translator's name to about

## 2.1.2 - 2.1.8

- 修复无法创建备份文件
- 实验室（包含未确定或实验性功能）功能入口现在总是显示
- Provide fastScroll drawable from AOSP to avoid crash on some devices
- Update help
- Fix test link in pro version
- 100% fix theme and night mode, it should work perfectly now
- Update adaptive icon for Android O
- Add tip of Runtime Permissions when entering app target 23+
- 改进的主题
- 提供一个新的选项来使用 "Noto Sans CJK Medium" 替换 "sans-serif-medium" 字体（需要配合 Font Provider 应用使用）
- Add tip for users can't use system plugin on Android O

## 2.1.1

- 增强的备份功能 (PRO)
  - 当用户改变权限设置后，设置会被自动保存至数据库。当应用在卸载后再次安装或是被使用设备管理器的冻结类应用（如[冰箱](https://play.google.com/store/apps/details?id=com.catchingnow.icebox)的免 root模式）禁用后重新启用后可以选择恢复。
- 增加详细的更新日志
- 新的更详细的帮助