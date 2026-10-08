# Companion Skill Integrations

`product-ui` owns product interaction decisions. Companion skills add specialized capability; they do not replace the product model.

## Routing table

| Condition | Companion | Action |
|---|---|---|
| New product / no established visual direction | UI UX Pro Max | Explore an appropriate visual system and design direction |
| Applicable `DESIGN.md` exists | UI UX Pro Max | Do not re-explore by default; follow `DESIGN.md` |
| Project uses shadcn/ui | shadcn skill | Use it for component discovery, composition, and implementation |
| Project does not use shadcn/ui | shadcn skill | Do not introduce it solely because product-ui mentions it |
| Substantial UI implemented/redesigned | Impeccable | critique → fix → audit → fix |
| UI already correct and needs final refinement | Impeccable | polish may be used selectively |
| Companion skill unavailable | product-ui | Continue with existing project rules; never claim the companion ran |

## UI UX Pro Max boundary

Use it for 0→1 visual decisions such as:
- overall design-system direction
- density/visual tone fit for the product category
- typography/color/token exploration when nothing is established
- coherent initial visual language across surfaces

Do not use it to:
- override an accepted `DESIGN.md` without a redesign request
- restyle one isolated page into a different product
- repeatedly regenerate color/type choices every task

Once accepted, persist decisions into the project's durable design documentation.

## shadcn boundary

When shadcn is present:
1. inspect `components.json` and existing project components;
2. reuse existing product components first;
3. use shadcn documentation/skill to find appropriate primitives;
4. compose primitives into product-specific components;
5. create custom behavior only where the library genuinely does not fit.

Examples:
- detail side panel → prefer Sheet/Drawer composition over a hand-rolled fixed overlay;
- destructive confirmation → AlertDialog/Dialog pattern;
- searchable select → Combobox/Command composition;
- settings → Form controls + Tabs/Sidebar/Card only when those containers serve hierarchy;
- record actions → DropdownMenu only for infrequent actions; keep frequent actions visible.

shadcn is an implementation system, not the product-information architecture.

## Impeccable boundary

Default QA stages for meaningful UI changes:
1. `critique` — hierarchy, usability, clarity, aesthetics, product fit
2. fix material critique findings
3. `audit` — accessibility, responsiveness, states, consistency, implementation issues
4. fix material audit findings

`polish` is optional and last.

Do not:
- polish before fixing hierarchy/usability;
- blindly accept suggestions that reduce density or operational efficiency;
- let a review tool overwrite established product constraints.

## Conflict resolution

If tools disagree, resolve in this order:
1. explicit user requirement
2. product/domain correctness (`PRODUCT.md`)
3. established visual system (`DESIGN.md`)
4. product-task efficiency (`product-ui`)
5. component-system conventions (shadcn/project library)
6. review suggestions (Impeccable)
7. decorative preference
