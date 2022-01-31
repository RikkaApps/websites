# Install

The boost module requires your device to have Magisk installed first. You can learn more about Magisk from [GitHub](https://github.com/topjohnwu/Magisk).

:::tip Tip
As of Magisk v24 (released on 2022-01-26), the online repository is removed. You can only install in Magisk directly after downloading the zip.
:::

## Zygisk

You can use the Zygisk version of the enhancement module (requires Storage Isolation v7.0.0) after enabling Zygisk.

* [Module](https://github.com/RikkaApps/StorageRedirect-assets/releases/tag/assets) (choose Zygisk version)

### About Zygisk

Zygisk is a feature added in Magisk v24. It is similar to Riru in terms of end purpose, but differs in details and implementation.

Zygisk has a DenyList function. After enabling Enforce DenyList option, Zygisk will not load Zygisk modules for the apps in the list. For Storage Isolation, apps in the list cannot be isolated. Note that the **DenyList is not a hide feature, it can't even hide the presence of Zygisk itself**.

**The DenyList is an "out of reality" feature** because people obviously want to use modules while maintaining hidden. Hidden modules are also required to not enable Enforce DenyList option, otherwise hidden modules will not work because they will not be loaded.

In short, use the dedicated hiding module Shamiko to hide and never enable Enforce DenyList option.

### About Shamiko

Shamiko is a hidden module developed by others. It can hide Magisk SU, Zygisk itself and Zygisk modules.

Shamiko borrowed Magisk's DenyList. That is to say, Magisk's DenyList is Shamiko's exclusion list, but in order for Shamiko to take effect you cannot turn on Magisk's Enforce DenyList option. It's a little confusing, but that's it.

Download Shamiko at [here](https://lsposed.github.io/) after 2022-02-02.

## Riru

If you're using an older version of Magisk or don't use Zygisk, you'll also need to install Riru. Please download Riru and Riru version booster and install it in Magisk.

* [Riru](https://github.com/RikkaApps/Riru/releases)
* [Module](https://github.com/RikkaApps/StorageRedirect-assets/releases/tag/assets) (select Riru version)