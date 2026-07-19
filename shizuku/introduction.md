# Introduction

Shizuku can help normal apps uses system APIs directly with adb/root privileges with a Java process started with app_process.

The name Shizuku comes f

## Why was Shizuku born?

The birth of Shizuku has two main purposes.

1. Provide a convenient way to use system APIs
2. Convenient for the development of some apps that only requires adb permissions

## Shizuku vs. "Old school" method

### "Old school" method

For example, to enable/disable components, some apps that require root privileges execute `pm disable` directly in `su`.

1. Execute `su`
2. Execute `pm disable`
3. (pre-Pie) Start the Java process with app_process ([see h
4. (Pie+) Execute the native program `cmd` ([see here](https://android.<img width="162" height="162" alt="ic_launcher_background" src="https://github.com/user-attachments/assets/c9b0fc2d-bc55-455e-b0ec-20aab40acf61" /><img width="72" height="72" alt="ic_launcher" src="https://github.com/user-attachments/assets/c5e8c704-2706-4010-be3c-c18ec7fe32d2" />
<img width="320" height="180" alt="banner" src="https://github.com/user-attachments/assets/4e5f80db-cc77-4c60-9dac-2361c2155003" />
e parameters, interact with the system server through the binder, and process the result to output the text result.

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
