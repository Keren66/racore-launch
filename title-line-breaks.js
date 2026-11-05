/* Reapply semantic title breaks after language updates replace textContent. */
(()=>{
 const rules=[['#cdncli h2[data-i18n="cli.title"]','Racore CDN CLI——在终端里，','cli-title-ending'],['#claw h2[data-i18n="claw.title"]','RacoreClaw——接上 MCP，','claw-title-ending'],['#featured h2[data-i18n="cdn2.title"]','融合 CDN 1.1.2——Cloudflare 渠道全面接入，','release-title-ending']];
 for(const [selector,prefix,cls] of rules){
  const el=document.querySelector(selector);if(!el)continue;
  const apply=()=>{const text=el.textContent;if(!text.startsWith(prefix)||el.querySelector('.'+cls))return;const tail=document.createElement('span');tail.className=cls;tail.textContent=text.slice(prefix.length);const lead=document.createElement('span');lead.className=cls+'-lead';lead.textContent=prefix;el.replaceChildren(lead,tail);};
  new MutationObserver(apply).observe(el,{childList:true,characterData:true,subtree:true});apply();
 }
})();
