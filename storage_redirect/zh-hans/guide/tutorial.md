# 教程

## 启用隔离后会发生什么？

假设存在一个应用 ExampleApp（包名为 `com.example`），它使用了有滥用存储空间行为的 SDK（假设它会创建 `bad_sdk` 文件夹）。那么在授予 ExampleApp 存储权限后，你的存储空间将会是这样的。

```
/storage/emulated/0
├───Android
├───bad_sdk
├───DCIM
├───Download
├───Pictures
└───...
```

现在，我们对 ExampleApp 启用隔离，它的存储空间成为其数据文件夹中的一个文件夹。我们称该文件夹为“隔离存储空间”。

ExampleApp 会只能使用该文件夹内的文件，由它创建的文件夹也会保存于该文件夹。

```
/storage/emulated/0
├───Android/data/com.example  <---- ExampleApp 的数据文件夹
│   └───sdcard                <---- 隔离存储空间
│       └───bad_sdk
└...
```

另外，由于选用了它的数据文件夹，我们还可以取得这些好处：

* 卸载或清除数据时，这些文件会被一并删除
* 在系统的应用信息中，这些文件也会被计入存储空间使用量

## 针对新用户的知识

::: details <b>推荐的组织文件的方式</b>

对于照片、图片、下载的文件等用户文件，Android 系统提供了一系列的标准文件夹。

* `Alarms`（闹铃）
* `Pictures`（图片）
* `DCIM`（相机）
* `Documents`（文档）
* `Download`（下载）
* `Movies`（影片）
* `Music`（音乐）
* `Notifications`（通知音）
* `Ringtones`（铃声）

以最常用的 `Pictures` 为例，通行的做法是，每个应用各自在其中建立自己的文件夹。比如 Twitter 保存图片至 `Pictures/Twitter`。

我们的建议是，按照上面的方式组织各个应用保存的文件。
:::

::: details <b>清理/移动已有的文件</b>

由于 `/storage/emulated` 中的文件并没有所有者，我们无法自动地帮助你移动或删除已有的文件。

* 用户文件，如图片

  按照上面推荐的方式进行整理。

* 其他

  对于绝大多数应用，删除先前的文件不会产生问题。但以防万一，我们建议你跟随下面的步骤。

  1. 建立一个临时文件夹并将它们都移入其中。
  2. 运行所有被隔离的应用。
  3. 如果有应用因为无法找到之前的文件而不正常工作，你可以借助“查看隔离存储空间”功能了解特定文件夹可能由谁建立并由此移动那些文件夹。
  4. 所有应用都正常工作后，删除临时文件夹。
:::

::: details <b>忘掉“清理应用”</b>

一些“清理应用”有清理特定应用建立的文件的功能（那些文件不在数据文件夹中，卸载后不会被删除），这种功能在隔离后因为文件位置变化而无法使用。

但是在隔离后，应用建立的文件都保存于隔离存储空间内（位于其数据文件夹），它们会在卸载后被删除。另外，你可以将隔离存储空间位置设定为缓存文件夹，缓存文件夹会被 Android 系统自动清理。

忘掉“清理应用”吧，它们已不再有用。并且，它们从一开始就不应该存在。
:::

::: details <b>“备份应用”不会受影响（甚至可以备份更多内容）</b>

“备份应用”只能备份应用的数据文件夹中的文件。

隔离后，应用建立的文件都保存于隔离存储空间内（位于其数据文件夹），因此它们也能被备份了。注意，你可能需要在你的“备份应用”中启用类似于“备份外部数据”的选项。
:::

::: details <b>使用增强模式</b>

增强模式是一个非常重要的组成部分，[许多问题](./enhanced_mode/)在使用增强模式的情况下才可以解决。

我们建议，当你确认一切正常后就开始尝试增强模式（在应用内可以看到如何使用增强模式）。
:::

## 应用不正常工作的解决方案

### 应用需要访问特定的文件

