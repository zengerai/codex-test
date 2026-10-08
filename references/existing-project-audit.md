# Existing Project UI Audit & Pilot — V2.4

Use this reference for `EXISTING_IMPROVE`, as a baseline for `EXISTING_REDESIGN`, and as a preservation inventory for `EXISTING_REBUILD`.

## Phase 1 — Read-only baseline, no code changes

Inspect:
- technical stack, frontend root(s), build and run commands, existing tests;
- page/route list and page families (workbench/list/detail/form/dashboard/settings/editor);
- repeated/shared components, shadcn/ui **library** vs independently installed **shadcn agent Skill**;
- navigation, filters, search, batch operations, modals, shortcuts, mobile behavior;
- design tokens, CSS variables, typography, density, existing `DESIGN.md`, screenshots;
- loading, empty, no-results, error, permission and success states;
- API surface, backend data contracts, authorization/roles, critical workflow assumptions;
- a representative screenshot set for actual rendered interfaces, if a browser is available.

**Existing conventions count as a design system even without a file named `DESIGN.md`.** In that case infer a **current-state design inventory**; do not immediately run UI UX Pro Max and invent a new brand.

Do not:
- modify files, reformat the project, reinstall dependencies or launch destructive scripts while reporting the baseline;
- silently fix design issues during the audit;
- claim screenshots were inspected when only source code was inspected;
- approve style changes on behalf of the user.

## Original Skill audit modes during read-only stage

When available:
1. **Hallmark**: read installed original `SKILL.md` and audit references; run **audit only**; record ranked AI-slop findings with source/render evidence; zero code changes.
2. **Impeccable**: load installed original `SKILL.md` and critique/audit references. For this read-only baseline, **perform report-only inspection** without applying suggested fixes. If the original mode cannot run without writing, use its documented non-mutating inspection path or mark the mode **blocked/skipped**; never claim full original execution without performing it.
3. product-ui: analyze task efficiency, visual design consistency, hierarchy, navigation, information density, states, and product-specific workflow risks.
4. If a companion is missing, label unavailable and use an explicitly labeled product-ui fallback review. No fabricated audit pass.

For existing-project optimization, the audit stage is strictly read-only even though the post-implementation V2.3 QA stages normally include corrective edits.

## Issue prioritization

- **P0**: essential user workflow blocked, dangerous accidental action, unrecoverable task failure, or major accessibility/navigation defect affecting primary use.
- **P1**: material friction repeated in core workflow, systematic visual/information hierarchy problem, important inconsistent component/state, genuine high-impact AI-slop issue.
- **P2**: polish and consistency opportunities, less common edge cases, minor copy/alignment/visual refinements.

Do not label every conventional UI pattern “AI 味”. Relevant product constraints and intent determine whether a pattern is harmful.

For each finding record:
- page / component / route;
- current behavior / observation;
- source or render evidence (or explicit uncertainty);
- effect on user task;
- severity P0/P1/P2;
- proposed correction and risk;
- reusability / other affected pages;
- estimated implementation breadth (S/M/L qualitative only, not a time promise).

## Default report format

```md
# Existing UI Quality Audit
Mode: EXISTING_IMPROVE
Source state: current branch / commit (if known)
Code modifications during audit: none
Visual evidence: browser screenshots available / source-only review

## Project inventory
- Product and target users:
- Frontend stack and UI libraries:
- Screen families and representative workflows:
- Existing visual conventions:
- `PRODUCT.md` / `DESIGN.md` status:
- Behavior / API constraints:

## Findings by priority
| Priority | Page/component | Problem | Evidence | Impact | Proposed improvement | Regression risk |
|---|---|---|---|---|---|---|

## Current visual direction
- Preserve:
- Normalize:
- Avoid changing:

## Pilot recommendation
- Page/component:
- Why it has the highest representative value:
- Scope of safe edits:
- Unchanged functionality/contracts:
- Verification plan:
- Before/after proof:

## External Skills
| Skill/mode | Status | Original Skill loaded? | Evidence or blocker |
|---|---|---|---|

## Approval gate
STOP: user reviews audit and selects priorities/pilot. No source changes yet.
```

If user requested only a single page audit, scope the report to that page instead of inventorying the entire application.

## Phase 2 — Approved pilot (after user explicitly approves)

1. Preserve a baseline branch/commit/screenshot when possible.
2. Prefer edits limited to **one representative page or one contained shared component**; avoid refactoring unrelated files.
3. Retain routes, data/API contracts, validations, authorization, feature behavior and important user workflows.
4. Where feasible, use equivalent data/content for before/after comparison.
5. Render and inspect actual page(s), including responsive and key states.
6. Run applicable Hallmark **read-only** audit, then separately fix grounded issues; run genuine Impeccable critique/audit with fixes, when installed and executable.
7. **STOP** for user approval of the pilot before replicating across other pages.
8. After user approval, consolidate accepted design rules into `DESIGN.md` and proceed by grouped page families.

## Redesign or rebuild differences

- For `EXISTING_REDESIGN`, baseline evidence identifies **what is intentional/valuable to preserve**, but the original visual tokens can be superseded **after user approves new Style Demo direction**.
- For `EXISTING_REBUILD`, baseline additionally requires a **feature/route/API equivalence matrix, migration path and rollback strategy**. Never destructively overwrite or delete the original implementation without explicit permission.
- Do not treat an existing product as a blank new product simply because the user said "用新技术重写前端".
