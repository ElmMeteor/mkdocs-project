# 行内代码 \`

!!! note "读法"
    英语：backtick  
    日语：バッククォート

!!! info "标记语法（原生语法）"
    **行内代码 inline code**  
    在一行说明内如果需要引用代码时使用，可以使代码部分 `灰色背景 + 等宽字体` 显示。

=== "code"
    ```
    短的命令内容，用一个反引号包住 `inline code`，这是一段行内代码。
    ```
=== "view"
    短的命令内容，用一个反引号包住 `inline code`，这是一段行内代码。

<hr style="border-top: 2px solid #e40e0eff; margin: 24px 0;">

## 代码块 ```

!!! note "读法"
    英语：triple backticks  
    日语：トリプル バッククォート

!!! info "标记语法（原生语法）"
    **代码块 code block**  
    防止 Markdown 解析、保持代码原样格式，并通过语法高亮提升可读性。

    ```
        ``` 语言名 linenums="1" hl_lines="1 2 3"
        print("a")
        print("a")
        print("c")
        d
        print("e")
        ```
    ```

    * ` ``` `：是代码块的起始标记

    下面三个为 pymdownx.highlight 扩展功能  

    * 语言名：常用的编程语言（Python, JavaScript, YAML...）
    * linenums：设置代码块显示行号，格式如 `linenums="5"` 表示从第 5 行开始编号（可以自定义起始行）。
    * hl_lines：高亮特定的行，格式如 `hl_lines="2 3 5"`，对应为当前代码块中的第 2、第 3、第 5 行会高亮显示。

    ⚠️ `linenums` 设定从哪一行开始显示行号，不影响代码块内容的实际行数或高亮效果。  
    ⚠️ `hl_lines` 总是基于 **代码块本身的行号顺序**，不取决于 `linenums` 的起始设置。

=== "code"
    ```
        ```yaml linenums="5" hl_lines="2 3"
        site_name: 资料文档

        nav:
        - MkDocs:
            - 关键字:
            - docs:
                - 标题'#': mkDocs/pageKeyword/docs/hash.md
            - mkdocs.yml:
                - 导航菜单 nav: mkDocs/pageKeyword/mkdocs/navigation.md
        ```
    ```
=== "view"
    ```yaml linenums="5" hl_lines="2 3"
    site_name: 资料文档

    nav:
      - MkDocs:
          - 关键字:
          - docs:
              - 标题'#': mkDocs/pageKeyword/docs/hash.md
          - mkdocs.yml:
              - 导航菜单 nav: mkDocs/pageKeyword/mkdocs/navigation.md
    ```

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