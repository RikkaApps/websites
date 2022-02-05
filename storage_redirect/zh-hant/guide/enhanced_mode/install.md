# 安裝

增強模組要求您的裝置首先安裝 Magisk。您可以從 [GitHub](https://github.com/topjohnwu/Magisk) 瞭解有關 Magisk 的更多資訊。

:::tip 提示
從 Magisk v24 起（於 2022-01-26 釋出），線上倉庫被移除。您只能直接下載 zip 後在 Magisk 中安裝。
:::

## Zygisk

您可以在開啟 Zygisk 後使用 Zygisk 版本的增強模組（需要 v7.0.0 及以上版本的儲存空間隔離）。

* [模組](https://github.com/RikkaApps/StorageRedirect-assets/releases/tag/assets)（選擇 Zygisk 版本）

### 關於 Zygisk

Zygisk 是 Magisk v24 新增的功能。它與 Riru 在最終目的上類似，但細節與實現方面不同。

Zygisk 具有黑名單（DenyList）功能，在開啟強制黑名單（Enforce DenyList）後，Zygisk 不會為列表中的應用載入 Zygisk 模組。對於儲存空間隔離，列表中的應用程式不能隔離。請注意，**黑名單不是隱藏功能，它甚至不能隱藏 Zygisk 自身的存在**。

**黑名單是一個脫離實際的功能**，因為人們顯然會又想要使用模組又想要隱藏。隱藏模組也要求不能開啟強制黑名單，否則隱藏模組也會因為不被載入而不能工作。

簡而言之，使用專門的隱藏模組 Shamiko 來隱藏，永遠不要啟用強制黑名單。

### 關於 Shamiko

Shamiko 是一個由其他人開發的隱藏模組。它可以隱藏 Magisk SU、Zygisk 自身及 Zygisk 模組。

Shamiko 借用了 Magisk 的黑名單。也就是說 Magisk 的黑名單是 Shamiko 的黑名單，但是為了讓 Shamiko 生效你不能開啟 Magisk 的強制黑名單選項。這有些令人困惑，但是就是這樣的。

在 2022-02-02 以後在[這裡](https://lsposed.github.io/)下載 Shamiko。

## Riru

如果您使用舊版本的 Magisk 或是不使用 Zygisk，則還需要安裝 Riru。請下載 Riru 和 Riru 版本的增強模組並在 Magisk 中安裝。

* [Riru](https://github.com/RikkaApps/Riru/releases)
* [模組](https://github.com/RikkaApps/StorageRedirect-assets/releases/tag/assets)（選擇 Riru 版本）
