# 不同 Android 版本下的不同

每个 op 都有两种 mode，分别为 `package mode` 和 `uid mode`。`uid mode` **有更高优先级**，即只有当 `uid mode` 为默认值时才会使用 `package mode`。

以下表格展示了从系统修改权限设定时，`uid mode` 会被如何设定。

::: details 表格
<p>

星号（*）表示相对之前的系统放生变化。

#### Android 6 - Android 9
| 系统设定页面 | uid mode                                |
|--------------|-----------------------------------------|
| 允许         | allow                                   |
| 拒绝         | ignore（只对 target 23 以下的应用设定） |
| （尚未设定） | (allow)                                 |

#### Android 10

| 系统设定页面       | uid mode   |
|--------------------|------------|
| 仅在使用期间允许 * | foreground |
| 允许               | allow      |
| 拒绝 *             | ignore     |
| （尚未设定）       | (allow)    |

#### Android 11

| 系统设定页面       | uid mode   |
|--------------------|------------|
| 每次都询问 *       | ignore     |
| 仅在使用期间允许 * | foreground |
| 允许               | allow      |
| 拒绝               | ignore     |
| （尚未设定）*      | ignore     |

#### Android 11 中的其他行为

* 设置 `package mode` 无效
* 设置 `uid mode` 时，若设定值不符合运行时权限状态则无效
* 在特定的情况下（比如安装应用后），系统将重设**全部应用**的 appops 设定到与运行时权限符合的状态

:::

### 旧版本 App Ops 没做对

旧版本的 App Ops（v5.0.0 以前）只会读取和修改 `package mode`，这显然是不对的。

在 Android 9 及之前，对 target 23 以下的应用在 App Ops 中设定“允许”是无效的；在 Android 10，一旦用户在系统中设置“拒绝”或“仅在使用时允许”，则在 App Ops 中的设置永远无法生效（因为此时系统设置的 `uid mode` 被优先使用）。

由于从低版本升级时系统的权限设定是被保留的，这个巨大的问题在 Android 10 发布的一年后才慢慢地暴露出来。

### 新版本（v5.0.0）App Ops 所做出的变化

除了完全跟随系统行为以外别无选择。

另外，因为 Android 11 会重置 appops 设定（所有“运行时权限允许，ops 忽略”会被重设为“运行时权限拒绝”），所以除了在系统之后再次重设以外别无选择。

### 新版本（v5.0.0）App Ops 需要更多能力

想要正确跟随系统行为，App Ops 必须具备取得和设置 `runtime permission`，`permission flags`，`appops` 的能力。但是，并不是所有工作模式都能做到。

|                    | Shizuku 模式 | 托管设备管理员模式           | root 模式（已被移除） |
|--------------------|--------------|------------------------------|-----------------------|
| appops             | ✔️            | ✔️                            | ✔️                     |
| runtime permission | ✔️            | 仅可设置<sup>**〔1〕**</sup> | ❌                     |
| permission flags   | ✔️            | ❌                            | ❌                     |

<sub><b>〔1〕</b>需要 Island v5.0+ 或其他具有 [Delegated Scopes Manager](https://github.com/heruoxin/Delegated-Scopes-Manager) v3 支持的管理员应用</sub>

#### “托管设备管理员模式”的缺陷

* “无法确认”
* 无法备份全部设置
* 在 Android 11，无法设定新增的“每次都询问”（需要“设置 permission flags”）

::: details 技术信息

被设为 `profile owner` 或 `device owner` 的管理员应用享有一些特权，但是只有它们自身可以使用。因此，不同的管理员应用提供了不同的 API，使其他应用得以“借用”其特权。

* [Delegated Scopes Manager API](https://github.com/heruoxin/Delegated-Scopes-Manager)
* [Delegation API](https://island.oasisfeng.com/api)

只有提供 Delegation API 的 Island v5.0+ 支持“设置 runtime permission”。

对于“无法确认”，举个例子，在 Android 10 中：

|              | appops     | runtime permission | permission flags |
|--------------|------------|--------------------|------------------|
| 忽略         | ignore     | true               |                  |
| 拒绝         | （任何值） | false              | 任意 "FIXED"     |
| （尚未设置） | （任何值） | false              | 无 "FIXED"       |

只看 appops 设置显然不够。

:::

#### 为什么必须移除“root 模式”

纯 root（执行指令）的能力十分有限，没有可以修改 permission flags 的指令。想要正确修改 runtime permission 必须保证 permission flags 也被正确地修改（设备管理员所使用的更高层级的 Java API 不需要考虑这个问题）。

因此，root 模式已被移除。

::: details 技术信息

很多人会认为 root 无所不能，但实际上 root 只提供了一个 `uid 0` 的 shell。想要进入 Android 世界（直接使用 Java API），通过 `app_process` 运行 dex 几乎是唯一选择。

“root 模式”的替代——“Shizuku 模式”使用 Shizuku（[GitHub](https://github.com/RikkaApps/Shizuku)）做这一部分的工作。如果不使用 Shizuku，则仍然需要运行类似 Shizuku 的东西，这样做是没有意义的，并且也将带来无意义的资源使用。

:::