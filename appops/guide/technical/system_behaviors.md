# Difference under different Android versions

Each op has two modes, `package mode` and `uid mode`. `uid mode` has higher priority, that is, `package mode` is used only when `uid mode` is the default value.

The following forms shows how the `uid mode` will be set when the permission settings are modified from the system.

::: details Forms
<p>

The asterisk (*) indicates changes from the previous system.

#### Android 6 - Android 9
| System setting page | uid mode                                |
|---------------------|-----------------------------------------|
| Allow               | allow                                   |
| Deny                | ignore<br>(only for apps target pre-23) |
| (Not yet set)       | (allow)                                 |

#### Android 10

| System setting page      | uid mode   |
|--------------------------|------------|
| Allow only while using * | foreground |
| Allow                    | allow      |
| Deny *                   | ignore     |
| (Not yet set)            | (allow)    |

#### Android 11

| System setting page      | uid mode   |
|--------------------------|------------|
| Ask every time *         | ignore     |
| Allow only while using * | foreground |
| Allow                    | allow      |
| Deny                     | ignore     |
| (Not yet set) *          | ignore     |

#### Other behaviors on Android 11

* Setting `package mode` is invalid
* When setting `uid mode`, it is invalid if the set value does not match to the runtime permission status
* Under certain circumstances (for example, install an app), the system will reset the appops of **all apps** to states that match runtime permissions

:::

### The old version of App Ops didn't do it right

The old versions of App Ops (before v5.0.0) will only read and modify `package mode`, which is obviously wrong.

In Android 9 and before, it is invalid to set "Allow" in App Ops for apps target below 23. In Android 10, once the user sets "Deny" or "Allow only while using" in the system, the settings in App Ops will never take effect (because `uid mode` set by the system is used first).

Since the system's permission settings were retained when upgrading from a lower version, this huge problem was slowly exposed one year after Android 10 was released.

### Changes made in the new version (v5.0.0) of App Ops

There is no choice but to follow the behavior of the system completely.

In addition, since Android 11 will reset appops settings (all "runtime permission allowed, ops ignored" will be reset to "runtime permission denied"), so there is no choice but to reset later after the system.

### The new version (v5.0.0) App Ops needs more capabilities

To follow the system behavior correctly, App Ops must have the ability to read and set `runtime permission`, `permission flags`, and `appops`. However, not all working modes can do it.

|                    | Shizuku mode | Delegated Device Admin mode    | root mode (removed) |
|--------------------|--------------|--------------------------------|---------------------|
| appops             | ✔️            | ✔️                              | ✔️                   |
| runtime permission | ✔️            | "Set" only<sup>**〔1〕**</sup> | ❌                   |
| permission flags   | ✔️            | ❌                              | ❌                   |

<sub><b>〔1〕</b>Requires Island v5.0+ or any other admin apps with [Delegated Scopes Manager](https://github.com/heruoxin/Delegated-Scopes-Manager) v3 support</sub>

#### Defects of "Delegated Device Admin mode"

* "Unable to confirm"
* Cannot backup all settings
* In Android 11, the new "Ask every time" cannot be set (requires "set permission flags")

::: details Technical information

Administrator apps set as `profile owner` or `device owner` have some privileges, but only they can use them. Therefore, different admin apps provide different APIs, allowing other apps to "borrow" their privileges.

* [Delegated Scopes Manager API](https://github.com/heruoxin/Delegated-Scopes-Manager)
* [Delegation API](https://island.oasisfeng.com/api)

Only Island v5.0+ that provides Delegation API supports "set runtime permission".

For "unable to confirm", for example, in Android 10:

|               | appops | runtime permission | permission flags |
|---------------|--------|--------------------|------------------|
| Ignore        | ignore | true               |                  |
| Deny          | (any)  | false              | any "FIXED" flag |
| (Not yet set) | (any)  | false              | no "FIXED" flag  |

Just looking at the appops setting is obviously not enough.

:::

#### Why "root mode" has to be removed?

The ability of pure root (execution command) is very limited, there is no command that can modify `permission flags`. If you want to modify the `runtime permission` correctly, you must ensure that the `permission flags` are also modified correctly (the higher-level Java API used by device admins does not need to consider this issue).

Therefore, the root mode has been removed.

::: details Technical information

Many people think that root is omnipotent, but in fact root basically only provides a shell with `uid 0`. If you want to enter the Android world (use Java API directly), running dex through `app_process` is almost the only option.

The alternative of "root mode", "Shizuku mode", uses Shizuku ([GitHub](https://github.com/RikkaApps/Shizuku)) to do this part of the work. If not Shizuku, something like Shizuku still need to be run, doing this is meaningless and will also bring meaningless resource usage.
:::