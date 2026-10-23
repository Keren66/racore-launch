/* ============================================================
   Racore 发布数据源 —— index.html 与 changelog.html 共享
   未来产品更新：只需在 UPDATES 数组【头部】加一个对象
   ------------------------------------------------------------
   字段说明:
     date     "YYYY-MM" 或 "YYYY-MM-DD"，同时用作条目锚点 id
     type     "LAUNCH"(新产品发布) | "UPDATE"(能力更新) | "SOON"(预告)
     product  产品名（不翻译的保留英文）
     title    {zh, en}  条目标题
     body     {zh:[段落…], en:[段落…]}  支持简单 HTML（<code> <strong>）
     bullets  {zh:[…], en:[…]}  可选，要点列表
     link     {href, zh, en}  可选，"查看详情"链接
   页面联动: 首页 Hero 控制台 / 眉标日期 / 日志页 meta 自动读取最新的非 SOON 条目
   ============================================================ */
const UPDATES = [
  {
    date: "2026-10-23",
    type: "UPDATE",
    product: "Fusion CDN",
    title: { zh: "融合 CDN 1.1.2 版本发布：Cloudflare 渠道全面接入", en: "Fusion CDN 1.1.2: Cloudflare channel support, TLS 1.3 and a new logging stack" },
    body: {
      zh: [
        "<strong>融合 CDN 1.1.2</strong> 正式发布：新增 Cloudflare 渠道支持，创建域名时可指定回源协议（HTTP / HTTPS）与回源端口，HTTPS 支持 TLS 1.3；注册审核通过后通过站内信与邮件通知，日志架构全面换代。",
        "同时上线 5 项体验优化与 4 项问题修复：证书状态自动更新并识别即将过期/已过期，证书访问权限收紧，缓存规则支持批量设置，域名与证书列表页优化（导出可附带标签），平均流量命中率改为按实际流量加权。"
      ],
      en: [
        "<strong>Fusion CDN 1.1.2</strong> is out: full Cloudflare channel support, a configurable origin protocol (HTTP / HTTPS) and origin port at domain creation, TLS 1.3 over HTTPS, signup-review results delivered by in-app message and email, and a completely rebuilt logging architecture.",
        "Five experience improvements and four fixes ship with it: certificate status updates automatically with expiring/expired detection, certificate access control is tightened, cache rules can be set in bulk, the domain and certificate lists are cleaner (domain export can carry tags), and the average cache hit ratio is now weighted by real traffic."
      ]
    },
    bullets: {
      zh: [
        "新增：全面支持 Cloudflare 渠道，与 CloudFront 同台调度",
        "新增：创建域名时可指定回源协议（HTTP / HTTPS）与回源端口",
        "新增：HTTPS 支持 TLS 1.3",
        "新增：注册审核通过后，通过站内信与邮件通知",
        "新增：全面支持全新日志架构",
        "优化：证书状态自动更新，可识别即将过期/已过期，即将过期的证书仍可正常使用，创建域名时仅展示可用证书",
        "优化：加强证书访问权限控制，保障账户数据安全",
        "优化：缓存规则支持批量设置，设置不可修改的请求头/响应头时增加提示",
        "优化：域名、证书列表页优化，导出域名时支持附带标签",
        "优化：平均流量命中率改为按实际流量加权，更准确反映整体缓存效果",
        "修复：文件后缀包含 . 时缓存规则不生效",
        "修复：同一账号可创建同名标签",
        "修复：任务中心按日期筛选时无法查询结束日当天任务",
        "修复：内容包含特殊字符时显示异常或保存失败；工单联系电话改为选填并支持常见号码格式"
      ],
      en: [
        "New: full Cloudflare channel support, dispatched alongside CloudFront",
        "New: configurable origin protocol (HTTP / HTTPS) and origin port at domain creation",
        "New: TLS 1.3 support over HTTPS",
        "New: signup-review results delivered by in-app message and email",
        "New: the rebuilt logging architecture is fully supported",
        "Improved: certificate status updates automatically with expiring/expired detection — an expiring cert still serves, and only usable certs are offered at domain creation",
        "Improved: tighter certificate access control to protect account data",
        "Improved: cache rules can be set in bulk, with a hint when a header cannot be modified",
        "Improved: cleaner domain and certificate lists, and domain export can include tags",
        "Improved: the average cache hit ratio is weighted by real traffic for a truer picture of cache efficiency",
        "Fixed: cache rules failed to apply when a file extension contained a dot",
        "Fixed: the same account could create duplicate tag names",
        "Fixed: the task centre could not query tasks on the end date when filtering by date",
        "Fixed: content with special characters displayed incorrectly or failed to save; the ticket phone number is now optional and accepts common formats"
      ]
    },
    link: { href: "assets/racore-fusioncdn-whitepaper-v1.1.pdf", zh: "下载产品白皮书", en: "Download the whitepaper" }
  },
  {
    date: "2026-10-19",
    type: "LAUNCH",
    product: "Racore Billing",
    title: { zh: "账单系统：通用出账标准接口 v0.1 对外开放", en: "Billing System: the Universal Billing Standard API v0.1 is open" },
    body: {
      zh: [
        "<strong>账单系统</strong>本次对外开放<strong>通用出账标准接口 v0.1</strong>：客户同步、对象绑定、用量上传、折扣配置、账单查询与导出、归档推送、金额告警——整套出账能力收敛到一组 REST 接口，第三方平台按 <code>/api/v1/platform/{platformCode}</code> 接入即可跑完从用量到账单的全链路。",
        "同时上线 5 项体验优化：微软账单明细列表支持订阅 ID 查询、管理租户账单详情页新增归档标识、Usage 配置详情页返回逻辑优化、Usage 配置页面兼容历史还原数据、账单日消费检测告警新增产品维度成本汇总。"
      ],
      en: [
        "<strong>The Billing System</strong> now opens the <strong>Universal Billing Standard API v0.1</strong>: customer sync, resource binding, usage upload, discount configuration, bill query and PDF export, archive and push, amount alerts — the whole billing capability behind one set of REST endpoints, so a third-party platform integrates under <code>/api/v1/platform/{platformCode}</code> and runs the entire usage-to-invoice chain.",
        "Five experience improvements ship with it: bill lines searchable by subscription ID for Microsoft bills, an archived flag on the managed-tenant bill detail page, better back navigation from the Usage configuration detail, restored historical data supported on the Usage configuration page, and a product-level cost breakdown in daily-spend alert emails."
      ]
    },
    bullets: {
      zh: [
        "统一基路径 /api/v1/platform/{platformCode}，Bearer 认证；金额主单位、两位小数，默认 USD",
        "客户与用量对象两级：对象级折扣与告警必须同时带 customerId + resourceId，对象改绑不串客户",
        "用量文件按账期上传（数据文件 + 同名 .down 表示传完），同名重传覆盖不累加",
        "固定出账顺序：明细改价 → 产品折扣 → 统一折扣 → 税 → 应付金额，只影响未发布账单",
        "归档即锁定，推送独立：未配地址或推送失败停在已归档并可重试，状态为 UNPUBLISHED / ARCHIVED / PUBLISHED",
        "金额告警按应付金额触发，推送失败同样写入告警历史；操作记录保留 180 天",
        "同一批优化：账单明细支持订阅 ID 查询、账单详情页归档标识、Usage 配置页返回与历史数据兼容、消费告警新增产品维度成本汇总"
      ],
      en: [
        "One base path, /api/v1/platform/{platformCode}, with Bearer authentication; amounts in major units with two decimals, USD by default",
        "Two tiers — customer and usage resource: object-level discounts and alerts must carry both customerId and resourceId, and rebinding a resource never crosses customers",
        "Usage files upload per billcycle (the data file plus a same-named .down marker signals completion); re-uploading the same name overwrites rather than accumulates",
        "A fixed rating order: line adjustment → product discount → unified discount → tax → amount due, applied only to unpublished bills",
        "Archiving locks the bill while push stays independent — with no endpoint configured or a failed push the bill remains archived and retryable, with states UNPUBLISHED / ARCHIVED / PUBLISHED",
        "Amount alerts trigger on the amount due, and failed pushes are still written to alert history; operation records are retained for 180 days",
        "In the same batch: bill lines searchable by subscription ID, an archived flag on the bill detail page, back navigation and historical-data compatibility on the Usage configuration page, and a product-level cost breakdown in spend alerts"
      ]
    },
    link: null
  },
  {
    date: "2026-09-11",
    type: "LAUNCH",
    product: "RacoreClaw",
    title: { zh: "RacoreClaw 桌面智能体客户端发布", en: "RacoreClaw, the agentic desktop client, is live" },
    body: {
      zh: [
        "<strong>RacoreClaw</strong> 是 Racore 的桌面智能体客户端：把本地与远程的 MCP（Model Context Protocol）服务器统一纳管，用一个对话框完成 CDN、账单、邮件与飞书的日常操作。",
        "支持 stdio、Streamable HTTP 与 SSE 三种传输——导入 JSON 即可添加 MCP 服务，保存后热重载、无需重启；工具调用与结果全程可见。"
      ],
      en: [
        "<strong>RacoreClaw</strong> is Racore's agentic desktop client: local and remote MCP (Model Context Protocol) servers managed in one place, so CDN, billing, email and Lark work happens from a single dialogue.",
        "stdio, Streamable HTTP and SSE transports are all supported — import JSON to add a server, hot-reload on save, no restart; every tool call and result stays in plain sight."
      ]
    },
    bullets: {
      zh: [
        "MCP 一站式管理：安装列表、传输方式标注、连接状态与启停开关一目了然",
        "自然语言操作云端：查域名、创建加速域名、看流量带宽与账单，对话即操作",
        "内置 Racore 工具链：racore-cdn / racore-cli / racore-remote-mcp / racore-bill-remote-mcp",
        "工具生态可扩展：邮件、飞书（lark-mcp）、Authentik SSO 等 MCP 服务一键接入",
        "技能 + 定时任务：让智能体按你的工作流自动执行并汇报",
        "桌面端 v0.5.10，多模型接入，Auto 模式按任务智能路由"
      ],
      en: [
        "MCP in one place: installed list, transport badges, connection state and enable/disable toggles",
        "Operate your cloud in natural language — query domains, create acceleration, read traffic and billing",
        "Racore toolchain built in: racore-cdn / racore-cli / racore-remote-mcp / racore-bill-remote-mcp",
        "Extensible tool ecosystem: email, Lark (lark-mcp), Authentik SSO and more",
        "Skills + scheduled tasks let the agent run your workflow on autopilot and report back",
        "Desktop v0.5.10, multi-model, with Auto routing per task"
      ]
    },
    link: { href: "https://racoreclaw.verycloud.cn/download", zh: "获取 RacoreClaw", en: "Get RacoreClaw" }
  },
  {
    date: "2026-09",
    type: "LAUNCH",
    product: "Fusion CDN Platform",
    title: { zh: "融合 CDN 平台正式发布", en: "Fusion CDN Platform is live" },
    body: {
      zh: [
        "<strong>Racore 融合 CDN 平台</strong>正式上线——一站式全球融合内容分发网络管理系统。平台整合 AWS CloudFront、Cloudflare 等全球主流 CDN 厂商资源，结合自研智能调度引擎，为海外业务提供快速、稳定、安全的内容加速，帮助企业规避单一厂商锁定风险。",
        "双轨定价：按量付费 + 流量包（流量包最高可省 30%）。SLA 服务可用性承诺 99.9%，依托全球 3000+ 边缘节点、300+ 城市覆盖。"
      ],
      en: [
        "<strong>Racore Fusion CDN Platform</strong> is live — a one-stop global content delivery management system. It unifies resources from leading CDN providers such as AWS CloudFront and Cloudflare behind a proprietary intelligent scheduling engine, giving overseas businesses fast, stable and secure acceleration while removing single-vendor lock-in.",
        "Dual-track pricing: pay-as-you-go + traffic packages (save up to 30%). 99.9% availability SLA, backed by 3000+ edge nodes across 300+ cities worldwide."
      ]
    },
    bullets: {
      zh: [
        "双渠道全面接入：AWS CloudFront + Cloudflare，API 标准化封装，厂商接口异常自动重试并切换备用渠道",
        "自研智能调度：全球 IP 库覆盖率 95%+，支持加权轮询 / 最小延迟 / 最少连接数算法，故障节点秒级隔离切换",
        "全场景加速：通用 / 静态 / 大文件下载 / 视频点播 / 直播（WebRTC 端到端 < 1s）/ 动态加速",
        "统一控制台：域名、证书（支持批量绑定）、刷新预热、任务中心，90 天多维统计与 TOP 分析",
        "全链路账单体系：原始账单拉取、计费出账、告警校验到审核发布，成本透明可核对",
        "企业级安全：SSL/TLS + HSTS、Referer/IP/UA/区域访问控制、防盗链与 HLS/AES 加密"
      ],
      en: [
        "Dual-channel onboarding: AWS CloudFront + Cloudflare behind standardized APIs, with automatic retry and failover to backup channels when a provider degrades",
        "Proprietary intelligent scheduling: 95%+ global IP-geo coverage; weighted round-robin / least-latency / least-connections; sub-second node isolation and failover",
        "Full-scenario acceleration: general / static / large-file download / VOD / live streaming (WebRTC end-to-end < 1s) / dynamic acceleration",
        "One console: domains, certificates (batch binding), purge & prefetch, task center, plus 90-day analytics with TOP domain / URL / Referer / UA drill-downs",
        "End-to-end billing: raw-bill ingestion, rating, alert validation and bill review — fully transparent, verifiable costs",
        "Enterprise security: SSL/TLS + HSTS, Referer/IP/UA/geo access control, hotlink protection, HLS/AES encryption"
      ]
    },
    link: { href: "https://www.racorecloud.com/", zh: "进入平台", en: "Open the platform" }
  },
  {
    date: "2026-09",
    type: "LAUNCH",
    product: "Racore CDN CLI",
    title: { zh: "Racore CDN CLI 发布", en: "Racore CDN CLI is live" },
    body: {
      zh: [
        "<strong>Racore CDN CLI</strong>（<code>racore-cli</code>）正式上线——Racore Cloud 官方命令行工具，让人类和 AI Agent 都能在终端里操作 CDN。覆盖域名、缓存、统计、证书、工单、日志六大命令组，提供 60+ 命令与 80+ AI Agent Skills。",
        "原生支持 MCP（Model Context Protocol，基于 JSON-RPC 2.0）：一条 <code>racore-cli serve</code> 即启动 stdio 模式的 MCP Server，可被 Kiro、Amazon Quick Desktop、Claude Desktop 等 AI Agent 直接调用。"
      ],
      en: [
        "<strong>Racore CDN CLI</strong> (<code>racore-cli</code>) is live — the official Racore Cloud command-line tool that lets both humans and AI agents run the CDN from a terminal. It spans six command groups (domain, cache, stats, cert, workorder, log) with 60+ commands and 80+ AI Agent Skills.",
        "MCP (Model Context Protocol, JSON-RPC 2.0) is native: a single <code>racore-cli serve</code> starts a stdio MCP server that AI agents such as Kiro, Amazon Quick Desktop and Claude Desktop can call directly."
      ]
    },
    bullets: {
      zh: [
        "完整覆盖 Racore Cloud CDN API：60+ 操作，6 大命令组 domain / cache / stats / cert / workorder / log",
        "MCP 原生：racore-cli serve 启动 stdio MCP Server，AI Agent 直接调用，附 80+ Agent Skills",
        "自动 Token 管理：401 自动重试、过期自动刷新；凭证安全存储于系统钥匙串 / Credential Manager",
        "跨平台：macOS / Linux / Windows 全支持，一条命令安装与更新（racore-cli update）",
        "创建域名自动匹配泛域 SSL 证书；缓存刷新预热、流量统计、TOP 分析、证书与工单一应俱全"
      ],
      en: [
        "Full Racore Cloud CDN API coverage: 60+ operations across six groups — domain / cache / stats / cert / workorder / log",
        "MCP-native: racore-cli serve starts a stdio MCP server AI agents call directly, with 80+ agent skills",
        "Automatic token handling: retry on 401, refresh on expiry; credentials stored in the system keychain / Credential Manager",
        "Cross-platform: macOS / Linux / Windows, install and update with one command (racore-cli update)",
        "Auto-matches wildcard SSL certs on domain creation; cache purge & prefetch, traffic stats, TOP analytics, certs and work orders included"
      ]
    },
    link: { href: "https://portal.racorecloud.com/login", zh: "获取 AccessKey", en: "Get your AccessKey" }
  },
  {
    date: "2026-08",
    type: "LAUNCH",
    product: "Racoder",
    title: { zh: "Racoder 智能体 IDE 发布", en: "Racoder, the Agentic IDE, is live" },
    body: {
      zh: [
        "Racore 首款智能体开发工具 <strong>Racoder</strong> 正式上线。把任务交给自主智能体——它们在你的整个代码库中规划、编写并审查代码，你只需专注于决策。",
        "基于开源 VS Code（vscode-oss）构建，并配套自研云平台统一管理用户、套餐、模型、用量与钱包——一份订阅即可使用多家前沿模型，免费版即可开始，超出套餐额度可按需付费继续使用。"
      ],
      en: [
        "Racore's first agentic dev tool, <strong>Racoder</strong>, is live. Delegate tasks to autonomous agents that plan, write, and review code across your whole stack — while you stay in charge of the decisions.",
        "Built on open-source VS Code (vscode-oss) and backed by Racore's own cloud platform that unifies users, plans, models, usage and wallet — one subscription covers frontier models from multiple providers, a free plan gets you started, and pay-as-you-go keeps you going beyond your quota."
      ]
    },
    bullets: {
      zh: [
        "智能体实时编写代码：编辑、重构与测试在同一流程中完成",
        "多智能体并行：同时启动多个任务，自主工作、按序汇报",
        "Agent 可选 Copilot 与 Claude；GPT、Claude、GLM 等多家前沿模型统一接入，Auto 模式智能路由",
        "基于开源 VS Code（vscode-oss）构建，兼容 open-vsx 插件生态",
        "配套云平台：套餐订阅、钱包充值与用量统计，超出额度可按需付费",
        "免费版每月含 200 credits"
      ],
      en: [
        "Agents write code live — edit, refactor and test in one flow",
        "Parallel agents: kick off multiple tasks that work autonomously and report back",
        "Choose Copilot or Claude as your agent; GPT, Claude, GLM and more behind one API, with Auto routing",
        "Built on open-source VS Code (vscode-oss), compatible with the open-vsx plugin ecosystem",
        "Companion cloud platform: plan subscriptions, wallet top-up and usage tracking, with pay-as-you-go beyond your quota",
        "Free plan includes 200 credits / month"
      ]
    },
    link: { href: "https://racoder.verycloud.cn/profile", zh: "进入 Racoder", en: "Open Racoder" }
  },
  {
    date: "TBD",
    type: "SOON",
    product: "",
    title: { zh: "下一个产品，研发中", en: "The next product, in the lab" },
    body: {
      zh: ["Racore 实验室的下一个产品，将在这里率先公布。关注本页，或告诉我们你期待什么。"],
      en: ["The next product from the Racore lab will be announced here first. Follow this page — or tell us what you'd like to see."]
    },
    bullets: null,
    link: null
  }
];

/* 最新的非 SOON 条目（驱动首页控制台、眉标日期与日志页 meta） */
function latestRelease(){
  return UPDATES.find(u => u.type !== "SOON") || UPDATES[0];
}
