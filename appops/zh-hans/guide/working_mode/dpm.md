# 托管设备管理员模式

## 需求及特性

* 需要 Android 9+
* 需要安装其他应用，并使用 adb 将其设为 Device owner
* 是否支持多用户取决于 Device owner 应用

## 背景

托管设备管理员模式是 App Ops 从 v2.9.0 开始加入的新的工作模式。从 Android 9 开始，设备管理员开始可以修改 appops 设定，但系统限制一台设备上仅能设置一个应用为设备管理员。因此 App Ops 使用由其他设备管理员应用提供的 API。

从 v2.9.0 起支持使用 [Delegated Scopes Manager](https://github.com/heruoxin/Delegated-Scopes-Manager) 的设备管理员应用。

从 v2.9.8 起支持另一种[由 Island 提供的 API](https://island.oasisfeng.com/api)。

## 免责声明

你需要安装的设备管理员应用都不是由我们开发。

::: warning
设备管理员在三星设备及很多来自中国大陆地区厂商的设备上或多或少存在一些问题，请务必仔细阅读来自设备管理员应用提供的帮助，如果你无法接受可能的问题，请不要使用。
:::

::: danger
三星设备在使用设备管理员后可能造成无法挽回的结果（参阅 [来自 冰箱 IceBox 的文档](https://iceboxdoc.catchingnow.com/Device%20Owner%20%E4%B8%89%E6%98%9F%E7%89%B9%E5%88%AB%E8%AF%B4%E6%98%8E)），请务必谨慎。
:::

## 如何使用

设置过程需要连接电脑使用 adb，但只需要进行一次设置。

### 1. 安装及设置设备管理员应用

#### 冰箱 IceBox

1. 下载 [Google Play](https://play.google.com/store/apps/details?id=com.catchingnow.icebox) 或 [Coolapk](https://www.coolapk.com/apk/com.catchingnow.icebox)
2. 参阅 [帮助](https://iceboxdoc.catchingnow.com/Device%20Owner%20%EF%BC%88%E5%85%8D%20root%EF%BC%89%E6%A8%A1%E5%BC%8F%E8%AE%BE%E7%BD%AE) 为其设置设备管理员模式

#### 小黑屋

1. 下载 [Google Play](https://play.google.com/store/apps/details?id=web1n.stopapp) 或 [Coolapk](https://www.coolapk.com/apk/web1n.stopapp)
2. 参阅 [帮助](https://github.com/web1n/Stopapp-Docs/blob/master/Device%20Owner%20%EF%BC%88%E5%85%8D%20root%EF%BC%89%E6%A8%A1%E5%BC%8F%E8%AE%BE%E7%BD%AE.md)（仅提供简体中文） 为其设置设备管理员模式

#### Island

1. 下载 [Google Play](https://play.google.com/store/apps/details?id=com.oasisfeng.island) 或 [Coolapk](https://www.coolapk.com/apk/com.oasisfeng.island)
2. 参阅 [帮助](https://island.oasisfeng.com/setup.html) 为其设置设备管理员模式（Island 称其为“上帝模式”）

### 2. 授予权限

在 App Ops “设置”-“工作模式”中选择“托管设备管理员模式”后返回应用列表应该会弹出来自设备管理员应用的授权对话框，请在勾选“修改 app ops”后确认。

接着，你还需要使用使用 adb 授予 App Ops “获取 app ops” 权限。使用以下的指令：

```
adb shell pm grant --user 0 rikka.appops android.permission.GET_APP_OPS_STATS
```

注意，如果你将 App Ops 应用安装到其他用户，需要将其中 `--user 0` 的 `0` 替换为其他用户的 id（使用 `adb shell pm list users` 获得的 `UserInfo{0:Owner:13} running` 的结果中的 `0` 即为用户 id）。

### 3. 授予多用户权限

对于多用户支持，你还需要运行下面的指令来让 App Ops 可以部分访问其他用户：

```
adb shell pm grant --user 0 rikka.appops android.permission.INTERACT_ACROSS_USERS
```

::: tip
目前只有 Island 3.8+ 支持多用户
:::

### 4. 遇到问题？

* 使用 Island 时出现 `Cannot request permission without a restrictions provider registered`

  清除 Island 的缓存（应用信息 -> 存储 -> 清除缓存），后重新启动 Island。