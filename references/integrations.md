# Companion Skill Integrations

`product-ui` owns product interaction decisions. Companion skills add specialized capability; they do not replace the product model.

**Apply `references/project-entry-routing.md` before this companion table:**
- `NEW_BUILD`: original UI UX Pro Max only when visual direction undefined; shadcn if applicable; Hallmark/Impeccable after Product Demo.
- `EXISTING_IMPROVE`: **read-only audit before any source edits**. Original Hallmark audit and original Impeccable inspection only when they can run without writing; report findings, wait for user approval, then one pilot page. UI UX Pro Max and Style Demo are **not** default.
- `EXISTING_REDESIGN`: inventory old system/flow first; explicit visual reset allows UI UX Pro Max and HTML Style Demos even if the old project has `DESIGN.md`.
- `EXISTING_REBUILD`: baseline API/feature parity and reversible migration first; visual exploration only if new direction is needed; external QA after replacement pilot.
 **Invoke the installed original companion Skill** rather than incorporating its prompt content into product-ui. Apply `external-skill-protocol.md` for availability checks, mode-specific original references, execution evidence, and honest reporting.

## Routing table

| Condition | Companion | Action |
|---|---|---|
| New project or explicitly redesigned existing project / no accepted new visual direction | UI UX Pro Max + product-ui HTML preview | Generate 2–3 real HTML Style Demos, then pause for user visual selection |
| Existing project / audit and improve | product-ui + Hallmark / Impeccable when available | **Read-only evidence report** and P0/P1/P2 pilot recommendation; pause before edits; no new visual system |
| Applicable `DESIGN.md` exists | UI UX Pro Max | Do not re-explore by default; follow `DESIGN.md` |
| Project uses shadcn/ui | shadcn component library + independent shadcn agent Skill (if installed) | Inspect `components.json`; independently verify original Skill before agent invocation |
| Project does not use shadcn/ui | shadcn skill | Do not introduce it solely because product-ui mentions it |
| Substantial Product Demo / UI redesign after rendering | Hallmark (original) | **audit only, report-only** → product-ui dispositions and separate fixes |
| Substantial UI implemented/redesigned | Impeccable (original) | read installed skill + critique reference → critique → fix → read audit reference → audit → fix |
| UI already correct and needs final refinement | Impeccable | polish may be used selectively |
| Companion Skill missing/unreadable | product-ui | Report unavailable/blocked; fallback with explicit label; never claim the companion ran |

## Mandatory original-skill contract

**Read `references/external-skill-protocol.md` before external Skill use.** Use these steps for UI UX Pro Max, shadcn agent Skill, Hallmark, and Impeccable:

1. Confirm whether the Skill is installed/available **in the current Codex environment**; an upstream URL or product-ui mention does not install it.
2. Read the original installed `SKILL.md`, plus the original mode-specific references required for the task.
3. Invoke/follow that original Skill's supported workflow, and observe an artifact or credible execution evidence.
4. Mark each considered companion **executed / skipped-not-needed / unavailable / blocked / failed** and cite a concrete result in the final work summary.
5. Never copy an upstream Skill's entire instructions into product-ui, and never silently claim an equivalent internal checklist is that external Skill.

Agent Skills are **agent-discovered instructions**, not guaranteed function calls from product-ui. Prefer the runtime's actual Skill invocation mechanism; verify original materials were loaded and followed. Do not install/update third-party Skills without permission.

## UI UX Pro Max boundary

Use it for 0→1 visual decisions such as:
- overall design-system direction
- density/visual tone fit for the product category
- typography/color/token exploration when nothing is established
- coherent initial visual language across surfaces

Do not use it to:
- override an accepted `DESIGN.md` during optimization (an **explicit redesign** can supersede it after user approval)
- restyle one isolated page into a different product
- repeatedly regenerate color/type choices every task

Read the actual installed UI UX Pro Max `SKILL.md` and its design-system/search references before starting the supported exploration workflow. If unavailable, use product-ui visual exploration as a **fallback** without claiming UI UX Pro Max ran.

### Visual Direction Checkpoint

For a new product or explicit full-product redesign with no accepted visual direction:
1. use UI UX Pro Max to generate **2–3 materially different** visual directions;
2. keep all directions compatible with the same product task, density, platform, and user context;
3. **implement an HTML/CSS Style Demo Gallery** with the same representative app content for all options;
4. render/review real previews (and screenshots if available), give the user a working A/B/C switcher or side-by-side comparison rather than only prose;
5. explain each direction briefly and recommend one;
6. **pause for user visual choice before building any real Product Demo**;
7. after selection, move to the Product Demo Checkpoint rather than implementing the entire product.

