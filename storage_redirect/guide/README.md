# Introduction

Before introducing "Storage Isolation", please see if you have the following problems ("Storage Isolation" is born to solve these problems).

* When an app requests storage permission, do you want let it access specific files only.

* When you open your file manager or use your phone as a USB flash drive, do you find that there are a large number of folders that you don’t know, it is difficult to find files you want to find in them; do you want to know what app created the file and if it can be deleted.

::: details Example
<br>
<img :src="$withBase('/images/chaos_storage.png')" alt="An example">
:::

### Why is this so?

To answer this question, we first need to introduce the storage and storage permissions of the Android system.

* **Shared storage (requires storage permission):** Save user files such as photos and documents.
* **App-specific storage (no permissions required):** Save the app's private data. Only accessible to the app itself, it will be deleted after uninstallation.

From this you will find that the design of storage permissions in the Android system is too simple<Sup>**[1]**</sup>, users can only choose whether to grant permission to the entire shared storage. And if users need to use functions such as "send pictures", they can only choose to grant permissions.

At the same time, you will find that some app says "require storage permission to save data" are actually deceiving you. It's actually to avoid being deleted after uninstallation. Note that is is wrong<sup>**[2]**</sup>. A common purpose is to persist and share the identity used to track users. This is very common in apps from areas such as mainland China where users are weakly aware of privacy.

<sub>**[1]** In fact, the Android system provides other ways to use storage, but few apps use it.</sub>
<p><sup>**[2]** Uninstallation means that the user no longer wants to use the app, and files excluding saved intuitively by users should be deleted. Doing so will cause some files that will never be deleted to take up storage space.</sup>

## Storage Isolation

With isolation enabled:
* App can no longer use shared storage space arbitrarily while you can specify what folders it can use.
* The files created by the app will be deleted after uninstalling, but useful files will be saved in the folder you specified.

For how to use "Storage Isolation" app, please read the following documentation.

### Requirements

* Android 6.0 or above
* root
* Magisk (required by Enhanced mode)