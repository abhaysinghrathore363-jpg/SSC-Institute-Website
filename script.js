
document.getElementById('year').textContent=new Date().getFullYear();
const mb=document.getElementById('menuBtn'), nl=document.getElementById('navLinks');
if(mb&&nl){mb.addEventListener('click',()=>{const o=nl.classList.toggle('open');mb.setAttribute('aria-expanded',String(o));mb.textContent=o?'×':'☰'});nl.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nl.classList.remove('open');mb.setAttribute('aria-expanded','false');mb.textContent='☰'}))}
function wa(text){window.open('https://wa.me/917230072444?text='+encodeURIComponent(text),'_blank','noopener,noreferrer')}
document.querySelectorAll('[data-batch-wa]').forEach(b=>b.addEventListener('click',()=>wa('Hello Inspector SSC Academy,\\nI want to know about current batches.\\nPlease share batch names, course options, timings, fees and admission details.')));
const form=document.getElementById('enquiryForm');
if(form)form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const d=new FormData(form);const lines=['Hello Inspector SSC Academy,','I would like to send an admission enquiry.','',...Array.from(d.entries()).map(([k,v])=>k+': '+String(v).trim())];wa(lines.join('\\n'))});