现在 ExampleApp 有了发送图片功能。但是因为被隔离，你无法在 ExampleApp 中找到你的图片。

要解决这个问题，我们只需要关注“可访问文件夹”选项中的“共享文件夹”部分。假设我们选择了 `DCIM` 和 `Pictures` 文件夹，ExampleApp 就可以访问这两个文件夹中的文件了。

```
/storage/emulated/0
├───Android/data/com.example
│   └───sdcard        <---- 隔离存储空间
│       ├───bad_sdk
│       ├───DCIM      <---- 真实的 DCIM
│       └───Pictures  <---- 真实的 Pictures
└...
```

对于其他情况，你只需要选择对应的文件夹即可。

注意，应用不止可以读取，还可以写入这些文件夹。
 
#### 不要滥用！

我们只推荐必要的文件夹设为可访问文件夹。如果你将所有的文件夹都设为可访问文件夹，隔离将失去意义。

### 找不到应用保存的文件

现在 ExampleApp 有了下载图片功能，并且你用它下载了 `1.png`。因为被隔离，`1.png` 被保存至隔离存储空间，你无法在相册应用中看到它。

```
/storage/emulated/0
├───Android/data/com.example
│   └───sdcard         <---- 隔离存储空间
│       ├───bad_sdk
│       ├───DCIM
│       ├───images
│       │   └───1.png
│       └───Pictures
└...
```

要解决这个问题，我们需要建立一个“导出被隔离的文件”规则。

```
来源：images
目标：Pictures/ExampleApp
添加到媒体存储：是
```

建立规则后，你就可以在相册应用及 `Pictures/ExampleApp` 中看到 `1.png`。

```
/storage/emulated/0
├───Android/data/com.example
│   └───sdcard               <---- 隔离存储空间
│       ├───images
│       │   └───1.png
│       └───...
├───Pictures
│   └───ExampleApp
│       └───1.png
└...
```

注意，由于使用了 hard link，因此虽然在两处存在相同的文件，**但是它们只会占用一份存储空间**。有关“导出被隔离的文件”的技术细节，你可以在[这里](./advanced/technical_details_export_isolated_files.md)阅读。

#### 使用在线规则

如果在线规则中已经有了需要的规则，你只需要直接添加它们。只有没有规则的情况或是规则有错误时你才需要自己编写规则。你还可以提交你的规则到在线规则库（通过“上传按钮”）。

#### 不要滥用！

导出的目的是导出**用户文件（由用户发起的保存文件操作，如保存图片、下载文件等操作）**。

如果应用将用户文件保存至私有文件夹（如 `Android/data/<package>/files/example`），此处并不属于隔离存储空间，不适用于导出功能。

```
/storage/emulated/0
├───Android/data/com.example
│   ├───files                <---- 不属于隔离存储空间
│   └───sdcard               <---- 隔离存储空间
└...
```

如果你发现应用将**用户文件**保存于私有文件夹，你应该要求它们的开发者做出改变。

::: details 为什么应该要求应用开发者做出改变？

在 Android 11 中，`Android` 文件夹是真正的私有文件夹。即使有存储权限，应用也只能访问其中属于自己的部分。

```
/storage/emulated/0
├───Android
│   ├───data
│   │   └───com.example     <---- 属于 com.example
│   ├───media
│   │   └───com.example     <---- 属于 com.example
│   └───obb
│       └───com.example     <---- 属于 com.example
└...
```

将用户文件存放在私有文件夹意味着只有应用自己能看见，**其它任何应用，包括文件管理器，都看不到**。这么做显然是不对的。另外，此处的文件会在卸载或清除数据时被删除，将用户文件保存于此显然不合适。

注意，对于“聊天应用中接收文件”这样的场景，将文件先存放于私有文件夹是合理的。因此，在向应用开发者反馈时，诉求应该是添加“保存到下载”功能（将私有文件夹中的文件移动至 `Download` 文件夹）而不是直接改变文件的位置。
:::

