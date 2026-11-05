# Racore 产品发布中心 · Product Launch Hub

Racore 新产品 / 新能力发布页（中英双语），纯静态站点，无构建步骤，直接由 GitHub Pages 托管。

- 线上地址：<https://launch.racorecloud.com/>（`CNAME` → `launch.racorecloud.com`）
- 入口页：`index.html` ｜ 更新日志：`changelog.html`

## 当前版本

- **2026-11-05（r2）**：首屏改用整幅 `assets/banner-unified-v2.webp`（无损 WebP，2172×724）背景并预加载；
  移除废弃的 `assets/launch-prototype/` 首屏原型页与 `banner-unified-v2.png`、`banner-balance.before-redesign.css`。
- **2026-11-05**：采用徐超林交付的新版 UI（地球首屏 + 玻璃卡片 + 字号重整版），整站重构为「HTML + 分层 CSS/JS 模块」结构。
  旧版（2026-10-23，单文件内联 CSS/JS）保留在 git 历史与标签 `baseline-2026-10-23` 中。

## 目录结构

```
index.html                  首页（首屏地球 + 产品区块 + 关于 + CTA + 页脚）
changelog.html              更新日志
data.js                     唯一数据源：UPDATES 数组 + latestRelease()
CNAME                       GitHub Pages 自定义域名
assets/
  racore-logo.webp          品牌字标
  singapore-routes.svg      首屏路由/地球视效
  banner-unified-v2.webp    首屏整幅背景（蓝调大气 + 地球 + 平台，2172×724，`<head>` 内已预加载）
  racore-fusioncdn-whitepaper-v1.1.pdf   融合 CDN 白皮书（公示版）
  fonts/inter-400..700.woff2            本地字体（离线可用）
  mcp-json-import.html      MCP JSON 导入截图页（内嵌展示用）
  archive-alignment.css/js  旧区块对齐补丁
*.css / *.js                按主题拆分的样式与脚本，由 index.html / changelog.html 按顺序加载
```

样式加载顺序即层叠顺序，修改时请勿随意调整 `index.html` 末尾 `<link>` 的先后；`typography-refinement.css`、
`feedback-consistency.css`、`hero-button-states.css`、`singapore-routes.css` 为最后的覆盖层。

## 新增一次发布

1. 在 `data.js` 的 `UPDATES` 数组**头部**加一个对象（`date / type / product / title{zh,en} / body{zh,en} / bullets / link`）。
   首页首屏状态卡、眉标日期、更新日志条目都会自动跟随。
2. 产品区块在 `index.html`（`#featured / #fusioncdn / #cdncli / #billing / #claw / #racoder`）；
   新产品的文案中英 key 需同时加入页面内 `I18N` 字典的 zh / en 两侧。
3. 只做版本发布（非新产品）时，仅更新 `data.js` 与更新日志，不新增首页区块。

## 已知待接入项

- 反馈表单 `product-feedback.js` 调用 `POST /api/feedback`（JSON：`product / type / message / email / subject / body`）。
  GitHub Pages 无后端，**正式域名下提交会提示失败**；本地 localhost 预览为模拟成功。
  上线收发邮件需另接后端或 Worker，并固定收件人为 `keren.zhang@verycloud.cn`（收件人不得由前端指定）。

## 约定

- 对外联系邮箱统一 `keren.zhang@verycloud.cn`，不使用个人邮箱。
- 内部测试材料（真实域名 / 邮箱 / 流量数字）一律脱敏后再上图，示例数据标注「示例数据」。
- 区域入口标签 `GCR Login` / `Global Login` 固定英文，不参与翻译。
- 一屏只允许一个自动播放演示，其余交互点击驱动。

## 部署

推送 `main` 即由 GitHub Pages（`build_type=legacy`，分支 `main`，路径 `/`）自动构建。
发布记录见 `git tag`：`baseline-2026-10-23`（旧版单文件站）、`v2026-11-05-ui`（本版）。
