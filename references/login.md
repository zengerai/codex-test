# Login — task, form and state contract

Use for a product's authentication entry or a focused login refinement. Reuse accepted scope and the current lifecycle route; this reference adds no approval round. Product-ui owns fields, behavior, density and navigation. The chosen Provider owns composition, surfaces and motion. A login can carry restrained product identity without turning operational pages into marketing layouts.

## Decide what belongs on the page

- Establish the supported login method and required fields from the request or existing contract. Do not copy a reference's registration, SMS, QR, third-party login, downloads or help links without a corresponding product need.
- Preserve explicit exclusions, such as temporarily omitting recovery/help. That exclusion belongs to the project, not to every future login.
- Give the primary action a direct label, normally “登录” / “Sign in”. Use product name and one concise value statement where useful; avoid repeating feature lists and instructions around the form.
- Separate implemented authentication from a frontend simulation in the delivery documentation. A visible CAPTCHA does not establish real verification, and a client session flag does not establish access control. Follow the accepted project wording; do not inject a standard demo banner or security claim into every page.

## Compact fields without losing their identity

- Prefer persistent visible labels for unfamiliar, long or ambiguous forms. If a user accepts placeholder-led presentation for a short familiar login, keep an explicit associated semantic label or equivalent accessible name. Placeholder text alone is not the accessible label.
- Inspect the filled and autofilled states as well as the empty screenshot: prompts disappear after entry. If fields become ambiguous, propose a compact persistent/floating label for the affected fields instead of silently extending placeholder-only styling to other forms.
- Preserve meaningful input type, name and autocomplete. Keep password visibility and CAPTCHA refresh controls named and keyboard-operable; they must not submit the form. Do not disable password-manager/autofill behavior merely for a cleaner screenshot.
- Use one control-height and alignment system for inputs, adjacent CAPTCHA tile and primary action. Keep the password toggle's hit area usable inside that system. Set typography and spacing together; do not inflate the field to compensate for a small label.
- In a short login form, avoid permanent blank error rows under every normal field. Render actual error text in normal flow, keeping it near its field and allowing wrapping. If a stable reserved area is justified, judge it against the resulting idle-state whitespace.
- Size the CAPTCHA row from available space: preserve usable input width, visible image/refresh affordance and targets on narrow screens. Do not shrink the whole desktop form to fit.

## State and navigation rules

- On validation failure, retain entered values, identify the affected field in the message, associate it with the control and move focus appropriately. Distinguish field errors from a failed authentication request when a backend is in scope.
- On submission, make progress clear and prevent duplicate requests. Do not add a delay just to finish an animation. After a failed attempt, preserve appropriate user input according to the actual authentication contract.
- Password reveal changes visibility without remounting the input or losing its value/focus. CAPTCHA refresh follows the accepted clear/preserve-input policy and updates only its own region; refreshing it must not reset account/password.
- Preserve a valid intended in-app destination through login and provide a safe fallback. Keep logout and deep-link handling consistent with the project's session model. Do not treat local demonstration storage as production authorization.

## Proportional verification

Check affected states: empty, filled/autofilled, password shown, field errors, pending submission and completion/return; failed requests or real CAPTCHA expiry only when implemented. Exercise Enter, Tab, icon actions, rapid duplicate submission and long/wrapped errors. Inspect a narrow viewport, a short laptop viewport and breakpoint-adjacent widths for overflow and reachable submission.

When a Provider animates the form, verify that early focus/typing can take over immediately and reduced motion preserves all final content and feedback. Report source inspection separately from browser observations; a successful build or screenshot cannot prove login behavior or server security.

## Keep in the project

Record the accepted field set, help/recovery scope, label presentation, CAPTCHA policy, session/destination contract and current verification evidence in existing project documentation. Exact heights, gaps, colors, curves, illustrations and motion timings stay in the project design system; reuse the decision method, not one project's login as a universal preset.
