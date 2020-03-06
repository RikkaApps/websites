# Report problems

This document will teach you how to report problems.

> For problems that are limited to a specific app (such as unable to find pictures in the app), there is a high probability that your settings is incorrect. Please try to read other documents to learn how to set correctly.

1. Make sure you are using recent versions of app
2. Describe app version (e.g., v4.1.6.r2361)
3. Describe your problem clearly
4. Attach the log of the problem (if possible, indicate the approximate time when the problem occurred)
5. Send to [support@rikka.app](mailto://support@rikka.app)

If the returns do not meet the requirements, there is a high chance that you will not receive replies.

### How to grab the log

You can use the in-app logcat (the upper right corner of the home page - Logcat) to grab the log.

Note that to capture meaningful logs, **you need to reproduce the problem after starting the log**.

### Unable enter the system

If you cannot enter the system, you need to grab the log through adb (requires to connect to a computer). You need to search for how to use adb by yourself.

Connect USB during the boot process, and execute `adb logcat > 1.txt` immediately after adb is connect.