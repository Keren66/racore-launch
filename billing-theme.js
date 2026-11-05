(()=>{
  const pattern=/("(?:\\.|[^"\\])*"\s*:?)|(-?\b\d+(?:\.\d+)?\b)|(\btrue\b|\bfalse\b|\bnull\b)/g;
  document.querySelectorAll('#apiWin .api-code').forEach(node=>{
    const text=node.textContent,fragment=document.createDocumentFragment();let start=0;
    for(const match of text.matchAll(pattern)){fragment.append(document.createTextNode(text.slice(start,match.index)));const token=document.createElement('span');token.className=match[1]?(match[1].trimEnd().endsWith(':')?'billing-json-key':'billing-json-string'):match[2]?'billing-json-number':'billing-json-literal';token.textContent=match[0];fragment.append(token);start=match.index+match[0].length;}
    fragment.append(document.createTextNode(text.slice(start)));node.replaceChildren(fragment);
  });
})();
