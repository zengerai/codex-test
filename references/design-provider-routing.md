# Design Provider Decision Routing

Run AFTER product-ui selects the project lifecycle route and inspects the existing DESIGN.md / rendered UI, and BEFORE delegating visual system changes.

| Scenario | product-ui action | Provider handling |
|---|---|---|
| NEW_BUILD with explicit Apple style | Skip unrelated A/B/C; preserve one Product Demo approval | Verify original Apple Skill and call spec/implement if compatible |
| NEW_BUILD without style | Existing fair 2–3 HTML Style Demo and user selection | Installed provider can supply a candidate; never self-approve |
| One-shot new build without style | Choose style based on task, honor user's skip permission | Invoke only verified provider if selected |
| Existing routine extension with DESIGN.md | Preserve approved style and use existing components | Same active provider when available and needed |
| EXISTING_IMPROVE with no DESIGN.md but live UI | Read-only audit first for broad request; infer existing visual conventions | Do not auto-import Apple/Fluent |
| EXISTING_REDESIGN to Fluent, explicit | Baseline APIs/UX/style; pilot and checkpoint | Fluent provider is proposed until approval |
| EXISTING_REBUILD preserving visual system | Preserve workflows/API/contracts and migrations | Reuse compatible accepted system, no forced provider |
| Named provider missing / unreadable | Report unavailable; install with consent or disclosed fallback | No original execution claim |
| Provider React-native, project Vue | Do not migrate for aesthetics | Guidance/adapted implementation only, declare limits |
| Provider style-audit requested | No file modifications | Original audit mode only; no Hallmark confusion |
| User wants one coherent product with two styles | Clarify scope only if genuinely ambiguous | Separate explicit design scopes, never arbitrary per-page mix |
| Component library or agent Skill missing | Preserve existing app/stack; report capability gap | Do not claim installed or silently execute |

## Required checks

Eligibility: original Skill installed/actually read; optional manifest is not proof.
Authority: selected/approved direction, or read-only candidate before user choice.
Compatibility: project framework, existing components, supported surfaces, accessibility.
Scope: explicit read-only or permitted file changes, never reinterpret audit as redesign.
Evidence: output and test results genuine, status recorded, project DESIGN.md remains singular.

An explicit change of visual family is a redesign or migration, NOT EXISTING_IMPROVE merely because APIs stay the same. Product-ui's existing Style Demo and Product Demo approval gates still apply.