::: details 另一种“解决方案”

<https://github.com/RikkaApps/SaveCopy>
:::

### 配合另外的应用使用时出现问题

#### 使用其他应用查看文件（标准方式，即 ACTION_VIEW）

现在 ExampleApp 有了使用其他应用打开图片的功能。很不幸 ExampleApp 直接将文件路径传递给其他应用（这种做法几年前就应该被抛弃！），你会发现其他应用提示“找不到文件”。

ExampleApp 自己并不会知道自己被隔离了，它所看到的存储空间是这样的。

```
/storage/emulated/0    <---- ExampleApp 的视角
├───bad_sdk
├───DCIM
├───images
│   └───1.png
└───Pictures
```

因此，情况是这样的。

> ExampleApp：给你， `example_app/1.png`。
>
> 图片查看器：让我们看看试试打开这个文件... 诶~好像并没有这个文件诶！

我们都知道文件实际是位于 `/storage/emulated/0/Android/data/com.example/sdcard/images/1.png`。

::: tip 不再需要对这种情况提供支持

在 Android 11 中 `Android` 文件夹是真正的私有文件夹，这种做法不能正常工作。这么做的应用一定会做出改变。因此，从 v4.4.0 起，对这种情况的支持被移除。
:::

#### 以非标准方式将文件路径传递给其他被隔离的应用

现在 ExampleApp 添加了向 ExampleSocial 分享图片的功能（ExampleSocial 也是一个被隔离的应用）。很不幸 ExampleSocial 要求使用它的 SDK（这种做法也应该被抛弃！），这意味着又是直接传递文件路径，并且我们无法通过“修复应用间交互”功能改变传递的文件路径。

假设 ExampleSocial 的 SDK 是这样工作：将图片保存至 `tmp` 文件夹，将文件路径传递给 ExampleSocial。

```
/storage/emulated/0
├───Android/data/com.example
│   └───sdcard    <---- ExampleApp 的隔离存储空间
│       └───tmp/shared_image
└───Android/data/com.social.example
│   └───sdcard    <---- ExampleSocial 的隔离存储空间
│       └───...
└...
```

对于 ExampleSocial，`tmp` 文件夹并不存在，因此分享会失败。

要解决这个问题，我们需要建立一个“可访问文件夹”-“其他应用的文件夹”规则。

```
来源应用：ExampleApp
目标应用：ExampleSocial
文件夹：tmp
```

这样 ExampleSocial 就可以访问来自 ExampleApp 的 `tmp` 文件夹。

#### 如何建立自己的规则？

你需要拿起你的“武器”——“文件监视”。文件监视是增强模式的功能。

继续上面的例子，在 ExampleApp 分享到 ExampleSocial 失败后，你可以在文件监视中看到来自 ExampleApp 和 ExampleSocial 的 `tmp` 文件夹的记录。由此可以知道，你需要建立访问 `tmp` 文件夹的规则。

#### 使用在线规则

如果在线规则中已经有了需要的规则，你只需要直接添加它们。只有没有规则的情况或是规则有错误时你才需要自己编写规则。你还可以提交你的规则到在线规则库（通过“上传按钮”）。

#### 补充包

::: details <b>涉及 Xposed 模块</b>

首先，你需要了解，Xposed 模块不止以模块应用本身运行，它还会在其他应用中运行。

比如一个名为 ExampleXposedModule 的模块有修改 ExampleApp 的功能，那么它也会在 ExampleApp 中运行。如果 ExampleXposedModule 通过建立文件的方式保存设置，ExampleApp 就也需要去读取保存的文件，就会产生与 ExampleApp 分享到 ExampleSocial 同样的情况。

你需要做的还是借助“文件监视”监视了解哪些文件被使用并建立对应的规则。

**但是，最正确的做法应该是要求 Xposed 模块开发者做出更改！**（要求模块开发者使用 `ContentProvider` 共享配置，或是直接将配置保存于目标应用的数据文件夹。）
:::