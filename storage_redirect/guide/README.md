# Introduction

As of the time of this writing (2023-03-06), the abuse of public storage by applications in Android is still an unresolved issue.

Storage Isolation is dedicated to solving this problem with as little or no impact on application functionality as possible.

To illustrate this clearly, we have to introduce some technical concepts first.

### Android's design for storage space

Android provides two categories with a total of three locations to store their files, which are:

#### data area

Corresponding folders:

- `/data/user/<user_id>/<package_name>`
- `/storage/emulated/<user_id>/Android/data/<package_name>`

> `<user_id>` is the user ID that relates to Android's multi-user/working profile mechanism and is not relevant to the topic of this writing.
>
> `<package_name>` is the unique ID of the application, which is commonly known as the "package name".

These two folders should be used to store the application's own data and have the following characteristics.

- The application does not need to request permission to use them
- Only accessible by the application itself
- Will be deleted after uninstalling the app or clearing the app data

> The usage of `/storage/emulated/<user_id>/Android/data/<package_name>` and `/data/user/<user_id>/<package_name>` are same. It exists for some historical reasons: in Android 4.x and earlier, the storage space that came with the device was usually very small, and external SD cards was used to expand the storage space, which was then also used to store the app's own data.

#### Internal storage

Corresponding folders:

- `/storage/emulated/<user_id>`

This place should store files that are useful to users, such as pictures saved by users in the application. Android system provides `DCIM`, `Download`, `Pictures` and other public folders for storing photos, downloaded files, etc. in different categories. This place can also be called `Share storage`, `Public storage`, etc.

This place have the following characteristics.

- Storage permissions are required to read
- Storage permissions are required to write<sup>**〔1〕**</sup>
- Applications with storage permissions granted can read all the files, including those written by other applications or the user
- The files written by the app will not be deleted after uninstalling the app or clearing the app data

<sub>**〔1〕** There are changes after Android 11, see below</sub>

### The way the application accessing the files

In addition to the most basic direct access through the file path, Android also provides several other ways.

* Media store

  Media store is a system application that has an internal database containing information about all files in the internal storage. The most common use case is to query all image files from Media store. Reading and writing files can also be done through the media store.

* Storage Access Framework, SAF

  SAF is a feature that has been added since Android 4.4. With SAF, users can open files, save files, etc. from a unified UI provided by the system. The application can also become a provider by itself, and other applications that use SAF can use it.

  The benefits of SAF are that the application can only use files selected by the user, a unified UI, the application does not need to request permissions, and so on.
  
  However, most applications prefer to request storage permissions and implement the required functionality themselves.

### What is the problem of application abuse of storage space

The abuse of storage space is the abuse of "internal storage space".
Some applications or some SDKs will want their data files not to be deleted after uninstallation, so they will choose "internal storage" to write their data files

If apps have the ability to "send pictures", "save files", etc., users often have to grant storage permissions to the app. Then they can write a bunch of weird folders in the "internal storage (see below). Over time, the user's storage space will become chaotic.

::: details Example

Many applications that abuse storage space create a bunch of weird folders, even named "SystemConfig" to make users think they are system files.

<img :src="$withBase('/images/chaos_storage.png')" alt="Example">
:::

#### Scoped storage added by Android 11

Many people think that Scoped storage can this problem, but this is not the case.

The behavior of applications subject to Scoped storage when using the public storage changes as follows.

- Only files of the corresponding type can be written in the public folder (but the system will only check if the file name matches the rules)
- Write files in public folders without any permissions (this is more lenient than before!)

In addition, Scoped storage only affects apps that target Android 11 or above (i.e. Target API ≥ 31). Apps that are not on Google Play or older apps that have stopped being updated are not restricted.

### Solving the problem

To solve this problem above, we have created this application - Storage Isolation.

The user can enable isolation for a specific app. The "internal storage" used by the app will actually become a folder in `/storage/emulated/<user_id>/Android/data/<package_name>`. Therefore, the real "internal storage" will not be contaminated and the files created by it will be deleted after uninstallation.

We provide several mechanisms to ensure that the isolated application works properly when it needs to use the files in the Internal Storage. Please read the subsequent documentation.