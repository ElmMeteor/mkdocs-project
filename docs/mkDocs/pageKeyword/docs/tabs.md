# 多标签语法 === （Tabs in MkDocs Material）

!!! note "读法"
    英语：tabs  
    日语：タブ

!!! info "标记语法（扩展语法）"
    **多标签（Tabs）语法**  
    可以将代码或内容分组为可切换的多个标签页，适合展现多种语言、系统或配置等多个视图效果。  
    该功能属于 [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/reference/admonitions/#tabs) 的**扩展语法**，标准 Markdown 不支持。

=== "Python"
    ```python
    # Python 实现
    print("hello, world!")
    ```
=== "JavaScript"
    ```js
    // JavaScript 实现
    console.log("hello, world!");
    ```

---

<h2>语法说明</h2>

```
=== "标签页1标题"
    标签页1的内容
=== "标签页2标题"
    标签页2的内容
```

* `=== "标题"`：每个 `=== "xxx"` 后接对应的标签内容。
* 在 Material for MkDocs 渲染时会自动转换为可切换的标签页（tabs）。
* 标签数不限，可以任意设计，例如多种编程语言、多平台指令差异等。
* 标签页内容默认使用四个空格或一级 Tab 缩进，不缩进可能导致内容格式异常！

!!! warning "兼容性"
    `===` Tabs 语法仅限于启用 [pymdown-extensions](https://facelessuser.github.io/pymdown-extensions/) 后的 Material for MkDocs 环境。标准 Markdown 渲染器、GitHub、Typora 等**不会显示为标签页**，而是普通文本块。

---

<h2>示例</h2>
=== "code"
    ```
    === "Linux"
        ```
        $ mkdocs serve
        ```
    === "Windows"
        ```
        > mkdocs serve
        ```
    === "macOS"
        ```
        $ mkdocs serve
        ```
    ```
=== "view"
    === "Linux"
        ```
        $ mkdocs serve
        ```
    === "Windows"
        ```
        > mkdocs serve
        ```
    === "macOS"
        ```
        $ mkdocs serve
        ```

---

<h2>常见用途</h2>

- 展示同一功能在多种编程语言/系统/配置下的用法对比
- 文档多平台命令摘要
- 配置项（如 `yaml`/`json`/`env` 形式切换）
- 代码与运行效果对照等

---

!!! tip "小贴士"
    Tabs 语法尤其适合编写面向多平台、多人群的教程和说明文档，无需重复内容，让界面更整洁友好！

---

## 相关链接

- [Material for MkDocs | Tabs 官方说明（Admonitions/Tabs）](https://squidfunk.github.io/mkdocs-material/reference/admonitions/#tabs)
- [Material for MkDocs | 进阶 Tabs 用法示例](https://squidfunk.github.io/mkdocs-material/reference/content-tabs/)
- [pymdown-extensions 扩展包文档](https://facelessuser.github.io/pymdown-extensions/extensions/tabbed/)
- [官方示例仓库：mkdocs-material-examples](https://github.com/squidfunk/mkdocs-material-examples)