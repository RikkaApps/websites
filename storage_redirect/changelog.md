# Changelog

## 5.4.5 (2021-05-21)

- Limited mode (Enhancement module not installed) works on Android 12 Beta 1
- Add "Exclude private files" option for File monitor

## 5.4.3 (2021-05-06)

- Fix the problem that accessible folder templates needs a lot of time to be loaded

## 5.4.1 (2021-05-04)

- Prevent 💩 MIUI's "Force dark mode" from breaking app's theme<sup>**〔1〕**</sup>

<sub><b>〔1〕</b>MIUI has its own "Force dark mode". However it seems that even if the app has provided correct dark theme, MIUI's "Force dark mode" will still take effect and finally mess up colors.</sub>

## 5.4.0 (2021-05-03)

- Try to solve the problem that MediaStore on Android 11 or above cannot be isolated (On MIUI, isolate it may be necessary)
- Add a few mistake-proofing changes for Android 11 or above
- Record the total number of handled isolated apps

## 5.3.5 (2021-04-28)

- Try to fix a problem that may causes the crash of the core service
- Hide some apps (apps without components, apps without code, overlay apps) from the app list (such apps cannot run by themselve, isolate them is meaningless)

## 5.3.4 (2021-04-27)

- Fix a problem related to "Fix app interaction" that cause isolated apps not working, this problem only happens on few devices

## 5.3.1 (2021-03-27)

