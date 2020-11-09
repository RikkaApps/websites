# Tutorial

## What happens when isolation is enabled?

Assuming there is an application called ExampleApp (the package name is `com.example`). It uses an SDK that abuses storage (assuming it will create `bad_sdk` folder). Then after granting ExampleApp storage permission, your storage space will look like this.

```
/storage/emulated/0
├───Android
├───bad_sdk
├───DCIM
├───Download
├───Pictures
└───...
```

Now that we enable isolation for ExampleApp, the storage to it becomes a folder in its data folder. We call this folder "isolated storage".

ExampleApp will only able to use the files in this folder, and the folders created by it will also be saved in this folder.

```
/storage/emulated/0
├───Android/data/com.example  <---- ExampleApp's data folder
│   └───sdcard                <---- Isolated storage
│       └───bad_sdk
└...
```

In addition, because of the data folder, we can also take these benefits:

* These files will be deleted when uninstalling or clearing data
* In system's app info, these files will also be counted as storage usage

## Knowledge for new users

::: details <b>Recommended way to organize files</b>

For user files such as photos, pictures, and downloaded files, the Android system providers a series of standard folders.

* `Alarms`
* `Pictures`
* `DCIM` (for photos taken by camera)
* `Documents`
* `Download`
* `Movies`
* `Music`
* `Notifications`
* `Ringtones`

Taking the most common `Pictures` as an example, it is common for each app to create its own folder in it. For example, Twitter saves pictures to `Pictures/Twitter`.

Our recommendation is to organize the files saved by each app in the above way.
:::

::: details <b>Clean/Move existing files</b>

Since the files in `/storage/emulated` do not have owner, we cannot automatically help you move or delete existing files.

* User files, such as pictures

  Organize as the recommendation above.

* Other

  For most apps, deleting previous files will not cause problems. But just in case, we recommend that you follow the steps below.

  1. Create a temporary folder and move them into it.
  2. Run all isolated app.
  3. If there are some apps not work properly because of can't find previous files, you can learn folders were created by which app by using "View isolated storage" option. Then you can move those folders.
  4. After all apps are working properly, delete the temporary folder.
:::

::: details <b>Forget about "Cleaning app"</b>

Some "Cleaning app" have the function of cleaning files created by specific apps (those files are not in data folder, they will not be deleted after uninstallation). This function cannot be used because file location changes after isolation.

However, after isolation, files created by the app are stored in the isolated storage (located in its data folder). They will be deleted after uninstallation. In addition, you can set the location of the isolated storage to cache folder. Cache folder is automatically cleaned up by Android system.

Forget about "Cleaning app", they are no longer meaningful. And they should not exist from the first day.
:::

::: details <b> "Backup app" are not affected (you can even backup more files)</b>

"Backup app" could only backup files inside apps' data folders.

After isolation, the files created by the app are saved its isolated storage (located in its data folder), so these files could also be backed up. Note, you may need to enable an option like "Backup external data" in your "Backup app".
:::

::: details <b>Use Enhanced mode</b>

Enhanced mode is an very important part, [many problems](./enhanced_mode/) can only be solved in the case of using Enhanced mode.

We recommend that you to try Enhanced mode when you are sure everything is OK (you can see how to use Enhanced mode in the app).
:::

## Solutions for apps not working properly

### App needs to access specific files

Now ExampleApp has the function of sending pictures. But because of the isolation, you cannot find your picture in ExampleApp.

To solve this problem, we only need to focus on the "Shared folders" section of the "Accessible folders" option. Assuming we selected folder `DCIM` and` Pictures`, then ExampleApp can access the files in these two folders.

```
/storage/emulated/0
├───Android/data/com.example
│   └───sdcard        <---- Isolated storage
│       ├───bad_sdk
│       ├───DCIM      <---- Real DCIM
│       └───Pictures  <---- Real Pictures
└...
```

For other cases, you only need to select the corresponding folder.

Note, app can not only read but also write these folders.

#### DO NOT abuse!

We only recommend that the necessary folders be made accessible. If you make all folders accessible, isolation will be meaningless.

### Can't find files saved by the app

Now ExampleApp has the function of downloading pictures, and you use it to download `1.png`. Because it is isolated, `1.png` is saved to isolated storage, so you cannot see it in the album app.

```
/storage/emulated/0
├───Android/data/com.example
│   └───sdcard         <---- Isolated storage
│       ├───bad_sdk
│       ├───DCIM
│       ├───images
│       │   └───1.png
│       └───Pictures
└...
```

To solve this problem, we need to create an "Export isolated files" rule.

```
Source: images
Target: Pictures/ExampleApp
Add to Media Store: Yes
```

After creating this rules, you will be able to see `1.png` in album apps and `Pictures/ExampleApp`.

```
/storage/emulated/0
├───Android/data/com.example
│   └───sdcard               <---- Isolated storage
│       ├───images
│       │   └───1.png
│       └───...
├───Pictures
│   └───ExampleApp
│       └───1.png
└...
```

