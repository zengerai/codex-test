---
name: product-ui
description: Route both new-product builds and existing-product UI work, including audit-first optimization, explicit visual redesign, and full frontend rebuild. Orchestrate design, visual HTML style comparison, staged user approval, implementation, and evidence-based review of real ToB and ToC product interfaces. Use for new SaaS/admin/workflow/data-heavy products and for optimizing, auditing, redesigning, or rebuilding existing frontend projects. For new products/full redesigns, first generate 2–3 actual, browser-previewable HTML/CSS Style Demos for user comparison (not only text descriptions), then validate one representative Product Demo before broad implementation unless the user explicitly requests autonomous one-shot execution. Coordinates original installed Skills: UI UX Pro Max for undefined visual direction, shadcn agent Skill when applicable, Hallmark audit for AI-slop findings, and Impeccable critique/audit. Verify original Skill instructions and report actual execution status instead of merely naming external Skills. Also use when the user explicitly asks to update or sync the product-ui skill. Do not use as the primary framework for landing pages, portfolios, company homepages, or marketing-first sites.
---

# Product UI Orchestrator

`product-ui` is the coordinator for real application interfaces. It owns product interaction decisions and routes work to companion skills when they are installed and relevant.

The goal is not merely attractive UI. A product screen succeeds when the intended user can complete the intended task quickly, correctly, repeatedly, and with low recovery cost.

## Scope

Use for:
- SaaS, admin, CRM, ERP, internal tools, operations consoles
- data-heavy products, analytics, monitoring, dashboards
- lists, tables, CRUD, record detail, workbenches
- forms, settings, approval/review flows, multi-step workflows
- consumer utilities, editors, small AI tools, account areas
- onboarding, search, filtering, batch operations, task queues
- mobile/web application surfaces

Do not use as the primary design framework for:
- landing pages
- portfolios
- company homepages
- campaign pages
- brand-only showcase sites

If a product contains both marketing and application surfaces, apply this skill only to the application surface.

## Priority order

Always preserve this order:
1. User task completion
2. Information hierarchy
3. Operational efficiency
4. Error prevention and recovery
5. Consistency with the existing product
6. Accessibility and responsive behavior
7. Visual polish

Never sacrifice a higher-priority item to improve a lower-priority item.

## Mandatory project lifecycle routing (V2.4)

**Before the visual exploration phases, choose one project entry route** by inspecting existing UI and explicit user intent. Read `references/project-entry-routing.md`.

| Route | Intent and starting point | Mandatory first behavior |
|---|---|---|
| `NEW_BUILD` | New product / scaffold with no established UI | Product structure → HTML A/B/C Style Demo choice if visual direction undefined → one real Product Demo → user approval → expand |
| `EXISTING_IMPROVE` | Existing UI to optimize, inspect, or remove AI feel | **READ-ONLY audit and P0/P1/P2 optimization plan; STOP for user approval before editing** → one pilot page → before/after review → STOP for pilot approval → expand |
| `EXISTING_REDESIGN` | User explicitly requests substantial **visual redesign** of an existing product | Inventory and current-state baseline; if new style unspecified, HTML A/B/C Style Demos → user choice → one real Product Demo → approval → staged rollout |
| `EXISTING_REBUILD` | User explicitly requests rebuilding/replacing an existing frontend (including new stack/repo) | Inventory screens/features/routes/API contracts; preserve vs replace matrix and migration/rollback plan → optional visual Style Demo → one real replacement Product Demo → approval → staged migration |

**Existing UI + ambiguous “优化” always routes `EXISTING_IMPROVE`, not redesign.** Existing code without `DESIGN.md` can still have an established visual system: infer it from source, tokens, components and rendered UI. An empty scaffold is not an established UI.

A **small, precise, single-component fix** is not a request for full-project read-only audit; scope inspection and implementation to that edit with proportional QA. An **explicit redesign** overrides the rule to preserve existing visual tokens, but never silently overrides product behavior. "重建" is not permission to delete source, break APIs, or skip regression checks.

Explicit autonomous/one-shot instructions can waive approval pauses, **not** preservation, backend/data safety, or honest Skill review. Unless explicit destructive removal is authorized, keep existing implementation recoverable.

**Routing is required even when the user simply says “用 product-ui 优化当前项目”.**

## Source-of-truth precedence

Before design work, inspect the project for persistent context.

