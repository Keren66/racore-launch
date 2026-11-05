(()=>{
 const win=document.querySelector('#apiWin');
 const copy=document.querySelector('#billing .feat-split>.feat-copy');
 if(!win||!copy)return;
 const desktop=window.matchMedia('(min-width:1101px)');
 function syncHeight(){
  if(!desktop.matches){win.style.removeProperty('--billing-height');return;}
  const height=copy.getBoundingClientRect().height;
  if(height>0)win.style.setProperty('--billing-height',height+'px');
 }
 const observer=new ResizeObserver(syncHeight);observer.observe(copy);
 desktop.addEventListener('change',syncHeight);
 window.addEventListener('resize',syncHeight);
 document.fonts.ready.then(syncHeight);
 syncHeight();
})();
