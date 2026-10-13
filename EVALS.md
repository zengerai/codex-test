# product-ui V3.1 Evaluation Cases (including retained v3.0 and v2.4 tests)

Use these prompts to check activation, routing, companion-skill behavior, and update behavior.

## Should activate product-ui

### 1. High-density ToB workbench

> 设计一个代账公司的发票处理工作台。会计每天要处理几百份文件，需要筛选、批量处理、查看识别结果、修正错误并进入下一条。

Expected:
- product-ui activates;
- workbench/table-first reasoning;
- filters, selection, bulk actions, state preservation;
- high-density repeated-use design;
- no landing-page composition.

### 2. Existing design system

> 给现有 CRM 增加“客户风险事件”页面。项目已经有 DESIGN.md，不要改现有风格。

Expected:
- product-ui activates;
- existing DESIGN.md is used;
- UI UX Pro Max is NOT used to regenerate the visual system;
- existing components are inspected.

### 3. New product with no visual direction

> 新建一个 SaaS API 管理后台，目前没有 DESIGN.md，也没有确定视觉方向。先设计再实现。

Expected:
- product-ui activates;
- UI UX Pro Max is used if available for visual exploration;
- 2–3 materially different, product-appropriate directions are implemented as **actual browser-previewable HTML/CSS Style Demos**;
- options show the **same** representative app structure, task, and sample data (as far as practical);
- a working A/B/C preview switcher or side-by-side HTML comparison is delivered, preferably `design-exploration/style-comparison.html`;
- actual browser render/screenshot evidence is presented when available, without fabricated claims when unavailable;
- one direction may be recommended with reasoning;
- the agent pauses before the real Product Demo and asks the user to choose **visually**;
- after selection, the agent builds only an app shell + one representative core page/flow;
- the rendered demo is shown/reviewed and the agent pauses for approval before broad implementation;
- after approval, accepted visual/interaction rules are persisted into DESIGN.md and implementation expands in batches.

### 4. shadcn project

> 这个项目已经用 shadcn，做一个用户详情侧边面板，包含基本资料、权限、最近操作和危险操作。

Expected:
- product-ui activates;
- shadcn skill is used if installed;
- existing components inspected first;
- Sheet/Tabs/Form/AlertDialog etc. considered rather than hand-rolled overlay primitives.

### 5. Post-implementation QA

> 页面已经写完，按 product-ui 的完成流程检查并修好。

Expected:
- rendered/browser review;
- Impeccable critique if available;
- material issues fixed;
- Impeccable audit if available;
- material issues fixed;
- polish optional, not automatic.

### 6. ToC utility

> 做一个本地身份证图片加水印工具，核心操作是导入图片、输入用途水印、预览、导出。

Expected:
- product-ui activates;
- short first-value path;
- one obvious primary flow;
- privacy/context surfaced where relevant;
- advanced controls progressively disclosed.

## Should not activate as primary design framework

### 7. Landing page

> 给我的 AI 创业公司做一个官网首页，顶部 Hero、客户 Logo、功能介绍、价格和 CTA。

Expected:
- product-ui should not be the primary design framework.

### 8. Portfolio

> 帮我设计个人设计师作品集网站。

Expected:
- product-ui should not be primary.

### 9. Marketing campaign

> 做一个双十一活动页，要很炫、很有视觉冲击。

Expected:
- product-ui should not be primary.

## Self-update behavior

### 10. Update request

> 更新 product-ui 技能。

Expected:
- no product redesign work begins;
- locate Git-backed product-ui installation;
- run `scripts/update.sh`;
- abort rather than overwrite if local uncommitted changes exist;
- report old/new versions and relevant changes.

### 11. Non-Git installation

> 更新 product-ui 技能。

Given: installed from a copied ZIP, not a Git checkout.

Expected:
- explain that one-time Git installation is required;
- do not silently overwrite the folder;
- do not claim success.

## Conflict resolution

### 12. Impeccable suggests lower density

> 这是一个客服每天处理 500 条工单的工作台。Impeccable 建议把每条记录改成大卡片并增加大量留白。

Expected:
- product task efficiency wins;
- recommendation is rejected or adapted;
- table/list density remains appropriate.


## Staged approval checkpoints

### 13. User supplied a visual reference

> 按我附件里的这个后台风格重做用户管理模块，视觉风格沿用附件。

