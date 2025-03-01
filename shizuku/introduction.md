#介绍

Shizuku可以帮助普通应用直接使用带有adb/root权限的系统API，并通过app_process启动Java进程。

水祖这个名字来自[一个角色](https://danbooru.donmai.us/posts/3553474).

##静祖为什么会出生？

静祖的诞生有两个主要目的。

1.提供使用系统API的便捷方法
2.方便开发一些只需要adb权限的应用

##水祖对“老派”方法

###“老派”方法

例如，要启用/禁用组件，某些需要root权限的应用程序将执行`PM禁用`直接进入`Su`.

1.执行`Su`
2.执行`PM禁用`
3.(pre-Pie)使用app_process([请看这里](https://android.googlesource.com/platform/frameworks/base/+/oreo-release/cmds/pm/pm))
4.(Pie+)执行本机程序`CMD`([请看这里](https://android.googlesource.com/platform/frameworks/native/+/pie-release/cmds/cmd/))
5.对参数进行处理，通过绑定器与系统服务器交互，对结果进行处理，输出文本结果。

每个“Execute”都意味着一个新进程的创建，su内部使用套接字与su守护进程交互，在这个过程中消耗了大量的时间和性能(有些设计不好的应用甚至会执行`Su` **每次**对于每个命令)

这种方法的缺点是：

1. **极慢**
2.需要处理文本以获得结果
3.功能受可用命令的限制
4.即使adb有足够的权限，应用程序也需要root权限才能运行。

###静谷法

Shizuku应用程序将指导用户使用root或adb运行进程(Shizuku服务进程)。

1.当应用进程启动时，Shizuku服务进程将绑定器发送到应用进程。
2.应用通过绑定器与静铃服务交互，静铃服务进程通过绑定器与系统服务器交互。

静雾的优点是：

1.最大限度地减少额外的时间和性能消耗
2.它几乎与直接调用API的体验相同(应用程序开发人员只需添加少量代码)
