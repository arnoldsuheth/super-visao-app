// Brasões e robôs da Copa (SVG desenhado, sem emoji)
(function(){
const FORMAS=[
 'M50 6 L92 18 C92 66 76 94 50 110 C24 94 8 66 8 18 Z',                         // 0 escudo clássico
 'M50 2 L95 16 L89 64 L50 112 L11 64 L5 16 Z',                                    // 1 pontudo
 'M50 4 L92 28 L92 84 L50 108 L8 84 L8 28 Z',                                     // 2 hexágono
 'M10 10 Q30 2 50 10 Q70 2 90 10 V60 C90 86 72 102 50 110 C28 102 10 86 10 60 Z',  // 3 brasão ondulado
 'M50 8 A48 48 0 1 1 49.9 8 Z',                                                   // 4 círculo
 'M14 8 H86 L94 20 V64 C94 88 72 104 50 112 C28 104 6 88 6 64 V20 Z',             // 5 escudo largo chanfrado
 'M50 2 L96 56 L50 112 L4 56 Z',                                                  // 6 losango
 'M8 12 H92 V58 Q92 92 50 112 Q8 92 8 58 Z',                                      // 7 francês
 'M30 6 H70 L94 30 V70 L70 108 H30 L6 70 V30 Z'];                                 // 8 octógono
const ICO={
 logo:`<rect x="27" y="56" width="13" height="22" rx="3.5" fill="#1E3A8A" stroke="#93c5fd" stroke-width="1"/><rect x="44" y="44" width="13" height="34" rx="3.5" fill="#3B82F6" stroke="#bfdbfe" stroke-width="1"/><path d="M61 78V34l6.5-10L74 34v44z" fill="#22D3EE" stroke="#cffafe" stroke-width="1"/>`,
 chave:`<g fill="#fff" stroke="#111" stroke-width="1.6"><path d="M34 74l22-22a10 10 0 1 1 6 6L40 80z"/><circle cx="66" cy="44" r="4" fill="#111"/><path d="M66 74L44 52a10 10 0 1 0-6 6l22 22z" fill="#facc15"/></g>`,
 besouro:`<g stroke="#0b1f12" stroke-width="1.6"><ellipse cx="50" cy="58" rx="15" ry="19" fill="#22c55e"/><circle cx="50" cy="38" r="8" fill="#16a34a"/><path d="M50 40v36" stroke="#0b1f12"/><path d="M35 50l-9-5M35 60h-10M36 70l-8 6M65 50l9-5M65 60h10M64 70l8 6M46 31l-5-7M54 31l5-7" fill="none"/></g><circle cx="50" cy="56" r="27" fill="none" stroke="#fff" stroke-width="1.6" stroke-dasharray="6 4"/>`,
 turbo:`<g stroke="#2a0a00" stroke-width="1.6"><circle cx="50" cy="56" r="20" fill="#e5e7eb"/>${[0,1,2,3,4,5].map(i=>`<path d="M50 56 L${50+18*Math.cos(i*1.047)} ${56+18*Math.sin(i*1.047)} A18 18 0 0 1 ${50+18*Math.cos(i*1.047+.7)} ${56+18*Math.sin(i*1.047+.7)}Z" fill="#f97316"/>`).join('')}<circle cx="50" cy="56" r="5" fill="#2a0a00"/></g>`,
 caveira:`<g stroke="#1f0505" stroke-width="1.6"><path d="M32 54a18 18 0 1 1 36 0v8l-5 4v8H37v-8l-5-4z" fill="#f5f5f4"/><circle cx="43" cy="55" r="5" fill="#dc2626"/><circle cx="57" cy="55" r="5" fill="#dc2626"/><path d="M50 61l-3 5h6z" fill="#1f0505"/><path d="M43 74v-5M50 74v-5M57 74v-5"/></g><path d="M24 82L76 30M76 82L24 30" stroke="#f5f5f4" stroke-width="4" stroke-linecap="round" opacity=".9"/>`,
 elmo:`<g stroke="#042f2e" stroke-width="1.6"><path d="M30 76V54a20 20 0 0 1 40 0v22H58V62H42v14z" fill="#d1d5db"/><path d="M50 34c8-10 22-10 26-4-8 0-14 4-18 10" fill="#99f6e4"/><path d="M46 62h8v16h-8z" fill="#9ca3af"/></g>`,
 serpente:`<path d="M30 56c0-10 8-14 14-10s8 20 14 20 10-6 10-10-4-10-10-10-8 16-14 20-14 0-14-10z" fill="none" stroke="#f0abfc" stroke-width="6" stroke-linecap="round"/><circle cx="68" cy="50" r="4" fill="#fde047" stroke="#3b0764"/><path d="M71 52l5 2-4 2" stroke="#f43f5e" stroke-width="1.6" fill="none"/>`,
 foguete:`<g stroke="#082f49" stroke-width="1.6"><path d="M50 26c12 8 16 24 13 38H37c-3-14 1-30 13-38z" fill="#f8fafc"/><circle cx="50" cy="46" r="6" fill="#38bdf8"/><path d="M37 60l-9 12 10-3M63 60l9 12-10-3" fill="#ef4444"/><path d="M44 66h12l-6 16z" fill="#fbbf24"/></g>`,
 chapeu:`<g stroke="#000" stroke-width="1.6"><ellipse cx="50" cy="66" rx="28" ry="7" fill="#27272a"/><path d="M34 64c0-14 4-24 16-24s16 10 16 24z" fill="#3f3f46"/><path d="M34 58h32v6H34z" fill="#a1a1aa"/></g><text x="50" y="86" text-anchor="middle" font-family="Menlo,monospace" font-weight="900" font-size="9" fill="#a1a1aa">null</text>`,
 chama:`<path d="M50 24c4 12 18 18 18 34a18 18 0 0 1-36 0c0-8 4-12 8-16 0 6 2 10 6 10-2-10 0-20 4-28z" fill="#fb923c" stroke="#431407" stroke-width="1.6"/><path d="M50 50c2 6 8 8 8 16a8 8 0 0 1-16 0c0-6 6-8 8-16z" fill="#fde047"/>`,
 katanas:`<g stroke-linecap="round"><path d="M26 82L72 30" stroke="#e5e7eb" stroke-width="4"/><path d="M74 82L28 30" stroke="#e5e7eb" stroke-width="4"/><path d="M30 76l6 6M70 76l-6 6" stroke="#fbbf24" stroke-width="5"/></g><circle cx="50" cy="56" r="11" fill="#dc2626" stroke="#450a0a" stroke-width="1.6"/>`,
 coluna:`<g fill="#e7e5e4" stroke="#1c1917" stroke-width="1.6"><path d="M30 34h40v6H30z"/><path d="M34 40h32v4H34z"/><path d="M37 44h26v28H37z"/><path d="M42 44v28M50 44v28M58 44v28" fill="none"/><path d="M32 72h36v6H32z"/></g>`,
 viking:`<g stroke="#172554" stroke-width="1.6"><path d="M32 62a18 18 0 0 1 36 0z" fill="#9ca3af"/><path d="M32 60c-10-2-14-14-10-24 4 8 8 12 14 14z" fill="#fef3c7"/><path d="M68 60c10-2 14-14 10-24-4 8-8 12-14 14z" fill="#fef3c7"/><path d="M48 44h4v18h-4z" fill="#6b7280"/><path d="M34 62h32v6H34z" fill="#fbbf24"/></g>`,
 mascara:`<g stroke="#1e1b4b" stroke-width="1.6"><path d="M24 50c8-6 18-6 26 0 8-6 18-6 26 0-2 12-10 16-18 14-4 0-6-4-8-4s-4 4-8 4c-8 2-16-2-18-14z" fill="#111827"/><ellipse cx="40" cy="54" rx="5" ry="3.5" fill="#a78bfa"/><ellipse cx="60" cy="54" rx="5" ry="3.5" fill="#a78bfa"/><path d="M24 50l-6-4M76 50l6-4" stroke="#a78bfa" stroke-width="2.4"/></g>`,
 esparta:`<g stroke="#450a0a" stroke-width="1.6"><path d="M34 80V52a16 16 0 0 1 32 0v28H56V62H44v18z" fill="#fbbf24"/><path d="M50 36c-4-10 4-16 20-14-8 2-14 8-14 16" fill="#dc2626"/><path d="M47 52h6v10h-6z" fill="#92400e"/></g>`,
 shuriken:`<g stroke="#0f172a" stroke-width="1.6" fill="#cbd5e1"><path d="M50 26l6 24-6 6-6-6z"/><path d="M80 56l-24 6-6-6 6-6z"/><path d="M50 86l-6-24 6-6 6 6z"/><path d="M20 56l24-6 6 6-6 6z"/></g><circle cx="50" cy="56" r="5" fill="#22d3ee" stroke="#0f172a"/>`,
 lobo:`<g stroke="#1e1b4b" stroke-width="1.6"><path d="M30 34l10 12h20l10-12 2 22-8 12-14 12-14-12-8-12z" fill="#cbd5e1"/><path d="M42 58l-6-4 8 0zM58 58l6-4-8 0z" fill="#67e8f9"/><path d="M46 70h8l-4 5z" fill="#1e1b4b"/><path d="M50 46v10" stroke="#94a3b8"/></g>`,
 dragao:`<g stroke="#4a044e" stroke-width="1.6"><path d="M28 70c4-22 18-36 38-38-6 6-8 10-6 14 8 0 14 4 16 10-8-2-12 0-14 4l6 12-14-6-6 8-4-10-12 8z" fill="#d946ef"/><circle cx="58" cy="46" r="3" fill="#22d3ee"/><path d="M38 72l-6 8M46 74l-2 9" stroke="#22d3ee" stroke-width="2"/></g>`,
 raio:`<g stroke="#082f49" stroke-width="1.6"><path d="M30 56a12 12 0 0 1 8-20 16 16 0 0 1 30 2 10 10 0 0 1 2 20H34a8 8 0 0 1-4-2z" fill="#f0f9ff"/><path d="M52 52l-10 16h8l-4 14 14-20h-8l4-10z" fill="#fde047"/></g>`,
 leao:`<g stroke="#052e1f" stroke-width="1.6">${Array.from({length:14},(_,i)=>`<path d="M50 56 L${50+27*Math.cos(i*.449)} ${56+27*Math.sin(i*.449)} L${50+27*Math.cos(i*.449+.3)} ${56+27*Math.sin(i*.449+.3)}Z" fill="#ca8a04"/>`).join('')}<circle cx="50" cy="56" r="17" fill="#fde047"/><circle cx="44" cy="52" r="2.4" fill="#052e1f"/><circle cx="56" cy="52" r="2.4" fill="#052e1f"/><path d="M46 60h8l-4 5zM50 65v4M44 70q6 4 12 0" fill="#052e1f"/></g>`,
 aguia:`<g stroke="#172554" stroke-width="1.6"><path d="M50 40c-6 0-8 6-6 10l-20-8c2 10 8 16 18 18l-6 12 14-6 14 6-6-12c10-2 16-8 18-18l-20 8c2-4 0-10-6-10z" fill="#fbbf24"/><path d="M50 40l6 4-6 2z" fill="#f97316"/><circle cx="48" cy="44" r="1.4" fill="#172554"/></g>`,
 cavalo:`<g stroke="#052e16" stroke-width="1.6"><path d="M38 80l2-18c-6-4-8-12-4-20l8-10 2 6 6-4c10 4 16 14 14 26l-6 4-8-6-2 22z" fill="#f5f5f4"/><path d="M44 32c-4 6-6 14-4 22" stroke="#dc2626" stroke-width="4" fill="none"/><circle cx="56" cy="46" r="2" fill="#052e16"/></g>`};
const ORN={
 nenhum:'',
 coroa:`<path d="M30 10l6-12 7 8 7-12 7 12 7-8 6 12z" fill="url(#MT)" stroke="#5a3f10" stroke-width="1"/><circle cx="50" cy="-4" r="2.2" fill="#fff"/>`,
 asas:`<g fill="url(#MT)" stroke="#5a3f10" stroke-width=".8"><ellipse cx="-2.0" cy="18" rx="16.0" ry="4.2" transform="rotate(-25 -2.0 18)"/><ellipse cx="102.0" cy="18" rx="16.0" ry="4.2" transform="rotate(25 102.0 18)"/><ellipse cx="-2.5" cy="29" rx="14.4" ry="4.2" transform="rotate(-13 -2.5 29)"/><ellipse cx="102.5" cy="29" rx="14.4" ry="4.2" transform="rotate(13 102.5 29)"/><ellipse cx="-3.0" cy="40" rx="12.8" ry="4.2" transform="rotate(-1 -3.0 40)"/><ellipse cx="103.0" cy="40" rx="12.8" ry="4.2" transform="rotate(1 103.0 40)"/><ellipse cx="-3.5" cy="51" rx="11.2" ry="4.2" transform="rotate(11 -3.5 51)"/><ellipse cx="103.5" cy="51" rx="11.2" ry="4.2" transform="rotate(-11 103.5 51)"/><ellipse cx="-4.0" cy="62" rx="9.6" ry="4.2" transform="rotate(23 -4.0 62)"/><ellipse cx="104.0" cy="62" rx="9.6" ry="4.2" transform="rotate(-23 104.0 62)"/></g>`,
 chifres:`<path d="M22 14C8 8 4-6 10-14c2 10 8 16 18 18zM78 14c14-6 18-20 12-28-2 10-8 16-18 18z" fill="#f5f5f4" stroke="#111" stroke-width="1.2"/>`,
 chamas:`<path d="M28 10c-4-8 0-16 6-20 0 8 4 10 6 14 2-8 6-12 10-16 0 8 4 12 6 16 2-6 6-10 10-12-2 8 2 12 4 18" fill="#f97316" stroke="#7c2d12" stroke-width="1"/>`,
 espinhos:`<path d="M20 12l-4-16 10 12 4-18 8 18 12-22 12 22 8-18 4 18 10-12-4 16z" fill="#1f2937" stroke="#ef4444" stroke-width="1"/>`,
 louros:`<g fill="url(#MT)" stroke="#5a3f10" stroke-width=".6">${Array.from({length:7},(_,i)=>`<ellipse cx="${6-i*0.5}" cy="${96-i*12}" rx="7" ry="3" transform="rotate(${-60+i*8} ${6-i*.5} ${96-i*12})"/><ellipse cx="${94+i*0.5}" cy="${96-i*12}" rx="7" ry="3" transform="rotate(${60-i*8} ${94+i*.5} ${96-i*12})"/>`).join('')}</g>`,
 aureola:`<ellipse cx="50" cy="0" rx="26" ry="6" fill="none" stroke="url(#MT)" stroke-width="3"/>`,
 estrelas3:[30,50,70].map((x,i)=>`<path transform="translate(${x} ${i==1?-6:-1})" d="M0-6l1.8 4 4.4.4-3.3 3 1 4.4L0 3.5-3.9 5.8l1-4.4-3.3-3 4.4-.4z" fill="url(#MT)"/>`).join(''),
 estrelas5:[18,34,50,66,82].map((x,i)=>`<path transform="translate(${x} ${-8+Math.abs(i-2)*3})" d="M0-6l1.8 4 4.4.4-3.3 3 1 4.4L0 3.5-3.9 5.8l1-4.4-3.3-3 4.4-.4z" fill="url(#MT)"/>`).join(''),
 faixa:`<path d="M6 6h88l-6 8 6 8H6l6-8z" fill="#18181b" stroke="#a1a1aa"/><text x="50" y="17" text-anchor="middle" font-family="Menlo" font-weight="900" font-size="7" fill="#a1a1aa">FAMIGLIA</text>`,
 sol:Array.from({length:12},(_,i)=>`<path d="M50 4 L${50+6*Math.cos(i*.52)} ${-10+0} " />`).join('')+`<circle cx="50" cy="-2" r="9" fill="url(#MT)"/>`+Array.from({length:12},(_,i)=>`<line x1="${50+11*Math.cos(i*.524)}" y1="${-2+11*Math.sin(i*.524)}" x2="${50+16*Math.cos(i*.524)}" y2="${-2+16*Math.sin(i*.524)}" stroke="url(#MT)" stroke-width="2"/>`).join(''),
 crista:`<path d="M30 10C30-4 44-12 70-8 60-4 54 2 52 10z" fill="#dc2626" stroke="#450a0a"/>`,
 orbitas:`<ellipse cx="50" cy="56" rx="54" ry="14" fill="none" stroke="#67e8f9" stroke-width="1.4" opacity=".7" transform="rotate(-20 50 56)"/><circle cx="100" cy="40" r="3" fill="#67e8f9"/>`};
let uid=0;
const PATS=[
 (id,c)=>`<pattern id="pt${id}" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="3" height="6" fill="${c}" opacity=".18"/></pattern>`,
 (id,c)=>`<pattern id="pt${id}" width="12" height="10.4" patternUnits="userSpaceOnUse"><path d="M3 0h6l3 5.2-3 5.2H3L0 5.2z" fill="none" stroke="${c}" stroke-width=".8" opacity=".35"/></pattern>`,
 (id,c)=>`<pattern id="pt${id}" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M0 10h6l4-4h10M10 20v-6l4-4" fill="none" stroke="${c}" stroke-width=".9" opacity=".4"/><circle cx="10" cy="6" r="1.4" fill="${c}" opacity=".6"/></pattern>`,
 (id,c)=>`<pattern id="pt${id}" width="10" height="8" patternUnits="userSpaceOnUse"><path d="M0 8a5 5 0 0 1 10 0M-5 4a5 5 0 0 1 10 0M5 4a5 5 0 0 1 10 0" fill="none" stroke="${c}" stroke-width=".8" opacity=".35"/></pattern>`,
 (id,c)=>`<pattern id="pt${id}" width="100" height="120" patternUnits="userSpaceOnUse">${Array.from({length:18},(_,i)=>`<path d="M50 56 L${50+90*Math.cos(i*.349)} ${56+90*Math.sin(i*.349)} L${50+90*Math.cos(i*.349+.17)} ${56+90*Math.sin(i*.349+.17)}Z" fill="${c}" opacity=".16"/>`).join('')}</pattern>`,
 (id,c)=>`<pattern id="pt${id}" width="16" height="8" patternUnits="userSpaceOnUse"><path d="M0 4q4-4 8 0t8 0" fill="none" stroke="${c}" stroke-width="1" opacity=".35"/></pattern>`,
 (id,c)=>`<pattern id="pt${id}" width="10" height="10" patternUnits="userSpaceOnUse"><rect width="5" height="5" fill="${c}" opacity=".16"/><rect x="5" y="5" width="5" height="5" fill="${c}" opacity=".16"/></pattern>`,
 (id,c)=>`<pattern id="pt${id}" width="6" height="6" patternUnits="userSpaceOnUse"><circle cx="3" cy="3" r="1.2" fill="${c}" opacity=".35"/></pattern>`,
 (id,c)=>`<pattern id="pt${id}" width="8" height="8" patternUnits="userSpaceOnUse"><path d="M0 8L8 0M-2 2L2-2M6 10l4-4" stroke="${c}" stroke-width=".7" opacity=".4"/></pattern>`];
const ANIM={ // animação do símbolo
 logo:'.i{animation:eq 1.6s ease-in-out infinite}',turbo:'.i{animation:gira 2.4s linear infinite}',shuriken:'.i{animation:gira 1.6s linear infinite}',besouro:'.i{animation:resp 2s ease-in-out infinite}',
 caveira:'.i{animation:pulsa 1.4s ease-in-out infinite}',chama:'.i{animation:fogo .5s ease-in-out infinite alternate}',foguete:'.i{animation:sobe 1.2s ease-in-out infinite alternate}',
 raio:'.i{animation:flash 2.2s steps(1) infinite}',serpente:'.i{animation:balanca 2.4s ease-in-out infinite}',aguia:'.i{animation:voa 1.2s ease-in-out infinite}',leao:'.i{animation:resp 2.6s ease-in-out infinite}',
 dragao:'.i{animation:balanca 1.8s ease-in-out infinite}',lobo:'.i{animation:pulsa 2s ease-in-out infinite}',katanas:'.i{animation:resp 1.8s ease-in-out infinite}',viking:'.i{animation:sobe 1.6s ease-in-out infinite alternate}',
 mascara:'.i{animation:balanca 2s ease-in-out infinite}',esparta:'.i{animation:sobe 1.4s ease-in-out infinite alternate}',chave:'.i{animation:balanca 1.6s ease-in-out infinite}',chapeu:'.i{animation:balanca 2.6s ease-in-out infinite}',
 elmo:'.i{animation:resp 2.2s ease-in-out infinite}',coluna:'.i{animation:resp 3s ease-in-out infinite}',cavalo:'.i{animation:sobe .9s ease-in-out infinite alternate}',mono:'.i{animation:resp 3s ease-in-out infinite}'};
const KF='@keyframes gira{to{transform:rotate(360deg)}}@keyframes resp{50%{transform:scale(1.08)}}@keyframes pulsa{50%{transform:scale(1.06);filter:brightness(1.35)}}@keyframes fogo{to{transform:scale(1.06,1.12) skewX(-3deg)}}@keyframes sobe{to{transform:translateY(-3px)}}@keyframes flash{0%,86%{filter:none}88%{filter:brightness(2.2)}92%{filter:none}95%{filter:brightness(2)}}@keyframes balanca{0%,100%{transform:rotate(-6deg)}50%{transform:rotate(6deg)}}@keyframes voa{50%{transform:scale(1.14,.92)}}@keyframes eq{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.12)}}@keyframes brilho{0%,60%{transform:translateX(-140px) skewX(-20deg)}100%{transform:translateX(160px) skewX(-20deg)}}@keyframes halo{50%{opacity:.35}}@keyframes gem{50%{filter:brightness(1.8)}}';
let pidx=0;
window.brasao=function(e,cls='em'){const id='b'+(uid++),f=FORMAS[e.forma],c1=e.c1,c2=e.c2;
 if(e._p===undefined)e._p=(pidx++)%PATS.length;
 const lux=['bra','con','mw'].includes(e.div),eu=!!e.voce,corPedra={bra:'#22c55e',con:'#a855f7',mw:'#ef4444'}[e.div]||'#22D3EE';
 const sc=k=>`transform="translate(50 57) scale(${k}) translate(-50 -57)"`;
 const pad=[``,`<g clip-path="url(#k${id})">${[0,1,2,3,4].map(i=>`<rect x="${6+i*20}" y="-10" width="10" height="130" fill="url(#c2${id})" opacity=".85"/>`).join('')}</g>`,
  `<g clip-path="url(#k${id})"><path d="M-10 130 L110 -10 L110 130Z" fill="url(#c2${id})" opacity=".85"/></g>`,
  `<g clip-path="url(#k${id})"><path d="M-5 30 L50 64 L105 30 L105 54 L50 88 L-5 54Z" fill="url(#c2${id})" opacity=".9"/></g>`,
  `<g clip-path="url(#k${id})"><rect x="50" y="-10" width="60" height="68" fill="url(#c2${id})" opacity=".85"/><rect x="-10" y="58" width="60" height="70" fill="url(#c2${id})" opacity=".85"/></g>`][e.padrao];
 let ic=ICO[e.icone]||'';
 if(e.icone==='mono'){const fs=e.sigla.length>1?18:34;
  ic=`<circle cx="50" cy="55" r="30" fill="url(#m${id})"/><circle cx="50" cy="55" r="26" fill="#0b0b0f"/><circle cx="50" cy="55" r="24" fill="#fff"/><text x="50" y="${55+fs*.36}" text-anchor="middle" font-family="Inter,Arial" font-weight="900" font-size="${fs}" fill="${c1}">${e.sigla}</text>
  ${e.site?`<image href="https://www.google.com/s2/favicons?domain=${e.site}&sz=256" x="31" y="36" width="38" height="38" preserveAspectRatio="xMidYMid meet"/>`:''}`}
 const orn=(ORN[e.orn]||'').replace(/url\(#MT\)/g,`url(#m${id})`);
 const pedra=(x,y,r)=>`<g class="gm"><circle cx="${x}" cy="${y}" r="${r+1.6}" fill="url(#m${id})"/><circle cx="${x}" cy="${y}" r="${r}" fill="url(#p${id})"/><circle cx="${x-r*.35}" cy="${y-r*.4}" r="${r*.32}" fill="#fff"/></g>`;
 const metal=eu?['#e0f2fe','#7dd3fc','#1e40af','#bae6fd']:lux?['#fff9e0','#e8c46a','#7a5414','#f3dc95']:['#f4f4f5','#a1a1aa','#3f3f46','#e4e4e7'];
 return `<svg class="${cls}" viewBox="-16 -26 132 156"><defs><style>#${id} .i{transform-box:fill-box;transform-origin:center}#${id} ${ANIM[e.icone]||''}#${id} .br{animation:brilho 4s ease-in-out infinite}#${id} .hl{animation:halo 2.4s ease-in-out infinite}#${id} .gm{animation:gem 1.8s ease-in-out infinite}${KF}</style>
  <clipPath id="k${id}"><path d="${f}"/></clipPath>
  <linearGradient id="m${id}" x1="0" y1="0" x2=".9" y2="1"><stop offset="0" stop-color="${metal[0]}"/><stop offset=".28" stop-color="${metal[1]}"/><stop offset=".55" stop-color="${metal[2]}"/><stop offset=".78" stop-color="${metal[3]}"/><stop offset="1" stop-color="${metal[2]}"/></linearGradient>
  <linearGradient id="fd${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset=".6" stop-color="${c1}"/><stop offset="1" stop-color="${c2}" stop-opacity=".55"/></linearGradient>
  <linearGradient id="c2${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c2}"/><stop offset="1" stop-color="${c2}" stop-opacity=".55"/></linearGradient>
  <linearGradient id="l${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".25"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".5"/></linearGradient>
  <radialGradient id="hg${id}"><stop offset="0" stop-color="${c2}" stop-opacity=".9"/><stop offset="1" stop-color="${c2}" stop-opacity="0"/></radialGradient>
  <radialGradient id="p${id}" cx="35%" cy="30%"><stop offset="0" stop-color="#fff"/><stop offset=".35" stop-color="${corPedra}"/><stop offset="1" stop-color="#000"/></radialGradient>
  <radialGradient id="gl${id}"><stop offset=".45" stop-color="${eu?'#22D3EE':corPedra}" stop-opacity=".35"/><stop offset="1" stop-color="${corPedra}" stop-opacity="0"/></radialGradient>
  ${PATS[e._p](id,c2)}
  <linearGradient id="sv${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".55"/><stop offset=".45" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".4"/></linearGradient>
  <mask id="mk${id}"><g transform="translate(50 56) scale(${e.icone==='mono'?1:1.15}) translate(-50 -56)" fill="#fff" stroke="#fff">${ic.replace(/fill="[^"]*"/g,'fill="#fff"').replace(/stroke="[^"]*"/g,'stroke="#fff"')}</g></mask>
  <filter id="o${id}" x="-30%" y="-30%" width="160%" height="160%"><feMorphology in="SourceAlpha" operator="dilate" radius="1.2" result="a"/><feFlood flood-color="#0b0b0f" flood-opacity=".85"/><feComposite in2="a" operator="in" result="b"/><feGaussianBlur in="SourceAlpha" stdDeviation="2.4" result="c"/><feFlood flood-color="${c2}"/><feComposite in2="c" operator="in" result="d"/><feMerge><feMergeNode in="d"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <filter id="sh${id}" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="4" stdDeviation="3" flood-color="#000" flood-opacity=".7"/></filter></defs>
  <g id="${id}">
  ${lux||eu?`<circle class="hl" cx="50" cy="57" r="72" fill="url(#gl${id})"/>`:''}
  <g filter="url(#sh${id})">
  ${orn}
  <path d="${f}" fill="#0b0b0f" ${sc(1.17)}/>
  ${lux?`<path d="${f}" fill="url(#m${id})" ${sc(1.155)}/><path d="${f}" fill="#0b0b0f" ${sc(1.12)}/>`:''}
  <path d="${f}" fill="url(#m${id})" ${sc(1.105)}/><path d="${f}" fill="#0b0b0f" opacity=".55" ${sc(1.05)}/>
  <path d="${f}" fill="url(#fd${id})"/>${pad}<path d="${f}" fill="url(#pt${id})"/>
  <g clip-path="url(#k${id})"><circle class="hl" cx="50" cy="56" r="38" fill="url(#hg${id})" opacity=".55"/></g>
  <path d="${f}" fill="url(#l${id})"/>
  <path d="${f}" fill="none" stroke="${c2}" stroke-opacity=".6" stroke-width="1" ${sc(.92)}/>
  <g filter="url(#o${id})"><g class="i" transform="translate(50 56) scale(${e.icone==='mono'?1:1.15}) translate(-50 -56)">${ic.replace(/url\(#MT\)/g,`url(#m${id})`)}</g></g>
  <rect x="-20" y="0" width="140" height="120" fill="url(#sv${id})" mask="url(#mk${id})" opacity=".8"/>
  <g clip-path="url(#k${id})"><rect class="br" x="0" y="-20" width="26" height="160" fill="#fff" opacity=".22"/></g>
  ${lux?pedra(50,-2,3.8)+pedra(2,42,2.8)+pedra(98,42,2.8):''}${eu?pedra(50,-2,3.4):''}
  <g><path d="M-8 98 l10 4 v16 l-10 -4 l5 -8z" fill="${c1}" stroke="#0b0b0f"/><path d="M108 98 l-10 4 v16 l10 -4 l-5 -8z" fill="${c1}" stroke="#0b0b0f"/>
   <path d="M2 100 h96 v16 h-96z" fill="url(#m${id})" stroke="#0b0b0f" stroke-width="1"/><path d="M2 102.5 h96" stroke="#fff" stroke-opacity=".6" stroke-width=".8"/>
   <text x="50" y="112.6" text-anchor="middle" font-family="Inter,Arial" font-weight="900" font-size="7.6" letter-spacing=".9" fill="#0b0b0f" ${e.nome.length>14?'textLength="88" lengthAdjust="spacingAndGlyphs"':''}>${e.nome.toUpperCase()}</text></g>
  <text x="50" y="125" text-anchor="middle" font-family="Inter,Arial" font-weight="800" font-size="5.4" letter-spacing="2.4" fill="${c2}">EST. 2026</text>
  </g></g></svg>`};
// ---- robôs únicos ----
const CAB=['M10 14h44v32H10z','M10 30a22 18 0 0 1 44 0v16H10z','M14 12h36l6 10v24H8V22z','M8 22a14 14 0 0 1 14-10h20a14 14 0 0 1 14 10v14a10 10 0 0 1-10 10H18A10 10 0 0 1 8 36z','M32 8l24 12v26H8V20z'];
const OLHO=[
 c=>`<rect x="17" y="24" width="30" height="7" rx="3.5" fill="${c}"/>`,
 c=>`<circle cx="24" cy="28" r="4.5" fill="${c}"/><circle cx="40" cy="28" r="4.5" fill="${c}"/>`,
 c=>`<path d="M19 25l8 6M27 25l-8 6M37 25l8 6M45 25l-8 6" stroke="${c}" stroke-width="2.4" stroke-linecap="round"/>`,
 c=>`<circle cx="32" cy="28" r="7" fill="${c}"/><circle cx="32" cy="28" r="3" fill="#000"/>`,
 c=>`<path d="M18 31q6-8 12 0M34 31q6-8 12 0" stroke="${c}" stroke-width="2.6" fill="none" stroke-linecap="round"/>`,
 c=>`<rect x="19" y="24" width="10" height="8" rx="1" fill="${c}"/><rect x="35" y="24" width="10" height="8" rx="1" fill="${c}"/>`,
 c=>`<path d="M18 26l10 4-10 2zM46 26l-10 4 10 2z" fill="${c}"/>`,
 c=>`<circle cx="24" cy="28" r="5" fill="none" stroke="${c}" stroke-width="2"/><circle cx="40" cy="28" r="5" fill="none" stroke="${c}" stroke-width="2"/><circle cx="24" cy="28" r="1.6" fill="${c}"/><circle cx="40" cy="28" r="1.6" fill="${c}"/>`,
 c=>`<path d="M17 28h30" stroke="${c}" stroke-width="3" stroke-dasharray="4 2"/>`];
const ANT=[(c)=>`<line x1="32" y1="4" x2="32" y2="12" stroke="#9aa0ad" stroke-width="2"/><circle cx="32" cy="4" r="3" fill="${c}"/>`,
 (c)=>`<path d="M22 12l-6-8M42 12l6-8" stroke="#9aa0ad" stroke-width="2"/><circle cx="16" cy="4" r="2.4" fill="${c}"/><circle cx="48" cy="4" r="2.4" fill="${c}"/>`,
 (c)=>`<path d="M26 12q6-12 12 0" stroke="${c}" stroke-width="3" fill="none"/>`,
 (c)=>`<path d="M30 12V2h4v10" fill="${c}"/><path d="M24 4h16" stroke="${c}" stroke-width="2"/>`,
 ()=>``];
const BOCA=[c=>`<rect x="24" y="38" width="16" height="3" rx="1.5" fill="${c}"/>`,c=>`<path d="M24 37q8 6 16 0" stroke="${c}" stroke-width="2" fill="none"/>`,c=>`<path d="M22 39h20" stroke="${c}" stroke-width="2" stroke-dasharray="2 2"/>`,c=>`<path d="M24 40l4-3 4 3 4-3 4 3" stroke="${c}" stroke-width="1.8" fill="none"/>`];
window.robo=function(r,e,g){const id='r'+(uid++);const k=(g*37)%81;const cab=k%5,olho=Math.floor(k/5)%9,ant=Math.floor(k/45)%5+(k%3===0?0:0),boca=(k+olho)%4;
 const lc=[e.c2,'#fff','#22d3ee','#fde047','#f43f5e'][(k*7)%5];
 return `<svg viewBox="0 0 64 66"><defs><linearGradient id="h${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f4f4f8"/><stop offset="1" stop-color="#7d8394"/></linearGradient></defs>
  ${ANT[(ant+cab)%5](e.c2)}<path d="${CAB[cab]}" fill="url(#h${id})" stroke="#2a2d36" stroke-width="1.4"/>
  <rect x="13" y="19" width="38" height="24" rx="7" fill="#0b0d14"/><rect x="13" y="19" width="38" height="24" rx="7" fill="${e.c1}" opacity=".4"/>${OLHO[olho](lc)}${BOCA[boca](lc)}
  <rect x="4" y="24" width="5" height="12" rx="2" fill="${e.c2}"/><rect x="55" y="24" width="5" height="12" rx="2" fill="${e.c2}"/>
  <path d="M16 48h32l4 16H12z" fill="${e.c1}" stroke="${e.c2}" stroke-width="1.4"/><circle cx="32" cy="56" r="6" fill="#0b0d14" stroke="${e.c2}" stroke-width="1.5"/>
  <text x="32" y="59" text-anchor="middle" font-family="Inter,Arial" font-weight="900" font-size="7.5" fill="#fff">${r.n[0]}</text></svg>`};
})();
