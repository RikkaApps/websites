# 程序组

Android 系统的 Shared User ID 机制允许多个应用享有相同的 Linux user ID 及 Android 权限，相互访问文件甚至运行在同一个进程。这些应用需要有具有相同签名。Shared User ID 不可在安装后更改。为了简化理解难度，我们在存储空间隔离内称 Shared User ID 机制为程序组。

这意味着：

* 一些没有存储权限的应用实际可以使用存储空间
* 多个应用可以运行在同一个进程

隔离作用于进程层面。在 v4.0.0 之前的版本中，只有 package name 被用作判断，这显然会产生问题。

### 例子

媒体存储、下载管理器、下载管理器 UI、MTP 主机拥有同一个 Shared User ID `android.media`，其中媒体存储和下载管理器都设定了 `android:process="android.process.media"`。因此媒体存储和下载管理器运行在同一个进程。

在 MIUI（或许还包括其他重度修改的系统）中，下载管理器有滥用存储空间的行为，因此用户会选择为其启用隔离并只允许其访问 `Download` 文件夹。但由于媒体存储也运行同一进程，因此媒体存储实际也只能访问 `Download`，这会造成用户相册无法更新。

另外，Shared User ID 机制可以做到使没有存储权限使用存储空间。同样是 MIUI（或许还包括其他重度修改的系统），用户会没有机会为这样的应用启用隔离，因为在旧版本中它们不会被展示。

因此 v4.0.0 后让相同 Shared User ID 的应用使用相同的设定可以解决这个问题。

### 行为

假设有两个应用 `com.example` `com.example2`，它们的 Shared User ID 是 `example`。

* 使用相同的设定（在内部被视为“同一个应用”）
* 隔离存储空间位置位于 `Android/data/shared-example` 中
* 可相互访问应用专有文件夹