# Changelog

All notable changes to `product-ui` are recorded here.

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
