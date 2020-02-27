# Technical details (Export isolated files)

Suppose an app `com.example` saves images to `images` folder. Created a rule for source folder `images` and target folder `Pictures/Example`.

```
/storage/emulated/0
├───Android/data/com.example
│   └───sdcard      <---- Isolated storage for com.example
│       └───images  <---- Location of images (source folder)
│           ├───1.jpg
│           └───...
└───Pictures
    └───Example     <---- Exported location (target folder)
        ├───1.jpg
        └───...
```

After creating the rule, the `Android/data/com.example/sdcard/images` folder will be monitored with [`inotify`](http://man7.org/linux/man-pages/man7/inotify.7.html), and by the rule, the files inside will be "synced" to `Pictures/Example` with [`link` (hard link)](http://man7.org/linux/man-pages/man2/link.2.html).

Because hard link is used, only one of storage space is occupied. Other apps or systems may report usage incorrectly because they don't handle this situation properly.

The behavior of the rule:
* Create files in source folder / Move files to source folder: link to target folder
* Delete / move outside files in source folder: If the app is foreground, delete the files in the target folder; if it is not foreground, do nothing (this is to prevent operations from user / system / third-party apps cause file loss)
* Create files in target folder / Move files to target folder: link to source folder at next core service startup
* Delete / move outside files in target folder: delete files in source folder