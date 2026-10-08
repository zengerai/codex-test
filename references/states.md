# Product States

Every meaningful surface should intentionally handle relevant states.

## Loading
Use skeletons when structure is known.
Use progress indicators for explicit operations.
Do not block the entire application for a small local refresh.

## Empty
Explain:
- what this area contains
- why it may be empty
- what the user can do next

## No results
Keep filters/search visible and offer clear ways to broaden results.

## Error
Explain what failed and what the user can do.
Preserve entered data when possible.

## Success
Use inline confirmation for local changes.
Use toast for non-blocking acknowledgement.
Use a dedicated success state only when the completed action is a meaningful milestone.

## Permission denied
Explain what is unavailable without leaking sensitive information.
Offer the next legitimate action when one exists.
