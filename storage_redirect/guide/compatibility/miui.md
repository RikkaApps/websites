# Xiaomi (MIUI)

MIUI has a series of restrictions which **enabled by default**. However, these restrictions are too ridiculous, the normal functions of apps are always broken by them. 

What's even more irritating is that these restrictions are controlled by MIUI's online rules and will not be enabled for apps like WeChat that are popular in mainland China.

## "Display pop-up window while in the background" permission is denied by default

"Display pop-up window while in the background" is a permission added by MIUI, and it's **denied by default**.

It's too ridiculous since denying this permission will **break the normal behavior of apps**. It is strongly recommended to allow this permission for all well-designed apps.

### Features affected

1. Tap the notification of "Export isolated file" rule, the file cannot be opened
2. "Error during interaction with Play Store" when purchasing from Google Play

### Solution

1. Enter "App Info" of "Storage Isolation"
2. Tap "Other permissions" (for mainland China version of MIUI is "Permission" or "Permission management")
3. Change "Show interface in background" to "Allow"

For files that cannot be opened, you may also need to allow "Display pop-up window while in the background" for the app responsible for opening the file.

For Google Play purchase issues, you also need to allow "Display pop-up window while in the background" for Google Play.

## Battery saver from MIUI is enabled by default

For well-designed apps, using MIUI's power saving features **will not save more power**, instead some features may be broken.

### Features affected

Uncertain.

### Solution

1. Enter "App Info" of "Storage Isolation"
2. Click "Battery saver"
3. Select "No restrictions"