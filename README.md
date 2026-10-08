# product-ui

A Codex/agent Skill for designing, implementing, and reviewing **real product interfaces** rather than marketing websites.

Version: **2.0.0**

## What V2 does

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
DESIGN.md       (becomes the visual source of truth)
    ↓
shadcn          (when the project actually uses shadcn/ui)
    ↓
implementation
    ↓
render / browser review
    ↓
Impeccable critique
    ↓
fix material issues
    ↓
Impeccable audit
    ↓
fix material issues
    ↓
optional polish
```

The companion skills are conditional, not blindly invoked on every task.

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
- **Impeccable** — post-implementation critique/audit; polish is optional and last.

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
```
