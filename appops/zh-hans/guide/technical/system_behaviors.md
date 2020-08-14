# 不同版本的系统行为

每个 op 都有两种 mode，分别为 `package mode` 和 `uid mode`。`uid mode` 有更高优先级，即只有当 `uid mode` 为默认值时才会使用 `package mode`。**旧版本的 App Ops（v5.0.0 以前）只会读取和修改 `package mode`。**

以下表格展示了从系统修改权限设定时，`uid mode` 会被如何设定。

#### Android 6 - Android 9：
| 系统设定页面 | uid mode                                |
|--------------|-----------------------------------------|
| 允许         | allow                                   |
| 拒绝         | ignore（只对 target 23 以下的应用设定） |
| （尚未设定） | (allow)                                 |

#### Android 10：

| 系统设定页面         | uid mode       |
|----------------------|----------------|
| **仅在使用期间允许** | **foreground** |
| 允许                 | allow          |
| **拒绝**             | **ignore**     |
| （尚未设定）         | (allow)        |

#### Android 11：

| 系统设定页面         | uid mode       |
|----------------------|----------------|
| **每次都询问**       | **ignore**     |
| **仅在使用期间允许** | **foreground** |
| 允许                 | allow          |
| 拒绝                 | ignore         |
| **（尚未设定）**     | **ignore**     |

此外：

* 设置 `package mode` 无效。
* 设置 `uid mode` 时，若设定值不符合运行时权限状态则无效。
* 在特定的情况下（比如安装应用后），系统将重设全部应用的 appops 设定到与运行时权限符合的状态。

### 旧版本 App Ops（v5.0.0 以前）从 Android 10 就不能正常工作

#### Android 10

简单地说，只有在系统中是“允许”时 App Ops 的设定才有效。

例如，一旦从系统将位置权限设置为“仅在使用时允许”，则来自 App Ops 的设置将始终无效。因为系统已将 `uid mode` 修改为 `foreground`，旧版本 App Ops 修改的 `package mode` 永远不会生效。

#### Android 11

几乎不能正常工作。

### 新版本 App Ops 所做出的变化

除了完全跟随系统行为以外别无选择。从 v5.0.0 版本起，除了“忽略”，其他选项与系统权限设置中的选项相同（要做的不止上面的表格所展示的，例如 `permission flags`）。

另外，因为 Android 11 会重置 appops 设定（所有“运行时权限允许，ops 忽略”会被重设为“运行时权限拒绝”），所以除了在系统之后再次重设以外别无选择。

### 常见问题

#### 为什么必须移除“root 模式”？

很简单，纯 root（执行指令）不可能做到上面所说的东西。

很多人会认为 root 无所不能，但实际上 root 基本上只提供了 Linux 世界的 `uid 0`。想要进入 Android 世界，通过 `app_process` 运行 dex 几乎是唯一选择。

“root 模式”的替代——“Shizuku 模式”使用 Shizuku（[GitHub](https://github.com/RikkaApps/Shizuku)）做这一部分的工作。如果不使用 Shizuku，则仍然需要运行类似 Shizuku 的东西，这样做是没有意义的，并且也将带来无意义的资源使用。

#### 为什么“托管设备管理员模式”需要管理员应用支持特定的 API？

“托管设备管理员模式”支持两种 API，分别是由冰箱提供的 [Delegated Scopes Manager API](https://github.com/heruoxin/Delegated-Scopes-Manager) （被多个管理员应用使用）和 Island 提供的 [API](https://island.oasisfeng.com/api)。

在 Android 10 以上修改运行时权限不可避免，目前只有 Island 5.0 及以上版本提供此功能。

#### 为什么“托管设备管理员模式”下会“无法确认”？<br>为什么“托管设备管理员模式”下备份受限？

“托管设备管理员模式”依赖被设为 `profile owner` 或 `device owner` 的管理员应用，管理员应用只有设置而没有读取运行时权限的能力（其实仅仅是设置也是使用了变通的方法）。因此不可能取得真实的设置。比如，在 Android 10 以上，对于“ignore”，需要得知运行时权限是否允许才能区分是否真的是“忽略”。

#### 为什么不再支持 v5.0.0 之前创建的备份？

在 v5.0.0 以前的 App Ops 的备份只包含了 appops 的设置。从 Android 10 开始，仅有 appops 设置并不能体现真实的情况。即使在低版本系统中，由于旧版的备份中缺失了一些必要的信息，也可能导致错误。