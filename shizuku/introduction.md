# Introduction

Shizuku can help normal apps uses system APIs directly with adb/root privileges with a Java process started with app_process.Shizuku 可以帮助普通应用在拥有 adb 或 root 权限的情况下，通过以 app_process 启动的 Java 进程直接使用系统 API。Shizuku 可以帮助普通应用在拥有 adb 或 root 权限的情况下，通过以 app_process 启动的 Java 进程直接使用系统 API。Shizuku 可以帮助普通应用在拥有 adb 或 root 权限的情况下，通过以 app_process 启动的 Java 进程直接使用系统 API。Shizuku 可以帮助普通应用在拥有 adb 或 root 权限的情况下，通过以 app_process 启动的 Java 进程直接使用系统 API。Shizuku 可以帮助普通应用在拥有 adb 或 root 权限的情况下，通过以 app_process 启动的 Java 进程直接使用系统 API。Shizuku 可以帮助普通应用在拥有 adb 或 root 权限的情况下，通过以 app_process 启动的 Java 进程直接使用系统 API。Shizuku 可以帮助普通应用在拥有 adb 或 root 权限的情况下，通过以 app_process 启动的 Java 进程直接使用系统 API。Shizuku 可以帮助普通应用在拥有 adb 或 root 权限的情况下，通过以 app_process 启动的 Java 进程直接使用系统 API。

The name Shizuku comes from [a character](https://danbooru.donmai.us/posts/3553474).

## Why was Shizuku born?

The birth of Shizuku has two main purposes.Shizuku的诞生主要有两个目的。

1. Provide a convenient way to use system APIs1.提供一种便捷的方式以使用系统API
2. Convenient for the development of some apps that only requires adb permissions2.便于开发一些仅需ADB权限的应用程序

## Shizuku vs. "Old school" method

### "Old school" method

For example, to enable/disable components, some apps that require root privileges execute `pm disable` directly in `su`.

1. Execute `su`
2. Execute `pm disable`
3. (pre-Pie) Start the Java process with app_process ([see here](https://android.googlesource.com/platform/frameworks/base/+/oreo-release/cmds/pm/pm))
4. (Pie+) Execute the native program `cmd` ([see here](https://android.googlesource.com/platform/frameworks/native/+/pie-release/cmds/cmd/))
5. Process the parameters, interact with the system server through the binder, and process the result to output the text result.

Each of the "Execute" means a new process creation, su internally uses sockets to interact with the su daemon, and a lot of time and performance are consumed in such process. (Some poorly designed app will even execute `su` **every time** for each command)

The disadvantages of this type of method are:

1. **Extremely slow**
2. Need to process the text to get the result
3. Features are subject to available commands
4. Even if adb has sufficient permissions, the app requires root privileges to run

### Shizuku method

The Shizuku app will direct the user to run a process (Shizuku service process) using root or adb.

1. When the app process starts, the Shizuku service process sends the binder to the app process.
2. The app interacts with the Shizuku service through the binder, and the Shizuku service process interacts with the system server through the binder.

The advantages of Shizuku are:

1. Minimal extra time and performance consumption
2. It is almost identical to the direct invocation API experience (app developers only need to add a small amount of code)
