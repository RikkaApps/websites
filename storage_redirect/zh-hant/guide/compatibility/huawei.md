# Huawei（無法動態修改 SELinux 規則）

Huawei 裝置內核的實現只能載入一次 SELinux 規則，而修改 SELinux 規則對儲存重新導向是必要的。

Magisk 已經官方支援 pre-init custom sepolicy patch。

你需要做的事情很簡單：

1. 安裝 Magisk v20.2 及以上版本
2. 使用[增強模式](../enhanced_mode/install.html)