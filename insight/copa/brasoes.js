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
const ANIM={logo:'eq 1.6s ease-in-out infinite',turbo:'gira 2.4s linear infinite',shuriken:'gira 1.6s linear infinite',besouro:'resp 2s ease-in-out infinite',caveira:'pulsa 1.4s ease-in-out infinite',chama:'fogo .5s ease-in-out infinite alternate',foguete:'sobe 1.2s ease-in-out infinite alternate',raio:'flash 2.2s steps(1) infinite',serpente:'balanca 2.4s ease-in-out infinite',aguia:'voa 1.2s ease-in-out infinite',leao:'resp 2.6s ease-in-out infinite',dragao:'balanca 1.8s ease-in-out infinite',lobo:'pulsa 2s ease-in-out infinite',katanas:'resp 1.8s ease-in-out infinite',viking:'sobe 1.6s ease-in-out infinite alternate',mascara:'balanca 2s ease-in-out infinite',esparta:'sobe 1.4s ease-in-out infinite alternate',chave:'balanca 1.6s ease-in-out infinite',chapeu:'balanca 2.6s ease-in-out infinite',elmo:'resp 2.2s ease-in-out infinite',coluna:'resp 3s ease-in-out infinite',cavalo:'sobe .9s ease-in-out infinite alternate',mono:'resp 3s ease-in-out infinite'};
const KF='@keyframes gira{to{transform:rotate(360deg)}}@keyframes girai{to{transform:rotate(-360deg)}}@keyframes resp{50%{transform:scale(1.08)}}@keyframes pulsa{50%{transform:scale(1.06);filter:brightness(1.35)}}@keyframes fogo{to{transform:scale(1.06,1.12) skewX(-3deg)}}@keyframes sobe{to{transform:translateY(-3px)}}@keyframes flash{0%,86%{filter:none}88%{filter:brightness(2.2)}92%{filter:none}95%{filter:brightness(2)}}@keyframes balanca{0%,100%{transform:rotate(-6deg)}50%{transform:rotate(6deg)}}@keyframes voa{50%{transform:scale(1.14,.92)}}@keyframes eq{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.12)}}@keyframes halo{50%{opacity:.45;transform:scale(1.08)}}@keyframes sobeP{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-46px);opacity:0}}@keyframes brilhoT{0%,60%{transform:translateX(-120px)}100%{transform:translateX(140px)}}';
// estilos de anel (um por equipe, revezando)
const ANEL=[(c)=>`stroke-dasharray="2 5" stroke-width="2"`,(c)=>`stroke-dasharray="14 6 2 6" stroke-width="1.6"`,(c)=>`stroke-dasharray="1 3" stroke-width="3"`,(c)=>`stroke-dasharray="30 10" stroke-width="1.2"`,(c)=>`stroke-dasharray="6 3" stroke-width="2.4"`,(c)=>`stroke-dasharray="0.5 8" stroke-width="5" stroke-linecap="round"`];
let pidx=0;
window.brasao=function(e,cls='em'){const id='b'+(uid++),c1=e.c1,c2=e.c2,eu=!!e.voce;if(e._p===undefined)e._p=(pidx++);
 const sat=e.gigante?'#fde68a':c2;
 let ic=ICO[e.icone]||'';
 if(e.icone==='mono'){const fs=e.sigla.length>1?20:38;ic=`<circle cx="50" cy="56" r="27" fill="${c1}" stroke="${c2}" stroke-width="2"/><text x="50" y="${56+fs*.36}" text-anchor="middle" font-family="Inter,Arial" font-weight="900" font-size="${fs}" fill="#fff">${e.sigla}</text>`+(e.imagem?`<clipPath id="ci${id}"><circle cx="50" cy="56" r="26"/></clipPath><image href="${e.imagem}" x="24" y="30" width="52" height="52" clip-path="url(#ci${id})" preserveAspectRatio="xMidYMid slice"/>`:'')}
 if(e.imagem&&e.icone!=='mono')ic=`<clipPath id="ci${id}"><circle cx="50" cy="56" r="27"/></clipPath><image href="${e.imagem}" x="23" y="29" width="54" height="54" clip-path="url(#ci${id})" preserveAspectRatio="xMidYMid slice"/>`;
 const part=Array.from({length:8},(_,k)=>{const x=22+((k*37+e._p*13)%56),d=(k*.37+e._p*.21)%2.6;return `<circle cx="${x}" cy="${86-(k%3)*4}" r="${1+(k%3)*.5}" fill="${k%2?c2:'#fff'}" style="animation:sobeP ${2.2+(k%4)*.4}s ${d}s ease-out infinite;transform-box:fill-box"/>`}).join('');
 const nm=e.nome.toUpperCase(),fsn=nm.length>16?10.5:13;
 return `<svg class="${cls}" viewBox="-6 -6 112 132"><defs><style>#${id} .i{transform-box:fill-box;transform-origin:center;animation:${ANIM[e.icone]||'resp 3s ease-in-out infinite'}}#${id} .an{transform-origin:50px 56px;animation:gira ${14+e._p%5*3}s linear infinite}#${id} .an2{transform-origin:50px 56px;animation:girai ${9+e._p%4*2}s linear infinite}#${id} .hl{transform-origin:50px 56px;animation:halo 2.6s ease-in-out infinite}#${id} .bt{animation:brilhoT 3.6s ease-in-out infinite}${KF}</style>
  <radialGradient id="h${id}"><stop offset="0" stop-color="${c2}" stop-opacity=".75"/><stop offset=".55" stop-color="${c2}" stop-opacity=".18"/><stop offset="1" stop-color="${c2}" stop-opacity="0"/></radialGradient>
  <radialGradient id="d${id}" cx="50%" cy="40%"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="#05050a"/></radialGradient>
  <linearGradient id="w${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset=".55" stop-color="${sat}"/><stop offset="1" stop-color="${eu?'#3B82F6':c2}"/></linearGradient>
  <linearGradient id="sv${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".5"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".35"/></linearGradient>
  <clipPath id="tx${id}"><text x="50" y="${110}" text-anchor="middle" font-family="Inter,Arial" font-weight="900" font-style="italic" font-size="${fsn}" textLength="${Math.min(104,nm.length*7.4)}" lengthAdjust="spacingAndGlyphs">${nm}</text></clipPath>
  <filter id="o${id}" x="-40%" y="-40%" width="180%" height="180%"><feMorphology in="SourceAlpha" operator="dilate" radius="1.3" result="a"/><feFlood flood-color="#05050a"/><feComposite in2="a" operator="in" result="b"/><feGaussianBlur in="SourceAlpha" stdDeviation="3" result="c"/><feFlood flood-color="${c2}"/><feComposite in2="c" operator="in" result="d"/><feMerge><feMergeNode in="d"/><feMergeNode in="d"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
  <g id="${id}">
   <circle class="hl" cx="50" cy="56" r="50" fill="url(#h${id})"/>
   <g class="an"><circle cx="50" cy="56" r="44" fill="none" stroke="${c2}" ${ANEL[e._p%ANEL.length](c2)} opacity=".85"/></g>
   <g class="an2"><circle cx="50" cy="56" r="38" fill="none" stroke="${eu?'#22D3EE':'#fff'}" stroke-dasharray="${3+e._p%4} ${9+e._p%5}" stroke-width="1" opacity=".55"/><circle cx="50" cy="18" r="2.4" fill="${c2}"/></g>
   <circle cx="50" cy="56" r="33" fill="url(#d${id})" stroke="${c2}" stroke-opacity=".5" stroke-width="1"/>
   ${part}
   <g filter="url(#o${id})"><g class="i" transform="translate(50 56) scale(${e.icone==='mono'?1:1.25}) translate(-50 -56)">${ic.replace(/url\(#MT\)/g,`url(#w${id})`)}</g></g>
   <circle cx="50" cy="56" r="33" fill="url(#sv${id})" opacity=".35" pointer-events="none"/>
   <text x="50" y="110" text-anchor="middle" font-family="Inter,Arial" font-weight="900" font-style="italic" font-size="${fsn}" textLength="${Math.min(104,nm.length*7.4)}" lengthAdjust="spacingAndGlyphs" fill="#05050a" stroke="#05050a" stroke-width="4" stroke-linejoin="round">${nm}</text>
   <text x="50" y="110" text-anchor="middle" font-family="Inter,Arial" font-weight="900" font-style="italic" font-size="${fsn}" textLength="${Math.min(104,nm.length*7.4)}" lengthAdjust="spacingAndGlyphs" fill="url(#w${id})">${nm}</text>
   <g clip-path="url(#tx${id})"><rect class="bt" x="0" y="96" width="14" height="20" fill="#fff" opacity=".8" transform="skewX(-20)"/></g>
   <text x="50" y="121" text-anchor="middle" font-family="Inter,Arial" font-weight="800" font-size="5.6" letter-spacing="3" fill="${c2}" opacity=".9">${e.sigla} · EST. 2026</text>
  </g></svg>`};
// medalha mini do campeonato (aparece girando em cima do emblema quando a equipe é campeã)
const MED={mun:['#ffe0c2','#e08a4a','#9a4f1f','&lt;h1&gt;'],est:['#eafff3','#6fe0a4','#1f8a55','{ }'],reg:['#ffffff','#bfeff8','#3a8fa3','⇧'],sd:['#ffe3ea','#ff6b88','#a3122f','≫'],sc:['#ffe3ea','#ff6b88','#a3122f','≫'],sb:['#ffe3ea','#ff6b88','#a3122f','≫'],bra:['#fffbe0','#ffd84a','#1aa35c','CPU'],con:['#fbf2ff','#c9a7ff','#6a3fbf','◎'],mw:['#fff6cf','#f0c75e','#a8761f','★']};
window.medalhaMini=function(div){const m=MED[div],id='mm'+(uid++);return `<svg viewBox="0 0 40 40"><defs><radialGradient id="${id}" cx="35%" cy="30%"><stop offset="0" stop-color="${m[0]}"/><stop offset=".55" stop-color="${m[1]}"/><stop offset="1" stop-color="${m[2]}"/></radialGradient></defs><circle cx="20" cy="20" r="18" fill="url(#${id})" stroke="${m[2]}" stroke-width="1.4"/><circle cx="20" cy="20" r="13.5" fill="none" stroke="#fff" stroke-opacity=".6" stroke-dasharray="1 2"/><text x="20" y="${m[3].length>3?23:24}" text-anchor="middle" font-family="Menlo,monospace" font-weight="900" font-size="${m[3].length>4?7:10}" fill="${m[2]}">${m[3]}</text></svg>`};
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
window.robo=function(r,e,g){const id='r'+(uid++);const k=(g*41)%225;const cab=k%5,olho=Math.floor(k/5)%9,ant=Math.floor(k/45)%5,boca=(k+olho)%4;
 const lc=[e.c2,'#fff','#22d3ee','#fde047','#f43f5e'][(k*7)%5];
 return `<svg viewBox="0 0 64 66"><defs><linearGradient id="h${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f4f4f8"/><stop offset="1" stop-color="#7d8394"/></linearGradient></defs>
  ${ANT[ant](e.c2)}<path d="${CAB[cab]}" fill="url(#h${id})" stroke="#2a2d36" stroke-width="1.4"/>
  <rect x="13" y="19" width="38" height="24" rx="7" fill="#0b0d14"/><rect x="13" y="19" width="38" height="24" rx="7" fill="${e.c1}" opacity=".4"/>${OLHO[olho](lc)}${BOCA[boca](lc)}
  <rect x="4" y="24" width="5" height="12" rx="2" fill="${e.c2}"/><rect x="55" y="24" width="5" height="12" rx="2" fill="${e.c2}"/>
  <path d="M16 48h32l4 16H12z" fill="${e.c1}" stroke="${e.c2}" stroke-width="1.4"/><circle cx="32" cy="56" r="6" fill="#0b0d14" stroke="${e.c2}" stroke-width="1.5"/>
  <text x="32" y="59" text-anchor="middle" font-family="Inter,Arial" font-weight="900" font-size="7.5" fill="#fff">${r.n[0]}</text></svg>`};
})();
