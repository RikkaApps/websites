# 启动后立刻退出

Storage Isolation、AppOps 和 NoPopping 有反篡改机制。一旦检测到篡改，应用程序会在启动后立刻退出。

篡改行为包括但不限于：

* 重新签名
* 在虚拟环境中运行
* 为应用程序启用 Xposed
  
  主流的 Xposed 实现均有排除功能，请将应用程序从您使用的 Xposed 框架中排除。

请确保应用程序是从官方渠道下载，官方渠道包含 Google Play，GitHub release，酷安（针对中国大陆地区用户）。

目前，有极少数的用户报告从不同的渠道升级后出现此问题，但是尚不确定是否属实。如果您是这种情况，请将当前安装的 apk 发送到 [support@rikka.app](mailto://support@rikka.app) 后卸载重装。

