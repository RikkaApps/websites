https://www.tiktok.com/@ffbetezl04s/video/7559032955180420363?_r=1&u_code=emccjm287b1ec4&region=ID&mid=7559032967240403723&preview_pb=0&sharer_language=id&_d=ekfh8ggg5c0039&share_item_id=7559032955180420363&source=h5_t&timestamp=1760072149&user_id=7550597592628855826&sec_user_id=MS4wLjABAAAAaEN2YnBoPwxc5KsyD2JZPkfXpPpie5yCjEvqEu-ZeSCSdFQ1HlzwiM1XUQPakamE&item_author_type=2&social_share_type=0&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7532161930552592135&share_link_id=377e9c87-c09b-4f67-bdff-a919d854f6ed&share_app_id=1180&ugbiz_name=MAIN&ug_btm=b2001&link_reflow_popup_iteration_sharer=%7B%22click_empty_to_play%22%3A1%2C%22dynamic_cover%22%3A1%2C%22follow_to_play_duration%22%3A-1.0%2C%22profile_clickable%22%3A1%7D&enable_checksum=1# Introduction

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
