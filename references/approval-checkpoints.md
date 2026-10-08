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
1. use UI UX Pro Max if available;
2. shortlist 2–3 materially different, product-appropriate directions;
3. describe each concretely;
4. recommend one;
5. pause and let the user choose.

Skip when:
- applicable `DESIGN.md` exists;
- a screenshot/design/reference already establishes direction;
- user says to choose for them or run autonomously.

## Checkpoint B — Representative Demo

Use by default for:
- new multi-page products;
- full-product redesigns;
- a new product area that introduces a broad new visual/interaction language.

After visual direction is selected:
1. build the application shell plus **one representative core page**;
2. use one short representative flow instead if a single page cannot demonstrate the core interaction;
3. use realistic data;
4. include important states;
5. render/review the demo;
6. show/summarize what the demo establishes;
7. pause for confirmation before scaling.

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
- run Impeccable critique if available;
- fix material findings;
- run Impeccable audit if available;
- fix material findings;
- use polish only when justified.
