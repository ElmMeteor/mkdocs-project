# 可折叠提示块 `???`

**`???` 是 Markdown 文档中常用的可折叠（可展开/收起）信息块标记，主要用于详细说明、补充解读、FAQ 等点击展开的内容。**  
在 [MkDocs Material](https://squidfunk.github.io/mkdocs-material/reference/admonitions/#collapsible-admonitions) 环境下启用 [pymdown-extensions](https://facelessuser.github.io/pymdown-extensions/extensions/admonition/) 后生效。

---

!!! note "读法"
    英语："triple question mark" /ˈkwɛs.tʃən mɑːrk/（サン クエスチョンマーク）  
    日语：トリプルクエスチョンマーク

---

!!! info "用途"
    - 创建“可折叠/可展开”的说明、示例、FAQ 区块，保持页面简洁
    - 展示多步骤操作、补充说明、详细解读、代码演示等，并可选设置不同的提示色
    - 支持与普通提示块（!!!）同样的 `note`、`info`、`warning` 等类型风格  
    - 内容区支持嵌入代码块、图片、列表、表格等 Markdown 元素

---

<h2>基本语法</h2>

```
??? 类型 "标题"
    折叠内容（缩进）
```
- `???` ：可折叠提示块的起始标记  
- `类型` ：提示样式（可省略，支持 note、info、warning、tip、danger、example、question 等）  
- `"标题"`：显示标题（可省略）  
- 内容：需整体缩进（通常 4 空格或 1 个 Tab）

---

<h2>示例</h2>

=== "code"
    ```markdown
    ??? info "点击展开，查看更多"
        这是一个可折叠的 info 提示块。
        - 支持多行内容
        - 可嵌入代码块：
            ```python
            print("hello, world")
            ```
        - 支持嵌套提示块
    ```
=== "view"
    ??? info "点击展开，查看更多"
        这是一个可折叠的 info 提示块。  
        - 支持多行内容  
        - 可嵌入代码块：
            ```python
            print("hello, world")
            ```
        - 支持嵌套提示块

---

<h2>常见类型一览</h2>

| 类型      | 示例语法                 |
|:----------|:------------------------|
| note      | `??? note "标题"`       |
| info      | `??? info "标题"`       |
| tip       | `??? tip "标题"`        |
| warning   | `??? warning "标题"`    |
| danger    | `??? danger "标题"`     |
| example   | `??? example "标题"`    |
| question  | `??? question "标题"`   |

- `???` 支持的类型和 `!!!` 普通提示块完全一致。

??? info "点击展开，查看所有折叠类型的实际效果演示"
    ??? note "note"
        这是 note 效果

    ??? info "info"
        这是 info 效果

    ??? tip "tip"
        这是 tip 效果

    ??? warning "warning"
        这是 warning 效果

    ??? danger "danger"
        这是 danger 效果

    ??? example "example"
        这是 example 效果

    ??? question "question"
        这是 question 效果

---

<h2>进阶用法与嵌套</h2>

=== "嵌套折叠"
    ```markdown
    ??? note "外层折叠"
        这里是外层内容。
        ??? info "内层折叠"
            这里是内层可收起内容。
    ```
=== "view"
    ??? note "外层折叠"
        这里是外层内容。
        ??? info "内层折叠"
            这里是内层可收起内容。

---

=== "折叠和 Tabs 联合使用"
    ```markdown
    === "代码"
        ??? example "Shell 步骤"
            1. 运行 `python app.py`
            2. 查看输出结果
    === "说明"
        ??? tip "展开说明"
            这一步会在终端展示运行状态，请留意日志信息。
    ```
=== "view"
    === "代码"
        ??? example "Shell 步骤"
            1. 运行 `python app.py`
            2. 查看输出结果
    === "说明"
        ??? tip "展开说明"
            这一步会在终端展示运行状态，请留意日志信息。

---

<h2>注意事项</h2>

- `???` 可折叠语法仅在 MkDocs Material 并启用 [`pymdownx.admonition`](https://facelessuser.github.io/pymdown-extensions/extensions/admonition/) 时可用  
- 内容区域需整体缩进，推荐 4 空格  
- 标准 Markdown/GitHub/Typora 下不会有折叠视觉，只做普通文本展示  
- 可自由组合其他 Markdown 语法和 Material 扩展（如多标签 Tabs）

---

!!! tip "小贴士"
    - 善用可折叠提示块，使主页面更简洁，详细内容按需点击查看，提升用户体验。
    - 多用于常见问题（FAQ）、补充说明、参考答案等版块。
