# 自动发布网页

在维护 MkDocs 文档站点时，如果每次更新都需要手动构建和发布，既繁琐又容易漏操作。借助 GitHub Actions，你可以实现**自动构建、自动发布到 GitHub Pages**，让网页始终保持最新，无需人为干预。

本文将分步介绍如何在你的项目中配置自动发布流程，并提供模板和注意事项。

---

## 方案简介

**核心思路**  
每次推送（push）到主分支（如 main）时，由 GitHub Actions 云端服务器自动拉取代码、构建文档、部署到 GitHub Pages 分支。极大简化手动流程，适合个人及团队协作。

---

## 步骤一：准备 GitHub 仓库

确保你的项目托管在 GitHub（建议是 Public 仓库或开通 GitHub Pages 接口权限）。

---

## 步骤二：配置自动发布工作流

1. **创建工作流配置文件**

    在项目根目录下新建文件夹和文件：
    ```bash
    mkdir -p .github/workflows
    nano .github/workflows/gh-pages.yml
    ```

2. **粘贴以下内容到 `gh-pages.yml`**

    ```yaml
    name: Deploy MkDocs to GitHub Pages

    on:
      push:
        branches:
          - main    # 根据主分支实际名称调整，如用 master 请改成 master

    jobs:
      deploy:
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v4      # 拉取项目代码

          - uses: actions/setup-python@v4  # 配置 Python 环境
            with:
              python-version: 3.11

          - run: |
              pip install mkdocs mkdocs-material   # 安装 MkDocs 及所需插件

          - run: mkdocs gh-deploy --force         # 自动构建并发布到 gh-pages 分支
    ```

---

## 步骤三：赋予 Actions 写权限

1. 打开你的仓库主页，点击 Settings  
2. 左侧选择 “Actions” → “General”  
3. 下拉找到**Workflow permissions**  
4. 勾选 `Read and write permissions`（默认只有读权限，必须切换为可写），保存设置

![设置权限图示](https://docs.github.com/assets/images/help/repository/actions-default-permissions.png)

---

## 步骤四：推送并自动发布

- 正常开发，直接 `git push` 到 main 分支即可
- 稍等片刻，GitHub Actions 会自动帮你构建和部署网页
- 可以在 GitHub 仓库的 “Actions” 页面实时查看构建和发布日志
- 发布后的网页，见仓库的“Pages”板块，通常是  
  `https://<你的用户名>.github.io/<仓库名>/`

---

## 常见问题与建议

- **分支名称不同**：如主分支不是 `main`，请修改 workflow 对应分支参数
- **依赖插件**：如有用到 mkdocs-material 以外插件，记得增加 pip install 命令
- **首推自动部署**，减少人为误操作，方便团队协作和追踪
- **隐私安全**：如为私有仓库或自定义 Token，可查阅 GitHub 官方文档调整安全策略

---

## 总结

通过上述设置，你再也不需要手动打包发布文档——**只需放心更新、提交、推送，所有部署自动完成！**  
自动化将为你的 Docs 管理提供极大便利和安全！

---