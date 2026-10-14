# Round 2 deliverable A — grayscale interaction prototype

Read after the combined module/page plan is approved and when preparing or revising interaction sketches. This extends [module-page-planning.md](module-page-planning.md); it is not another project route or approval gate.

## Purpose and format

Let the reviewer understand page composition, meaningful content, within-page changes, cross-page transitions and return behavior. For multi-page workflows, prefer a **consistent grayscale component base + project-specific content/flows + real-action guidance**.

- Use a clickable prototype when the reviewer needs to follow objects or context across pages. Do not wait for a PDF navigation problem before choosing this format.
- Static sketches, an annotated PDF or a text wireframe are enough for a small/simple surface, an explicit non-code request or a runtime limitation. Explain transitions and context even then. A request for static output wins over the default.
- Do not produce both static and coded versions by habit. An export is optional when requested or useful for sharing.
- Neutral grayscale is the planning default, not a final product style. It must not replace an existing accepted visual system or trigger a Provider/visual exploration stage.
- Lightweight local HTML/JS or compatible project primitives are allowed as a planning medium after Round 1 approval. Keep the artifact separate from production sources where practical. It can cover all approved pages while remaining deliberately shallow in backend capability.

Do not add real authentication, APIs, uploads, AI calls, scheduling, external writes or production infrastructure merely to make a planning interaction work. Label simulations at their relevant actions. The prototype does not select the production framework or authorize implementation. Record explicit scope expansions separately.

## Three complementary ways to review

| View | What the reviewer must be able to understand |
|---|---|
| Individual page | Stable module/page identity; page job; ordered regions; component and content hierarchy; primary controls and important states |
| Relationship overview | All in-scope logical pages grouped by owner; principal entry/exit paths; shared pages referenced without duplication; named actions and carried context |
| Guided task | A complete, useful business task through real controls; where the user is, what they are doing, what changes and where the next action leads |

Provide direct access to every in-scope page. A page map can be a clear node diagram or a compact linked overview with a transition table. Do not invent a fixed sidebar, module count, page count, diagram layout or number of walkthroughs. Principal tasks need coverage; every page need not appear in every tour. For large products, disclose which coherent batches remain unreviewed.

Keep map links, page identities, action destinations, sketches and written descriptions consistent. Page state changes and dialogs do not become new logical pages merely because they appear in the prototype.

## Content before components

Derive task → required information → grouping → semantic component → behavior. Reuse existing Round 2 decisions. Choose a table for repeated record comparison or handling, a trend when change over time matters, or a summary when it informs a decision/action; do not populate a universal dashboard or empty cards first.

Show representative columns, fields, labels, units, status meanings and values. Use coherent, clearly illustrative records across list/detail/history views. Keep the same object's identity and relevant period/version/batch through a path. Distinguish independent business states where they exist instead of collapsing them into one success badge. Unknown domain rules remain marked assumptions; never invent official thresholds or permissions.

Make the intended interactions observable:
- A filter identifies which region/scope changes; summaries and visible records must respect that definition.
- A detail entry identifies the object and context it opens; return preserves the declared source conditions and relevant input.
- A save/submit changes the expected local state and shows a result; required validation and recovery are visible.
- An unsupported action is explicitly marked as outside the simulation rather than appearing to succeed.

## Real-action guidance

Organize walkthroughs around business outcomes, not a tour of every control. Offer a skippable initial invitation when helpful and a persistent manual entry. Let the user freely inspect pages and return to the guided path.

For each node, define its target, page/module context, purpose, requested action, observable completion condition and expected destination/state. Explain these naturally: orient on entering a page, explain the changed region during local interaction, and explain the consequence of submitting. Avoid repeating a full checklist at every node.

Behavior requirements for a coded guide:
- **Action nodes advance on successful business outcomes.** Clicking a generic Next button, an attempted submit or a timer cannot fabricate success. Validation/service simulation failures retain the current node and input.
- Reading nodes may use an acknowledgement button. Do not auto-submit, auto-fill a feedback decision or execute consequential actions on behalf of the reviewer.
- Pause/exit removes interception and preserves progress and draft input. Resume returns to the relevant context; refreshing does not silently repeat a submitted action. Starting a different route must not clear existing user work.
- Resume a partially completed form at its actual phase. Use stable step identities or invalidate incompatible progress when a recipe changes.
- A missing/hidden target or departed route should pause with a recovery option, not skip forward or highlight an unrelated element as success.
- Popovers must leave the required control operable by pointer and keyboard. Handle scroll, narrow windows and native modal layering; an inline guide inside a native dialog is a valid fallback.
- Ending a walkthrough briefly recaps the relationships and state changes just exercised. Completion does not approve the design.

Keep instructional controls visually distinguishable from business actions. A simulated processing-complete control is a review aid, not a claimed product capability.

## Reuse instead of regeneration

Prefer suitable project primitives; otherwise use the bundled [prototype kit](gray-prototype-kit.md). Copy its common components, review shell/map helpers and guide once, then adapt project configuration/content. Treat the included example as an API demonstration, not default product scope.

Keep domain records, rules, page registries and flow recipes in the generated project. Keep generic assets separate from them. Read the compact API reference first; do not load all source or third-party minified files into context just to reuse them. Exact library choices and pinned dependency versions belong in the template, not as universal Skill requirements. Retain notices when distributing bundled dependencies.

## Proportional checks before delivery

For coded prototypes, render and actually exercise the important routes using available browser tooling. Check:
1. Pages/counts reconcile with approved scope; each important action reaches the intended page/object/state and has a sensible return.
2. Relevant filtering, selection, draft, validation, success and failure/retry behavior is consistent with the planning description.
3. The guide follows real successful actions; pause/resume, missing-target recovery and any modal steps work without data loss or duplicate submission.
4. Text, tables and guide controls remain readable and operable at intended review sizes; local table scrolling does not accidentally widen the whole page.
5. The delivered entry point and its local assets work. Report actual checks and any tool limitations; do not claim browser verification from source inspection alone.

Scale checks to the artifact. Do not require a production-wide test suite, fixed assertion count, every possible state, or the full Product Demo visual-audit chain just because this planning medium contains code. If code cannot be rendered here, deliver the runnable artifact with honest unverified coverage or use the agreed static alternative.

## Delivery and approval boundary

Provide a usable preview or local entry, a suggested first task, coverage and simulation limits, and the decisions being submitted for confirmation. Iterate the affected pages/flows until accepted. Preserve earlier approvals; present only affected module/page deltas when structure changes.

Record the user's actual scope of approval. Acceptance of deliverable A, a presentation format, a reusable template, or a completed tour does not by itself approve a pending written deliverable, unreviewed pages, the entire round, a Skill update, or production implementation. Do not add a new mandatory approval for every artifact or routine page; use the existing combined Round 2 review and explicit partial decisions.

This reference changes interaction-sketch delivery only. It does not prescribe a new written-blueprint format, production business-validation program or Provider motion-mapping method. After the applicable planning approval, use the existing visual/representative Product Demo workflow.
