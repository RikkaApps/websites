# Introduction and Installation

## Why "Enhanced mode"

First, "Basic mode" relies on Android's logcat mechanism to detect the creation of app processes. But the mechanism is not completely reliable (e.g., logcat is disabled by default on Huawei EMUI), you will find that Storage Redirect does not work at all if there is the problem. Also, the log can be later than the app itself runs, so the app can create/access files in this interval.

"Enhanced mode" uses [Riru](https://github.com/RikkaApps/Riru) to inject into app processes. So that it's can use socket to communicate with the core process of Storage Redirect when the app process starts. This can totally avoid the above-mentioned problem.

In addition, some issues affecting the experience can only be solved under "Enhanced mode". You can see all the features available in app.

## Performance impact

"Enhanced mode" only brings performance impact that can be ignored.

## Download and install

We **temporarily** only provide [Magisk](https://forum.xda-developers.com/apps/magisk/official-magisk-v7-universal-systemless-t3473445) modules, beacuse only Magisk can provide reliable boot script.

### Before you install

1. Make sure you know how to delete the module when you are unable to enter the system
2. Just in case, please backup your whole device data first
3. If there are pre-v12 modules, they must be deleted

### Version corresponding

**Warning: You must use correct version of module, otherwise functions may not work properly, or the worst device can't boot.**

| App    | Riru - Storage Redirect | Riru - Core |
|--------|-------------------------|-------------|
| 1.6.9+ | v19.6+                  | v19+        |

::: tip
**Tip**

From v19.6, the version of Storage Redirect will be checked on installation, so the only thing you need to do is **always use the latest app** and **do not downgrade app with newer module installed**.
:::

### Magisk modules

1. Download and install **Riru - Core** in **Magisk Manager**
2. Download and install **Riru - Storage Redirect** in **Magisk Manager**
4. Optionally, download [check app for Riru v19.4](https://github.com/RikkaApps/Riru/releases/download/v19.4/app-release.apk) to check if Riru works

### Magisk v19+
* Install **Riru - Core** from **Magisk Manager**
* Install **Riru - Storage Redirect** from **Magisk Manager**

### Magisk v17-v18.1
* [Riru - Core v19.4](https://github.com/RikkaApps/Riru/releases/download/v19.4/magisk-v17-riru-core-v19.4.zip)
* [Riru - Storage Redirect v19.6](https://github.com/RikkaApps/StorageRedirect-assets/releases/download/assets/riru-storage-redirect-v19.6-magisk-v17.zip)