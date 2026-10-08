# product-ui V2.1 Evaluation Cases

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
- 2–3 materially different, product-appropriate visual directions are presented;
- one direction may be recommended with reasoning;
- the agent pauses before visual implementation and asks the user to choose;
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
- visual-choice checkpoint is skipped because the user explicitly delegated it;
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