Use this precedence:
1. `PRODUCT.md` — users, jobs, domain rules, workflow, behavior
2. explicit current user request — current task and accepted deviations
3. `DESIGN.md` — established visual system and design tokens
4. project components / implementation conventions
5. `product-ui` — product interaction patterns and routing
6. companion skills — specialized exploration, implementation, or review

Read `references/design-system-governance.md` when any of these sources exist or conflict. For `EXISTING_REDESIGN` and `EXISTING_REBUILD` with an explicit visual reset, treat the existing `DESIGN.md` as a baseline to preserve for comparison until the user approves its replacement.

## Companion-skill orchestration

Read `references/integrations.md` and **`references/external-skill-protocol.md`** before invoking any companion Skill.

### Mandatory original-skill execution protocol

For each relevant companion:
1. **Detect availability** from the active Codex Skills registry / installed original `SKILL.md`. Do not infer availability from a README mention or the product-ui instructions themselves.
2. **Read the installed original `SKILL.md`**, plus the original mode-specific reference files needed for this task. Do not copy external Skills' full prompts into product-ui.
3. **Invoke/follow the original Skill in its supported mode** and verify observable work: generated preview, component decisions, audit report, commands or screenshots. A phrase such as “use Hallmark” alone is not proof of dispatch.
4. **Record status** as executed, skipped-not-needed, unavailable, blocked, or failed. Report the meaningful evidence, not imaginary completion.
5. If unavailable, use product-ui's existing design/review workflow as an explicitly identified fallback when practical. Never claim a missing Skill ran.

The project using shadcn/ui **does not imply** a shadcn agent Skill is installed; check those separately. Do not install or auto-update third-party Skills without user permission.

### UI UX Pro Max
Use UI UX Pro Max when:
- this is a new product, explicit existing-product visual redesign, or genuinely new visual system, and
- `DESIGN.md` does not establish the visual direction, and
- visual/design-system exploration is materially useful.

For a new product or explicit full-product redesign with no accepted visual direction:
1. generate **2–3 materially different, product-appropriate visual directions**;
2. keep each compatible with the same product task, density, platform, and user context;
3. build an actual **HTML/CSS Style Demo Gallery** showing each direction with comparable sample application UI, the same product content, and meaningful visual differences;
4. render/verify the gallery when browser tools are available and provide viewable previews or actual screenshots; prose-only style comparisons do NOT fulfill this checkpoint;
5. recommend one direction with reasoning;
6. **pause for the user's visual selection** (A/B/C or a hybrid) before implementing the first real Product Demo;
7. after selection, proceed to the representative Product Demo Checkpoint rather than implementing the whole product.

Read `references/visual-style-demos.md` for Style Demo Gallery requirements.

Do not ask a vague open-ended “what style do you like?” question before professional shortlisting.

Skip this visual-direction checkpoint when:
- an applicable `DESIGN.md` already establishes the direction;
- the user already supplied a concrete style, reference product, screenshot, design file, or visual direction;
- the user explicitly delegates the choice (“你自己决定”, “choose for me”, “直接做完”, “one-shot”, “autopilot”, or equivalent).

Do not use UI UX Pro Max to casually redesign an established product.
If `DESIGN.md` exists and is applicable, it is the visual source of truth for `NEW_BUILD` extensions and `EXISTING_IMPROVE`. **An explicit `EXISTING_REDESIGN` / visual-reset `EXISTING_REBUILD` request can supersede it**, but only through the requested visual selection, pilot approval, and design-system update stages.

### shadcn
If the project uses shadcn/ui, has `components.json`, or the user explicitly requires shadcn:
- inspect existing project components first;
- if the independent **shadcn agent Skill** is installed, read its original `SKILL.md` and use its documented component workflow;
- otherwise use installed shadcn/ui components and docs normally, while recording that the **agent Skill** was unavailable;
- search/reuse/compose shadcn primitives before creating custom primitives;
- custom components may wrap or compose primitives when the product behavior requires it.

If the project does not use shadcn, follow its existing component system. Do not introduce shadcn solely because this skill mentions it.

### Hallmark — AI-slop audit only

For a substantial, rendered Product Demo or major new UI module, invoke the **independently installed Hallmark** in its **`audit`** mode when available. Read the installed Hallmark `SKILL.md` and its original `references/verbs/audit.md` plus required audit references.

