# Changelog

All notable changes to `product-ui` are recorded here.

## 3.0.0 — 2026-10-10

### Added
- Style-neutral Design Provider Architecture, provider selection/routing, written v1 handoff and compatibility checks.
- Provider capability manifest example, handoff example, manifest validator, explicit style QA and execution evidence rules.
- V3.0 evaluation scenarios for Apple/Fluent, missing providers, Vue compatibility, style migration and read-only audits.

### Changed
- product-ui retains product task IA, interactions, lifecycle and approvals. Selected Providers supply style-specific visual tokens/components/motion.
- No compulsory Apple/Luma/Rhea/Fluent palette, component system, Motion curve, or React migration.
- Kept v2.4 four project routes, read-only existing app audit, rendered Style Demo and Product Demo checkpoints, original Hallmark/Impeccable/shadcn Skill safety checks.
- No Provider is required; original Apple Skill v2.0 refactor remains a separate future step.

## 2.4.0 — 2026-10-08

### Added
- **Project lifecycle routing**: distinguish `NEW_BUILD`, `EXISTING_IMPROVE`, `EXISTING_REDESIGN`, and `EXISTING_REBUILD` before visual exploration.
- `references/project-entry-routing.md`: starting-point and intent detection, default existing-product optimization behavior, explicit visual/replacement routes, preservation rules, one-shot limits and approval checkpoints.
- `references/existing-project-audit.md`: read-only current-state inventory and UI quality report, P0/P1/P2 issue rubric, pilot selection, before/after evidence and existing-app regression protection.
- New **existing-project approval gates**: audit report approval (before any edits) → one representative pilot improvement → user before/after approval → staged rollout.
- Safe replacement checklist for rebuilding front ends: routes/features/permissions/API contracts, preserve/replace/deprecate matrix, reversible rollout/rollback and explicit consent before destructive cutover.
- Evaluation cases 35–48 covering new scaffold vs existing UI, no DESIGN.md, user-specified redesign, framework migration, small targeted edits, audit-only behavior and default route.

### Changed
- Existing project + ambiguous "优化" now **defaults to `EXISTING_IMPROVE`**: inspect and report first, **do not modify source** during the initial audit, and do not automatically invoke UI UX Pro Max to choose new styles.
- An existing visual system remains valid even without `DESIGN.md`; infer its conventions from CSS, components and rendered screens.
- Explicit existing-product **redesign** can supersede previous `DESIGN.md` only through visual choice and Product Demo approval; existing functionality and contracts are preserved.
- Explicit **frontend rebuild** is treated as a preservation/migration task rather than a blank new project, even if the replacement is created in a new repository.
- New build and full visual redesign retain the V2.2 browser-previewable Style Demo Gallery and V2.3 Hallmark / Impeccable original-Skill QA.
- Small, precisely requested existing-product changes bypass unnecessary full-project audit/approval ceremonies.

## 2.3.0 — 2026-10-08

### Added
- **Hallmark original Skill integration**: audit-only, read-only AI-slop inspection after rendering a substantive Product Demo and before user Demo approval.
- `references/hallmark-audit.md`: original Hallmark `SKILL.md` / `references/verbs/audit.md` loading, evidence-ranked findings, product-ui acceptance/adaptation/exemption and separation of audit from code fixes.
- **Unified original-Skill invocation contract** for UI UX Pro Max, shadcn agent Skill, Hallmark, and Impeccable.
- `references/external-skill-protocol.md`: installation detection, mode-specific original file loading, execution evidence, fallback rules, and concise status reporting (executed / skipped-not-needed / unavailable / blocked / failed).
- 10 additional EVALS covering Hallmark audit behavior, shadcn library vs agent Skill, original Impeccable/Pro Max loading, missing permissions, and evidence reporting.

### Changed
- No external Skill's full prompt catalog is copied into product-ui; upstream capabilities stay independently installed and upgradeable.
- **shadcn/ui is explicitly distinguished from shadcn agent Skill**; both are checked independently.
- Impeccable `critique` and `audit` are now required to load the installed original mode guidance before claiming successful execution.
- Substantial Product Demo review order is now: render → Hallmark read-only audit → product-ui justified fixes → Impeccable critique → fixes → Impeccable audit → fixes → user Demo checkpoint.
- Product UI design rules and existing V2.2 HTML Style Demo, user visual choice, Product Demo approval, and `DESIGN.md` governance remain intact.

