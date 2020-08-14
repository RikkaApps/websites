# System behavior of different versions

Each op has two modes, `package mode` and `uid mode`. `uid mode` has higher priority, that is, `package mode` is used only when `uid mode` is the default value. **Old versions of App Ops (before v5.0.0) will only read and modify `package mode`.**

The following table shows how the `uid mode` will be set when the permission settings are modified from the system.

#### Android 6-Android 9:
| System setting page | uid mode                                |
|---------------------|-----------------------------------------|
| Allow               | allow                                   |
| Deny                | ignore<br>(only for apps target pre-23) |
| (Not yet set)       | (allow)                                 |

#### Android 10:

| System setting page        | uid mode       |
|----------------------------|----------------|
| **Allow only while using** | **foreground** |
| Allow                      | allow          |
| **Deny**                   | **ignore**     |
| (Not yet set)              | (allow)        |

#### Android 11:

| System setting page        | uid mode       |
|----------------------------|----------------|
| **Ask every time**         | **ignore**     |
| **Allow only while using** | **foreground** |
| Allow                      | allow          |
| Deny                       | ignore         |
| **(Not yet set)**          | **ignore**     |

In addition:

* Setting `package mode` is invalid.
* When setting `uid mode`, it is invalid if the set value does not match to the runtime permission status.
* Under certain circumstances (for example, after installing an app), the system will reset the appops of all apps to a state that matches the runtime permissions.

### Old version App Ops (before v5.0.0) does not work properly since Android 10

#### Android 10

In short, settings from App Ops is valid only when the permission "allowed" in system.

For example, once set location permission to "Allow only while using" from the system, then settings from App Ops are always invalid. Because the system has changed `uid mode` to `foreground`, `package mode` modified by the old version of App Ops will never take effect.

#### Android 11

Almost not work.

### Changes made in the new version (v5.0.0) of App Ops

There is no choice but to follow the behavior of the system completely. Starting from v5.0.0, except for "ignore", other options are the same as those in the system permission settings (what need to do is more than what shown in the table above, e.g., `permission flags`).

In addition, since Android 11 will reset appops settings (all "runtime permission allowed, ops ignored" will be reset to "runtime permission denied"), so there is no choice but to reset later after the system.

### FAQ

#### Why "root mode" has to be removed?

It's very simple, pure root (execute commands) can't do the things mentioned above.

Many people think that root is omnipotent, but in fact root basically only provides `uid 0` in the Linux world. If you want to enter the Android world, running dex through `app_process` is almost the only option.

The alternative of "root mode", "Shizuku mode", uses Shizuku ([GitHub](https://github.com/RikkaApps/Shizuku)) to do this part of the work. If not Shizuku, something like Shizuku still need to be run, doing this is meaningless and will also bring meaningless resource usage.

#### Why "Delegated Device Admin mode" requires the admin app to support specific APIs?

"Delegated Device Admin mode" supports two APIs, [Delegated Scopes Manager API](https://github.com/heruoxin/Delegated-Scopes-Manager) created by IceBox (used by multiple admin apps) and [API](https://island.oasisfeng.com/api) provided by Island.

On Android 10 and above, it is essential to modify runtime permissions. Currently, only Island 5.0 and above provide this function.

#### Why "unable to confirm" shows in "Delegated Device Admin mode"?<br>Why backup is limited in "Delegated Device Admin mode"?

The "Delegated Device Admin mode" relies on the admin app which has been set as `profile owner` or `device owner`. The admin app only has the ability write but not to read runtime permissions (in fact, write is already a workaround). Therefore, it is impossible to accurately obtain the settings. For example, in Android 10 and above, for "ignore", you need to know whether the runtime permission is allowed to distinguish whether it is really "ignore".

#### Why is the backup created before v5.0.0 no longer supported?

The backup of App Ops prior to v5.0.0 only contains the settings of appops. Starting from Android 10, only the appops setting does not reflect the real situation. Even in a low version system, some necessary information is missing from the backup of the old version, which may cause wrong results.