**Hallmark audit must be read-only.** Produce ranked findings with evidence, severity, file/line locations where available, and corrections. Do not run its default design or `redesign` mode as part of an audit. After the audit, product-ui may separately implement validated corrections.

Preserve accepted `DESIGN.md`, ToB operational density, repeated table conventions, and user-approved direction. Mark inappropriate recommendations as exempted/adapted rather than blindly applying them. Read **`references/hallmark-audit.md`**.

### Impeccable
For substantial UI implementation or redesign, post-implementation review is part of the definition of done when Impeccable is available.

Read the **installed original Impeccable `SKILL.md` and mode guidance** first, then:
1. render and inspect the UI with realistic data;
2. run Impeccable `critique`;
3. fix material hierarchy, usability, consistency, and interaction issues;
4. run Impeccable `audit`;
5. fix material accessibility, responsive, state, and implementation issues.

Use Impeccable `polish` only after functionality, hierarchy, density, and consistency are correct. Polish is optional; critique and audit are the default QA stages.

If a named companion skill is unavailable, do not pretend it ran. Continue using `product-ui` and the project's existing tools, but record the missing or blocked dependency in the companion execution summary.

For substantial Product Demos: render/review → Hallmark read-only audit → product-ui fixes → Impeccable critique → fixes → Impeccable audit → fixes → ask for user demo approval.

## Approval checkpoint policy

Read `references/project-entry-routing.md` first. Read `references/approval-checkpoints.md` and `references/visual-style-demos.md` for new products, full-product redesigns, or large new product areas. Read `references/existing-project-audit.md` for existing-product optimization, baseline evidence, or rebuild safeguards.

**For `EXISTING_IMPROVE`, the first checkpoint is AUDIT REPORT APPROVAL (no edits yet), not a visual-style selection.** After the user selects improvements, change only one representative pilot page and stop for before/after approval before applying changes elsewhere.

The first checkpoint must show actual visual previews (HTML/CSS, with screenshots when available). Merely describing “Linear-like / Stripe-like / Notion-like” options in text is not sufficient.

ChatGPT's GPT-6 Intelligent UI may help users compare visual directions **in ChatGPT Chat**, but it is not a native callable Codex dependency. Read `references/intelligent-ui-bridge.md` only when cross-product comparison or handoff is requested.

Default staged validation for new multi-page work:
1. **Visual Style Demo Gallery** — shortlist 2–3 product-appropriate directions, implement the same representative screen in actual HTML/CSS for each, render/review the previews, and let the user choose.
2. **Representative Product Demo Checkpoint** — after style choice, build only the real app shell + one representative core page/flow, render with realistic data/states, run available Hallmark/Impeccable reviews and material fixes, then pause for user review.
3. **Expansion** — after Product Demo approval, finalize `DESIGN.md` and expand in coherent batches.
4. **Expansion Checkpoints** — pause again only for materially new reusable patterns, major design-system changes, or large module boundaries where feedback can prevent costly rework.
5. **Final QA** — rendered review plus Hallmark audit and Impeccable critique/audit for substantial changes when available, with an honest execution-status summary.

Do **not** ask the user to approve every routine page. The purpose is to validate high-cost decisions early without creating approval fatigue.

Skip approval pauses when the user explicitly requests autonomous/one-shot execution. Existing mature products with an applicable `DESIGN.md` normally do not need **new-build visual style checkpoints** for routine pages. Do not apply the new-build gallery/demo path to existing optimization without an explicit redesign request.

## Main workflow

### Phase 0 — Inspect and route before designing

**First decide `NEW_BUILD`, `EXISTING_IMPROVE`, `EXISTING_REDESIGN`, or `EXISTING_REBUILD`** by applying `references/project-entry-routing.md`, and report the selected route briefly.

Inspect enough of the existing project to answer:
- What product is this?
- Who is the primary user?
- What existing navigation/layout/component conventions exist?
- Does `PRODUCT.md` exist?
- Does `DESIGN.md` exist? If absent, do established visual conventions exist in code/screenshots?
- Is this an audit/optimization, explicit visual redesign, or replacement frontend request?
- Are existing API, routing, auth and workflow contracts in scope for preservation?
- Is shadcn/ui installed (`components.json`, shadcn components, or explicit project docs)?
- Are the original UI UX Pro Max, shadcn agent Skill, Hallmark, and Impeccable Skill installations available and readable?

