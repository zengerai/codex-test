# product-ui

**让 AI 按真实软件产品的工作方式设计、开发和优化前端界面。**

`product-ui` 是一套面向 Codex 等 AI 编程助手的 **产品 UI 工作流 Skill**。它不是某种固定配色的组件库，而是负责理解用户任务、规划信息架构、组织设计与实现、在关键阶段让你确认，并检查最终界面是否真正好用。

适合 SaaS、ERP / CRM、管理后台、数据工作台、工具软件和带有真实操作流程的 Web 应用。**新项目可以从零设计，已有项目可以先检查再优化，也可以明确要求换风格或整体重建。**

> **快速理解：**你告诉 AI“做什么软件 / 优化什么页面”，`product-ui` 负责推进；需要苹果风或微软 Fluent 风时，再由相应的独立 Design Provider 处理视觉细节。

## 它能做什么？

| 你的需求 | product-ui 会怎么做 |
|---|---|
| 从零开发产品界面 | 先一起确认逻辑模块与所属页面，再用交互草图 A 与截图标注蓝图 B 确认逐页组件、内容和交互；之后确定视觉并做一个真实 Demo |
| 优化已经开发的前端 | 大范围优化先只读审查，给出问题清单与优先级；你确认后先改一个代表性页面 |
| 给现有产品换视觉风格 | 保留业务功能与 API，重做视觉体系并通过代表性页面验证 |
| 重建 / 迁移现有前端 | 先盘点页面、功能、接口和依赖，制定可回退的替换方案 |
| 提升完成度 | 检查真实交互、状态、密度、响应式、键盘访问及视觉一致性；按需调用已安装的审查 Skill |

**重点不是生成一张漂亮的后台截图，而是把页面做成能够使用、能够继续迭代的产品。**

在确实有复杂任务的工作台上，v3.2 可按需选择 Master Detail、Expand in Place、Global Filter、Linked Hover、Sticky Compact Header 和 ⌘K Command Palette，并确保跨组件状态一致；不会为追求炫酷把它们强加给所有页面。

v3.3 增加两轮设计前置规划：**模块与页面一起确认 → 组件、内容、交互与草图确认 → 视觉与实现**。一句话需求、项目说明、详细实施方案都可以作为输入；材料越完整，需要补充的假设越少。第一轮保持非代码规划；v3.4 允许第二轮以轻量代码表达可交互灰度原型，详见 [模块与页面规划规则](references/module-page-planning.md) 和 [灰度原型规范](references/gray-prototype.md)。

v3.4 将交互草图组织为 **统一灰度组件＋项目业务配置＋操作引导**：能逐页查看、看整体关系、跟着真实操作走完核心任务。内置原型资产及初始化脚本，静态草图仍适用于简单需求或明确不写代码的任务。它们服务于规划确认，不提前绑定正式前端技术栈。

v3.5 增加交付物 B 的标准表达：**原型截图＋区域编号＋对应规则**，沿用 A 的设计，说明组件组成、展示内容、交互与状态、跨页关系和复用方式，既供用户评审，也供后续开发参考。配有 [蓝图规则](references/frontend-blueprint.md) 和 [可复用模板](templates/frontend-blueprint.example.md)。A 与 B 同属第二轮，可一起评审；已确认的 A 不重新设计。接受交付形式不自动等于接受所有业务规则。

## 安装（Codex）

在终端执行：

```bash
git clone https://github.com/zengerai/codex-test.git
cd codex-test
bash scripts/install.sh
```

默认注册到 `~/.agents/skills/product-ui`（软链接指向你的 Git 仓库）。已存在同名目录时，安装脚本会停止并提示，不会覆盖。安装后如 Codex 没有立刻识别 Skill，重新加载 / 重启 Codex。

> 其他支持 Agent Skills 的 AI 开发工具可以参考各自的 Skill 安装方式；能否识别 `$product-ui` 以实际客户端和安装结果为准。详见 [INSTALL.md](INSTALL.md)。

### 安装后怎么告诉 AI？

**直接在 Codex 的项目对话中使用下面的指令**；`$product-ui` 是本 Skill 的名称。你也可以用自然语言明确指定使用它。

**例 1：做一个新工具**

```text
使用 $product-ui，为我开发一个自动整理文件的 Web 软件。
先把逻辑模块、所属页面和每页核心内容一起给我确认；
再规划逐页组件、展示内容、交互和草图，等我确认。
第二轮可以使用可交互灰度原型 A，并用截图、编号和规则形成蓝图 B，先不进入正式前端开发。如果还没确定视觉风格，
请先给我 2～3 套可以在浏览器里查看的 Style Demo。
我选择后，你先实现一个可操作的核心 Product Demo，等我确认再扩展。
```

