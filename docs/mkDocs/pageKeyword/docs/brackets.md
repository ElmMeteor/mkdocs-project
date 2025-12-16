# 方括号 `[]` 用法（Markdown 链接与扩展利器）

**方括号 `[]` 是 Markdown 语法中实现超链接、脚注、任务列表等高级语法的基础标记之一。熟练掌握 `[]`，能显著提升文档的交互性与专业度。**

---

!!! note "读法"
    - 英文：“square brackets” /ˈskwɛr ˌbrækɪts/
    - 日语：角括弧（かくかっこ）

---

!!! info "用途"
    - **定义超链接**（内联、参考两种格式）
    - **插入图片**（与 `!` 联合）
    - **自动编号脚注**（配合 `[^]`）
    - **任务清单**（带 `- [ ]`/`- [x]` 前缀）

---

<h2>基本语法速查</h2>

| 用法       | Markdown 原文                       | 结果                     |
|:-----------|:------------------------------------|:------------------------|
| 链接       | `[文本](URL)`                       | [文本](https://www.google.com) |
| 图片       | `![说明文本](图片URL)`               | ![example](https://github.githubassets.com/images/icons/emoji/unicode/1f604.png) |
| 脚注       | `[^说明]`/`[^1]: 内容`               | 插入带悬浮说明的脚注        |
| 任务清单   | `- [ ] 未做`<br>`- [x] 已做`         | 任务清单         |

---

=== "超链接"
    !!! example "内联链接"
        ```
        [google](https://www.google.com)
        ```
        效果：[google](https://www.google.com)

    !!! example "参考式链接"
        ```
        [MkDocs][mkdocs]
        ...
        [mkdocs]: https://www.mkdocs.org
        ```
        效果：[MkDocs][mkdocs]

=== "图片"
    !!! example "基本语法"
        ```
        ![Logo](https://github.githubassets.com/images/icons/emoji/unicode/1f44d.png)
        ```
        显示效果：  
        ![Logo](https://github.githubassets.com/images/icons/emoji/unicode/1f44d.png)

    !!! info "区别"
        - 图片链接比普通链接多了 `!` 前缀
        - 方括号中为图片说明（可读性+SEO）

=== "脚注"
    !!! example "插入方式"
        ```
        这里有个参考[^1]。

        [^1]: 这就是脚注内容
        ```
        效果：  
        这里有个参考[^1]。

        [^1]: 这就是脚注内容

    !!! tip "注意"
        - 需启用 footnotes 扩展,否则 [^1]: 语法被当作普通链接，渲染出来是普通锚点，点击跳到 404！

=== "任务清单"
    !!! example "用法"
        ```
        - [ ] 学会基本用法
        - [x] 熟悉进阶技巧
        ```
        效果：

        - [ ] 学会基本用法
        - [x] 熟悉进阶技巧

    !!! tip "注意"
        - 需启用 pymdownx.tasklist 扩展,否则[x]只会被当成普通字符

---

<h2>进阶用法与混合写法</h2>

=== "多链混合"
    !!! example
        ```
        * [GitHub](https://github.com)
        * [google][bd]
        [bd]: https://www.google.com
        ```
        效果：

        * [GitHub](https://github.com)
        * [google][bd]
        [bd]: https://www.google.com

=== "图片+超链接"
    !!! example
        ```
        [![Logo](https://github.githubassets.com/images/icons/emoji/unicode/1f44b.png)](https://github.com)
        ```
        效果：
        [![Logo](https://github.githubassets.com/images/icons/emoji/unicode/1f44b.png)](https://github.com)

=== "脚注进阶"
    !!! example "注脚使用说明"

        [查看脚注用法与分辨](footnote.md)

=== "引用式任务清单"
    !!! example
        ```
        - [ ] 配置链接
        - [x] 配置图片
        - [ ] 配置脚注
        ```
        效果：

        - [ ] 配置链接
        - [x] 配置图片
        - [ ] 配置脚注

---

<h2>注意点</h2>

??? warning "注意点"
    - 注意 `[描述](url)` 括号紧贴描述文本，`url` 不能有多余空格
    - 有些平台(如 Gitee)参考式脚注需启用额外扩展
    - 直接输出 `[` `]`，可用反斜杠如 `\[`、`\]`
    - 代码块/行内代码可避免被 Markdown 解析为链接

---
