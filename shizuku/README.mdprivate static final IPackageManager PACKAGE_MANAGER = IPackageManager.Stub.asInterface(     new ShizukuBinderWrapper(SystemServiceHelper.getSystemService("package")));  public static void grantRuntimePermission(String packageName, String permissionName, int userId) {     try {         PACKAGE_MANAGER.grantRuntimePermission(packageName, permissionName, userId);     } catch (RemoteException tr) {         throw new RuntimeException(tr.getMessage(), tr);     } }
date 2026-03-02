---
home: true
heroImage: /logo.png
actionText: Learn more
actionLink: /introduction.html
features:
- title: Use system APIs elegantly
  details: Forget about root shell, you can use APIs with higher privileges "directly". Also, Shizuku is significantly faster than shell.
- title: Supports adb usage
  details: If your "root required app" only needs adb permission, you can easily expand the audience by using Shizuku.
- title: Save your time
  details: Shizuku has detailed documentation to guide users. Only you need to do is to let the users install Shizuku.
footer: Copyright © 2019 RikkaApps
---

### As Easy as you are a system app

```java
private static final IPackageManager PACKAGE_MANAGER = IPackageManager.Stub.asInterface(
    new ShizukuBinderWrapper(SystemServiceHelper.getSystemService("package")));

public static void grantRuntimePermission(String packageName, String permissionName, int userId) {
    try {
        PACKAGE_MANAGER.grantRuntimePermission(packageName, permissionName, userId);
    } catch (RemoteException tr) {
        throw new RuntimeException(tr.getMessage(), tr);
    }
}
```

::: tip

There a few more steps to do, like checking permission or if Shizuku is running.
:::
