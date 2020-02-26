# 程序组

Android 系统的 Shared User ID 机制允许多个应用享有相同的 Linux user ID 及 Android 权限，相互访问文件甚至运行在同一个进程。这些应用需要有具有相同签名。Shared User ID 不可在安装后更改。为了简化理解难度，我们在存储空间隔离内称 Shared User ID 机制为程序组。

这意味着：

* 一些没有存储权限的应用实际可以使用存储空间
* 多个应用可以运行在同一个进程

隔离作用于进程层面。在 v4.0.0 之前的版本中，只有 package name 被用作判断，这显然会产生问题。

### 行为变化

假设有两个应用 `com.example` `com.example2`，它们的 Shared User ID 是 `example`。

* 使用相同的设定（在内部被视为“同一个应用”）
* 隔离存储空间位置位于 `Android/data/shared-example` 中
* 可相互访问应用专有文件夹