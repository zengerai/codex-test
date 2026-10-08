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

## Skill workflow

Use `product-ui` for application UI design and implementation.

When visual direction is undefined and there is no applicable `DESIGN.md`, use UI UX Pro Max if available to propose 2–3 materially different, product-appropriate directions. **Build actual browser-previewable HTML/CSS Style Demos** for A/B/C using the same representative product screen/data. Prefer `design-exploration/style-comparison.html` with a working switcher or side-by-side view. Provide actual rendered previews/screenshots when tooling is available, briefly recommend one, and **pause for the user's visual selection**. A purely text-based style menu is not sufficient.

For a new multi-page product or full-product redesign, after the user chooses among Style Demos, build only the real application shell plus one representative core Product Demo page (or one short representative flow when necessary). Render it with realistic data/states and pause for user review before scaling the design across the product.

After demo approval, persist accepted visual and interaction rules into `DESIGN.md` and expand in coherent batches. Do not ask for approval after every routine page; pause again only for materially new patterns, major design-system deviations, or large module boundaries.

Skip these checkpoints when the user supplied a clear visual reference or explicitly requests autonomous/one-shot execution. Routine product interaction/IA decisions do not require user approval by default.

If the project uses shadcn/ui, use the shadcn Skill and existing project components before creating custom primitives.

After substantial UI implementation:
1. render/review the interface with realistic data and states;
2. run Impeccable critique if available;
3. fix material findings;
4. run Impeccable audit if available;
5. fix material findings;
6. use polish only when further refinement is justified.

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
