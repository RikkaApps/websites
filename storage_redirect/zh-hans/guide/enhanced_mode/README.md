# 介绍及安装

## 为什么需要“增强模式”

首先，“基础模式”依赖 Android 的 logcat 机制来侦测 app 进程创建。但该机制并不完全可靠（比如在 Huawei EMUI 上 logcat 默认关闭），你会发现存储重定向完全不起作用。此外，日志可以晚于应用本身运行，因此应用可以在时间间隔内创建/访问文件。

“增强模式”使用 [Riru](https://github.com/RikkaApps/Riru) 来注入应用进程。因此，当应用进程启动时，它可以使用 socket 与存储重定向的核心进程进行通信。这可以避免上述问题。

另外，一些影响体验的问题也只能在“增强模式”下解决。你可以在应用中看到所有可用的功能。

## 性能影响

“增强模式”只带来可以忽略不记的性能影响。

## 下载和安装

我们暂时只提供 [Magisk](https://github.com/topjohnwu/Magisk) 模块，因为只有 Magisk 可以提供**可靠的**开机时执行脚本。

### 安装前须知

1. 请务必确认已经了解如何在无法进入系统时删除模块
2. 以防万一，请先备份整个设备的数据
3. 如果有 v12 以前的模块，必须删除

### 版本对应

**警告：你必须使用版本正确的模块，否则轻则功能不正常，重则无法开机。**

| App    | Riru - Storage Redirect | Riru - Core |
|--------|-------------------------|-------------|
| 1.6.9+ | v19.6+                  | v19+        |

::: tip
**提示**

从 v19.6 起，安装时存储重定向版本会受到检查，因此你只需要**总是使用最新版应用**和**安装了新版本模块时不要降级应用**。
:::

### Magisk 模块

1. 在 **Magisk Manager** 中下载安装 **Riru - Core**
2. 在 **Magisk Manager** 中下载安装 **Riru - Storage Redirect**
3. 可选，下载 [检测 app for Riru v19.4](https://github.com/RikkaApps/Riru/releases/download/v19.4/app-release.apk) 来检查 Riru 是否正常工作

### Magisk v19+
* Install **Riru - Core** from **Magisk Manager**
* Install **Riru - Storage Redirect** from **Magisk Manager**

### Magisk v17-v18.1
* [Riru - Core v19.4](https://github.com/RikkaApps/Riru/releases/download/v19.4/magisk-v17-riru-core-v19.4.zip)
* [Riru - Storage Redirect v19.6](https://github.com/RikkaApps/StorageRedirect-assets/releases/download/assets/riru-storage-redirect-v19.6-magisk-v17.zip)