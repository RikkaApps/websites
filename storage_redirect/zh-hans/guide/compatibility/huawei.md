# 华为（无法动态修改 SELinux 规则）

华为设备内核的实现只能载入一次 SELinux 规则，而修改 SELinux 规则对存储重定向是必要的。

Magisk 已经官方支持 pre-init custom sepolicy patch。

你需要做的事情很简单：

1. 安装 [Magisk](https://github.com/topjohnwu/Magisk) v20.2 及以上版本
2. 使用[增强模式](../enhanced_mode/install.html)