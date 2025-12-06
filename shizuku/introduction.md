![1000031741](https://github.com/user-attachments/assets/8945d423-480e-4ad1-9d7e-0a37b445bd63)
![1000031745](https://github.com/user-attachments/assets/969fed31-13f0-45fd-bf10-a98a846a0668)
![1000031734](https://github.com/user-attachments/assets/5b0dab7b-4153-4d7d-9f01-21945358f43d)
![1000031735](https://github.com/user-attachments/assets/64b0099e-dd1d-4773-aa01-251f3fbb5c81)
![1000031736](https://github.com/user-attachments/assets/3cfda009-1897-4b87-b206-459698368fe9)
![1000031743](https://github.com/user-attachments/assets/fe905825-d88e-4fe0-88c9-20dda494a145)
![1000031737](https://github.com/user-attachments/assets/307bc62f-811a-4385-943d-65f755288158)
![1000031738](https://github.com/user-attachments/assets/13948d7d-b97b-44ff-bae6-2468bff085ea)
![1000031739](https://github.com/user-attachments/assets/eff8d456-e2d3-421e-9d24-3f7d66108920)
![1000031742](https://github.com/user-attachments/assets/97734142-4a0d-4949-ab8d-86f89a65fc83)
![1000031741](https://github.com/user-attachments/assets/eb9d51f2-fcf2-466d-987f-94db304627f1)
![1000031745](https://github.com/user-attachments/assets/63114b27-df17-4aba-b1f8-811747bb8664)
![1000031740](https://github.com/user-attachments/assets/2497c1ac-2dbf-457f-b641-59bee8cf8e71)
![1000031746](https://github.com/user-attachments/assets/b538a7b2-d033-4713-846b-f2a17c9d9359)
![1000031744](https://github.com/user-attachments/assets/22c28ac1-1b64-4b46-ba86-d59049a2dee9)
![1000031805](https://github.com/user-attachments/assets/54994291-d808-4ca3-8f29-72f472d7a828)
![1000031734](https://github.com/user-attachments/assets/4ab51f02-6a69-4279-a818-93f1880180e0)
![1000031735](https://github.com/user-attachments/assets/4a9163a9-6094-470a-a819-f3c000d5698c)
![1000031736](https://github.com/user-attachments/assets/ac6efbd5-65f4-4e39-a552-08eb7a25237d)
![1000031737](https://github.com/user-attachments/assets/91b9a43f-6105-4538-941c-c1394cc70867)
![1000031738](https://github.com/user-attachments/assets/d86d2ae4-638c-4a92-9fde-343275459d8e)
![1000031739](https://github.com/user-attachments/assets/2b1a0b5c-299d-4c2f-aa2a-2dc32d6467e1)
![1000031743](https://github.com/user-attachments/assets/6d7eb4f4-46e4-4c60-bcf8-20409ebe3f43)
![1000031741](https://github.com/user-attachments/assets/a3f21307-9238-43ad-8ad9-e02174a5b3df)
![1000031740](https://github.com/user-attachments/assets/8246b83c-0f4e-44a3-8160-e6f4b35733e3)
![1000031745](https://github.com/user-attachments/assets/693ca3bf-3b55-47b9-9302-2224cbc47c6a)
![1000031746](https://github.com/user-attachments/assets/af026167-a041-4d5d-9640-3a8d150c7307)
![1000031744](https://github.com/user-attachments/assets/5a18aed0-cf65-49a0-baa0-a375d5218ab6)
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
