# 简介

静谷可以帮助普通应用借助一个由app_process启动的Java进程直接以adb或root特权使用系统API.

>静谷这个名字来自[这里](https://www.pixiv.net/artworks/75508584)。

##静谷为何而生？

静谷的诞生主要有两大目的：

1.提供一个方便地使用系统API的方式
2.为部分只需要adb权限的应用开发提供便利

##静谷与“传统”做法对比

###“传统”做法

以启用/禁用组件为例，一些需要root权限的应用直接在`Su` 中执行 `PM禁用`。

1. 执行 `Su`
2. 执行 `PM禁用`
3.(pre-Pie)使用app_process启动Java进程([参见此处](https://android.googlesource.com/platform/frameworks/base/+/oreo-release/cmds/pm/pm)）
4.(饼+)执行原生程序`CMD`（[参见此处](https://android.googlesource.com/platform/frameworks/native/+/pie-release/cmds/cmd/)）
5.处理参数，通过粘结剂与系统服务器交互，处理结果输出文字结果

其中每个“执行”都意味着新进程建立，Su内部使用插座与Su守护进程交互，大量的时间和性能被消耗在这样的过程中。（部分设计不佳的应用甚至会每次执行指令都执行一次`Su`）

此类做法的缺点在于：

1. **极慢**
2. 需要处理文本来获取结果
3. 功能受制于可用的指令
4.即使adb有足够权限，应用也需要root权限才可使用

###静谷做法

Shizuku app会引导用户使用root或是adb方式运行一个进程(静雾服务进程）。

1.应用进程启动时静谷服务进程发送粘结剂至应用进程
2.应用通过该粘结剂与静谷服务进程交互，静谷服务进程通过粘结剂与系统服务器交互

静谷的优点在于：

1. 极小额外时间及性能消耗
2.与直接调用API体验几乎一致(应用开发者只需添加少量代码)
