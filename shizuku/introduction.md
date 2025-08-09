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
3. (pre-Pie) Start the Java process with app_process ([see here](---
description: If you don't have a computer, read this page
---

# 2. Wireless Activation

**If you are using Huawei or some phones that don't have wireless debugging options, see** [**Wired Activation**](1.-wired-activation-computer-needed) **tutorial**

**We recommend everyone who has computers to use**  [**Wired Activation**](1.-wired-activation-computer-needed)

Please [contact us](#official-accounts) if you have any questions

## Video Tutorial

Link: [https://youtu.be/ugH8W9LJJNc?si=hka3G\_xW0Wm4sU\_w](https://youtu.be/ugH8W9LJJNc?si=hka3G_xW0Wm4sU_w)

{% embed url="https://youtu.be/ugH8W9LJJNc" %}

## **Official Accounts**

<figure><img src="https://842271520-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FMLrIUhDIPDA6puFgEi0Q%2Fuploads%2Fb2oMacisr6cpgQFq3rrg%2Ftwitter_and_instagram.png?alt=media&#x26;token=f4762c14-c708-49f3-81a5-a93b8b6ce671" alt=""><figcaption></figcaption></figure>
))
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
