# Data Table

Use tables when users need to scan, compare, sort, filter, select, or act on many structured records.

## Required design decisions
Define:
- row identity
- primary column
- sortable columns
- filterable fields
- pagination or virtualization
- row selection behavior
- row-level actions
- bulk actions
- column visibility
- empty/no-results/loading states

## Column rules
- Put the main identity early.
- Status should be visually scannable but not overpowering.
- Dates need consistent formatting and timezone assumptions.
- Numeric columns should align for comparison.
- Avoid columns that repeat the same non-actionable value.

## Row density and secondary information
- For repeated scanning or queue processing, prefer a single-line desktop row when its decision-relevant content fits. Reduce unnecessary stacking and vertical padding before reducing readable type or interaction targets. Keep multiline rows when comparing the full content is essential.
- When identity and a secondary identifier are stacked and inflate every row, consider separate labeled columns if the identifier is useful to scan or compare and the available width supports them. Otherwise retain the grouping or move secondary detail into an accessible disclosure; do not split every compound cell automatically.
- Choose column widths using realistic names, identifiers, longest status labels and actions. Compact status presentation must retain distinct meanings and visible reasons for exceptional states; never equate an unavailable result with a successful or safe result.
- Record the accepted row height and typography in the project's design rules, not as universal Skill constants. A roughly 52px desktop row with 14px primary text is one validated example, not a mandatory size. Preserve the existing product's visual language and sufficient pointer/touch targets.

## Long summaries and full-content disclosure
- For scan-first summaries, use a constrained single line with CSS ellipsis when content actually overflows. Preserve the complete value; do not shorten the underlying data or exported content. Keep decision-critical status, errors and required actions visible without hovering.
- Add a full-content affordance only when the text is truncated. Support mouse hover, keyboard focus and tap/click; a native `title` alone is insufficient. Reuse the project's accessible tooltip/popover primitives. Short text that fits should not gain unnecessary tab stops.
- Keep the floating content readable and inside the viewport. Allow the pointer to enter it without dismissal so the user can read or copy it. Hover must not steal focus; provide appropriate Escape, pointer-leave and outside-interaction dismissal without a focus trap. Touch-open content must remain available after the finger leaves the trigger.
- Re-evaluate overflow when text or available width changes, including filtering, responsive resizing and sidebar changes. A wider cell should show the full summary directly when it fits.

## Scope and verification for table refinements
For a bounded density change, verify the affected table proportionally: render common desktop and narrow widths, inspect long summaries and exceptional statuses, and exercise hover/focus/touch disclosure. Confirm filtering, selection, row actions and return context still work. Report measured density changes when useful; do not reopen the full product planning process.

These are product information and interaction rules. The selected Design Provider supplies the visual treatment of separators, text hierarchy, status variants and floating surfaces within the accepted density and behavior constraints.

## Actions
Frequently used actions should not be hidden behind a menu.
Rare/destructive actions can move into overflow.

## Selection
When rows are selected:
- reveal selection count
- expose relevant bulk actions
- preserve selection intentionally across pagination/filter changes or clearly reset it

## Large datasets
Use server-side filtering/sorting/pagination when appropriate.
Consider virtualization for very long in-browser datasets.

## Mobile
Do not simply squeeze a desktop table.
Choose one of:
- priority columns + horizontal scroll
- stacked record rows
- record cards for evidence/detail-heavy rows
- list + drill-down

Preserve the user's decision-relevant fields.
Desktop column splitting need not remain separate columns on mobile: regroup identity fields in stacked records when appropriate, and retain a non-hover route to full summaries.
