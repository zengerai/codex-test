# Business flow validation

Use for a functional Product Demo, connected page implementation, or a change affecting data scope, navigation or state. Derive expected behavior from the accepted blueprint and current user instructions; do not invent domain rules to make a demo pass. For a small isolated edit, check only affected behavior and its immediate dependencies.

This validates the frontend's observable business behavior. Synthetic fixtures, local persistence and simulated errors are valid for a frontend-only project when clearly identified; they do not prove backend persistence, authorization, algorithms or concurrency. Do not add those systems merely to complete this review.

## Establish the expected result

Reuse existing blueprint rule IDs and relevant implementation contracts. Capture missing essentials alongside them rather than producing a competing specification. A compact check can use:

| Rule / task | Starting record and scope | User action | Expected data/state and visible result | Observed evidence / outcome |
|---|---|---|---|---|
| Filter to a category | Declared batch, period and eligible records | Activate its summary, then open a result | Queue contains the expected record IDs; detail belongs to that scope | Record actual IDs and behavior, not just a successful click |

Use a coherent fixture or permitted real data across summaries, charts, lists, details and exports. Include contrasting records or states that expose mistakes. Do not use independently hardcoded counts and disconnected decorative content. For fixture-based checks, expected IDs and values must come from the declared fixture/rule, not from the same UI calculation being tested.

## Contracts to check when relevant

| Concern | Invariant and observable checks |
|---|---|
| Record identity | Detail, evidence, drafts and saved feedback refer to the same stable object and relevant period, version, batch or tenant. Include only context dimensions the product actually has; a display name alone may not identify a result. |
| Global and local scope | Declare which regions subscribe to each filter. A global period change updates its subscribers; a local queue filter may intentionally leave batch totals unchanged. Check denominator labels, record membership and empty results, not only equal counts. Overlapping categories need not sum to the total. |
| Independent states | Keep assessment/data validity, computed result and human workflow status distinct where the domain does. Missing or failed evaluation is not zero/safe; saving feedback does not silently change a computed result unless the approved rule says so. |
| Source and navigation | A detail route carries the relevant result identity and source context. Previous/next follows the declared queue/order policy (snapshot or recomputed); test the end of that queue and records removed by edits. Returning restores appropriate filters, selection, reading position and focus. A direct URL without a source must not invent one; unavailable targets need a usable fallback. |
| Draft and saved data | Drafts use the full result identity and cannot leak between objects or periods. Verify navigation/refresh preservation only to the extent promised by the chosen storage model. Required-field errors and failed saves retain input without marking completion or advancing the queue; a successful save updates the intended record once and follows the approved next action. |
| Async and failure | Where async work exists, rapid changes must not display a stale result under the new selection. Loading, no data and failure must not present old data as current; deliberate retained data needs an explicit stale/loading indication. Retry preserves the intended scope. Label simulated failures and distinguish them from real network-race tests. |
| Selection and export | Selection count, mixed/full selection state, filter-change policy, bulk target set and exported records agree. Confirm whether the action targets selected rows, filtered rows or another explicit scope; truncated display text must not truncate exported data. |

## Exercise connected behavior

For a new representative workflow, actually perform a complete user path through its important state transitions. For a review queue this may be: select scope → filter → open record → inspect related evidence → edit → save → next/return. Add relevant failure/recovery and boundary cases, such as no matches, invalid input, failed save, switching records with a draft or reaching the queue end. This is an adaptable example, not a mandatory feature list.

- Use real controls for the interaction path. Direct URL visits and source inspection can supplement it but do not prove transitions worked.
- Check exact records and meaningful changed/unchanged state. “Four results displayed” cannot prove they are the correct four results.
- Verify keyboard/focus and narrower layouts along affected actions; a filter action that updates results off-screen may need a deliberate reveal, while typing in search should preserve input focus.
- Use model-level checks for relationships/calculations and browser checks for visible state, navigation and interaction. A screenshot proves a rendered state, not saving, persistence, race handling or motion.
- Re-run checks affected by fixes. Repeating the full suite needs a changed scope, failure or unresolved concern; no fixed assertion count is a quality target.

## Report and handoff

Record the tested page/flow, fixture or data scope, build/evidence time, expected result, actual result and status (`passed`, `failed`, `not-tested` or `out-of-scope` with reason). Distinguish browser-observed, model-tested, source-inspected and simulated evidence. Preserve historical failures and mark their actual resolution; do not relabel old results as a current rerun.

Resolve material mismatches within authorized scope before presenting the implementation as ready. A business-rule uncertainty stays explicit and goes back to the relevant decision owner; frontend-only limitations do not become an unsolicited backend project. Report remaining limitations and user decisions without treating successful tests as user design approval.

Product-ui owns these semantics. Give the selected Design Provider the relevant identity, state, scope, focus and restoration constraints; the Provider designs their visual presentation and motion. Business validation and specialist style/motion review supply complementary evidence, and neither substitutes for the other.
