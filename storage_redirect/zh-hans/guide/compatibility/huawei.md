# 华为（无法动态修改 SELinux 规则）

华为设备内核的实现只能载入一次 SELinux 规则，而修改 SELinux 规则对存储重定向是必要的。

Magisk 已经官方支持 pre-init custom sepolicy patch（你可能需要安装最新的 [Magisk Canary](https://forum.xda-developers.com/apps/magisk/dev-magisk-canary-channel-bleeding-edge-t3839337)），你只需要使用[增强模式](../enhanced_mode/install.html)（按照教程安装必要的 Magisk 模块）即可解决问题。