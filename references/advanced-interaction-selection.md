# Advanced Interaction Selection — product-ui v3.2

Use only when genuine multi-region product workflows require it. A static settings form doesn't need choreography. This is STYLE-NEUTRAL product logic: product-ui owns product tasks, IA, interaction choices, data semantics, state, keyboard, permissions, responsive, QA; a verified installed Provider owns style-specific implementation and motion.

## Selection matrix: real user job -> pattern

| User need | Candidate | product-ui state contract | Avoid |
|---|---|---|---|
| Repeated record review without losing list | Master Detail | stable record ID, inspector (nonmodal unless explicitly modal), filters, selected row, focus, close, narrow-screen fallback | simple confirmation |
| Focus on one chart then return | Expand in Place | same chart identity/filter/scroll, explicit back/Escape and restoration | long multistep drilldown needs separate route |
| One period/category across metrics | Global Filter | one authoritative filter drives KPI/chart/table; race-safe latest-response-wins, loading, empty, error | incompatible data scopes |
| Compare aligned times across charts | Linked Hover/Focus | shared semantic domain bucket, not pointer pixels; timezone/unit alignment, keyboard, missing data | unrelated time axes |
| Long analytics page requires persistent KPIs | Sticky Compact Header | correct scroll container, threshold, overlap prevention, resize/reduced motion | short pages |
| Frequent direct navigation and object actions | Command Palette | permitted action registry, Cmd/Ctrl+K, Escape, arrow/Enter, focus return, destructive confirmation | tiny app |
| User arranges priority of independent widgets | Bento Grid Drag | grid geometry, keyboard reordering/reset, persistence/permissions | fixed audit-critical order |
| Explore dependencies or organization | Progressive Graph/Tree | verified nodes/edges, breadcrumbs, accessible list/table alternative | simple flat records |
| Spot temporal peaks | Heatmap | actual bucket labels, legend, zero vs missing, keyboard/table alternative | exact values more important |

These patterns were inspired by two demo videos but the footage does not establish original source code, backend integrity, or exact durations. Do not copy promotional camera movements or branded neon defaults.

## Minimal cross-region interaction contract

Before implementation, write for each selected pattern:
- user_job: repeated task and success condition
- authoritative_state: canonical filter, selected stable object ID, hover domain if any
- trigger: click, keyboard, scroll or pointer
- dependent_regions: all data subscribers (KPI, charts, table, inspector)
- async_policy: latest intent wins; stale response never replaces new selection/filter
- failure_states: loading, empty, partial/error, permissions and retry
- focus_and_close: Escape/back/return focus, preserve scroll and list scope
- narrow_layout: overlay/detail route or reduced pattern as appropriate
- motion: delegate spring/origin/interruption/reduced-motion to Provider
- acceptance: rapid repeated changes, stale responses, keyboard, narrow viewport, a11y

Example Master Detail: clicking/pressing Enter on a row synchronously selects stable record ID and displays inspector; filtering and list scroll persist; rapidly selecting ten rows always ends at newest record; closing returns focus to meaningful context. The provider chooses animation, not which record is selected.

Example Global Filter + Linked Hover: filtering period drives the same domain keys and aggregates in all regions. Hover uses a separate semantic time-key (e.g. YYYY-MM), with keyboard fallback. A missing point shows no value, not a phantom tooltip.

## Workflow

Phase 3: select patterns on task evidence, not fashion. Existing improvements must preserve approved interaction unless authorized.
Phase 6: write state/async/a11y contract before Provider handoff.
Provider v1: pass contract through existing product_job, surface_blueprint, constraints. Do not invent new invocation APIs or protocol revision.
Product Demo: validate consistent deterministic fixture or real permitted data in at least one complete flow, including stale-request races, focus, narrow-screen fallback and reduced motion.
No forced implementation of all patterns; generally simpler is better.
