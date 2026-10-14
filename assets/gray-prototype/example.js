/* Replaceable example, not a default product specification. No external services. */
(() => {
  const K=window.PrototypeKit, R=window.PrototypeReview, $=q=>document.querySelector(q);
  const {esc,btn,pill,table,tr,empty,pageHeader}=K;
  const STORE='product-ui-order-example-v1';
  const pages={
    P01:{module:'M1 · 订单',name:'订单列表',job:'找到需要核对的订单。'},
    P02:{module:'M1 · 订单',name:'订单详情',job:'核对订单内容并保存说明。'},
    P03:{module:'M2 · 核对记录',name:'核对记录',job:'追溯已保存说明和对应订单。'}
  };
  const orders=[
    {id:'DEMO-1001',name:'夏野文具店（示例）',item:'桌面整理套装',amount:'256.00',shipping:'待发货'},
    {id:'DEMO-1002',name:'北川书店（示例）',item:'书架标签套装',amount:'128.00',shipping:'已发货'}
  ];
  const initial={page:'P01',id:orders[0].id,source:'P01',search:'',drafts:{},reviews:{},trail:[]};
  let saved={};try{saved=JSON.parse(sessionStorage.getItem(STORE)||'{}');}catch{}
  let s={...initial,...saved,error:'',simulateFailure:false}, lastFocus, toastTimer;
  const copy=v=>JSON.parse(JSON.stringify(v));
  const order=()=>orders.find(o=>o.id===s.id)||orders[0];
  const persist=()=>{try{const {error,simulateFailure,...data}=s;sessionStorage.setItem(STORE,JSON.stringify(data));}catch{}};
  const announce=text=>{$('#toast').textContent=text;$('#toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),3500);};
  const emit=(action,extra={})=>window.dispatchEvent(new CustomEvent('prototype:change',{detail:{action,...extra}}));
  function readRoute(){const q=new URLSearchParams(location.hash.slice(1));s.page=pages[q.get('p')]?q.get('p'):'P01';s.id=orders.some(o=>o.id===q.get('id'))?q.get('id'):s.id;s.source=q.get('from')==='P03'?'P03':'P01';}
  function hash(){return '#'+new URLSearchParams({p:s.page,id:s.id,from:s.source}).toString();}
  function nav(page,id=s.id,source=s.source){s.trail=[...s.trail,s.page].slice(-4);s.page=pages[page]?page:'P01';s.id=id;s.source=source;s.error='';history.pushState({},'',hash());persist();render();$('#page-title')?.focus({preventScroll:true});}
  function dialog(html){lastFocus=document.activeElement;$('#modal').innerHTML=`<div class="dialog-inner">${html}</div>`;if(!$('#modal').open)$('#modal').showModal();}
  function closeDialog(){if($('#modal').open)$('#modal').close();lastFocus?.focus?.({preventScroll:true});}
  function head(title,sub,action='',back=''){return pageHeader({id:s.page,module:pages[s.page].module,title,sub,action,back});}
  function pageList(){const rows=orders.filter(o=>(o.name+o.id).includes(s.search));return head('订单列表','虚构订单 · 核对状态与发货状态分别记录。')+`<div class="filters"><label>订单 / 客户<input type="search" id="search" value="${esc(s.search)}" placeholder="搜索示例订单"></label>${btn('清除','clear')}</div>`+(rows.length?table(['订单号','客户','金额 / 元','发货','核对','操作'],rows.map(o=>tr([esc(o.id),esc(o.name),o.amount,pill(o.shipping),pill(s.reviews[o.id]?'已核对':'待核对'),btn('查看并核对 →','open-order',`data-id="${o.id}"`)]))):empty('没有匹配的订单','可清除搜索后继续。',btn('清除搜索','clear')));}
  function pageDetail(){const o=order();return head(o.id,`${esc(o.name)} · 来源 ${s.source} ${esc(pages[s.source].name)}`,btn('查看核对记录','records'),btn('← 返回来源','back','','link'))+`<div class="review-split"><section class="panel order-summary"><h2>订单内容</h2><p class="mt">商品：${esc(o.item)}</p><p>金额：${o.amount} 元</p><p class="mt">发货状态 ${pill(o.shipping)}</p><p class="sub">保存核对说明只影响人工核对记录；本示例不执行发货。</p></section><section class="panel review-form"><h2>核对说明</h2><label class="field">说明（必填）<textarea id="note" placeholder="例如：已核对商品与金额。">${esc(s.drafts[o.id]??s.reviews[o.id]?.note??'')}</textarea></label>${s.error?`<p class="notice warning mb" role="alert">${esc(s.error)}</p>`:''}${btn('保存核对说明','request-save','','primary')}<p class="sub">此动作只保存本地模拟记录。</p></section></div>`;}
  function pageRecords(){const entries=Object.entries(s.reviews);return head('核对记录','只显示已保存说明；未提交草稿留在订单详情。')+(entries.length?table(['订单','核对说明','更新次数','操作'],entries.map(([id,v])=>tr([esc(id),esc(v.note),String(v.revision),btn('查看原订单','record-order',`data-id="${id}"`)]))):empty('暂无核对记录','先从订单列表完成一次核对。',btn('进入订单列表','navigate','data-page="P01"')));}
  function render(){document.title=`${s.page} ${pages[s.page].name} · 灰度模板`;$('#app').innerHTML=R.shell({title:'订单核对 · 可替换示例',pages,current:s.page,trail:s.trail,content:({P01:pageList,P02:pageDetail,P03:pageRecords})[s.page]()})+`<div class="example-reset">${btn('重置本地示例','reset-prompt','','small')}</div>`;}
  function confirmSave(){dialog(`<div class="dialog-head"><div><h2>确认保存核对说明</h2><p class="sub">P02 内的确认弹窗 · 订单 ${esc(order().id)}</p></div>${btn('关闭','close')}</div><p>${esc(s.drafts[s.id]??s.reviews[s.id]?.note??'')}</p><label class="check mt"><input type="checkbox" id="simulate-failure" ${s.simulateFailure?'checked':''}>模拟保存失败（评审工具）</label><div id="save-error" role="alert"></div><div class="dialog-actions">${btn('取消','close')}${btn('确认保存','confirm-save','','primary')}</div>`);}
  function showMap(){dialog(R.pageMap({pages,current:s.page,transitions:[{from:'P01',action:'查看并核对',to:'P02',context:'携带订单 ID；返回保留搜索条件'},{from:'P02',action:'保存后查看记录',to:'P03',context:'保存成功的说明才进入记录'},{from:'P03',action:'查看原订单',to:'P02',context:'打开记录对应订单；返回核对记录'}],flows:[{id:'review',title:'完成一次订单核对',path:'P01 → P02 → P03'}]}));}
  document.addEventListener('click',e=>{
    const el=e.target.closest('[data-action]');if(!el||el.disabled)return;const action=el.dataset.action;
    switch(action){
      case 'guide':guide.choose();break;
      case 'map':showMap();break;
      case 'start-flow':guide.start(el.dataset.recipe);break;
      case 'close':closeDialog();break;
      case 'map-page':closeDialog();nav(el.dataset.page);break;
      case 'navigate':nav(el.dataset.page);break;
      case 'open-order':nav('P02',el.dataset.id,'P01');break;
      case 'record-order':nav('P02',el.dataset.id,'P03');break;
      case 'back':nav(s.source);break;
      case 'records':nav('P03');break;
      case 'clear':s.search='';render();break;
      case 'request-save':{
        const note=$('#note').value;s.drafts[s.id]=note;
        if(!note.trim()){s.error='请填写核对说明。';render();$('#note').focus();}else{s.error='';confirmSave();}break;
      }
      case 'confirm-save':
        if(s.simulateFailure){$('#save-error').innerHTML='<p class="notice warning mt">模拟保存失败，说明已保留。取消失败模拟后可重试。</p>';break;}
        s.reviews[s.id]={note:s.drafts[s.id].trim(),revision:(s.reviews[s.id]?.revision||0)+1};closeDialog();render();announce('核对记录已保存；发货状态保持不变。');break;
      case 'reset-prompt':dialog(`<div class="dialog-head"><h2>重置本地示例</h2>${btn('取消','close')}</div><p>清除本示例的草稿、记录和引导进度。</p><div class="dialog-actions">${btn('确认重置','reset-confirm','','primary')}</div>`);break;
      case 'reset-confirm':closeDialog();s={...copy(initial),error:'',simulateFailure:false};history.replaceState({},'',hash());render();break;
    }
    persist();emit(action,{id:el.dataset.id});
  });
  document.addEventListener('input',e=>{if(e.target.id==='note'){s.drafts[s.id]=e.target.value;persist();}if(e.target.id==='search'){s.search=e.target.value;const pos=e.target.selectionStart;render();$('#search').focus();$('#search').setSelectionRange(pos,pos);persist();emit('search');}});
  document.addEventListener('change',e=>{if(e.target.id==='simulate-failure'){s.simulateFailure=e.target.checked;emit('failure-toggle');}});
  window.addEventListener('popstate',()=>{readRoute();closeDialog();render();emit('browser-back');});
  $('#modal').addEventListener('close',()=>{lastFocus?.focus?.({preventScroll:true});emit('dialog-closed');});
  readRoute();render();
  const context=()=>({page:s.page,id:s.id,modal:$('#modal').open&&!!$('[data-action="confirm-save"]'),saved:!!s.reviews[s.id],error:s.error});
  const step=(id,page,title,target,why,action,result,accept,read=false)=>({id,page,title,target,where:`${pages[page].module} / ${page} ${pages[page].name}`,why,action,result,accept,read});
  const recipes={review:{version:1,title:'完成一次订单核对',meta:'模板示例 · 可替换',path:'P01 → P02 → P03',goal:'验证列表、详情、确认弹窗和记录之间的关系。',summary:'你已核对一个订单并保存说明，记录仍能回到原订单。',outcomes:['详情使用选中订单的身份。','确认保存后才产生核对记录。','核对状态与发货状态分别记录。'],steps:[
    step('open-order','P01','从订单列表选择一个对象','[data-action="open-order"]','列表用于找到要处理的订单；这里使用两条虚构数据。','点击高亮的「查看并核对」。','进入 M1 / P02，携带这条订单 ID 和返回来源。',(e,c)=>e.action==='open-order'&&c.page==='P02'),
    step('read-order','P02','核对当前订单的内容','.order-summary','当前对象的商品、金额和发货状态集中展示。核对说明在旁边填写。','','下一步填写本订单的核对说明。',null,true),
    step('write-note','P02','填写并发起保存','.review-form','填写一条说明，观察表单与确认弹窗之间的关系。','输入核对说明，然后点击「保存核对说明」。','必填校验通过后打开确认弹窗；此时尚未保存。',(e,c)=>e.action==='request-save'&&c.modal),
    step('confirm-save','P02','确认后才产生记录','#modal [data-action="confirm-save"]','这是 P02 内的弹窗。可使用失败模拟检查重试时输入是否保留。','点击「确认保存」。','成功后关闭弹窗；失败时留在这里，可取消失败模拟后重试。',(e,c)=>e.action==='confirm-save'&&!c.modal&&c.saved),
    step('view-record','P02','查看这次保存产生的记录','main [data-action="records"]','说明已经保存，订单的发货状态不受影响。','点击「查看核对记录」。','进入 M2 / P03，显示刚才的订单与核对说明。',(e,c)=>e.action==='records'&&c.page==='P03'),
    step('read-record','P03','记录可以回到原订单','.table-wrap','每条已保存说明关联具体订单；未提交草稿不会显示在这里。','','引导结束后可查看原订单、返回列表或自由浏览页面地图。',null,true)
  ]}};
  const guide=window.PrototypeGuide({recipes,storageKey:STORE+'-guide',resetAction:'reset-confirm',adapter:{context,announce,dialog,closeDialog,
    checkpoint:()=>({page:s.page,id:s.id,source:s.source,search:s.search,modal:context().modal}),
    start(){s.search='';nav('P01');},
    restore(cp){if(!cp||!pages[cp.page])return;nav(cp.page,cp.id,cp.source);s.search=cp.search||'';render();if(cp.modal)confirmSave();}
  }});
  window.exampleGuide=guide;
})();