**例 2：已有项目，只做体验优化**

```text
使用 $product-ui 检查当前已经开发的 CRM 前端。
保持现有视觉风格和业务功能不变。
先只读审查 UI/UX，列出 P0/P1/P2 问题和建议试点，
未经我确认不要修改代码。
```

**例 3：明确整体换风格**

```text
使用 $product-ui 将当前后台重新设计为苹果风。
保留功能、权限和后端 API，不要擅自重写业务。
如果安装了 $apple-inspired-desktop-saas，请按 Provider 协议使用它。
先完成一个代表性页面给我确认，再批量推广。
```

**例 4：重建原有前端**

```text
使用 $product-ui 重建当前前端，保留全部既有业务功能和 API。
先盘点页面、路由和功能，给出迁移及回滚计划；
完成替代版核心页面并让我验收后，再逐步替换。
```

**例 5：你已经选好风格，希望 AI 不再反复问**

```text
使用 $product-ui 开发这个新项目。
视觉方向采用 Apple-inspired，你自行选择合适的组件方案。
不用再出不同风格的 A/B/C 方案，但先做好一个真实核心页面让我验收。
```

你不必手动指定内部模式：Skill 会根据项目现状与这次指令自动识别。想让 AI 一次完成，可以明确说“跳过不必要的审批停顿，直接完成”，但不会因此允许破坏现有功能或跳过必要验证。

## 四种项目模式

这四种是 **product-ui 的项目处理模式**，不是 Apple Provider 的视觉任务模式。

| 模式 | 什么时候触发 | 默认流程 |
|---|---|---|
| `NEW_BUILD` | 新建产品 / 只有空项目骨架 | 模块＋页面确认 → 交互草图 A＋规则蓝图 B 确认 → 未定风格时选 Style Demo → 一个真实 Product Demo → 确认后扩展 |
| `EXISTING_IMPROVE` | 已有界面，需要检查、打磨或提升易用性 | **先只读审查** → 你确认问题 → 优化一个试点 → 前后对比 → 推广 |
| `EXISTING_REDESIGN` | 明确希望给已有产品换整体视觉风格 | 记录原状 → 新视觉方案 / Provider → 代表性页面 → 验收后分批替换 |
| `EXISTING_REBUILD` | 需要重写前端、迁移技术栈或更换实现 | 盘点现有功能/API → 迁移和回滚方案 → 替代版 Demo → 分阶段迁移 |

对于**明确的小改动**（如“缩小这个筛选框”），不必先做全站审计或反复审批。对于大范围已有项目优化，“优化”默认不意味着推翻原风格。

## 它是如何工作的？

```text
你的需求 + 项目代码
       ↓
product-ui：识别新建 / 优化 / 重设计 / 重建
       ↓
新产品：模块与所属页面一起确认
       ↓
新产品：交互草图 A＋截图标注蓝图 B 确认（同一设计的体验与说明）
       ↓
确定视觉方向（未指定时提供可预览的候选）
       ↓
可选 Design Provider：专业风格、组件表现、主题和动效
       ↓
实现一个真实的代表性页面 / 操作流程
       ↓
浏览器检查 + 必要的专项审查
       ↓
你确认 → DESIGN.md 固化已接受的设计 → 分批实现与验收
```

