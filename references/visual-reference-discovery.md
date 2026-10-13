# Optional Visual Reference Discovery — product-ui v3.1

**Role:** provide concrete external **reference evidence** for product-ui's visual-direction discovery. This reference does NOT define an active design system, install a Provider, replace UI UX Pro Max, generate components, or bypass the rendered Style Demo and Product Demo checkpoints.

## When to run (gate first)

Use **only if visual direction needs exploration**:
- A genuine `NEW_BUILD` with no accepted visual direction;
- An explicitly authorized `EXISTING_REDESIGN` or visual-reset `EXISTING_REBUILD` with an unspecified new style;
- The user expressly asks to compare particular visual references or derive a direction, even if an otherwise approved system exists. In this case treat the request as reference research **until** the user authorizes a redesign.

**Do not automatically run** on:
- `EXISTING_IMPROVE` or routine extensions governed by an accepted `DESIGN.md` or coherent live UI;
- A specified style/reference or already-selected/approved Provider, except when the user specifically wants reference comparisons;
- A small targeted UI fix, read-only general UX audit, or one-shot task where such sourcing adds no value;
- A project for which web/GitHub access is unavailable. Continue with user references, existing UI, UI UX Pro Max when genuinely available, or honest general visual exploration; don't invent sourced claims.

Research must be **proportional**: source 2–3 distinct directions only if that materially improves quality; avoid scanning the full catalog or loading many ~20–40 KB design analyses. Select likely candidates by product fit first.

## Reference collection: optional, externally maintained

- Repository: https://github.com/VoltAgent/awesome-design-md
- Example path pattern: `design-md/<site>/DESIGN.md` at the externally maintained repository.
- Examples relevant to product UI *visual exploration* (not necessarily their in-app UIs):
  - https://github.com/VoltAgent/awesome-design-md/blob/main/design-md/linear.app/DESIGN.md
  - https://github.com/VoltAgent/awesome-design-md/blob/main/design-md/notion/DESIGN.md
  - https://github.com/VoltAgent/awesome-design-md/blob/main/design-md/airtable/DESIGN.md
  - https://github.com/VoltAgent/awesome-design-md/blob/main/design-md/sap/DESIGN.md

This is a **website-derived, third-party analysis set**, not verified product UI source code or official brand specifications. Some entries analyze only homepage, product marketing, pricing and brand pages. **Do not infer** that a site marketing token, hero layout, action hierarchy, breakpoint, in-product table behavior or Light/Dark setting reflects the software's actual internal UI.

When referring to this corpus, retrieve specific current files from the original GitHub repository when possible; attribution includes repository/path and the checked commit SHA or access date when known. Do not claim a source was read if only a README description was seen.

**Preview caveat:** upstream README may mention `preview.html` and `preview-dark.html`, but current repository inventory must be verified before linking them. Do not assume these files exist. product-ui must generate its **own real HTML/CSS Style Demos** regardless.

## Procedure: source → evidence → direction, not source → overwrite

1. **Ground the product first.** Use product-ui Phases 1–4: target user, task frequency, table/list vs editor/utility, navigation and critical states. These structures remain constant across style comparison.
2. **Shortlist max 2–3 fit-for-purpose sources.** Prefer developer/productivity/enterprise visual languages for application UI; an unrelated shopping or luxury marketing site requires a user-supplied reason. Do not select references just because famous.
3. **Inspect each actual DESIGN.md.** Capture: source URL & scope (marketing website vs product app vs uncertain); visual atmosphere; semantic color roles; typography/spacing/elevation; component styling explicitly documented; responsive notes; known gaps. Use actual headings/phrasing from source, keep **observed** separate from **proposed adaptation**.
4. **Filter and translate.** Form a short `Visual Reference Brief` (template: `templates/visual-reference-brief.example.md`) for **each direction**. Map features onto the SAME product screen; explicitly discard oversized hero banners, marketing CTA/pricing grids, promotional imagery and unverified internal software controls unless the product truly requires them. Keep readability, density, keyboard/a11y and locale constraints.
5. **Construct A/B/C actual HTML/CSS previews** from the shortlisted directions, with identical record content, features, layout regions, core interaction semantics and comparable viewport. Vary only suitable visual expression. UI UX Pro Max can contribute independently when *actually installed*; a verified Design Provider may contribute a read-only `style-candidate`, but neither reference nor Provider chooses for the user.
6. **Show real previews**, give a concise source mapping and clearly label “derived inspiration”, “directly observed in the source analysis”, or “inferred adaptation for this app”. Recommend a direction and STOP for the established user selection checkpoint unless one-shot selection is explicitly delegated.
7. **After approval:** the direction and its adapted implementation rules flow into the project's **single** `DESIGN.md` under product-ui governance. Until then, store briefs under temporary exploration material, never replace approved `DESIGN.md` with a raw third-party document. An installed approved Provider then supplies its specialist implementation; external reference is not itself a Provider.

## What NOT to copy or assume

- **Do not paste an upstream site's full DESIGN.md** into project root or into this Skill; it would compete with approved design and import unrelated marketing rules.
- Do not transfer source hex values or fonts blindly; ensure branding rights/legibility/contrast and appropriate substitutes for proprietary families.
- Do not quote third-party analyses as if authored by Apple/Linear/SAP or as authoritative/fully current. Source files may say `alpha`, contain approximations, or explicitly list missing modes/interaction states.
- **No Apple style override:** Apple Provider still owns its selected app-component style (shadcn Luma/Rhea when suitable), Apple HIG interpretation and Motion. An upstream **Apple marketing-site** DESIGN.md is a reference, not a replacement for app UI/HIG.
- Do not silently introduce or install any Provider / library; `awesome-design-md` is **a reference library**, not an agent Skill, runtime Design Provider, or bundle of executable components.
- Preserve the original repository's attribution and license requirements if copying licensed text/code, but ideally store only your **own short observations, links and independent adaptations**. Distinguish copyright/trademark/licensing for individual brands and fonts.

## Evidence and acceptance checklist

A sourcing-assisted Style Demo passes only if:
- It was **eligible** for discovery in the current project route;
- Each selected reference is linked to a **real checked document**; scope (marketing vs product) and missing behavior/themes noted;
- The adapted direction is not represented as a product-app replica of a marketing page;
- A/B/C have equal real-product content, functionality and viewport; HTML/CSS is actually browser-previewable, not just a mood board or prose;
- External references did **not** change a pre-existing approved visual system without permission;
- No unapproved source was merged into the single project `DESIGN.md`;
- Provider routing remains independent and after the visual decision.

If no suitable externally verified reference is found, **skip** with a short reason and use existing style-exploration methods. This is optional inspiration, not a blocking dependency.
