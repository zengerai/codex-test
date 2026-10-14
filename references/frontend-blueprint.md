# Round 2 deliverable B — annotated frontend blueprint

Read when preparing or revising the written companion to interaction sketches A. This is part of [module-page-planning.md](module-page-planning.md), before production implementation. Use A's actual sketch/prototype and the user's accepted decisions as the baseline.

## Purpose and relationship to A

A lets the user inspect composition and experience the workflow. B makes the same design explicit enough for the user to review and Codex or another developer to implement: **page region → component composition/choice → displayed content → interaction/state rules → reuse**. This is the explanation order, not five mandatory confirmation steps.

- Explain already-chosen patterns and their task-specific purpose; do not silently redesign A or restart component selection. Record an existing concrete library mapping when settled. If no production library is selected, specify semantic components and behavior without treating prototype internals as the production choice.
- Preserve agreed module/page identities, scope and flows. Key state images belong to their existing pages; they do not increase the logical-page count.
- B can be prepared alongside A for a combined review. If A is already accepted, build B against that baseline and bring forward only material differences and unresolved decisions. A small scope can use one annotated artifact for both purposes.
- Distinguish acceptance of the delivery format, acceptance of the content/scope, and authorization to implement. Do not infer the latter two from “this format works.” Reuse prior approvals and explicit autonomous instructions; do not add a new gate for each page or component.

## Page sheet: image and corresponding rules

Prefer **actual screenshot + numbered regions + adjacent rule explanations**, not a detached wall of text. Reuse the compact [authoring template](../templates/frontend-blueprint.example.md), adapting the existing project document rather than creating a competing specification.

Each logical page or explicitly identified page-family variant needs:

| Part | What to explain |
|---|---|
| Identity | Module/page ID, name, user task, current review status and relevant prototype revision/state |
| Image | Actual A screenshot or supplied static sketch; meaningful state, viewport/crop and representative sample context where relevant |
| Numbered regions | A stable mapping from visible markers to rule IDs; place explanations beside or immediately after the image |
| Component composition | Semantic components, how they are grouped, primary/secondary actions and the task-based reason for the choice |
| Display content | Relevant columns/fields, labels, units, status meanings, metric scope, object identity and meaningful examples; mark unknown definitions |
| Interaction rules | Trigger → affected region/state → visible result; explain dependencies, validation, selection, save feedback and recovery where consequential |
| Page relationships | Source action → target page ID; object/context passed; return destination and preserved filters, selection, position or draft as applicable |
| Boundary and related rules | What is demonstrated, simulated, proposed or unresolved; links to state supplements and shared/reused patterns |

Use stable IDs such as `P03-02` and `S01 → P03` only as a convention, not a required naming schema. Markers and rules must resolve one-to-one within a figure; grouped components can share one region rule. Do not renumber unrelated rules on every revision. Prefer a few meaningful regions to annotating every label.

Explain information the image alone cannot prove: which collection a metric describes, whether filtering is local or global, what a save changes, which object a detail opens, and what happens after failure or return. Do not repeat visible text without clarifying its role or behavior. Do not invent thresholds, permissions or mandatory business workflows.

## States and shared rules

Add supplementary images only for states that materially clarify a decision or behavior, such as an expanded panel, validation block, confirmation, unsuccessful save or meaningful empty state. Identify the owning page and how the state is reached. Record input preservation, success/failure effects, allowed actions and recovery. Do not produce a screenshot for every theoretical state or call a directly opened page proof that a workflow succeeded.

Centralize rules shared across pages, referencing them from the affected sheets. Typical candidates are object/context identity, filter scope, return behavior, draft/save semantics and distinct status meanings. Add a compact reuse mapping: **component/pattern → pages → common behavior → allowed differences**. Inherit the project's actual semantics; none of these examples defines a universal business model.

## Evidence, differences and unknowns

- Capture the real artifact or use the user's supplied sketch; do not invent screenshots or present an imagined state as observed. For interactive states, reach them through the applicable controls when tools permit. If capture is unavailable, use the agreed static source or a clearly labeled provisional diagram and report the limitation.
- Preserve relevant identities and state across captures. Keep illustrative data labeled. Hide review-only chrome only when it does not conceal the behavior being explained; identify cropping and omitted long content. Capturing should preserve the reviewer's working session where possible.
- Keep **demonstrated behavior**, **proposed additions/corrections**, **simulations/implementation gaps**, and **unknown business decisions** distinguishable. A screenshot is evidence of presentation, not proof of backend capability or every rule in its caption.
- When A contradicts the intended rule, point to the exact region, state the effect and proposed correction. Do not silently change accepted behavior or let development copy a known contradiction from the image. Make any edits only within the existing authorization; re-review material changes without reopening unaffected decisions.
- Summarize unresolved items with affected page/rule IDs, the question or missing evidence, and a recommendation when justified. Separate decisions affecting current design from details that can remain open until implementation; do not force the user to specify every future API field now.

## Delivery, maintenance and proportionate checks

Provide a human-readable visual document and editable/searchable rules for handoff. One artifact may serve both. A linked PDF works for fixed-page review; an HTML reader is useful for navigation and image enlargement; Markdown or structured content is useful for maintenance. Honor the user's chosen format; do not require all three formats, a fixed filename, page count or custom viewer for every project.

If multiple formats are delivered, maintain one content source and generate or consistently update the others. Keep stable page/rule references and a clear current version. Archive superseded material when replacing it so later development does not read two competing current blueprints. Refresh affected screenshots and rules together when the design changes.

Before delivery, check proportionately:

1. In-scope pages have image/rule coverage or explicit family differences; IDs, counts, annotations, referenced pages and important cross-page context reconcile with A.
2. Screenshots match their described state; unknowns and unimplemented rules are visible rather than implicitly approved. Inspect relevant prototype behavior when needed to substantiate the explanation.
3. Images, notes and labels are readable at the intended review size; no overlap, clipped explanations or missing glyphs. If delivering a PDF, render and inspect it using available document tools.
4. Delivered links and assets resolve. For a custom reader, exercise its navigation and image enlargement/closing, check relevant window sizes and basic keyboard/focus behavior. Scale verification to the reader, not the whole product.
5. Hand over a usable entry point and suggested first page/flow, report real verification limits, and state the scope still under review. Document checks do not constitute product acceptance or a production regression suite.

B approval continues the existing visual-direction and representative Product Demo workflow. The selected Design Provider later handles visual styling, concrete visual variants and motion through the existing protocol. This reference neither changes that protocol nor authorizes production development, a separate business-validation program or a Provider upgrade.
