# Design-System Governance

The project should have one durable product model and one durable visual model.

## PRODUCT.md

Use for:
- target users
- jobs-to-be-done
- operational context
- workflows
- permissions/roles
- domain language
- behavioral constraints
- product tone when relevant

Do not store transient implementation details here.

## DESIGN.md

Use for:
- layout conventions
- typography
- spacing/density
- color/token semantics
- radius/shadows/surfaces
- component conventions
- iconography
- responsive rules
- common UI patterns

Once established and accepted, `DESIGN.md` is the visual source of truth.

## AGENTS.md

Use for:
- repository-wide agent workflow
- code/test/build conventions
- which skills/tools to use
- project-specific completion checks

Do not duplicate the entire design system into AGENTS.md.

## Avoid competing design systems

Do not maintain multiple active sources such as:
- `DESIGN.md` says radius 6
- another generated master says radius 12
- page-local code invents radius 20

When an exploratory tool produces useful visual decisions:
1. review them;
2. accept/reject intentionally;
3. merge accepted rules into `DESIGN.md`;
4. treat the exploratory output as temporary after consolidation.

## Redesign exception

If the user explicitly requests a redesign:
- existing `DESIGN.md` becomes reference/current-state, not an immutable constraint;
- use product-ui to preserve product-task correctness;
- UI UX Pro Max may explore the new visual direction;
- after approval, rewrite/update `DESIGN.md` so there is again one source of truth.
