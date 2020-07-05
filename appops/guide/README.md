# Learn App Ops

In short, **App Ops** is an app that **modifies the settings of "appops" in Android system**.

## What is "appops" in Android?

There is a system service called "appops" in the Android system that defines a series of "application operation" (op). Some of the "application operations" correspond to "permissions" (such as `OP_CAMERA` and "camera permission"), and the rest correspond to separate functions (such as `OP_READ_CLIPBOARD` and read clipboard, but there is no "read clipboard permission").

Stock Android systems use appops to track permission usage, and appops is also used in part for permission control. Each app has its own "appops" setting, and when the app needs to perform certain actions, the system checks the "appops" settings while checking permission. If permission is not granted, the app will receive an error when performing the operation. But the difference is, if "appops" is set to "Ignore" <sup>**\[1\]**</sup>, the app will not receive the error and will only receive blank data <sup>**\[2\]**</sup>.

However, the stock Android system does not provide a user interface that modifies the "appops" settings.

<sub>**\[1\]** App Ops app actually shows "Ignore" as "Deny"</sub>
<br><sub>**\[2\]** The actual behavior depends on the system, and the app can also check if "appops" is denied</sub>

## What is App Ops app?

The core function of App Ops app is to modify the system "appops" settings to implement permission management in a sense. App Ops app also makes a lot of effort to simplify many technical details and make it easier to use.

## Term

### "Permissions"

App Ops actually modifies "application operation" rather than "permission", but we call it "permissions" to reduce the difficulty. App Ops app **can't control "permissions" directly**, please don't misunderstand.

::: tip
We still call it "permission" in the rest of the help
:::

## Limitations of App Ops

### Permissions can be modified are depend on your system

The permissions that App Ops can modify **depend only on your system**, so stop asking "why there is no XXX permission".

In general, the higher the system version, the more permission you can modify (manufacturers or custom ROMs may add their own permission). All permissions supported by your system can be found in Settings - Behavior - All Permissions.

### Apps can still check if they have no permission

Apps can check if the returned data is blank or directly check if "appops" is allowed. But there are very few apps do this.