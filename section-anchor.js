/* Align section headings visually below the fixed navigation. */
(()=>{
 const ids=['billing','claw','racoder','about'];
 function align(id,behavior='smooth'){
  const section=document.getElementById(id);
  const heading=section?.querySelector('.feat-head,.sec-head,.two-section-head');
  if(!heading)return;
  requestAnimationFrame(()=>{
   const bottom=document.querySelector('.bar-in')?.getBoundingClientRect().bottom||0;
   const gap=id==='about'?40:id==='claw'?(matchMedia('(max-width:600px)').matches?28:56):(matchMedia('(max-width:600px)').matches?16:24);
   const top=scrollY+heading.getBoundingClientRect().top-bottom-gap;
   scrollTo({top:Math.max(0,top),behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':behavior});
  });
 }
 document.addEventListener('click',e=>{
  if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
  const a=e.target.closest('a[href]');if(!a||(a.target&&a.target!=='_self'))return;
  const url=new URL(a.href,location.href),id=url.hash.slice(1);
  if(url.origin!==location.origin||url.pathname!==location.pathname||url.search!==location.search||!ids.includes(id))return;
  e.preventDefault();if(location.hash!==url.hash){history.pushState(null,'',url.hash);window.dispatchEvent(new HashChangeEvent('hashchange'));}else align(id);
 });
 addEventListener('hashchange',()=>{const id=location.hash.slice(1);if(ids.includes(id))align(id)});
 const initial=()=>{const id=location.hash.slice(1);if(ids.includes(id))align(id,'instant')};
 if(document.readyState==='complete')initial();else addEventListener('load',initial,{once:true});
})();
