# Samsung

由於未知原因，在部分 Samsung 裝置上，以 root 使用者中執行 64 位可執行程式，其中 `exec` 函式必定會 `Permission denied`。

解決方法很簡單，解除安裝後安裝 [arm 版本](./../../download.html)。