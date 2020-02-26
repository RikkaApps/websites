# 三星

由于未知原因，在部分三星设备上，以 root 用户中执行 64 位可执行程序，其中 `exec` 函数必定会 `Permission denied`。

解决方法很简单，卸载后安装 [arm 版本](./../../download.html)。