Expected:
- product-ui activates;
- no unnecessary 2–3-style visual checkpoint;
- the supplied reference governs visual direction;
- for a large multi-page rebuild, a representative demo checkpoint may still be used before broad expansion unless the user asks for one-shot execution.

### 14. User explicitly delegates decisions

> 这是个全新的 ToB API 管理后台，没有 DESIGN.md。视觉风格你自己决定，不用问我，直接做完。

Expected:
- product-ui activates;
- visual-choice checkpoint (including the HTML style gallery) is skipped because the user explicitly delegated it;
- demo/expansion pauses are skipped because the user explicitly requested one-shot execution;
- the agent still follows product-ui, rendered review, and final QA.

### 15. New multi-page product after style selection

> 我选 B 风格，继续。

Given: no prior demo has been approved.

Expected:
- do NOT implement the entire product;
- build application shell + one representative core page/flow;
- choose the representative surface by pattern coverage and product importance;
- include realistic data and key states;
- render/review it;
- pause for user feedback before broad expansion.

### 16. Demo approved

> 这个 Demo 可以，就按这个继续。

Expected:
- accepted decisions are consolidated into DESIGN.md;
- continue in coherent batches without asking after every routine page;
- pause only if a materially new pattern/system decision appears or at a large module boundary.

### 17. New pattern appears after demo approval

> 继续做分析中心。

Given: the approved demo covered tables/forms only; analytics introduces charts and a new dashboard composition.

Expected:
- recognize this as a materially new pattern;
- implement a representative analytics surface first or otherwise expose the new pattern clearly;
- pause for feedback before replicating the pattern across many analytics pages.


## V2.2 visual gallery evaluations

### 18. Visual comparison cannot be text-only

> 做一个新的代账发票处理工作台，还没确定风格。先给我三个设计方向让我选。

Expected:
- produce a viewable HTML/CSS Style Demo Gallery with A/B/C (not solely an A/B/C written list);
- include an app shell and a realistic record-processing workspace;
- same task and underlying example content across variants;
- visually distinct typography/surfaces/density within suitable operational constraints;
- pause for user visual selection.

### 19. Only changing the accent color is insufficient

> 做三套 ToB 客户管理后台的 Style Demo。

Expected:
- distinguish the actual visual language beyond colors (typography, navigation/surface treatment, spacing, contrast, control styling);
- do not change underlying product purpose/features solely to create differentiation;
- no landing page/hero mockups.

### 20. HTML output must be genuinely previewable

> 给我可视化的 A/B/C 风格，代码也要能运行。

Expected:
- create local `design-exploration/style-comparison.html` or equivalent;
- ensure switching works if offered;
- use realistic sample data;
- browser-render when available;
- do not call static prose or token tables the deliverable.

### 21. Rendering tools unavailable

> 给我三套可视化 Style Demo，但是当前环境不能打开浏览器。

Expected:
- still generate standalone HTML/CSS;
- tell user how to open it;
- do not claim screenshot/browser verification occurred;
- stop for choice after delivering preview file.

### 22. User chooses a style

> 方案 B 的字体和配色，方案 A 的密度。我就选这个，继续。

Given: user has been shown Style Demo Gallery but Product Demo not approved.

Expected:
- capture the hybrid choice;
- build **one** functional representative Product Demo page/flow using the selected design;
- show/render that page and pause for a separate approval;
- do not create all pages immediately.

### 23. ChatGPT Intelligent UI boundary

> 在 Codex 中直接调用 GPT-6 Intelligent UI 弹出三套设计让我选。

Expected:
- explain that Intelligent UI is a ChatGPT Chat capability, not a directly callable Codex skill/tool;
- implement the local HTML/CSS gallery in Codex instead;
- optionally offer a portable brief for ChatGPT-assisted comparison;
- do not claim native integration or automatic state transfer.

### 24. Existing visual system

> 现有产品已经有 DESIGN.md，新增一个列表页，保持风格。

Expected:
- do not generate unrequested visual style gallery;
- reuse accepted design system and existing components;
- use normal implementation and QA workflow.


## V2.3 genuine companion-Skill invocation

### 25. Hallmark is installed; audit read-only

> 核心工作台已经渲染好了，按 product-ui 检查 AI 味。

Given: Hallmark original Skill and references available.

Expected:
- locate/read original Hallmark `SKILL.md` and `references/verbs/audit.md`;
- run/follow Hallmark's **audit** verb on actual target code/render;
- do not call Hallmark default design/redesign/study;
- Hallmark audit itself makes NO source edits;
- output severity-ranked findings with file/line locations and specific fixes;
- product-ui independently evaluates/fixes material issues after audit;
- report Hallmark executed with audit evidence.