Do not start by inventing a new visual language.

**When route is `EXISTING_IMPROVE`: perform `references/existing-project-audit.md` first as a strictly read-only inventory and UI review.** Produce baseline evidence and P0/P1/P2 findings; include original Hallmark/Impeccable review only in supported **non-mutating report-only modes**, record genuine execution status, and **STOP for user approval before any source edit**. Do not fall through to Phases 1–10 as though this were a new project.

**When route is `EXISTING_REDESIGN` or `EXISTING_REBUILD`: inspect actual screens, features and behavioral/API contracts first; protect original working code, then use the style and pilot checkpoints where applicable.**

### Phase 1 — Classify product and surface

Identify:
- ToB or ToC
- primary user
- usage frequency
- task criticality
- information density
- device context
- single-user or collaborative
- read-heavy, edit-heavy, review-heavy, or action-heavy

Classify the page:
- workbench
- list/table
- detail
- form
- workflow/review
- dashboard
- search/results
- settings
- onboarding
- account/billing
- mobile utility

Read `references/product-type-routing.md`.

### Phase 2 — Define the job before the layout

Write internally or explicitly when useful:

`The user comes here to ______ and needs to know ______ before acting.`

Also identify:
- primary action
- frequent secondary actions
- decision-critical information
- high-risk/destructive actions
- what must remain visible while the user works

If the job is unclear, derive the most likely job from the product context before choosing layout.

### Phase 3 — Choose interaction model and density

Read:
- `references/information-density.md`
- `references/navigation.md`

Defaults:
- repeated ToB operations → compact, scan-friendly, stable layouts;
- comparison/batch work → table/list-first;
- ToC utilities → short path to first value and progressive disclosure;
- analytical surfaces → questions and decisions first, charts second.

Avoid false spaciousness, excessive cardification, and marketing-page composition inside operational software.

### Phase 4 — Load only relevant product references

Load only what the current surface needs:
- Lists / records / operations → `references/data-table.md`
- Forms → `references/forms.md`
- Multi-step / approvals / processing → `references/workflow.md`
- Search / filters → `references/filters-search.md`
- Batch actions → `references/bulk-actions.md`
- Dashboards → `references/dashboard.md`
- Settings → `references/settings.md`
- Onboarding → `references/onboarding.md`
- Mobile adaptation → `references/mobile-adaptation.md`
- App states → `references/states.md`
- Accessibility → `references/accessibility.md`

Do not load every reference by default.

### Phase 5 — Establish or preserve visual direction

If route is `EXISTING_IMPROVE` or the existing accepted visual direction is being retained:
- preserve the existing system, whether documented in `DESIGN.md` or inferred from the UI;
- do not ask UI UX Pro Max to generate a replacement visual system;
- extend existing tokens/patterns conservatively when a gap exists.

If route is `EXISTING_REDESIGN` or `EXISTING_REBUILD` **and the user explicitly requests visual replacement**:
- preserve the original `DESIGN.md` and UI as baseline/current-state evidence, not as a constraint on the newly approved style;
- if no new style was specified, generate and present 2–3 previewable HTML/CSS Style Demos using actual representative product content;
- stop for user visual selection before implementing the replacement Product Demo.

If visual direction is genuinely undefined:
- use UI UX Pro Max if available to shortlist 2–3 materially different, product-appropriate directions;
- build a **previewable HTML/CSS Style Demo Gallery** with actual rendered application UI for all options (same content and semantic structure where practical, distinct design language);
- prefer `design-exploration/style-comparison.html`, a working A/B/C switcher or side-by-side layout;
- render and screenshot real browser previews when tools allow; otherwise provide the HTML file and an honest note on how to inspect it;
- recommend one direction with reasoning, then **STOP and ask the user to choose** unless the user explicitly delegated the choice;
- do not accept unrendered code, bare token lists, or text-only descriptions as the completed visual checkpoint.

Read `references/visual-style-demos.md`.

If the user already supplied a clear visual reference/style, treat that as the selected direction and skip the style shortlist.

After a direction is selected, implement the representative **Product Demo** and pause again before broad implementation. The Style Demo Gallery is a fast visual comparison; the Product Demo is functional application code.

### Phase 6 — Define states before implementation

For each major screen/interaction, account for relevant states:
- normal
- loading
- empty
- error
- partial failure
- disabled
- success
- permission denied
- no results
- offline/retry when relevant

