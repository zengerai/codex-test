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

Once established and accepted, `DESIGN.md` is the visual source of truth **for optimization and routine extension**. For an explicitly authorized comprehensive visual redesign, it becomes the **current-state baseline** until the user approves the replacement direction and Product Demo.

If `DESIGN.md` does not exist but the app contains consistent CSS tokens/components/screens, infer and document the **existing** visual system before proposing any new system. No `DESIGN.md` is not permission to redesign.

## Design Provider source of truth (v3.0)

Only project-owned DESIGN.md can record the accepted visual system. An independently installed Provider returns proposed tokens/component mapping/style QA, not a competing active document. After the relevant user checkpoint, product-ui may record provider ID, verified version, selected visual family/preset, and project-specific overrides. These values do NOT install or execute a Provider.

- Existing-product improvement preserves accepted style with or without installed provider.
- Explicit redesign retains original DESIGN.md as baseline; new provider remains proposed until accepted.
- Absent provider: preserve implemented components/tokens; report limitation rather than inventing provider fidelity.
- Switching providers is a visual migration with behavior/API, keyboard, responsive and motion regression checks.
- No provider-specific palette or defaults belong in product-ui.

Read design-provider-protocol.md for handoff and metadata examples.

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

## Project mode rules (V2.4)

| Route | Existing design treatment | Documentation action |
|---|---|---|
| NEW_BUILD | Follow a clear reference or choose from HTML Style Demos | Record accepted visual choices after selection / Product Demo approval |
| EXISTING_IMPROVE | Preserve current system from DESIGN.md or inferred code | Extract current-state rules; only update accepted incremental changes |
| EXISTING_REDESIGN | Preserve a copy of the current state for comparison | Replace active rules **only after** user selects new style and approves one Product Demo |
| EXISTING_REBUILD | Inventory both current UI and behavior/contracts | Carry forward accepted design if requested; otherwise follow approved redesign route and migration plan |

Do not overwrite source files or established design decisions during a read-only existing-project audit. New design systems should never silently replace accepted ones merely because the agent found a more fashionable trend.
