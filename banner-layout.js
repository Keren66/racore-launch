(()=>{
 const hero=document.querySelector('.hp-prototype-hero');
 if(!hero)return;
 const card=hero.querySelector('.hero-status-card');
 const label=document.createElement('span');label.className='hero-singapore';label.textContent='SINGAPORE';hero.append(label);
 let queued=false;
 function layout(){
  queued=false;
  const w=hero.clientWidth,viewport=window.innerWidth;
  const compact=viewport<=700;
  const font=viewport<=600?28:viewport<=850?28:viewport<=1100?32:Math.round(Math.max(36,Math.min(58,viewport*.0325)));
  hero.style.setProperty('--hero-heading-size',font+'px');
  const h=hero.clientHeight;
  const s=compact?(viewport<=600?280:320)/724:Math.max(w/2172,h/724);
  const iw=2172*s,ih=724*s;
  const copyLeft=hero.querySelector(".hp-hero-inner").getBoundingClientRect().left-hero.getBoundingClientRect().left;
  const left=compact?(viewport>600?copyLeft-1100*s:w-iw):(w-iw)/2,top=compact?h-ih:(h-ih)/2;
  // The bitmap and annotation share exactly the same source coordinates.
  for(const [name,value] of Object.entries({'--art-width':iw,'--art-height':ih,'--art-left':left,'--art-top':top}))hero.style.setProperty(name,value+'px');
  let right=w*.05;
  const button=document.querySelector('.bar-right a:last-child');
  if(viewport>1100&&button&&button.getBoundingClientRect().width){right=Math.max(16,hero.getBoundingClientRect().right-button.getBoundingClientRect().right)+28;}
  hero.style.setProperty('--card-right',right+'px');
  hero.style.setProperty('--globe-x',(left+1480*s)+'px');
  hero.style.setProperty('--globe-y',(top+315*s)+'px');
  hero.style.setProperty('--globe-radius',(285*s)+'px');
  const hubX=left+1396*s,hubY=top+406*s;
  const bounds=hero.getBoundingClientRect(),c=card.getBoundingClientRect();
  const cw=c.left-bounds.left;
  const lw=label.offsetWidth,lh=label.offsetHeight;
  let x=hubX+24;
  if(x+lw>cw-12)x=Math.min(hubX-lw-16,cw-lw-12);
  x=Math.max(8,Math.min(w-lw-8,x));
  label.style.left=x+'px';label.style.top=(hubY-lh+12)+'px';
  const lineStart=Math.min(hubX,x),lineEnd=Math.max(hubX,x+lw);
  label.style.setProperty('--leader-left',(lineStart-x)+'px');
  label.style.setProperty('--leader-width',(lineEnd-lineStart)+'px');
 }
 function schedule(){if(!queued){queued=true;requestAnimationFrame(layout);}}
 new ResizeObserver(schedule).observe(hero);
 new MutationObserver(schedule).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
 addEventListener('resize',schedule);addEventListener('load',schedule);document.fonts.ready.then(schedule);schedule();
})();

