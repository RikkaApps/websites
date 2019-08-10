# Technical details

Note that this document does not mention all the details.

## About the use of root permission

Only the `/data/misc/storage_redirect` folder will be created for executable files and configuration files.

At startup, two processes, `storage_redirect` and `storage_redirect_server`, are run. `storage_redirect` is responsible for the core functionality; `storage_redirect_server` will add a service to `ServiceManager`, which is responsible for communicating with Storage Redirect app.

## About storage permissions

Storage permissions are granted and fixed ("Enforced by policy" in system permission management). The reason for the fix is that after app's storage permissions changed, the system will remount `/storage` for the app process (we can't monitor this change), which will cause the mounts we made to be lost.

## Storage isolation (redirect)

After the app process is created, enter the mount namespace of the app process to perform a series of bind mount.

For example, it will mount `/mnt/runtime/write/emulated/0/Android/data/com.example/sdcard` to `/storage/emulated/0`, then for the app process, `/storage/emulated/0` actually is `/storage/emulated/0/Android/data/com.example/sdcard`.

The essence of the various rules set in "Accessible folders" is to add more bind mounts. In addition, no matter how you set it, `Android/data/com.example`, `Android/media/com.example`, `Android/obb/com.example` will be mount to `Android/data/com.example In /sdcard` by default.

### About monitor app process creation

When the enhanced mode is not used, `logcat`. When using enhanced mode, the app process will connect our `storage_redirect` process using socket.

### "Synced Folders"

Implemented with inotify and hard links. In addition, inotify does not seem to properly monitor that files have been moved/moved in, so only builds and deletes can be handled correctly.

## Enhanced mode

Enhanced mode implements app process injection with [Riru](https://github.com/RikkaApps/Riru).

### Fix interaction between apps

Load our own dex in the redirected app process and add a dynamic proxy for `IActivityManager`.

When start activity received or request to start other activity, file uri carried in intent will be modified, or converted to content uri (transfer via Storage Redirect app) if necessary.

When you use Media Store, the results are modified based on the "Accessible Folders" setting.

In Android P and above, for unlimited reflection, the hidden api check is forced to disable (modify `runtime_flags` of `nativeForkAndSpecialize`).

### Fix rename

By hooking `rename` within the app process, if -1 is returned and `errno == EXDEV` then copy and delete and modify the return value.

### File Monitoring

By hooking functions such as `open` within the app process and use socket to send to `storage_redirect` process.