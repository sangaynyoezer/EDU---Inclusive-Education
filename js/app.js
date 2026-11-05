const $=s=>document.querySelector(s);
const MOUTH={smile:'M-11 0Q0 10 11 0',sad:'M-9 6Q0 -4 9 6',flat:'M-8 2H8',open:'M-7 0Q0 13 7 0Z'};
const BROW={smile:['M-14 -104Q-9 -107 -4 -104','M4 -104Q9 -107 14 -104'],sad:['M-14 -102Q-9 -105 -4 -109','M4 -109Q9 -105 14 -102'],flat:['M-14 -103H-4','M4 -103H14'],open:['M-14 -108Q-9 -111 -4 -108','M4 -108Q9 -111 14 -108']};
let si=0,li=0,auto=false,autoT=null,vo=null,fs=1,voOn=true,pledged=false;

function show(i,l=0){si=i;li=l;scene();line()}

function scene(){
 const s=SCENES[si],art=$('#art');
 art.innerHTML=bg()+(s.poster?poster():'')+(s.paper?paper():'')+Object.entries(s.cast).map(([k,x])=>person(k,x)).join('');
 art.setAttribute('aria-label',s.alt);
 $('#st').textContent=`Scene ${si+1}: ${s.t} (${s.time})`;
 $('#spots').innerHTML=s.spots.map((p,i)=>`<button class="spot" data-i="${i}" style="left:${p.x}%;top:${p.y}%" aria-label="Tap to learn more: ${p.t}">&#10022;</button>`).join('');
 document.querySelectorAll('.spot').forEach(b=>b.onclick=()=>openSpot(s.spots[b.dataset.i]));
 document.querySelectorAll('#chapters button').forEach((b,i)=>b.setAttribute('aria-current',i===si));
}

function line(){
 const s=SCENES[si],L=s.lines[li];
 let ex={...s.ex},m=s.m;
 for(let i=0;i<=li;i++){Object.assign(ex,s.lines[i][2]);if(s.lines[i][3])m=s.lines[i][3]}
 Object.keys(s.cast).forEach(k=>{
  const mo=$(`#c-${k} .mo`),e=ex[k]||'smile';
  mo.setAttribute('d',MOUTH[e]);$(`#c-${k} .bl`).setAttribute('d',BROW[e][0]);$(`#c-${k} .br`).setAttribute('d',BROW[e][1]);mo.setAttribute('fill',e==='open'?'#7a1f1f':'none');
  $(`#c-${k}`).classList.toggle('on',L[0]===k||L[0]==='A');
 });
 $('#stage').dataset.m=m;Music.set(m);
 $('#who').textContent=WHO[L[0]]||'';
 $('#line').textContent=L[1];
 $('#caption').classList.toggle('dir',L[0]==='~');
 $('#back').disabled=si===0&&li===0;
 const last=li===s.lines.length-1;
 $('#next').innerHTML=si===SCENES.length-1&&last?'Finish &#9654;':last?'Next scene &#9654;':'Next &#9654;';
 if(vo){vo.pause();vo=null}Music.duck(false);
 if(VOICE_OVER&&voOn&&L[0]!=='~'){
  vo=new Audio(L[4]||`${VO_PATH}s${si+1}-l${String(li+1).padStart(2,'0')}.mp3`);
  vo.onplaying=()=>{clearTimeout(autoT);Music.duck(true)};
  vo.onended=()=>{Music.duck(false);if(auto)autoT=setTimeout(next,300)};
  vo.playbackRate=VO_SPEED;vo.play().catch(()=>{});
 }
 Music.stopFx();if(L[5])L[5].split(',').forEach(n=>Music.fx(n));
 sched();
}

