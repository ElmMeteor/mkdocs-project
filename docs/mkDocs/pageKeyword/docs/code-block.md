# 行内代码 `

!!! note "读法"
    
    英语：backtick  
    日语：バッククォート

!!! info "标记语法(原生语法)"
    **行内代码 inline code**  
    在一行说明内如果需要引用代码时使用，可以使代码部分`灰色背景 + 等宽字体`显示

=== "code"
    ```
    短的命令内容，用两个反引号包住`inline code`,这是一段行内代码。
    ```
=== "view"
    短的命令内容，用两个反引号包住`inline code`,这是一段行内代码。

<hr style="border-top: 2px solid #e40e0eff; margin: 24px 0;">

# 代码块 ```

!!! note "读法"
    英语：triple backticks  
    日语：トリプル バッククォート


!!! info "标记语法(原生语法)"
    **代码块 code block**  
    **防止 Markdown 解析、保持代码原样格式，并通过语法高亮提升可读性**

    ```
        ``` 语言名 linenums="1" hl_lines="1 2 3"
        print("a")
        print("a")
        print("c")
        d
        print("e")
        ```
    ```
    
    * ```：是代码块的起始标记
    * 语言名：常用的编程语言(Python,JavaScript,YAML...)此为pymdownx.highlight扩展功能
    * linenums：

=== "code"
    ```
        ``` yaml linenums="5" hl_lines="2 3"
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
    ``` yaml linenums="5" hl_lines="2 3"
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
    | 语言 | 指定方式 |
    |:-----|:--------|
    | Python | `python` |
    | JavaScript | `js` 或 `javascript` |
    | TypeScript | `ts` |
    | Bash / Shell | `bash` / `sh` |
    | YAML | `yaml` |
    | JSON | `json` |
    | HTML | `html` |
    | CSS | `css` |
    | SQL | `sql` |
    | C# | `csharp` |
    | Markdown | `md` |