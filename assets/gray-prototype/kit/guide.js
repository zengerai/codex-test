/* Reusable guided review controller. Recipes and adapter own business meaning. */
window.PrototypeGuide = function ({recipes, adapter, storageKey, dialogSelector="#modal", dialogHeaderSelector=".dialog-head", resetAction="prototype-reset", welcome=true}) {
  const {esc} = window.PrototypeKit;
  let progress = null, driver = null, timer, internal = false, currentTarget = null;
  try { progress = JSON.parse(sessionStorage.getItem(storageKey) || 'null'); } catch {}
  const save = () => { try { sessionStorage.setItem(storageKey, JSON.stringify(progress)); } catch {} };
  const recipe = () => recipes[progress?.recipe];
  const step = () => recipe()?.steps[progress?.index];
  if(progress && (!recipe() || progress.version!==(recipe().version||1) || !Number.isInteger(progress.index) || progress.index<0 || (!progress.finished&&!step()))) {progress=null;save();}
  const host = document.createElement('div'); host.id = 'guide-status'; document.body.append(host);
  const clear = () => { internal = true; driver?.destroy(); driver = null; internal = false; document.querySelectorAll('.guide-inline').forEach(e=>e.remove()); document.querySelectorAll('.guide-target').forEach(e=>e.classList.remove('guide-target')); currentTarget = null; document.body.classList.remove('guide-narrow'); };
  function status() {
    if (!progress || progress.finished) { host.innerHTML = ''; return; }
    host.innerHTML = `<div class="guide-resume"><span>${esc(recipe().title)} · ${progress.index+1}/${recipe().steps.length}${progress.active?'':' · 已暂停'}</span><button data-guide="${progress.active?'pause':'resume'}">${progress.active?'暂停引导':'继续引导'}</button><button data-guide="choose">换条流程</button></div>`;
  }
  function pause() { if (!progress) return; progress.active = false; save(); clear(); status(); adapter.announce('引导已暂停，操作和进度已保留。顶部「流程引导」可继续。'); }
  function complete() {
    const r=recipe(); progress.finished=true; progress.active=false; save(); clear(); status();
    adapter.dialog(`<div class="guide-intro"><div class="guide-eyebrow">流程已走通 · ${esc(r.title)}</div><h2>现在可以回看页面关系了</h2><p>${esc(r.summary)}</p><ol class="guide-checklist">${r.outcomes.map(t=>`<li>✓ ${esc(t)}</li>`).join('')}</ol><p class="muted">本轮只确认布局、内容和交互关系；完成引导不等于确认方案。</p><div class="dialog-actions"><button data-guide="choose">体验其他流程</button><button class="primary" data-guide="close">自由查看</button></div></div>`);
  }
  function advance() {
    progress.index++; progress.checkpoint=adapter.checkpoint(); save();
    if (progress.index >= recipe().steps.length) complete(); else draw();
  }
  function description(st) {
    return `<div class="guide-location">${esc(st.where)}</div><p>${esc(st.why)}</p>${st.action?`<div class="guide-action"><b>请操作</b><span>${esc(st.action)}</span></div>`:''}<p class="guide-result"><b>操作后</b> ${esc(st.result)}</p><div class="guide-count">${progress.index+1} / ${recipe().steps.length} · ${esc(recipe().path)}</div><button class="guide-pause-link" data-guide="pause">暂停，自由查看</button>`;
  }
  function draw() {
    clear(); if (!progress?.active || !step()) return;
    const ctx=adapter.context(), reconciled=recipe().reconcile?.(progress.index,ctx);
    if(Number.isInteger(reconciled)&&reconciled!==progress.index){progress.index=reconciled;progress.checkpoint=adapter.checkpoint();save();}
    const st=step();
    const selector=typeof st.target==='function'?st.target(ctx):st.target;
    const target=selector?document.querySelector(selector):null;
    if (!target || !target.getClientRects().length || (st.page && ctx.page!==st.page)) {
      progress.active=false; save(); status(); adapter.announce('当前页面已离开引导路径。点击「继续引导」回到刚才的节点。'); return;
    }
    currentTarget=target; status();
    const modal=target.closest('dialog[open]');
    // Native dialogs live in the browser top layer; use an inline coach there.
    // Keep their focus trap intact instead of moving or demoting the dialog.
    if (modal) {
      const coach=document.createElement('section'); coach.className='guide-inline'; coach.setAttribute('aria-label','流程引导');
      coach.innerHTML=`<div class="guide-inline-head"><h3>${esc(st.title)}</h3><button data-guide="pause">暂停</button></div>${description(st)}`;
      const heading=modal.querySelector(dialogHeaderSelector);if(heading)heading.after(coach);else modal.prepend(coach); target.classList.add('guide-target'); return;
    }
    target.scrollIntoView({block:'center',inline:'nearest',behavior:'instant'});
    driver=window.driver.js.driver({animate:false,overlayOpacity:.36,overlayClickBehavior:'none',allowClose:true,allowKeyboardControl:true,stagePadding:7,stageRadius:5,popoverClass:'prototype-coach',closeBtnLabel:'暂停引导',onDestroyed:()=>{if(!internal && progress?.active) pause();}});
    driver.highlight({element:target,popover:{title:st.title,description:description(st),side:st.side||'bottom',align:'start',showButtons:st.read?['next','close']:['close'],nextBtnText:progress.index===recipe().steps.length-1?'完成这条流程':'看懂了，继续',onNextClick:()=>{if(st.read)advance();},onCloseClick:pause}});
    // Do not cover the active control on narrow screens: reserve room and dock the coach.
    if (window.innerWidth<650) { document.body.classList.add('guide-narrow'); target.scrollIntoView({block:'start',inline:'nearest',behavior:'instant'}); driver.refresh(); }
  }
  function changed(event={}) {
    if (!progress?.active || !step()) return;
    const st=step(),ctx=adapter.context();
    if (!st.read && st.accept?.(event,ctx)) { advance(); return; }
    // Resume a partially completed task at its actual phase.
    const idx=recipe().reconcile?.(progress.index,ctx);
    if (Number.isInteger(idx) && idx!==progress.index) { progress.index=idx;progress.checkpoint=adapter.checkpoint();save();draw();return; }
    const selector=typeof st.target==='function'?st.target(ctx):st.target;
    if (document.querySelector(selector)!==currentTarget || !currentTarget?.getClientRects().length) draw();
    else driver?.refresh();
  }
  function start(id) {
    if(!recipes[id]?.steps?.length)return;
    clear(); adapter.closeDialog(); adapter.start(id);
    progress={recipe:id,version:recipes[id].version||1,index:0,active:true,finished:false,checkpoint:adapter.checkpoint()}; save(); draw();
  }
  function resume() {
    if (!progress || progress.finished || !recipe()) return choose();
    adapter.closeDialog(); adapter.restore(progress.checkpoint); progress.active=true; save(); draw();
  }
  function choose(first=false) {
    if (progress?.active) {progress.active=false;save();clear();status();}
    const pending=progress&&!progress.finished&&recipe();
    adapter.dialog(`<div class="guide-intro"><div class="guide-eyebrow">第二轮 · 跟着业务动作理解页面</div><h2>${first?'先走一遍，再看布局':'选择一条流程体验'}</h2><p>每一步会标出所在模块与页面，解释当前任务、要点哪里，以及操作后会发生什么。你可以随时暂停，自由探索。</p>${pending?`<div class="guide-pending"><span>上次停在「${esc(recipe().title)}」第 ${progress.index+1} 步</span><button data-guide="resume">继续上次进度</button></div>`:''}<div class="guide-choices">${Object.entries(recipes).map(([id,r])=>`<button data-guide="start" data-recipe="${id}"><span class="guide-eyebrow">${esc(r.meta)}</span><strong>${esc(r.title)}</strong><small>${esc(r.path)}</small><span>${esc(r.goal)}</span></button>`).join('')}</div><div class="guide-foot"><span>使用本地示例数据；填写与点击会真实改变原型状态。</span><button data-guide="close">先自由查看</button></div></div>`);
  }
  document.addEventListener('click',e=>{const el=e.target.closest('[data-guide]'); if(!el)return;switch(el.dataset.guide){case 'start':start(el.dataset.recipe);break;case 'pause':pause();break;case 'resume':resume();break;case 'choose':choose();break;case 'close':adapter.closeDialog();break;}});
  // The adapter emits after rendering. Consume each outcome in order: debouncing
  // can discard a successful save when the dialog-close event follows it.
  window.addEventListener('prototype:change',e=>{if(e.detail?.action===resetAction){clearTimeout(timer);clear();progress=null;save();status();return;}changed(e.detail);});
  // Escape pauses; only a real business outcome advances an action step.
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&progress?.active){e.preventDefault();pause();}},true);
  document.querySelector(dialogSelector)?.addEventListener('cancel',()=>{if(progress?.active)pause();});
  window.addEventListener('resize',()=>{if(progress?.active) {clearTimeout(timer);timer=setTimeout(draw,100);}});
  status();
  const key=storageKey+'-seen';
  let seen=false;try{seen=!!sessionStorage.getItem(key);}catch{seen=true;}
  if(progress?.active){progress.active=false;save();status();}
  if (welcome && !seen && !new URLSearchParams(location.search).has('tour-off')) {try{sessionStorage.setItem(key,'1');}catch{}setTimeout(()=>choose(true),120);}
  return {choose,start,pause,resume,getProgress:()=>progress};
};
