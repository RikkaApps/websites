# 华为（无法动态修改 SELinux 规则）

华为设备内核的实现只能载入一次 SELinux 规则，因此必须修改 Magisk 添加自己的规则。但如果每个需要修改 SELinux 的应用/项目都编译一份的 Magisk，用户则只能从中选择一个，所以我们推出了我们的解决方案。

### 原理

简而言之，[我们的方案](https://github.com/topjohnwu/Magisk/pull/1685)不是直接添加规则，而是加入如果存在 `sepolicy_custom` 文件就直接载入 `sepolicy_custom` 的逻辑。剩下的工作就只有生成 `sepolicy_custom`。

这部分工作由 Magisk 安装 zip 修改而来，我们称其为 **规则包**，你可以在[这里](https://github.com/RikkaApps/magisk-custom-sepolicy-installer)找到规则包模板。安装多个规则包时，之后安装的规则包将以之前安装后的结果为基础，避免了开头提到的问题。

### 步骤

::: warning
**警告**

虽然应该不太可能出现问题，但使用前请先做好恢复原版 Magisk 的准备。
:::

::: tip
**以下内容请铭记在心**

1. 必须使用我们提供的 Magisk
2. 规则包需要在更新系统后重新安装
:::

1. 如果你没有使用 Magisk，请参照 [Magisk 官方文档](https://topjohnwu.github.io/Magisk/) 安装 [Magisk](https://github.com/topjohnwu/Magisk)
2. 更新存储重定向至 v1.7.3 及以上
3. 下载 [我们的 Magisk](https://github.com/RikkaApps/magisk-custom-sepolicy-installer/releases/download/v0.1/Magisk-v19.4-9784353-R.zip)
4. 下载 [存储重定向 规则包](https://github.com/RikkaApps/magisk-custom-sepolicy-installer/releases/download/v0.1/magisk-custom-sepolicy-installer-for-storage-redirect.zip)
5. 在 Magisk Manager 中使用「模块」-「+」的方式安装以上 zip
6. 如果你是 EdXposed 用户，还可以下载安装 [EdXposed 规则包](https://github.com/RikkaApps/magisk-custom-sepolicy-installer/releases/download/v0.1/magisk-custom-sepolicy-installer-for-edxposed.zip)
