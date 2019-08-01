# Shizuku mode (Privileged mode)

## Requirements and Features

* Need to install Shizuku app and start Shizuku service via adb or root
* Support multi-user

::: tip
If you use adb, you need to use adb to start Shizuku every time your device boot (**but the appops settings always take effect**)
:::

## Background

Shizuku mode is first working mode without root of App Ops. At the same time, this is one of the reasons for creating Shizuku.

The advantage of using Shizuku is that it only needs one adb command to start and Shizuku itself does not make changes to the system.

> For information about Shizuku and the reason of making an application separately, please check [shizuku.rikka.app](https://shizuku.rikka.app/).