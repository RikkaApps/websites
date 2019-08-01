# `RUN_IN_BACKGROUND`/`RUN_ANY_IN_BACKGROUND` (Run in background)

"Run in background" seen in the App Ops app actually refers to the two ops `RUN_IN_BACKGROUND` (added from Android 7) and `RUN_ANY_IN_BACKGROUND` (added from Android 9). Changing these ops will behave differently on different system versions.

This article will explain the effect of modifying `RUN_IN_BACKGROUND` and `RUN_ANY_IN_BACKGROUND` on app behavior on Android 9.

## Special handling by the app App Ops

In response to the new addition of `RUN_ANY_IN_BACKGROUND` for Android 9, App Ops v2.6.0 used a strategy like this: directly treat `RUN_IN_BACKGROUND` and `RUN_ANY_IN_BACKGROUND` as the same one, ie only see a "Run in background" option, modify it will modify both two ops at the same time. However, in some special cases, setting two at the same time will cause the restriction to be too strict, so you can choose which one to limit from v2.6.0.

## `RUN_IN_BACKGROUND`

> The article has not been completed, more information will be added later

All apps targeting API 26 and above will always subject to this restriction.

Refer to the following article:

Https://developer.android.com/about/versions/oreo/background

## `RUN_ANY_IN_BACKGROUND`

> The article has not been completed, more information will be added later

Refer to the following article:

Https://developer.android.com/about/versions/pie/power#battery-saver

Https://developer.android.com/topic/performance/power/power-details

Some of the commits involved:

Https://github.com/aosp-mirror/platform_frameworks_base/commit/3ac1daac4044c70ad4ee673214074306de499a18

Https://github.com/aosp-mirror/platform_frameworks_base/commit/db6bf66ee3b82edf25874d5dea4e02b0a146fb16