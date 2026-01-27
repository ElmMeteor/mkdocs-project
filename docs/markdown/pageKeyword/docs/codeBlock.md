# 行内代码 （Code）

!!! info "标记语法（原生语法）"
    **行内代码 inline code**  
    在一行说明文字中引用命令、变量名、文件名等“短代码片段”时使用。  
    使用后，代码部分会以 **灰色背景 + 等宽字体** 显示，便于和普通文本区分。

    官方定义：  
    使用反引号（`）包裹一个单词或短语，即可将其标记为代码。

=== "code"
    ```
    在命令行中输入 `nano` 打开编辑器。
    ```
=== "view"
    在命令行中输入 `nano` 打开编辑器。

---

<h2>行内代码中包含反引号（Escaping Backticks）</h2>

!!! info "特殊情况说明"
    如果需要标记为行内代码的内容 **本身就包含反引号（`）**，  
    可以使用 **双反引号 ``** 将整体包裹。

    这是 Markdown 官方推荐的写法，用于转义反引号。

=== "code"
    ```
    ``Use `code` in your Markdown file.``
    ```
=== "view"
    `Use `code` in your Markdown file.`

⚠️ 使用要点  

* 外层使用 **双反引号 ``**
* 内层单个反引号会作为普通字符显示
* 常用于说明 Markdown 语法本身的文档

<hr style="border-top: 2px solid #e40e0eff; margin: 24px 0;">

## 代码块 （Code Blocks）

!!! info "标记语法（原生语法 + 扩展）"
    **代码块 code block**  
    用于展示多行代码，主要作用是：

    * 防止 Markdown 解析，保持代码原样
    * 保留换行和缩进
    * 支持语法高亮（MkDocs + pymdownx.highlight）

    ```text
    ``` 语言名 linenums="1" hl_lines="1 2 3"
    print("a")
    print("b")
    print("c")
    ```
    ```

    * ` ``` `：代码块的起始与结束标记

    **下面三个为 pymdownx.highlight 扩展功能：**

    * **语言名**：指定代码语言（Python / JavaScript / YAML 等）
    * **linenums**：显示行号  
      例：`linenums="5"` 表示从第 5 行开始编号
    * **hl_lines**：高亮指定行  
      例：`hl_lines="2 3 5"`

    ⚠️ `linenums` 只影响显示的行号，不影响代码内容  
    ⚠️ `hl_lines` 始终基于 **代码块内部的真实行号顺序**

=== "code"
    ```
    ```yaml linenums="5" hl_lines="2 3"
    site_name: 资料文档

    nav:
      - MkDocs:
          - 关键字:
          - docs:
              - 标题'#': markdown/pageKeyword/docs/hash.md
          - mkdocs.yml:
              - 导航菜单 nav: markdown/pageKeyword/mkdocs/navigation.md
    ```
    ```
=== "view"
    ```yaml linenums="5" hl_lines="2 3"
    site_name: 资料文档

    nav:
      - MkDocs:
          - 关键字:
          - docs:
              - 标题'#': markdown/pageKeyword/docs/hash.md
          - mkdocs.yml:
              - 导航菜单 nav: markdown/pageKeyword/mkdocs/navigation.md
    ```

---

<h3>代码块的另一种写法（不推荐）</h3>

!!! info "官方原生语法（了解即可）"
    Markdown 支持通过 **每行缩进 4 个空格或 1 个 Tab** 来创建代码块：

=== "code"
    ```
        <html>
          <head>
          </head>
        </html>
    ```
=== "view"
        <html>
          <head>
          </head>
        </html>

⚠️ 注意  

* 不支持语言指定
* 不支持行号与高亮
* 在 MkDocs 中 **强烈建议使用 ``` 围栏代码块**

---

??? "常用的编程语言（MkDocs 可直接用）"
    | 语言        | 指定方式        |
    |:------------|:---------------|
    | Python      | `python`       |
    | JavaScript  | `js` 或 `javascript` |
    | TypeScript  | `ts`           |
    | Bash / Shell| `bash` / `sh`  |
    | YAML        | `yaml`         |
    | JSON        | `json`         |
    | HTML        | `html`         |
    | CSS         | `css`          |
    | SQL         | `sql`          |
    | C#          | `csharp`       |
    | Markdown    | `md`           |