function next(){
 const s=SCENES[si];
 if(li<s.lines.length-1)li++;
 else if(si<SCENES.length-1){si++;li=0;scene()}
 else return finish();
 line();
}
function back(){
 if(li>0)li--;
 else if(si>0){si--;scene();li=SCENES[si].lines.length-1}
 line();
}
function sched(){
 clearTimeout(autoT);
 if(auto&&!$('#dlg').open){const L=SCENES[si].lines[li];autoT=setTimeout(next,L[0]==='~'&&VOICE_OVER?1200+L[1].length*30:2200+L[1].length*60)}
}
function finish(){
 auto=false;clearTimeout(autoT);setAuto();
 $('#story').hidden=true;$('#end').hidden=false;Music.set('hopeful');Music.fx('applause');$('#end h2').focus();
}
function home(){
 auto=false;clearTimeout(autoT);setAuto();if(vo){vo.pause();vo=null}Music.stop();Music.stopFx();
 $('#end').hidden=true;$('#story').hidden=true;$('#start').hidden=false;$('#go').focus();
}
function setAuto(){const b=$('#auto');b.setAttribute('aria-pressed',auto);b.textContent='Auto-play: '+(auto?'on':'off')}

function openSpot(p){
 clearTimeout(autoT);pledged=false;
 $('#dt').textContent=p.t;
 let h=p.b;
 if(p.q)h+=p.q.map((o,i)=>`<button class="opt" data-i="${i}">${o[0]}</button>`).join('')+'<p class="fb" id="fb" aria-live="polite"></p>';
 $('#db').innerHTML=h;
 document.querySelectorAll('.opt').forEach(b=>b.onclick=()=>{$('#fb').textContent=p.q[b.dataset.i][1]});
 $('#dlg').showModal();
}
function pledge(){
 pledged=true;$('#dt').textContent='My inclusion pledge';
 $('#db').innerHTML=['Respect individual differences','Avoid hurtful labels','Listen to others','Support someone who needs it'].map(t=>`<label><input type="checkbox"> I will ${t.toLowerCase()}</label><br>`).join('')+'<p class="fb">Different abilities, equal opportunities. Inclusion starts with us!</p><button id="home" class="big">Back to home</button>';
 $('#home').onclick=()=>$('#dlg').close();
 $('#dlg').showModal();
}

// controls
$('#chapters').innerHTML=SCENES.map((s,i)=>`<button data-i="${i}" title="${s.t}">Scene ${i+1}</button>`).join('');
document.querySelectorAll('#chapters button').forEach(b=>b.onclick=()=>show(+b.dataset.i));
$('#go').onclick=()=>{$('#start').hidden=true;$('#story').hidden=false;Music.start();show(0)};
$('#next').onclick=next;$('#back').onclick=back;
$('#auto').onclick=()=>{auto=!auto;setAuto();sched()};
$('#dx').onclick=()=>$('#dlg').close();
$('#dlg').onclose=()=>{if(pledged){pledged=false;home()}else sched()};
$('#pledge').onclick=pledge;
$('#replay').onclick=()=>{$('#end').hidden=true;$('#story').hidden=false;show(0)};
const mute=()=>{const m=Music.toggle(),b=$('#mute');b.setAttribute('aria-pressed',m);b.textContent='Music: '+(m?'off':'on')};
$('#mute').onclick=mute;
$('#vol').oninput=e=>Music.vol(e.target.value);
const size=d=>{fs=Math.min(1.6,Math.max(.85,fs+d));document.documentElement.style.setProperty('--fs',fs)};
$('#sm').onclick=()=>size(-.1);$('#lg').onclick=()=>size(.1);
const tog=(id,cls)=>$(id).onclick=()=>{const on=document.body.classList.toggle(cls);$(id).setAttribute('aria-pressed',on)};
tog('#hc','hc');tog('#rf','rf');
document.addEventListener('keydown',e=>{
 if(e.target.matches('input[type=range]')||$('#dlg').open)return;
 if(e.key==='m'||e.key==='M')mute();
 if($('#story').hidden)return;
 if(e.key==='ArrowRight')next();
 if(e.key==='ArrowLeft')back();
});
if(VOICE_OVER){const b=$('#vo');b.hidden=false;b.onclick=()=>{voOn=!voOn;b.setAttribute('aria-pressed',voOn);b.textContent='Voice-over: '+(voOn?'on':'off');if(!voOn&&vo){vo.pause();Music.duck(false)}}}
