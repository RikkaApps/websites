# 技术细节（导出被隔离的文件）

假设有一个应用 `com.example` 保存图片至 `images` 文件夹。建立了一条来源文件夹 `images`，目标文件夹 `Pictures/Example` 的规则。

```
/storage/emulated/0
├───Android/data/com.example
│   └───sdcard      <---- com.example 的隔离存储空间
│       └───images  <---- 保存图片的位置（来源文件夹）
│           ├───1.jpg
│           └───...
└───Pictures
    └───Example     <---- 导出后的位置（目标文件夹）
        ├───1.jpg
        └───...
```

建立规则后，`Android/data/com.example/sdcard/images` 文件夹会被使用 [`inotify`](http://man7.org/linux/man-pages/man7/inotify.7.html) 监视并遵循如下的规则将其中的文件使用 [`link` (hard link)](http://man7.org/linux/man-pages/man2/link.2.html) “同步”至 `Pictures/Example`。

因为使用 hard link，所以只会占用一份存储空间。其他 app 或系统可能会因为没有正确地处理这样的情况而错误地回报使用情况。

规则的行为：
* 在来源文件夹中建立文件/移动文件至来源文件夹：link 至目标文件夹
* 删除/移出来源文件夹中的文件：若应用在前台则同时删除目标文件夹中的文件；若不在前台则什么都不做（这是为了避免用户/系统/第三方应用操作来源文件夹而导致文件丢失）
* 在目标文件夹中建立文件/移动文件至目标文件夹：在下次核心服务启动时 link 至来源文件夹
* 删除/移出目标文件夹中的文件：删除来源文件夹中的文件