# 深大 OPC 社区官网

深大 OPC 社区官网是一个纯静态站点，面向 Vibe Coding、AI 应用与真实项目落地的校园科创社区。

当前 slogan：

```text
让你的每一个想法，都值得被看见
```

## 文件结构

```text
index.html    页面结构与主要文案
about.html    可索引的社区实体与定位页面
projects.html 可索引的项目与活动档案
articles/     可索引的 OPC Lab Notes 文章页
styles.css    视觉样式与响应式布局
script.js     看板数据、弹窗、交互与动画
LOGO.jpg      官网 Logo 与展示图片
docs/         部署和交接文档
robots.txt    爬虫规则与 Sitemap 声明
sitemap.xml   公开 canonical URL 清单
feed.xml      文章 RSS 订阅
llms.txt      AI 工具可选的站点导航补充
404.html      Cloudflare Pages 真实 404 页面
```

## 本地预览

这是无构建步骤的静态网站，直接用浏览器打开 `index.html` 即可预览。

也可以用任意静态服务器预览根目录，例如 VS Code Live Server。

## 日常修改流程

1. 修改 `index.html`、`styles.css` 或 `script.js`
2. 本地打开 `index.html` 检查页面
3. 提交并推送到 GitHub

```powershell
git add .
git commit -m "Update website"
git push
```

如果 Cloudflare Pages 已绑定 GitHub 仓库和 `main` 分支，`git push` 后会自动重新部署。

## 部署

生产部署使用 Cloudflare Pages。配置见 [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)。

注意：这个项目应该部署为 **Cloudflare Pages**，访问地址应为 `*.pages.dev` 或自定义域名，不应部署为 `*.workers.dev`。

SEO / GEO 的页面、实体、Sitemap、站长平台提交与持续运营规范见 [docs/SEO_GEO.md](docs/SEO_GEO.md)。Cloudflare Pages 会把 `.html` 地址重定向到无扩展名地址，因此公开链接和 canonical 使用 `/about`、`/projects`、`/articles/vibe-coding` 这类 URL。
