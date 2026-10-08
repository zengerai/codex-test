# Installation and Updates

## Recommended: Git checkout + symlink

This is the preferred installation for `product-ui` because it supports one-command updates without repeatedly downloading ZIP files.

### 1. Clone the Git repository

```bash
git clone https://github.com/zengerai/codex-test.git ~/CodexSkills/product-ui-skill
cd ~/CodexSkills/product-ui-skill
```

If the Skill is published from a dedicated branch rather than the repository default branch:

```bash
git clone --single-branch --branch main https://github.com/zengerai/codex-test.git ~/CodexSkills/product-ui-skill
cd ~/CodexSkills/product-ui-skill
```

### 2. Install into Codex

```bash
./scripts/install.sh
```

By default this creates:

```text
~/.agents/skills/product-ui -> ~/CodexSkills/product-ui-skill
```

You can override the skills directory:

```bash
PRODUCT_UI_SKILLS_DIR=/custom/skills/path ./scripts/install.sh
```

### 3. Reload Codex if necessary

Codex may detect Skill changes automatically. If the Skill is not visible immediately, restart/reload Codex.

## Updating

From a terminal:

```bash
cd ~/CodexSkills/product-ui-skill
./scripts/update.sh
```

Or ask Codex:

> 更新 product-ui 技能

The Skill's self-update instructions tell Codex to locate this Git-backed installation and run the updater.

## Update safety

`scripts/update.sh`:
- aborts if local uncommitted changes exist;
- does not use `reset --hard`;
- does not force-push or rewrite history;
- updates from the current tracked Git remote and branch;
- uses fast-forward-only pull behavior.

If you intentionally customize the Skill locally, commit your changes to a branch/fork before updating.

## Companion skills

Install companion Skills separately if you want the full orchestration workflow:

- UI UX Pro Max — visual/design-system exploration when no established design direction exists
- shadcn — project-level implementation when the project uses shadcn/ui
- Impeccable — critique/audit after substantial UI work

`product-ui` detects their relevance by project/task context; it does not require all three for every request.
