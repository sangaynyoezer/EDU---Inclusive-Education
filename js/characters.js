// Detailed animated SVG art: Bhutanese classroom, and characters in kira / gho.
const FLAGS=['#2f6fcb','#ffffff','#d9352b','#2e9b4e','#f2c41d'];
function bg(){
 const flags=Array.from({length:21},(_,i)=>`<path class="fl" style="animation-delay:${(i%7)*.2}s" d="M${14+i*38} ${12+Math.sin(i/1.6)*6}h26v18h-26z" fill="${FLAGS[i%5]}" stroke="#555" stroke-width=".5"/>`).join('');
 const pines=[190,215,250,560,590,615].map(x=>`<path d="M${x} 222l9-26 9 26zM${x+2} 206l7-22 7 22z" fill="#2f6b3a"/>`).join('');
 const wins=Array.from({length:8},(_,i)=>`<rect x="${382+i*18}" y="178" width="7" height="12" fill="#5a3a22"/>`).join('');
 return `<defs><linearGradient id="sk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5fb7e6"/><stop offset="1" stop-color="#f1faff"/></linearGradient>
<clipPath id="win"><rect x="160" y="40" width="480" height="200"/></clipPath>
<pattern id="pt" width="24" height="12" patternUnits="userSpaceOnUse"><path d="M0 12L12 0L24 12Z" fill="#b8321f"/><path d="M6 12L12 5L18 12Z" fill="#f2b705"/></pattern>
<pattern id="wd" width="44" height="68" patternUnits="userSpaceOnUse"><rect width="44" height="68" fill="#a8703f"/><rect x="4" y="6" width="36" height="56" rx="3" fill="none" stroke="#7a4a22" stroke-width="2"/><circle cx="22" cy="34" r="5" fill="#e0a526" opacity=".8"/></pattern>
<pattern id="rg" width="30" height="20" patternUnits="userSpaceOnUse"><rect width="30" height="20" fill="#8e1b1b"/><path d="M15 2L27 10L15 18L3 10Z" fill="none" stroke="#f2c14e" stroke-width="2"/><circle cx="15" cy="10" r="2.5" fill="#2c5aa0"/></pattern></defs>
<rect width="800" height="420" fill="#fff1d6"/>${flags}
<g clip-path="url(#win)"><rect x="160" y="40" width="480" height="200" fill="url(#sk)"/>
<circle cx="560" cy="88" r="46" fill="#fff3a8" opacity=".35"/><circle cx="560" cy="88" r="24" fill="#ffd84d"/>
<g class="cl"><ellipse cx="200" cy="88" rx="42" ry="12" fill="#fff"/><ellipse cx="232" cy="80" rx="28" ry="13" fill="#fff"/></g>
<g class="cl c2"><ellipse cx="200" cy="130" rx="34" ry="9" fill="#fff" opacity=".9"/><ellipse cx="224" cy="124" rx="22" ry="10" fill="#fff" opacity=".9"/></g>
<path class="bird" d="M0 0q5-6 10 0q5-6 10 0" stroke="#333" fill="none" stroke-width="2"/>
<path d="M160 180L240 112L300 160L380 80L470 165L550 105L640 170V240H160Z" fill="#a9bfce"/><path d="M380 80L362 98L376 94L388 104L398 94L406 100Z M240 112L226 126L240 122L252 130Z M550 105L535 120L550 116L562 124Z" fill="#fff"/>
<path d="M160 200Q260 150 360 195T520 190T640 185V240H160Z" fill="#6aa361"/>${pines}
<path d="M364 210L372 138H522L530 210Z" fill="#fdfdf8"/><path d="M364 210L372 138H380L376 210Z" fill="#000" opacity=".1"/>
<rect x="368" y="156" width="158" height="14" fill="#a82a1c"/><rect x="368" y="160" width="158" height="2" fill="#f2c14e"/>${wins}
<path d="M366 138H528L518 126H376Z" fill="#e0a526"/><rect x="430" y="98" width="34" height="40" fill="#fdfdf8"/><rect x="430" y="112" width="34" height="9" fill="#a82a1c"/>
<path d="M424 98H470L460 86H434Z" fill="#e0a526"/><path d="M438 86H456L447 72Z" fill="#e0a526"/></g>
<rect x="160" y="40" width="480" height="200" fill="none" stroke="#7b2a12" stroke-width="12"/><rect x="166" y="46" width="468" height="188" fill="none" stroke="#e0a526" stroke-width="2"/>
<path d="M400 40V240M160 140H640" stroke="#7b2a12" stroke-width="6"/>
<rect x="10" y="62" width="142" height="140" rx="4" fill="#2f4a3a" stroke="#7b2a12" stroke-width="7"/><text x="81" y="96" text-anchor="middle" font-size="15" fill="#fff" font-family="Verdana,sans-serif">Inclusive School</text>
<path d="M30 180h100M45 140l12-26 12 26M92 150a14 14 0 1 0 28 0" stroke="#fff" stroke-width="2" fill="none" opacity=".8"/><circle cx="106" cy="122" r="7" fill="#f2c41d"/>
<rect x="652" y="62" width="138" height="140" rx="4" fill="#d8b27a" stroke="#7b2a12" stroke-width="7"/><rect x="666" y="76" width="40" height="32" fill="#fff" transform="rotate(-4 686 92)"/><rect x="716" y="80" width="44" height="30" fill="#9ed0a0" transform="rotate(3 738 95)"/><rect x="670" y="122" width="52" height="34" fill="#f8d36a"/><circle cx="752" cy="150" r="20" fill="#fff" stroke="#333" stroke-width="3"/><path d="M752 150V136M752 150L762 154" stroke="#333" stroke-width="2.5"/>
<rect y="250" width="800" height="68" fill="url(#wd)"/><rect y="318" width="800" height="12" fill="url(#pt)"/>
<rect y="330" width="800" height="90" fill="#8a5a33"/>${[0,1,2,3,4,5,6,7].map(i=>`<path d="M0 ${340+i*11}H800" stroke="#6e4524" stroke-width="1.5"/>`).join('')}
<path class="ray" d="M180 240H400L330 335H90Z" fill="#fff8c4"/>
<rect x="90" y="352" width="620" height="52" rx="4" fill="url(#rg)" stroke="#f2c14e" stroke-width="3"/>`;
}
function poster(){
 const c=['#b03a2e','#2c5aa0','#2e7d6b','#7a2e7a','#e0a526'],sk=['#e8b98f','#d9a577','#e1ac80','#d9a577','#e8b98f'];
 const kids=c.map((k,i)=>`<g class="pi" style="animation-delay:${.5+i*.35}s"><circle cx="${326+i*37}" cy="124" r="10" fill="${sk[i]}"/><path d="M${321+i*37} 121q5-8 10 0" fill="#2b1b17"/><path d="M${326+i*37} 130q-14 6-15 28h30q-1-22-15-28z" fill="${k}"/><path d="M${321+i*37} 128q5 5 10 0" stroke="#5a1f1f" fill="none"/></g>`).join('');
 return `<g class="pos"><rect x="284" y="22" width="232" height="162" rx="6" fill="#fffdf5" stroke="#7b2a12" stroke-width="5"/><rect x="292" y="30" width="216" height="146" fill="none" stroke="#e0a526" stroke-width="2" stroke-dasharray="6 4"/>
<text x="400" y="56" text-anchor="middle" font-size="16" font-weight="700" fill="#7b2a12" font-family="Georgia,serif">Inclusion Starts With Us!</text>
<path class="pi" style="animation-delay:.2s" d="M400 100C386 82 364 96 380 112L400 130L420 112C436 96 414 82 400 100Z" fill="#d9352b"/>
<path d="M322 150H478" stroke="#444" stroke-width="2" opacity=".5"/>${kids}
<path class="pi" style="animation-delay:2.4s" d="M296 172Q348 162 400 172T504 172" stroke="#2e9b4e" stroke-width="4" fill="none"/></g>`;
}
function paper(){return `<rect x="108" y="344" width="78" height="42" fill="#fff" stroke="#999" transform="rotate(-4 148 365)"/><path d="M190 382l30-18" stroke="#e0a526" stroke-width="5" stroke-linecap="round"/>`}
function person(k,x){
 const p=CHAR[k],kira=p.t==='kira',sh='#000';
 const pat=`<pattern id="pat-${k}" width="36" height="22" patternUnits="userSpaceOnUse"><rect width="36" height="22" fill="${p.c}"/>${kira?`<rect y="3" width="36" height="3" fill="${p.c2}"/><rect y="9" width="36" height="1.5" fill="#fff" opacity=".8"/><path d="M0 17l4-3 4 3 4-3 4 3 4-3 4 3 4-3 4 3" stroke="${p.c2}" fill="none" stroke-width="1.5"/>`:`<path d="M0 11H36M18 0V22" stroke="#2b1a10" stroke-width="3" opacity=".55"/><path d="M0 5H36M9 0V22" stroke="${p.c2}" stroke-width="1" opacity=".7"/>`}</pattern>`;
 const arm=(s,o)=>`<g class="arm a${s}"><rect x="${s=='L'?-54:34}" y="-66" width="20" height="42" rx="10" fill="${kira?'#fff':p.c}"/><rect x="${s=='L'?-54:34}" y="-34" width="20" height="9" rx="3" fill="${kira?p.c:'#fff'}"/><circle cx="${s=='L'?-44:44}" cy="-20" r="7.5" fill="${p.s}"/></g>`;
 const lower=kira
  ?`<ellipse cx="-15" cy="3" rx="12" ry="5" fill="#222"/><ellipse cx="15" cy="3" rx="12" ry="5" fill="#222"/><path d="M-30 -66Q-36 -30 -46 0H46Q36 -30 30 -66Z" fill="url(#pat-${k})"/><path d="M12 -64Q22 -30 30 0H46Q36 -30 30 -66Z" fill="${sh}" opacity=".15"/><path d="M-6 -64L26 -2" stroke="${sh}" opacity=".2" stroke-width="2"/><path d="M-46 0H46" stroke="${p.c2}" stroke-width="4"/><path d="M-31 -48Q0 -40 31 -48V-37Q0 -29 -31 -37Z" fill="#c8372d"/><path d="M-31 -44Q0 -36 31 -44" stroke="#f2c14e" stroke-width="2" fill="none"/>`
  :`<rect x="-20" y="-28" width="12" height="28" fill="${p.s}"/><rect x="8" y="-28" width="12" height="28" fill="${p.s}"/><rect x="-22" y="-14" width="16" height="12" fill="#fff"/><rect x="6" y="-14" width="16" height="12" fill="#fff"/><ellipse cx="-14" cy="3" rx="11" ry="5" fill="#222"/><ellipse cx="14" cy="3" rx="11" ry="5" fill="#222"/><path d="M-34 -66H34L42 -28H-42Z" fill="url(#pat-${k})"/><path d="M14 -64L22 -28H42L34 -66Z" fill="${sh}" opacity=".15"/><path d="M-42 -28H42" stroke="#d9a441" stroke-width="4"/><path d="M-36 -50Q0 -42 36 -50V-40Q0 -32 -36 -40Z" fill="#c8372d"/><path d="M-6 -66L18 -34" stroke="#fff" stroke-width="5"/>`;
 const hair=s=>({
  bob:s?`<path d="M-27 -96Q-26 -122 0 -122Q26 -122 27 -96Q14 -110 4 -106Q-8 -100 -27 -96Z" fill="${p.h}"/>`:`<path d="M-31 -90Q-34 -130 0 -130Q34 -130 31 -90L33 -64Q24 -58 20 -68H-20Q-24 -58 -33 -64Z" fill="${p.h}"/>`,
  pony:s?`<path d="M-27 -96Q-26 -122 0 -122Q26 -122 27 -96Q14 -110 4 -106Q-8 -100 -27 -96Z" fill="${p.h}"/><circle cx="26" cy="-108" r="4" fill="${p.acc}"/>`:`<path d="M-29 -90Q-31 -128 0 -128Q31 -128 29 -90Z" fill="${p.h}"/><path class="tail" d="M24 -110Q54 -112 46 -76Q42 -92 28 -98Z" fill="${p.h}"/>`,
  braid:s?`<path d="M-27 -96Q-26 -122 0 -122Q26 -122 27 -96Q10 -112 0 -104Q-14 -98 -27 -96Z" fill="${p.h}"/><rect x="-24" y="-112" width="10" height="5" rx="2" fill="${p.acc}" transform="rotate(-20 -19 -110)"/>`:`<path d="M-30 -90Q-33 -129 0 -129Q33 -129 30 -90L28 -70H-28Z" fill="${p.h}"/><g fill="${p.h}"><ellipse cx="34" cy="-64" rx="7" ry="9"/><ellipse cx="35" cy="-50" rx="7" ry="9"/><ellipse cx="34" cy="-36" rx="7" ry="9"/></g><circle cx="34" cy="-26" r="4" fill="${p.acc}"/>`,
  bun:s?`<path d="M-27 -96Q-26 -122 0 -122Q26 -122 27 -96Q8 -108 0 -102Q-14 -98 -27 -96Z" fill="${p.h}"/><circle cx="0" cy="-130" r="11" fill="${p.h}"/><path d="M-9 -128L9 -134" stroke="${p.acc}" stroke-width="3"/>`:`<path d="M-29 -90Q-31 -126 0 -126Q31 -126 29 -90Z" fill="${p.h}"/>`,
  boy:s?`<path d="M-27 -94Q-28 -126 0 -125Q28 -126 27 -94Q20 -108 8 -106Q0 -113 -8 -106Q-20 -108 -27 -94Z" fill="${p.h}"/><path d="M-12 -118Q0 -122 12 -117" stroke="#fff" opacity=".25" stroke-width="3" fill="none"/>`:''
 })[p.st];
 const gl=p.glasses?`<circle cx="-9" cy="-93" r="8" fill="none" stroke="#333" stroke-width="1.8"/><circle cx="9" cy="-93" r="8" fill="none" stroke="#333" stroke-width="1.8"/><path d="M-1 -93h2" stroke="#333" stroke-width="1.8"/>`:'';
 const eye=s=>`<ellipse cx="${s*9}" cy="-93" rx="5.5" ry="4.5" fill="#fff"/><circle cx="${s*9+s*.5}" cy="-93" r="3.2" fill="#2b1a10"/><circle cx="${s*9+s*1.5}" cy="-94.5" r="1.1" fill="#fff"/><ellipse class="lid" style="animation-delay:-${k.charCodeAt(0)%5}s" cx="${s*9}" cy="-96" rx="6.5" ry="5.5" fill="${p.s}"/>`;
 return `<g transform="translate(${x},372) scale(1.5)"><g class="ch" id="c-${k}"><defs>${pat}</defs><ellipse cx="0" cy="4" rx="52" ry="7" fill="#000" opacity=".25"/>
${hair(0)}<g class="bd">${lower}${arm('L')}${arm('R')}
<path d="M-14 -68L0 -52L14 -68Z" fill="#fff"/></g><rect x="-7" y="-78" width="14" height="14" fill="${p.s}"/><path d="M-7 -70Q0 -63 7 -70V-78H-7Z" fill="${sh}" opacity=".13"/>
<g class="hd"><circle cx="-25" cy="-90" r="5" fill="${p.s}"/><circle cx="25" cy="-90" r="5" fill="${p.s}"/><ellipse cx="0" cy="-92" rx="25" ry="28" fill="${p.s}"/>
<circle cx="-15" cy="-82" r="5.5" fill="#e57373" opacity=".28"/><circle cx="15" cy="-82" r="5.5" fill="#e57373" opacity=".28"/>
${eye(-1)}${eye(1)}${gl}<path d="M0 -89Q4 -84 0 -83" stroke="${sh}" opacity=".35" fill="none" stroke-width="1.6"/>
<path class="bl" d="M-14 -104Q-9 -107 -4 -104" stroke="${p.h}" stroke-width="2.4" fill="none" stroke-linecap="round"/><path class="br" d="M4 -104Q9 -107 14 -104" stroke="${p.h}" stroke-width="2.4" fill="none" stroke-linecap="round"/>
<g transform="translate(0,-78)"><path class="mo" d="M-11 0Q0 10 11 0" stroke="#5a1f1f" stroke-width="2.5" fill="none" stroke-linecap="round"/></g>${hair(1)}</g>
<rect x="-30" y="12" width="60" height="18" rx="9" fill="#2b1408" opacity=".8"/><text class="nm" y="25" text-anchor="middle">${p.n}</text></g></g>`;
}
