# product-ui V2 Evaluation Cases

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
- UI UX Pro Max is used if available for initial visual direction;
- accepted visual decisions should be suitable for persistence into DESIGN.md.

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
