# How to start Shizuku?

## Start with root

For rooted devices, just start directly.

## Problems caused by manufacturers (non-root mode)

### 1. MIUI (Xiaomi) 💩

You need to enable "USB debugging (Security options)" in "Developer options".

For MIUI 11 and above, you must grant permission to user apps in Shizuku. This is because the custom permission is broken by MIUI, see [Shizuku #45](https://github.com/RikkaApps/Shizuku/issues/45) and [android-in-china/Compatibility #16](https://github.com/android-in-china/Compatibility/issues/16).

Also, **DO NOT** use the scan feature in MIUI's "Security" app, since it will disable "Developer options".

### 2. ColorOS (OPPO) 💩

You need to disable "Permission monitoring" in "Developer options".

### 3. Flyme (Meizu) 💩

You need to disable "Flyme payment protection" in "Developer options".

### 4. EMUI (Huawei) 💩

You need to enable "Allow ADB debugging options in 'Charge only' mode" in "Developer options".

### 5. OriginOS (vivo) 💩

The system setting of OriginOS does not support split-screen, you need to enable "Force activities to be resizable" in "Developer options". See [Shizuku #106](https://github.com/RikkaApps/Shizuku/issues/106).

## Start by wireless debugging

Android 11 adds a new wireless debugging function, which is located in "Developer Settings"-"Wireless debugging". Shizuku v4.0.0 and above supports this feature.

::: tip

1. After the device restarts, you need to enable the "Wireless debugging" option again and restart Shizuku.
2. "Wireless debugging" cannot be enabled when there is no WiFi connection (Shizuku already started is not affected).
3. Do not disable "Developer options" or "USB debugging".
:::

### 1. Pairing (only need to be done once)

> Starting from v4.1.0, port is automatically detected.

1. Enable "Developer options" (there are many tutorials on the web)
2. Enter "Wireless debugging"
3. Enable system's split-screen (multi-window) mode (**It's a must, because once you leave "Wireless debugging", the pairing process is stopped**)
4. Tap "Pairing device using pairing code" in "Wireless debugging"
5. Tap "Start via wireless debugging" in Shizuku and Tap "Pair"
6. Fill in the "Pairing code" and "Port", confirm<br><img :src="$withBase('/images/wireless_adb_pairing.png')" alt="Pairing process" style="max-width:320px;width:100%">
7. If the pairing is successful, "shizuku" will appear in "Paired devices" of "Wireless debugging”<br><img :src="$withBase('/images/wireless_adb_pairing_succeeded.png')" alt="Picture of successful pairing" style="max-width:320px;width:100%">
8. If you don't want to repeat this step, enable "Disable adb authorization timeout" in "Developer options"
9. If you reinstall Shizuku, you will need to do this step again

### 2. Use

1. Tap "Start via wireless debugging" in Shizuku
2. Fill in the port in "Wireless debugging" (this port will change each time "Wireless debugging" is enabled)<img :src="$withBase('/images/wireless_adb_port.png')" alt="port number schematic" style="max-width:320px;width:100%">

## Start by connecting to a computer

For non rooted devices, you need to start Shizuku with `adb`. Using `adb` is not difficult, please read the tutorial below.

::: tip

1. After the device restarts, it needs to be connected to the computer again.
2. Shizuku may stop randomly on some customized systems. Read the last part to see the solution.
:::

### 1. What is `adb`?

Android Debug Bridge (`adb`) is a versatile command-line tool that lets you communicate with a device. The adb command facilitates a variety of device actions, such as installing and debugging apps, and it provides access to a Unix shell that you Can use to run a variety of commands on a device.

See [Android Developer](https://developer.android.com/studio/command-line/adb) for more information.

### 2. Install `adb`

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

### 3. Setting `adb`

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

### 4. Start Shizuku

Copy the command and paste into the terminal. If there is no problem, you will see that Shizuku has started successfully in Shizuku app.


::: details Command for Shizuku v11.2.0+

```
adb shell sh /sdcard/Android/data/moe.shizuku.privileged.api/start.sh
```
:::

::: details Command for Shizuku v4.0.0+
Android 6.0:

```
adb shell sh /data/user/0/moe.shizuku.privileged.api/start.sh
```

Android 7.0+:

```
adb shell sh /data/user_de/0/moe.shizuku.privileged.api/start.sh
```
:::

::: details Command for Shizuku v3.x

```
adb shell sh /sdcard/Android/data/moe.shizuku.privileged.api/files/start.sh
```
:::

### 5. Shizuku randomly stops?

First, do not disable "USB debugging" and "Developer options".

Then you need to ensure that the USB usage mode does not change while connecting to computer. The common practice is to change the USB usage mode to "Charge only" in the "Developer options". The option on Android 8 is "Select USB configuration" - "Charge only", on Android 9+ the option is "Default USB configuration" - "No data transfer".

On some devices, such as Samsung, this may not work. At this point you need to check the notification that appears after connecting the computer to see the current USB usage mode, and change the mode in "Developer options" to that mode.

If that doesn't work, you can try to open the network adb (using the command `adb tcpip 5555`) and then start Shizuku.

In addition, if your system shows a dialog like "Allow accessing files" after connecting USB, please just ignore it, because the USB usage mode will change from that.

#### Sony devices

Don't click the dialog shows after connecting the USB.