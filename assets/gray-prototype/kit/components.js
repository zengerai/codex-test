/* Grayscale Prototype Kit v1 — planning primitives, no domain data. */
window.PrototypeKit = (() => {
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  // label/attrs are trusted template fragments. Escape source data before composing them.
  const btn = (label, action, attrs = '', cls = '') => `<button class="${cls}" data-action="${action}" ${attrs}>${label}</button>`;
  const pill = (text, dark = false) => `<span class="pill ${dark ? 'dark' : ''}">${esc(text)}</span>`;
  const opts = (values, current) => values.map(v => { const [id,label] = Array.isArray(v) ? v : [v,v]; return `<option value="${esc(id)}" ${id === current ? 'selected' : ''}>${esc(label)}</option>`; }).join('');
  const select = (label,name,values,current,other='') => `<label>${esc(label)} <select aria-label="${esc(label)}" data-change="${name}" ${other}>${opts(values,current)}</select></label>`;
  const empty = (title,body,action='') => `<div class="empty"><h2>${esc(title)}</h2><p class="muted">${esc(body)}</p>${action}</div>`;
  const table = (heads,rows) => `<div class="table-wrap"><table><thead><tr>${heads.map(h=>`<th scope="col">${h}</th>`).join('')}</tr></thead><tbody>${rows.join('')}</tbody></table></div>`;
  const tr = cells => `<tr>${cells.map(x=>`<td>${x}</td>`).join('')}</tr>`;
  const field = (label,name,value,type='text') => `<label class="field">${esc(label)}<input type="${type}" data-input="${name}" value="${esc(value)}"></label>`;
  const pageHeader = ({id,module,title,sub,action='',back=''}) => `<header class="page-head"><div>${back?`<div class="back">${back}</div>`:''}<div class="page-id">${esc(id)} / ${esc(module)}</div><h1 tabindex="-1" id="page-title">${esc(title)}</h1><p class="sub">${sub}</p></div>${action}</header>`;
  return {esc,btn,pill,opts,select,empty,table,tr,field,pageHeader};
})();
