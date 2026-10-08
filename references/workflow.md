# Workflow and Review Screens

Use for approval, processing, triage, review, reconciliation, moderation, and multi-stage operations.

## Always show
- current state
- owner/responsible party when relevant
- what changed
- required next action
- blockers
- history or audit trail when consequential

## Workbench pattern
For repeated review:
- queue/list on one side or top
- current item detail in context
- primary decision actions remain stable
- keyboard shortcuts if safe and valuable
- advance to next item after action when appropriate

## Sequential flow
Use a stepper only when:
- order matters
- later steps depend on earlier inputs
- users benefit from progress visibility

Do not use a wizard for unrelated settings.

## Error recovery
A failed step should not force the entire workflow to restart.
Preserve completed work and show retry paths.
