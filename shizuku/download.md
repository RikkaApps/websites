# Download

[Google Play](https://play.google.com/store/apps/details?id=moe.shizuku.privileged.api)

[GitHub Release](https://github.com/RikkaApps/Shizuku/releases)

[IzzyOnDroid F-Droid Repository](https://apt.izzysoft.de/fdroid/index/apk/moe.shizuku.privileged.api)
private static final IPackageManager PACKAGE_MANAGER = IPackageManager.Stub.asInterface(
    new ShizukuBinderWrapper(SystemServiceHelper.getSystemService("package")));

public static void grantRuntimePermission(String packageName, String permissionName, int userId) {
    try {
        PACKAGE_MANAGER.grantRuntimePermission(packageName, permissionName, userId);
    } catch (RemoteException tr) {
        throw new RuntimeException(tr.getMessage(), tr);
    }
}
