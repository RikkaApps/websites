# Changelog

## 4.2.2 (2020-03-22)

- 修复应用设置中在线规则早于可访问文件夹加载导致网络较差时体验糟糕的问题

## 4.2.1 (2020-03-21)

- 改变“新应用通知”及“导出被隔离的文件”规则的通知的实现，这可以绕过 💩 MIUI 的系统 bug <sup>**〔1〕**</sup>以及另一个祖传小问题 <sup>**〔2〕**</sup>
- 增强模块版本现在在线获取
- “可访问文件夹模板”的应用列表现在正确支持多用户
- 更多防呆设计

<sub>**〔1〕** 在不明确的情况下，MIUI 会在 system_server 中对 startActivity 传入的 Intent 中的 Bundle 进行反序列化。如果 Bundle 中包含非系统的 Parcelable，则反序列化会失败且无法复原，应用只会收到空白的 Bundle。</sub>
<br><sub>**〔2〕** 如果数据结构发生变化，且安装新版本应用后尚未更新核心服务，则出现通知时应用会崩溃。</sub>

## 4.2.0 (2020-03-14)

- 为启动较早的系统应用启用隔离不再会有问题（但是，以防万一，你仍需要[做好准备](./guide/enhanced_mode/install.html#无法进入系统（通常是由于隔离了系统组件）)）
- 完全修好恢复备份
- 修复特定的情况下应用失去响应（白屏）

## 4.1.7 (2020-03-10)

- “导出被隔离的文件”规则现在参与“修复应用间交互”功能的计算（需要重新启动受影响的应用才可以让改动生效）
- 修复修改可访问文件夹模板不会立刻生效的问题
- 修复由于系统更新导致的多用户支持坏掉
- 为隔离重要系统应用及程序组的流程加入防呆设计

## 4.1.6 (2020-03-06)

- 可以使用内置 logcat 来取得开机 log（不再于启动时清除 log & 修复 UI 不响应）
- 已卸载应用的“导出被隔离的文件”规则不再参与冲突检查
- 修复一旦用户进入其他页面，“文件监视”就不再刷新的问题
- 修复极少数的“文件监视”记录不显示的问题
- 修复罕见的被隔离的应用不启动问题

## 4.1.5 (2020-03-04)

- 完全解决上个版本所解决的问题

## 4.1.4 (2020-03-03)

- 修复“禁止系统重新挂载”功能失效<sup>**〔1〕**</sup>

<sub>**〔1〕** 此功能应该只有 MIUI 11（或许只有中国大陆版本？）需要</sub>

## 4.1.3 (2020-03-01)

- 再次调整启动核心服务的一部分的时机（在 MIUI 或许还有其他的奇奇怪怪的系统上，启动太早或太晚都会有问题，太难了（
- 修复一个有关恢复备份的问题

## 4.1.2 (2020-02-29)

- 修复由 4.0.0 引入的部分人会出现购买信息丢失的问题
- 添加“禁用导出被隔离的文件的通知”选项，因为在使用增强模式的“修复应用间交互”后通知没有意义（该选项仅对新用户默认启用）
- 修复来自程序组的“导出被隔离的文件”规则在添加/更新/删除时可能出现问题
- 修复恢复备份时部分应用无法被恢复的问题
- 修复数个有关“修复应用间交互”的问题

## 4.1.0 (2020-02-28)

- 为避免问题，所有非普通应用（uid < 10000）将在本次升级时停用隔离（根据回报，隔离 uid 1000 的应用可能会在 MIUI, OnePlus Oxygen OS 等重度修改系统上产生问题）
- 修复上个版本文件监视不工作
- 修复上个版本可能的配置丢失

## 4.0.0 (2020-02-28)

- 修改应用名称为“存储空间隔离”，因为“重定向”十分容易让人误以为是旧时代的“重定向到 SD 卡”
- 正确支持 Android 系统的 `sharedUserId` 机制（几乎所有部分都需要改动，上次更新到现在大部分时间都花费于此）
- 核心服务在「非正常重新启动」后仍可正常运作
- 修复在 Android 10 上关闭隔离后存储权限显示为允许但实际为不允许且无法改为允许的问题
- 不再将 AOSP 应用视为已认证
- 现在如果有人没事把 "Android" 文件夹重命名为 "android" 甚至改来改去，“导出被隔离的文件”功能也能正常运行（到底是什么人才会这么无聊）
- 增强模式 v22：更早启动核心服务中的一部分，这可以解决为非常早启动的应用启用隔离可能会导致无法开机的问题（对，这又是仅限 💩 MIUI 的问题）
- 增强模式及 Riru 版本号永远不再显示为未知
- 若重新安装曾经启用隔离的应用，原先的设置会被正确地恢复（是否启用隔离的开关仍需要手动打开）

## 3.2.2 (2019-12-22)

- 修复一个有关恢复备份的问题

## 3.2.0 (2019-12-18)

- 修复使用了增强模式时为非常早启动的应用启用隔离可能产生问题（对，这又是「为了绕过 💩 MIUI 的问题做出的改动」产生的问题）
- 几乎改了每一处的 UI 改进

## 3.1.5 (2019-12-06)

- 退回 3.1.4 中的一些改动，因为在另外一部分人上又有问题（

## 3.1.4 (2019-12-05)

- 修复一个启动过程的问题

## 3.1.3 (2019-11-24)

- 尝试规避“禁止系统重新挂载”功能可能造成“重启”的问题（注意，新的改变需要重新启动后才会生效）
- 导出被隔离的文件（同步文件夹）功能会先删除目标文件夹中同名的文件，这是为了尝试避免一些应用进行数个重命名/移动等操作后“错误的”文件被导出的问题
- 增加本地规则预置字串以供关闭在线规则或网络不可用时使用

## 3.1.0 (2019-11-23)

- 增强模式：“修复应用间交互”现在可以处理对“下载管理器”的请求
- 修复在 Android 10 上存储权限可能没有正确授予的问题
- 其他小 BUG 修复与 UI 改进

## 3.0.0 (2019-11-21)

- 重新设计多处 UI，降低理解难度
- 重构多处 UI 相关部分，增加稳定性与流畅性
- 增强模式 v21：增加“禁止系统重新挂载”功能以避免系统触发的重新挂载导致隔离失效（在 Android 9 以上可用）<sup>**〔1〕**</sup>
- 增强模式：加回“修复应用间交互”中的修改传递的文件路径功能，但暂时只处理 `ACTION_VIEW`<sup>**〔2〕**</sup>，且不再经由存储重定向中转<sup>**〔3〕**</sup>
- 重新设计在线规则，更加灵活

<sub>**〔1〕** 此功能应该只有 MIUI 11 需要</sub>
<br><sub>**〔2〕** 触发反序列化 `extras` 很危险</sub>
<br><sub>**〔3〕** 即使我们什么也不做，原始行为在 Android 10 上已经会造成崩溃，我们没有必要越庖代俎为劣质应用「修复问题」</sub>

## 2.1.5 (2019-10-30)

- 修复一些 UI BUG

## 2.1.4 (2019-10-29)

- 改进一些核心部分的实现
- 修复一些 UI BUG

## 2.1.3 (2019-10-23)

- 绕过在 OnePlus 的 Android 10 上使用自动暗色主题会崩溃的问题（这个问题由 OnePlus 的引起）

## 2.1.1 (2019-10-23)

- 修復如果核心进程启动晚于启用的应用则该应用可能无法启动的问题

## 2.1.0 (2019-10-22)

- 简化允许访问来自其他应用的文件流程，现在只要是由其他应用创建的文件都可以在“属于其他应用的文件夹”中选择
- 在每次应用启动时检查并授予权限，这可能解决由 MIUI 11 随机篡改权限造成的问题
- 绕过在 Meizu 设备上使用内置 su 时核心工作进程会被杀死的问题
- 临时移除“修复应用间交互”中的修改传递的文件路径功能，因为这个功能在使用插件化或热修复技术（常见于来自中国大陆地区的应用）的应用中会产生问题，且目前主流应用应该都已使用 Content Provider 与其他应用共享文件，移除此功能应该影响不大
- 其他 BUG 修复与大量 UI 改进

## 2.0.1 (2019-09-27)

- 修复“共享文件夹”规则实际没有生效

## 2.0.0 (2019-09-27)

- 对“共享文件夹”及“同步文件夹”规则进行问题检查（有问题的规则会被删除有问题的部分或禁用），在下个版本会针对这个这个问题提供更加详细的提示及教程
- 修复数个有关“同步文件夹”规则的问题
- 修复独立“修复应用间交互”开关坏掉
- 增强模式 v20.1：修复“修复应用间交互”功能在 OnePlus Android 10（可能还有其他）上的问题
- 大量 UI 改进

## 1.9.1 (2019-09-09)

- 修复“修复应用间交互”可能没有工作的问题
- 增加半透明状态栏及导航栏选项
- 修复数个 UI bug

## 1.9.0 (2019-09-08)

- 增强模式 v20.0：修复使用 [Adoptable Storage](https://source.android.com/devices/storage/adoptable) 时安装在外置存储卡的应用无效的问题
- 增强模式 v20.0：更改“修复应用间交互”功能的实现方法，不再会被“Xposed Taichi”破坏，同时也可能会解决一些其他的问题
- 增强模式 v20.0：“修复应用间交互”可单独为每个应用开关
- 修复备份功能不能还原部分配置的问题
- 在 Android Q 上自动允许 `OP_REQUEST_INSTALL_PACKAGES`（因为其发生变化时会触发系统重新挂载）

## 1.8.3 (2019-08-30)

- 修复一些 UI bug
- 修复“基础模式”下的一个重大问题

## 1.8.2 (2019-08-27)

- 处理特殊系统应用（appId < 10000 或 appId > 19999, appId = uid % 100000）
- 不为特殊系统应用锁定权限
- 其他 bug 修复和 UI 改进

## 1.8.1 (2019-08-26)

- 改进选择“可访问文件夹”流程
- 可直接为“可访问文件夹模板”选择使用的应用
- 修复在 Android Q 上启动服务时对已启动的应用的重定向会失效问题
- 修复长时间停留在主界面 CPU 占用会越来越高问题
- 修复使用 API（暂未公开）的应用崩溃的问题
- 其他 bug 修复和 UI 改进

## 1.8.0 (2019-08-17)

- 选择“可访问文件夹”时可同时选择多个模板及自定义
- 增加“文件夹分析”功能，获知隔离存储空间中文件夹大小
- 可访问文件夹中选择的文件夹不存在时会自动建立
- 一些些 UI 改进和 bug 修复

## 1.7.5 (2019-08-06)

- 修复“同步文件夹”功能坏掉

## 1.7.4 (2019-08-05)

- 在 Android Q 上使用 `FLAG_PERMISSION_SYSTEM_FIXED` 来固定权限
- 为华为设备提供解决方法，[详见此处](./guide/compatibility/huawei.html)
- 修复“同步文件夹”功能没有尝试处理“从目标文件夹移走文件”事件
- 改进英语翻译
- 其他小改动

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