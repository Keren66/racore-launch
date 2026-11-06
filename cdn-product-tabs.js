(()=>{
 const ids=['featured','fusioncdn','cdncli'];const panels=ids.map(id=>document.getElementById(id));if(panels.some(p=>!p))return;
 const group=document.createElement('div');group.id='cdn-products';group.className='cdn-products two-content';
 const nav=document.createElement('div');nav.className='cdn-product-tabbar';nav.setAttribute('role','tablist');nav.setAttribute('aria-label','CDN 产品');
 group.append(nav);panels[0].before(group);panels.forEach(p=>group.append(p));
 const heads=panels.map(p=>p.querySelector('.feat-head,.two-section-head'));heads.forEach(h=>h.querySelector(':scope > p')?.remove());
 const labels={zh:['版本更新','平台概览','命令行工具'],en:['Release updates','Platform overview','Command-line tools']};
 const buttons=ids.map((id,i)=>{const b=document.createElement('button');b.type='button';b.id='cdn-product-tab-'+id;b.setAttribute('role','tab');b.setAttribute('aria-controls',id);b.addEventListener('click',()=>activate(i,true));b.addEventListener('keydown',e=>{let n=i;if(e.key==='ArrowRight')n=(i+1)%3;else if(e.key==='ArrowLeft')n=(i+2)%3;else if(e.key==='Home')n=0;else if(e.key==='End')n=2;else return;e.preventDefault();activate(n,true);buttons[n].focus()});nav.append(b);panels[i].setAttribute('role','tabpanel');panels[i].setAttribute('aria-labelledby',b.id);return b});
 function activate(index,updateHash=false){heads[index].append(nav);panels.forEach((p,i)=>{p.hidden=i!==index;buttons[i].setAttribute('aria-selected',String(i===index));buttons[i].tabIndex=i===index?0:-1});if(updateHash)history.replaceState(null,'','#'+ids[index]);}
 function language(){const en=document.documentElement.lang.startsWith('en');buttons.forEach((b,i)=>{const label=document.createElement('span');label.textContent=labels[en?'en':'zh'][i];b.replaceChildren(label)});nav.setAttribute('aria-label',en?'CDN products':'CDN 产品')}
 // Align the visible heading, excluding section padding and CSS anchor offsets.
 function scrollToPanel(index,behavior='smooth'){
  requestAnimationFrame(()=>{
   const bar=document.querySelector('.bar');
   const headerBottom=Math.max(0,bar?.getBoundingClientRect().bottom||0);
   const gap=index===1?(window.matchMedia('(max-width:600px)').matches?28:56):(window.matchMedia('(max-width:600px)').matches?16:24);
   const top=window.scrollY+heads[index].getBoundingClientRect().top-headerBottom-gap;
   window.scrollTo({top:Math.max(0,top),behavior:window.matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':behavior});
  });
 }
 function fromHash(scroll){const i=ids.indexOf(location.hash.slice(1));if(i<0)return;activate(i);if(scroll)scrollToPanel(i)}
 activate(Math.max(0,ids.indexOf(location.hash.slice(1))));language();new MutationObserver(language).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});window.addEventListener('hashchange',()=>fromHash(true));
 // Handle a same-page product link once, including repeated clicks on the current hash.
 document.addEventListener('click',e=>{
  if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
  const a=e.target.closest('a[href]');if(!a||a.hasAttribute('download')||(a.target&&a.target!=='_self'))return;
  const url=new URL(a.href,location.href);
  if(url.origin!==location.origin||url.pathname!==location.pathname||url.search!==location.search)return;
  const i=ids.indexOf(url.hash.slice(1));if(i<0)return;
  e.preventDefault();activate(i);
  if(location.hash!==url.hash){const oldURL=location.href;history.pushState(null,'',url.hash);window.dispatchEvent(new HashChangeEvent('hashchange',{oldURL,newURL:location.href}));}
  else scrollToPanel(i);
 });
 if(ids.includes(location.hash.slice(1))){
  const alignInitial=()=>scrollToPanel(ids.indexOf(location.hash.slice(1)),'instant');
  if(document.readyState==='complete')alignInitial();else window.addEventListener('load',alignInitial,{once:true});
 }
})();
