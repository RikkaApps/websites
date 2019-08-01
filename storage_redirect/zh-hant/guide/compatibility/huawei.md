# Huawei（無法動態修改 SELinux 規則）

Huawei 裝置內核的實現只能載入一次 SELinux 規則，因此必須修改 Magisk 新增自己的規則。但如果每個需要修改 SELinux 的程式/專案都編譯一份的 Magisk，使用者則只能從中選擇一個，所以我們推出了我們的解決方案。

### 原理

簡而言之，[我們的方案](https://github.com/topjohnwu/Magisk/pull/1685)不是直接新增規則，而是加入如果存在 `sepolicy_custom` 檔案就直接載入 `sepolicy_custom` 的邏輯。剩下的工作就只有生成 `sepolicy_custom`。

這部分工作由 Magisk 安裝 zip 修改而來，我們稱其為 **規則包**，你可以在[這裡](https://github.com/RikkaApps/magisk-custom-sepolicy-installer)找到規則包模板。安裝多個規則包時，之後安裝的規則包將以之前安裝後的結果為基礎，避免了開頭提到的問題。

### 步驟

::: warning
**警告**

雖然應該不太可能出現問題，但使用前請先做好恢復原版 Magisk 的準備。
:::

::: tip
**以下內容請銘記在心**

1. 必須使用我們提供 Magisk
2. 規則包需要在更新系統後重新安裝
:::

1. 如果你沒有使用 Magisk，請參照 [Magisk 官方文件](https://topjohnwu.github.io/Magisk/) 安裝 [Magisk](https://github.com/topjohnwu/Magisk)
2. 更新儲存重新導向至 v1.7.3 及以上
3. 下載 [我們的 Magisk](https://github.com/RikkaApps/magisk-custom-sepolicy-installer/releases/download/v0.1/Magisk-v19.4-9784353-R.zip)
4. 下載 [儲存重新導向 規則包](https://github.com/RikkaApps/magisk-custom-sepolicy-installer/releases/download/v0.1/magisk-custom-sepolicy-installer-for-storage-redirect.zip)
5. 在 Magisk Manager 中使用「模組」-「+」的方式安裝以上 zip
6. 如果你是 EdXposed 使用者，還可以下載安裝 [EdXposed 規則包](https://github.com/RikkaApps/magisk-custom-sepolicy-installer/releases/download/v0.1/magisk-custom-sepolicy-installer-for-edxposed.zip)