Read `references/states.md`.

### Phase 7 — Implement through the project's component system

If shadcn/ui is present, use its components and inspect the existing project implementations. Use the **separate original shadcn agent Skill only if it is installed and readable**, and record if it was not.
Otherwise use the project's established component library and primitives.

Before creating a new primitive:
1. inspect existing project components;
2. inspect available library primitives;
3. prefer composition;
4. create a custom primitive only for a real behavior/design-system gap.

Do not introduce a new UI library just for one page without an explicit architectural reason.

#### Approved pilot for existing-project optimization

For `EXISTING_IMPROVE`, **do not implement anything during the initial read-only audit**. After the user confirms issues and pilot scope:
1. change **one representative page or contained shared component only**;
2. preserve business behavior, routes, API/data contracts and accepted visual direction;
3. render a true before/after comparison (real screenshots when available; never fabricate);
4. run proportional source/render QA, read-only Hallmark audit and original Impeccable stages when available;
5. **STOP for user pilot approval before extending changes to additional page families**.

For `EXISTING_REBUILD`, use an isolated branch/worktree or reversible area when practical, preserve the existing front end, and check screen/feature/API parity before migration. No destructive cutover without explicit permission.

#### Representative Demo Checkpoint

For `NEW_BUILD`, `EXISTING_REDESIGN`, or `EXISTING_REBUILD`, the first substantial implementation pass should normally be **only**:
- the application shell/navigation needed to understand the product, plus
- one representative core page, or one short representative flow when a single page is insufficient.

Choose the demo surface by product importance and reusable-pattern coverage, not by ease of implementation.

The demo should exercise the product's important visual/interaction decisions, such as:
- density and spacing;
- navigation;
- typography/surface hierarchy;
- table/list/form patterns;
- filters/actions;
- important states;
- responsive behavior where relevant.

Use realistic data and render/review the demo. **Before user approval**, complete the applicable original Hallmark audit and Impeccable critique/audit stages from Phases 8–9, with any justified fixes.

Then **pause and ask the user to confirm or request changes before applying the pattern broadly**. Report briefly which original Skills actually ran, which were unavailable, and which evidence was observed.

Do not implement the entire product before this checkpoint unless:
- the user explicitly requested autonomous/one-shot execution; or
- this is an established product with mature visual/component rules and only routine extension work.

After demo approval:
- consolidate accepted visual and interaction decisions into `DESIGN.md`;
- expand in coherent batches;
- do not ask after every routine page;
- pause again only when a materially new reusable pattern, major design-system change, or high-cost module boundary appears.

### Phase 8 — Render and verify

A UI is not complete because the code compiles.

Read `references/browser-review.md` and `references/review-checklist.md`.

Review with:
- realistic content and record counts;
- long labels/values;
- empty/no-results/error/loading states;
- narrow and common desktop viewport sizes appropriate to the product;
- real interaction paths, not only static screenshots.

Use browser/computer-use tooling when available. If unavailable, use the strongest rendered/screenshot/test workflow available and do not claim visual verification that did not occur.

### Phase 9 — Hallmark anti-slop review and Impeccable QA

For a substantial Product Demo / UI redesign or when explicitly requested:

**Important: `EXISTING_IMPROVE` baseline audit is non-mutating.** Run original audit/reporting guidance only where read-only execution is supported. Do not perform fixes until user authorizes the pilot; never claim a Skill ran when its original mode was unavailable.

1. **Hallmark `audit`** if installed: read its original Skill + audit references, inspect concrete sources/rendered evidence, emit the original ranked **read-only** anti-slop report; do not edit while auditing.
2. product-ui evaluates Hallmark findings against product tasks, accepted visual direction, and appropriate ToB density; fixes validated findings separately.
3. **Impeccable `critique`** if installed: read its original Skill + critique guidance, run the genuine mode, fix material findings.
4. **Impeccable `audit`** if installed: read its original Skill + audit guidance, run the genuine mode, fix material findings.
5. Optional `polish` only when justified and not in place of audit/critique.
6. Report real status/evidence for each relevant companion, including unavailable/blocked/failed ones. Never claim review occurred when original instructions were not loaded or no audit was performed.

Avoid redundant full-site reviews for a small isolated change. For each approval checkpoint, complete relevant reviews **before** asking for the next user go-ahead.

