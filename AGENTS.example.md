# Product UI Agent Rules

This repository is a product application, not a marketing website.

## Priorities

1. User task completion
2. Information hierarchy
3. Operational efficiency
4. Error prevention and recovery
5. Consistency with the existing product
6. Accessibility and responsive behavior
7. Visual polish

## Persistent context

- `PRODUCT.md` is the source of truth for users, jobs, workflows, roles, and domain behavior.
- `DESIGN.md` is the source of truth for accepted visual design and UI conventions.
- Do not create a second design language for one page.

## Entry mode (mandatory)

Before UI work choose:
- `NEW_BUILD`: greenfield; visual A/B/C HTML Style Demos when no accepted direction; one Product Demo; user approval before expanding.
- `EXISTING_IMPROVE`: **default for existing product + “优化”**; read-only audit with P0/P1/P2 issues and one pilot recommendation; **stop for user approval before edits**; then pilot with before/after comparison; stop for approval before broad rollout.
- `EXISTING_REDESIGN`: explicit visual overhaul; baseline existing UI/behavior and preserve contracts; new Style Demo choices when visual reset unspecified; one approved Product Demo.
- `EXISTING_REBUILD`: explicit frontend replacement; map screens/features/routes/data/API contracts and migration/rollback; reversible new implementation; no destructive cutover without user authorization.

Existing visual conventions remain binding for optimization even without `DESIGN.md`. A small isolated edit should use proportionate inspection rather than triggering whole-project audit. Follow `references/project-entry-routing.md` and `references/existing-project-audit.md`.

## Skill workflow

Use `product-ui` for application UI design and implementation.

When route is `NEW_BUILD` or **explicit** `EXISTING_REDESIGN`/visual-reset `EXISTING_REBUILD`, and the requested visual direction is undefined, use UI UX Pro Max if available to propose 2–3 materially different, product-appropriate directions. **Build actual browser-previewable HTML/CSS Style Demos** for A/B/C using the same representative product screen/data. Prefer `design-exploration/style-comparison.html` with a working switcher or side-by-side view. Provide actual rendered previews/screenshots when tooling is available, briefly recommend one, and **pause for the user's visual selection**. A purely text-based style menu is not sufficient.

For a new multi-page product or full-product redesign, after the user chooses among Style Demos, build only the real application shell plus one representative core Product Demo page (or one short representative flow when necessary). Render it with realistic data/states and pause for user review before scaling the design across the product.

After demo approval, persist accepted visual and interaction rules into `DESIGN.md` and expand in coherent batches. Do not ask for approval after every routine page; pause again only for materially new patterns, major design-system deviations, or large module boundaries.

Skip these checkpoints when the user supplied a clear visual reference or explicitly requests autonomous/one-shot execution. Routine product interaction/IA decisions do not require user approval by default.

If the project uses shadcn/ui, use the shadcn Skill and existing project components before creating custom primitives.

## Companion Skill verification

When product-ui routes to UI UX Pro Max, an independent shadcn agent Skill, Hallmark, or Impeccable:

- Confirm the Skill is actually available in this Codex environment.
- Read the **installed original `SKILL.md` and task-specific mode reference**; do not use a copied summary.
- Follow the original documented mode and retain observable evidence.
- Report executed / skipped-not-needed / unavailable / blocked / failed.
- Do not install or update third-party Skills without user permission.
- **shadcn/ui library components are not evidence that a shadcn agent Skill is installed.**

For a substantial rendered Product Demo, run **Hallmark audit (read-only)** first, evaluate its findings against accepted product constraints, and apply validated fixes separately. Never run Hallmark's default design or redesign mode without an explicit user request.

After substantial UI implementation:
1. render/review the interface with realistic data and states;
2. run the original Hallmark **audit** if available; do not edit during the audit;
3. evaluate its findings and separately fix grounded issues;
4. run original Impeccable critique if available;
5. fix material findings;
6. run original Impeccable audit if available;
7. fix material findings;
8. use polish only when further refinement is justified;
9. record which companion Skills actually ran before asking for user Demo approval.

## Product UI defaults

- Prefer table/list for repeated scanning, comparison, sorting, filtering, or batch work.
- Avoid excessive cards, giant operational page titles, decorative gradients, and marketing-style hero whitespace.
- Keep frequent actions visible and stable.
- Include loading, empty, no-results, error, disabled, permission, and success states when relevant.
- Preserve context across filters, selection, pagination, and review workflows intentionally.

## Completion

UI work is not complete solely because it compiles. Review the rendered UI at realistic viewport sizes and with realistic content/data volume.


## Intelligent UI interoperability

GPT-6 Intelligent UI is available in supported ChatGPT Chat sessions, not as a direct Codex tool. Do not attempt to invoke it as an internal dependency. Generate real HTML/CSS demos locally; use a portable visual decision record when the user chooses a style in ChatGPT.
