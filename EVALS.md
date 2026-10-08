# product-ui V2.2 Evaluation Cases

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
