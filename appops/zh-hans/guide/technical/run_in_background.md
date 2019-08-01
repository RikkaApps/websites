# `RUN_IN_BACKGROUND`/`RUN_ANY_IN_BACKGROUND`（在后台运行）

在 App Ops 应用中看到的“在后台运行”实际是指 `RUN_IN_BACKGROUND`（Android 7 起增加）和 `RUN_ANY_IN_BACKGROUND`（Android 9 起增加）这两个 op。在不同的系统版本上，改变这些 op 会有不同的行为。

这篇文章将会说明在 Android 9 上修改 `RUN_IN_BACKGROUND` 和 `RUN_ANY_IN_BACKGROUND` 对应用行为的影响。

## App Ops 应用所做的特殊处理

为了应对 Android 9 新增加的 `RUN_ANY_IN_BACKGROUND`，App Ops v2.6.0 以前采取这样的策略：直接将 `RUN_IN_BACKGROUND` 和 `RUN_ANY_IN_BACKGROUND` 视为同一个，即只会看到一个“在后台运行”选项，修改时会同时修改这两个。但部分特殊情况下，同时设置两个会造成限制过于严格的问题，因此从 v2.6.0 起可以自行选择限制哪一个。

## `RUN_IN_BACKGROUND`

> 文章尚未完成，更多信息将在以后补充

所有 target API 在 26 及以上的应用会受到此限制。

参考以下文章：

https://developer.android.com/about/versions/oreo/background

## `RUN_ANY_IN_BACKGROUND`

> 文章尚未完成，更多信息将在以后补充

参考以下文章：

https://developer.android.com/about/versions/pie/power#battery-saver

https://developer.android.com/topic/performance/power/power-details

部分涉及的 commit：

https://github.com/aosp-mirror/platform_frameworks_base/commit/3ac1daac4044c70ad4ee673214074306de499a18

https://github.com/aosp-mirror/platform_frameworks_base/commit/db6bf66ee3b82edf25874d5dea4e02b0a146fb16