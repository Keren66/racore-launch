(()=>{
 const nav=document.querySelector('.bar .nav');if(!nav)return;
 const links=[...nav.querySelectorAll('a')];
 function select(link){links.forEach(a=>{const current=a===link;a.classList.toggle('on',current);if(current)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')})}
 function sync(){const hash=location.hash;select(links.find(a=>a.getAttribute('href')===hash)||(hash==='#top'||!hash?links[0]:null))}
 links.forEach(a=>a.addEventListener('click',()=>select(a)));
 window.addEventListener('hashchange',sync);sync();
})();