## 2.2.0 — 2026-10-08

### Added
- **Visual Style Demo Gallery** as the default output of the Visual Direction Checkpoint for new products/full UI redesigns.
- Real, browser-previewable HTML/CSS comparisons (normally `design-exploration/style-comparison.html`) for 2–3 materially different visual languages using the same representative product content.
- Guidance for rendered screenshots, working style selectors, realistic sample content, and honest reporting when browser capture is unavailable.
- `references/visual-style-demos.md` defining the gallery's deliverable, fair comparison rules, quality bar, and stop-for-selection behavior.
- `references/intelligent-ui-bridge.md` explaining optional ChatGPT GPT-6 Intelligent UI comparison and a portable decision handoff without assuming native Codex integration.
- Evaluation cases covering HTML previews, style differentiation, genuine rendering, hybrid choices, and Intelligent UI capability limits.

### Changed
- Text-only A/B/C descriptions no longer satisfy a required visual-direction checkpoint.
- Style Demo and Product Demo are explicitly separate approvals: the former validates aesthetic direction; the latter validates one real functional product page.
- The user selects the visual direction **after seeing actual previewable UI**; only then may Codex build the representative Product Demo.
- Existing `DESIGN.md`, concrete user reference, and explicit one-shot/autonomous overrides still skip unnecessary approvals.

## 2.1.0 — 2026-10-08

### Added
- **Visual Direction Checkpoint** for new products and explicit full-product redesigns with no accepted visual direction.
- UI UX Pro Max must shortlist **2–3 materially different, product-appropriate visual directions**, recommend one, then pause for user selection before visual implementation.
- **Demo Checkpoint** after visual direction selection: build only the application shell plus one representative core page (or one representative flow when a single page is insufficient), render it with realistic data/states, and pause for user review before scaling the design across the product.
- **Expansion Checkpoints** only when later work introduces a materially new pattern, major design-system deviation, or a large batch/module boundary—avoiding page-by-page approval fatigue.
- Explicit checkpoint skip rules when the user has already provided a clear visual reference, an applicable `DESIGN.md` exists, or the user explicitly requests autonomous/one-shot execution.
- Evaluation cases for style selection, representative demo approval, existing visual references, delegated design decisions, and batch expansion.

### Changed
- Subjective visual style is now a user-owned 0→1 decision by default; product interaction/IA decisions remain agent-owned unless materially ambiguous.
- A new multi-page product should no longer be implemented end-to-end before the user sees the first representative screen.
- UI UX Pro Max is now an exploration/shortlisting tool before approval, not an autonomous final-style selector.
- Accepted visual direction and demo learnings should be consolidated into `DESIGN.md` before broad implementation.

## 2.0.0 — 2026-10-08

### Added
- Orchestration workflow for `UI UX Pro Max`, `shadcn`, and `Impeccable`.
- Dependency detection rules so companion skills are invoked only when useful.
- `DESIGN.md` governance: an established design system wins over visual re-exploration.
- Required post-implementation QA loop: render/browser review → Impeccable critique → fixes → Impeccable audit → fixes.
- Optional Impeccable polish stage after hierarchy, usability, and correctness are already sound.
- Self-update workflow for Git-installed copies of this skill.
- `references/integrations.md` for companion-skill routing.
- `references/design-system-governance.md` for PRODUCT/DESIGN/AGENTS precedence.
- `references/browser-review.md` for rendered UI verification.
- `scripts/install.sh` for symlink-based user installation.
- `scripts/update.sh` for safe fast-forward Git updates.

### Changed
- `product-ui` is now the product-UI orchestrator, not merely a design-pattern reference.
- shadcn usage is now an explicit implementation path when the project uses shadcn/ui.
- visual exploration is separated from established visual governance.
- completion criteria now require realistic states and rendered verification, not just compiling code.

### Preserved
- Table/list-first defaults for repeated ToB operations.
- Progressive disclosure: only load reference files relevant to the current surface.
- Explicit exclusion of landing pages, portfolios, company homepages, and marketing-first surfaces.

## 1.0.0 — 2026-10-02
- Initial product UI skill with ToB/ToC routing and product-pattern references.
