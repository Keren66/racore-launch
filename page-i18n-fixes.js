(()=>{
 const arrow='<svg class="ui-link-arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6"/></svg>';
 function update(){const zh=document.documentElement.lang.startsWith('zh');
 document.querySelectorAll('[data-zh][data-en]').forEach(e=>e.textContent=e.dataset[zh?'zh':'en']);
 document.querySelectorAll('.hp-section-heading .hp-link,.log-link').forEach(e=>{if(!e.querySelector('.ui-link-arrow'))e.insertAdjacentHTML('beforeend',arrow)});
 const contacts=document.querySelectorAll('.footer-contacts b');if(contacts[0])contacts[0].textContent=zh?'官方网站':'Official website';if(contacts[1])contacts[1].textContent=zh?'联系邮箱':'Contact email';
 const intro=document.querySelector('.footer-intro');if(intro)intro.textContent=zh?'Racore 产品发布中心——新产品与新能力，从这里率先发布。':'Racore Product Launch Hub — discover new products and capabilities here first.';
 document.querySelectorAll('.footer-service-strip>span').forEach((e,i)=>{const text=zh?['24/7 企业服务支持','全流程专业服务'][i]:['24/7 Enterprise Support','Full-cycle Professional Service'][i];for(const node of e.childNodes)if(node.nodeType===3)node.textContent=text});
 const back=document.querySelector('.footer-back-top');if(back)for(const node of back.childNodes)if(node.nodeType===3)node.textContent=zh?'返回顶部 ':'Back to top ';
 }
 new MutationObserver(update).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
 // Log links are rebuilt when switching language; append their shared arrow afterwards.
 const list=document.querySelector('#logList');if(list)new MutationObserver(()=>{list.querySelectorAll('.log-link').forEach(e=>{if(!e.querySelector('.ui-link-arrow'))e.insertAdjacentHTML('beforeend',arrow)})}).observe(list,{childList:true});update();
})();

