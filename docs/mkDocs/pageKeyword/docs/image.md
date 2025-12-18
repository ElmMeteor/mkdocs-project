# 图片

## 图片链接

!!! info "链接语法（原生语法）"
    ```markdown
    [alt text](image path)
    ```
    - `alt text`：图片无法显示时的替代文本
    - `image path`：图片路径

=== "code"
    ```markdown
    [标题图片](/mkDocs/assets/images/MkDocs_image_1.png)
    ```
=== "view"
    [标题图片](/mkDocs/assets/images/MkDocs_image_1.png)

<hr style="border-top: 2px solid #e40e0eff; margin: 24px 0;">

## 图片显示

!!! info "图片语法（原生语法）"
    图片语法本质上是“链接语法 + ! 前缀”
    ```markdown
    ![alt text](image path)
    ```
    - `!` 作为图片标记（Image indicator / Image marker）
    - `alt text`：图片无法显示时的替代文本
    - `image path`：图片路径

=== "code"
    ```markdown
    ![标题图片](/mkDocs/assets/images/MkDocs_image_1.png)
    ```
=== "view"
    ![标题图片](/mkDocs/assets/images/MkDocs_image_1.png)

<hr style="border-top: 2px solid #e40e0eff; margin: 24px 0;">

## 内联图片

在同一行需要实现 `文字 + 图片` 且可控大小、对齐等时，推荐用样式配合。

=== "HTML 标签语法"
    !!! info "语法"
        ```html
        <img src="image.png" alt="说明" width="50" height="50" class="example"/>
        ```
        - `<img>` 是 HTML 的图像标签
        - `src`：图片路径
        - `alt`：替代文本
        - `width` / `height`：图片属性（宽高）
        - `class`：样式名称

        **图片属性和样式可根据需要自由组合**

    === "code"
        ```html
        <img src="/mkDocs/assets/images/MkDocs_image_1.png" alt="说明" width="10" height="10" class="inline-icon"/>
        ```

        ```css
        .inline-icon {
            height: 30px;
            vertical-align: middle;
            border-radius: 10px;
        }
        ```
    === "view"
        <img src="/mkDocs/assets/images/MkDocs_image_1.png" alt="说明" width="10" height="10" class="inline-icon"/>
        <br>
        **※ 当同时在 `<img>` 标签上使用 `width`/`height` 属性和 CSS 类设置宽高时，CSS 通常会覆盖标签属性的值。这里 css 设置的 height 覆盖了标签内 height。**

=== "Markdown 扩展语法"
    !!! info "语法"
        ```markdown
        ![说明](image.png){.example}
        ```
        - `.example`：样式名称（需支持如 pymdownx superfences 插件）

    === "code"
        ```markdown
        ![说明](/mkDocs/assets/images/MkDocs_image_1.png){.inline-icon}
        ```
        ```css
        .inline-icon {
            height: 30px;
            vertical-align: middle;
            border-radius: 10px;
        }
        ```
    === "view"
        ![说明](/mkDocs/assets/images/MkDocs_image_1.png){.inline-icon}

---

<h2>说明</h2>

- 标准 Markdown 支持最基础的图片和链接语法，类名扩展如 `{.class}` 需文档引擎支持（例如 MkDocs [pymdown-extensions]）。
- HTML 语法更加灵活，适用于对样式和行为有更高要求的场景。