- Use [self-compiled libcxx](https://github.com/RikkaW/libcxx-prefab) to reduce the file size (about 300KB reduction)
- Enhancement module upgrade to Riru 25
- Adapt to an Android 12 change
- Report when the enhanced mode is not working properly
- Solved the problem comes from Android 11 user manually disable fuse

## 5.2.0 (2021-01-27)

- Fix an issue on Android 11 where all functions that require listing files did not work properly for non-primary users

## 5.1.0 (2021-01-19)

- Support start with Sui (https://github.com/RikkaApps/Sui) (Of course due to the high complexity of this app, it really just start)
- "File monitor" can show records from non-primary user now

## 5.0.2 (2020-12-20)

- Fix a problem which may cause apps with `sharedUserId` (called "App group" in the app) cannot be isolated
- When "Block system remount" is available, don't automatically allow `OP_REQUEST_INSTALL_PACKAGES` (The reason for doing this before is, the change of `OP_REQUEST_INSTALL_PACKAGES` will trigger system remount, cause isolation become invalid)

## 5.0.1 (2020-12-15)

- Fix the problem that on Android 11, newly added "Export isolated folders" rules will not take effect immediately

## 5.0.0 (2020-11-23)

- Support devices published with Android 11 which has `sdcardfs` removed (Pixel 5, Pixel 4a 5G, etc)
- On Android 11, "Export isolated folder" is implemented with `mount` rather than `hard link` (media storage have no permission to access link files)
- Use binder for all IPC involving `untrusted_app` domain (many things are completely rewritten)
- Remove almost all traces that indicate the device is rooted
- Use `/data/adb/storage-isolation` as data folder, you can delete `/data/misc/storage_redirect` if there is no problem
- It's hard to speak all the changed things 😶

## 4.5.3 (2020-08-20)

- Change the core implementation, solve the problem caused by "adapt to Android 11 changes" introduced from the previous version
- Adapt to changes in Android 11 beta 3

## 4.5.2 (2020-06-19)

- Don't let a weird error<sup>**〔1〕**</sup> crash the whole app

<sub><b>〔1〕</b>An error related to Retrofit + Kotlin coroutines, stacktrace is empty</sub>

## 4.5.0 (2020-06-16)

- Fix the problem that on Android 11, isolate app which starts earlier than user unlock will cause serious problem
- When "Enhanced mode" - "Block system remount" option is enabled, storage permission of isolated apps will not be enforced<sup>**〔1〕**</sup>
- Enhanced mode: "Block system remount" now works on Android 11
- Enhanced mode: "Fix app interaction" now works on Android 11
- Enhanced mode: Remove toast of "Fix app interaction" (for the use case of inspection, check logs with tag "SRHook")
- Enhanced mode v22.6: Fix app-level toggle of "fix app interaction" not work
- The title for "Export isolated files" rule is customizable
- Improve the performance of "App settings" page
- "View gallery" works on Android 11
- When the app starts on boot, don't kill process started by Enhanced mode
- Raise target API version to 30
- Change the icon

<sub><b>〔1〕</b>Due to user reports, it might cause problems on 💩 systems like MIUI.</sub>

> According to user reports and investigations, "Fix app interaction" does not work on some highly modified systems (at least includes 💩 OnePlus). We will switch to a completely different way in the future.

## 4.4.1 (2020-05-01)

- Fix "File monitor" page lag
- Fix display issue of "Accessible folders" - "Files from other apps"

## 4.4.0 (2020-04-29)

- Fix app interaction: Remove "startActivity hook"<sup>**〔1〕**</sup><sup>**〔2〕**</sup>
- Fix change "Default isolated storage location" may wait forever on some situations
- Correctly implement "Up" (the arrow in ActionBar)<sup>**〔3〕**</sup><sup>**〔4〕**</sup> (so sad even some system apps are not doing this right 😰)
- Fix edge effects for all lists which shows below system bars (almost all apps not doing this right 😋)
- Hide "View gallery" on Android R because it's broken

<sub><b>〔1〕</b>It may cause problems.</sub>
<br><sub><b>〔2〕</b>On Android 10+, exposing `file` uri will cause crash, garbage apps should have changed. We no longer need to "help" them.</sub>
<br><sub><b>〔3〕</b>According to the <del>ancient</del> guideline, "Back" navigates to the previous screen but "Up" navigates to the logical up level. For example, enter a deep page of A from B, "Back" backs to B while "Up" goes to the upper page of A. (This also requires B doing right)</sub>
<br><sub><b>〔4〕</b>On Android R Developer Preview, Google breaks this "nobody use thing", so "up" works as "back" until Google fix it.</sub>

## 4.3.1 (2020-04-05)

- Add a simpler way to submit rules
- Fix the problem that unable to add "Accessible folder" - "Folders from other apps" rule for apps installed in non-primary users
- Fix some UI bugs

## 4.2.3 (2020-03-24)

- Solve problems when using with "Freezer" apps based on `setApplicationHiddenSettingAsUser`

## 4.2.2 (2020-03-22)

- Fix the problem that, in the app settings, online rule loads before accessible folder causing bad experience under bad network

## 4.2.1 (2020-03-21)

- Change the implementation of "New app notification" and notifications of "Export isolated files" rules. This can workaround 💩 MIUI's system bug<sup>**〔1〕**</sup> and a minor historical issue<sup>**〔2〕**</sup>
- The version of Enhancement module is now fetched online
- The app list of "Accessible folders template" now support multi-user correctly
- Add more foolproof design

<sub>**〔1〕** In uncertain situations, MIUI will deserialize (`unparcel`) the `Bundle` in the `Intent` passed by `startActivity` in `system_server`. If the `Bundle` contains a non-system `Parcelable`, deserialization fails and the `Bundle` is broken forever, the app will only receive a blank `Bundle`.</sub>
<br><sub>**〔2〕** If the data structure changes and the core service has not been updated after installing a new version of the app, the app will crash when showing notification.</sub>

## 4.2.0 (2020-03-14)

- Enabling isolation for system apps which starts early will no longer cause problems (but, just in case, you still need to [be prepared](./guide/enhanced_mode/install.html#unable-to-enter-the-system-usually-due-to-isolation-of-system-components))
- Completely fix problems related to restoring backups
- Fix app not responding (white screen) under specific situations

## 4.1.7 (2020-03-10)

- "Export isolated files" rule now participates in the calculation of "Fix app interaction" feature (Affected apps need to be restarted for changes to take effect)
- Fixed an issue that modifying "Accessible folder template" would not take effect immediately
- Fixed multi-user support broken due to system update
- Add foolproof design to the process of isolating critical system apps and app groups

## 4.1.6 (2020-03-06)

- Ability to use built-in logcat to get boot log (no longer clear logs on start & fix UI not responding)
- "Export isolated files" rules for uninstalled apps are not used in conflict checking now
- Fix "File monitor" is not refreshing once the user has entered other pages
- Fix very few records are randomly not showing in "File monitor"
- Fix isolated apps rarely not starting

## 4.1.5 (2020-03-04)

- Completely solve the problem solved in the previous version

## 4.1.4 (2020-03-03)

- Fix the problem that "Block system remount" feature not working<sup>**〔1〕**</sup>

<sub>**〔1〕** This feature should be necessary only on MIUI 11 (maybe China version only?)</sub>

## 4.1.3 (2020-03-01)

- Adjust the timing of starting part of the core service again (on MIUI and maybe other weird systems, too early or too late will cause problems, it's too difficult
- Fix an issue about restoring backups

## 4.1.2 (2020-02-29)

- Fix random purchase information lost happened on some users introduced in v4.0.0
- Add "Disable notifications from Export isolated files rules" option, because notifications don’t make sense after using "Fix app interaction" in enhanced mode (this option is only enabled by default for new users)
- Fixed an issue with the "Export isolation file" feature when adding / updating / removing rules for an App group 
- Fixed the problem that some apps cannot be restored when restoring a backup
- Fix a few issues related to "Fix app interaction"

## 4.1.0 (2020-2-28)

- To avoid problem, isolation for all non-regular app (uid < 10000) will be disabled on this upgrade (it's reported that isolate uid 1000 may cause problems on heavily modified system such as MIUI, OnePlus Oxygen OS, etc.)
- Fix File monitor is breaking on last version
- Fix possible configuration lose on last version

## 4.0.0 (2020-2-28)

- Change app name to "Storage Isolation" since "redirect" is very easy to make people think that it is "redirect to SD card" in the old days
- Correctly support the `SharedUserId` mechanism of the Android system (almost all parts need to be changed, and most of the time has been spent here since the last update)
- Core services continue to function after an "abnormal restart"
- Fixed an issue where storage permission was displayed as allowed but denied in fact on Android 10
- AOSP apps is no longer considered as verified in online rule
- If someone rename "Android" folder to "android", "Export isolated files" continue to function (Why there is people do this)
- Enhanced mode v22: Start some of the core services earlier, this resolves the issue where enabling isolation for apps start very early may cause the system to fail to boot (yeah, another 💩 MIUI only problem)
- The version of Enhanced mode and Riru will never show "unknown"
- If you reinstall the app that has enabled isolation, the original settings will be restored correctly (the isolation still needs to be manually turned on)

## 3.2.2 (2019-12-22)

- Fix a problem related to restoring the backup

## 3.2.0 (2019-12-18)

- Fix a problem related to isolation for the app which starts very early (yeah, another problem caused by "changes for 💩 MIUI")
- UI improve for almost every part

## 3.1.5 (2019-12-06)

- Revert some changes in 3.1.4 since it seems to cause problems on some other devices :(

## 3.1.4 (2019-12-05)

- Fix a problem of startup progress

## 3.1.3 (2019-11-24)

- Try to avoid the problem of "Block system remount" may cause "reboot" on some devices (Note, new changes requires reboot to take effect)
- Export isolated files (Synced folder) function now delete file with same name in target folder first, this is to avoid the problem of multiply rename/move may cause "wrong" file be exported
- Add preset strings of local rules for the situations of online rules is disabled or network is unavailable

## 3.1.0 (2019-11-23)

- Enhanced mode: "Fix app interaction" can handle requests of "Download Manager"
- Fix the problem that storage permission may not granted correctly on Android 10
- Other minor bug fix and UI improve

## 3.0.0 (2019-11-21)

- Redesign multiple UI parts to reduce the difficulty of understanding
- Refactor multiple UI related parts to make it more stable and smooth
- Enhanced mode v21: Add "Block system remount" feature to avoid system triggered remount makes the isolation invalid (available on Android 9+)<sup>**〔1〕**</sup>
- Enhanced mode: Bring back the feature of modifying file path in "Fix app interaction", but only `ACTION_VIEW` is handled<sup>**〔2〕**</sup> and it no longer use Storage Redirect app as proxy<sup>**〔3〕**</sup>
- Redesigned online rule, making it more flexible

<sub>**〔1〕** This feature should be necessary only on MIUI 11</sub>
<br><sub>**〔2〕** Trigger deserialization of `extras` is dangerous</sub>
<br><sub>**〔3〕** Even if we don’t do anything, the original behavior has already caused crash on Android 10, we don’t have to "fix problem" for "bad apps"</sub>

## 2.1.5 (2019-10-30)

- Fix some UI bugs

## 2.1.4 (2019-10-29)

- Improve the implementation of core
- Fix some UI bugs

## 2.1.3 (2019-10-23)

- Bypassing the problem that using auto dark theme causing crash on OnePlus Android 10 (this problem is caused by OnePlus)

## 2.1.1 (2019-10-23)

- Fix the problem that enabled app can't start if core process starts later than it

## 2.1.0 (2019-10-22)

- Simplify the process of allowing access for files belonging to other apps, now all files created by other apps can be chosen from "Folders belonging to other apps"
- Check and grant permissions every time when app starts, the could solve the problem caused by MIUI 11 random tampering permissions
- Bypassing the problem of core processes being killed when using built-in su on Meizu devices
- Temporarily remove "modify file path" feature in "Fix app interaction" because this feature can cause problems in app that use plug-in or hot fix technology (common in apps from mainland China), and currently mainstream apps should have switched to Content Provider to sharing files, removing this feature should have little effect
- Other bug fixes and lots of UI improvements

## 2.0.1 (2019-09-27)

- Fix "Shared folder" rules not work

## 2.0.0 (2019-09-27)

- Check the "Shared folder" and "Sync folder" rules (the problematic rules will be deleted or disabled), and the next version will provide more detailed tips and tutorials for this issue
- Fixed several issues with the "Sync folder" rule
- Fixed separate "Fix app interaction" switch broken
- Enhanced mode v20.1: Fixed an issue with the "Fix app interaction" feature on OnePlus Android 10 (and possibly others)
- Lots of UI improvements

## 1.9.1 (2019-09-09)

- Fix the problem that "Fix app interaction" may not work
- Add an option to use status bar & navigation bar
- Fix several UI bugs

## 1.9.0 (2019-09-08)

- Enhanced mode v20.0: Fix the problem that redirection not work for apps installed in external storage card when using [Adoptable Storage](https://source.android.com/devices/storage/adoptable)
- Enhanced mode v20.0: Change the implementation of "Fix app interaction", no longer be break by "Xposed Taichi", it may also solve some other problems
- Enhanced mode v20.0: "Fix app interaction" can be switched individually for each app
- Fix the problem that some configs can't be restored by backup feature
- Allow `OP_REQUEST_INSTALL_PACKAGES` automatically on Android Q (since the change of it will trigger remount by the system)

## 1.8.3 (2019-08-30)

- Fix some UI bugs
- Fix a critical problem under "Basic mode"

## 1.8.2 (2019-08-27)

- Handle special system apps (appId < 10000 or appId > 19999, appId = uid % 100000)
- Don't fix permission for special system apps
- Other bug fixes and UI improvements

## 1.8.1 (2019-08-26)

- Improve the process of selecting "Accessible folders"
- Directly choose apps of "Accessible folders template"
- Fix the problem that running apps with storage isolation enabled will be invalid when service start on Android Q 
- Fix high CPU usage if stay in the app for long
- Fix other apps using API (not published yet) will crash
- Other bug fixes and UI improvements

## 1.8.0 (2019-08-17)

- When choosing "Accessible folders", multiply templates and custom can be chosen at the same time
- Add "Folders analysis", learn the size of folders in isolated storage
- Automatically create folders in "Accessible folders" if not exists
- Some UI improvements and bug fix

## 1.7.5 (2019-08-06)

- Fix "Synced folder" feature is broken

## 1.7.4 (2019-08-05)

- Use `FLAG_PERMISSION_SYSTEM_FIXED` to fix permission on Android Q
- Provide a solution for Huawei devices, [see here](./guide/compatibility/huawei.html)
- Fix "Synced folder" feature not trying to handle "move files from target folder" event
- Improve English translation
- Other minor changes

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