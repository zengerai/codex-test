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

When visual direction is undefined and there is no applicable `DESIGN.md`, use UI UX Pro Max if available to establish the initial design direction. Once accepted, persist the direction into `DESIGN.md`.

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
