(()=>{const fit=()=>{const s=Math.min(innerWidth/1905,innerHeight/744);document.documentElement.style.setProperty('--scale',s);document.documentElement.style.setProperty('--yscale',s);document.documentElement.style.setProperty('--art-left',Math.max(0,(innerWidth-1905*s)/2)+'px');document.documentElement.style.setProperty('--art-top',Math.max(0,(innerHeight-744*s)/2)+'px');};fit();addEventListener('resize',fit);function lang(){const en=parent.document.documentElement.lang.startsWith('en');document.documentElement.lang=en?'en':'zh-CN';document.querySelectorAll('[data-zh]').forEach(n=>n.textContent=n.dataset[en?'en':'zh']);}lang();new MutationObserver(lang).observe(parent.document.documentElement,{attributes:true,attributeFilter:['lang']});})();
// Align the desktop card with the header's Global Login right edge.
(()=>{
 const align=()=>{
  const card=document.querySelector('.release-card');
  if(!card)return;
  if(innerWidth<=760){card.style.removeProperty('left');return;}
  const frame=window.frameElement;
  const button=parent.document.querySelector('.bar-right a:last-child');
  if(!frame||!button)return;
  const scale=parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--scale'))||1;
  const target=button.getBoundingClientRect().right-frame.getBoundingClientRect().left;
  const current=card.getBoundingClientRect().right;
  const left=parseFloat(getComputedStyle(card).left)||0;
  card.style.left=(left+(target-current)/scale)+'px';
 };
 const schedule=()=>requestAnimationFrame(align);
 addEventListener('resize',schedule);
 addEventListener('load',schedule);
 document.fonts.ready.then(schedule);
 schedule();
})();
