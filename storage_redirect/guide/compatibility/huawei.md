#  Huawei (Unable to dynamically modify SELinux rules)

The implementation of the Huawei device kernel can only load SELinux rules once. Modify SELinux rules is required by Storage Redirect.

## Offical Magisk solution

Magisk has officially supported pre-init custom sepolicy patch.

What you need to do is simple:

1. Install [Magisk](https://github.com/topjohnwu/Magisk) v20.2 or above
2. Use [Enhanced mode](../enhanced_mode/install.html)

## Our solution (outdated)

::: danger
Unless you have problem using offical Magisk solution, DO NOT try this.
:::

### Principle

In short, [our solution](https://github.com/topjohnwu/Magisk/pull/1685) does not add rules directly, but instead adds the logic to load `sepolicy_custom` directly if there is a `sepolicy_custom` file. The only remaining work is to generate `sepolicy_custom`.

This part of the work has done by modified Magisk installation zip, we call it the **rules pack**. You can find the template at [here](https://github.com/RikkaApps/magisk-custom-sepolicy-installer). When multiple rules packs are installed, the rules pack installed later will be based on the results of the previous installation, avoiding the problems mentioned at the beginning.

### Steps

::: warning
Although it should not have problems, please be prepared to restore the original Magisk before use.
:::

1. If you are not using Magisk, please refer to [Magisk Official Documentation](https://topjohnwu.github.io/Magisk/) to install [Magisk](https://github.com/topjohnwu/Magisk)
2. Download [Our Magisk](https://github.com/RikkaApps/magisk-custom-sepolicy-installer/releases/download/v0.1/Magisk-v19.4-9784353-R.zip)
3. Download [Storage Redirect Rules Pack](https://github.com/RikkaApps/magisk-custom-sepolicy-installer/releases/download/v0.1/magisk-custom-sepolicy-installer-for-storage-redirect.zip)
4. Install the above zips in Magisk Manager using "Modules" - "Install from storage"
5. If you are an EdXposed user, you can also download and install the [EdXposed Rules Pack](https://github.com/RikkaApps/magisk-custom-sepolicy-installer/releases/download/v0.1/magisk-custom-sepolicy-installer-for-edxposed.zip)
6. The rule packs needs to be reinstalled after updating the system