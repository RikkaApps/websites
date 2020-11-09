# Introduction

### "Bad app" abuses storage permissions

Currently, the design of the Android system's storage permissions is too simple, many "bad apps" are abusing storage permissions.

To explain this problem, we first need to introduce the design of the storage of the Android system.


The Android system has a simple design for storage<sup>**[1]**</sup>:

```
/storage/emulated/0
├───Android
│   ├───data/com.example  <---- No permission required
│   ├───media/com.example <---- No permission required
│   └───obb/com.example   <---- No permission required
├───DCIM
├───Download
├───Pictures
└─── ...
```

* `DCIM` `Download` `Pictures` and other public folders
   
  Used to save pictures, downloaded files, etc., **requires** storage permissions, **can only be deleted by users**. Apps can also create their own folders if necessary.

* Folders in `Android`

  Used to save the app's own data and cache. **No permission** is required. **Deleted after clearing data or uninstalling.**

However, the problem is that storage permissions can only be chosen to grant or deny. Once granted, the app can read and write to **all folders**.

This has been abused by many "bad apps" and "bad SDKs". They ask for storage permissions and even refuse to run without permission. They need to keep the identity used to track users and **avoid being deleted after uninstallation**. In addition, multiple such apps can also share the identity. This is very common in apps from areas such as mainland China where users have a weak sense of privacy.

As you can see in the example below, many "bad apps" create a bunch of weird folders, even naming them "SystemConfig" to make users think they are system files.

::: details Example of abusing storage
<br>
<img :src="$withBase('/images/chaos_storage.png')" alt="Example of abusing storage">
:::

Many times users can only be forced to grant them storage permissions because they need to use features such as Send Pictures<sup>**[2]**</sup>.

<sub> **[1]** In addition, `/data/user` can be used save the apps' own data, but it has nothing to do with the theme, so it is not explained</sub>
<p><sub> **[2]** The Android system provides other ways for users to grant the permission for specific files or folders, but few apps use them.</sub>

### Storage Isolation

To solve this problem, we created this app — Storage Isolation.

Users can enable isolation for specific apps, and apps will no longer be able to use real storage space.

```
/storage/emulated/0
├───Android/data/com.example
│   └───sdcard <---- App visible storage space
└─── ...
```

In addition, users can specify which folders the app can access. For specific usage, please read the subsequent documents.