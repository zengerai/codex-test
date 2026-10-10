# product-ui

A Codex/agent Skill for designing, implementing, and reviewing **real product interfaces** rather than marketing websites.

Version: **3.0.0**

## v3.0 — Design Provider Architecture

product-ui is **style-neutral**. It owns task UX, IA, lifecycle, honest companion Skill execution, rendered checkpoints and DESIGN.md governance. Optional independently installed Design Providers own approved visual language, tokens, component appearance/theme and specialist motion. No Apple, Luma, Rhea, Fluent, Material or React defaults are hardcoded.

A Provider is an actual original installed Skill, not a native plugin API. Verify original SKILL.md/capabilities and use the written v1 handoff. If no Provider is installed, product-ui still functions with existing project components or general Style Demo exploration; report the fallback honestly. Existing products keep their accepted style unless redesign is explicit.

Read references/design-provider-architecture.md, references/design-provider-protocol.md, references/design-provider-routing.md and references/design-provider-acceptance.md. A provider manifest and handoff example are in templates/. The original Apple Skill v2.0 has not yet been rebuilt to conform fully; Apple refactor is a separate next step.

Examples:
- Use product-ui for a new application with an installed Apple Design Provider.
- Use product-ui to explicitly redesign an existing product in Fluent style while preserving workflows and APIs.
- Use product-ui to improve an existing CRM without changing its established visual language.

## Create your own Design Provider (AI development prompt)

**想让其他 AI 开发一个新的苹果风 / Microsoft Fluent / Material 等 Design Provider？**

直接复制 [**Design Provider 开发通用提示词（中文）**](templates/design-provider-development-prompt.md)，填写 Provider 名称、目标设计体系、框架和交付目录，再交给 Codex、Claude Code 或 Cursor。提示词会要求开发 AI 先读取本仓库最新的 Provider v1 协议、清楚划分 product-ui/Provider 职责，并交付独立可安装的 Skill、manifest、示例及测试。

- **复制完整提示词：** [`templates/design-provider-development-prompt.md`](templates/design-provider-development-prompt.md)
- **协议原文：** [`references/design-provider-protocol.md`](references/design-provider-protocol.md)
- **职责边界：** [`references/design-provider-architecture.md`](references/design-provider-architecture.md)
- **能力声明示例：** [`templates/design-provider-manifest.example.json`](templates/design-provider-manifest.example.json)

> 新 Provider 独立开发、安装与升级，不需要复制或改写 product-ui；开发提示词是模板，必须以仓库最新协议为准。Provider 的原始 Skill 真正安装并可读取后，product-ui 才能如实记录其执行状态。

## What V2.4 does

`product-ui` is now an orchestrator:

```text
Product context
    ↓
product-ui
    ↓
classify task / page / density / workflow
    ↓
UI UX Pro Max   (only when visual direction is undefined)
    ↓
2–3 differentiated directions
    ↓
HTML/CSS Style Demo Gallery (same app content in A/B/C)
    ↓
USER CHOOSES visually ← Style Demo Checkpoint
    ↓
shadcn agent Skill (only if installed and project uses shadcn/ui)
    ↓
Real App shell + 1 representative core Product Demo page
    ↓
render / browser review
    ↓
Hallmark audit     (original installed Skill, read-only)
    ↓
product-ui evaluates + fixes grounded findings
    ↓
Impeccable critique + fixes
    ↓
Impeccable audit + fixes
    ↓
USER REVIEWS rendered Product Demo ← Approval Checkpoint
    ↓
DESIGN.md        (accepted direction/patterns become source of truth)
    ↓
expand implementation in batches
    ↓
re-run relevant review stages for material changes
    ↓
optional polish
```

The companion skills are conditional, not blindly invoked on every task.

## Project modes in V2.4

The very first decision is whether this is a **new product** or an **existing product**, and whether the user wants **improvement** or **explicit redesign/rebuild**.

| Mode | Typical prompt | First deliverable | Approval gate |
|---|---|---|---|
| `NEW_BUILD` | 开发一个新的 SaaS 产品 | 2–3 runnable HTML Style Demos when style undefined | Choose visual direction; then approve one real Product Demo |
| `EXISTING_IMPROVE` | 用 product-ui 优化当前前端 | **Read-only audit report** with P0/P1/P2 findings and one pilot recommendation | **Approve audit/pilot before changes**; then approve before/after pilot |
| `EXISTING_REDESIGN` | 把这个已有系统的 UI 全面重新设计 | Existing UI/flow inventory, new HTML Style Demos | Choose new direction; then approve replacement Product Demo |
| `EXISTING_REBUILD` | 将已有前端整体重写/迁移框架 | Behavior/API/route inventory, preservation & migration plan | Approve high-cost scope/style, one replacement Product Demo and staged migration |

