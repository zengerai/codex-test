# Design Provider Architecture — v3.0

product-ui is the style-neutral orchestrator for product UI work. A Design Provider is an **optional, independently installed Codex Skill** specializing in visual systems and presentational interaction. This is an instruction-level handoff, not an executable provider API or automatic plugin registry.

## Ownership boundary

| Concern | product-ui | Design Provider |
|---|---|---|
| Users, product jobs, permissions, API/domain contracts | Owns | Receives as immutable context |
| NEW_BUILD / EXISTING_IMPROVE / EXISTING_REDESIGN / EXISTING_REBUILD | Owns | Receives selected route |
| Information architecture, navigation purpose, task flow and information density | Owns | Styles agreed structure |
| E.g. record click opens inspector, delete requires confirmation | Owns interaction meaning | Owns visual expression, motion, focus presentation |
| Visual candidates and A/B/C HTML Style Demo / user style choice | Orchestrates | May supply a candidate; never approves itself |
| Selected-style tokens, typography, icon idiom, component visual variants, surfaces/themes | Accepts for product fit | Owns design proposal / implementation |
| Motion characteristics, spatial continuity, style-specific state feedback | Defines task constraints | Owns specialist motion patterns |
| Component library recommendation | Enforces stack/architecture constraints | Recommends suitable library/preset; never forces migration |
| General keyboard behavior, accessibility, forms/tables productivity | Owns acceptance | Must comply; may implement delegated detail |
| Original shadcn agent, Hallmark, Impeccable Skill dispatch | Owns and verifies | Must not duplicate dispatch |
| Final product QA, demo approvals, expansion and rollout | Owns | Returns style-conformance evidence |
| PRODUCT.md and single accepted DESIGN.md | Owns | Supplies candidate decisions; no rival DESIGN.md |

## Design provider vs component library vs review Skill

Provider = installed specialist Skill: Apple-inspired, Microsoft Fluent or Material style expertise.
Component library = code/framework such as shadcn/ui, Fluent UI or React Aria. A library in the project is NOT proof that any agent Skill is installed.
Review Skill = Hallmark read-only audit, Impeccable critique/audit. product-ui orchestrates originals when genuinely available.
UI UX Pro Max = broad initial visual discovery when user has not chosen a visual direction.

There is no universal mandatory provider. Without one, preserve existing DESIGN.md and components, or use product-ui's general visual exploration with honest provenance.

## Nonnegotiables

- No Apple, Luma, Rhea, Fluent, Material, blue palette, radius, motion duration, or React requirement hardwired into product-ui.
- One approved visual system per coherent project scope, barring explicitly scoped exceptions.
- Installing a provider must not silently restyle an existing project.
- Visual redesign preserves existing business behavior and working code until approval / migration.
- Do not copy another Skill's original instructions into product-ui; verify installed original SKILL.md.
- Provider cannot invoke external review Skills or repeat user approval gates; product-ui owns those.
- Provider may only modify files when the handoff explicitly delegates implementation.

## Rollout

1. product-ui v3 adopts provider routing, contract, honest detection and QA (this repository).
2. Apple Skill undergoes a separate rebuild against this contract, no inherited V4 visual token constraints. Additional Fluent/Material Providers use the same protocol.
3. Project DESIGN.md records accepted provider ID/style/version and explicit project overrides. Style switches and provider upgrades receive regression review.

This document does NOT assert any provider repository has already been migrated.
