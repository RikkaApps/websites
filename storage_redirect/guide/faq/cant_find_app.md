# Can't find some apps

Only apps which request read <b>and</b> write storage permission will be shown (i.e., apps request only read storage permission or no storage permission will not be shown).

## Apps using root/adb

Apps using root or adb can access storage directly as root or adb without limited by their permissions.

> Apps that use adb here do not include apps that require adb to grant permissions (`pm grant`) or similar operations.

## Apps using Xposed 

Apps using Xposed can use storage through the apps they inject, i.e., the actual access to the storage space is the app they injected instead of the Xposed module app itself.