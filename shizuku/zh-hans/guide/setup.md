# 如何启动 Shizuku

## 设备已 root

对于已 root 设备，直接在 Shizuku 应用启动即可。

## 设备未 root

对于未 root 设备，需要借助 adb 启动。使用 adb 并不困难，请阅读下面的教程。

### 1. 什么是 `adb`？

Android 调试桥 (`adb`) 是一个通用命令行工具，其允许您与模拟器实例或连接的 Android 设备进行通信。它可为各种设备操作提供便利，如安装和调试应用，并提供对 Unix shell（可用来在模拟器或连接的设备上运行各种命令）的访问。

更多信息请查看 [Android Developer](https://developer.android.google.cn/studio/command-line/adb)。

### 2. 安装 `adb`

#### 2.1. Windows

1. 下载由 Google 提供的 [SDK Platform Tools](https://dl.google.com/android/repository/platform-tools-latest-windows.zip) 并解压至任意文件夹
2. 使用资源管理器打开文件夹，按住 Shift 点击右键选择“在此处打开 PowerShell 窗口”（如果是 Windows 7 则是打开 CMD）
3. 输入 `adb` 如果可以看到一长串内容而不是提示找不到 adb 则表示成功

::: tip
请不要关闭该窗口，后面提到的“终端”都是指此窗口（如果关闭请重新进行第 2 步）。
:::

::: tip
如果使用 PowerShell，所有 `adb` 都要替换成 `./adb`。
:::

#### 2.2. Linux / macOS

你们一定可以自己解决 :D

### 3. 设置 `adb`

要使用 `adb` 你首先需要在设备上打开 USB 调试功能，通常需要经过以下步骤：

1. 打开系统设置，进入关于
2. 连续数次点击 "Build number" 后看到类似 "You are a developer" 的提示
3. 此时你应该可以在设置中找到“开发者选项”，进入后开启“USB 调试”
4. 连接设备到电脑，在终端中输入 `adb devices`
5. 此时设备上会出现“是否允许调试”的对话框，勾选“总是允许”后确认
6. 再次在终端中输入 `adb devices`，如无问题将会看到类似如下内容
   ```
   List of devices attached
   XXX      device
   ```

::: tip
不同设备开启“开发者选项”的步骤可能有所不同，请自己搜索。
:::

#### 3.1. MIUI 设备

> “<del>9012</del> 0202 年，辣鸡 MIUI 还是会破坏 Android 的特性”

如果你使用 MIUI，你还需要开启“USB 调试（安全设置）”。

如果你使用 MIUI 11，MIUI 11 破坏了自定义权限（使用者应用无法请求自定义权限，参考 [这个 issue](https://github.com/RikkaApps/Shizuku/issues/45) 和 [这个 issue](https://github.com/android-in-china/Compatibility/issues/16)），你必须在 Shizuku app 内授予使用者应用权限。

### 4. 启动 Shizuku

在终端中输入 `adb shell sh /sdcard/Android/data/moe.shizuku.privileged.api/files/start.sh`，如无问题你将会在 Shizuku 中看到已启动成功。

::: warning
重启设备后需要重新进行，因此请尽量避免关机和重新启动。
:::

### 5. Shizuku 随机停止？

1. 不要关闭“USB 调试”及“开发者选项”
2. 连接设备到电脑后不要修改 USB 使用模式
3. 在 Android 8 上你可以尝试在“开发者选项”中将“选择 USB 配置”改为“仅充电”；在 Android 9 及以上则是将“默认 USB 配置”改为“不进行数据传输”（如果不行，请尝试别的选项）
4. 如果还是不行，你可以尝试打开网络 adb（使用指令 `adb tcpip 5555`）后再启动 Shizuku

#### 5.1. Huawei 设备

在“开发者选项”中开启「“仅充电”模式下允许 ADB 调试选项」。

#### 5.2 Sony 设备

不要点击连接 USB 后弹出的对话框。