# Must read help

## Basic knowledge and terminology

Note: The terminology used here is based on the habits accepted by the majority, and the statements are different. Please read the document herewith.

For Android apps, its data is primarily stored in the "app private folder" (`/data/data`) and "internal storage" (`/storage/emulated`). The "internal storage" is a public space provided to applications and users. Applications with storage rights can freely read and write files here, and connect to the computer through data lines in MTP mode or large-capacity storage (discarded after 4.x). This mode is also used to open the phone storage to see this "built-in storage space".

The "internal storage" of most phones/ROMs is located at `/storage/emulated/<user id>` (user id is generally 0, the primary user), and there are some standard folders in the root directory for saving. Public media files and some application data (including game data packages, etc.), for example:

* Application-specific folder (`Android/data/application package name`): The system designs a dedicated folder for the application in the built-in storage, which can save data, cache, and so on. Data is cleared when the app is uninstalled or reinstalled.
* Alarms (`Alarms`)
* Pictures (`Pictures`)
* Camera saved pictures (`DCIM`)
* Documents (`Documents`)
* Downloads (`Download`)
* Movies (`Movies`)
* Music (`Music`)
* Notifications (`Notifications`)
* Ringtones (`Ringtones`)

There are other standard folders created by third-party Android systems (such as `bluetooth`, etc.), which cannot be explained here. The definition of standard folders can also be extended by users according to actual needs.

The traditional way to locate files in storage is to use `file uri`, absolute paths (such as `file:///storage/emulated/0/test.txt`), but this path is not recommended for app interactions in Android 7.0. (the interaction that transfering the file location to another app such as sharing pictures, opening documents, etc.). Modern Android is more recommended to use the `content uri`, path to point to a content provider (ie `Content Provider`) to send file content to other apps, otherwise the app will encounter some problems, which will be mentioned in later chapters.

## Our philosophy

Apps with the storage permission can use "internal storage" at will, ie apps can read any files in "built-in storage" or write files anywhere. Some apps will refuse to work when they don't have permission or some features of the app must use the storage permission. In many cases, users can only choose to grant the permission.

This means:

* Some apps that do not value the user experience will arbitrary save various kinds of private data, while the documents, music and other files that actively saved by the user are mixed in, which makes the user get bad experience when browsing and organizing the storage space.
* Users cannot control which files the app can read.

We hope:

* The document media that each application saves in the built-in storage will be kept in a reasonable location, and that they cannot access the personal files unconditionally without the user's knowledge. 

* For private data that was originally saved everywhere by the app, it should be correctly saved to the "app-specific folder". With the uninstallation of app, they will be removed from the internal storage to free up the storage.

Storage Redirect is designed to let apps follow the behavior we expected, with minimal impact on the experience.

## Best Practices

### Understand what happens when you turn on storage isolation (redirect)

After the storage isolation is turned on, the "internal storage" accessed by the app is not the real location, but a folder located in the app-specific folder (`Android/data/<app package name>`).

For example, an app with the package name `com.aaa.bbb` thinks that it has saved a picture in `MyFile.jpg`. In fact, this image is saved to `Android/data/com.aaa.bbb/sdcard/MyFile.jpg`.

In addition, there will be the following effects after opening:
1. Only access to isolated storage and folders set in "Accessible folders"
2. The isolated storage space is cleared as the app is uninstalled
3. There may be problems with the use (see [3.2](#32-understand-the-situation-that-affect-the-normal-use-of-the-app-and-solutions))

### Understand the situation that affect the normal use of the app and solutions

The situations that affects the app are basically situations involving app interactions, and is limited to legacy apps that directly pass file path. These problems should only occur in poorly designed apps, and as time goes on, such situations will become less and less.

Here are some specific examples. More situations can be compared to yourself.

1. Pass the file path directly
   
   * Unable to open files using other apps from QQ, WeChat (pass file path with standard API)

     Solution: Enable "Fix app interaction issues" in "Enhanced mode" or create a "Sync folder" rule and open the file from the pop-up notification

   * Cannot initiate apk installation from app (pass file path with standard API)

     Solution: Enable "Fix app interaction issues" in "Enhancd mode"

   * Sogou Pinyin directly sends pictures to QQ/WeChat (pass file path with private way)

     Solution: Create a "Shared folder" rule ("Isolate storage from other apps" in "Accessible Folders")

2. App cannot move files between specific folders

   * Bilibili can't save the recorded video gif

     Solution: Use "Fix rename" in "Enhancd mode"

3. Related to Xposed (essentially the same as 1)
   
   Some Xposed modules take the form of creating files in the internal storage as a way to save the configuration. The file will be read by different processes.

   Solution: Create a "Shared folder" rule ("Isolate storage from other apps" in "Accessible Folders")

### Related Options

Not yet completed, please refer to the in-app description directly.