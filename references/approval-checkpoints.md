# Approval Checkpoints

Use checkpoints to validate **high-cost decisions early** without forcing the user to approve every routine page.

## Principle

Pause when feedback can prevent large rework.

Do not pause merely because another page was completed.

## Checkpoint A — Visual Direction

Use when:
- the product is new or being fully redesigned;
- no applicable `DESIGN.md` or mature visual system exists;
- the user has not already supplied a concrete visual direction;
- the user has not explicitly delegated the choice.

Process:
1. use UI UX Pro Max if available to shortlist 2–3 materially different, product-appropriate directions;
2. **build actual previewable HTML/CSS Style Demos** of the same representative product UI for each direction; avoid a text-only style list;
3. preserve the same representative page, content, and important features across A/B/C so the comparison is fair;
4. provide a side-by-side or working switchable comparison, ideally `design-exploration/style-comparison.html`, and actual browser screenshots when available;
5. briefly explain the differentiators and recommend one;
6. **stop and let the user choose visually** (A/B/C, hybrid, or changes).

Read `visual-style-demos.md`. If browser capture is unavailable, still deliver the working HTML and explain how to open it. Do not claim it was rendered when it wasn't.

Skip when:
- applicable `DESIGN.md` exists;
- a screenshot/design/reference already establishes direction;
- user says to choose for them or run autonomously.

## Checkpoint B — Representative Demo

Use by default for:
- new multi-page products;
- full-product redesigns;
- a new product area that introduces a broad new visual/interaction language.

After the user has visually selected a Style Demo:
1. build the real application shell plus **one representative core page**;
2. use one short representative flow instead if a single page cannot demonstrate the core interaction;
3. use realistic data;
4. include important states;
5. render/review the demo;
6. run original Hallmark `audit` (read-only) if installed, followed by product-ui evaluation/separate fixes;
7. run original Impeccable `critique` and `audit` (with material fixes) if installed;
8. report actual companion execution status and show/summarize what the demo establishes;
9. pause for confirmation before scaling.

### Choosing the representative page

Choose the page with the highest pattern coverage and product importance.

Good candidates:
- operations workbench with table + filters + detail/action region;
- primary editor with toolbar + canvas/panel + save/export states;
- central dashboard if analytics is the core product;
- primary form/workflow if creation/review is the core job.

Do not choose a trivial settings/about page merely because it is easy.

## Checkpoint C — Expansion

After the demo is approved:
- consolidate accepted decisions into `DESIGN.md`;
- expand in coherent batches;
- do not ask after every routine page.

Pause again only when:
- a materially new reusable pattern is introduced;
- a major design-system change is required;
- mobile adaptation materially changes the interaction;
- a new module family (e.g. analytics after CRUD) introduces different composition;
- a large batch boundary is reached and feedback can still prevent expensive rework.

## Distinguish the two demos

- **Style Demo Gallery**: 2–3 quick HTML/CSS previews for **choosing the visual language**. These need not connect to a backend. Compare similar actual app UI with clear aesthetic differences.
- **Product Demo**: one **real** representative app page/flow built in the target project after visual selection, with realistic data, states, and key interactions.

Do not call a static image or a few color swatches a sufficient product Style Demo when HTML preview is feasible.

Do not build the full Product Demo before the user selects visual direction, and do not expand the whole product before they approve the Product Demo.

## One-shot override

If the user explicitly asks for:
- “直接做完”
- “不用问我”
- “你自己决定”
- “一镜到底”
- “one-shot”
- “autopilot”
- equivalent autonomous execution

then skip approval pauses that are not required for missing information.

Still:
- follow product-ui rules;
- render/review;
- run final QA;
- do not fabricate unavailable review evidence.

## Existing products

For an established product with a stable `DESIGN.md` and component system:
- do not add checkpoints just because the skill supports them;
- implement routine new pages directly;
- pause only for materially new product/interaction/visual patterns.

## User feedback after a checkpoint

When the user requests changes:
1. update the demo/direction first;
2. do not propagate the rejected version to more pages;
3. once approved, update `DESIGN.md`;
4. then continue.

## Completion

A checkpoint is not a final QA substitute.

After broader implementation:
- render/review the relevant surfaces;
- run Hallmark `audit` read-only where warranted and available;
- evaluate and separately fix grounded Hallmark findings;
- run original Impeccable critique if available;
- fix material findings;
- run Impeccable audit if available;
- fix material findings;
- use polish only when justified.
