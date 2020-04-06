# Tutorial

## What happens when isolation is enabled?

Assuming there is an application called ExampleApp (the package name is `com.example`). It uses an SDK that abuses storage (assuming it will create `bad_sdk` folder). Then after granting ExampleApp storage permission, your storage space will look like this.

```
/storage/emulated/0
├───Android
├───bad_sdk
├───DCIM
├───Donwload
├───Pictures
└───...
```

Now that we enable isolation for ExampleApp, the storage space available to it is actually a folder in `Android/data/com.example`. We call this folder "isolated storage".

ExampleApp will only able to use the files in this folder, and the folders created by it will also be saved in this folder.

```
/storage/emulated/0
├───Android/data/com.example
│   └───sdcard       <---- ExampleApp can only see this folder
│       └───bad_sdk
└...
```

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

::: details <b>How to clean/move existing files</b>

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

The purpose of export is to export user files (save file operations initiated by the user, such as saving pictures, downloading files, etc.).

If the app saves user files to the private data folder (such as `Android/data/com.example/files`), this means that the app developer does not want users to use these files directly or they do something wrong. You should give up or ask the app developer to make changes.

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

To solve this problem is simple, enable "Fix app interaction issues" in "Enhanced mode".

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

#### Additional

::: details <b>Involving Xposed modules</b>

First of all, you need to know that the Xposed module runs not only as the module apps itself, but also in other applications.

For example, a module named ExampleXposedModule has the function of modifying ExampleApp, it will run in ExampleApp. If ExampleXposedModule saves settings by creating files, ExampleApp also needs to read the saved file. This is the same situation as ExampleApp sharing to ExampleSocial.

What you need to do is to use "file monitoring" to monitor which files are used and create corresponding rules.

**However, the most correct approach should be to ask Xposed module developers to make changes!** (Ask module developers to use `ContentProvider` to share the configuration, or directly save the configuration in the data folder of the target app.)
:::