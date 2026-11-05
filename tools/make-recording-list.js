// Run: node tools/make-recording-list.js  -> writes assets/audio/vo/RECORDING-LIST.txt
const fs=require('fs');
const {SCENES,WHO}=new Function(fs.readFileSync('js/data.js','utf8')+';return {SCENES,WHO}')();
let o='Record each line, save as the filename shown (mp3). Stage directions need no recording.\n\n';
SCENES.forEach((s,i)=>s.lines.forEach((l,j)=>{if(l[0]!=='~')o+=`s${i+1}-l${String(j+1).padStart(2,'0')}.mp3 | ${WHO[l[0]]}: ${l[1]}\n`}));
fs.writeFileSync('assets/audio/vo/RECORDING-LIST.txt',o);
