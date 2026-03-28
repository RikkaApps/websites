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

Android Debug
