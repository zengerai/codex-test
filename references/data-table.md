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
