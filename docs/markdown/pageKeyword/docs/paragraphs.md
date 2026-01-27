# 段落与换行（Paragraphs & Line Breaks）

---

!!! info "什么是段落？"
    Markdown 中，**段落**是最基本的文本单位。只需用**空行**分隔一行或多行文本即可自动成为段落。

| Markdown 示例 | HTML 渲染 | 实际效果 |
|---|---|---|
| I really like using Markdown.  <br><br>I think I'll use it to format all of my documents from now on. | `<p>I really like using Markdown.</p>\n<p>I think I'll use it to format all of my documents from now on.</p>` | I really like using Markdown.<br><br>I think I'll use it to format all of my documents from now on. |

---

!!! tip "段落书写最佳实践 "
    - 除非在列表中，**不要用空格或 Tab 缩进段落**。
    - 段落应左对齐。

    === "✅ 推荐 | Do this"
        ```markdown
        Don't put tabs or spaces in front of your paragraphs.

        Keep lines left-aligned like this.
        ```
    === "❌ 不推荐 | Don't do this"
        ```markdown
            This can result in unexpected formatting problems.

          Don't add tabs or spaces in front of paragraphs.
        ```
    > 推荐左对齐段落，不要在段落前加空格或 Tab。

---

<h2>换行（Line Breaks）</h2>

!!! info "如何换行 "
    要在 Markdown 中创建换行（渲染为 `<br>`），请在一行结尾加**两个或更多空格**，然后回车。

| Markdown 示例 | HTML 渲染 | 实际效果 |
|---|---|---|
| `This is the first line.  <br>And this is the second line.` | `<p>This is the first line.<br>And this is the second line.</p>` | This is the first line.  <br>And this is the second line. |
| `This is the first line.  And this is the second line. `| `<p>This is the first line.   And this is the second line.</p>` | This is the first line.  <br>And this is the second line. |

---

!!! tip "换行最佳实践"
    - 用两个或更多空格（trailing whitespace）换行，几乎所有 Markdown 应用都支持，但**不易察觉**，容易误删。
    - 推荐在支持 HTML 的 Markdown 应用中，直接用 `<br>` 标签换行。
    - 为最大兼容性，建议只用**行尾空格**或 `<br>` 标签。

??? question "兼容性与其他写法"
    - CommonMark 及部分轻量级标记语言允许用反斜杠（`\\`）结尾换行，但**并非所有 Markdown 应用支持**，兼容性较差。
    - 还有极少数标记语言直接回车就换行，但这不是标准 Markdown 行为。

!!! warning "注意"
    - 行尾空格在编辑器中难以察觉，容易被自动删除，导致换行失效。
    - 不同 Markdown 解析器对换行的支持略有差异，建议预览效果。

---