Read `references/external-skill-protocol.md` and `references/hallmark-audit.md`.

### Phase 10 — Completion check

Do not call substantial UI work complete until relevant items are true:
- primary task is obvious;
- information hierarchy matches the task;
- repeated operations are efficient;
- important states exist;
- project design language is preserved;
- responsive behavior was inspected;
- accessibility basics were checked;
- rendered UI was reviewed;
- material Hallmark AI-slop findings were evaluated (accepted/adapted/exempted) when Hallmark actually ran;
- material Impeccable critique/audit findings were addressed when those modes actually ran;
- original-skill use was reported honestly using observed status and evidence.

## Default behavior for ToB

- Prefer table/list when users compare, scan, sort, filter, or batch-process records.
- Keep frequent filters and actions discoverable.
- Show status, ownership, timestamps, and next action when operationally relevant.
- Support keyboard efficiency when repetition justifies it.
- Keep primary actions near the objects they affect.
- Preserve filter, selection, scroll, and review context intentionally.
- Avoid excessive cards, giant headings, hero whitespace, and decorative dashboard KPIs.
- Optimize for the 100th daily use, not only the first impression.

## Default behavior for ToC

- Keep the main job obvious.
- Minimize setup before first value.
- Use progressive disclosure for advanced controls.
- Hide implementation concepts users do not need.
- Make destructive/irreversible actions explicit.
- Provide direct feedback and useful previews.
- Preserve familiar patterns unless novelty materially improves the job.

## Anti-patterns

Avoid:
- turning every dataset into cards
- hiding frequent actions in unlabeled overflow menus
- giant page titles in operational screens
- decorative gradients without product meaning
- meaningless KPI-card rows
- charts chosen for appearance rather than analytical task
- modal chains
- long forms organized by database schema
- empty states that only say “No data”
- success feedback too transient to confirm consequential changes
- desktop tables merely shrunk onto mobile
- filters that reset or persist unpredictably
- irreversible bulk actions without confirmation/recovery
- introducing a new visual system despite an applicable `DESIGN.md`
- hand-rolling complex primitives that the project's component system already provides
- declaring UI finished without rendered review

## Output for design-first tasks

Before implementation, provide or establish:
1. User and primary task
2. Page/surface type
3. Information hierarchy
4. Main layout regions
5. Primary and secondary actions
6. Density decision
7. Component-pattern choices
8. Important states
9. Responsive/mobile behavior
10. Risks and edge cases
11. Visual-system source (`DESIGN.md`, existing product, or new exploration)
12. Implementation-system source (shadcn or project component system)

Then follow the **chosen route**:
- `NEW_BUILD`: for a new multi-page product, deliver **visual HTML/CSS Style Demos** if visual direction undefined; stop for choice;
- `EXISTING_IMPROVE`: inventory and audit **read-only** → report P0/P1/P2 and pilot recommendation → STOP for user plan approval → one pilot page → before/after comparison → STOP for user pilot approval → approved page-family rollout; no visual-direction shortlist by default;
- `EXISTING_REDESIGN`: baseline existing product, visually explore only when direction truly changing → visual choice → one Product Demo → user approval → gradual UI replacement;
- `EXISTING_REBUILD`: inventory/preservation/migration plan and replacement boundaries → visual checkpoint if needed → one compatible Product Demo → user approval → staged cutover, not uncontrolled deletion;
- after direction approval, implement only the representative **Product Demo**, run available genuine Hallmark/Impeccable reviews, and stop for user review;
- after demo approval, expand the product in coherent batches;
- skip these pauses only when the user explicitly requests autonomous/one-shot execution or the work is routine extension of an established design system.

Do not interpret “continue” after style selection as permission to implement the entire product before the demo checkpoint.

## Self-update

When the user explicitly asks to update/sync/upgrade `product-ui` itself:
1. locate the installed `product-ui` directory;
2. if it is a Git checkout (or symlink into one), run `scripts/update.sh` from the skill root;
3. update only from the currently configured Git remote and branch;
4. use fast-forward-only behavior;
5. never discard uncommitted local changes;
6. report previous version, new version, and notable changelog entries;
7. if the installed copy is not Git-backed, explain that one-time Git installation is required rather than overwriting files silently.

Do not perform unrelated UI redesign during a skill-update request unless the user asks for both.
