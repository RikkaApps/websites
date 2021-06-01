# Changelog

## 5.4.2 (2021-06-01)

- Fix backup is broken from version 5.4.0
- Fix some visual problem on old systems

## 5.4.0 (2021-05-27)

- Fix Clipboard monitor does not work on Android 12 Beta 1
- Fix "Ignore" cannot be set for apps in work profiles on Android 11+ (This fix is only possible under Shizuku mode)
- Hide `OP_QUERY_ALL_PACKAGES` since this op does nothing
- Hide `OP_NO_ISOLATED_STORAGE` since this op is only for debugging use

## 5.3.3 (2021-05-04)

- Adapt another Android 12 changes
- Prevent 💩 MIUI's "Force dark mode" from breaking app's theme<sup>**〔1〕**</sup>

<sub><b>〔1〕</b>MIUI has its own "Force dark mode". However, it seems that even if the app has provided the correct dark theme, MIUI's "Force dark mode" will still take effect and finally mess up colors.</sub>

## 5.3.1 (2021-04-03)

- Fix a problem that would cause the crash
- Adapt some Android 12 changes

## 5.3.0 (2021-01-28)

- The first step of correctly handling Shared user ID

## 5.2.0 (2021-01-16)

- Support Sui (https://github.com/RikkaApps/Sui)

## 5.1.3 (2020-11-29)

- Adapt changes of "Storage Isolation" v5
- Fix a problem that the backup will be broken if the system returns "wrong" data (exiting broken backups cannot be fixed)

## 5.1.2 (2020-10-07)

- Fix a problem related to creating backup
- Fix a problem related to "Clipboard monitor"
- Fix the problem that records for "Automatic recovery" sometimes may not be updated correctly
- Import translation from users

## 5.1.0 (2020-09-24)

- All options are now available for batch operations of "App detail" and "Permissions view" (note that when multiple items are selected, the displayed options are the intersection of all available options)
- Add search for "Permissions view"

## 5.0.6 (2020-09-06)

- Fix a problem related to creating backup
- Fix a problem related to batch operations (including using templates, backups, etc.)
- Import translation from users
- Other minor changes

## 5.0.4 (2020-08-30)

- Fix the problem that "Restoring backup" may be displayed when nothing is actually restored
- Import translation from users
- Other minor changes

## 5.0.3 (2020-08-27)

- Fix problem introduced in 5.0.2 (1236)

## 5.0.2 (2020-08-26)

- "Automatic recovery" option is enforced for all Android 10 as it is confirmed that Android 10 also do the reset (only in fewer cases than Android 11)
- Fix the problem that, under Delegated Device Admin mode, things available from Island 5.0+ is accidentally requested on all versions
- Fix the problem that the ignore option of "Automatic recovery" not actually works
- Fix the problem that, `RUN_IN_BACKGROUND` in the template is not correctly displayed after editing

## 5.0.1 (2020-08-24)

- Fix the problem that in the last version, admin apps using DSM API v3 are incorrectly marked as "missing support"
- Fix the problem that in the last version, not all options are displayed correctly in "Template"
- Fix the problem that in the last version, automatic backup restore function for frozen applications (based on "hide") is broken
- Reset package mode when necessary (for "incorrect" settings leaved by older App Ops or other appops tools that haven't adapt system changes correctly)
- Import user translations

## 5.0.0 (2020-08-22)

This update fixes a hidden but long-standing problem. Because the problem rarely occurs in low version system, and the existing settings are not affected after upgrading to Android, this problem was surfaced recently. A typical example is, in Android 10, once you have changed location permission from the system, changes in older versions of App Ops will never work (even if it seems to be changed successfully).

This contains a lot of work behind, please read [technical details](./guide/technical/system_behaviors/).

**What you should to know:**

- What you see or change in App Ops now reflects the final status
- "Deny" in older versions is renamed to "Ignore"
- Old backups are no longer supported because they lack the necessary information (they may even contain wrong information)
- For Delegated Device Admin mode, currently, only Island v5.0+ has the support of new required APIs
- For Delegated Device Admin mode, part of the backup is from historical user actions, this is because admin apps does not have enough permission to get the accurate status (this is system limitation)

Other changes:

- Template: any options can be used in the template
- Backup: more flexibility when restoring
- Usage monitor: attempt to reduce "wrong" reports (sometimes the systems always reports app is using "location" even if the app is not running)
- Usage monitor & Clipboard monitor: add "exclude system apps" option

## 4.2.3 (2020-07-18)

- Add Turkish translation
- "Usage monitor" fix

## 4.2.2 (2020-07-16)

- Solved the problem of small probability of random stop from v4.0.0
- "Usage monitor" improvements
- Rearrange strings, anyone can participate in translation

## 4.2.0 (2020-07-12)

- Add "Usage monitor" (Requires Android 9+ & Shizuku starts via root)

  Get notified when apps are using location, camera or microphone

## 4.1.1 (2020-07-10)

- Clipboard monitor: temporary access time is now optionable
- Clipboard monitor: fix a UI issue of "Excluded apps"
- Fix the problem that on Android 10+, the backup created after v4.0.0 may be broken
- Correctly report the error from DPM mode
- Temporarily not to use resource optimization feature from AAPT2, maybe this could solve the problem of random settings crash happens on some users

## 4.1.0 (2020-07-09)

- Clipboard monitor: add "Window position" and "Excluded apps" option
- Fix the problem that once the main process is dead, "New app behavior" will stop working
- Fix the problem for permission view, ui is not refreshed correctly

## 4.0.1 (2020-07-05)

- Fix the problem that in some situations, the monitor service is started abnormally

## 4.0.0 (2020-07-04)

Rewrite (partly) the app with latest technologies. The full rewrite with more improvements and new features will come in the near future.

- New feature: Clipboard monitor (Requires Android 10+ and Shizuku started with root)<sup>**〔1〕**</sup>
- Works on Android 10 & 11
- UI refresh
- Fix a problem related to restoring backup
- Always use built-in names<sup>**〔2〕**</sup>
- For free version, remove Google Ads (Promote our apps instead)
- For crash report, use AppCenter to replace Firebase Crashlytics (Also, crash report can be disabled)
- Target API 30
- Drop support for system plugin mode
- Drop support for Android 6.0
- Drop support for ask mode from old LineageOS based ROMs<sup>**〔3〕**</sup>

<sub><b>〔1〕</b>Exclude apps from the monitor will come in the next version</sub>
<br><sub><b>〔2〕</b>Previously, the name of "the permission" is used in priority. But as Android changes some permission name across versions, the name is more and more inaccurate.</sub>
<br><sub><b>〔3〕</b>Due to user reports, some old Samsung devices "appear to have this feature", but change to "ask" will cause the system unable to boot.</sub>

## 3.1.1 (2019-08-03)

- Fix can't modify template

## 3.1.0 (2019-08-02)

- Provide more obvious warnings when doing operations on system apps
- Provide edit & add for apply template dialog
- Fix the problem that it will always determine that you are using Island once you have used Island in Delegated Device admin mode

## 3.0.3 (2019-07-29)

- Minor bug fix
- Provide new website with document: <https://appops.rikka.app/>

## 3.0.2

- Fix Delegated Device admin is broken
- Fix wrong dependency

## 3.0.0

- Delegated Device admin mode: Fix app installation may not triggered when using Island
- (Experimental) Delegated Device admin mode: Support multi-user (Requires Island 3.8+ as Device admin. For 2019/7/24, it's available in Google Play alpha channel)
- Template: check "Skip check" for default
- Template: improve edit UI
- Show prompt if an op is not included in stock Android
- Other bug fixes & UI improve

## 2.9.9

- Delegated Device admin mode: Fix some bugs related to Island support
- Privilege mode: Fix legacy Shizuku is always required
- Show all working modes (explains the reason if not support)

## 2.9.8

- (Experimental) Delegated Device admin mode support "God mode" of Island app (com.oasisfeng.island)
- Privilege mode: Fix "adb permission limited" prompt never shows (mainly for MIUI)

## 2.9.7

- Try to fix "Code 5"

## 2.9.5

- Bring back access/reject time for Android Q beta 4 (but as Android Q changed data format and not open sourced yet, no detailed times like Android 9)
- Fix "Code 5 debug message: null" (by upgrading lib from Google :(
- Minor UI tweaks

## 2.9.4

- Target 29
- Fix bugs in 2.9.2

## 2.9.2

- Fix template is lost after upgrading to 2.9.1
- Notification language should follow app language setting perfectly

## 2.9.1

- Add Delegated Device admin mode (use API from supported Device admin app)
- Fix some bugs
- Include templates to backup

## 2.8.2

- Fix root mode not work on Android Q beta 3
- Fix a few features on older versions of Android may not work properly
- Fix "Show framework apps" option not work under root mode
- Fix overlay packages are not filtered under root mode

## 2.8.1

- Works on Android Q beta 3 (unable to see usage time now)
- Storage options not work on Q beta 3, it's a system bug
- Temporarily hide "Storage sandbox" option for Q beta AlipayPaymentDialogFragment3 (disable by default unless app declared, how to force enable is not clear)
- Update translation
- Set first template as default when not set (to save user who never read prompt text)

## 2.8.0

- Support new ops added from Android Q
- UI improve

## 2.7.0

- No more "Restart app required" on Android 9
- No more random error when use privilege mode (require upgrade to Shizuku v3 and force stop App Ops)

## 2.6.4

- Update translation
- Bug fix

## 2.6.3

- Update translation
- Bug fix

## 2.6.2

- Multi-user support for root mode (experimental)
- Add "Disabled first" for grouping by permissions list
- Improved "run in background" control UI for Android 9
- Bug fix

## 2.5.10

- Add help for Android 9
- Bug fix

## 2.5.9

- Fix bug related to multi-user
- Update pt-BR translation

## 2.5.8

- Fix bug

## 2.5.7

- Simplify detail UI
- Fix some ops can't be changed if this permission related to its'
  opToSwitch's is not requested

## 2.5.5

- Fix process when first time using privileged mode on not rooted Android 9
- Fix the problem about losing unsaved data while editing template after screen rotation
- Press back to ask whether to save when editing template
- Fix crash when press enter in template name
- Hide unknown ops by default
- Update ru translation

## 2.5.3

- Fix bugs about new app monitor feature
- Try to fix crash when open app on users

## 2.5.2

- Fix system plugin mode is broken in 2.5.0
- Fix error information is not correctly displayed
- Fix not work on Android 7.x
- Fix the problem that "You have already own this item" happens on some Google Play users
- To make New app monitor feature more reliable, it requires foreground service now (only Android 8.0+),
  but you can disable notification or set it to lowest importance to avoid being disturbed

## 2.5.0

- Remove System plugin for Android 9+
  (because the plugin could work only if it is signed with the system signature)
- Simplify system plugin installation, provide zip download only
- Support appops features added from Android 9 (such as MODE_FOREGROUND & OP_RUN_ANY_IN_BACKGROUND)
- New UI
- Multi templates
- Solve the problem that unable to use if back to app after a long time

## 2.4.1

- Update translation
- Try to fix the problem that some paid users may be treated as unpaid

## 2.4.0

- Increase the speed of root mode

## 2.3.13

- May fix root mode not work on some devices
- Change icon for Android 8+

## 2.3.12

- Try fix crash when restore backup

## 2.3.11

- Add select all for all list (long press item -> 3-dot menu -> select all)
- System plugin mode now provides Magisk module template v1500 for Magisk users

## 2.3.10

- Fix crash when restore large number of backups
- Fix tip dialog content is not scrollable

## 2.3.9

- Fix crash on Android P DP1 (you may see the "Detect problems with API compatibility" toast, but it's impossible for AppOps not use hidden APIs)

## 2.3.8

- Add "Show all modes" option (do not enable it if don't know what it is)

## 2.3.7

- _Always-shown permission (operation)_ will exclude some impossible situation
- Add error tip when App Ops in installed to external storage
- Update Portuguese (Brazil) translation
- Remove some unused resources
- Fix create backup is broken

## 2.3.6

- Fix "Google play not available"
- Add a list which displays all supported permissions (operation)
- Mark system app in app list
- Add _always-shown permission (operation)_ list, selected permissions will be treated may be used by all apps
- Settings UI tweak

## 2.3.5

- Fix backup preview is broken
- Add tip when local network (required by privileged mode) is limited
- Handle some uncaught error

## 2.3.4

- Fix reset is broken in root mode
- Fix reset or apply template from app list not refresh the UI

## 2.3.3

- Fix two old bug

## 2.3.2

- Fix bug in 2.3.0
- Asynchronous load other information (such as modified item count), so the app list loading process should be very fast now

## 2.3.0

- Add modified item count for app list
- Accelerate the process of fetching appops configuration when use root mode
- New Oreo-styled app detail view
- Support Android 8.1's light navigation bar
- Modify some confusing UI
- (Free users) Use old banner ads since Google will remove native express ads after March 2018
- Fix some multi-user related problems
- (Paid users) Fix a problem which related to auto backup restore
- Remove support for old Shizuku (privileged mode) due to some reason

## 2.2.6

- Fix unable to use when install Shizuku Manager later than open App Ops

## 2.2.5

- Add start on boot for new app monitoring
- Add Portuguese (Brazil) language

## 2.2.4
- Add a tip for the situation that adb only have get but no update appops configuration permission (most likely happened on MIUI ROM)
- Use new version build tool to avoid ([a terrible problem](https://issuetracker.google.com/issues/64434571)) on some custom ROM

## 2.2.3

- Fix possible crash when use _Privileged mode_ with old _Shizuku Manager_
- Do not check whether there is `RUN_IN_BACKGROUND` when applying template from notification
- Fix settings crash when switch work mode

## 2.2.2

- Fix crash when _Privileged mode_ is selected but _Shizuku Manager_ is not installed

## 2.2.1

- Add a feature that can change UI language
- Update translation
- Filter overlay apps by reflect `PackageInfo#overlayTarget`
- Fix action in new app notification may not work on some device
- Do not check whether there is `RUN_IN_BACKGROUND` when applying template

## 2.2.0

- Fix notification can't be dismissed after apply template or restore backup
- Reschedule main menu items
- Move "Show framework apps" to main menu
- Add "Sort by update time", "Sort by installation time"
- Lab add "Show target 0 apps" (for filter substratum overlay)
- Refactor setup wizard, also add more explanation
- Adjust settings UI
- Fix notification can't show adaptive icon (8.0+)

## 2.1.12 (beta)

- Temporarily query less data when fetching app list

> This will solve the problem that only part of app list is fetched (or even "Package Manager has died")
on some devices.

> Also makes the fetching progress faster.

> But without removed data, we have to remove "show apps without icon" option because we can't know
if the app have a entrance, and "run in background" (Android 7.0+) will always shown because we can't
speculated if the app have background behavior.

- (Privileged mode) Let Shizuku manager show user server is not running
- New version name rule
- Adapt Font Provider API v8

## 2.1.11

- Fix system plugin broadcast does not work
- Fix notification didn't show when plugin stopped
- Improve Settings UI for RTL language
- Introduce Shizuku v2 (privileged mode) for test, join test of Shizuku Manager if you want a try
- Font Provider (medium font weight for CJK language) is enabled by default

## 2.1.10

- Add a more friendly tip when system plugin don't have enough permission
- Try again to fix manual refresh is sometimes required when use system plugin
- Update Font Provider (for CJK language users) dependency to 1.3.2
- Add more help
- Fix some dialog's button color

## 2.1.9

- Fix NPE in WorkService
- Move system plugin download to GitHub release
- Fix crash when open help in runtime permission tip dialog
- Notify list refresh when system plugin connected
- Update translation
- Add translator's name to about

## 2.1.2 - 2.1.8

- Fix can't create backup file
- The entrance of Lab (including undetermined and experimental features) is now always enabled
- Provide fastScroll drawable from AOSP to avoid crash on some devices
- Update help
- Fix test link in pro version
- 100% fix theme and night mode, it should work perfectly now
- Update adaptive icon for Android O
- Add tip of Runtime Permissions when entering app target 23+
- Improved theme
- Add an option to use "Noto Sans CJK Medium" font from Font Provider app to replace "sans-serif-medium"
- Add tip for users can't use system plugin on Android O

## 2.1.1

- Enhanced backup (PRO)
  - Once user changed permission settings, the settings will be saved to database automatically, it can be restored when the app installed again after uninstalling or re-enabled after disabled by freezer apps using DevicePolicyManager (such as [Icebox](https://play.google.com/store/apps/details?id=com.catchingnow.icebox)'s non-root mode).
- Add detailed changelog
- New detailed help