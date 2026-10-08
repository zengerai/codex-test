# Changelog

All notable changes to `product-ui` are recorded here.

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
