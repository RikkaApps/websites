# Why Enhanced mode is necessary?

-----------------------

Enhanced mode provides the following features:

1. No longer relying on `logcat` to detect app process creation
   - Avoid the problem that the app will not be isolated for a short period of time due to the possible delay of the log
   - Avoid the problem that the log is disable (e.g., Huawei EMUI disable log on boot)
2. Start on boot
   - Avoid the problem that custom systems block start on boot (including but not limited to MIUI)
3. Block system remount
   - Avoid remount triggered by the behavior of custom systems making the isolation invalid (e.g., MIUI 11)
4. Record file access behavior for apps
4. Modify/fix some of the app’s behavior to ensure that the app is functioning properly

## Performance impact

"Enhanced mode" only has a performance impact that can be ignored.