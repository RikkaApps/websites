# `RUN_IN_BACKGROUND`/`RUN_ANY_IN_BACKGROUND`（在後臺執行）

在 App Ops 應用中看到的「在後臺執行」實際是指 `RUN_IN_BACKGROUND`（Android 7 起增加）和 `RUN_ANY_IN_BACKGROUND`（Android 9 起增加）這兩個 op。在不同的系統版本上，改變這些 op 會有不同的行為。

這篇文章將會說明在 Android 9 上修改 `RUN_IN_BACKGROUND` 和 `RUN_ANY_IN_BACKGROUND` 對應用行為的影響。

## App Ops 應用所做的特殊處理

為了應對 Android 9 新增加的 `RUN_ANY_IN_BACKGROUND`，App Ops v2.6.0 以前採取這樣的策略：直接將 `RUN_IN_BACKGROUND` 和 `RUN_ANY_IN_BACKGROUND` 視為同一個，即只會看到一個「在後臺執行」選項，修改時會同時修改這兩個。但部分特殊情況下，同時設定兩個會造成限制過於嚴格的問題，因此從 v2.6.0 起可以自行選擇限制哪一個。

## `RUN_IN_BACKGROUND`

> 文章尚未完成，更多資訊將在以後補充

所有 target API 在 26 及以上的應用會受到此限制。

參考以下文章：

https://developer.android.com/about/versions/oreo/background

## `RUN_ANY_IN_BACKGROUND`

> 文章尚未完成，更多資訊將在以後補充

參考以下文章：

https://developer.android.com/about/versions/pie/power#battery-saver

https://developer.android.com/topic/performance/power/power-details

部分涉及的 commit：

https://github.com/aosp-mirror/platform_frameworks_base/commit/3ac1daac4044c70ad4ee673214074306de499a18

https://github.com/aosp-mirror/platform_frameworks_base/commit/db6bf66ee3b82edf25874d5dea4e02b0a146fb16