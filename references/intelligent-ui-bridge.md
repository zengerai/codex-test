# Optional ChatGPT Intelligent UI design bridge

## What Intelligent UI is

OpenAI announced GPT-6 Intelligent UI on 2026-10-07 for supported **ChatGPT Chat** experiences. It can present text with native, interactive UI elements such as comparison layouts, forms, controls, and visual explorations.

**Important capability boundary:** As of this documentation, Intelligent UI is not a callable standalone API or guaranteed Codex App feature. This release did not introduce Intelligent UI into Codex or ChatGPT Work. Do not claim that Codex can directly call ChatGPT's Intelligent UI renderer.

## Recommended division of labor

**Codex / product-ui — production candidate source of truth**
- Generate a real HTML/CSS Style Demo Gallery, keeping content and task constant across A/B/C.
- Capture real screenshots using a browser when available.
- Use the selected style to build real product components and an interactive Product Demo.
- Keep approved design tokens and conventions in the repository's `DESIGN.md`.

**ChatGPT Intelligent UI — optional discussion and decision aid**
- Help the user explore comparative dimensions and tradeoffs in a ChatGPT conversation.
- Display an interactive comparison when that ChatGPT session supports it.
- Collect a preference like A/B/C, hybrids, density choices, and objections.
- Summarize the decision as a portable specification for Codex.

The two surfaces are complementary, not the same renderer. An Intelligent UI concept display is not proof that corresponding HTML/CSS code was implemented or browser-verified.

## Portable handoff format

If the user uses ChatGPT to choose, copy a short explicit decision back into Codex or write it into project documentation:

```md
# Visual Direction Decision
Status: Approved / Draft
Chosen: B
Borrowed from other directions: A's table density, C's navigation treatment
Target users: ...
Representative page: ...
Layout constraints: ...
Typography character: ...
Color/token character: ...
Density: ...
Component treatment: ...
Interaction priorities: ...
Reject: ...
Next step: build and review one representative Product Demo
```

Codex should not assume a ChatGPT conversation's interactive widget state is available in its local environment.

### Optional repository-backed handoff

If the user has connected an accessible GitHub repository and explicitly approves writing the selection, the ChatGPT-side assistant may commit the agreed visual decision to a known project path such as `design-exploration/visual-decision.md`. Codex can then fetch/pull that repository and read the decision file.

This is **file-based collaboration through GitHub**, not a direct Intelligent UI → Codex API or automatic transfer of widget state. Do not write to any project repo without an explicit target and user intent; do not overwrite existing design decisions without reviewing them.

## When not to use this bridge

- When the user is already reviewing the HTML gallery in Codex/browser.
- When an approved design system exists.
- When the extra handoff would slow a minor change.
- When the user requests one-shot/autonomous execution.

## Official references (verified 2026-10-08)

- OpenAI release: https://openai.com/index/gpt-6-for-everyone/
- Help: https://help.openai.com/en/articles/20001598-intelligent-ui-in-chatgpt
- Release notes: https://help.openai.com/en/articles/6825453-chatgpt-release-notes

Recheck product availability before promising a new integration.
