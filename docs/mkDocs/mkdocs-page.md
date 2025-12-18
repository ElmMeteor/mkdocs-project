# 新建页面

<h2>基础结构说明</h2>
```
test/
├─ mkdocs.yml      # 配置文件
└─ docs/
   └─ index.md     # 默认首页
```

* `mkdocs.yml`：此文件内可以配置网站信息、导航栏等
* `docs/`：此文件夹内主要放置.md文档内容
* `index.md`：首页内容

<h2>追加方法</h2>

* 追加.md文件  
=== "控制台"
    控制台输入`touch intro.md`追加文件  
=== "vscode"
    选中`docs/`文件夹，单击<img class="inline-icon" src="/mkDocs/assets/images/MkDocs_Page_1.png" alt="文件追加按钮" />(文件追加按钮)，输入`intro.md`

* 打开`mkdocs.yml`，找到 `nav:` 部分，添加新页面：
```
site_name: My Docs
nav:
  - 首页: index.md
  - 介绍: intro.md
```