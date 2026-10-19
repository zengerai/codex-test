# Forms

Forms should reduce input effort, ambiguity, and recovery cost.

## Structure
- group related fields
- use section titles when groups are meaningful
- keep visible labels persistent by default; for a short familiar login form with an explicitly accepted placeholder-led design, follow [login.md](login.md) and retain semantic labels
- put help text near the field it explains
- order fields according to user workflow, not database schema

## Validation
- validate on blur or at useful moments, not every keystroke by default
- show errors near the field
- preserve user input after errors
- explain how to fix the problem
- distinguish client validation from server failure

## Defaults
Use safe, likely defaults when they reduce work.
Never silently choose consequential options.

## Long forms
Consider:
- progressive disclosure
- sections
- autosave
- save draft
- sticky action bar
- step flow only when steps are genuinely sequential

## Submission
Prevent accidental duplicate submissions.
Show progress for slow actions.
Keep success confirmation explicit when the change matters.
