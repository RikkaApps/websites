# 如何启动 Shizuku

## 通过 root 启动

对于已 root 设备，直接启动即可。

## 由厂商造成的问题（非 root 方式）

### 1. MIUI（小米）💩

你需要在“开发者选项”中开启“USB 调试（安全设置）”。

对于 MIUI 11 及以上版本，你必须在 Shizuku 内授予使用者应用权限。这是因为自定义权限功能被破坏，参见 [Shizuku #45](https://github.com/RikkaApps/Shizuku/issues/45) 和 [android-in-china/Compatibility #16](https://github.com/android-in-china/Compatibility/issues/16)。

此外，**不要**使用 MIUI 的“手机管家”的扫描功能，因为它会禁用“开发者选项”。

### 2. ColorOS（OPPO）💩

你需要在“开发者选项”中关闭“权限监控”。

### 3. Flyme（魅族）💩

你需要在“开发者选项”中关闭“Flyme 支付保护”。

### 4. EMUI (华为) 💩

你需要在“开发者选项”中开启「“仅充电”模式下允许 ADB 调试选项」。

### 5. OriginOS (vivo) 💩

OriginOS 的设置不支持分屏，你需要在“开发者设置”中开启“强行将活动设为可调整大小”。参见 [Shizuku #106](https://github.com/RikkaApps/Shizuku/issues/106)。

## 通过无线调试启动

Android 11 添加了全新的无线调试功能，该功能位于“开发者设置”-“无线调试”。Shizuku v4.0.0 起支持此功能。

::: tip 提示

1. 设备重新启动后需要再次打开“无线调试”选项并重新启动 Shizuku。
2. 无 WiFi 连接时无法启用“无线调试”（已启动的 Shizuku 不受影响）。
3. 不可关闭“开发者选项”或“USB 调试”。
:::

### 1. 配对（只需进行一次）

> 从 v4.1.0 起，端口号自动检测。

1. 启用“开发者选项”（在网络上有非常多的教程）
2. 进入“无线调试”
3. 启用系统的分屏（多窗口）功能（**必须，因为一旦离开“无线调试”，配对过程就会被停止**）
4. 点按“无线调试”中的“使用配对码配对设备”
5. 点按 Shizuku 中的“通过无线调试启动”，点按“配对”
6. 填入“配对码”及“端口号”后确定<br><img :src="$withBase('/images/wireless_adb_pairing.png')" alt="配对过程示意图" style="max-width:320px;width:100%">
7. 如果配对成功，“无线调试”中的“已配对的设备”中会出现“shizuku”<br><img :src="$withBase('/images/wireless_adb_pairing_succeeded.png')" alt="配对成功示意图" style="max-width:320px;width:100%">
8. 如果你不希望重新进行此步骤，打开“开发者设置”中的“停用 adb 授权超时功能”
9. 如果重新安装 Shizuku，则需要再次执行此步骤


### 2. 使用

1. 打开 Shizuku 中的“通过无线调试启动”
2. 填入“无线调试”中的端口号（此端口号会在每次启用“无线调试”时变化）<br><img :src="$withBase('/images/wireless_adb_port.png')" alt="端口号示意图" style="max-width:320px;width:100%">

## 通过连接电脑启动

对于未 root 设备，需要借助 adb 启动。使用 adb 并不困难，请阅读下面的教程。

::: tip 提示

1. 设备重新启动后需要再次连接电脑。
2. 在一些定制系统上 Shizuku 可能会随机停止。阅读最后的部分可以看到解决方案。
:::

### 1. 什么是 `adb`？

Android 调试桥 (`adb`) 是一个通用命令行工具，其允许您与模拟器实例或连接的 Android 设备进行通信。它可为各种设备操作提供便利，如安装和调试应用，并提供对 Unix shell（可用来在模拟器或连接的设备上运行各种命令）的访问。

更多信息请查看 [Android Developer](https://developer.android.google.cn/studio/command-line/adb)。

### 2. 安装 `adb`

1. 下载由 Google 提供的“SDK 平台工具”并解压至任意文件夹

   * [Windows](https://dl.google.com/android/repository/platform-tools-latest-windows.zip)
   * [Linux](https://dl.google.com/android/repository/platform-tools-latest-linux.zip)
   * [Mac](https://dl.google.com/android/repository/platform-tools-latest-darwin.zip)

2. 打开文件夹，右键选择

   * Windows 10：在此处打开 PowerShell 窗口（**需要按住 Shift 才会显示该选项**）
   * Windows 7：在此处打开命令行窗口（**需要按住 Shift 才会显示该选项**）
   * Mac 或 Linux：打开 Terminal（终端）

3. 输入 `adb` 如果可以看到一长串内容而不是提示找不到 adb 则表示成功

::: tip 提示
1. 请不要关闭该窗口，后面提到的“终端”都是指此窗口（如果关闭请重新进行第 2 步）。
2. 如果使用 PowerShell 或是 Linux 及 Mac，所有 `adb` 都要替换成 `./adb`。
:::

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

### 4. 启动 Shizuku

复制指令并粘贴到终端中，如无问题你将会在 Shizuku 中看到已启动成功。

::: details 适用于 Shizuku v11.2.0+ 的指令 

```
adb shell sh /sdcard/Android/data/moe.shizuku.privileged.api/start.sh
```
:::

::: details 适用于 Shizuku v4.0.0+ 的指令
Android 6.0:

```
adb shell sh /data/user/0/moe.shizuku.privileged.api/start.sh
```

Android 7.0+:

```
adb shell sh /data/user_de/0/moe.shizuku.privileged.api/start.sh
```
:::

::: details 适用于 Shizuku v3.x 的指令

```
adb shell sh /sdcard/Android/data/moe.shizuku.privileged.api/files/start.sh
```
:::

### 5. Shizuku 随机停止？

首先，不要关闭“USB 调试”及“开发者选项”。

然后你需要保证在连接电脑期间 USB 使用模式不变。通常的做法是在“开发者选项”中将 USB 使用模式改为“仅充电”。在 Android 8 上的选项是“选择 USB 配置”-“仅充电”；在 Android 9+ 上选项是“默认 USB 配置”-“不进行数据传输”。

在一些设备上（如三星），这么做可能不起作用。此时你需要查看连接电脑后出现的通知来查看当前的 USB 使用模式，并将开发者选项中的模式改为该模式。

如果还是不行，你可以尝试打开网络 adb（使用指令 `adb tcpip 5555`）后再启动 Shizuku。

此外，如果你的系统在连接 USB 后会弹出类似“是否允许访问文件”的对话框，请不要点击它，因为点击后 USB 使用模式会发生变化。

#### Sony 设备

不要点击连接 USB 后弹出的对话框。
