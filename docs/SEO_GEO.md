# SEO / GEO 运维指南

本指南用于维护深大 OPC 社区静态站点的搜索可发现性、实体一致性和 AI 引用质量。当前 canonical 暂定为：

```text
https://szu-opc.pages.dev/
```

如果以后绑定自有域名，应统一修改 HTML canonical、Open Graph URL、结构化数据 URL、`robots.txt`、`sitemap.xml`、`feed.xml`、`llms.txt` 和本文中的地址，并把旧域名永久重定向到新域名。

## URL 清单

以下 URL 是当前站点地图的公开页面：

```text
/
/about
/projects
/articles/what-is-opc
/articles/vibe-coding
/articles/ai-product-7-days
/articles/prompt-engineering
```

只有实际存在、返回 `200`、允许索引且使用自身 canonical 的页面才能留在 `sitemap.xml`。Hash 地址如 `/#about` 不是独立索引页面，不应写入 Sitemap。

Cloudflare Pages 会把 `.html` 地址重定向到无扩展名地址，因此公开 canonical、Sitemap、RSS 和站内链接统一使用无扩展名 URL；仓库中的物理文件仍可保留 `.html`。根目录必须保留 `404.html`，否则 Pages 会把未知路径当作单页应用路由并返回首页 `200`，形成 soft 404。

## 根目录支持文件

- `robots.txt`：允许公开页面抓取并声明 Sitemap 地址。它不是收录保证。
- `sitemap.xml`：列出 canonical 页面。仅在页面内容真实更新时更新 `lastmod`。
- `manifest.webmanifest`：浏览器安装信息，不是直接排名因素。
- `feed.xml`：RSS 2.0 文章订阅。新增、改名或删除文章时同步更新。
- `llms.txt`：向支持该约定的 AI 工具提供站点导航和身份说明；该文件仍属实验性补充，不能替代可抓取正文、结构化数据或权威外链。
- `39693593aa374e22914250b3fd28dee3.txt`：IndexNow 所有权验证 key。文件名和正文必须保持一致；更换 key 时同步更新提交请求。

## 每个 HTML 页面的 `<head>`

每页至少包含：

1. 唯一且自然的 `<title>`；
2. 唯一的 meta description；
3. 指向自身公开 URL 的 canonical；
4. Open Graph 的 `type`、`site_name`、`title`、`description`、`url`、`image` 和 `locale`；
5. Twitter Card；
6. Manifest、favicon 和 RSS alternate 链接；
7. 与可见正文一致的 JSON-LD。

站内相对资源继续使用相对路径。Canonical、Open Graph、RSS、Sitemap 和结构化数据中的公开 URL 使用绝对 HTTPS 地址。

不要添加 meta keywords，也不要为覆盖搜索词而重复堆砌“深大、深圳大学、OPC、社区”。

## 实体与名称规范

首页和关于页应自然建立以下名称映射：

- 常用名：深大 OPC 社区
- 检索别名：深圳大学 OPC 社区、深大 OPC
- 英文名：SZU OPC Community

建议用一句可直接理解的定义开头，例如“深大 OPC 社区（SZU OPC Community）是……”。必须同时明确 OPC 在本社区语境中的含义，避免与其他行业或“一人公司”等同名概念混淆。

不得仅凭名称声称本站是深圳大学官方机构。学校隶属、授权、主办、指导、合作、人员身份等信息，只有在存在可公开核实的依据时才能写入正文或结构化数据。

## 结构化数据

首页可使用 `Organization`、`WebSite` 和 `WebPage`。独立文章页可使用 `Article`，真实活动页可使用 `Event`。字段必须来自页面可见、可核实的信息。

至少保持以下字段一致：

- `name`、`alternateName`
- `url`、`mainEntityOfPage`
- `logo` 或 `image`
- `headline`、`description`
- 真实作者、发布日期和更新时间（仅在已知时填写）
- `sameAs`（仅填写真实官方账号或权威页面）

不要虚构创办人、负责人、地址、电话、发布日期、获奖信息或官方账号。没有真实站内搜索结果 URL 时，不添加 `SearchAction`。

## GEO 内容标准

为了让搜索引擎和 AI 系统可以准确摘要与引用：

