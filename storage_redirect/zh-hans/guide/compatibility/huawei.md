# 华为（无法动态修改 SELinux 规则）

华为设备内核的实现只能载入一次 SELinux 规则，而修改 SELinux 规则对存储空间隔离是必要的。

## Magisk 官方方案

Magisk 已经官方支持 pre-init custom sepolicy patch。

你需要做的事情很简单：

1. 安装 [Magisk](https://github.com/topjohnwu/Magisk) v20.2 及以上版本
2. 使用[增强模式](../enhanced_mode/install.html)

## 我们的方案（过时）

::: danger
除非你无法使用 Magisk 官方方案，否则不要尝试使用该方案。
:::

### 原理

简而言之，[我们的方案](https://github.com/topjohnwu/Magisk/pull/1685)不是直接添加规则，而是加入如果存在 `sepolicy_custom` 文件就直接载入 `sepolicy_custom` 的逻辑。剩下的工作就只有生成 `sepolicy_custom`。

这部分工作由 Magisk 安装 zip 修改而来，我们称其为 **规则包**，你可以在[这里](https://github.com/RikkaApps/magisk-custom-sepolicy-installer)找到规则包模板。安装多个规则包时，之后安装的规则包将以之前安装后的结果为基础，避免了开头提到的问题。

### 步骤

::: warning
虽然应该不太可能出现问题，但使用前请先做好恢复原版 Magisk 的准备。
:::

1. 如果你没有使用 Magisk，请参照 [Magisk 官方文档](https://topjohnwu.github.io/Magisk/) 安装 [Magisk](https://github.com/topjohnwu/Magisk)
2. 下载 [我们的 Magisk](https://github.com/RikkaApps/magisk-custom-sepolicy-installer/releases/download/v0.1/Magisk-v19.4-9784353-R.zip)（基于 v19.4）
3. 下载 [存储空间隔离 规则包](https://github.com/RikkaApps/magisk-custom-sepolicy-installer/releases/download/v0.1/magisk-custom-sepolicy-installer-for-storage-redirect.zip)
4. 在 Magisk Manager 中使用「模块」-「从存储空间中安装」的方式安装以上 zip
5. 如果你是 EdXposed 用户，还可以下载安装 [EdXposed 规则包](https://github.com/RikkaApps/magisk-custom-sepolicy-installer/releases/download/v0.1/magisk-custom-sepolicy-installer-for-edxposed.zip)
6. 规则包需要在更新系统后重新安装