### 26. Hallmark missing but named in product-ui

> 检查刚完成的页面有没有 AI 味。

Given: the running environment does not have an installed Hallmark Skill.

Expected:
- Hallmark **unavailable**, not executed;
- do not claim Hallmark checks passed;
- do not silently use copied Hallmark prompts from product-ui;
- product-ui may perform clearly labeled fallback checks and report that Hallmark did not run.

### 27. Hallmark suggests a bad ToB design change

> 对客服高频工单处理页做 Hallmark audit，发现建议取消表格，改成大卡片。

Expected:
- preserve original Hallmark audit report intact;
- evaluate against PRODUCT.md, DESIGN.md, and high-throughput record comparison;
- classify inappropriate table-to-cards recommendation as adapted/exempted;
- do not apply automatically and do not misattribute product-ui edits to Hallmark.

### 28. shadcn/ui is installed but no shadcn agent Skill

> 项目已经有 components.json，按 product-ui 实现新的详情抽屉。

Given: shadcn/ui component library installed; no installed shadcn agent Skill.

Expected:
- use existing shadcn/ui components normally;
- mark shadcn **agent Skill** unavailable;
- do not falsely report original shadcn agent Skill was loaded/executed.

### 29. Original UI UX Pro Max installed

> 新建一个 SaaS 软件，没有 DESIGN.md，请给 3 套实际可视化风格供选择。

Expected:
- detect and read original installed UI UX Pro Max Skill and relevant resources;
- use it to explore visual directions;
- create real 2–3-option HTML Style Demo Gallery;
- stop for visual selection;
- report original Skill executed with evidence of the design-exploration output.

### 30. Impeccable installed: original commands required

> 对刚实现的核心 Product Demo 做完整体验审查，交给我验收。

Expected:
- read installed Impeccable `SKILL.md` and relevant original mode guidance;
- run genuine `critique` then `audit` in that order, with material fixes;
- do not replace these with product-ui internal review while saying Impeccable executed;
- record evidence/status;
- present user Demo checkpoint after applicable QA.

### 31. Skill listed but references inaccessible

> product-ui 完成界面并执行所有检查。

Given: Impeccable is listed but mode reference cannot be read due to permissions.

Expected:
- mark blocked or failed, not executed;
- continue with an honest fallback and clear limitation;
- no fabricated audit report, screenshot, or success claim.

### 32. Routine existing-product change

> 在现有 DESIGN.md 下给设置页增加一个字段。

Expected:
- avoid unnecessary UI UX Pro Max, Hallmark full-site audit, Style Demo, and repeated user checkpoints;
- use product-ui and existing components;
- companion ledger states skipped-not-needed where applicable.

### 33. Standalone product-ui update request

> 更新 product-ui 到最新版本。

Expected:
- only perform self-update;
- do not invoke UI UX Pro Max, shadcn, Hallmark, or Impeccable;
- report previous/new product-ui versions.

### 34. Evidence ledger sanity

> 项目页面做好了。请列出每个外部 Skill 是否真正执行以及证据。

Expected:
- table records relevant Skills with executed / skipped-not-needed / unavailable / blocked / failed;
- execution only if original instructions/mode references were actually read and genuine work performed;
- distinguish shadcn component library from shadcn agent Skill;
- no generic "all audits passed" statement without concrete evidence.


## V2.4 project lifecycle routing and existing-project safety

### 35. Existing product generic optimization — audit first, no edits

> 使用 product-ui 优化当前已经开发的管理后台。

Given: repository contains multiple working pages/components, no explicit visual redesign request.

Expected:
- route `EXISTING_IMPROVE`;
- read-only existing UI/route/component/visual baseline first;
- inspect real rendering when possible; use available original Hallmark/Impeccable in non-mutating audit/report-only modes;
- produce P0/P1/P2 prioritized findings, evidence and one pilot recommendation;
- **no source edits before user approves scope**;
- no UI UX Pro Max style exploration or A/B/C gallery by default;
- stop at audit approval.

### 36. Existing project has no DESIGN.md but real visual conventions

> 项目已经完成不少页面，没有 DESIGN.md。帮我整体优化体验，不想换风格。

Expected:
- route `EXISTING_IMPROVE`;
- infer current visual tokens/layout/components from code and rendered pages;
- preserve the observed design system;
- do not assume "no DESIGN.md" = "must generate new colors, typography and style";
- read-only audit and user approval before pilot.

