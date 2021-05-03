# Purchase (restore) issues on Google Play

The whole purchase process happens in Google Play, **the app developer has zero control over it**, all these solutions are based on experience.

### Multi-account issue

If you are logged into multiple accounts, Play Store may use the wrong account. This is not controlled by the app developer. Usually use the account at the time of purchase to reinstall should solve the problem.

### Using spoof softwares

Spoof softwares like "L**** Patcher" will hijack the connection between the app and the Play Store, which will finally result in error.

### Login to too many devices

Google may have some sort of risk control mechanism to disallow users login to too many devices to use purchased contents.

If you do factory reset or flash third-party ROMs without logout Google account first, you many have too many devices in your account.

Check [Google's device management page](https://myaccount.google.com/device-activity) and remove devices that do not exist.

### Code 7

The purchase record is stored in Play Store's cache. Code 7 means the record is missing.

Usually, clearing the cache of the Play Store should solve the problem.

### Code 3

The region of current Google account does not support purchase. Please refer to [Google's help page](https://support.google.com/googleplay/android-developer/table/3541286).

Search how to confirm (change) the region by yourself. Remember, the region is NOT related to your network environment.

### Code 6

Purchase is an interaction process between the app and Play Store. Many custom systems enable some restrictions by default, so that this process is blocked. For example, on MIUI, it's required to allow "Display interface in the background" permission for the Play Store.