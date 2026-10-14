/* Review framing only. Application routing/state stay in the project adapter. */
window.PrototypeReview = (() => {
  const {esc,btn,table,tr} = window.PrototypeKit;
  function shell({title,pages,current,content,trail=[]}) {
    const groups=[...new Set(Object.values(pages).map(p=>p.module))];
    return `<header class="reviewbar"><div><span class="pill dark">第二轮</span> <strong>${esc(title)}</strong><small>灰度规划原型 · 本地模拟</small></div><div class="row">${btn('流程引导','guide','','primary')}${btn('页面地图','map')}<a href="kit/catalog.html" target="_blank" rel="noopener">组件样本</a></div></header><div class="review-layout"><aside class="sidebar"><nav aria-label="模块与页面">${groups.map(m=>`<section><h2>${esc(m)}</h2>${Object.entries(pages).filter(([,p])=>p.module===m).map(([id,p])=>btn(`${esc(id)} ${esc(p.name)}`,'navigate',`data-page="${esc(id)}" ${id===current?'aria-current="page"':''}`,id===current?'active':'')).join('')}</section>`).join('')}</nav><p class="muted mt">演示模板，请用已确认的业务结构替换。</p></aside><main id="main" class="canvas"><div class="trail" aria-label="最近路径">${trail.map(p=>esc(p)).join(' → ')}${trail.length?' → ':''}<strong>${esc(current)} ${esc(pages[current].name)}</strong></div>${content}<p class="footer-note">用于确认布局、内容和页面关系；全部数据与动作均为本地模拟。</p></main></div>`;
  }
  function pageMap({pages,current,transitions,flows=[]}) {
    const groups=[...new Set(Object.values(pages).map(p=>p.module))];
    return `<div class="dialog-head"><div><h2>模块与页面关系</h2><p class="sub">${groups.length} 个模块 · ${Object.keys(pages).length} 个逻辑页面 · 点击页面直接查看</p></div>${btn('关闭','close')}</div><div class="map-groups">${groups.map(m=>`<section class="panel"><h3>${esc(m)}</h3><div class="stack mt">${Object.entries(pages).filter(([,p])=>p.module===m).map(([id,p])=>btn(`${esc(id)} ${esc(p.name)}<small>${esc(p.job)}</small>`,'map-page',`data-page="${esc(id)}"`,id===current?'map-node active':'map-node')).join('')}</div></section>`).join('')}</div><h3 class="mt mb">主要跳转与携带内容</h3>${table(['从哪里','操作','到哪里','携带 / 返回'],transitions.map(t=>tr([esc(t.from),esc(t.action),esc(t.to),esc(t.context)])))}${flows.length?`<h3 class="mt mb">跟着任务体验</h3><div class="row">${flows.map(f=>btn(`${esc(f.title)}<small>${esc(f.path)}</small>`,'start-flow',`data-recipe="${esc(f.id)}"`,'map-node')).join('')}</div>`:''}`;
  }
  return {shell,pageMap};
})();
