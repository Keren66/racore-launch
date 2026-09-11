# Racore 产品发布中心 · Product Launch Hub

Racore 的新产品 / 新能力发布页（中英双语），静态站点，无构建步骤。

- `index.html` — 发布中心：Hero + 各产品发布区块（RacoreClaw / 融合 CDN 平台 / Racore CDN CLI / Racoder）+ 关于 + CTA + 页脚
- `changelog.html` — 更新日志（DeepSeek 风格倒序条目）
- `data.js` — **唯一数据源**，两页共用：`UPDATES` 数组 + `latestRelease()`
- `assets/` — 页面用到的产品截图

## 新增一次发布

1. 在 `data.js` 的 `UPDATES` 数组**头部**加一个对象（`date / type / product / title{zh,en} / body{zh,en} / bullets / link`）。
   首页 Hero 控制台、眉标日期、更新日志的 meta 与条目都会自动跟着变。
2. 在 `index.html` 里把新的 `#featured` 区块插到 Hero 之后，旧区块改成自己的 id 并把 kicker 降级为“近期发布 / 更早发布”。
3. 新文案的中英 key 要**同时**加进 `index.html` 和 `changelog.html` 两个 `I18N` 字典的 zh / en 两侧。

## 约定

- 一屏只允许一个自动播放演示（Racoder IDE 打字动画）；其余交互一律点击驱动。
- 对外联系邮箱统一 `keren.zhang@verycloud.cn`。
- 区域入口标签 `GCR Login` / `Global Login` 固定英文，不参与翻译。
- 内部测试材料（真实域名 / 邮箱 / 流量数字）一律脱敏后再上图。
