# Design Provider 开发通用提示词

> 面向 Codex、Claude Code、Cursor 等 AI 开发工具。用于从零创建 **可独立安装的 Design Provider Skill**，并接入 [product-ui v3.0](https://github.com/zengerai/codex-test)。
>
> **使用方法：**将下面「复制给开发 AI 的提示词」全文提供给 AI，替换开头的占位符；开发者须先读取仓库中最新协议，不能以本模板代替协议原文。可以将本文件 URL 直接交给能访问 GitHub 的开发 AI。
>
> 注意：这是一份开发提示词模板，不是自动安装器或可直接调用的运行时插件接口。

---

## 复制给开发 AI 的提示词

你是一名资深前端设计系统架构师、交互与动效工程师、Codex Agent Skill 开发者。

我要求你开发一套**独立、可安装、可维护、可升级的 Design Provider Skill**，供我的 `product-ui v3.0` 使用。请严格依据仓库最新的 Design Provider 协议开发，避免重复实现 product-ui 已负责的产品 UI 总控工作。

### 1. 目标与配置

- **Provider Skill ID（待填写）：** `[fluent-design-provider]`
- **视觉设计体系（待填写）：** `[Microsoft Fluent 2]`
- **目标平台（待填写）：** `[desktop-web, responsive-web]`
- **目标技术栈（待填写）：** `[React 优先；Vue/原生 HTML 根据真实支持程度声明]`
- **优先研究的官方资源和成熟组件（待填写）：** `[Fluent UI React、Fluent Design System、官方 Motion 规范]`
- **交付仓库或目录（待填写）：** `[新仓库 URL 或本地目标目录]`

上述只是示例，不允许将 Fluent、React 或任何品牌风格作为所有 Provider 的默认要求。请根据填写的真实目标重新选择组件与实现方案。

### 2. 先读 product-ui 原始仓库和协议，再动手

主仓库：https://github.com/zengerai/codex-test

**先读取以下文件在默认分支上的最新完整内容：**

1. `SKILL.md` — 理解 product-ui 的实际生命周期与编排方式。
2. `references/design-provider-architecture.md` — Design Provider 与 product-ui 的职责边界。
3. `references/design-provider-protocol.md` — Provider Protocol v1（或仓库当时最新版），工作模式、能力声明、输入输出。
4. `references/design-provider-routing.md` — 风格选择、用户确认、现有项目保留和降级处理。
5. `references/design-provider-acceptance.md` — 集成验收与执行证据。
6. `templates/design-provider-manifest.example.json` — 可选 Provider 能力声明格式。
7. `templates/design-provider-handoff.example.yaml` — 标准交接示例。

这些是**规范依据**。本提示词是工作委托，不应覆盖较新的仓库协议。如果文件读取失败，先报告具体文件和原因；不要编造已读取、已通过验证或者自动完成集成。

### 3. 明确两者的职责边界

**product-ui 负责：**

- 业务需求、用户工作任务、产品信息架构、页面/功能布局、业务操作语义与信息密度要求。
- 四种项目路线：`NEW_BUILD`、`EXISTING_IMPROVE`、`EXISTING_REDESIGN`、`EXISTING_REBUILD`。
- 视觉方向 A/B/C 探索与用户选择、代表性 Product Demo 审批、批量实施和最终验收。
- 整个项目的 `PRODUCT.md`、**唯一生效的** `DESIGN.md`、原始第三方 Skill 调度和全局 UX/无障碍检查。

**你开发的 Provider 负责：**

- 所选视觉体系的设计来源、设计原则、Token/主题、排版、视觉材质、组件风格与可用变体。
- 根据已确定的产品页面结构给出**组件映射与视觉呈现方案**，不可无理由改变用户工作流。
- 动效、微交互、Spring/空间连续性/可中断动画、交互反馈及 `prefers-reduced-motion` 策略。
- 根据实际框架选择成熟组件库与实现方式，给出依赖、兼容性、许可和降级说明。
- 与本视觉体系有关的专项风格一致性检查（style conformance）。

**绝对不要：**在 Provider 内复制 product-ui 的项目路由、审批流程或完整产品开发编排；自行触发 Hallmark/Impeccable/shadcn agent Skill；自行改写业务 API、权限、流程；创建与项目 `DESIGN.md` 竞争的生效设计文档；未经授权安装依赖、迁移框架或大范围重写项目。

### 4. 原生支持四种 Provider 任务模式

遵循实际协议实现并验证这些模式：

| mode | 权限 | 应有产出 |
|---|---|---|
| `style-candidate` | 只读，不修改项目代码 | 可交给 product-ui 用于视觉风格探索的候选方向、标志性组件和对比建议 |
| `spec` | 只读，不修改项目代码 | 设计原则、主题 Token、组件映射、状态、Motion 与兼容性方案 |
| `implement` | 仅在明确授权的目标文件/页面范围内写入 | 实际可运行的组件/样式/动效代码、改动说明与验证结果 |
| `style-audit` | 只读，不修改项目代码 | 具体、可复核的风格一致性问题、位置、严重程度和建议；不冒充全局 UX 审计 |

必须保留 **独立调用模式**：未通过 product-ui 调用时，也能接受明确的局部风格、组件、动效开发或只读审查任务；独立调用不等于复制整个 product-ui 工作流。

### 5. 标准输入、输出及能力声明

参照仓库的 `design-provider-protocol.md` 和例子实现**指令级交接规范**：

- **输入：** `contract_version`、`request_id`、`provider_id`、`mode`、`project_route`、`visual_intent`、`product_job`、`surface_blueprint`、`environment`、`design_source`、`change_scope`、`deliverable`、`constraints`。
- **输出：**实际 Provider ID/版本、模式/执行状态、选用风格及理由、设计方案、组件映射、动效行为、实际文件产物、兼容性/依赖、检查结果、`style_conformance` 与未解决事项。
- **Provider Manifest：**提供 `design-provider.json`，格式符合模板；其 `provider_id` **必须匹配 Provider 自身 SKILL.md frontmatter 的 `name`**。
- **技术支持程度：**对 React/Vue/原生 HTML 等逐项诚实标注 `native`、`adapted` 或 `guidance`。不能把 React 组件代码声称可直接用于 Vue。
- **透明执行证据：**区分实际读取/执行与仅提出建议；状态使用 `executed`、`skipped-not-needed`、`unavailable`、`blocked`、`failed`。如果未运行浏览器测试或未加载原始 Skill，明确说明。

该协议是 **Codex Skill 间的工作交接约定**，不是已经存在的 RPC、运行时 Provider API、插件注册中心或自动 Skill 执行函数。不得虚构基础设施。

### 6. 组件、动效与设计资料的实现策略

- **优先官方体系和成熟组件：**认真研究目标视觉规范、官方控件、可复用组件库、无障碍底座和动效能力；提供来源、维护情况、技术限制、许可证与选择理由。
- **优先组合而非重造：**可复用已有组件时不重写底层 Button、Dialog、Combobox 等复杂交互原语。
- **不锁死视觉偏好：**不要把一套固定颜色、字体、阴影、圆角或个人旧设计稿当作所有产品的强制默认；应遵守目标视觉体系、已有项目 `DESIGN.md` 和明确的品牌需求。
- **确保交互自然且可控：**设计进入/退出、状态反馈、布局连续性和中断规则；快速连续操作后状态正确；支持键盘焦点、系统减少动画设置和必要的性能降级。
- **考虑真实产品：**覆盖至少一种高密度工作台和一种轻量工具的组件组合，让 Provider 学会在不同页面结构下保持一致设计语言，而不是机械复刻供应商 Demo。
- **尊重许可证：**引用来源，并根据各上游许可条件使用代码；不得擅自打包 Apple/Microsoft 的专有字体、品牌图片或受限资源。

### 7. 实际交付内容

交付完整可安装的 Skill，而不是只有计划、目录或占位文档：

- 带有效 frontmatter 的 `SKILL.md`，说明触发条件、独立模式、Provider 模式及按需读取的参考文档。
- `design-provider.json` 和版本说明、README、安装与调用方式。
- 所选设计体系的原则、主题/Token 策略、组件映射、Motion 规范及兼容性规则。
- 必要的可运行组件/动效示例，真实按项目技术栈落地。
- 四种模式各至少一个标准交接示例，并包含只读边界说明。
- `EVALS.md` 或等价测试用例、代码与文档校验脚本、基本无障碍/减少动态效果测试。
- 与 `product-ui` 协议兼容的执行和验收报告示例。

采用仓库的 `scripts/validate_provider_manifest.py` 对 Manifest 做校验；如工具可用，还应进行**实际跨 Skill 集成测试**。如暂时没有运行环境，要明确列出未验证项目。

### 8. 工作顺序及交付节点

1. **研究阶段：**先读取最新协议，再研究目标设计体系及上游实现；列出可直接复用、需要适配、必须自研的能力。
2. **架构方案：**先输出简明职责边界、Skill 目录、关键组件与 Motion 选型、兼容性、风险、许可及测试方案，**停止并等待我确认**。
3. **实现阶段：**批准后才创建完整 Provider Skill；保持独立安装、独立升级，不修改 product-ui 仓库（除非我另行明确授权）。
4. **验证阶段：**校验 Manifest、实际 Skill 激活、四模式输入/输出、只读权限、实现质量、框架兼容性、无障碍和可运行 Demo。
5. **交付阶段：**提供 Git 仓库或可安装 Skill 包、明确调用示例、测试结果、未解决限制，以及与当前 product-ui 版本的协议兼容结论。

**核心原则：product-ui 决定做什么和何时审批；Provider 负责该设计体系应如何呈现、交互和运动。不要职责重叠，不要虚报集成。**

---

## 例子：开发 Microsoft Fluent Provider

复制上述提示词，仅把第 1 节替换为：

- Provider Skill ID：`fluent-design-provider`
- 视觉设计体系：`Microsoft Fluent 2`
- 目标平台：`desktop-web, responsive-web`
- 目标技术栈：`React 原生；其他框架按真实能力说明`
- 研究资源：`Microsoft Fluent 2 Design、Fluent UI React v9、Fluent Motion、无障碍规范`
- 交付：`独立仓库 fluent-design-provider`

不要复制 Apple Provider 的审美 Token；只能借鉴其已经验证通过的 Provider 协作结构。

## 协议链接

- [Design Provider Architecture](../references/design-provider-architecture.md)
- [Design Provider Protocol v1](../references/design-provider-protocol.md)
- [Design Provider Routing](../references/design-provider-routing.md)
- [Design Provider Acceptance](../references/design-provider-acceptance.md)
- [Manifest 示例](design-provider-manifest.example.json)
- [Handoff 示例](design-provider-handoff.example.yaml)
