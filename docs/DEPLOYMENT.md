# Deployment Guide

This site is a static HTML/CSS/JS website and does not need a build tool.

## GitHub Flow

Use GitHub as the source of truth. After local edits:

```powershell
cd "X:\vibe coding\13 深大OPC官网"
git add .
git commit -m "Update website"
git push
```

Cloudflare Pages will automatically deploy pushed changes when the project is connected to the GitHub repository and the production branch is `main`.

## Cloudflare Pages Setup

In Cloudflare:

```text
Workers & Pages
-> Create application
-> Pages
-> Import an existing Git repository
```

Select the GitHub repository that contains this site.

Use these build settings:

```text
Production branch: main
Framework preset: None
Build command: exit 0
Build output directory: /
Root directory: leave blank
Environment variables: none
```

If the Cloudflare UI does not accept `/` as the output directory, use:

```text
Build output directory: .
```

The output directory must point to the directory containing `index.html`.

## Correct URL Type

A Cloudflare Pages deployment should create a public URL like:

```text
https://<project-name>.pages.dev
```

Do not use a `*.workers.dev` URL for this static website. A `workers.dev` URL means the project was created as a Worker, not as a Pages site.

## SEO and GEO Files

The deployed repository root must include these public files:

```text
robots.txt
sitemap.xml
manifest.webmanifest
feed.xml
llms.txt
39693593aa374e22914250b3fd28dee3.txt
404.html
```

The canonical origin is currently `https://szu-opc.pages.dev/`. If a custom domain is introduced, update every canonical and absolute URL before deployment, then permanently redirect the Pages hostname to the new primary origin.

The Sitemap currently expects these HTML pages to exist:

```text
/
/about
/projects
/articles/vibe-coding
/articles/ai-product-7-days
/articles/prompt-engineering
```

Do not deploy a Sitemap that lists missing, redirected, non-canonical, or `noindex` pages. Maintenance details are in [SEO_GEO.md](SEO_GEO.md).

After deployment, verify each support file, the IndexNow key file, and every Sitemap URL returns `200`. Also check the response headers and HTML do not include `X-Robots-Tag: noindex` or a meta `noindex` directive. Request one random nonexistent path and confirm it returns a real `404` response; without the root `404.html`, Cloudflare Pages may treat the site as an SPA and return the homepage with `200` for unknown paths.

When canonical pages are added, updated, or deleted, submit only those changed URLs to IndexNow after the deployment is live. The current endpoint, key location, response meanings, and maintenance rules are documented in [SEO_GEO.md](SEO_GEO.md).

## Common Issues

### Public site shows a TLS or cipher mismatch error

Confirm the URL is a Pages URL:

```text
*.pages.dev
```

If the URL is:

```text
*.workers.dev
```

return to `Workers & Pages` and create a new Pages project from the GitHub repository.

### Public site shows 404

Check that:

- `index.html` exists at the repository root.
- Build output directory is `/` or `.`.
- Production branch is `main`.

### Public site did not update after push

Check:

- Cloudflare Pages deployment status is successful.
- The pushed commit is on `main`.
- Browser cache is refreshed with `Ctrl + F5`.

## References

- Cloudflare Pages Static HTML guide: https://developers.cloudflare.com/pages/framework-guides/deploy-anything/
- Cloudflare Pages build configuration: https://developers.cloudflare.com/pages/configuration/build-configuration/
