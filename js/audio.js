// Background music is generated in the browser (Web Audio), so no audio files or copyright issues.
// Each mood uses a pentatonic scale, tempo and plucked or soft tones to suit the scene.
const Music=(()=>{
 let ctx,master,timer,mood,vol=0.5,muted=false,beat=0,ducked=false;
 const M={
  playful:{r:293.66,s:[0,2,4,7,9],bpm:128,w:'triangle',d:.7,hi:.4},
  sad:{r:220,s:[0,3,5,7,10],bpm:56,w:'sine',d:.35,hi:0,drone:1},
  curious:{r:261.63,s:[0,2,4,7,9],bpm:92,w:'triangle',d:.55,hi:.4},
  warm:{r:196,s:[0,2,4,7,9],bpm:70,w:'sine',d:.5,hi:.3,drone:1},
  hopeful:{r:293.66,s:[0,4,7,9,12],bpm:112,w:'triangle',d:.85,hi:.5,drone:1}
 };
 function tone(f,t,dur,type,g){
  const o=ctx.createOscillator(),a=ctx.createGain();
  o.type=type;o.frequency.value=f;
  a.gain.setValueAtTime(0,t);a.gain.linearRampToValueAtTime(g,t+.02);a.gain.exponentialRampToValueAtTime(.0001,t+dur);
  o.connect(a);a.connect(master);o.start(t);o.stop(t+dur+.05);
 }
 function loop(){
  const m=M[mood];if(!m||!ctx)return;
  const t=ctx.currentTime+.05;
  if(m.drone&&beat%8===0){tone(m.r/2,t,5,'sine',.22);tone(m.r*.75,t,5,'sine',.1)}
  if(Math.random()<m.d){const n=m.s[Math.floor(Math.random()*m.s.length)];
   tone(m.r*Math.pow(2,n/12)*(Math.random()<m.hi?2:1),t,1.3,m.w,.2)}
  beat++;timer=setTimeout(loop,30000/m.bpm);
 }
 const apply=()=>{if(master)master.gain.setTargetAtTime(muted?0:vol*(ducked?.25:1),ctx.currentTime,.15)};

 // Sound effects (laugh, gasp, applause) synthesised in the browser. Real recordings can replace them (see README).
 let nb,live=[];
 function noise(t,dur,type,freq,g,sweep){
  if(!nb){nb=ctx.createBuffer(1,ctx.sampleRate,ctx.sampleRate);const d=nb.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1}
  const s=ctx.createBufferSource(),f=ctx.createBiquadFilter(),a=ctx.createGain();
  s.buffer=nb;f.type=type;f.frequency.setValueAtTime(freq,t);if(sweep)f.frequency.exponentialRampToValueAtTime(sweep,t+dur);f.Q.value=1.2;
  a.gain.setValueAtTime(0,t);a.gain.linearRampToValueAtTime(g,t+Math.min(.02,dur/3));a.gain.exponentialRampToValueAtTime(.0001,t+dur);
  s.connect(f);f.connect(a);a.connect(master);s.start(t,Math.random()*.5);s.stop(t+dur+.05);
 }
 function ha(f,t,dur,g){
  const o=ctx.createOscillator(),a=ctx.createGain(),f1=ctx.createBiquadFilter(),f2=ctx.createBiquadFilter();
  o.type='sawtooth';o.frequency.setValueAtTime(f*1.15,t);o.frequency.exponentialRampToValueAtTime(f,t+dur);
  f1.type=f2.type='bandpass';f1.frequency.value=820;f2.frequency.value=1250;f1.Q.value=f2.Q.value=3;
  a.gain.setValueAtTime(0,t);a.gain.linearRampToValueAtTime(g,t+.025);a.gain.exponentialRampToValueAtTime(.0001,t+dur);
  o.connect(f1);o.connect(f2);f1.connect(a);f2.connect(a);a.connect(master);o.start(t);o.stop(t+dur+.05);
  noise(t,.05,'highpass',2500,g*.25);
 }
 function synth(n){
  const t0=ctx.currentTime+.05;
  if(n==='laugh')for(let v=0;v<6;v++){const base=170+Math.random()*200,k=5+Math.floor(Math.random()*3),st=t0+Math.random()*.4;
   for(let i=0;i<k;i++)ha(base*(1-i*.045),st+i*(.17+Math.random()*.04),.15,.55*(1-i*.08))}
  if(n==='gasp')noise(t0,.45,'bandpass',700,.7,2200);
  if(n==='applause')for(let i=0;i<150;i++){const t=t0+Math.random()*2.4;noise(t,.03,'bandpass',1200+Math.random()*2500,.5*(1-(t-t0)/3))}
 }
 function fx(n){
  if(!ctx||muted)return;
  if(typeof SFX_FILES!=='undefined'&&SFX_FILES){const a=new Audio(SFX_PATH+n+'.mp3');a.volume=Math.min(1,vol*2);live.push(a);a.onerror=()=>synth(n);a.play().catch(()=>synth(n));return}
  synth(n);
 }
 return{
  start(){if(!ctx){ctx=new (window.AudioContext||window.webkitAudioContext)();master=ctx.createGain();master.connect(ctx.destination);apply()}
   if(ctx.state==='suspended')ctx.resume();if(mood&&!timer)loop()},
  set(m){if(m===mood)return;mood=m;clearTimeout(timer);timer=null;beat=0;if(ctx)loop()},
  toggle(){muted=!muted;apply();return muted},
  fx,
  stopFx(){live.forEach(x=>x.pause());live=[]},
  duck(d){ducked=d;apply()},
  vol(v){vol=+v;apply()},
  stop(){clearTimeout(timer);timer=null;mood=null}
 };
})();
