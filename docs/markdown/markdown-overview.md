

# Markdown 指南

> 本文将为你系统介绍 Markdown，包括它的基本概念、工作方式、应用场景和学习资源，帮助你全面掌握 Markdown。

---


<h2>什么是 Markdown？</h2>

Markdown 是一种轻量级标记语言，你可以用它在纯文本中添加格式元素。它由 <span style="color: red; font-weight: bold;">John Gruber</span> 于 2004 年创建，如今已成为全球最流行的标记语言之一。

与 **所见即所得（WYSIWYG）编辑器** 不同，你需要在文本中手动添加 Markdown 语法，用来说明哪些单词或短语应该以不同的形式显示。
??? note "什么是所见即所得（WYSIWYG）？"
    所见即所得（WYSIWYG:What You See Is What You Get）指的是你在编辑器里看到的内容和最终效果完全一致。
    比如 Microsoft Word、WPS、Google Docs 里通过点击按钮来加粗、插图、排版，并且格式变化会立刻显示出来。

例如，  

- 要添加标题，只需在前面加上井号（如 `# 一级标题`）；  
- 要加粗，只需在内容前后加两个星号（如 `**加粗内容**`）。

刚开始看到 Markdown 语法可能不习惯，尤其是习惯了 Word 这类编辑器，但 Markdown 语法简单易学，纯文本也很易读。

下图展示了在 Visual Studio Code 编辑器中打开的 Markdown 文件：

<img
  src="https://www.markdownguide.org/assets/images/generated/assets/images/vscode-1080.png"
  data-fallback="../assets/images/MkDocs_markdown_overview_1.png"
  alt="Visual Studio Code 中的 Markdown 文件"
/>

你可以用任何文本编辑器（如 VS Code、记事本、Sublime）或专门的 Markdown 应用（支持 macOS、Windows、Linux、iOS、Android）来编辑 Markdown 文件。

> Markdown 的核心理念
> 即使直接以纯文本形式发布，也应该看起来清晰自然，而不应像是被大量标签或格式指令“标记”过的文档。

---


<h2>为什么要使用 Markdown？</h2>

- Markdown 几乎可以用于任何场景，比如网站、文档、笔记、书籍、演示文稿、邮件和技术文档。
- Markdown 文件高度可移植，几乎所有应用都能打开，不会被专有格式锁定。
- Markdown 是跨平台的，支持所有主流操作系统。
- Markdown 具有前瞻性，即使应用停更，Markdown 文件依然可用。对于书籍、大学论文以及其他需要长期保存的重要文档来说，这一点尤为重要。
- Markdown 得到广泛支持，如 GitHub、Reddit 等网站和众多应用。

---


<h2>体验一下</h2>

