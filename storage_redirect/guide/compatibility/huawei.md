#  Huawei (Unable to dynamically modify SELinux rules)

The implementation of the Huawei device kernel can only load SELinux rules once. Modify SELinux rules is required by Storage Redirect.

Magisk has officially supported pre-init custom sepolicy patch (you may need to install the latest [Magisk Canary](https://forum.xda-developers.com/apps/magisk/dev-magisk-canary-channel-bleeding-edge-t3839337)), you only need to use [Enhanced mode](../enhanced_mode/install) (install the necessary Magisk modules according to the tutorial) to solve the problem.