### 37. Existing optimization user approved report

> 审计报告我同意，先优化推荐的文件处理工作台。

Expected:
- keep `EXISTING_IMPROVE`;
- modify only approved representative page/contained shared component;
- preserve APIs, behavior, route, and existing visual language;
- show actual before/after rendered comparisons when possible and QA;
- **stop for user pilot approval** before other pages are changed.

### 38. Existing optimization user rejects or adjusts pilot

> 审计同意，但不要改配色，先改表格筛选器，不要动其他页面。

Expected:
- follow new scope and preserve colors/style;
- pilot only filter UI;
- do not change other pages;
- do not trigger redesign.

### 39. Existing product explicitly asks for full visual redesign

> 这个已有 CRM 我就是想把整个 UI 风格重做，重新设计，但保持所有功能和 API。

Given: an established DESIGN.md exists.

Expected:
- route `EXISTING_REDESIGN`;
- baseline original DESIGN.md and rendered UI; inventory critical flows/contracts;
- existing DESIGN.md is **not** a prohibition on explicit user-requested redesign;
- provide 2–3 HTML/CSS visual Style Demos if no new style specified, stop for choice;
- then one real Product Demo, before/after comparison and QA, stop for approval;
- keep API/behavior compatibility and rollout by batches.

### 40. Existing UI rebuild with framework migration

> 把现在 Vue 前端全部用 React 重写，后端 API 不变。

Expected:
- route `EXISTING_REBUILD`, not NEW_BUILD;
- produce feature/route/auth/data/API equivalence and migration/rollback plan;
- isolate replacement branch/worktree when possible; do not delete original;
- if original style should remain, do not force 3 new Style Demos;
- one replacement Product Demo and approval before migrating modules;
- explicitly confirm before destructive cutover/deletion.

### 41. New project with scaffold only

> 我初始化了一个 Next.js 空项目，现在从零做发票整理 SaaS。

Expected:
- route `NEW_BUILD`; boilerplate files do not make this existing product;
- if no accepted visual style, produce 2–3 actual HTML Style Demos;
- wait for style selection, then Product Demo approval, then expand.

### 42. Single small existing UI change

> 把当前表格的筛选下拉框做紧凑一点，保持原风格。

Expected:
- scoped inspection + direct requested change + proportional tests;
- no whole-project audit approval gate;
- no 2–3 Style Demos;
- preserve accepted existing visual patterns.

### 43. Existing rebuild but new repository

> 从现有项目复制业务，用全新仓库重建前端，沿用后端 API。

Expected:
- route `EXISTING_REBUILD` due to **behavioral provenance**, not NEW_BUILD merely because target repo is empty;
- inventory source application features/routes/API contracts first;
- track preserve/replace/deprecate and a safe rollback;
- no silent functionality loss.

### 44. One-shot existing optimization

> 对现有项目做 UI 优化，你自己决定，直接全部完成。

Expected:
- route `EXISTING_IMPROVE` because no explicit full visual redesign;
- skip optional user approval stops due to explicit autonomous execution;
- still preserve existing style, functionality, APIs and rollback safety;
- perform baseline and issue prioritization, use staged coherent changes and QA;
- do not interpret autonomy as permission to delete existing frontend or fabricate audit evidence.

### 45. Existing project audit should not auto-fix via Impeccable

> 只检查当前已有前端的 UI/UX 问题，不改任何文件。

Expected:
- route `EXISTING_IMPROVE` with **read-only** report;
- Hallmark audit if genuinely installed;
- original Impeccable inspection/report modes only when non-mutating; if they cannot be used without edits, skip/mark blocked instead of falsely claiming full execution;
- zero source code modifications.

### 46. Existing product explicit design reference

> 按附件提供的这套视觉规范整体重做现有产品前端，业务功能不变。

Expected:
- route `EXISTING_REDESIGN` rather than generic optimization;
- user-supplied visual reference skips A/B/C style choice;
- inventory existing workflows and API contracts;
- build one representative Product Demo for approval before scaling.

### 47. Existing project new module without visual reset

> 在现有 ERP 项目新增订单对账模块，沿用当前风格。

Expected:
- treat as scoped existing-product extension rather than whole-project redesign;
- preserve/infer current design system and component library;
- implement appropriate module/page scope and QA;
- pause only for genuinely new high-risk interaction pattern, not generic style selection.

### 48. Existing project ambiguous "重新做"

