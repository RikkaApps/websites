---
home: true
heroImage: /logo.png
actionText: 瞭解更多
actionLink: /zh-hant/introduction.html
features:
- title: 優雅地使用系統 API
  details: 忘掉 root shell 吧，你可以「直接使用」需要高權限的 API。此外，Shizuku 比 shell 要快得多。
- title: 支援 adb 使用
  details: 如果你的「需要 root 的程式」只需要 adb 權限，則可以使用 Shizuku 輕鬆地擴大用戶羣體。
- title: 節省時間
  details: Shizuku 有詳細的文檔引導使用者，你只需要讓使用者安裝 Shizuku。
footer: Copyright © 2019 RikkaApps
---

### 就像是系統程序一樣簡單

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

還有一些步驟要做，比如檢查權限或 Shizuku 是否正在執行。
:::