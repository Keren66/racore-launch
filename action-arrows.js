(()=>{
  document.querySelectorAll('a,button,.claw-btn').forEach(action=>{
    const walk=document.createTreeWalker(action,NodeFilter.SHOW_TEXT);const nodes=[];let node;
    while((node=walk.nextNode()))nodes.push(node);
    nodes.forEach(text=>{text.nodeValue=text.nodeValue.replace(/[→↗↘←↑↓›]/g,'').trim();});
  });
})();