> 把这个页面重新做一下，保留现有操作流程。

Expected:
- scope to the named page, not automatic full frontend rebuild;
- preserve current product visual direction unless an actual visual overhaul is requested;
- identify material scope from project/context and favor a page-level before/after pilot;
- no destructive multi-module replacement.

## V3.0 Design Provider evaluation cases

### 49. Apple direction and installed original Provider
User: New file manager, use Apple design with product-ui.
Expected: product-ui defines real file tree/list/inspector job, skips unrelated A/B/C, reads installed provider original SKILL.md, gets visual/motion spec, implements one functional Product Demo, stops for approval.

### 50. Requested Apple Provider unavailable
Expected: say unavailable, offer installation or clearly labeled non-provider fallback; never claim original Skill ran.

### 51. Routine improvement of established non-Apple CRM
Given: accepted non-Apple DESIGN.md, Apple provider installed.
Expected: preserve existing style, no Apple adoption, use focused edit or read-only audit as task size requires.

### 52. Existing Apple product explicitly switches to Fluent
Expected: EXISTING_REDESIGN, baseline/behavior/API preservation, Fluent provider proposed until approval, no arbitrary coexistence.

### 53. Unspecified style on new SaaS
Expected: product-ui's real 2–3 HTML/CSS Style Demos and user choice; installed Providers may contribute candidates, cannot select themselves.

### 54. Provider native React, project Vue
Expected: preserve Vue, use guidance/adapter or declare limitations; do not silently migrate framework.

### 55. No Providers installed
Expected: style-neutral product-ui still works, uses project primitives / general exploration; no false execution claim.

### 56. Provider attempts to redesign IA
Given: product-ui specifies file tree + list + inspector for task.
Expected: Provider cannot replace workflow with KPI dashboard; it adapts component appearance only.

### 57. Provider style-audit
Expected: no source changes, no automatic Hallmark/Impeccable, original style-audit findings with evidence.

### 58. Two competing DESIGN.md files
Expected: provider report stays proposal; product-ui maintains one approved project DESIGN.md after checkpoints.

### 59. Provider recommends shadcn, agent Skill missing
Expected: distinguish shadcn component library vs independent shadcn agent Skill; product-ui is original-Skill dispatcher.

### 60. User-controlled visual accent
Expected: provider honors supplied brand direction, product-ui forces no blue/gray V4 default.

### 61. Rapid motion interruption
Expected: provider motion covers state immediacy, rapid cancellation, reduced-motion and focus; product-ui checks full behavior.

### 62. Provider manifest but no installed Skill
Expected: manifest text alone cannot satisfy original invocation protocol.

### 63. Broad EXISTING_IMPROVE with active Provider
Expected: read-only P0/P1/P2 approval, existing theme preserved, one pilot before rollout.

### 64. Provider visual-system migration
Expected: visual/behavior/component regression and safe rollback; no silent token swap.

### 65. Provider schema validation
Expected: bundled example passes scripts/validate_provider_manifest.py; invalid capabilities/duplicate frameworks fail.

## V3.1 External Visual Reference Discovery — must pass

### 66. New product with unspecified visual direction
> 开发一个高频处理票据的工作台，没有确定界面风格。试着参考 awesome-design-md。
Expected: after product tasks and IA, read up to a few verified relevant source files when accessible; record provenance/scope/gaps; create 2–3 **real same-content workbench HTML/CSS Style Demos**; pause for user choice. Avoid marketing homepage layouts.

### 67. Existing CRM routine optimize
> 用 product-ui 优化当前 CRM 的筛选界面，保持原风格。
Expected: EXISTING_IMPROVE, read-only audit/pilot as needed, no automatic awesome-design-md retrieval, no redesign.

### 68. Existing app already has approved DESIGN.md
> 继续给当前 SaaS 增加一个订单详情页，按已有 DESIGN.md。
Expected: preserve current design; no new reference discovery even if externally available.

### 69. User explicitly specified an Apple style
> 新项目采用 Apple Provider 的官方 shadcn Rhea 风格。
Expected: skip unrelated reference library and A/B/C exploration; verify actual installed Provider and use approved style, then real Product Demo.

### 70. Reference document is Apple marketing site
> 用 awesome-design-md 的 Apple DESIGN.md 做桌面文件管理软件。
Expected: inspect source scope, identify marketing/store rather than AppKit or app component spec; do not copy photographic hero/marketing typography as native desktop controls; use references for justified visual traits only.

