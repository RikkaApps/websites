# Technical details

Note that this document does not mention all the details.

## About the use of root permission

Only the `/data/misc/storage_redirect` folder will be created for executable files and configuration files.

At startup, two processes, `storage_redirect` and `storage_redirect_server`, are run. `storage_redirect` is responsible for the core functionality; `storage_redirect_server` will add a service to `ServiceManager`, which is responsible for communicating with Storage Isolation app.

## About storage permissions

Storage permissions are granted and fixed ("Enforced by policy" in system permission management). The reason for the fix is that after app's storage permissions changed, the system will remount `/storage` for the app process (we can't monitor this change), which will cause the mounts we made to be lost.

## Isolation (redirect)

After the app process is created, enter the mount namespace of the app process to perform a series of bind mount.

For example, it will mount `/mnt/runtime/write/emulated/0/Android/data/com.example/sdcard` to `/storage/emulated/0`, then for the app process, `/storage/emulated/0` actually is `/storage/emulated/0/Android/data/com.example/sdcard`.

The essence of the various rules set in "Accessible folders" is to add more bind mounts. In addition, no matter how you set it, `Android/data/com.example`, `Android/media/com.example`, `Android/obb/com.example` will be mount to `Android/data/com.example In /sdcard` by default.

### About monitor app process creation

When the enhanced mode is not used, `logcat`. When using enhanced mode, the app process will connect our `storage_redirect` process using socket.

### Export isolated files (Synced Folders)

Implemented with `inotify` and `hard link`.

## Enhanced mode

Enhanced mode implements app process injection with [Riru](https://github.com/RikkaApps/Riru).

### Fix interaction between apps

* Hook `android.os.BinderProxy#transactNative` in app processes and handle `android.app.IActivityManager` `android.content.IContentProvider`
* Modify `runtime_flags` of `nativeForkAndSpecialize` on Android P+ to disable hidden api check

### Fix rename

By hooking `rename` within the app process, if -1 is returned and `errno == EXDEV` then copy and delete and modify the return value.

### File Monitor

By hooking functions such as `open` within the app process and use socket to send to `storage_redirect` process.

### Block system remount <Badge text="v21+"/>

Hook `android.os.BinderProxy#transactNative` in `system_server` process and handle `android.os.IVold#remountUid`.