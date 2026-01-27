# 列表（list）

---

!!! info "列表概述"
    Markdown 列表用于**组织结构化信息**，支持有序、无序与嵌套形式，常见于说明文档、步骤指引和任务清单。

---

<h2>有序列表</h2>

=== "Markdown"
    ```markdown
    1. 第一项
    2. 第二项
    3. 第三项
    4. 第四项
    ```

=== "效果"
    1. 第一项
    2. 第二项
    3. 第三项
    4. 第四项

---

<h2>无序列表</h2>

=== "Markdown"
    ```markdown
    - 第一项
    - 第二项
    - 第三项
    - 第四项
    ```

=== "效果"
    - 第一项
    - 第二项
    - 第三项
    - 第四项

---

<h2>嵌套列表</h2>

=== "Markdown"
    ```markdown
    1. 第一项
    2. 第二项
    3. 第三项
        - 子项 A
        - 子项 B
    4. 第四项
    ```

=== "效果"
    1. 第一项
    2. 第二项
    3. 第三项
        - 子项 A
        - 子项 B
    4. 第四项

---

<h2>列表中插入段落</h2>

=== "Markdown"
    ```markdown
    - 第一项
    - 第二项

        这是第二项下的说明段落。
    - 第三项
    ```

=== "效果"
    - 第一项
    - 第二项

        这是第二项下的说明段落。
    - 第三项

---

<h2>列表中插入引用块</h2>

=== "Markdown"
    ```markdown
    - 第一项
    - 第二项

        > 这是列表中的引用内容
    - 第三项
    ```

=== "效果"
    - 第一项
    - 第二项

        > 这是列表中的引用内容
    - 第三项

---

<h2>列表中插入代码块</h2>

=== "Markdown"
    ```markdown
    1. 步骤一
    2. 步骤二

        ```python
        print("Hello")
        ```
    3. 步骤三
    ```

=== "效果"
    1. 步骤一
    2. 步骤二

        ```python
        print("Hello")
        ```
    3. 步骤三

---

<h2>列表中插入图片</h2>

=== "Markdown"
    ```markdown
    - 项目一
    - 项目二

        <img src="../../../assets/images/MkDocs_List_1.png" width="100">
    - 项目三
    ```

=== "效果"
    - 项目一
    - 项目二

        <img src="../../../assets/images/MkDocs_List_1.png" width="100">
    - 项目三

---

<h2>列表最佳实践</h2>

!!! tip
    - 有序列表建议统一使用 `1. 2. 3.` 的写法（自动编号）
    - 无序列表同一层级只使用一种符号（`-` 或 `*`）
    - 嵌套层级建议不超过 3 层
    - 在列表中插入段落、引用、代码、图片时，需缩进 **4 个空格**
    - 不同 Markdown 渲染器存在差异，务必预览效果

---

## 表格（Tables）

---

!!! info "定位说明"
    本节说明 **Markdown 表格语法**。  
    表格 **不是最早期 Markdown 的原生语法**，而是如今几乎所有主流解析器都支持的 **扩展语法（Extended Syntax）**。

---

<h2>表格语法的性质</h2>

!!! note "是否原生？"
    - ❌ **严格意义上不是 Markdown Core 原生语法**
    - ✅ 属于 **CommonMark / GitHub Flavored Markdown / Python-Markdown 等的通用扩展**
    - ✅ MkDocs / MkDocs Material **默认启用并支持**

> 实际使用中，可以**当作事实标准语法放心使用**。

---

<h2>表格的基本结构</h2>

- 使用 `|` 分隔列
- 使用一行 `---` 定义表头分隔
- 至少需要 **表头行 + 分隔行**

=== "Markdown"
    ```markdown
    | 姓名 | 分数 |
    |------|------|
    | 张三 | 90   |
    | 李四 | 85   |
    ```

=== "效果"
    | 姓名 | 分数 |
    |------|------|
    | 张三 | 90   |
    | 李四 | 85   |

!!! tip
    - 表格最左/最右的 `|` **可以省略**，但推荐保留
    - `|` 是否对齐 **不影响渲染，仅影响源码可读性**

---

<h2>列对齐方式</h2>

=== "Markdown"
    ```markdown
    | 左对齐 | 居中 | 右对齐 |
    |:------ |:---:| -----:|
    | left   | mid | right |
    ```

=== "效果"
    | 左对齐 | 居中 | 右对齐 |
    |:------ |:---:| -----:|
    | left   | mid | right |

!!! info "对齐规则"
    - `:---` ：左对齐
    - `:---:`：居中
    - `---:` ：右对齐

---

<h2>在表格中显示竖线字符</h2>

!!! warning "常见踩坑"
    在表格单元格中直接写 `|`，会被解析为列分隔符。

=== "推荐写法"
    ```markdown
    | 示例 | 内容 |
    |------|------|
    | `a \| b` | a \| b |
    ```

=== "效果"
    | 示例 | 内容 |
    |------|------|
    | `a \| b` | a \| b |

---

<h2>与 Shell / 编程中的“管道”概念区分</h2>

!!! note
    - **Markdown 表格**：`|` → 列分隔符（语法用途）
    - **Shell / 命令行**：`|` → 管道（数据流）
    - **文档中的 Shell 示例**：仅作展示，不会执行

=== "Shell 示例（展示用）"
    ```sh
    ps aux | grep python
    ```

---

<h2>表格使用总结</h2>

!!! summary
    - 表格属于 **Markdown 扩展语法，但已成为事实标准**
    - MkDocs / Material 可直接使用，无需额外配置
    - 表格中需要展示 `|` 时，用 **代码包裹或 `\|` 转义**
    - 不要将 Shell 的“管道”含义误认为 Markdown 语法本身

---

**参考资料**

- [Markdown Guide – Tables](https://www.markdownguide.org/extended-syntax/#tables)
- [CommonMark 规范](https://commonmark.org/)
- [MkDocs Material – Data Tables](https://squidfunk.github.io/mkdocs-material/reference/data-tables/)