- 重要概念先给简洁、完整的直接答案，再展开背景。
- 项目、活动和统计写明绝对日期，避免永久使用“今天、昨天、2 小时前”。
- 统计数字注明“截至 YYYY-MM-DD”和数据来源。
- 项目案例说明问题、参与方式、过程、结果与可验证材料。
- 文章注明作者或发布主体、发布日期、更新时间和参考来源；信息未知时留空，不猜测。
- 对外部事实链接到一手来源；引用第三方时准确标注来源。
- 过期活动更新为已结束或归档，不继续展示为进行中。
- 正文直接存在于 HTML 中；不要只放在点击后才由 JavaScript 注入的弹窗里。

FAQ 必须在页面上真实可见，结构化数据内容与可见答案一致。建议优先回答：社区是什么、OPC 的含义、与深圳大学的关系、谁可以加入、如何参与或合作、有哪些真实项目与活动。

## 内容与链接维护

- 每篇文章和每个重要项目使用稳定的独立 URL。
- 首页放摘要并用普通 `<a href>` 链接到详情页。
- 页面改名或迁移时设置永久重定向，不同时保留多个可索引副本。
- “查看更多”“联系我们”等链接必须到达真实内容或真实联系方式。
- 争取由深圳大学相关院系、活动主办页、合作方和真实媒体报道链接回 canonical；不得购买垃圾外链或伪造合作关系。
- 官方公众号、视频号或其他已核实渠道的名称、头像和链接保持一致，并可加入 `sameAs`。
- 官网 GitHub 仓库使用生产站点作为 `homepage`，并保持明确的社区描述与主题标签；官网页脚保留“GitHub 源码”链接，形成可核验的双向关联。代码仓库不是社区组织主页，不直接当作 Organization `sameAs`。
- 校内单位、合作方和媒体的引用口径、事实边界与外联模板见 [AUTHORITY_OUTREACH.md](AUTHORITY_OUTREACH.md)。外联材料只用于真实相关的报道，不得制造或交换无关链接。

## 发布与提交

每次发布前：

1. 确认 Sitemap 中每个页面都已存在。
2. 检查所有页面的 title、description、canonical 和 H1 唯一且一致。
3. 验证 XML 与 JSON 语法。
4. 检查页面桌面端和移动端显示。
5. 推送到 `main` 后等待 Cloudflare Pages 部署成功。
6. 在线确认 HTML 和支持文件均返回 `200`，且没有 `noindex` 或 `X-Robots-Tag: noindex`。

首次上线及 URL 变化后，将 Sitemap 提交到 Google Search Console、Bing Webmaster Tools 和百度搜索资源平台，并使用各平台的 URL 检查工具请求抓取。平台提交只能帮助发现，不能保证排名。

Google Search Console 使用首页 `google-site-verification` meta 验证 `https://szu-opc.pages.dev/` URL-prefix 资源。该 meta 必须长期保留；删除或替换前先在 Search Console 配置新的有效验证方式。

本站同时接入 IndexNow，用于在页面新增、更新或删除后通知 Bing 及其他参与该协议的搜索引擎。只提交本次真实发生变化的 canonical URL，不要定时重复提交未变化页面。当前配置为：

```text
host: szu-opc.pages.dev
key: 39693593aa374e22914250b3fd28dee3
keyLocation: https://szu-opc.pages.dev/39693593aa374e22914250b3fd28dee3.txt
endpoint: https://api.indexnow.org/indexnow
```

IndexNow 返回 `200` 仅代表搜索引擎收到 URL，返回 `202` 代表已收到且 key 仍在验证；两者都不等于已抓取、已收录或获得排名。发布后应先在线确认 key 文件返回 `200` 且正文完全匹配，再提交 URL。

## 本地语法检查

在仓库根目录运行：

```powershell
[xml](Get-Content -Raw -Encoding UTF8 .\sitemap.xml) | Out-Null
[xml](Get-Content -Raw -Encoding UTF8 .\feed.xml) | Out-Null
Get-Content -Raw -Encoding UTF8 .\manifest.webmanifest | ConvertFrom-Json | Out-Null
```

还应确认 `robots.txt` 与 `llms.txt` 为 UTF-8 纯文本，并检查 Sitemap、RSS 和 `llms.txt` 中列出的 URL 与实际页面完全一致。

## 监测

至少按月记录：

- 品牌词和相关长尾词的展示、点击、平均位置；
- 被索引页面数和抓取错误；
- 自然搜索与外部引用来源；
- 各文章和项目页的有效访问与转化；
- 过期活动、失效链接和陈旧统计。

优先衡量“深大 OPC 社区、深圳大学 OPC 社区、深大 OPC”等品牌查询是否能准确到达本站。泛词“深大”由深圳大学官方站点主导，不应把短期全平台第一作为可承诺结果。
