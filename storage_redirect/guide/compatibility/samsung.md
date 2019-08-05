# Samsung (Unable to use arm64 version)

For unknown reasons, on some Samsung devices, execute a 64-bit executable in root user will always get a `Permission denied` when using `exec` functions. After exclusion, this is not a file permissions issue, nor a SELinux issue. Even more strange is that there is no problem with executing the same executable in the adb shell.

The solution is simple. Install [arm version](./../../download.html) after uninstalling.