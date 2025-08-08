# Introduction

Shizuku can help normal apps uses system APIs directly with adb/root privileges with a Java process started with app_process.

The name Shizuku comes from [a character](https://danbooru.donmai.us/posts/3553474).
<img width="2000" height="1200" alt="RobloxScreenShot20250620_134638716" src="https://github.com/user-attachments/assets/73839005-98b2-4ab0-ac2f-a4c5dba5101f" />
<img width="2000" height="1200" alt="RobloxScreenShot20250620_134729175" src="https://github.com/user-attachments/assets/eb499c37-3f0d-45f0-8c9f-a4aab98c5c84" />
<img width="2000" height="1200" alt="RobloxScreenShot20250620_134814053" src="https://github.com/user-attachments/assets/256c6535-0123-4c3c-abf5-3bd0762c6481" />
<img width="2000" height="1200" alt="RobloxScreenShot20250620_135434024" src="https://github.com/user-attachments/assets/5603a277-7af0-4d27-97e4-dab8d18f8975" />
<img width="2000" height="1200" alt="RobloxScreenShot20250620_135449258" src="https://github.com/user-attachments/assets/3a2b105d-d3c9-4031-8783-617c51860e93" />
<img width="1200" height="2000" alt="Screenshot_٢٠٢٥٠٦٢١-١٧٤٢١٥" src="https://github.com/user-attachments/assets/63343d61-8dab-4b62-81b1-7aa50f2fb381" />
![brgame_screenshot_٢٠٢٥٠٦٢٨١٦٣٨٤٢](https://github.com/user-attachments/assets/9a0ec07a-bac7-4f94-a6be-3f93f8de8a63)
![brgame_screenshot_٢٠٢٥٠٧٢٨٢٣٣٠٣٩](https://github.com/user-attachments/assets/acd71482-eb71-4604-b5a2-0dfa5d79a792)
![brgame_screenshot_٢٠٢٥٠٧٢٨٢٣٣٠٤٠](https://github.com/user-attachments/assets/5dfa63e9-8f11-4fdb-a9c1-a6ed807983fc)
![brgame_screenshot_٢٠٢٥٠٧٢٨٢٣٣٠٤١ (3)](https://github.com/user-attachments/assets/df34cbab-d0ed-41c2-a080-4b05aae57e22)
![brgame_screenshot_٢٠٢٥٠٧٢٨٢٣٣٠٤١ (2)](https://github.com/user-attachments/assets/034f1d16-e996-4f09-a45f-5658a6faa3aa)
![brgame_screenshot_٢٠٢٥٠٧٢٨٢٣٣٠٤١](https://github.com/user-attachments/assets/afa77299-85ed-4d3e-b5c7-e6e6a6ba08a9)
![brgame_screenshot_٢٠٢٥٠٧٢٨٢٣٣٠٤١ (1)](https://github.com/user-attachments/assets/4995140d-893a-4e89-9291-2002e3e34735)
![brgame_screenshot_٢٠٢٥٠٧٢٨٢٣٣٠٤٢](https://github.com/user-attachments/assets/c1c65f6c-57af-4776-898d-7df7bd8df662)
![brgame_screenshot_٢٠٢٥٠٧٢٨٢٣٣٠٤٢ (1)](https://github.com/user-attachments/assets/93f9ff02-c2f1-4882-8535-3083395a8858)
![brgame_screenshot_٢٠٢٥٠٧٢٨٢٣٣٠٤٢ (2)](https://github.com/user-attachments/assets/f948ad39-d8ef-4460-b66a-06192c9ea742)
![brgame_screenshot_٢٠٢٥٠٧٢٨٢٣٣٠٤٢ (3)](https://github.com/user-attachments/assets/985c7a1e-72d6-497c-957e-73f244c7a5cd)
![brgame_screenshot_٢٠٢٥٠٧٢٨٢٣٣٠٤٣ (1)](https://github.com/user-attachments/assets/73d36aa4-3d7f-4182-b9b4-7ba7d3eb3529)
![brgame_screenshot_٢٠٢٥٠٧٢٨٢٣٣٠٤٣](https://github.com/user-attachments/assets/9b3de039-d89a-4b9c-beb5-73f0fcf7fb8c)
![brgame_screenshot_٢٠٢٥٠٧٣٠٢١٤٦٢٢](https://github.com/user-attachments/assets/2d5aae69-9070-4093-b0cd-c01ada407de5)
<img width="2000" height="1200" alt="Screenshot_٢٠٢٥٠٨٠٥-٠٢١٠٠٤" src="https://github.com/user-attachments/assets/a7cc2eee-5a90-442c-957b-fcfad09601de" />
<img width="1200" height="2000" alt="Screenshot_٢٠٢٥٠٨٠٨-١٩٥٨٤١" src="https://github.com/user-attachments/assets/0eba00f6-cdef-4cb8-a637-f3b9104bbf85" />
<img width="1200" height="2000" alt="Screenshot_٢٠٢٥٠٨٠٨-١٩٥٩٢٨" src="https://github.com/user-attachments/assets/c6ccf232-8278-46c0-9b4f-3414f627d3f4" />
![1004146_original_2400x2400_1749496931](https://github.com/user-attachments/assets/df5fe442-6318-41de-9934-6d1020a2b50a)

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
<img width="2000" height="1200" alt="RobloxScreenShot20250620_134346588" src="https://github.com/user-attachments/assets/20b0d546-7e29-4f3e-8ae6-44339917e98f" />
<img width="2000" height="1200" alt="RobloxScreenShot20250620_134430610" src="https://github.com/user-attachments/assets/0abc257d-be06-412b-a548-cb6907709689" />

The advantages of Shizuku are:

1. Minimal extra time and performance consumption
2. It is almost identical to the direct invocation API experience (app developers only need to add a small amount of code)
