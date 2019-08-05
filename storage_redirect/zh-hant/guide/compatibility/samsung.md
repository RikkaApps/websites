# Samsung（無法使用 arm64 版本）

由於未知原因，在部分 Samsung 裝置上，以 root 使用者中執行 64 位可執行程式，其中 `exec` 函式必定會 `Permission denied`。經過排除，這不是檔案權限問題，也不是 SELinux 問題。更加神奇的是，在 adb shell 中執行相同的可執行程式則不會有任何問題。

解決方法很簡單，解除安裝後安裝 [arm 版本](./../../download.html)。