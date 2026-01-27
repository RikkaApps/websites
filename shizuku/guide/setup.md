# User manual

[[toc]]

## Start Shizuku

Shizuku supports startup in the following three ways.

::: tip If you are using GrapheneOS

System settings - "Security" - "Secure app spawning" may need to be disabled.


#### What is `adb`?

Android Debug Bridge (`adb`) is a versatile command-line tool that lets you communicate with a device. The adb command facilitates a variety of device actions, such as installing and debugging apps, and it provides access to a Unix shell that you Can use to run a variety of commands on a device.

See [Android Developer](
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

#### ColorOS (OPPO & OnePlus)

Disable "Permission monitoring" in "Developer options".

#### Flyme (Meizu)

Disable "Flyme payment protection" in "Developer options".

### Start via wireless debugging/Start by connecting to a computer: Shizuku randomly stops

#### All devices

- Make sure Shizuku can run in the background.
- Do not disable "USB debugging" and "Developer options".
- Change the USB usage mode to "Charge only" in the "Developer options".
  
  On Android 8, the option is "Select USB configuration" - "Charge only".
  
  On Android 9+, the option is "Default USB configuration" - "No data transfer".

- (Android 11+) Enable "Disable adb authorization timeout" option

#### EMUI (Huawei)

Enable "Allow ADB debugging options in 'Charge only' mode" in "Developer options".

#### MIUI (Xiaomi, POCO)

Do not use the scan feature in MIUI's "Security" app, since it will disable "Developer options".

#### Sony

Don't click the dialog shows after connecting the USB, because it will change USB usage mode.

### Start via root: cannot start on boot

Please allow Shizuku to run in the background.
