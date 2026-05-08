# Introduction
Shizuku can help normal apps uses system APIs directly with adb/root privileges with a Java process started with app_process.
The name Shizuku comes from [a character](https://danbooru.donmai.us/posts/3553474).
## Why was Shizuku born?
The birth of Shizuku has two main purposes.
1. Provide a convenient way to use system APIs
2. Convenient for the development of some apps that only requires adb permissions
## Shizuku vs. "Old school" method
### "Old school" method
For example, to enable/disable components, some apps that require root privileges execute `pm disable` directly in `su`.
1. Execute `su`
2. Execute `pm disable`
3. (pre-Pie) Start the Java process with app_process ([see here](https://android.googlesource.com/platform/frameworks/base/+/oreo-release/cmds/pm/pm))
4. (Pie+) Execute the native program `cmd` ([see here](https://android.googlesource.com/platform/frameworks/native/+/pie-release/cmds/cmd/))
