# 链接（Links） {#links}

!!! info "标记语法（原生语法）"
    **链接 link**  
    使用方括号 `[]` 包住链接文字，紧跟圆括号 `()` 写 URL。

    基本语法：  
    `[链接文字](https://example.com)`

=== "code"
    ```
    我最常用的搜索引擎是 [Google](https://google.com)。
    ```
=== "view"
    我最常用的搜索引擎是 [Google](https://google.com)。

---

<h2>添加标题（Title）</h2>

!!! info "可选参数"
    可以为链接添加 **title**，鼠标悬停时会显示提示文字。  
    title 写在 URL 后，用引号包裹。

=== "code"
    ```
    [Duck Duck Go](https://duckduckgo.com "最注重隐私保护的搜索引擎")
    ```
=== "view"
    [Duck Duck Go](https://duckduckgo.com "最注重隐私保护的搜索引擎")

---

<h2>URL 与邮箱的快速链接写法</h2>

!!! info "快速写法"
    使用尖括号 `< >`，可以直接把 URL 或邮箱地址转为链接。

=== "code"
    ```
    <https://www.google.com>
    <fake@email.com>
    ```
=== "view"
    <https://www.google.com>  
    <fake@email.com>

---

<h2>链接的格式化（强调 / 行内代码）</h2>

!!! info "组合用法"
    链接可以和 **强调**、**行内代码** 一起使用：

    * `**`：加粗链接
    * `*`：斜体链接
    * `` ` ` `：将链接文字显示为行内代码

=== "code"
    ```
    我常用 **[Googel](https://www.google.com)**。
    这是 *[Markdown Guide](https://www.markdownguide.org/)*。
    查看 [`链接`](#Links) 章节。
    ```
=== "view"
    我常用 **[Googel](https://www.google.com)**。  
    这是 *[Markdown Guide](https://www.markdownguide.org)*。  
    查看 [`链接`](#links) 章节。

---

<h2>引用式链接（Reference-style Links）</h2>

!!! info "适用场景"
    当 URL 很长、会影响正文可读性时，推荐使用 **引用式链接**。  
    写法分为 **两部分**：

    1. 正文中的链接文字
    2. 文档其他位置定义的链接地址

---

<h3>第一部分：正文中的链接</h3>

!!! note "写法说明"
    使用两组方括号：

    * 第一组：显示的链接文字
    * 第二组：链接标签（大小写不敏感）

=== "code"
    ```
    [hobbit-hole][1]
    [hobbit-hole] [1]
    ```

---

<h3>第二部分：链接定义</h3>

!!! note "写法说明"
    链接定义包含以下内容：

    1. 标签（`[1]:`）
    2. URL（可选使用 `< >`）
    3. 可选的 title（引号 / 单引号 / 圆括号）

=== "code"
    ```
    [1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle
    [1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle "Hobbit lifestyles"
    [1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> (Hobbit lifestyles)
    ```

⚠️ 链接定义可以放在文档 **任意位置**（段落后或文档末尾都可以）

---

<h3>示例：组合使用</h3>

=== "code"
    ```
    我常用的搜索引擎是 [Google][1]。

    [1]: <https://www.google.com> "Google 搜索引擎"
    ```
=== "view"
    我常用的搜索引擎是 [Google][1]。

    [1]: <https://www.google.com> "Google 搜索引擎"

---

<h2>链接最佳实践（Best Practices）</h2>

!!! warning "兼容性注意事项"
    不同 Markdown 解析器对 URL 的容错程度不同，以下写法 **强烈推荐**。

---

<h3>URL 中包含空格</h3>

!!! info "推荐写法"
    使用 `%20` 代替空格，或直接使用 HTML `<a>` 标签。

=== "code"
    ```
    [link](https://www.example.com/my%20great%20page)
    <a href="https://www.example.com/my great page">link</a>
    ```

❌ 不推荐（会破坏 Markdown 解析）：

```md
[link](https://www.example.com/my great page)
```

<h3>URL 中包含括号</h3>

!!! warning "常见踩坑"
    URL 中的 `(` `)` 可能导致解析失败。

    * `(` → `%28`
    * `)` → `%29`

=== "code"
    ```
    [a novel](https://en.wikipedia.org/wiki/The_Milagro_Beanfield_War_%28novel%29)
    <a href="https://en.wikipedia.org/wiki/The_Milagro_Beanfield_War_(novel)">a novel</a>
    ```

❌ 不推荐（会破坏 Markdown 解析）：

```md
[link](https://en.wikipedia.org/wiki/The_Milagro_Beanfield_War_(novel))
```

---

<h2>内部跳转链接注意事项（中文锚点）</h2>

!!! warning "不要依赖中文锚点"
    在 MkDocs 中，**不建议使用中文标题作为内部跳转锚点**，例如：

    ```
    [链接](#链接)
    ```

    这种写法 **在不同主题、插件或配置下可能失效**。

---

<h2>为什么中文锚点不稳定？</h2>

!!! info "原因说明"
    MkDocs 会在构建时对标题自动生成 `id`（slug），规则大致包括：

    * 转为小写
    * 去除或替换特殊字符
    * 中英文混合时，**最终生成的 id 不可预测**
    * 使用 HTML 标题（`<h2>`）时，**不会自动生成 id**

    例如下面这个标题：

    ```
    # 链接 Links
    ```

    实际生成的锚点 **通常是**：

    ```
    #links
    ```

    而不是：

    ```
    #链接
    ```

---

---

!!! summary "使用建议总结"
    * **普通链接**：正文中最常用
    * **Title**：用于补充说明
    * **引用式链接**：URL 很长时使用
    * **编码 URL**：提升跨解析器兼容性
