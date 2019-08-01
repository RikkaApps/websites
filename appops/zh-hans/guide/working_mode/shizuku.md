# Shizuku 模式（特权模式）

## 需求及特性

* 需要安装 Shizuku 应用并通过 adb 或 root 启动 Shizuku 服务
* 支持多用户

::: tip
如果使用 adb，每次开机都需要使用 adb 进行启动 Shizuku 的步骤（**但 appops 设置总是生效**）
:::

## 背景

Shizuku 模式是 App Ops 的第一个无需 root 的工作模式。同时这也是创造 Shizuku 的原因的之一。

使用 Shizuku 的优势在于，只需要一条 adb 指令即可启动和 Shizuku 本身不会对系统产生改动。

> 有关 Shizuku 的信息，以及为什么要独立出一个应用，请查看 [shizuku.rikka.app](https://shizuku.rikka.app/zh-hans)。