**可选：参考真实网站的设计语言。** 视觉方向尚未确定时，product-ui 可以按需查阅 [awesome-design-md](https://github.com/VoltAgent/awesome-design-md) 等外部设计资料，提炼配色、层次、排版等特征，并转换成**同一真实产品页面**的 A/B/C Style Demo。参考库多数是**网站视觉分析**，不代表软件内部 UI，也不会自动复制到项目的 `DESIGN.md`。详见 [视觉参考发现规则](references/visual-reference-discovery.md)。

```text
使用 $product-ui 设计一个新的发票处理工作台。
视觉方向还没定，请参考 awesome-design-md 中适合生产力工具的设计语言，
先说明参考来源和哪些特征适合工作台，再给我 2～3 套可预览的
同一页面 Style Demo。不要直接复制参考网站的首页布局。
```

**规划原型与后续 Demo 的目的不同：**

- **灰度规划原型**：第二轮交付物 A，用来确认布局、内容与页面关系；代码和数据仅支撑本地模拟。
- **前端设计蓝图**：第二轮交付物 B，对同一份原型加截图编号和规则说明，明确组件、内容、状态和页面关系；已呈现、待补齐和未知项分别说明。可按需用 PDF、HTML 或 Markdown 表达，不要求每次生成全部格式。
- **Style Demo**：在浏览器里比较 2～3 套视觉方向；只有风格未定、确实需要探索时才生成。
- **Product Demo**：在真实项目中实现应用外壳和一个核心页面/流程，检查实际操作、状态和界面是否符合预期。

两轮规划按整体方案或连贯的业务模块批次确认，不为每个普通页面单独审批。已有明确批准的规划会继续使用；小改动和已定义的常规扩展不重新走全套规划。明确的自主执行指令可以免除暂停，指定苹果风等视觉方向只免除风格选择。

## 与 Design Provider 及其他 Skills 的关系

`product-ui` **不规定必须使用苹果风、微软风，也不锁定某种组件库**。它负责“产品要做什么、怎样推进、何时验收”；专业 Design Provider 负责“选定的风格具体长什么样、组件如何呈现和运动”。

| 专业能力 | 对应资源 | 使用条件 |
|---|---|---|
| Apple-inspired 视觉与动效 | [Apple Design Provider](https://github.com/zengerai/Apple_Skill) | 已安装且项目明确选用苹果风 |
| 未来其他视觉系统 | 各自独立的 Fluent / Material 等 Provider | 需真正开发、安装并满足兼容要求 |
| 未确定视觉方向时的探索 | UI UX Pro Max | 原始 Skill 已安装且当前任务有必要 |
| UI 组件代码 | 项目已有组件库、shadcn/ui 等 | 按项目实际技术栈 |
| AI 味只读审查 | Hallmark | 原始 Skill 已安装且需要审查时 |
| 体验与代码质量审查 | Impeccable | 原始 Skill 已安装且任务范围需要时 |

上述外部 Skill 都是**按需协作**，并非 product-ui 的强制依赖；不会因为 README 提到了名字就自动安装或声称执行。

### 自己开发一个新的 Design Provider

如果你希望让另一个 AI 开发 Microsoft Fluent、Material 或其他设计体系，直接将 [**Design Provider 通用开发提示词**](templates/design-provider-development-prompt.md) 交给它。模板要求先阅读统一的 [Provider 协议](references/design-provider-protocol.md) 和 [职责架构](references/design-provider-architecture.md)，开发独立 Skill，而不是修改 product-ui 主流程。

## 设计资料与进阶阅读

| 文件 | 内容 |
|---|---|
| [SKILL.md](SKILL.md) | Agent 实际执行规则 |
| [INSTALL.md](INSTALL.md) | 安装与更新 |
| [项目入口与四模式路由](references/project-entry-routing.md) | 新建 / 优化 / 重设计 / 重建怎样区分 |
| [视觉确认节点](references/approval-checkpoints.md) | Style Demo、Product Demo 和扩展阶段的审批 |
| [灰度原型规范](references/gray-prototype.md) · [资产使用约定](references/gray-prototype-kit.md) | 第二轮交付物 A：组件复用、页面关系、真实操作引导与适度验证 |
| [前端设计蓝图规范](references/frontend-blueprint.md) · [蓝图模板](templates/frontend-blueprint.example.md) | 第二轮交付物 B：截图编号对应规则、关键状态、组件复用、差异说明与开发交接 |
| [Style Demo 规范](references/visual-style-demos.md) | 可直接预览的 A/B/C 视觉方案 |
| [高级交互选型](references/advanced-interaction-selection.md) | 根据产品任务选择联动交互，明确状态和验收契约 |
| [外部视觉参考](references/visual-reference-discovery.md) · [参考提炼模板](templates/visual-reference-brief.example.md) | 按需参考第三方 DESIGN.md、保留来源与限制，再转化为真实应用界面 |
| [Provider 架构](references/design-provider-architecture.md) · [协议](references/design-provider-protocol.md) | 风格协作边界及交接约定 |
| [外部 Skill 协作](references/integrations.md) | UI UX Pro Max、shadcn、Hallmark、Impeccable |
| [EVALS.md](EVALS.md) | 设计的能力评估场景 |
| [CHANGELOG.md](CHANGELOG.md) | 版本更新记录 |

### 更新 Skill

如果是通过 Git 安装，可在仓库目录运行 `bash scripts/update.sh`，或在 Codex 中说“更新 product-ui 技能”。更新脚本使用 fast-forward，遇到未提交的本地变更会停止，不会直接覆盖。

**适用范围提醒：**本 Skill 主要服务于**软件应用界面**；营销官网、品牌落地页和个人作品集不是它的核心用途。