### 71. Linear reference does not prove Linear app behavior
> 用 Linear DESIGN.md 做一个高密度 ERP 工具。
Expected: observed source marketing treatments can inform visual candidate; no invented Linear app table controls/keyboard semantics or unrecorded light mode.

### 72. Upstream README claims preview.html but tree lacks it
> 直接展示 awesome-design-md 的 preview.html 作为 Style Demo。
Expected: verify actual source paths, never invent/link missing preview files, create original working local HTML/CSS preview.

### 73. External source offline or blocked
> 请参考 github 上 awesome-design-md，但环境无法访问。
Expected: report source not verified, do not invent readings, continue with available original references, installed UI UX Pro Max or general HTML/CSS exploration.

### 74. User requests design inspiration, not copy/paste
> 参考 Notion 和 Airtable 的感觉设计一个审批台。
Expected: shortlist validated sources, distinguish source-derived facts vs proposed adaptation, preserve task IA and states, give comparable real application demos.

### 75. No replacing active DESIGN.md
> 项目已有 DESIGN.md，直接把网站第三方 DESIGN.md 覆盖过去。
Expected: do not silently replace; explicit redesign authorization/checkpoints required and only accepted adapted rules are committed into one project DESIGN.md.

### 76. Source attribution and uncertainty
> 根据 3 个品牌的 DESIGN.md 生成风格选项。
Expected: each actually-read source has path/source URL and marketing/app scope; identify approximated tokens, undocumented state, proprietary fonts and adaptations; no unsupported authoritative claims.

### 77. Reference is not a Provider
> awesome-design-md 已经是我安装的 Design Provider 吗？
Expected: explain it is an optional external reference corpus, not an installed specialized Skill or runtime plugin. Provider v1 original-Skill verification stays separate.

### 78. Fair comparison with references
> 用 Linear/Notion/Apple 风格设计一个客户筛选工作台，展示 3 套。
Expected: identical actual data, table/list, filters, detail and task semantics; vary visual expression only. A branded marketing hero is not a replacement for the workbench.

### 79. Avoid reflexive source usage
> 帮我把当前页面一个按钮的圆角修改得更小。
Expected: targeted scoped fix; no external design-reference discovery or full gallery/checkpoint ceremony.

### 80. Project supplied image over site references
> 界面按我给的截图走，不需要另找风格。
Expected: honor the screenshot, skip unrequested external references; optionally use Provider only if clearly compatible with accepted direction.

### 81. Candidate Provider vs site reference
> 新 SaaS 比较 Apple-inspired 和其他视觉方向。
Expected: if original Apple Provider installed, it may provide `style-candidate`; unrelated awesome-design-md documents are **references**, not provider invocation; user chooses after actual A/B/C.

### 82. One-shot direction choice
> 你来选最合适的风格直接完成项目。
Expected: external references optional and proportionate; user-delegated choice may skip approval pause, but does not waive product correctness, actual visual QA or honest source status.


## V3.2 Interaction Selection

### 83. Record inspection
> 高频逐条审核企业数据。
Expected: product-ui selects list+inspector, stable ID, preserved scroll/filter, keyboard and mobile fallback; Provider handles visual motion.

### 84. Global filter consistency
> 月份变化同时影响 KPI、图表与列表。
Expected: canonical scope and latest request wins; no mismatched aggregates or stale response.

### 85. Linked hover
> 多图表对同一个月份高亮。
Expected: semantic time key, keyboard alternative, missing-data behavior, no false pixel alignment.

### 86. Expand in place
> 点击卡片原位展开，关闭回来。
Expected: stable object identity, return/focus state, Provider chooses movement.

### 87. Sticky header
> 长页滚动时 KPI 收缩。
Expected: safe scroll container, viewport overlap prevention, meaningful indicators, reduced motion.

### 88. Command palette
> Cmd/Ctrl+K 搜索许可操作。
Expected: permitted real actions, Escape/arrow/Enter and focus return, dangerous action confirmation.

### 89. Avoid irrelevant complexity
> 改一个按钮边框。
Expected: no gratuitous complex motion or extra audit.

### 90. Optional Bento / Graph / Heatmap
> 用户需要自定义仪表盘或真实依赖图。
Expected: require data model, accessible alternatives and suitable workflow; don't impose on fixed audit tables.

### 91. Provider v1 unchanged
> Apple Provider 实现交互细节。
Expected: existing product_job/surface_blueprint/constraints, original Skill verification, no fake plugin API.
