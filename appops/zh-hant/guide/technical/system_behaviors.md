# 不同 Android 版本下的不同

每個 op 都有兩種 mode，分別為 `package mode` 和 `uid mode`。`uid mode` **有更高優先順序**，即只有當 `uid mode` 為預設值時才會使用 `package mode`。

以下表格展示了從系統修改權限設定時，`uid mode` 會被如何設定。

::: details 表格
<p>

星號（*）表示相對之前的系統放生變化。

#### Android 6 - Android 9
| 系統設定頁面 | uid mode                                |
|--------------|-----------------------------------------|
| 允許         | allow                                   |
| 拒絕         | ignore（只對 target 23 以下的應用程式設定） |
| （尚未設定） | (allow)                                 |

#### Android 10

| 系統設定頁面       | uid mode   |
|--------------------|------------|
| 僅在使用期間允許 * | foreground |
| 允許               | allow      |
| 拒絕 *             | ignore     |
| （尚未設定）       | (allow)    |

#### Android 11

| 系統設定頁面       | uid mode   |
|--------------------|------------|
| 每次都詢問 *       | ignore     |
| 僅在使用期間允許 * | foreground |
| 允許               | allow      |
| 拒絕               | ignore     |
| （尚未設定）*      | ignore     |

#### Android 11 中的其他行為

* 設定 `package mode` 無效
* 設定 `uid mode` 時，若設定值不符合執行時權限狀態則無效
* 在特定的情況下（比如安裝應用程式後），系統將重設**全部應用程式**的 appops 設定到與執行時權限符合的狀態

:::

### 舊版本 App Ops 沒做對

舊版本的 App Ops（v5.0.0 以前）只會讀取和修改 `package mode`，這顯然是不對的。

在 Android 9 及之前，對 target 23 以下的應用程式在 App Ops 中設定「允許」是無效的；在 Android 10，一旦使用者在系統中設定「拒絕」或「僅在使用時允許」，則在 App Ops 中的設定永遠無法生效（因為此時系統設定的 `uid mode` 被優先使用）。

由於從低版本升級時系統的權限設定是被保留的，這個巨大的問題在 Android 10 釋出的一年後才慢慢地暴露出來。

### 新版本（v5.0.0）App Ops 所做出的變化

除了完全跟隨系統行為以外別無選擇。

另外，因為 Android 11 會重置 appops 設定（所有「執行時權限允許，ops 忽略」會被重設為「執行時權限拒絕」），所以除了在系統之後再次重設以外別無選擇。

### 新版本（v5.0.0）App Ops 需要更多能力

想要正確跟隨系統行為，App Ops 必須具備取得和設定 `runtime permission`，`permission flags`，`appops` 的能力。但是，並不是所有工作模式都能做到。

|                    | Shizuku 模式 | 託管裝置管理員模式           | root 模式（已被移除） |
|--------------------|--------------|------------------------------|-----------------------|
| appops             | ✔️            | ✔️                            | ✔️                     |
| runtime permission | ✔️            | 僅可設定<sup>**〔1〕**</sup> | ❌                     |
| permission flags   | ✔️            | ❌                            | ❌                     |

<sub><b>〔1〕</b>需要 Island v5.0+ 或其他具有 [Delegated Scopes Manager](https://github.com/heruoxin/Delegated-Scopes-Manager) v3 支援的管理員程式</sub>

#### 「託管裝置管理員模式」的缺陷

* 「無法確認」
* 無法備份全部設定
* 在 Android 11，無法設定新增的「每次都詢問」（需要「設定 permission flags」）

::: details 技術資訊

被設為 `profile owner` 或 `device owner` 的管理員程式享有一些特權，但是隻有它們自身可以使用。因此，不同的管理員程式提供了不同的 API，使其他應用程式得以「借用」其特權。

* [Delegated Scopes Manager API](https://github.com/heruoxin/Delegated-Scopes-Manager)
* [Delegation API](https://island.oasisfeng.com/api)

只有提供 Delegation API 的 Island v5.0+ 支援「設定 runtime permission」。

對於「無法確認」，舉個例子，在 Android 10 中：

|              | appops     | runtime permission | permission flags |
|--------------|------------|--------------------|------------------|
| 忽略         | ignore     | true               |                  |
| 拒絕         | （任何值） | false              | 任意 "FIXED"     |
| （尚未設定） | （任何值） | false              | 無 "FIXED"       |

只看 appops 設定顯然不夠。

:::

#### 為什麼必須移除「root 模式」

純 root（執行指令）的能力十分有限，沒有可以修改 permission flags 的指令。想要正確修改 runtime permission 必須保證 permission flags 也被正確地修改（裝置管理員所使用的更高層級的 Java API 不需要考慮這個問題）。

因此，root 模式已被移除。

::: details 技術資訊

很多人會認為 root 無所不能，但實際上 root 只提供了一個 `uid 0` 的 shell。想要進入 Android 世界（直接使用 Java API），通過 `app_process` 執行 dex 幾乎是唯一選擇。

「root 模式」的替代——「Shizuku 模式」使用 Shizuku（[GitHub](https://github.com/RikkaApps/Shizuku)）做這一部分的工作。如果不使用 Shizuku，則仍然需要執行類似 Shizuku 的東西，這樣做是沒有意義的，並且也將帶來無意義的資源使用。

:::