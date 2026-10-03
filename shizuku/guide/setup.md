#启用无线调试

1.开始配对<mayor youmakow<>：src="$withBase('/images/start_paring_from_shizuku.png')"\max="max-width:320；：100％">#####开始 Shizuku<图片:src="$withBase('/images/start_shizuku.png')"maxyow="max-width:320 you；mages:100％">]]

如果没有启动，请尝试禁用并启用无线调试。

从连接到计算机开始

此引导方法适用于运行Android 10及以下版本的非根设备。不幸的是，这种启动方法需要电脑。由于系统限制，每次重新启动后都需要再次执行启动步骤。

已连接设备列表

Windows 10：在这里打开PowerShell窗口按住Shift以显示此选项](https://github.com/RikkaApps/websites/pull/79#issue-1751837442)

:::

Windows 7：在这里打开命令窗口

Windows 7:在这里打开命令窗口

1.adb shell sh /sdcard/Android/data/moe.shizuku.privileged.api/start.sh####：：：shizukuv11. 2.0+的详细信息命令

已连接设备列表此引导方法适用于运行的安卓系统，这是我最喜欢的

Windows 10:在这里打开 PowerShell you you you Shift you you you]（https://github.com/RikkaApps/websites/pull/79#issue-1751837442）

亚洲开发银行进入
通过无线调试启动：持续显示“搜索配对服务”许多厂商对安卓你看，你看
请允许 Shizuku在你吗
搜索配对服务需要接入本地网络，在我的应用程序中
   
通过无线调试启动：点击“输入配对代码”后立即失败

MIUI（小米，POCO）
如果成功***************************
请允许 Shizuku你呢
从无线调试开始，在这篇文章中，我想了一下这篇博文

在系统设置中将通知样式从“you”-“you”you“you”MIUI you（POCO）

此时*****************************************************************************************************************************************************************************************************

打开系统设置并转到About。

点击“建设号”快速多次，可以看到类似“你是开发商”的消息。

此时，您应该能够在设置中找到“开发人员选项”，启用“USB调试”。

#### What is `adb`?

Android Debug Bridge (`adb`) is a versatile command-line tool that lets you communicate with a device. The adb command facilitates a variety of device actions, such as installing and debugging apps, and it provides access to a Unix shell that you Can use to run a variety of commands on a device.

See [Android Developer](https://developer.android.com/studio/command-line/adb) for more information.

#### Install `adb`

1. Download "SDK Platform Tools" provided by Google and extract it to any folder

   * [Windows](https://dl.google.com/android/repository/platform-tools-latest-windows.zip)
   * [Linux](https://dl.google.com/android/repository/platform-tools-latest-linux.zip)
   * [Mac](https://dl.google.com/android/repository/platform-tools-latest-darwin.zip)

2. Open the folder, right click to select

   * Windows 10: Open PowerShell windows here (**hold down Shift to show this option**)
   * Windows 7: Open command window here (**hold down Shift to show this option**)
   * Mac or Linux: Open Terminal

3. Enter `adb`, if success, you can see a long list of content instead of the prompt not finding adb.

::: tip
1. Please do not close this window. The "terminal" mentioned later refers to this window (if you closed the window, please go back to step 2)
2. If you use PowerShell or Linux/Mac, all `adb` should be replaced with `./adb`
:::

#### Setting `adb`

To use `adb` you first need to turn on USB debugging on your device, usually by following these steps:

1. Open system Settings and go to About.
2. Click "Build number" quickly for several times, you can see a message similar to "You are a developer".
3. At this point, you should able to find "Developer Options" in Settings,  enable "USB Debugging".
4. Connect the device to the computer and type `adb devices` in the terminal.
5. At this time, the dialog "Allow debugging" will appear on the device, check "Always allow" and confirm.
6. Enter `adb devices` again in the terminal. If there is no problem, you will see something like the following.

   ```
   List of devices attached
   XXX      device
   ```

::: tip
The steps for enabling Developer Options on different devices may vary, please search for yourself.
:::

#### Start Shizuku

Copy the command and paste into the terminal. If there is no problem, you will see that Shizuku has started successfully in Shizuku app.


::: details Command for Shizuku v11.2.0+

```
adb shell sh /sdcard/Android/data/moe.shizuku.privileged.api/start.sh
```
:::

## FAQ

Many manufacturers have made modifications to the Android system that prevent Shizuku from working properly.

### Start via wireless debugging: keeps showing "Searching for pairing service"

Please allow Shizuku to run in the background.

Searching for pairing service requires access to the local network, and many manufacturers disable network access for apps as soon as they become invisible. You can search the web for how to allow apps to run in the background on your device.

### Start via wireless debugging: immediately fail after tapping "Enter pairing code"

#### MIUI (Xiaomi, POCO)

Switch notification style to "Android" from "Notification" - "Notification shade" in system settings.

### Start via wireless debugging/Start by connecting to a computer: the permission of adb is limited

#### MIUI (Xiaomi, POCO)

Enable "USB debugging (Security options)" in "Developer options". **Note that this is a separate option from "USB debugging".**

####ColorOS（OPPO 和一加）

禁用“开发人员选项”中的“权限监视”。

####Flyme（魅族）

禁用“开发者选项”中的“Flyme支付保护”。

###通过无线调试启动/通过连接电脑启动：Shizuku 随机停止

####所有设备

-确保Shizuku可以在后台运行。
-不要禁用“USB调试”和“开发人员选项”。
-在“开发者选项”中将USB使用模式改为“只充电”。
  
在Android 8上，选项是“选择USB配置”-“只充电”。
  
在Android 9+上，选项是“默认USB配置”--“禁止数据传输”。

-（Android 11+）启用“禁用adb授权超时”选项

####EMUI（华为）

在“开发人员选项”中启用“允许ADB调试选项在‘只收费’模式下”。

####MIUI（小米，POCO）

请勿使用MIUI“安全”应用中的扫描功能，否则将导致“开发者选项”被禁用。

####索尼

连接USB后不要点击对话框显示，因为它会改变USB的使用模式。

###通过root启动：无法在引导时启动

Please allow Shizuku to run in the background.
