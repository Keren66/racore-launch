(()=>{
 let selected=location.hash.startsWith('#u-')?location.hash.slice(1):null;
 function build(){
  const list=document.querySelector('#logList');if(!list)return;
  let timeline=document.querySelector('.log-timeline');
  if(!timeline){timeline=document.createElement('div');timeline.className='log-timeline';timeline.setAttribute('role','tablist');timeline.setAttribute('aria-label','发布时间');list.before(timeline)}
  let hint=document.querySelector('.timeline-swipe-hint');if(!hint){hint=document.createElement('p');hint.className='timeline-swipe-hint';timeline.before(hint)}hint.textContent=document.documentElement.lang.startsWith('zh')?'左右滑动，查看其他版本':'Swipe to explore other releases';
  timeline.replaceChildren();const entries=[...list.querySelectorAll('.log-entry')];
  if(!entries.some(e=>e.id===selected))selected=entries[0]?.id;
  function choose(id){selected=id;entries.forEach(e=>e.hidden=e.id!==id);[...timeline.children].forEach(b=>{b.setAttribute('aria-selected',String(b.dataset.target===id));b.tabIndex=b.dataset.target===id?0:-1;if(b.dataset.target===id&&timeline.scrollWidth>timeline.clientWidth){timeline.scrollTo({left:Math.max(0,b.offsetLeft-timeline.clientWidth/2+b.offsetWidth/2),behavior:'smooth'})}})}
  entries.forEach((e,index)=>{const b=document.createElement('button');b.type='button';b.role='tab';b.dataset.target=e.id;b.setAttribute('aria-controls',e.id);b.textContent=e.querySelector('.log-date .mono').textContent;const label=document.createElement('span');label.textContent=e.querySelector('.log-title>span:last-child').textContent;label.title=label.textContent;const shortZh=["融合 CDN 1.1.2","账单系统 v0.1","RacoreClaw","融合 CDN 平台","CDN CLI","Racoder IDE","更多产品"];const shortEn=["Fusion CDN 1.1.2","Billing v0.1","RacoreClaw","Fusion CDN Platform","CDN CLI","Racoder IDE","Coming soon"];label.textContent=(document.documentElement.lang.startsWith("zh")?shortZh:shortEn)[index]||label.textContent;label.className='timeline-product';const date=document.createElement('time');date.className='timeline-date';const rawDate=e.querySelector('.log-date .mono').textContent;date.textContent=rawDate==='TBD'&&document.documentElement.lang.startsWith('zh')?'待定':rawDate;if(rawDate!=='TBD')date.setAttribute('datetime',rawDate);b.replaceChildren(label,date);b.addEventListener('click',()=>choose(e.id));b.addEventListener('keydown',ev=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(ev.key))return;ev.preventDefault();const buttons=[...timeline.children],idx=buttons.indexOf(b);const next=ev.key==='Home'?0:ev.key==='End'?buttons.length-1:(idx+(ev.key==='ArrowRight'?1:-1)+buttons.length)%buttons.length;buttons[next].click();buttons[next].focus()});timeline.append(b)});
  choose(selected);
 }
 const previous=window.renderLog;if(previous)window.renderLog=function(){previous();build()};build();
 window.addEventListener('hashchange',()=>{if(location.hash.startsWith('#u-')){selected=location.hash.slice(1);build()}});
 document.querySelector('.nav a.on')?.setAttribute('aria-current','page');
})();
(()=>{
 function align(){const nav=document.querySelector('.bar .nav a'),bar=document.querySelector('.bar-in');if(!nav||!bar)return;const n=nav.getBoundingClientRect(),b=bar.getBoundingClientRect(),ns=getComputedStyle(nav),bs=getComputedStyle(bar);document.documentElement.style.setProperty('--log-left',(n.left+Number(ns.paddingLeft.replace('px','')))+'px');document.documentElement.style.setProperty('--log-right',(document.documentElement.clientWidth-b.right+Number(bs.paddingRight.replace('px','')))+'px')}
 align();window.addEventListener('resize',align);document.fonts.ready.then(align);document.querySelector('#langToggle')?.addEventListener('click',()=>requestAnimationFrame(align));
})();
