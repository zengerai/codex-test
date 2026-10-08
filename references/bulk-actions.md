# Bulk Actions

Use bulk actions when users repeat the same operation across multiple records.

## Requirements
- clear selection state
- selected count
- only actions valid for the current selection
- confirmation for destructive/high-impact changes
- partial-failure handling
- summary of succeeded/failed items
- recovery or retry where possible

## Avoid
- forcing users to open each record for a simple repeated change
- losing selection unexpectedly
- offering bulk actions that behave differently from row-level actions without explanation
