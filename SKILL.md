---
name: product-ui
description: Orchestrate the design, visual HTML style comparison, staged approval, implementation, and review of real ToB and ToC product interfaces. Use for SaaS, admin, workflow, data-heavy systems, dashboards, settings, CRUD, utilities, and app surfaces. For new products/full redesigns, first generate 2–3 actual, browser-previewable HTML/CSS Style Demos for user comparison (not only text descriptions), then validate one representative Product Demo before broad implementation unless the user explicitly requests autonomous one-shot execution. Coordinates product-UI reasoning with UI UX Pro Max for undefined visual direction, shadcn for implementation when present, and Impeccable for critique/audit after implementation. Also use when the user explicitly asks to update or sync the product-ui skill. Do not use as the primary framework for landing pages, portfolios, company homepages, or marketing-first sites.
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

## Source-of-truth precedence

Before design work, inspect the project for persistent context.

Use this precedence:
1. `PRODUCT.md` — users, jobs, domain rules, workflow, behavior
2. explicit current user request — current task and accepted deviations
3. `DESIGN.md` — established visual system and design tokens
4. project components / implementation conventions
5. `product-ui` — product interaction patterns and routing
6. companion skills — specialized exploration, implementation, or review

Read `references/design-system-governance.md` when any of these sources exist or conflict.

## Companion-skill orchestration

Read `references/integrations.md` before invoking companion skills.

### UI UX Pro Max
Use UI UX Pro Max when:
- this is a new product or genuinely new visual system, and
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
If `DESIGN.md` exists and is applicable, it is the visual source of truth unless the user explicitly asks for a redesign.

### shadcn
If the project uses shadcn/ui, has `components.json`, or the user explicitly requires shadcn:
- use the shadcn skill for implementation decisions;
- inspect existing project components first;
- search/reuse/compose shadcn primitives before creating custom primitives;
- custom components may wrap or compose primitives when the product behavior requires it.

If the project does not use shadcn, follow its existing component system. Do not introduce shadcn solely because this skill mentions it.

### Impeccable
For substantial UI implementation or redesign, post-implementation review is part of the definition of done when Impeccable is available:
1. render and inspect the UI with realistic data;
2. run Impeccable `critique`;
3. fix material hierarchy, usability, consistency, and interaction issues;
4. run Impeccable `audit`;
5. fix material accessibility, responsive, state, and implementation issues.

Use Impeccable `polish` only after functionality, hierarchy, density, and consistency are correct. Polish is optional; critique and audit are the default QA stages.

If a named companion skill is unavailable, do not pretend it ran. Continue using `product-ui` and the project's existing tools, and state the missing dependency only if it materially affects the result.

## Approval checkpoint policy

Read `references/approval-checkpoints.md` and `references/visual-style-demos.md` for new products, full-product redesigns, or large new product areas.

The first checkpoint must show actual visual previews (HTML/CSS, with screenshots when available). Merely describing “Linear-like / Stripe-like / Notion-like” options in text is not sufficient.

ChatGPT's GPT-6 Intelligent UI may help users compare visual directions **in ChatGPT Chat**, but it is not a native callable Codex dependency. Read `references/intelligent-ui-bridge.md` only when cross-product comparison or handoff is requested.

Default staged validation for new multi-page work:
1. **Visual Style Demo Gallery** — shortlist 2–3 product-appropriate directions, implement the same representative screen in actual HTML/CSS for each, render/review the previews, and let the user choose.
2. **Representative Product Demo Checkpoint** — after style choice, build only the real app shell + one representative core page/flow, render with realistic data/states, then pause for user review.
3. **Expansion** — after Product Demo approval, finalize `DESIGN.md` and expand in coherent batches.
4. **Expansion Checkpoints** — pause again only for materially new reusable patterns, major design-system changes, or large module boundaries where feedback can prevent costly rework.
5. **Final QA** — rendered review plus Impeccable critique/audit when available.

Do **not** ask the user to approve every routine page. The purpose is to validate high-cost decisions early without creating approval fatigue.

Skip approval pauses when the user explicitly requests autonomous/one-shot execution. Existing mature products with an applicable `DESIGN.md` normally do not need these checkpoints for routine pages.

## Main workflow

### Phase 0 — Inspect before designing

Inspect enough of the existing project to answer:
- What product is this?
- Who is the primary user?
- What existing navigation/layout/component conventions exist?
- Does `PRODUCT.md` exist?
- Does `DESIGN.md` exist?
- Is shadcn/ui installed (`components.json`, shadcn components, or explicit project docs)?
- Are UI UX Pro Max and Impeccable available?

Do not start by inventing a new visual language.

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

If an applicable `DESIGN.md` exists:
- follow it;
- do not ask UI UX Pro Max to generate a replacement visual system;
- extend existing tokens/patterns conservatively when a gap exists.

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

If shadcn is present, use the shadcn skill and project components.
Otherwise use the project's established component library and primitives.

Before creating a new primitive:
1. inspect existing project components;
2. inspect available library primitives;
3. prefer composition;
4. create a custom primitive only for a real behavior/design-system gap.

Do not introduce a new UI library just for one page without an explicit architectural reason.

#### Representative Demo Checkpoint

For a new multi-page product or full-product redesign, the first implementation pass should normally be **only**:
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

Use realistic data and render/review the demo.

Then **pause and ask the user to confirm or request changes before applying the pattern broadly**.

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

### Phase 9 — Critique and audit

When Impeccable is available and the change is substantial:
- run critique;
- fix material findings;
- run audit;
- fix material findings;
- optionally polish when additional visual refinement is justified.

Do not run polish as a substitute for product reasoning or usability fixes.

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
- material critique/audit findings were addressed when those tools are available.

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

Then follow staged implementation:
- for a new multi-page product/full redesign, deliver **visual HTML/CSS Style Demos**, not only a written style menu; stop first for visual-direction choice when applicable;
- after direction approval, implement only the representative **Product Demo** and stop for review;
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
