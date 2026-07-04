# User manual

[[toc]]

## Start Shizuku

Shizuku supports startup in the following three ways.

::: tip If you are using GrapheneOS

System settings - "Security" - "Secure app spawning" may need to be disabled.

[Source](https://github.com/RikkaApps/websites/pull/79#issue-1751837442)

:::

### Start with root

For rooted devices, just start directly.

### Start via wireless debugging

Starting with wireless debugging works on Android 11 or above. This startup method does not require a connection to a computer. Due to system limitations, the startup steps need to be performed again after each reboot.

#### Enable Wireless debugging

1. Search the web for how to enable "Developer options" for your device model
2. Enable "Developer options" and "USB Debugging"<br><br><img :src="$withBase('/images/enable_dev_options.png')" style="max-width:320px;width:100%">
3. Enter "Wireless debugging"<br><br><img :src="$withBase('/images/enter_wireless_debugging.png')" style="max-width:320px;width:100%">
4. Enable "Wireless debugging"<br><br><img :src="$withBase('/images/enable_wireless_debugging.png')" style="max-width:320px;width:100%">
   
#### Pairing (only needs once)

1. Start pairing in Shizuku<br><img :src="$withBase('/images/start_paring_from_shizuku.png')" style="max-width:320px;width:100%">
2. [Enable Wireless debugging](#enable-wireless-debugging)
3. Tap "Pair device with pairing code" in "Wireless debugging"<br><img :src="$withBase('/images/start_pairing.png')" style="max-width:320px;width:100%">
4. Enter pairing code in Shizuku's notificaiton<br><img :src="$withBase('/images/enter_pairing_code.png')" style="max-width:320px;width:100%">

#### Start Shizuku

<img :src="$withBase('/images/start_shizuku.png')" style="max-width:320px;width:100%">

If it does not start, try disabling and enabling wireless debugging.

### Start by connecting to a computer

This boot method works on unrooted devices running Android 10 and below. Unfortunately, this startup method requires a computer. Due to system limitations, the boot steps need to be performed again after each reboot.

#### What is `adb`?

Android Debug Bridge (`adb`) is a versatile command-line tool that lets you communicate with a device. The adb command facilitates a variety of device actions, such as installing and debugging apps, and it provides access to a Unix shell that you Can use to run a variety of commands on a device.

See [Android Developer](https://developer.android.com/studio/command-line/adb) for more information.

#### Install `adb`

1. Download "SDK Platform Tools" provided by Google and extract it to any folder

   * [Windows](https://dl.google.com/android/repository/platform-tools-latest-windows.zip)
   * [Linux](https://dl.google.com/android/repository/platform-tools-latest-linux.zip)
   * [Mac](https://dl.google.com/android/repository/platform-tools-latest-darwin.zip)

2. Open the folder, right click to select

   * Windows 10: Open PowerShell windows here (**hold down Shift to show this option**)
   * Windows 7: Open command window here (**hold down Shift to show this option**)
   * Mac or Linux: Open Terminal

3. Enter `adb`, if success, you can see a long list of content instead of the prompt not finding adb.

::: tip
1. Please do not close this window. The "terminal" mentioned later refers to this window (if you closed the window, please go back to step 2)
2. If you use PowerShell or Linux/Mac, all `adb` should be replaced with `./adb`
:::

#### Setting `adb`

To use `adb` you first need to turn on USB debugging on your device, usually by following these steps:

1. Open system Settings and go to About.
2. Click "Build number" quickly for several times, you can see a message similar to "You are a developer".
3. At this point, you should able to find "Developer Options" in Settings,  enable "USB Debugging".
4. Connect the device to the computer and type `adb devices` in the terminal.
5. At this time, the dialog "Allow debugging" will appear on the device, check "Always allow" and confirm.
6. Enter `adb devices` again in the terminal. If there is no problem, you will see something like the following.

   ```
   List of devices attached
   XXX      device
   ```

::: tip
The steps for enabling Developer Options on different devices may vary, please search for yourself.
:::

#### Start Shizuku

Copy the command and paste into the terminal. If there is no problem, you will see that Shizuku has started successfully in Shizuku app.


::: details Command for Shizuku v11.2.0+

```
adb shell sh /sdcard/Android/data/moe.shizuku.privileged.api/start.sh
```
:::

## FAQ

Many manufacturers have made modifications to the Android system that prevent Shizuku from working properly.

### Start via wireless debugging: keeps showing "Searching for pairing service"

Please allow Shizuku to run in the background.

Searching for pairing service requires access to the local network, and many manufacturers disable network access for apps as soon as they become invisible. You can search the web for how to allow apps to run in the background on your device.

### Start via wireless debugging: immediately fail after tapping "Enter pairing code"

#### MIUI (Xiaomi, POCO)

Switch notification style to "Android" from "Notification" - "Notification shade" in system settings.

### Start via wireless debugging/Start by connecting to a computer: the permission of adb is limited

#### MIUI (Xiaomi, POCO)

Enable "USB debugging (Security options)" in "Developer options". **Note that this is a separate option from "USB debugging".**

#### ColorOS (OPPO & OnePlus)

Disable "Permission monitoring" in "Developer options".

#### Flyme (Meizu)

Disable "Flyme payment protection" in "Developer options".

### Start via wireless debugging/Start by connecting to a computer: Shizuku randomly stops

#### All devices

- Make sure Shizuku can run in the background.
- Do not disable "USB debugging" and "Developer options".
- Change the USB usage mode to "Charge only" in the "Developer options".
  
  On Android 8, the option is "Select USB configuration" - "Charge only".
  
  On Android 9+, the option is "Default USB configuration" - "No data transfer".

- (Android 11+) Enable "Disable adb authorization timeout" option

#### EMUI (Huawei)

Enable "Allow ADB debugging options in 'Charge only' mode" in "Developer options".

#### MIUI (Xiaomi, POCO)

Do not use the scan feature in MIUI's "Security" app, since it will disable "Developer options".

#### Sony

Don't click the dialog shows after connecting the USB, because it will change USB usage mode.

### Start via root: cannot start on boot

Please allow Shizuku to run in the background.# Fork a repository

A fork is a new repository that shares code and visibility settings with the original upstream repository.

## About forks

A fork is a new repository that shares code and visibility settings with the original “upstream” repository. Forks are often used to iterate on ideas or changes before they are proposed back to the upstream repository, such as in open source projects or when a user does not have write access to the upstream repository. For more information, see [Working with forks](/en/enterprise-cloud@latest/pull-requests/collaborating-with-pull-requests/working-with-forks).

### Propose changes to someone else's project

For example, you can use forks to propose changes related to fixing a bug. Rather than logging an issue for a bug you have found, you can:

* Fork the repository.
* Make the fix.
* Submit a pull request to the project owner.

### Use someone else's project as a starting point for your own idea.

Open source software is based on the idea that by sharing code, we can make better, more reliable software. For more information, see the [About the Open Source Initiative](https://opensource.org/about) on the Open Source Initiative.

For more information about applying open source principles to your organization's development work on GitHub, see GitHub's white paper [An introduction to innersource](https://resources.github.com/whitepapers/introduction-to-innersource/).

When creating your public repository from a fork of someone's project, make sure to include a license file that determines how you want your project to be shared with others. For more information, see [Choose an open source license](https://choosealicense.com/) at choosealicense.com.

For more information on open source, specifically how to create and grow an open source project, we've created [Open Source Guides](https://opensource.guide/) that will help you foster a healthy open source community by recommending best practices for creating and maintaining repositories for your open source project. You can also take a free [GitHub Skills](https://skills.github.com/) course on maintaining open source communities.

## Prerequisites

If you haven't yet, first set up Git and authentication with GitHub.com from Git. For more information, see [Set up Git](/en/enterprise-cloud@latest/get-started/git-basics/set-up-git).

## Forking a repository

<div class="ghd-tool webui">

You might fork a project to propose changes to the upstream repository. In this case, it's good practice to regularly sync your fork with the upstream repository. To do this, you'll need to use Git on the command line. You can practice setting the upstream repository using the same [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) repository you just forked.

1. On GitHub, navigate to the [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) repository.
2. In the top-right corner of the page, click **Fork**.

   ![Screenshot of the main page of repository. A button, labeled with a fork icon and "Fork 59.3k," is outlined in dark orange.](/assets/images/help/repository/fork-button.png)
3. Under "Owner," select the dropdown menu and click an owner for the forked repository.
4. By default, forks are named the same as their upstream repositories. Optionally, to further distinguish your fork, in the "Repository name" field, type a name.
5. Optionally, in the "Description" field, type a description of your fork.
6. Optionally, select **Copy the DEFAULT branch only**.

   For many forking scenarios, such as contributing to open-source projects, you only need to copy the default branch. If you do not select this option, all branches will be copied into the new fork.
7. Click **Create fork**.

> \[!NOTE]
> If you want to copy additional branches from the upstream repository, you can do so from the **Branches** page. For more information, see [Creating and deleting branches within your repository](/en/enterprise-cloud@latest/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository).

</div>

<div class="ghd-tool cli">

> \[!NOTE]
> To learn more about GitHub CLI, see [About GitHub CLI](/en/enterprise-cloud@latest/github-cli/github-cli/about-github-cli).

To create a fork of a repository, use the `gh repo fork` subcommand.

```shell
gh repo fork REPOSITORY
```

To create the fork in an organization, use the `--org` flag.

```shell
gh repo fork REPOSITORY --org "octo-org"
```

</div>

<div class="ghd-tool desktop">

You can fork a repository on GitHub.com or in GitHub Desktop. For information about forking on GitHub.com, see [the web browser version of this article](/en/enterprise-cloud@latest/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo?tool=webui).

In GitHub Desktop, if you clone a repository that you do not have write access to, and then attempt to push a change to the repository, a fork will be created for you.

1. In the **File** menu, click **Clone Repository**.

   <div class="ghd-tool mac">

   ![Screenshot of the menu bar on a Mac. The "File" dropdown menu is expanded, and the "Clone Repository" option is highlighted with an orange outline.](/assets/images/help/desktop/clone-file-menu-mac.png)

   </div>

   <div class="ghd-tool windows">

   ![Screenshot of the "GitHub Desktop" menu bar on Windows. The "File" dropdown menu is expanded, and the "Clone Repository" option is outlined in orange.](/assets/images/help/desktop/clone-file-menu-windows.png)

   </div>

2. Click the tab that corresponds to the location of the repository you want to clone. In this example, we click on the URL tab.

   ![Screenshot of the "URL" tab of the "Clone a repository" window. The "GitHub.com", "GitHub Enterprise" and "URL" tabs are outlined in dark orange.](/assets/images/help/desktop/choose-repository-location-url-tab-windows.png)

3. Enter the url or path of the repository you want to clone.

   ![Screenshot of the "URL" tab of the "Clone a repository" window. The input containing "octocat/Spoon-Knife" is highlighted with an orange outline.](/assets/images/help/desktop/clone-a-repository-url-tab-name-input.png)

4. To select the local directory into which you want to clone the repository, next to the "Local Path" field, click **Choose...** and navigate to the directory.

   ![Screenshot of the "URL" tab of the "Clone a repository" window. A button, labeled "Choose", is highlighted with an orange outline.](/assets/images/help/desktop/clone-choose-button-url-windows.png)

5. At the bottom of the "Clone a Repository" window, click **Clone**.

6. To create a fork, attempt to push a change to the repository. For example, create a new branch and publish it. A prompt will appear asking if you want to fork this repository.

   ![Screenshot of the "Create a fork prompt" window. A button, labeled "Fork this repository", is highlighted with an orange outline.](/assets/images/help/desktop/create-fork-button-windows.png)

7. Read the information in the "How are you planning to use this fork?" window.
   * If you plan to use this fork for contributing to the original upstream repository, click **To contribute to the parent project**.
   * If you plan to use this fork for a project not connected to the upstream, click **For my own purposes**.

8. Click **Continue**.

</div>

<div class="ghd-tool webui">

## Cloning your forked repository

Right now, you have a fork of the Spoon-Knife repository, but you do not have the files in that repository locally on your computer.

1. On GitHub, navigate to **your fork** of the Spoon-Knife repository.

2. Above the list of files, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-code" aria-label="code" role="img"><path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path></svg> Code**.

   ![Screenshot of the list of files on the landing page of a repository. The "Code" button is highlighted with a dark orange outline.](/assets/images/help/repository/code-button.png)

3. Copy the URL for the repository.

   * To clone the repository using HTTPS, under "HTTPS", click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-copy" aria-label="Copy to clipboard" role="img"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg>.
   * To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click **SSH**, then click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-copy" aria-label="Copy to clipboard" role="img"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg>.
   * To clone a repository using GitHub CLI, click **GitHub CLI**, then click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-copy" aria-label="Copy to clipboard" role="img"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg>.

     ![Screenshot of the "Code" dropdown menu. To the right of the HTTPS URL for the repository, a copy icon is outlined in dark orange.](/assets/images/help/repository/https-url-clone-cli.png)

4. Open <span class="platform-mac">Terminal</span><span class="platform-linux">Terminal</span><span class="platform-windows">Git Bash</span>.

5. Change the current working directory to the location where you want the cloned directory.

6. Type `git clone`, and then paste the URL you copied earlier. It will look like this, with your GitHub username instead of `YOUR-USERNAME`:

   ```shell
   git clone https://github.com/YOUR-USERNAME/Spoon-Knife
   ```

7. Press **Enter**. Your local clone will be created.

   ```shell
   $ git clone https://github.com/YOUR-USERNAME/Spoon-Knife
   > Cloning into `Spoon-Knife`...
   > remote: Counting objects: 10, done.
   > remote: Compressing objects: 100% (8/8), done.
   > remote: Total 10 (delta 1), reused 10 (delta 1)
   > Unpacking objects: 100% (10/10), done.
   ```

</div>

<div class="ghd-tool cli">

## Cloning your forked repository

Right now, you have a fork of the Spoon-Knife repository, but you do not have the files in that repository locally on your computer.

> \[!NOTE]
> To learn more about GitHub CLI, see [About GitHub CLI](/en/enterprise-cloud@latest/github-cli/github-cli/about-github-cli).

To create a clone of your fork, use the `--clone` flag.

```shell
gh repo fork REPOSITORY --clone=true
```

</div>

## Configuring Git to sync your fork with the upstream repository

When you fork a project in order to propose changes to the upstream repository, you can configure Git to pull changes from the upstream repository into the local clone of your fork.

<div class="ghd-tool webui">

1. On GitHub, navigate to the [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) repository.

2. Above the list of files, click **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-code" aria-label="code" role="img"><path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path></svg> Code**.

   ![Screenshot of the list of files on the landing page of a repository. The "Code" button is highlighted with a dark orange outline.](/assets/images/help/repository/code-button.png)

3. Copy the URL for the repository.

   * To clone the repository using HTTPS, under "HTTPS", click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-copy" aria-label="Copy to clipboard" role="img"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg>.
   * To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click **SSH**, then click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-copy" aria-label="Copy to clipboard" role="img"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg>.
   * To clone a repository using GitHub CLI, click **GitHub CLI**, then click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-copy" aria-label="Copy to clipboard" role="img"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg>.

     ![Screenshot of the "Code" dropdown menu. To the right of the HTTPS URL for the repository, a copy icon is outlined in dark orange.](/assets/images/help/repository/https-url-clone-cli.png)

4. Open <span class="platform-mac">Terminal</span><span class="platform-linux">Terminal</span><span class="platform-windows">Git Bash</span>.

5. Change directories to the location of the fork you cloned.
   * To go to your home directory, type just `cd` with no other text.
   * To list the files and folders in your current directory, type `ls`.
   * To go into one of your listed directories, type `cd YOUR-LISTED-DIRECTORY`.
   * To go up one directory, type `cd ..`.

6. Type `git remote -v` and press **Enter**. You will see the current configured remote repository for your fork.

   ```shell
   $ git remote -v
   > origin  https://github.com/YOUR-USERNAME/YOUR-FORK.git (fetch)
   > origin  https://github.com/YOUR-USERNAME/YOUR-FORK.git (push)
   ```

7. Type `git remote add upstream`, and then paste the URL you copied in Step 3 and press **Enter**. It will look like this:

   ```shell
   git remote add upstream https://github.com/ORIGINAL-OWNER/Spoon-Knife.git
   ```

8. To verify the new upstream repository you have specified for your fork, type `git remote -v` again. You should see the URL for your fork as `origin`, and the URL for the upstream repository as `upstream`.

   ```shell
   $ git remote -v
   > origin    https://github.com/YOUR-USERNAME/YOUR-FORK.git (fetch)
   > origin    https://github.com/YOUR-USERNAME/YOUR-FORK.git (push)
   > upstream  https://github.com/ORIGINAL-OWNER/ORIGINAL-REPOSITORY.git (fetch)
   > upstream  https://github.com/ORIGINAL-OWNER/ORIGINAL-REPOSITORY.git (push)
   ```

Now, you can keep your fork synced with the upstream repository with a few Git commands. For more information, see [Syncing a fork](/en/enterprise-cloud@latest/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork).

</div>

<div class="ghd-tool cli">

> \[!NOTE]
> To learn more about GitHub CLI, see [About GitHub CLI](/en/enterprise-cloud@latest/github-cli/github-cli/about-github-cli).

To configure a remote repository for the forked repository, use the `--remote` flag.

```shell
gh repo fork REPOSITORY --remote=true
```

To specify the remote repository's name, use the `--remote-name` flag.

```shell
gh repo fork REPOSITORY --remote-name "main-remote-repo"
```

</div>

### Editing a fork

You can make any changes to a fork, including:

* **Creating branches:** [*Branches*](/en/enterprise-cloud@latest/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository) allow you to build new features or test out ideas without putting your main project at risk.
* **Opening pull requests:** If you want to contribute back to the upstream repository, you can send a request to the original author to pull your fork into their repository by submitting a [pull request](/en/enterprise-cloud@latest/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests).

## Find another repository to fork

Fork a repository to start contributing to a project.
You can fork a private or internal repository to your personal account or to an organization on GitHub where you have permission to create repositories, provided that the settings for the repository and your enterprise policies allow forking.

Generally, you can fork any public repository to your personal account or to an organization where you have permission to create repositories, unless you're a member of an enterprise with managed users.

For more information about when you can fork a repository, see [About permissions and visibility of forks](/en/enterprise-cloud@latest/pull-requests/collaborating-with-pull-requests/working-with-forks/about-permissions-and-visibility-of-forks).

You can browse [Explore GitHub](https://github.com/explore) to find projects and start contributing to open source repositories. For more information, see [Finding ways to contribute to open source on GitHub](/en/enterprise-cloud@latest/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github).

## Next steps

You have now forked a repository, practiced cloning your fork, and configured an upstream repository.

* For more information about cloning the fork and syncing the changes in a forked repository from your computer, see [Set up Git](/en/enterprise-cloud@latest/get-started/git-basics/set-up-git).

* You can also create a new repository where you can put all your projects and share the code on GitHub. Creating a repository for your project allows you to store code in GitHub. This provides a backup of your work that you can choose to share with other developers. For more information, see [Quickstart for repositories](/en/enterprise-cloud@latest/repositories/creating-and-managing-repositories/quickstart-for-repositories).

* Each repository on GitHub is owned by a person or an organization. You can interact with the people, repositories, and organizations by connecting and following them on GitHub. For more information, see [Finding inspiration on GitHub](/en/enterprise-cloud@latest/get-started/start-your-journey/finding-inspiration-on-github).

* GitHub has a great support community where you can ask for help and talk to people from around the world. Join the conversation on [GitHub Community](https://github.com/orgs/community/discussions).
