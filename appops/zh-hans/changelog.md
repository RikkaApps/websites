# 变更日志

:::details Root 模式已被删除

仅使用纯 root（执行命令）无法在 Android 10+ 保证核心功能。阅读[这个]([./guide/technical/system_behaviors/])了解更多详细信息。

App Ops 的旧版本看起来“可以正常工作”，但是在某些情况下，您的更改实际上不起作用。例如，在 Android 10 中，一旦您从系统更改了位置权限，旧版 App Ops 的更改将永远无法生效（即使看起来成功地更改了）。

如果您使用的是较旧的系统，并且希望使用旧的 root 模式，则仍然可以[下载旧版本（v3.1.1）](https://github.com/RikkaApps/App-Ops-issue-tracker/releases/download/files/appops-v3.1.1.r956.eec61b4.apk)。
:::

## 5.0.0 (2020-08-22)

此更新解决了一个隐蔽但长期存在的问题。因为 Android 10 以下只在极少情况才出现，且升级到 Android 10 以后已有的设定不会被影响，这个问题在最近才浮出水面。一个典型的例子是，在 Android 10 中，一旦您从系统更改了位置权限，对旧版 App Ops 的更改将永远无法生效（即使看起来成功地更改了）。

这背后包含很多工作，请阅读[技术细节](./guide/technical/system_behaviors/)。

**您应该知道的内容：**

- 您在 App Ops 中看到或更改的内容现在反映最终状态
- 旧版本中的“拒绝”被重命名为“忽略”
- 不再支持旧备份，因为它们缺少必要的信息（甚至可能包含错误的信息）
- 对于“托管设备管理员模式”，当前只有 Island v5.0+ 支持新的必要的 API
- 对于“托管设备管理员模式”，备份的一部分来源于历史用户操作，这是因为管理员应用没有足够的权限来获取准确的状态（这是系统限制）

其他变化：

- 模板：不止“忽略”（“拒绝”），现在可以在模板中使用任何选项
- 备份：还原时更加灵活
- 使用情况监控器：尝试减少“错误”报告（有时系统始终报告应用正在使用“位置”，即使该应用已经不再运行也是如此）
- 使用情况监控器 & 剪贴板监视器：加入“排除系统应用”选项

## 4.2.3 (2020-07-18)

- Add Turkish translation
- "Usage monitor" fix

## 4.2.2 (2020-07-16)

- 解决了从 v4.0.0 起出现的小概率随机停止运行问题
- “使用情况监视器”改进
- 重新整理字符串，任何人都可以参与翻译

## 4.2.0 (2020-07-12)

- 增加“使用情况监视器”（需要 Android 9 以上和通过 root 启动的 Shizuku）

  当应用使用位置、相机或麦克风时收到提示

## 4.1.1 (2020-07-10)

- 剪贴板监视：可设定“临时访问时限”
- 剪贴板监视：修复一个有关“排除的应用”的 UI 问题
- 修复在 Android 10 以上，从 v4.0.0 起建立的备份可能损坏的问题
- 正确地回报来自托管设备管理员模式的错误
- 暂时不使用 AAPT2 的资源优化功能，这可能可以解决部分用户出现的随机的设置界面崩溃问题

## 4.1.0 (2020-07-09)

- 剪贴板监视：增加“窗口位置”和“排除的应用”选项
- 修复一旦主要进程死掉，“新应用行为”功能就会停止工作
- 修复权限视图 UI 刷新问题

## 4.0.1 (2020-07-05)

- 修复在某些情况下监视服务非正常地启动

## 4.0.0 (2020-07-04)

用最新技术（部分）重写。具有更多改进和新功能的全面重写将在不久的将来出现。

- 新功能：剪贴板监视（需要 Android 10 以上和通过 root 启动的 Shizuku）<sup>**〔1〕**</sup>
- 在 Android 10 及 11 上工作
- 用户界面翻新
- 修复一个有关恢复备份的问题
- 永远使用内置的名称<sup>**〔2〕**</sup>
- 对于免费版本，移除 Google Ads（转而推荐我们的其他应用）
- 对于崩溃报告，使用 AppCenter 替代 Firebase Crashlytics（此外，崩溃报告可关闭）
- 目标 API 30
- 不再支持系统插件模式
- 不再支持 Android 6.0
- 不再支持古老的以 LineageOS 为基础的 ROM 中的询问模式<sup>**〔3〕**</sup>

<sub><b>〔1〕</b>从监视中排除应用的功能将在下个版本中加入</sub>
<br><sub><b>〔2〕</b>之前，“权限”的名称被优先使用。但是随着 Android 在每个版本间不断改变权限名称，权限名称越来越不准确。</sub>
<br><sub><b>〔3〕</b>根据用户报告，一些老旧的三星设备表现得有这个功能，但是改为“询问”将会导致系统无法启动。</sub>

## 3.1.1 (2019-08-03)

- 修复无法编辑模板

## 3.1.0 (2019-08-02)

- 操作系统应用时提供更加明显的警告
- 为套用模板对话框提供编辑与添加功能
- 修复使用托管设备管理员模式时，如果先使用 Island 之后更换为其他也会被判定为正在使用 Island

## 3.0.3 (2019-07-29)

- 小 bug 修复
- 提供新的包含文档的网站：<https://appops.rikka.app/zh-hant>

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