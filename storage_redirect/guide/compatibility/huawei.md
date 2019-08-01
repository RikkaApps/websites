#  Huawei (Unable to dynamically modify SELinux rules)

The implementation of the Huawei device kernel can only load SELinux rules once, so we must modify Magisk to add our own rules. But if every app/project that needs to modify SELinux compiles a Magisk, the user can only choose one, so we launched our solution.

### Principle

In short, [our solution](https://github.com/topjohnwu/Magisk/pull/1685) does not add rules directly, but instead adds the logic to load `sepolicy_custom` directly if there is a `sepolicy_custom` file. The only remaining work is to generate `sepolicy_custom`.

This part of the work has done by modified Magisk installation zip, we call it the **rules pack**. You can find the template at [here](https://github.com/RikkaApps/magisk-custom-sepolicy-installer). When multiple rules packs are installed, the rules pack installed later will be based on the results of the previous installation, avoiding the problems mentioned at the beginning.

### Steps

::: warning
**Warning**

Although it should not have problems, please be prepared to restore the original Magisk before use.
:::

::: tip
**Please remember the following contents**

1. Must use Magisk provided by use
2. The rule packs needs to be reinstalled after updating the system
:::

1. If you are not using Magisk, please refer to [Magisk Official Documentation](https://topjohnwu.github.io/Magisk/) to install [Magisk](https://github.com/topjohnwu/Magisk)
2. Update Storage Redirect to v1.7.3 or above
3. Download [Our Magisk](https://github.com/RikkaApps/magisk-custom-sepolicy-installer/releases/download/v0.1/Magisk-v19.4-9784353-R.zip)
4. Download [Storage Redirect Rules Pack](https://github.com/RikkaApps/magisk-custom-sepolicy-installer/releases/download/v0.1/magisk-custom-sepolicy-installer-for-storage-redirect.zip)
5. Install the above zips in Magisk Manager using "Modules" - "+"
6. If you are an EdXposed user, you can also download and install the [EdXposed Rules Pack](https://github.com/RikkaApps/magisk-custom-sepolicy-installer/releases/download/v0.1/magisk-custom-sepolicy-installer-for-edxposed.zip)