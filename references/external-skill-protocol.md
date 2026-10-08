# External Skill Invocation Contract — V2.3

**Rule: delegate to the installed original skill, not a paraphrase copied into product-ui.**

This contract applies to UI UX Pro Max, shadcn (agent skill), Hallmark, Impeccable, and future companions.

## 1. Route before invoking

Determine whether the companion is relevant to this task and stage. Do not load all companions on every request.

- UI UX Pro Max: novel/undecided visual system and style exploration.
- shadcn *agent skill*: project uses shadcn/ui and implementation benefits from it.
- Hallmark: design anti-slop **audit-only** of substantial rendered UI.
- Impeccable: post-implementation `critique`, then `audit`; `polish` is optional.

Do not invoke companions for a simple `product-ui` self-update.

## 2. Verify availability, distinguishing four concepts

Check the agent's exposed Skills list/metadata first. Where filesystem access is available, look for the installed companion's original `SKILL.md` in the configured project/user skill directories (including `.agents/skills`, `~/.agents/skills`, and any existing legacy location actually used by the running Codex instance). The actual installation directory and skill name take precedence over guesses.

Do not claim availability merely because:
- product-ui mentions a name;
- a README links to the upstream repository;
- a project imports shadcn/ui components;
- a command or local wrapper happens to have a similar name.

**Important:** shadcn/ui is a component library. A shadcn *agent Skill* is an independent installation. Track library presence and Skill availability separately.

Do not auto-install or update third-party Skills during UI work without permission.

## 3. Read the original skill, then its task-specific references

For each relevant and available skill:
1. locate the actual installed `SKILL.md`;
2. read its frontmatter/name and execution guidance;
3. read only the companion references relevant to the requested mode;
4. run scripts or tools only when the installed Skill requires them and the environment permits them;
5. use the installed version's interface, not a hardcoded command copied from an older version.

Examples:
- Hallmark: original `SKILL.md` → `references/verbs/audit.md` → other audit-required references.
- Impeccable: original `SKILL.md` and whichever `critique`/`audit` command references that installation uses.
- UI UX Pro Max: original `SKILL.md` and its documented design-system/search resources, if present.
- shadcn: original skill instructions for component discovery/usage, if installed; inspect `components.json` and project source independently.

If the original skill or a required reference cannot be read, record that execution is **blocked or unavailable**; do not replace the entire workflow with remembered prompt fragments and still mark it executed.

## 4. Invocation is agent orchestration, not a guaranteed function call

In Codex, use the exact skill invocation mechanism supported by the current environment (e.g. selecting an installed skill by its actual name). Do not assume that writing "run Hallmark" alone guarantees automatic skill dispatch. Inspect/refer to the skill's actual text and run its documented mode.

If there is no observable explicit dispatch interface, explicitly read and follow the installed original `SKILL.md` and mode references. Mark the result honestly as original-skill-guided execution only if those instructions were actually read and the steps actually carried out.

Do not silently fall back to the product-ui checklist and claim the companion ran.

## 5. Evidence and status ledger

For each companion considered, record:
- name;
- why it was or was not relevant;
- detected installation identity/path or unavailable status;
- original `SKILL.md` read: yes/no;
- mode and mode reference read: yes/no/not applicable;
- execution status: **executed / skipped-not-needed / unavailable / blocked / failed**;
- evidence: concrete generated artifact, audit findings, inspected code, screenshot, or command output;
- important unresolved limitations.

A review is not "executed" merely because the assistant described what the skill would do. A tool listed as present but blocked by permissions must not be marked executed.

Keep the ledger concise in the final response. For early approval checkpoints, provide a short **actual execution** note; do not clutter user-facing design choices with low-level paths unless troubleshooting.

## 6. Boundaries and failure handling

- Preserve explicit user instructions, product correctness (`PRODUCT.md`), accepted visual system (`DESIGN.md`), and ToB operational efficiency.
- A third-party Skill finding is evidence to evaluate, **not** permission to overwrite approved directions or business workflows.
- Scope review to changed pages/components when appropriate.
- Do not silently switch Hallmark from audit to default design/redesign.
- If a relevant skill is missing, continue with product-ui review when feasible, clearly label it **fallback, not Hallmark/Impeccable audit**.
- Only ask about installation when truly necessary to proceed; for a task already in progress, deliver useful work and report the gap.
- Never run user-unauthorized installers, hidden auto-updaters, or destructive commands.

## 7. Default substantial-UI sequence

1. product-ui: classify product, preserve workflow/density.
2. UI UX Pro Max original skill (only if direction is undefined) → 2–3 HTML Style Demo previews → **user selects**.
3. shadcn original Skill (only if installed and applicable) → app shell + one representative Product Demo.
4. Render/browse the actual page with realistic data; record if unavailable.
5. **Hallmark original audit** (if installed) → **report only**. product-ui evaluates findings, then fixes validated issues with normal implementation tools.
6. **Impeccable original critique** (if installed) → product-ui fixes material findings.
7. **Impeccable original audit** (if installed) → product-ui fixes material findings.
8. **User approves the Product Demo** → consolidate `DESIGN.md` → expand in batches.
9. For broad later changes, re-run the relevant review stages on affected screens, not every unchanged screen.

Optional `polish` must not substitute for critique or audit.

## 8. Sample status report

| Companion | Status | Evidence |
|---|---|---|
| UI UX Pro Max | executed | Original SKILL + design reference read; A/B/C HTML previews |
| shadcn agent Skill | unavailable | shadcn/ui library found, but no agent Skill loaded; used existing components |
| Hallmark audit | executed | Original `audit.md` read; 2 findings at named files/lines; no audit edits |
| Impeccable critique | executed | Original command guidance read; findings and fixes |
| Impeccable audit | blocked | Browser access unavailable; no false pass claimed |

The table is **an example**, not a claim about this session. Never copy these statuses without observing real work.
