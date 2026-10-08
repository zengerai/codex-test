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

- **UI UX Pro Max** — visual/design-system exploration for new products (https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)
- **shadcn agent Skill** — if independently installed, aids component workflows in projects that use shadcn/ui. **shadcn/ui component library is not itself proof of the agent Skill.**
- **Hallmark** — original read-only `audit` mode for detecting AI-slop in substantial rendered UI (https://github.com/Nutlope/hallmark).
- **Impeccable** — original `critique` and `audit` modes after substantial UI work (https://github.com/pbakaus/impeccable).

`product-ui` detects each companion's **relevance and actual installed original Skill** at runtime. The companion Skills are independent; updating product-ui does **not** install or update them.

### Example Hallmark installation (manual, optional)

From your trusted project environment:

```bash
npx skills add nutlope/hallmark
```

Follow Hallmark's own installation instructions for your Codex environment, inspect the external code before executing installers, and restart/reload Codex if needed. Do not assume installation succeeded until the original `hallmark` Skill is visible/readable.

### What to expect after upgrading product-ui

When a substantial Product Demo is ready, product-ui should:
1. detect installed originals;
2. read each original `SKILL.md` and task-specific references;
3. run Hallmark `audit` as a read-only report, then evaluate/fix relevant findings separately;
4. run original Impeccable critique/audit when available;
5. report executed / skipped-not-needed / unavailable / blocked / failed with evidence.

Refer to `references/external-skill-protocol.md` and `references/hallmark-audit.md`.
