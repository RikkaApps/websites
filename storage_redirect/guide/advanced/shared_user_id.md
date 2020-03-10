# App group

The Shared User ID mechanism of the Android system allows multiple apps to share the same Linux user ID and Android permissions, access files each other, and even run in the same process. These apps need to have the same signature and Shared User ID cannot be changed after installation. To simplify the understanding, we call the Shared User ID mechanism as App group in Storage Isolation.

This means:

* Some apps without storage permissions can use storage space
* Multiple apps can run in the same process

Isolation works at the process level. In versions prior to v4.0.0, only the package name was used, which obviously caused problems.

### Example

Media Store, Download Manager, Download Manager UI, and MTP host have the same Shared User ID `android.media`. Media Store and Download Manager have the same process `android:process="android.process.media"`. So the Media Store and Download Manager run in the same process.

In MIUI (and maybe other heavily modified systems), Download Manager abuses storage, so users will choose to enable isolation for it and only allow it to access `Download` folder. However, because Media Store runs the same process, Media Store can only access `Download`. This will cause the users' album not updating.

In addition, the Shared User ID mechanism makes app possible to use storage without storage permissions. Also for MIUI (and maybe other heavily modified systems), users will not have the opportunity to enable isolation for such apps, as they will not be shown in older versions.

So after v4.0.0, letting apps with the same Shared User ID use the same settings can solve this problem.

### Behavior

Suppose there are two apps `com.example` `com.example2`, and their Shared User ID is `example`.

* They use the same settings (internally they are considered as one app)
* The isolation storage location is located in `Android/data/shared-example`
* They can access app-specific folders each other