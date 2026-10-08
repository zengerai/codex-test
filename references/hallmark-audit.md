# Hallmark Audit Integration — V2.3

Hallmark is an **optional, independent, upstream-maintained** Skill.

Primary upstream:
- https://github.com/Nutlope/hallmark
- Codex skill: `skills/hallmark/SKILL.md`
- Audit procedure: `skills/hallmark/references/verbs/audit.md`

Do not vendor/copy Hallmark's anti-pattern catalog into product-ui. Follow the **installed version** and its references.

## Gate: when to run

After a representative Product Demo or substantial UI redesign has real source and has been rendered (when browser tools are available), but **before the user is asked to approve the demo**.

Also use for significant new UI modules or when the user expressly asks for an AI-slop review.

Do not run for every tiny edit or during the A/B/C Style Demo **choice** itself unless the user asks for it; avoid overloading a quick selection stage.

## Exact operation: Hallmark audit, not redesign

1. Verify the **installed Hallmark Skill** is actually available.
2. Read its original `SKILL.md`.
3. Read original `references/verbs/audit.md`; load its requested audit references (e.g. anti-pattern definitions) as directed by the installed version.
4. Identify the actual UI target(s), including relevant code files and rendered evidence if available.
5. Run/follow **`hallmark audit <target>`** as an agent-skill verb. This is **not** a promise that a shell binary called `hallmark` exists.
6. Preserve the audit mode's **read-only behavior**: generate ranked findings; do not change application code during the Hallmark audit itself.
7. Report each actual finding with severity, file/line location when available, the observed anti-pattern, and a concrete proposed correction. State how the evidence was observed. If a visual inference is uncertain without a screenshot, label it uncertain.
8. **Only after the audit ends**, product-ui evaluates findings against user-approved `DESIGN.md`, `PRODUCT.md`, and workflow needs. Fix validated issues through the normal implementation process; do not attribute those edits to the Hallmark audit verb.
9. Optionally rerun Hallmark audit on materially changed targets after fixes; avoid an unbounded loop.

## Keep the product efficient

Hallmark's design values may favor novelty and structural variety. For operational SaaS and ERP UI, do not automatically accept advice to:
- replace a dense comparison table with decorative cards;
- give each repeated CRUD page a radically different visual hierarchy;
- change an approved typographic system solely because it uses a common font;
- add ornamental illustrations, hero sections, gradients, or whitespace without improving the primary task.

Classify each Hallmark finding as:
- **Accepted** — supported by code/render evidence and useful for this product;
- **Adapted** — valid concern but proposed fix would harm density or consistency, so choose a compatible alternative;
- **Exempted** — intentional, grounded in `PRODUCT.md`, accepted `DESIGN.md`, or established component conventions;
- **Unverified** — insufficient evidence from source/render.

The **Hallmark report remains intact**; product-ui's disposition is a separate decision record.

## Minimal audit artifact

```md
# Hallmark AI-Slop Audit
Target: ...
Skill installation/path: ...
Original SKILL.md read: yes / no
Audit reference read: yes / no
Source/render evidence available: ...
Audit status: executed / skipped-not-needed / unavailable / blocked / failed

| Severity | Source location | Finding | Evidence | product-ui decision |
| --- | --- | --- | --- | --- |
| ... | ... | ... | ... | Accepted / Adapted / Exempted / Unverified |

Original summary: N critical · M major · K minor
Changes made during Hallmark audit: none
Post-audit fixes by product-ui: ...
```

If Hallmark isn't installed or cannot be read, say **Hallmark audit not performed**. Never substitute product-ui's internal checklist and label it Hallmark.

## Relationship to Impeccable

Default sequence for substantial Product Demo:
- actual rendered UI review;
- Hallmark `audit` (read-only);
- product-ui fixes validated anti-slop findings;
- Impeccable `critique`;
- product-ui fixes material UX/visual findings;
- Impeccable `audit`;
- product-ui fixes material technical/a11y/state/responsive issues;
- user approval.

Impeccable `polish` is optional. Avoid duplicated recommendations and report unique outcomes rather than pretending two reviews are independent proof.
