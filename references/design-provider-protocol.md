# Design Provider Protocol v1

An instruction-level, written handoff between product-ui and an **independently installed original Design Provider Skill**. It is NOT a runtime API, package-manager plugin or guarantee of automatic invocation.

## Discovery and eligibility

1. Detect Skills actually installed/readable in the active Codex environment; do not equate a link or DESIGN.md mention with an installation.
2. Read the original provider SKILL.md and its provider-mode reference; verify its capability. A design-provider.json file is optional discovery metadata, not execution evidence.
3. Check whether visual family, surface and framework support match the project. native / adapted / guidance are distinct levels. Never change Vue to React simply to use a style preset.
4. Use the original Skill in supported provider mode, and report observable outputs and status: executed / skipped-not-needed / unavailable / blocked / failed.
5. No automatic downloads, dependency installation, source rewrites, external Skill invocation or framework migration merely because a provider recommends them.

Optional provider manifest: templates/design-provider-manifest.example.json. Supported fields:
- contract_version = 1.0; provider_id = exact original installed Skill name; display_name; entry = SKILL.md
- design_families (e.g. apple-inspired, fluent), capabilities, surfaces
- framework_support array of name + level = native / adapted / guidance
- dependencies optional. Metadata can be validated by scripts/validate_provider_manifest.py.

## Invocation modes

- style-candidate: read-only contribution for an orchestrator-owned A/B/C comparison.
- spec: read-only token, component, motion and theme design specification for an already selected visual direction.
- implement: scoped code and component implementation AFTER the product-ui workflow permits edits.
- style-audit: read-only visual-system conformance findings, not a global UX or Hallmark audit.

Modes style-candidate, spec, style-audit MUST NOT modify project files. No provider owns project lifecycle routing, user checkpoints, PRODUCT.md, Hallmark/Impeccable or shadcn agent dispatch.

## Input handoff (product-ui → Provider)

Provide:
- contract_version, request_id, provider_id, mode
- project_route (one of the four product-ui lifecycle modes)
- visual_intent (explicit user style, already-approved design, or gallery candidate; optional reference)
- product_job (primary user/object/tasks, frequency, density and essential interactions)
- surface_blueprint (agreed IA, page type, regions, key states, navigation and data contracts)
- environment (framework, existing component library, browser targets, constraints)
- design_source (accepted DESIGN.md / inferred existing system / none for new)
- change_scope (read-only, or explicit permitted files/surfaces), deliverable, accessibility/permission limits

Example: templates/design-provider-handoff.example.yaml.

## Output handoff (Provider → product-ui)

Return:
- provider_id, original provider_version if known, contract_version, mode, status
- visual_family / selected preset (if applicable), constraints and reasons
- design_decisions (theme, tokens, typography, surfaces, style/branding overrides)
- component_mapping (agreed product element → recommended visual component/library, fallback/limitations)
- motion (trigger, timing or dynamics, interruption, reduced-motion, focus) where relevant
- actual artifacts (spec/patch/file paths/rendered references), actual verification results
- compatibility/dependencies and unresolved product-ui or user decisions
- style_conformance = pass / warnings / fail / not-tested, with concrete evidence

Implementation output is reviewed/integrated by product-ui. Provider claims must distinguish suggested changes from applied changes.

## Selection and authority

1. Explicit user-specified style/provider → try verified compatible provider; if unavailable, disclose and offer installation or transparent general fallback.
2. Accepted project DESIGN.md provider → reuse if present; if unavailable, preserve implemented visual style and disclose absence.
3. Accepted DESIGN.md with no provider or established implemented visual system → preserve during routine work. Never auto-replace.
4. Undefined new visual direction → product-ui renders 2–3 fair HTML/CSS Style Demos, maybe using installed providers for candidates. User/explicit delegation selects; only then adopt provider.
5. Explicit redesign/rebuild → old DESIGN.md becomes baseline; proposed provider becomes active ONLY after approval or authorized one-shot route.

Authority: user and product/domain truth > accepted DESIGN.md (except authorized redesign) > product-ui IA/workflow/accessibility > provider visual proposal > library defaults / audits.

## DESIGN.md persistence (illustrative, not a required parser)

    visual_system:
      provider: example-design-provider
      contract_version: "1.0"
      provider_version: "1.2.0"
      family: example-family
      preset: optional-project-specific-preset
      status: approved
      overrides: []

Project has ONE active accepted DESIGN.md; no provider-owned competing document. For no provider, preserve original styles and record no provider or omit provider metadata. Updating/switching Providers can be a visual-system migration requiring approved prototype and regression QA.

## No-provider path

The user can still use product-ui without any Provider. Base output on existing components/design for current projects and neutral preview exploration for new projects. Report provider:none, no fabricated original execution or style-conformance.