**Existing project + unspecified "优化" defaults to `EXISTING_IMPROVE`.** Do not modify source during the first audit, and do not launch UI UX Pro Max simply because `DESIGN.md` is missing; first recover the real visual system from code and rendered UI.

A small precisely scoped request (e.g. a button or filter issue) does not require a whole-project audit/approval ceremony. A user-authorized one-shot request can skip unnecessary approval pauses, but it does not authorize destructive rewrites or breaking existing APIs.

## Staged approval model (V2.4)

For `NEW_BUILD`, `EXISTING_REDESIGN` and visual-reset `EXISTING_REBUILD`, use the staged style selection and Product Demo checkpoints. For `EXISTING_IMPROVE`, **replace the first style checkpoint with read-only audit approval**, followed by before/after pilot approval. Do not run from brief to all-pages production UI in one uninterrupted pass unless the user explicitly asks for autonomous/one-shot execution.

Default checkpoints:

1. **Visual Direction Checkpoint** (new build / explicit redesign only) — when no accepted visual direction exists, use UI UX Pro Max if available to generate 2–3 materially different, product-appropriate directions; **build and show actual HTML/CSS Style Demos** using the same representative product UI; recommend one, then pause for the user to choose visually. A purely written style menu is not sufficient.
2. **Product Demo Checkpoint** — after direction selection or after approval of the existing-UI audit/pilot scope, implement only the real application shell plus **one representative core page** (or one representative flow if a single page is insufficient), using realistic data and key states. Render/review, complete applicable original Hallmark audit + Impeccable critique/audit with material fixes, then pause for the user to confirm the direction before expanding the product.
3. **Expansion Checkpoint** — after demo approval, continue in coherent batches. Pause again only when introducing a materially new UI pattern, a major design-system deviation, or after a large module/batch where feedback can still prevent costly rework.
4. **Final QA** — recheck materially changed modules with original Hallmark audit (when relevant and available), Impeccable critique → fixes → audit → fixes. Polish remains optional. Report real Skill execution status.

Skip unnecessary checkpoints when:
- an applicable `DESIGN.md` and mature existing UI already establish the direction;
- the user supplied a clear screenshot/design/reference and only wants faithful continuation;
- the task is a small isolated change rather than a new surface family;
- the user explicitly says “直接做完 / 不用问我 / 你自己决定 / one-shot / autopilot”.

The agent should not ask for approval on every page. The purpose is to validate high-cost decisions early, not create approval fatigue.

## V2.2 retained: visual comparison

For new product visual exploration, the expected first artifact is a **working, browser-previewable comparison**, normally:

```text
design-exploration/
  style-comparison.html   ← A/B/C gallery, same representative screen
  previews/               ← actual screenshots when browser capture is available
```

A working starter is provided at `templates/style-comparison.html`. Codex should adapt it to the actual product rather than blindly reusing the example styles.

The gallery can switch among visual systems or show them side by side. It should illustrate a real product screen (ToB workbench/table/forms or ToC core utility), not a landing page. Short text descriptions supplement the visuals.

**Two distinct reviews:**

- **Style Demo**: choose a visual language from comparable working HTML/CSS previews.
- **Product Demo**: after choosing the style, validate the first real application page and interactions before scaling.

### GPT-6 Intelligent UI: optional complement, not a Codex dependency

OpenAI's October 7, 2026 release introduced Intelligent UI to supported **ChatGPT Chat** experiences. It can help compare options interactively in ChatGPT, but it is **not a callable Codex Skill or guaranteed renderer inside Codex App**. The primary V2.2 workflow works entirely with browser-previewable HTML/CSS created by Codex. For optional ChatGPT-based visual comparison, transfer the selected direction with a portable decision note; do not assume automatic state/code transfer.

See `references/visual-style-demos.md` and `references/intelligent-ui-bridge.md`.

## V2.3 — original Skill integrations