Note that since the hard link is used, although the same file exists in two places, **they only occupy one storage space**. For technical details on "Export isolated files", you can read it [here](./advanced/technical_details_export_isolated_files.md).

#### Use online rules

If there are already required rules in the online rule, you only need to add them directly. You only need to write your own rules when there are no rules or when there are errors of online rule. You can also submit your rules to the online rule library (via the "upload button").

#### DO NOT abuse!

The purpose of export is to export **user files (save file operations initiated by the user, such as saving pictures, downloading files, etc.)**.

If the app saves user files to a private folder (e.g., `Android/data/<package>/files/example`), this place is not belong to isolated storage which is not applicable for export function.

```
/storage/emulated/0
├───Android/data/com.example
│   ├───files                <---- NOT belong to isolated storage
│   └───sdcard               <---- Isolated storage
└...
```

If you find the save **user files** to private folders, you should ask the app developer to make changes.

::: details Why you should ask the app developer to make changes?

In Android 11, `Android` folder is the real private folder. Even with storage permissions, apps can only access the part that belongs to it.

```
/storage/emulated/0
├───Android
│   ├───data
│   │   └───com.example     <---- Belongs to com.example
│   ├───media
│   │   └───com.example     <---- Belongs to com.example
│   └───obb
│       └───com.example     <---- Belongs to com.example
└...
```

Storing user files in private folders means except the app itself, **any other app, including file managers, cannot see the files**. This is obviously wrong. In addition, the files here will be deleted when the data is uninstalled or cleared. It is obviously inappropriate to save user files here.

Note that for the scenario like "receiving files in a chat app", it is reasonable to store the files in a private folder first. Therefore, when giving feedback to the app developer, ask them to add a "Save to Download" function (moving the files in the private folder to the `Download` folder) instead of directly changing the location of the files.
:::

::: details Another "solution"

<https://github.com/RikkaApps/SaveCopy>
:::

### Problems when cooperating with other apps

#### Use other apps to view files (standard way, ACTION_VIEW)

ExampleApp now has the ability to use other apps to open pictures. Unfortunately, ExampleApp directly passes the file path to other apps (this approach should be abandoned a few years ago!), You will find that other apps shows "file not found".

ExampleApp does not know that it is isolated, it sees storage space like this.

```
/storage/emulated/0    <---- ExampleApp's view
├───bad_sdk
├───DCIM
├───images
│   └───1.png
└───Pictures
```

Therefore, the situation is like this.

> ExampleApp: Here you are, `example_app/1.png`.
>
> Image viewer: Let's try opening this file... It seems not exists!

We all know the file is located at `/storage/emulated/0/Android/data/com.example/sdcard/images/1.png`.

::: tip No need to support this situation

In Android 11, `Android` folder is the real private folder, this approach does not work. Apps doing this must make changes. Therefore, from v4.4.0, support for this situation has been removed.
:::

#### Pass file path to other isolated apps with non-standard ways

ExampleApp now adds the ability to share pictures to ExampleSocial (ExampleSocial is also an isolated app). Unfortunately, ExampleSocial requires the use of its SDK (this method should also be abandoned!), which means that the file path is passed directly, and we can’t change the file path through the "Fix app interaction issued" function.

Assuming ExampleSocial's SDK works like this: save the picture to the `tmp` folder and pass the file path to ExampleSocial.

```
/storage/emulated/0
├───Android/data/com.example
│   └───sdcard    <---- ExampleApp's isolated storage
│       └───tmp/shared_image
└───Android/data/com.social.example
│   └───sdcard    <---- ExampleSocial isolated storage
│       └───...
└...
```

To ExampleSocial, the `tmp` folder does not exist, so sharing will fail.

To solve this problem, we need to create a "Accessible folder"-"Other application folder" rule.

```
Source app: ExampleApp
Target app: ExampleSocial
Folders: tmp
```

So that ExampleSocial can access the `tmp` folder from ExampleApp.

#### How to create my own rule?

You need to pick up your "weapon", "File monitor". File monitor is a function from "Enhanced mode".

Continuing the above example, after the sharing of ExampleApp to ExampleSocial fails, in File monitor, you will able to find records of `tmp` folder from both ExampleApp and ExampleSocial. This shows that you need to create the rule of accessing the `tmp` folder.

#### Use online rules

If there are already required rules in the online rule, you only need to add them directly. You only need to write your own rules when there are no rules or when there are errors of online rule. You can also submit your rules to the online rule library (via the "upload button").

#### Bonus

::: details <b>Involving Xposed modules</b>

First of all, you need to know that the Xposed module runs not only as the module apps itself, but also in other applications.

For example, a module named ExampleXposedModule has the function of modifying ExampleApp, it will run in ExampleApp. If ExampleXposedModule saves settings by creating files, ExampleApp also needs to read the saved file. This is the same situation as ExampleApp sharing to ExampleSocial.

What you need to do is to use "file monitoring" to monitor which files are used and create corresponding rules.

**However, the most correct approach should be to ask Xposed module developers to make changes!** (Ask module developers to use `ContentProvider` to share the configuration, or directly save the configuration in the data folder of the target app.)
:::