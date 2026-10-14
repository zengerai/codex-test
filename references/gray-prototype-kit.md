# Reusable grayscale prototype kit

Read only when implementing Round 2 deliverable A with the bundled assets. Read [gray-prototype.md](gray-prototype.md) for behavior/approval requirements. This is a small planning starter, not a production design system or a universal product generator.

## Start without rewriting the common code

Resolve paths relative to this Skill's directory, not a hardcoded home directory:

```sh
python3 <skill-root>/scripts/init_gray_prototype.py --output <project>/planning/round-2/prototype
```

The initializer requires a new or empty output directory and never overwrites a populated one. It copies local assets without installing dependencies, starting servers, or accessing the network. Open the generated `index.html` directly or serve that directory on an available local port.

The runnable order-review example demonstrates the contracts with three pages. **Its modules, page count, fields, workflow and data are examples only.** Replace `example.js` with the project's already-approved scope. The template does not infer a complete application from a page list. For an established compatible component system, reuse that instead of migrating just to use this kit.

## Files and ownership

| Resource | Reuse/adaptation |
|---|---|
| `assets/gray-prototype/kit/components.js` + `.css` | Neutral primitives and common planning layout styles |
| `kit/review.js` + `.css` | Optional review shell, module/page registry navigation and relationship overview |
| `kit/guide.js` + `.css` | Domain-independent real-action guide controller and gray skin |
| `kit/catalog.html` | Eight groups of component style examples, useful for checking consistency |
| `vendor/driverjs/` | Locally pinned Driver.js runtime/CSS, MIT license, provenance and integrity hashes |
| `index.html` / `example.js` | Runnable replaceable integration example with local state, routes, validation, failure simulation and modal save |

Load this contract before reading implementations. Copy/runtime assets need not be expanded into model context. Keep third-party files unmodified; use the adjacent skin and project adapter. The exact dependency version is recorded in `vendor/driverjs/dependency.json`; other suitable guide engines may be used without changing the Skill workflow.

## Component contract

`window.PrototypeKit` exposes:
- `esc(value)` for text/attribute data escaping.
- `btn(labelHTML, action, trustedAttrs = '', className = '')` → button with `data-action`.
- `pill(text, dark = false)`, `opts(values, current)`, `select(label, changeName, values, current, trustedAttrs = '')`.
- `field(label, inputName, value, type = 'text')` → labeled input with `data-input`.
- `table(headerHTML[], rowHTML[])`, `tr(cellHTML[])`, `empty(title, body, actionHTML = '')`.
- `pageHeader({id,module,title,sub,action,back})` → consistent identity/title/action region.

HTML-bearing arguments are for controlled templates; escape document/user/sample values before interpolation. Values passed to text-only helpers are escaped by the helper. No library-specific production component choice is implied.

`window.PrototypeReview` optionally exposes:
- `shell({title,pages,current,content,trail=[]})`: review toolbar, grouped navigation, content area; emits normal `data-action` controls (`guide`, `map`, `navigate`). `pages` maps unique IDs to `{module,name,job}`.
- `pageMap({pages,current,transitions,flows=[]})`: grouped page links and a transition table; transitions contain `{from,action,to,context}`, flow links `{id,title,path}`. Handles presentation only. The project decides what route/context a `map-page` or `start-flow` action opens.

## Guide recipe

```js
const recipes = {
  inspect: {
    version: 1, // Increment if a changed sequence makes saved progress incompatible.
    title: 'Complete one task', meta: 'Suggested first route',
    path: 'P01 → P02', goal: 'What this route establishes',
    summary: 'What was actually demonstrated', outcomes: ['A concrete relationship'],
    steps: [{
      id: 'open-item', page: 'P01', target: '[data-action="open-item"]',
      where: 'M1 / P01 List', title: 'Open an item',
      why: 'Why the user is doing this', action: 'Click View',
      result: 'P02 opens for that item',
      accept: (event, context) => event.action === 'open-item' && context.page === 'P02'
    }]
  }
};
```

A target may be a selector string or `(context) => selector`. Use `read: true` for an explanatory acknowledgement step; it does not need an `accept` callback. `side` may influence popover placement. Optional recipe `reconcile(index, context)` can return the appropriate actual form phase; it must not claim an unperformed action succeeded.

The guide uses one runtime instance per document. Persisted progress is namespaced by `storageKey` and recipe version. Give each generated project its own key. Call `guide.choose()` from a persistent manual entry; `guide.start(recipeId)`, `pause()`, `resume()` and `getProgress()` are also available.

```js
const guide = window.PrototypeGuide({
  recipes, storageKey: 'my-project-prototype-v1',
  // Optional; defaults shown. welcome may be false when no initial invitation is useful.
  welcome: true, dialogSelector: '#modal', dialogHeaderSelector: '.dialog-head',
  resetAction: 'prototype-reset',
  adapter: {context, checkpoint, start, restore, dialog, closeDialog, announce}
});
```

Adapter functions:
- `context()` returns fresh observable business state, including `page`; success predicates use it.
- `checkpoint()` returns JSON-serializable route/object/scope/form-phase context. Draft contents belong to project state; do not clear them on guide changes.
- `start(recipeId)` opens a sensible entry without deleting existing work or automatically submitting actions.
- `restore(checkpoint)` synchronously renders the relevant context (and open dialog when needed), preserving business data. For an async framework, adapt the integration to wait for the rendered target before resuming.
- `dialog(html)`, `closeDialog()` own a reusable accessible dialog and restore focus; `announce(text)` shows status feedback.

After each business action has updated state/rendering, dispatch:

```js
window.dispatchEvent(new CustomEvent('prototype:change', {
  detail: {action: 'save-item', id: itemId}
}));
```

Emit navigation and modal-close changes too, so departed or hidden targets can pause. A reset event with the configured `resetAction` clears tour progress only after the project handles its explicit data reset. Input edits should persist project drafts without completing the step. The completion condition, not the attempt event alone, determines advancement.

Native modal targets get an inline coach; other targets use Driver.js. The example includes keyboard exit, local persistence, pause/reload/resume and error retry to make this integration reviewable. Verify those behaviors when adapting the DOM/framework; the template cannot validate project-specific selectors or business rules by itself.
