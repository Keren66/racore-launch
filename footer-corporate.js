(()=>{const foot=document.querySelector('.foot-in');if(!foot)return;
 const icons={phone:'<path d="M6 3h4l2 5-3 2a15 15 0 0 0 5 5l2-3 5 2v4c0 2-2 3-4 2C9 18 4 13 3 7c-1-2 1-4 3-4Z"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c5 5 5 13 0 18-5-5-5-13 0-18Z"/>',mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/>'};
 const svg=k=>'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">'+icons[k]+'</svg>';
 const grid=foot.querySelector('.foot-grid');const first=grid?.firstElementChild;
 if(first){first.querySelector('.foot-tag')?.remove();const contacts=document.createElement('div');contacts.className='footer-contacts';contacts.innerHTML=[['globe','官方网站','www.racorecloud.com','https://www.racorecloud.com/'],['mail','联系邮箱','keren.zhang@verycloud.cn','mailto:keren.zhang@verycloud.cn']].map(([i,t,v,h])=>'<a href="'+h+'"><i>'+svg(i)+'</i><span><b>'+t+'</b><small>'+v+'</small></span></a>').join('');first.append(contacts)}
 const strip=document.createElement('div');strip.className='footer-service-strip';strip.innerHTML='<span>'+svg('phone')+'24/7 企业服务支持</span><span>'+svg('globe')+'全流程专业服务</span>';foot.prepend(strip);
 const language=foot.querySelector('#langToggle2');if(language)language.hidden=true;
 const back=document.createElement('button');back.type='button';back.className='footer-back-top';back.innerHTML='返回顶部 <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 11 6-6 6 6M12 5v14"/></svg>';back.onclick=()=>window.scrollTo({top:0,behavior:'smooth'});foot.querySelector('.foot-bottom')?.append(back);

})();
(()=>{const contacts=document.querySelector('.footer-contacts');if(!contacts)return;
 const intro=document.createElement('p');intro.className='footer-intro';intro.textContent='Racore 产品发布中心——新产品与新能力，从这里率先发布。';contacts.before(intro);
})();
