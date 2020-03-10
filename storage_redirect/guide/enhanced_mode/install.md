# Installation

Enhancement module requires your device to install Magisk first since only Magisk can provide reliable boot script.

Magisk is a powerful tool that provides not only root but the ability to modify the system without actually change system files and more.

You can learn more about Magisk from [GitHub](https://github.com/topjohnwu/Magisk).

## Before you install

1. Make sure you know how to delete the module when you are unable to enter the system
2. Just in case, please backup your whole device data first

## Download

Download and install **Riru (Riru - Core)** and **Riru - Enhanced mode for Storage Isolation (Storage Redirect)** from Magisk Manager. Note, please **search "Riru" rather than full name** in Magisk Manager.

The latest is usually uploaded to Magisk with a delay. If the latest version is not uploaded or you can get online module list in Magisk Manager, you can download the latest version of [Riru](https://github.com/RikkaApps/Riru/releases) and [Enhancement module](https://github.com/RikkaApps/StorageRedirect-assets/releases/tag/assets) directly from GitHub release.

If the installation is successful, you should see the picture below:

<img :src="$withBase('/images/magisk_modules.png')" alt="Successful installation">

## Troubleshooting

### Unable to enter the system (usually due to isolation of system components)

You need to use adb to disable the module (adb is usually available in this case).

```
adb shell
su
touch /data/adb/modules/riru_storage_redirect/disable
reboot
```

There are quite a lot of tutorials about how to use adb on the Internet, so we don't need to repeat them here.

Also, if you are willing to help us solving the problem, you can execute `adb logcat > 1.txt` to save the log and send the log to [support@rikka.app](mailto://support@rikka.app).