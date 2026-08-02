# User manual

[[toc]]

## Start Shizuku

Shizuku supports startup in the following three ways.

::: tip If you are using GrapheneOS

System settings - "Security" - "Secure app spawning" may need to be disabled.

[Source](https://github.com/RikkaApps/websites/pull/79#issue-1751837442)

:::

### Start with root

For rooted devices, just start directly.

### Start via wireless debugging

Starting with wireless debugging works on Android 11 or above. This startup method does not require a connection to a computer. Due to system limitations, the startup steps need to be performed again after each reboot.
Module metadata package name: com.google.android.modulemetadatacan't find the pid
Failed to find: /data/misc/anrd/
Duration of 'DUMPSYS CRITICAL': 0.52s
Duration of 'DUMP TRACES': 32.79s
Adding dir /cache/recovery (recursive: 1)
Adding dir /data/misc/recovery (recursive: 1)
Adding dir /data/misc/update_engine_log (recursive: 1)
Adding dir /data/misc/logd (recursive: 0)
/data/misc/logd: No such file or directory
MOUNT INFO: 53 entries added to zip file
execvp on command 'iotop -n 1 -m 100' failed (error: No such file or directory)
*** command 'iotop -n 1 -m 100' failed: exit code 1
Duration of 'CPU INFO': 1.24s
Duration of 'PROCESSES AND THREADS': 0.58s
Warning: Skipping "android.frameworks.cameraservice.service@2.0::ICameraService/default": cannot be fetched from service manager (null)
Warning: Skipping "android.frameworks.displayservice@1.0::IDisplayService/default": cannot be fetched from service manager (null)
Warning: Skipping "android.frameworks.schedulerservice@1.0::ISchedulingPolicyService/default": cannot be fetched from service manager (null)
Warning: Skipping "android.frameworks.sensorservice@1.0::ISensorManager/default": cannot be fetched from service manager (null)
Warning: Skipping "android.frameworks.stats@1.0::IStats/default": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.audio.effect@5.0::IEffectsFactory/default": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.audio@5.0::IDevicesFactory/default": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.biometrics.fingerprint@2.1::IBiometricsFingerprint/default": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.bluetooth.audio@2.0::IBluetoothAudioProvidersFactory/default": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.bluetooth@1.0::IBluetoothHci/default": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.cas@1.0::IMediaCasService/default": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.cas@1.1::IMediaCasService/default": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.configstore@1.0::ISurfaceFlingerConfigs/default": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.configstore@1.1::ISurfaceFlingerConfigs/default": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.drm@1.0::ICryptoFactory/clearkey": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.drm@1.0::ICryptoFactory/default": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.drm@1.0::ICryptoFactory/widevine": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.drm@1.0::IDrmFactory/clearkey": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.drm@1.0::IDrmFactory/default": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.drm@1.0::IDrmFactory/widevine": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.drm@1.1::ICryptoFactory/clearkey": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.drm@1.1::ICryptoFactory/widevine": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.drm@1.1::IDrmFactory/clearkey": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.drm@1.1::IDrmFactory/widevine": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.drm@1.2::ICryptoFactory/clearkey": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.drm@1.2::ICryptoFactory/widevine": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.drm@1.2::IDrmFactory/clearkey": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.drm@1.2::IDrmFactory/widevine": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.gatekeeper@1.0::IGatekeeper/default": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.gnss@1.0::IGnss/default": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.gnss@1.1::IGnss/default": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.gnss@2.0::IGnss/default": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.graphics.composer@2.1::IComposer/default": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.health@2.0::IHealth/default": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.ir@1.0::IConsumerIr/default": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.keymaster@4.0::IKeymasterDevice/default": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.light@2.0::ILight/default": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.media.c2@1.0::IComponentStore/software": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.media.omx@1.0::IOmx/default": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.media.omx@1.0::IOmxStore/default": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.memtrack@1.0::IMemtrack/default": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.neuralnetworks@1.0::IDevice/cpunn": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.neuralnetworks@1.0::IDevice/gpunn": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.neuralnetworks@1.1::IDevice/cpunn": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.neuralnetworks@1.1::IDevice/gpunn": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.power@1.0::IPower/default": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.power@1.1::IPower/default": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.power@1.2::IPower/default": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.power@1.3::IPower/default": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.radio.config@1.0::IRadioConfig/default": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.radio.config@1.1::IRadioConfig/default": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.radio@1.0::IRadio/em1": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.radio@1.0::IRadio/em2": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.radio@1.0::IRadio/imsAospSlot1": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.radio@1.0::IRadio/imsAospSlot2": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.radio@1.0::IRadio/se1": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.radio@1.0::IRadio/se2": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.radio@1.0::IRadio/slot1": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.radio@1.0::IRadio/slot2": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.radio@1.0::ISap/slot1": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.radio@1.0::ISap/slot2": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.radio@1.1::IRadio/em1": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.radio@1.1::IRadio/em2": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.radio@1.1::IRadio/imsAospSlot1": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.radio@1.1::IRadio/imsAospSlot2": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.radio@1.1::IRadio/se1": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.radio@1.1::IRadio/se2": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.radio@1.1::IRadio/slot1": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.radio@1.1::IRadio/slot2": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.radio@1.1::ISap/slot1": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.radio@1.1::ISap/slot2": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.radio@1.2::IRadio/em1": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.radio@1.2::IRadio/em2": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.radio@1.2::IRadio/imsAospSlot1": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.radio@1.2::IRadio/imsAospSlot2": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.radio@1.2::IRadio/se1": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.radio@1.2::IRadio/se2": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.radio@1.2::IRadio/slot1": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.radio@1.2::IRadio/slot2": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.radio@1.2::ISap/slot1": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.radio@1.2::ISap/slot2": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.radio@1.3::IRadio/em1": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.radio@1.3::IRadio/em2": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.radio@1.3::IRadio/imsAospSlot1": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.radio@1.3::IRadio/imsAospSlot2": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.radio@1.3::IRadio/se1": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.radio@1.3::IRadio/se2": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.radio@1.3::IRadio/slot1": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.radio@1.3::IRadio/slot2": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.radio@1.4::IRadio/em1": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.radio@1.4::IRadio/em2": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.radio@1.4::IRadio/imsAospSlot1": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.radio@1.4::IRadio/imsAospSlot2": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.radio@1.4::IRadio/se1": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.radio@1.4::IRadio/se2": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.radio@1.4::IRadio/slot1": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.radio@1.4::IRadio/slot2": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.sensors@2.0::ISensors/default": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.soundtrigger@2.0::ISoundTriggerHw/default": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.soundtrigger@2.1::ISoundTriggerHw/default": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.soundtrigger@2.2::ISoundTriggerHw/default": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.thermal@1.0::IThermal/default": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.usb@1.0::IUsb/default": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.usb@1.1::IUsb/default": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.wifi.supplicant@1.0::ISupplicant/default": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.wifi.supplicant@1.1::ISupplicant/default": cannot be fetched from service manager (null)
Warning: Skipping "android.hardware.wifi.supplicant@1.2::ISupplicant/default": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.allocator@1.0::IAllocator/ashmem": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.base@1.0::IBase/AgpsDebugInterface": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.base@1.0::IBase/AgpsInterface": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.base@1.0::IBase/OpImsRILd1": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.base@1.0::IBase/OpImsRILd2": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.base@1.0::IBase/ashmem": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.base@1.0::IBase/clearkey": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.base@1.0::IBase/cpunn": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.base@1.0::IBase/default": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.base@1.0::IBase/em1": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.base@1.0::IBase/em2": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.base@1.0::IBase/gpunn": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.base@1.0::IBase/imsAospSlot1": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.base@1.0::IBase/imsAospSlot2": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.base@1.0::IBase/imsSlot1": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.base@1.0::IBase/imsSlot2": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.base@1.0::IBase/internal/0": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.base@1.0::IBase/mtkAssist1": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.base@1.0::IBase/mtkAssist2": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.base@1.0::IBase/mtkCap1": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.base@1.0::IBase/mtkCap2": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.base@1.0::IBase/mtkEm1": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.base@1.0::IBase/mtkEm2": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.base@1.0::IBase/mtkRcs1": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.base@1.0::IBase/mtkRcs2": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.base@1.0::IBase/mtkSe1": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.base@1.0::IBase/mtkSe2": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.base@1.0::IBase/mtkSlot1": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.base@1.0::IBase/mtkSlot2": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.base@1.0::IBase/mtk_agps2framework": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.base@1.0::IBase/mtk_debugService2mnld": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.base@1.0::IBase/mtk_framework2agps": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.base@1.0::IBase/mtk_lbs_log_v2s": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.base@1.0::IBase/mtk_lppe_socket_agps": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.base@1.0::IBase/mtk_lppe_socket_bt": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.base@1.0::IBase/mtk_lppe_socket_ipaddr": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.base@1.0::IBase/mtk_lppe_socket_lbs": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.base@1.0::IBase/mtk_lppe_socket_network": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.base@1.0::IBase/mtk_lppe_socket_sensor": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.base@1.0::IBase/mtk_lppe_socket_wlan": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.base@1.0::IBase/mtk_meta2mnld": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.base@1.0::IBase/mtk_mnld2debugService": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.base@1.0::IBase/mtk_mnld2mtklogger": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.base@1.0::IBase/mtk_mnld2nlputils": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.base@1.0::IBase/mtk_mtklogger2mnld": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.base@1.0::IBase/se1": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.base@1.0::IBase/se2": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.base@1.0::IBase/slot1": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.base@1.0::IBase/slot2": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.base@1.0::IBase/software": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.base@1.0::IBase/widevine": cannot be fetched from service manager (null)
Warning: Skipping "android.hidl.token@1.0::ITokenManager/default": cannot be fetched from service manager (null)
Warning: Skipping "android.system.net.netd@1.0::INetd/default": cannot be fetched from service manager (null)
Warning: Skipping "android.system.net.netd@1.1::INetd/default": cannot be fetched from service manager (null)
Warning: Skipping "android.system.wifi.keystore@1.0::IKeystore/default": cannot be fetched from service manager (null)
Warning: Skipping "com.fingerprints.extension@1.0::IFingerprintEngineering/default": cannot be fetched from service manager (null)
Warning: Skipping "com.fingerprints.extension@1.0::IFingerprintNavigation/default": cannot be fetched from service manager (null)
Warning: Skipping "com.fingerprints.extension@1.0::IFingerprintSensorTest/default": cannot be fetched from service manager (null)
Warning: Skipping "vendor.goodix.hardware.biometrics.fingerprint@2.1::IGoodixFingerprintDaemon/default": cannot be fetched from service manager (null)
Warning: Skipping "vendor.mediatek.hardware.camera.bgservice@1.0::IBGService/internal/0": cannot be fetched from service manager (null)
Warning: Skipping "vendor.mediatek.hardware.camera.bgservice@1.1::IBGService/internal/0": cannot be fetched from service manager (null)
Warning: Skipping "vendor.mediatek.hardware.dfps@1.0::IFpsPolicyService/default": cannot be fetched from service manager (null)
Warning: Skipping "vendor.mediatek.hardware.gpu@1.0::IGraphicExt/default": cannot be fetched from service manager (null)
Warning: Skipping "vendor.mediatek.hardware.lbs@1.0:

#### Enable Wireless debugging

1. Search the web for how to enable "Developer options" for your device model
2. Enable "Developer options" and "USB Debugging"<br><br><img :src="$withBase('/images/enable_dev_options.png')" style="max-width:320px;width:100%">
3. Enter "Wireless debugging"<br><br><img :src="$withBase('/images/enter_wireless_debugging.png')" style="max-width:320px;width:100%">
4. Enable "Wireless debugging"<br><br><img :src="$withBase('/images/enable_wireless_debugging.png')" style="max-width:320px;width:100%">
   
#### Pairing (only needs once)

1. Start pairing in Shizuku<br><img :src="$withBase('/images/start_paring_from_shizuku.png')" style="max-width:320px;width:100%">
2. [Enable Wireless debugging](#enable-wireless-debugging)
3. Tap "Pair device with pairing code" in "Wireless debugging"<br><img :src="$withBase('/images/start_pairing.png')" style="max-width:320px;width:100%">
4. Enter pairing code in Shizuku's notificaiton<br><img :src="$withBase('/images/enter_pairing_code.png')" style="max-width:320px;width:100%">

#### Start Shizuku

<img :src="$withBase('/images/start_shizuku.png')" style="max-width:320px;width:100%">

If it does not start, try disabling and enabling wireless debugging.

### Start by connecting to a computer

This boot method works on unrooted devices running Android 10 and below. Unfortunately, this startup method requires a computer. Due to system limitations, the boot steps need to be performed again after each reboot.

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
