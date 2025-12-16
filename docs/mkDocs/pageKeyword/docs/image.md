# 图片

 <h2>图片链接</h2>
!!! info "链接语法(原生语法)"
    ``` yaml
    [alt text](image path)
    ```  

    * alt text：图片无法显示时的替代文本  
    * image path：图片路径  
    
=== "code"
    ``` yaml
    [标题图片](../../../mkDocs/img/MkDocs_image_1.png)
    ```
=== "view"
    [标题图片](../../../mkDocs/img/MkDocs_image_1.png)

<hr style="border-top: 2px solid #e40e0eff; margin: 24px 0;">

<h2>图片显示</h2>
!!! info "图片语法(原生语法)"
    图片语法本质上是“链接语法 + ! 前缀”  
    ``` yaml
    ![alt text](image path)` 
    ```

    * ! 为图片说明标记，Image indicator / Image marker（图片标记）
    * alt text：图片无法显示时的替代文本  
    * image path：图片路径  

=== "code"
    ``` yaml
    ![标题图片](../../../mkDocs/img/MkDocs_image_1.png)
    ```
=== "view"
    ![标题图片](../../../mkDocs/img/MkDocs_image_1.png)

<hr style="border-top: 2px solid #e40e0eff; margin: 24px 0;">
    
<h2>内联图片</h2>

在同一行使用`文字 ＋ 图片`的这种格式时，需要设置样式来达到控制大小，对齐等需求

=== "HTML标签语法"
    !!! info "语法"        
        ``` html
        <img src="image.png" alt="説明" width="50" height="50" class="example"/>` 
        ```

        * `<img>`是 HTML 中的图像标签，用于插入图片
        * src：图片路径
        * alt：替代文本（图片无法显示时显示）
        * width / height：图片属性
        * class：样式名称

        ※图片属性和样式可根据需要控制的属性数量自由选择

        === "code"
            ``` html
            <img src="../../../mkDocs/img/MkDocs_image_1.png" alt="说明" width="10" height="10" class="inline-icon"/>
            ```

            ``` yaml
            .inline-icon {
                height: 30px;
                vertical-align: middle;
                border-radius: 10px;
            }
            ```
        === "view"
            <img src="/mkDocs/img/MkDocs_image_1.png" alt="说明" width="10" height="10" class="inline-icon"/>  
            **※当同时在`<img>`标签上使用`width / height`属性 和 CSS 类来设置宽高时，CSS 通常会覆盖 HTML 属性**  
            **　这里css设置的height覆盖了标签中的height。**
=== "Markdown原生语法"
    !!! info "语法"
        ``` yaml
        ![説明](image.png){.example}
        ```

        * .example：样式名称

        === "code"
            ``` yaml
            ![説明](../../../mkDocs/img/MkDocs_image_1.png){.inline-icon}
            ```

            ``` yaml
            .inline-icon {
                height: 30px;
                vertical-align: middle;
                border-radius: 10px;
            }
            ```
        === "view"
            ![説明](../../../mkDocs/img/MkDocs_image_1.png){.inline-icon}