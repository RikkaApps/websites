#  Huawei (Unable to dynamically modify SELinux rules)

The implementation of the Huawei device kernel can only load SELinux rules once. Modify SELinux rules is required by Storage Redirect.

Magisk has officially supported pre-init custom sepolicy patch.

What you need to do is simple:

1. Install [Magisk](https://github.com/topjohnwu/Magisk) v20.2 or above
2. Use [Enhanced mode](../enhanced_mode/install.html)