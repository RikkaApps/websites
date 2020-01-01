# Huawei（無法動態修改 SELinux 規則）

Huawei 裝置內核的實現只能載入一次 SELinux 規則，而修改 SELinux 規則對儲存重新導向是必要的。

Magisk 已經官方支援 pre-init custom sepolicy patch（你可能需要安裝最新的 [Magisk Canary](https://forum.xda-developers.com/apps/magisk/dev-magisk-canary-channel-bleeding-edge-t3839337)），你只需要使用[增強模式](../enhanced_mode/install)（按照教程安裝必要的 Magisk 模組）即可解決問題。