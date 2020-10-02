# Unable to purchase (restore) on Google Play

> There is no technical distinction between "purchase" and "restore purchase". The "purchase" described below includes "restore purchase".

### Unable to initiate purchase

* **Interaction between apps and Play Store is blocked**

  Purchase is an interaction process between the app and Play Store. Many custom systems enable some restrictions by default, so that this process is blocked. For example, on MIUI, it's required to allow "Display interface in the background" permission for the Play Store.

* **The account region does not support purchases**

  Very few regions do not support in-app purchases, please refer to [Google's help page](https://support.google.com/googleplay/android-developer/table/3541286).

  Note that the account region is not related to network environment, please search how to confirm (change) the region by yourself.

* **Not installed from Play Store**

  The Play Store **may** prohibit apps installed elsewhere from initiating purchases.

### The previous purchase is not recognized

Note, among the order information provided to the developer, the only thing that can be used for verification is a long string. No other information will be exposed to the developer.

* **Incomplete order information provided by Play Store**
  
  The order information is stored in Play Store's cache. Usually, clearing the cache of the Play Store (and forcibly stopping the Play Store) should solve the problem.

* **The wrong account is used by Play Store**

  If you are logged into multiple accounts, Play Store may use the wrong account (**not controlled by the app developer**). Usually use the account at the time of purchase to reinstall should solve the problems.