最好的入门方式就是直接用 Markdown 写点东西。你可以用 [JotBird](https://www.jotbird.com) 这类在线编辑器，左侧输入 Markdown，右侧实时预览，无需安装任何软件。

<img
  src="https://www.markdownguide.org/assets/images/generated/assets/images/jotbird-1080.png"
  data-fallback="../assets/images/MkDocs_markdown_overview_2.png"
  alt="JotBird Markdown 编辑器"
/>

建议在学习本指南时，边看边在 JotBird 或自己喜欢的编辑器里练习，写多了自然熟练。

---


<h2>它是如何运作的？</h2>

Markdown 文件通常以 `.md` 或 `.markdown` 结尾，内容为纯文本。你写好后，需要用 Markdown 应用或 Markdown 处理器将其转换为 HTML、PDF 或其他格式。

!!! note "注意"
    Markdown 应用程序和 Markdown 处理器其实是两个不同的组件。  
    为了简化说明，在下面的示意图中，将它们合并成了一个元素（“Markdown APP”）。

    **Markdown 应用程序**（如 Typora、Joplin、Obsidian、Mark Text、VS Code 的 Markdown 插件等）通常集成了编辑、预览和导出等功能，适合日常编辑。

    **Markdown 处理器**（如 Pandoc、markdown-it、Marked、Python-Markdown 等）则更偏向于“把 Markdown 文件批量转换成 HTML、PDF、Word 等格式”，常用于自动化脚本、网站生成器或命令行批量处理。

Markdown 应用程序会调用内置或外部的“Markdown 处理器”把你的 Markdown 语法转换成 HTML 网页。整个过程如下：

1. 用文本编辑器或 Markdown 应用创建 `.md` 文件。
2. 用 Markdown APP打开文件。
3. 用应用将 Markdown 转换为 HTML。
4. 在浏览器查看 HTML，或导出为 PDF、Word 等格式。

<img
  src="https://www.markdownguide.org/assets/images/generated/assets/images/markdown-flowchart-1080.png"
  data-fallback="../assets/images/MkDocs_markdown_overview_3.png"
  alt="Markdown 流程图"
/>

不同应用的操作流程略有差异。例如 JotBird 将前 3 步合并，输入即预览；而用静态网站生成器时，流程会更清晰可见。  
不同应用使用的Markdown 处理器也有差异。例如 VS Code 使用的 Markdown 处理器是：markdown-it（JavaScript）。JotBird 使用的是：Markdown processor（作者自定义封装，底层仍是 CommonMark / markdown-it 系）

---


<h2>Markdown 有什么用？</h2>

Markdown 是一种高效、灵活的写作工具，适用于多种场景。
大多数人使用 Markdown 来创建网页内容，  
但实际上 Markdown 适合用来格式化各种东西，从电子邮件到购物清单都可以。


<h3>网站</h3>

Markdown 非常适合创建网站内容。比如 **blot.im** 这类服务，你只需把 Markdown 文件拖进指定文件夹，网站就自动生成。

如果你熟悉代码，可以用 **Jekyll**、**MkDocs**、**Docusaurus**、**VuePress** 这类静态网站生成器，配合 **GitHub Pages** 免费托管。

如果你喜欢用内容管理系统（CMS），可以试试 **Ghost**、WordPress（支持 Markdown）、或 Jetpack 插件。

<h3>文档</h3>

Markdown 适合写作业、信件、说明书等基础文档。虽然没有 Word 那么多排版功能，但导出 PDF、HTML 都很方便。

常用工具：
- **Mac**：MacDown、iA Writer、Marked 2
- **iOS/Android**：iA Writer
- **Windows**：ghostwriter、Markdown Monster
- **Linux**：ReText、ghostwriter
- **Web**：JotBird、Dillinger、StackEdit


<h3>笔记</h3>

Markdown 是理想的笔记格式。推荐应用：
- **Obsidian**
- **Simplenote**
- **Notable**
- **Bear**（Mac/iOS）
- **Joplin**



<h3>图书</h3>

**Leanpub** 支持用 Markdown 写书，能导出 PDF、EPUB、MOBI。纸质书可用 Kindle Direct Publishing。


<h3>演示文稿</h3>

Markdown 也能做演示文稿。推荐工具：
- **Remark**
- **Cleaver**
- **Marp**
- Mac 用户可试 Deckset、Hyperdeck


<h3>邮件</h3>

用 **Markdown Here** 浏览器插件，可以直接用 Markdown 写邮件，写完一键转格式。


<h3>协作</h3>

许多团队协作工具支持 Markdown 部分语法，如 Slack、Discord、Wiki.js、Mattermost。


<h3>文档</h3>

Markdown 非常适合技术文档。GitHub、Read the Docs、MkDocs、Docusaurus、VuePress、Jekyll 等都支持。

- **Read the Docs**
- **MkDocs**
- **Docusaurus**
- **VuePress**
- **Jekyll**

---


<h2>Markdown 的各种风格</h2>

几乎每个 Markdown 应用都实现了略有不同的“风格”（flavor），就像不同地区的方言。比如 GitHub Flavored Markdown（GFM）、CommonMark、原生 Markdown 等。

你需要熟悉所用应用的语法支持范围，建议选择主流、文档完善的 Markdown 应用，方便以后迁移。

可以参考 **工具目录** 选择合适的应用。

---


<h2>其他资源</h2>

- [Markdown 教程](https://www.markdownguide.org/)
- [material样式 官方文档](https://squidfunk.github.io/mkdocs-material/)
  
---