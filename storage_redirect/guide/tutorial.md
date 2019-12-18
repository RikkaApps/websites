# Quick start

## Learn how to organize your files

For user files such as photos, pictures, and downloaded files, the Android system recommends storing them in **Shared folders**.

::: details All Shared folders
* `Alarms`
* `Pictures`
* `DCIM` (for photos taken by camera)
* `Documents`
* `Download`
* `Movies`
* `Music`
* `Notifications`
* `Ringtones`
:::

Taking the most common `Pictures` as an example, it is common for each app to create its own folder in it. For example, Twitter saves pictures to `Pictures/Twitter`.

Our recommendation is to organize the files saved by each app in the above way.

## Clean up existing files (first use)

If you are troubled by the problem like the example below, and if you are not sure whether there are important files in these folders, we suggest you take the following steps.

::: details Example: A lot of unknown folders in the storage
<br>
<img :src="$withBase('/images/chaos_storage.png')" alt="example">

:::

1. Create a new folder and move all folders in it except **Standard folders** <sup>**[1]**</sup>
2. Create a file named `.nomedia` in this folder to prevent the media files in it from being scanned
3. After finishing all the settings and finding the important files, delete the folder

<sub>**[1]** Standard folders: Android Alarms DCIM Documents Download Movies Music Notifications Pictures Ringtones</sub>

## How to properly set up isolation

After enabling isolation, you need to check the **Accessible folders** and **Export isolated files** options.

### Accessible folders

With isolation enabled, you need to set folders the app can read and write. It's divided into two parts.

* **Shared folder**

  Options that need to be set most of the time. For example, if you want the app to be able to use your photos, you need to select `DCIM`.

  Note that we only recommend making limited folders accessible, otherwise the isolation will not make sense.

* **Folders from other apps**

  Options that are required in rare cases, please [see below](./tutorial.html#how-to-solve-problems-involving-multiple-apps).

  Our advice for beginners is to choose the rule you need in **Import Online Rules**, and if you still have problems, try to write the rule yourself.

### Export isolated files

If the app saves important files to folders other than **Accessible folders**, those files are isolated. You need to use this to export these files.

Our advice for beginners is to choose the rule you need in **Import Online Rules**, and if you still have problems, try to write the rule yourself.

Note that we only recommend exporting user files (save file operations initiated by users, such as saving pictures, downloading files, etc.). Exporting private data files for the app is unnecessary and violates the purpose of using isolation.

::: details Example
WeChat saves images to `tencent/MicroMsg/WeChat`. Need to create a rule from `tencent/MicroMsg/WeChat` to` Pictures/WeChat`.
:::

## Use Enhanced mode

Enhanced mode is an very important part, [many problems](./enhanced_mode/) can only be solved in the case of using Enhanced mode.

We recommend that you to try Enhanced mode when you are sure everything is OK (you can see how to use Enhanced mode in the app).

## How to solve problems involving multiple apps

**Note that this problem will only occur with low-quality apps that use legacy practices.**

First you need to understand how the problem occurs.

When the isolation is enabled, the storage visible to the isolated app changes.

For example, app `com.example` try to save 1.txt to `test/1.txt`. In fact, the file will be saved to `Android/data/com.example/sdcard/test/1.txt` while the app itself still thought the file is located at `test/1.txt`. Therefore, if the app directly passes the path `test/1.txt` to another app (this approach should be abandoned after Android 4.4), because there is no file here at all, other apps obviously cannot find the file at `test/1.txt`.

To solve such problems, you can first enable "Fix app interactions" in "Enhanced mode", which will solve the problem of using the standard file opening method of Android system.

If you still have problems, you need to pick up the "weapon", "File monitor" (requires Enhanced mode). With the "File monitor" function, you can know the app is trying to access the file at which location. Usually you only need to create corresponding rules in **Accessible folders - Folders from other apps** to solve the problem.

::: details Example
QQInput has the function of sending pictures to QQ. This function cannot work when isolation is enabled. In "File Monitor" you can see that both QQ and QQInput are using `Tencent/QQInput/Exp/Temp`. Need to create a rule that shares `Tencent/QQInput/Exp/Temp` from QQInput to QQ.

<small>* The Developer does not use QQInput, the example is written according to the rule provided by other users. </small>
:::

#### Involving the Xposed module
   
Some Xposed modules directly create files to save the configuration. You need to understand that enabling isolation for the Xposed module app itself is actually only enabling isolation for the interface that modifies the configuration, and the Xposed module will actually run in the app it injected.

::: details Example
A module modify WeChat named MDWeChat will create a folder named `mdwechat` to saving settings. After isolation is enabled for MDWeChat, `mdwechat` is saved in MDWeChat's isolated storage. The `mdwechat` folder is not included in WeChat's isolated storage, so the result must be "module not work". Need to create a rule to share the MDWeChat's `mdwechat` folder to WeChat.

<small>* The Developer does not use Xposed, the example is written according to the rule provided by other users. </small>
:::