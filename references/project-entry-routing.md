# Project Entry Routing — V2.4

Product UI must route by **starting point** and **user intent** before selecting the design workflow. Read this file immediately after project inspection.

## Starting point

- **New/greenfield**: no substantive existing application UI to preserve; a scaffold or empty repository alone does not count as an established product.
- **Existing/brownfield**: substantive UI, routes, components, workflows, or adopted design conventions exist. An existing product can have a design system even without `DESIGN.md`.

## Four practical routes

| Route | Trigger | Default first deliverable | Stop/checkpoint | Style discovery |
|---|---|---|---|---|
| `NEW_BUILD` | New app/product with no substantive UI | Product brief/IA → 2–3 actual HTML Style Demos | User selects visual direction; later approves one Product Demo | Yes, unless clear reference/design or delegation |
| `EXISTING_IMPROVE` | “优化现有前端”, “看看 AI 味”, “审查体验” or unclear improve request on existing UI | **Read-only baseline audit + priority plan** | **Stop for optimization-scope approval before modifying source** | No, preserve existing visual system |
| `EXISTING_REDESIGN` | Explicit existing-product **visual redesign** or fundamentally new visual language | Baseline/functional inventory + redesign boundaries → HTML Style Demos | User selects direction; then approves one Product Demo | Yes, unless style already specified/delegated |
| `EXISTING_REBUILD` | Explicit “重建/重写/推倒重做现有前端”, framework migration, replacement front end | Baseline/behavior/API contract inventory + replacement/migration plan; style comparison if direction changing | Confirm high-cost scope/style; approve representative Product Demo before replacing remaining pages | If visual system changing and no explicit style |

**Do not equate optimization with redesign.** `EXISTING_IMPROVE` is the default for an existing product unless the user explicitly requests redesign/rebuild.

For a user asking to build a **new version of an existing product from scratch**, route to `EXISTING_REBUILD` because its behavior/contracts still require inventory and protection. Do not misroute to `NEW_BUILD` merely because a new repo or framework is planned.

For a **new project** which contains only boilerplate, route `NEW_BUILD` even though files already exist.

## Route precedence

1. Explicit user intent (e.g. "整个项目视觉重做" / "前端重新写" / "只检查 AI 味") overrides inferred defaults.
2. User-approved prior decisions and existing project context prevent repeated questions.
3. For ambiguous "帮我优化这个已有项目": route `EXISTING_IMPROVE`, audit only, then stop.
4. For a small **specific** request (e.g. "把这个表格筛选器做紧凑一点", "修这个按钮布局"), perform a scoped inspection and the requested isolated fix; do not turn it into a whole-project audit or style-selection ceremony.
5. If an existing project has established visual conventions but no `DESIGN.md`, reconstruct those conventions from actual components, tokens, CSS and screenshots **before** deciding whether style exploration is needed.
6. A valid `DESIGN.md` is binding for optimization but may be explicitly superseded when the user requests redesign. Preserve it as a baseline rather than silently erasing it.

## Route-specific workflows

### A. NEW_BUILD

1. Inspect project and task; classify ToB/ToC, user workflow, density, surface patterns.
2. When visual direction is undefined, use original UI UX Pro Max when available and deliver **2–3 browser-previewable HTML Style Demos** of the same representative product screen; stop for user choice.
3. Implement application shell + **one real representative Product Demo**.
4. Render, run original Hallmark audit-only and Impeccable critique/audit if available, fix material findings separately.
5. **Stop for user Product Demo approval**.
6. Consolidate approved decisions into `DESIGN.md`, expand in batches.

### B. EXISTING_IMPROVE (default audit-first)

1. **READ-ONLY inventory**: routes, screen families, design tokens, components, representative high-value workflows, key UI states, build/test/run path.
2. Infer the actual visual system, including when no `DESIGN.md` exists. Gather rendered screenshots where available.
3. Run original Hallmark `audit` and Impeccable `critique/audit` **in inspection/report-only mode** when installed; do not let product-ui or any review step modify source during this phase.
4. Produce an issue report with **P0/P1/P2**, file/screen evidence, AI-slop findings, usability/density issues, regression risk, and **one best pilot page**. Identify **preserve vs change** boundaries.
5. **STOP for user approval of priorities and pilot page before any edit**, even if the agent has a compelling preferred fix.
6. After approval, implement **only one pilot page or one contained cross-page component**, preserving behavior, contracts, and existing design language. Render original vs revised (real screenshots when available); run targeted checks.
7. **STOP for user pilot approval**; then extend to remaining pages/components in approved batches.
8. New visual style exploration is NOT the default; only switch to `EXISTING_REDESIGN` on explicit instruction.

For a **small, specifically requested edit**, skip project-wide audit and its stop, but still preserve project conventions and perform proportional QA.

### C. EXISTING_REDESIGN (explicit visual overhaul)

1. Baseline current screens, navigation and UX; capture current-state snapshots if tooling allows.
2. Inventory product flows/features/API contracts that must be preserved; distinguish approved visual change from forbidden business/behavior regressions.
3. State redesign boundaries and relevant risks. No destructive edits.
4. If the new style is not specified, offer **2–3 runnable HTML/CSS Style Demos** based on representative existing content and stop for style choice. Existing `DESIGN.md` is a **reference/current state**, not an automatic prohibition of the explicit redesign.
5. Build one representative **real** Product Demo in an isolated branch/worktree when practical; show before/after with equivalent task/data; run applicable Hallmark and Impeccable checks.
6. Stop for Product Demo approval; then roll out page/module batches with regression checks and update `DESIGN.md` only with accepted changes.

### D. EXISTING_REBUILD (explicit front-end replacement)

1. Treat this as a **replacement/migration project**, not "delete and regenerate".
2. Inventory current **screens/routes, features, task flows, permissions, states, API/data contracts, navigation/deep links, and test coverage**.
3. Produce **preserve / replace / deprecate** matrix, target stack/architecture, staged migration/rollback plan and high-risk gaps.
4. Protect backend APIs, auth, business rules, data handling and user workflows unless the user explicitly requests contract changes. Never silently delete existing working code.
5. Implement in a separate branch/worktree or other reversible area when practical. Do not delete original front end until replacement equivalence and acceptance are established.
6. If new visual direction is undefined, show 2–3 actual HTML Style Demos and stop for choice; if concrete approved style exists, skip that choice.
7. Build app shell + one **real representative** Product Demo with existing contract compatibility; render, verify critical flows, run original audit Skills when installed; stop for user approval.
8. Migrate additional pages by module with acceptance and regression checks. Identify missing features explicitly. Final cutover/deletion requires explicit user consent.

## One-shot / delegated autonomy

An explicit "直接做完", "不用问我", "一镜到底" or equivalent may waive **approval stops**, not preservation, data/API safety, truthful skill execution reporting or QA. It is not permission for destructive deletion of an existing project.

## Reporting

At the top of a project-start response, state one route and why:
- `NEW_BUILD`
- `EXISTING_IMPROVE`
- `EXISTING_REDESIGN`
- `EXISTING_REBUILD`

Use `references/existing-project-audit.md` for existing-project evidence and report structure. Use `references/approval-checkpoints.md` for stop points, and `references/external-skill-protocol.md` for genuine original Skill execution.