Read `references/visual-style-demos.md` for the deliverable and quality bar.

Do not ask vague open-ended questions such as “What style do you like?” before professional shortlisting.

Skip the visual-direction checkpoint when:
- an applicable `DESIGN.md` already establishes the desired visual system **and this is not an explicit redesign**;
- the user already supplied a concrete style, reference product, screenshot, design file, or visual direction;
- the user explicitly delegates the visual choice to the agent.

### Demo Checkpoint

For a new multi-page product or full-product redesign, **after the user chooses among visual Style Demos**:
1. implement the **application shell + one representative core page**;
2. if one page cannot demonstrate the important interaction model, implement one short representative flow instead;
3. use realistic data and include the most important normal/loading/empty/error or interaction states relevant to that page;
4. render/review the demo at appropriate viewport sizes;
5. summarize what the demo establishes: density, navigation, typography, surface treatment, table/form patterns, interaction model, and states;
6. **pause and ask the user to confirm or request changes before applying the design broadly**.

Choose the representative page by information value, not convenience. Prefer a page that exercises the product's core interaction and the largest number of reusable patterns.

Do not implement every page before this checkpoint unless the user explicitly asks for one-shot/autonomous execution.

### Expansion Checkpoints

After demo approval:
- consolidate accepted visual and interaction decisions into `DESIGN.md`;
- expand in coherent page/module batches;
- do **not** ask for approval after every routine page;
- pause again only when a materially new pattern appears, the design system must change, or a large batch/module boundary makes feedback economically valuable.

Examples of reasons to pause again:
- first complex data table after a form-only demo;
- first analytics/dashboard module when the demo did not cover charts;
- first mobile adaptation that materially changes interaction;
- a new workflow pattern such as split-pane review or multi-step approval;
- a design-system change that would affect many existing pages.

Skip staged checkpoints when the user explicitly requests “直接做完”, “不用问我”, “你自己决定”, “one-shot”, “autopilot”, or equivalent autonomous execution.

The checkpoint model applies to **high-cost subjective or systemic decisions**. Routine IA/product decisions should still be made autonomously unless materially ambiguous.

Once accepted, persist decisions into the project's durable design documentation.

## GPT-6 Intelligent UI boundary

Intelligent UI is a capability of supported **ChatGPT Chat** sessions, not a native Codex tool. Never require Codex to invoke it or assert that it has done so. The primary deliverable remains local previewable HTML/CSS.

When the user wants to compare directions here in ChatGPT, Intelligent UI may present visual and interactive comparisons where available. Use a portable visual-direction decision note to hand the selected choices back into Codex. Do not claim shared live state or automatic transfer. See `references/intelligent-ui-bridge.md`.

## shadcn boundary

**Separate the library from the agent Skill:** a project with shadcn/ui components does not prove `shadcn` the agent Skill is installed.

When shadcn/ui is present:
1. inspect `components.json` and existing project components;
2. independently verify whether a shadcn agent Skill is installed;
3. if installed, read its original `SKILL.md` and relevant references and use the documented workflow;
4. if not installed, use normal component-library/docs access and mark the agent Skill unavailable (not executed);
5. reuse existing product components first;
6. compose existing primitives before hand-rolling new complex components;
7. create custom behavior only where the library genuinely does not fit.

Examples:
- detail side panel → prefer Sheet/Drawer composition over a hand-rolled fixed overlay;
- destructive confirmation → AlertDialog/Dialog pattern;
- searchable select → Combobox/Command composition;
- settings → Form controls + Tabs/Sidebar/Card only when those containers serve hierarchy;
- record actions → DropdownMenu only for infrequent actions; keep frequent actions visible.

shadcn is an implementation system, not the product-information architecture.

## Hallmark boundary

For substantial Product Demos, after real rendered review and before user Demo approval, invoke the **independently installed Hallmark's original** `audit` verb (if available):

1. read original `SKILL.md` and `references/verbs/audit.md` plus required audit references;
2. audit target UI source, `DESIGN.md`, and any available rendered evidence;
3. produce the original severity-ranked **read-only** report; no edits during audit;
4. independently assess findings using product-ui; fix only grounded, appropriate findings separately;
5. report audit status/evidence. If absent, say **Hallmark audit not performed**.

Do **not** run Hallmark default design, redesign, or study modes for this integration. Do not let Hallmark's novelty preferences override dense ToB tables or an accepted consistent component system.

Read `references/hallmark-audit.md`.

## Impeccable boundary

Read original installed Impeccable `SKILL.md` and the documented command-specific guidance. The current integration uses **genuine critique and audit modes**, not copied prompt fragments.

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
6. review suggestions (Hallmark, Impeccable)
7. decorative preference
