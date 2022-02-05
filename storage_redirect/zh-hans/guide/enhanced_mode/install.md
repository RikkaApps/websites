# 安装

增强模块要求您的设备首先安装 Magisk。您可以从 [GitHub](https://github.com/topjohnwu/Magisk) 了解有关 Magisk 的更多信息。

:::tip 提示
从 Magisk v24 起（于 2022-01-26 发布），在线仓库被移除。您只能直接下载 zip 后在 Magisk 中安装。
:::

## Zygisk

您可以在开启 Zygisk 后使用 Zygisk 版本的增强模块（需要 v7.0.0 及以上版本的存储空间隔离）。

* [模块](https://github.com/RikkaApps/StorageRedirect-assets/releases/tag/assets)（选择 Zygisk 版本）

### 关于 Zygisk

Zygisk 是 Magisk v24 添加的功能。它与 Riru 在最终目的上类似，但细节与实现方面不同。

Zygisk 具有排除列表（DenyList）功能，在开启遵守排除列表（Enforce DenyList）后，Zygisk 不会为列表中的应用加载 Zygisk 模块。对于存储空间隔离，列表中的应用程序不能隔离。请注意，**排除列表不是隐藏功能，它甚至不能隐藏 Zygisk 自身的存在**。

**排除列表是一个脱离实际的功能**，因为人们显然会又想要使用模块又想要隐藏。隐藏模块也要求不能开启遵守排除列表，否则隐藏模块也会因为不被加载而不能工作。

简而言之，使用专门的隐藏模块 Shamiko 来隐藏，永远不要启用遵守排除列表。

### 关于 Shamiko

Shamiko 是一个由其他人开发的隐藏模块。它可以隐藏 Magisk SU、Zygisk 自身及 Zygisk 模块。

Shamiko 借用了 Magisk 的排除列表。也就是说 Magisk 的排除列表是 Shamiko 的排除列表，但是为了让 Shamiko 生效你不能打开 Magisk 的遵守排除列表选项。这有些令人困惑，但是就是这样的。

在 2022-02-02 以后在[这里](https://lsposed.github.io/)下载 Shamiko。

## Riru

如果您使用旧版本的 Magisk 或是不使用 Zygisk，则还需要安装 Riru。请下载 Riru 和 Riru 版本的增强模块并在 Magisk 中安装。

* [Riru](https://github.com/RikkaApps/Riru/releases)
* [模块](https://github.com/RikkaApps/StorageRedirect-assets/releases/tag/assets)（选择 Riru 版本）
