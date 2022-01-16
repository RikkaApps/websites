# Exit on start

Storage Isolation, AppOps, and NoPopping have anti-tampering mechanisms. Once tampering is detected, the application exits on start.

Tampering includes, but is not limited to:

* Resigning
* Run in a virtual environment
* Enable Xposed for the application
  
  Mainstream Xposed implementations have exclusion feature, please exclude apps from the Xposed framework you use.

Please make sure that the app is downloaded from official channels, including Google Play, GitHub release, Coolapk (for users in mainland China).

Currently, there are very few users reporting this issue after upgrading from different channels, but it is not certain if this is true. If this is the case for you, please sending the currently installed apk to [support@rikka.app](mailto://support@rikka.app) and reinstall the application.