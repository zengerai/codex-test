# Browser / Rendered UI Review

Source code review cannot substitute for rendered product review.

## Review with realistic data

Use examples that expose layout failure:
- long names and labels
- large values
- many table rows
- multiple statuses
- missing optional data
- long error messages
- selected rows / bulk mode
- active filters
- permission restrictions

## Review states

At minimum when relevant:
- normal
- loading
- empty
- no-results
- error
- success
- disabled
- permission denied

## Review viewport classes

Choose viewports appropriate to the product, including:
- narrow mobile when the surface supports mobile
- tablet/small laptop
- common desktop
- wide desktop for data-heavy products when users commonly use it

Do not validate only one large desktop viewport.

## Interaction checks

Actually exercise:
- open/close overlays
- focus and keyboard path for repeated workflows
- submit/validation/retry
- filters/search/reset
- row selection/bulk actions
- navigation while preserving context
- destructive confirmations
- overflow and scrolling

## Visual failure signals

Fix:
- accidental horizontal page overflow
- clipped menus/dialogs
- sticky regions covering content
- controls wrapping unpredictably
- unreadable table compression
- excessive whitespace in operational screens
- dense text with no grouping
- competing primary actions
- visual hierarchy that changes between sibling screens without reason

## Evidence

When tools permit, use browser/computer-use screenshots during review. If visual tooling is unavailable, say so rather than claiming a browser review occurred.
