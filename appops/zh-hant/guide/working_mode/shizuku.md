# Shizuku 模式（特權模式）

## 需求及特性

* 需要安裝 Shizuku 應用程式並通過 adb 或 root 啟動 Shizuku 服務
* 支援多使用者

::: tip
如果使用 adb，每次開機都需要使用 adb 進行啟動 Shizuku 的步驟（**但 appops 設定總是生效**）
:::

## 背景

Shizuku 模式是 App Ops 的第一個無需 root 的工作模式。同時這也是創造 Shizuku 的原因的之一。

使用 Shizuku 的優勢在於，只需要一條 adb 指令即可啟動和 Shizuku 本身不會對系統產生改動。

> 有關 Shizuku 的資訊，以及為什麼要獨立出一個應用程式，請檢視 [shizuku.rikka.app](https://shizuku.rikka.app/zh-hant)。