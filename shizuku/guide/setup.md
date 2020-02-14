# How to start Shizuku?

## Device is rooted

For rooted devices, start Shizuku directly in Shizuku app.

## Device is not rooted

For non rooted devices, you need to start Shizuku with `adb`. Using `adb` is not difficult, please read the tutorial below.

### 1. What is `adb`?

Android Debug Bridge (`adb`) is a versatile command-line tool that lets you communicate with a device. The adb command facilitates a variety of device actions, such as installing and debugging apps, and it provides access to a Unix shell that you Can use to run a variety of commands on a device.

See [Android Developer](https://developer.android.com/studio/command-line/adb) for more information.

### 2. Install `adb`

#### 2.1. Windows

1. Download the [SDK Platform Tools](https://dl.google.com/android/repository/platform-tools-latest-windows.zip) provided by Google and extract it to any folder
2. Open the folder with Explorer,hold down Shift and right click, select "Open PowerShell Window here" (for Windows 7, select open CMD)
3. Enter `adb`, if success, you can see a long list of content instead of the prompt not finding adb.

::: tip
Please do not close this window. The "terminal" mentioned later refers to this window (if you closed the window, please go back to step 2)
:::

::: tip
If you use PowerShell, all `adb` should be replaced with `./adb`
:::

#### 2.2. Linux / macOS

You definitely can do this yourself :D

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

#### 3.1. MIUI (Xiaomi devices)

> "It's <del>2019</del> 2020, 💩 MIUI still breaks Android features."

If you use MIUI, you also need to enable "USB Debug (Security options)" in "Developer settings".

If you use MIUI 11, MIUI 11 breaks custom permission (user apps cannot request for custom permission, please refer [this issue](https://github.com/RikkaApps/Shizuku/issues/45) and [this issue](https://github.com/android-in-china/Compatibility/issues/16)), so you must grant permission for user apps in Shizuku app.

#### 3.2. ColorOS (OPPO devices)

If you use ColorOS, you also need to disable "Permission monitor" in "Developer settings".

### 4. Start Shizuku

Enter `adb shell sh /sdcard/Android/data/moe.shizuku.privileged.api/files/start.sh` in the terminal. If there is no problem, you will see that Shizuku has started successfully in Shizuku app.

::: warning
This step needs to be re-executed each time the device is rebooted, please avoid power-off or reboot.
:::

### 5. Shizuku randomly stops?

First, do not disable "USB debugging" and "Developer options".

Then you need to ensure that the USB usage mode does not change while connecting to computer. The common practice is to change the USB usage mode to "Charge only" in the "Developer options". The option on Android 8 is "Select USB configuration" - "Charge only", on Android 9+ the option is "Default USB configuration" - "No data transfer".

On some devices, such as Samsung, this may not work. At this point you need to check the notification that appears after connecting the computer to see the current USB usage mode, and change the mode in "Developer options" to that mode.

If that doesn't work, you can try to open the network adb (using the command `adb tcpip 5555`) and then start Shizuku.

In addition, if your system shows a dialog like "Allow accessing files" after connecting USB, please just ignore it, because the USB usage mode will change from that.

#### 5.1. Huawei devices

Enable "Allow ADB debugging options in 'Charge only' mode" in "Developer Options".

#### 5.2. Sony devices

Don't click the dialog shows after connecting the USB.

#### 5.3. Meizu devices

Disable "Flyme payment protection" in "Developer Options".