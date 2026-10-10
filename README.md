# product-ui

**让 AI 按真实软件产品的工作方式设计、开发和优化前端界面。**

`product-ui` 是一套面向 Codex 等 AI 编程助手的 **产品 UI 工作流 Skill**。它不是某种固定配色的组件库，而是负责理解用户任务、规划信息架构、组织设计与实现、在关键阶段让你确认，并检查最终界面是否真正好用。

适合 SaaS、ERP / CRM、管理后台、数据工作台、工具软件和带有真实操作流程的 Web 应用。**新项目可以从零设计，已有项目可以先检查再优化，也可以明确要求换风格或整体重建。**

> **快速理解：**你告诉 AI“做什么软件 / 优化什么页面”，`product-ui` 负责推进；需要苹果风或微软 Fluent 风时，再由相应的独立 Design Provider 处理视觉细节。

## 它能做什么？

| 你的需求 | product-ui 会怎么做 |
|---|---|
| 从零开发产品界面 | 理清用户任务、页面结构和操作流程；必要时先提供可预览的风格候选，再做一个真实 Demo |
| 优化已经开发的前端 | 大范围优化先只读审查，给出问题清单与优先级；你确认后先改一个代表性页面 |
| 给现有产品换视觉风格 | 保留业务功能与 API，重做视觉体系并通过代表性页面验证 |
| 重建 / 迁移现有前端 | 先盘点页面、功能、接口和依赖，制定可回退的替换方案 |
| 提升完成度 | 检查真实交互、状态、密度、响应式、键盘访问及视觉一致性；按需调用已安装的审查 Skill |

**重点不是生成一张漂亮的后台截图，而是把页面做成能够使用、能够继续迭代的产品。**

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
先梳理核心操作和页面结构。如果还没确定视觉风格，
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
| `NEW_BUILD` | 新建产品 / 只有空项目骨架 | 产品结构 → 未定风格时选 Style Demo → 一个真实 Product Demo → 确认后扩展 |
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
确定用户任务、信息架构、操作流程、页面布局
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

**两类 Demo 不一样：**

- **Style Demo**：在浏览器里比较 2～3 套视觉方向；只有风格未定、确实需要探索时才生成。
- **Product Demo**：在真实项目中实现应用外壳和一个核心页面/流程，检查实际操作、状态和界面是否符合预期。

它不会要求你对每个普通页面都审批一次；只有新视觉体系、新的核心交互模式或成本较高的阶段边界才需要再次确认。

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
| [Style Demo 规范](references/visual-style-demos.md) | 可直接预览的 A/B/C 视觉方案 |
| [Provider 架构](references/design-provider-architecture.md) · [协议](references/design-provider-protocol.md) | 风格协作边界及交接约定 |
| [外部 Skill 协作](references/integrations.md) | UI UX Pro Max、shadcn、Hallmark、Impeccable |
| [EVALS.md](EVALS.md) | 设计的能力评估场景 |
| [CHANGELOG.md](CHANGELOG.md) | 版本更新记录 |

### 更新 Skill

如果是通过 Git 安装，可在仓库目录运行 `bash scripts/update.sh`，或在 Codex 中说“更新 product-ui 技能”。更新脚本使用 fast-forward，遇到未提交的本地变更会停止，不会直接覆盖。

**适用范围提醒：**本 Skill 主要服务于**软件应用界面**；营销官网、品牌落地页和个人作品集不是它的核心用途。