The project is a **Skill orchestrator, not a Skill collector**. UI UX Pro Max, the independent shadcn agent Skill, Hallmark, and Impeccable must remain **separately installed and independently updateable**. Their prompt catalogs and references are **not copied** into product-ui.

For each relevant Skill, Codex should:

1. Detect the original installed Skill; do not infer installation from a link or a component dependency.
2. Read the original `SKILL.md` and required original mode references.
3. Invoke/follow the installed version's **actual workflow**.
4. Verify output or findings.
5. Report **executed / skipped-not-needed / unavailable / blocked / failed** with evidence.

### Where Hallmark fits

After rendering a real Product Demo, run **Hallmark `audit` only** when it is installed. This mode produces a **read-only, ranked AI-slop findings report**. product-ui then evaluates findings against the accepted `PRODUCT.md` / `DESIGN.md` / ToB information-density requirements and separately fixes justified issues. Do not allow an anti-slop review to undo the user's chosen style or replace efficient data tables with decorative cards.

Continue with the original Impeccable `critique → fixes → audit → fixes` flow when available, then ask the user to approve the Product Demo before expanding the UI.

**shadcn/ui is a component library, not proof of an installed shadcn agent Skill.** Check both separately. If any Skill is missing, do not claim it ran; continue with labeled fallback behavior when appropriate.

The main documents are `references/external-skill-protocol.md` and `references/hallmark-audit.md`.

## Best for

- ToB SaaS / admin / ERP / CRM / operations consoles
- high-density data tables and record systems
- workbenches, review queues, approval workflows
- search, filtering, sorting, batch actions
- forms and settings
- dashboards and analytics
- ToC utility tools, editors, account areas, mobile/web apps

## Not for

Do not use this as the primary framework for:
- landing pages
- portfolios
- company homepages
- campaign pages
- brand-only showcase sites

## Design principles

For ToB operational UI:
- table/list first when users scan, compare, filter, or batch-process data;
- optimize for repeated daily use;
- preserve context across filters, selections, and review workflows;
- avoid excessive cards, giant headings, and hero whitespace.

For ToC tools:
- make the primary job obvious;
- reduce setup before first value;
- progressively disclose advanced controls;
- provide clear feedback and safe previews.

## Companion skills

Recommended environment:
- **UI UX Pro Max** — 0→1 visual/design-system exploration when no established `DESIGN.md` exists.
- **shadcn skill** — implementation/component composition when the project uses shadcn/ui.
- **Hallmark** — original, independently installed `audit` mode for read-only AI-slop findings.
- **Impeccable** — original post-implementation critique/audit; polish is optional and last.

`product-ui` still works without them. It must never claim a companion ran when it is unavailable.

## Durable project context

Recommended files:

```text
PRODUCT.md  -> users, jobs, workflows, product rules
DESIGN.md   -> accepted visual system and UI conventions
AGENTS.md   -> repository/agent workflow and completion rules
```

Do not maintain two competing design systems.

## Installation model

For easy updates, keep this Skill as a Git checkout and symlink it into Codex's user skill directory.

From the cloned repository:

```bash
./scripts/install.sh
```

Default target:

```text
~/.agents/skills/product-ui
```

The target is a symlink, so the Git checkout remains the single source on your machine.

## Update model

Once installed from Git, you can tell Codex:

> 更新 product-ui 技能

The Skill instructs Codex to run:

```bash
./scripts/update.sh
```

The updater:
- refuses to overwrite uncommitted local changes;
- pulls only the configured remote/branch;
- uses `git pull --ff-only`;
- reports previous/new version and changed files.

## Key files

```text
SKILL.md
VERSION
CHANGELOG.md
README.md
AGENTS.example.md
EVALS.md
INSTALL.md
scripts/
  install.sh
  update.sh
references/
  integrations.md
  approval-checkpoints.md
  visual-style-demos.md
  intelligent-ui-bridge.md
  external-skill-protocol.md
  hallmark-audit.md
  project-entry-routing.md
  existing-project-audit.md
  design-system-governance.md
  browser-review.md
  product-type-routing.md
  information-density.md
  data-table.md
  forms.md
  workflow.md
  navigation.md
  filters-search.md
  bulk-actions.md
  dashboard.md
  settings.md
  onboarding.md
  mobile-adaptation.md
  states.md
  accessibility.md
  review-checklist.md
templates/
  style-comparison.html  ← optional working A/B/C preview starter
```
