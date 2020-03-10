# 安装

增强模块要求您的设备首先安装 Magisk，因为只有 Magisk 才能提供可靠的启动脚本。

Magisk 是一个功能强大的工具，它不仅提供 root，而且提供不修改系统文件就修改系统等其他功能。

您可以从 [GitHub](https://github.com/topjohnwu/Magisk) 了解有关 Magisk 的更多信息。

## 安装前须知

1. 请务必确认已经了解如何在无法进入系统时删除模块
2. 以防万一，请先备份整个设备的数据

## 下载

在 Magisk Manager 中下载安装 **Riru (Riru - Core)** 和 **Riru - Enhanced mode for Storage Isolation (Storage Redirect)**。注意，请在 Magisk Manager 中**搜索“Riru”而非完整名称**。

最新版本通常会延后一段时间上传至 Magisk。如果最新版本尚未更新或你无法在 Magisk Manager 取得在线模块列表，你可以直接从 GitHub release 下载 [Riru](https://github.com/RikkaApps/Riru/releases) 及 [增强模块](https://github.com/RikkaApps/StorageRedirect-assets/releases/tag/assets) 的最新版本。

若安装正常，你应该会看到下面的图：

<img :src="$withBase('/images/magisk_modules.png')" alt="安装正常图示">

## 故障排除

* 无法进入系统（通常是由于隔离了系统组件）

  你需要使用 adb 来禁用模块（这种情况下 adb 通常是可用的）。

  ```
  adb shell
  su
  touch /data/adb/modules/riru_storage_redirect/disable
  reboot
  ```

  有关如何使用 adb，网络上有相当多的教程，在此我们不必赘述。

  另外，如果你有意帮助解决问题，你可以执行 `adb logcat > 1.txt` 来保存 log 并将 log 发送至 [support@rikka.app](mailto://support@rikka.app)。