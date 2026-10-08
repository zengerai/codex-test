# Visual Style Demo Gallery — V2.2

This reference owns the Visual Direction Checkpoint presentation.

## Default output: visual, not text-only

For a **new product** or an **explicit major UI redesign of an existing product** with no accepted **new** visual direction, generate 2–3 differentiated, product-appropriate directions, then produce **actual previewable HTML/CSS**, not just style names, prose, token tables, or unrendered code snippets.

Recommended deliverable:

`design-exploration/style-comparison.html`

The file must open in a browser without a backend or authentication. Use existing project tooling when appropriate; otherwise prefer a self-contained HTML/CSS/JS preview with no external runtime dependencies.

Optional starter: `templates/style-comparison.html` demonstrates a working A/B/C selector. **Adapt its content, typography, style tokens, and layout to the user's real product**; do not treat its three themes as the required candidates for every project.

A screenshot or image can supplement the gallery, but do not use an AI-generated image as the authoritative preview if the intent is to develop real HTML UI.

## Layout

Use one of:
- one side-by-side comparison page when width allows;
- a single gallery with clearly labeled A/B/C tabs to switch between real UI previews;
- separate A/B/C HTML pages linked by an index.

Every direction must be visually reviewable **before the user has selected** a direction.

### Keep the comparison fair

Hold constant across directions:
- the same product purpose and primary workflow;
- the same representative page type and record content;
- the same critical features and underlying information;
- the same preview viewport, where possible;
- the same sample content and data volume.

Vary visual expression meaningfully:
- palette and contrast;
- typography and hierarchy;
- spacing/density **within a sensible range for the product**;
- surface treatments, borders, elevation, radius;
- icons and control styling;
- navigation visual presentation and overall tone.

A valid set should look materially different at a glance, not like the same layout with three different accent colors.

Do not choose a density that would undermine essential ToB operating efficiency merely to create variety.

## Representative preview content

For a ToB workbench or SaaS console, preview at least:
- application shell/sidebar/topbar;
- a meaningful page title and action hierarchy;
- filters/search;
- a table/list with realistic data;
- primary/secondary actions;
- statuses and one detail or inspection region when useful.

For a ToC utility/editor, preview at least:
- the main user job surface (editor/canvas/upload or similar);
- obvious primary action;
- short setup flow;
- controls and preview/result state;
- feedback and advanced controls where needed.

Do not default to generic KPI cards or a landing-page hero to show off visual style.

## Preview quality gate

Before presenting options:
1. build all 2–3 variants in HTML/CSS;
2. verify they render if browser tooling is available;
3. take actual browser screenshots of the **rendered** variants when possible;
4. check viewport overflow, font legibility, controls and responsive behavior;
5. ensure switching between variants works if provided;
6. ensure all variants show the same semantic content.

If rendering tools are unavailable, still produce a local HTML preview and explain how to open it. Never claim screenshots or browser inspection happened when they did not.

## Choice presentation

Present:
- A / B / C distinct names;
- preview links or browser-rendered screenshots;
- 1–2 concise design traits per direction;
- a recommendation and rationale;
- clear user choice: A / B / C / combination + requested changes.

Then **STOP**. The visual direction is *not* approved just because the agent recommended an option.

Do not start the representative Product Demo, populate `DESIGN.md` with unapproved decisions, or implement other pages until the user chooses.

## After choice

When the user chooses:
1. record selected direction and any hybrids/refinements;
2. establish or update the accepted `DESIGN.md` (mark it draft until the Product Demo is approved if appropriate);
3. implement **app shell + one representative core Product Demo page/flow**;
4. render/review that real Product Demo;
5. STOP for a second user review;
6. after confirmation, finalize design rules and expand in batches.

A Style Demo Gallery tests *appearance*. A Product Demo validates *real product interaction and implementation*. They are separate checkpoints.

## Exceptions

Skip the Style Demo Gallery if:
- an applicable and accepted `DESIGN.md` governs the **requested** direction and the user is **not explicitly requesting a comprehensive visual redesign**;
- a concrete reference design clearly determines the visual direction and the user asks to follow it;
- the user explicitly says to choose without asking, run one-shot, or work autonomously;
- the task is a small existing-product change with no new visual direction.

A generic adjective like “modern”, “minimal”, or “premium” **does not by itself** remove the need for a visual comparison when the user wants to participate in direction selection.

Do not ask to reconfirm previously approved visual directions.

## Compatibility with ChatGPT Intelligent UI

The gallery must work **inside the Codex/project environment** as an ordinary HTML/CSS artifact.

GPT-6 Intelligent UI is a *ChatGPT Chat presentation capability*, not a guaranteed Codex tool. Do not instruct Codex to invoke Intelligent UI directly, imply the user can see ChatGPT controls inside Codex, or assume automatic data/state transfer between them.

For optional ChatGPT-assisted visual comparison, consult `references/intelligent-ui-bridge.md`.
