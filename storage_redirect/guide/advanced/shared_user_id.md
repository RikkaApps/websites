# App group

The Shared User ID mechanism of the Android system allows multiple apps to share the same Linux user ID and Android permissions, access files each other, and even run in the same process. These apps need to have the same signature and Shared User ID cannot be changed after installation. To simplify the understanding, we call the Shared User ID mechanism as App group in Storage Isolation.

This means:

* Some apps without storage permissions can use storage space
* Multiple apps can run in the same process

Isolation works at the process level. In versions prior to v4.0.0, only the package name was used, which obviously caused problems.

### Behavior change

Suppose there are two apps `com.example` `com.example2`, and their Shared User ID is `example`.

* They use the same settings (internally they are considered as one app)
* The isolation storage location is located in `Android/data/shared-example`
* They can access app-specific folders each other