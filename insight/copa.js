// ================= COPA DO INSIGHT =================
// Campeonato de programação: você (Studio Evolution Tech) contra as grandes empresas.
// Usa do app: S, salvar, hoje, acertos, MISSOES, POSTS, toast, confete, $, $$, falar
(function(){
const ORDEM=['mun','est','reg','sd','sc','sb','bra','con','mw'];
const INFO={
 mun:{nome:'Municipal',taca:'Troféu Tag de Ouro',meta:30,cena:'mun',med:'mun',cor:'#ff9a3c',etapa:'Semanas 1–2 · HTML'},
 est:{nome:'Estadual',taca:'Cinturão do Estilo',meta:45,cena:'est',med:'est',cor:'#2bff88',etapa:'Semana 3 · CSS e celular'},
 reg:{nome:'Regional',taca:'Engrenagem do Deploy',meta:60,cena:'reg',med:'reg',cor:'#2ee6ff',etapa:'Semana 4 · site no ar'},
 sd:{nome:'Série D',taca:'Insígnia do Acesso',meta:75,cena:'ser',med:'ser',cor:'#ff3c5a',etapa:'Mês 2 · o painel'},
 sc:{nome:'Série C',taca:'Insígnia do Acesso',meta:90,cena:'ser',med:'ser',cor:'#ff3c5a',etapa:'Mês 2 · o painel'},
 sb:{nome:'Série B',taca:'Insígnia do Acesso',meta:105,cena:'ser',med:'ser',cor:'#ff3c5a',etapa:'Mês 3 · o painel'},
 bra:{nome:'Brasileirão do Código',taca:'Taça Kernel Brasil',meta:130,cena:'bra',med:'bra',cor:'#ffd23f',etapa:'Mês 4–5 · SUPER VISÃO'},
 con:{nome:'Copa Continental',taca:'Orbe Continental',meta:160,cena:'mun2',med:'con',cor:'#c9a7ff',etapa:'Mês 6 · entrega final'},
 mw:{nome:'Mundial de Programadores',taca:'Coroa do Código Supremo',meta:200,cena:'ouro',med:'mw',cor:'#f0c75e',etapa:'O mais difícil'}};
const FUNDO_CODIGO={ // o prêmio: código do fundo vivo explicado
 mun:'Circuito de cobre',est:'Chuva de código',reg:'Radar de hexágonos',sd:'Data center',sc:'Data center',sb:'Data center',bra:'Ondas verde e ouro',con:'Globo em rede',mw:'Ouro líquido (shader)'};

// ---------- robôs e imagens ----------
const RG=new Map();let g=0;EQUIPES.forEach(e=>e.robos.forEach(r=>RG.set(r,g++)));const rb=(r,e)=>window.robo(r,e,RG.get(r)||0);
function lerImgs(){let im={};try{im=JSON.parse(localStorage.getItem('copa_img')||'{}')}catch{}EQUIPES.forEach(e=>{const v=im[e.id];if(!v){delete e.imagem;return}if(typeof v==='string'){e.imagem=v;e.imgLarga=false;e.imgFundo='#ffffff'}else{e.imagem=v.src;e.imgLarga=!!v.larga;e.imgFundo=v.fundo||'#ffffff'}});return im}lerImgs();
window.copaRelerImgs=()=>lerImgs();function salvarImg(e,v){const im=lerImgs();if(v)im[e.id]=v;else delete im[e.id];try{localStorage.setItem('copa_img',JSON.stringify(im));localStorage.setItem('copa_img_t',Date.now())}catch{toast('Imagem grande demais')}lerImgs();window.aoSalvarLogos&&aoSalvarLogos()}
// ---------- estado ----------
function C(){if(!S.copa){S.copa={div:'mun',ini:hoje(),xp0:xpTotal(),xpIni:xpTotal(),hist:{},tit:[],fundos:[],msgs:[],vistas:{},temporadas:0};salvar()}return S.copa}
function geral(){const c=C();if(c.xpIni==null){c.xpIni=c.xp0;salvar()}const BASE={mw:500,con:440,bra:380,sb:320,sc:270,sd:220,reg:170,est:120,mun:70};const d=Math.min(dias(c.ini0||c.ini,hoje()),365);
 const L=EQUIPES.map(e=>e.voce?{e,xp:Math.max(0,xpTotal()-c.xpIni),eu:true}:{e,xp:e.div===c.div?xpRobo(e):(BASE[e.div]+Math.round(semente(e.id+'g')*40)+Math.round(d*2.4*(.7+semente(e.id)*.5)))});return L.sort((a,b)=>b.xp-a.xp)}
function xpTotal(){return Object.keys(S.miss||{}).length*3+acertos()+Math.floor(Object.keys(S.vistos||{}).length/2)}
function bugs(){return Object.values(S.resp||{}).filter(r=>r==='ok').length}
function dias(a,b){return Math.round((new Date(b)-new Date(a))/864e5)}
function addDia(d,n){const x=new Date(d+'T12:00:00');x.setDate(x.getDate()+n);return x.toISOString().slice(0,10)}
function semente(str){let h=2166136261;for(const c of str)h=Math.imul(h^c.charCodeAt(0),16777619);return ((h>>>0)%1000)/1000}
function registrar(){const c=C(),d=hoje();c.hist[d]=xpTotal()-c.xp0;salvar()}
function meuXP(){const c=C();return Math.max(0,xpTotal()-c.xp0)}
// média diária dos últimos 7 dias (mínimo 2, para o campeonato andar)
function ritmo(ate){const c=C();let ganho=0,n=0;for(let k=1;k<=7;k++){const d=addDia(ate,-k),a=c.hist[d],b=c.hist[addDia(d,-1)];if(a!=null){ganho+=Math.max(0,a-(b||0));n++}}return Math.max(2,n?ganho/n:3)}
function rivais(){const c=C();return EQUIPES.filter(e=>e.div===c.div&&!e.voce)}
function xpRobo(e){const c=C();const fator=.72+semente(e.id)*.42;let xp=0;const t=Math.min(dias(c.ini,hoje()),90);for(let k=0;k<t;k++){const d=addDia(c.ini,k);xp+=ritmo(d)*fator*(.75+semente(e.id+d)*.5)}
 // parte do dia de hoje, proporcional à hora
 const desde=c.iniTs?Math.max(0,(Date.now()-Math.max(c.iniTs,new Date(hoje()+'T00:00:00').getTime()))/864e5):new Date().getHours()/24;xp+=ritmo(hoje())*fator*.9*Math.min(1,desde);return Math.round(xp)}
function tabela(){const c=C(),eu=EQUIPES.find(e=>e.voce);const L=[{e:eu,xp:meuXP(),bugs:bugs(),eu:true},...rivais().map(e=>({e,xp:xpRobo(e),bugs:Math.round(xpRobo(e)*.4)}))];L.sort((a,b)=>b.xp-a.xp||(a.eu?-1:1));return L}

// ---------- fim de temporada ----------
function checarFim(){const c=C(),inf=INFO[c.div],T=tabela();if(T[0].xp<inf.meta)return null;
 const pos=T.findIndex(x=>x.eu)+1,i=ORDEM.indexOf(c.div);let res;
 if(pos===1){res='campeao';c.tit.push(c.div);if(!c.fundos.includes(c.div))c.fundos.push(c.div);c.div=ORDEM[Math.min(i+1,ORDEM.length-1)]}
 else if(pos===2)res='fica';else{res='cai';c.div=ORDEM[Math.max(0,i-1)]}
 const antes=ORDEM[i];c.ini=hoje();c.iniTs=Date.now();c.xp0=xpTotal();c.hist={};c.temporadas++;salvar();return{res,pos,antes,T}}

// ---------- provocações ----------
const DURAS=['Hoje 20:30 eu te espero na Oficina. Se tiver coragem.','Vi você abrindo o app e saindo sem estudar. Clássico.','Mais um dia sem missão? Seu time tá pagando seu salário à toa.','Te passei de novo. Já perdi a conta.','Você não é ruim. Você é inconstante. É pior.','Disse que ia mudar de vida estudando. Cadê?','Até o Boeing sobe mais rápido que você.','Seus robôs colegas estão pedindo transferência.','Abre a Oficina, capitão. Ou tá com medo do código?','Placar de hoje: eu 1 × 0 sua desculpa.'];
function provocar(){const c=C(),T=tabela(),eu=T.findIndex(x=>x.eu);const d=hoje();if(c.vistas[d])return;
 const acima=T.filter((x,i)=>i<eu).map(x=>x.e);const quem=(acima[0]||T.find(x=>!x.eu).e);const r=quem.robos.find(r=>r.rival)||quem.robos[0];
 const fala=(eu===0)?'Aproveita a liderança. Amanhã ela é minha.':(r.fr&&semente(d)>.5?r.fr:DURAS[Math.floor(semente(d+'p')*DURAS.length)]);
 c.vistas[d]=1;c.msgs.unshift({d,eq:quem.id,r:r.n,f:fala});c.msgs=c.msgs.slice(0,40);salvar();
 setTimeout(()=>avisoRival(quem,r,fala),3200)}
function avisoRival(e,r,f){const a=document.createElement('div');a.className='cp-aviso';a.innerHTML=`<div class="cp-av">${rb(r,e)}</div><div><b>${r.n} · ${e.nome}</b><span>${esc(f)}</span></div>`;document.body.appendChild(a);requestAnimationFrame(()=>a.classList.add('on'));a.onclick=()=>{a.remove();abrirCopa('msgs')};setTimeout(()=>{a.classList.remove('on');setTimeout(()=>a.remove(),400)},7000)}

// ---------- fundo vivo ----------
let anim=0;
function ligarFundo(cv,div){cancelAnimationFrame(anim);const inf=INFO[div];
 if(inf.cena==='ouro'&&window.COPA_OURO&&COPA_OURO(cv))return;
 const x=cv.getContext('2d');const d=Math.min(1.5,devicePixelRatio||1);cv.width=cv.clientWidth*d;cv.height=cv.clientHeight*d;x.setTransform(d,0,0,d,0,0);const ctx={};const k=inf.cena==='ouro'?'mw':inf.cena;
 const f=t=>{if(!cv.isConnected)return;COPA_CENA[k].call(ctx,x,cv.clientWidth,cv.clientHeight,t);anim=requestAnimationFrame(f)};anim=requestAnimationFrame(f)}

// ---------- tela da Copa ----------
function medalhaGrande(div){return `<div class="cp-med">${COPA_MEDALHA[INFO[div].med]||''}</div>`}
function abrirCopa(aba='tab'){registrar();const fim=checarFim();const c=C(),inf=INFO[c.div],T=tabela();
 let o=$('#copa');if(!o){o=document.createElement('div');o.id='copa';document.body.appendChild(o)}
 const pos=T.findIndex(x=>x.eu)+1,lider=T[0],falta=Math.max(0,inf.meta-T.find(x=>x.eu).xp);
 o.style.setProperty('--cc',inf.cor);
 o.innerHTML=`<canvas class="cp-bg"></canvas><div class="cp-in">
  <div class="cp-top"><button class="cp-x" aria-label="Fechar">×</button><span>COPA DO INSIGHT</span><span class="cp-pos">${pos}º</span></div>
  <div class="cp-capa">${medalhaGrande(c.div)}<small>${inf.nome.toUpperCase()} · ${inf.etapa.toUpperCase()}</small><h2>${inf.taca}</h2>
   <div class="cp-bar"><i style="width:${Math.min(100,lider.xp/inf.meta*100)}%"></i></div><p>${lider.eu?'Você lidera! ':`${lider.e.nome} lidera com ${lider.xp} XP. `}Campeão é quem chega primeiro a <b>${inf.meta} XP</b>.${falta?` Faltam <b>${falta} XP</b> para você.`:''}</p></div>
  <div class="cp-abas">${[['tab','Tabela'],['rk','Ranking geral'],['msgs','Provocações'],['car','Carreira'],['pre','Prêmios']].map(([k,n])=>`<button data-a="${k}" class="${k===aba?'on':''}">${n}</button>`).join('')}</div>
  <div class="cp-corpo"></div>
  <p class="cp-leg">XP: missão = 3 · desafio certo = 1 · 2 posts estudados = 1 · BUGS = erros corrigidos<br>1º sobe · 2º fica · 3º para baixo cai</p></div>`;
 o.classList.add('on');document.body.style.overflow='hidden';ligarFundo(o.querySelector('.cp-bg'),c.div);
 o.querySelector('.cp-x').onclick=fecharCopa;
 const corpo=o.querySelector('.cp-corpo');
 const mostra=k=>{$$('#copa .cp-abas button').forEach(b=>b.classList.toggle('on',b.dataset.a===k));
  if(k==='tab')corpo.innerHTML=`<div class="cp-tab">${T.map((x,i)=>`<div class="cp-lin${x.eu?' eu':''}${i===0?' sobe':i>=2?' cai':''}" data-e="${x.e.id}"><span class="n">${i+1}</span><div class="em">${brasao(x.e,'mini')}</div><div class="q"><b>${x.e.nome}</b><div class="pr"><i style="width:${Math.min(100,x.xp/inf.meta*100)}%;background:${x.eu?'linear-gradient(90deg,#3B82F6,#22D3EE)':x.e.c2}"></i></div></div><span class="xp">${x.xp}<small>XP</small></span><span class="bg">${x.bugs}<small>BUGS</small></span></div>`).join('')}</div>`;
  if(k==='rk'){const G=geral();corpo.innerHTML=`<p class="cp-vz" style="padding:4px 4px 10px">Todas as ${G.length} equipes. Toque numa equipe para ver os robôs e colocar a logo.</p><div class="cp-tab">${G.map((x,i)=>`<div class="cp-lin${x.eu?' eu':''}" data-e="${x.e.id}"><span class="n">${i+1}</span><div class="em">${brasao(x.e,'mini')}</div><div class="q"><b>${x.e.nome}</b><small style="font-size:10px;opacity:.75;letter-spacing:.06em;color:${INFO[x.e.div].cor}">${INFO[x.e.div].nome.toUpperCase()}</small></div><span class="xp">${x.xp}<small>XP</small></span><span class="bg">${x.e.robos.length}<small>ROBÔS</small></span></div>`).join('')}</div>`}
  if(k==='msgs'){const M=C().msgs;corpo.innerHTML=M.length?M.map(m=>{const e=EQUIPES.find(x=>x.id===m.eq)||EQUIPES[1],r=e.robos.find(r=>r.n===m.r)||e.robos[0];return `<div class="cp-msg"><div class="av">${rb(r,e)}</div><div><small>${r.n.toUpperCase()} · ${e.nome.toUpperCase()} · ${m.d.split('-').reverse().slice(0,2).join('/')}</small><p>${esc(m.f)}</p></div></div>`}).join(''):'<p class="cp-vz">Ainda ninguém te provocou. Espera até amanhã… 😏</p>'}
  if(k==='car')corpo.innerHTML=ORDEM.map((d,i)=>{const at=d===c.div,ok=ORDEM.indexOf(c.div)>i,t=c.tit.filter(x=>x===d).length;return `<div class="cp-deg${at?' at':ok?' ok':''}" style="--dc:${INFO[d].cor}"><span>${i+1}</span><div><b>${INFO[d].nome}</b><small>${INFO[d].taca} · ${INFO[d].etapa}</small></div><em>${t?'🏆×'+t:at?'EM DISPUTA':ok?'✓':'🔒'}</em></div>`}).join('');
  if(k==='pre')corpo.innerHTML=`<p class="cp-vz" style="text-align:left">Cada título desbloqueia o <b>fundo vivo</b> daquele campeonato, com o código pronto para você aprender e usar nos seus sites.</p>`+ORDEM.filter((d,i,a)=>a.indexOf(d)===i&&!['sc','sb'].includes(d)).map(d=>{const tem=c.fundos.includes(d)||(d==='sd'&&(c.fundos.includes('sc')||c.fundos.includes('sb')));return `<div class="cp-pre${tem?' tem':''}" data-pr="${tem?d:''}"><b>${FUNDO_CODIGO[d]}</b><small>${INFO[d].nome}</small><em>${tem?'DESBLOQUEADO · ver código':'🔒 ganhe o '+INFO[d].nome}</em></div>`}).join('')};
 $$('#copa .cp-abas button').forEach(b=>b.onclick=()=>mostra(b.dataset.a));mostra(aba);
 corpo.addEventListener('click',ev=>{const p=ev.target.closest('[data-pr]');if(p&&p.dataset.pr)abrirPremio(p.dataset.pr)});
 corpo.addEventListener('click',ev=>{const l=ev.target.closest('.cp-lin');if(!l)return;const e=EQUIPES.find(x=>x.id===l.dataset.e);if(e)verEquipe(e)});
 if(fim)setTimeout(()=>festa(fim),400);
 atualizarBotao()}
function fecharCopa(){const o=$('#copa');if(o)o.classList.remove('on');cancelAnimationFrame(anim);document.body.style.overflow=''}
function escolherLogo(e,depois){const inp=document.createElement('input');inp.type='file';inp.accept='image/*';inp.onchange=()=>{const fr=new FileReader();fr.onload=()=>{const img=new Image();img.onload=()=>{const k=Math.min(1,480/Math.max(img.width,img.height));const cv=document.createElement('canvas');cv.width=Math.round(img.width*k);cv.height=Math.round(img.height*k);cv.getContext('2d').drawImage(img,0,0,cv.width,cv.height);
 // detecta se o fundo da imagem é escuro (canto) para escolher a placa
 const px=cv.getContext('2d').getImageData(1,1,1,1).data,escuro=(px[3]>200)&&(px[0]+px[1]+px[2]<300);
 salvarImg(e,{src:cv.toDataURL('image/png'),larga:img.width/img.height>1.35,fundo:escuro?'#0b0b0f':'#ffffff'});depois&&depois()};img.src=fr.result};fr.readAsDataURL(inp.files[0])};inp.click()}
function verEquipe(e){const m=$('#modal'),sh=m.querySelector('.sheet');sh.style.padding='';sh.innerHTML=`<div style="display:flex;gap:12px;align-items:center">${brasao(e,'mini')}<div><h4 style="margin:0">${e.nome}</h4><small style="color:var(--mu)">"${e.lema}"</small></div></div>${e.robos.map(r=>`<div style="display:flex;gap:10px;align-items:center;margin-top:12px"><div style="width:52px;flex:0 0 52px">${rb(r,e)}</div><div><b>${r.n}</b> <small style="color:var(--mu)">${r.f}${r.rival?' · RIVAL':''}</small><p style="font-size:14px;margin-top:2px">${r.voce?'Você é o capitão.':'“'+esc(r.fr)+'”'}</p></div></div>`).join('')}<div class="row"><button id="veLogo">🖼️ ${e.imagem?'Trocar':'Colocar'} logo</button>${e.imagem?'<button id="veFundo">Placa '+(e.imgFundo==='#0b0b0f'?'clara':'escura')+'</button><button id="veTira">Tirar</button>':''}<button class="gr" id="veOk">Fechar</button></div><p style="font-size:11.5px;color:var(--mu);margin-top:8px">Logo quadrada fica no círculo. Logo comprida (com o nome escrito) fica numa placa larga, sem cortar.</p>`;m.classList.add('on');
 const re=()=>{verEquipe(e);const cp=$('#copa .cp-abas .on');if(cp)cp.click();atualizarBotao()};
 $('#veOk').onclick=()=>m.classList.remove('on');$('#veLogo').onclick=()=>escolherLogo(e,re);
 const vf=$('#veFundo');if(vf)vf.onclick=()=>{salvarImg(e,{src:e.imagem,larga:e.imgLarga,fundo:e.imgFundo==='#0b0b0f'?'#ffffff':'#0b0b0f'});re()};
 const vt=$('#veTira');if(vt)vt.onclick=()=>{salvarImg(e,null);re()}}
function festa(f){const o=document.createElement('div');o.className='cp-festa';const inf=INFO[f.antes];
 const txt={campeao:[`É CAMPEÃO!`,`O Studio Evolution Tech levanta o ${inf.taca}! Você subiu de divisão e ganhou o fundo vivo "${FUNDO_CODIGO[f.antes]}".`],fica:['2º lugar',`Ficou no ${inf.nome}. Nova temporada começa agora. Bora buscar o título.`],cai:['Rebaixado…',`Você terminou em ${f.pos}º e caiu de divisão. Os robôs estão rindo. Volta mais forte.`]}[f.res];
 o.innerHTML=`${f.res==='campeao'?medalhaGrande(f.antes):''}<h2>${txt[0]}</h2><p>${txt[1]}</p><button>Continuar</button>`;document.body.appendChild(o);
 if(f.res==='campeao'){confete(o.querySelector('h2'));try{falar('É campeão! '+txt[1])}catch{}}
 o.querySelector('button').onclick=()=>{o.remove();abrirCopa()}}


// ---------- prêmio: fundo vivo + código + aula de opacidade ----------
const CORFUNDO={mun:'#1a0d05',est:'#021208',reg:'#02121a',sd:'#03060c',sc:'#03060c',sb:'#03060c',bra:'#011a0c',con:'#000006',mw:'#000000'};
function codigoPremio(d){const inf=INFO[d],k=inf.cena==='ouro'?null:inf.cena;
 if(!k){return `<!-- Fundo vivo: ${FUNDO_CODIGO[d]} · prêmio do ${inf.nome} -->
<style>
  /* 1) OPACIDADE: 0 = invisível · 1 = forte. Mude o número e veja! */
  #fundo{position:fixed;inset:0;width:100%;height:100%;z-index:-1;opacity:0.55}
  body{margin:0;background:#000}
</style>
<canvas id="fundo"></canvas>
<script>
// 2) Este fundo usa a placa de vídeo (WebGL, "shader"). Cada pontinho da tela é calculado como ouro de verdade.
const COPA_OURO=${window.COPA_OURO.toString()};
COPA_OURO(document.getElementById('fundo'));
</script>`}
 return `<!-- Fundo vivo: ${FUNDO_CODIGO[d]} · prêmio do ${inf.nome} -->
<style>
  /* 1) OPACIDADE: 0 = invisível · 1 = forte. Mude o número e veja! */
  #fundo{position:fixed;inset:0;width:100%;height:100%;z-index:-1;opacity:0.4}
  /* 2) COR DE FUNDO da página, atrás do desenho */
  body{margin:0;background:${CORFUNDO[d]}}
</style>
<canvas id="fundo"></canvas>
<script>
// 3) O DESENHO: uma função que desenha um quadro (frame) da animação
const R=Math.random,TAU=Math.PI*2;
const desenhar=${(f=>/^function/.test(f)?f:'function '+f)(COPA_CENA[k].toString())};
// 4) O LOOP: chama o desenho 60 vezes por segundo (igual desenho animado)
const cv=document.getElementById('fundo'),x=cv.getContext('2d'),memoria={};
function tamanho(){cv.width=innerWidth;cv.height=innerHeight}tamanho();addEventListener('resize',tamanho);
function quadro(t){desenhar.call(memoria,x,cv.width,cv.height,t);requestAnimationFrame(quadro)}
requestAnimationFrame(quadro);
</script>`}
window.codigoPremio=codigoPremio;function abrirPremio(d){const inf=INFO[d],cod=codigoPremio(d);let o=document.createElement('div');o.className='cp-pr';
 o.innerHTML=`<div class="cp-prv"><canvas></canvas><div class="cp-prc"><small>PRÊMIO · ${inf.nome.toUpperCase()}</small><h3>${FUNDO_CODIGO[d]}</h3>
  <label>Opacidade <b id="prOv">0.40</b></label><input type="range" min="0" max="1" step="0.05" value="0.4" id="prOp">
  <p>👆 Arraste e veja a <b>opacidade</b> mudar. É uma linha só de CSS: <code>opacity: 0.4;</code> · 0 some · 1 fica forte.</p></div><button class="cp-prx" aria-label="Fechar">×</button></div>
  <div class="cp-prb"><div class="cp-prt"><b>📄 O código do seu prêmio</b><span><button id="prCp">📋 Copiar</button><button id="prUsa" class="gr">🧱 Usar no meu site</button></span></div>
  <ol><li><b>Opacidade:</b> o quanto o fundo aparece.</li><li><b>Cor de fundo:</b> a cor atrás do desenho.</li><li><b>O desenho:</b> uma função que pinta um quadro.</li><li><b>O loop:</b> repete o desenho 60× por segundo, como um desenho animado.</li></ol>
  <pre>${esc(cod)}</pre></div>`;
 document.body.appendChild(o);const cv=o.querySelector('canvas');requestAnimationFrame(()=>ligarFundo(cv,d===('sc')||d==='sb'?'sd':d));
 const op=o.querySelector('#prOp');op.oninput=()=>{cv.style.opacity=op.value;o.querySelector('#prOv').textContent=(+op.value).toFixed(2)};op.oninput();
 const fecha=()=>{cancelAnimationFrame(anim);o.remove();const c=$('#copa');if(c&&c.classList.contains('on'))ligarFundo(c.querySelector('.cp-bg'),C().div)};
 o.querySelector('.cp-prx').onclick=fecha;
 o.querySelector('#prCp').onclick=()=>{const t=cod.replace(/opacity:0\.\d+/,'opacity:'+op.value);try{navigator.clipboard.writeText(t);toast('Código copiado 📋')}catch{toast('Não consegui copiar')}};
 o.querySelector('#prUsa').onclick=()=>{const t=cod.replace(/opacity:0\.\d+/,'opacity:'+op.value);S.code=(S.code||'')+'\n\n'+t;salvar();toast('Fundo colocado no seu site! Veja na Oficina 🧱');fecha();fecharCopa();try{ir('ofc')}catch{}}}

// ---------- botão no topo ----------
function atualizarBotao(){const b=$('#bCopa');if(!b)return;const T=tabela(),p=T.findIndex(x=>x.eu)+1;b.querySelector('.dt').textContent=p+'º';b.classList.toggle('lider',p===1)}
function botao(){if($('#bCopa'))return;const ref=$('#bTema');if(!ref)return;const b=document.createElement('button');b.className='btn cp-btn';b.id='bCopa';b.setAttribute('aria-label','Copa');
 b.innerHTML=`<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M17 5h3v2a4 4 0 0 1-4 4M7 5H4v2a4 4 0 0 0 4 4"/></svg><span class="dt">–</span>`;
 ref.parentNode.insertBefore(b,ref);b.onclick=()=>abrirCopa();atualizarBotao()}

// ---------- estilos ----------
const css=`
.cp-btn{position:relative}.cp-btn .dt{position:absolute;top:-2px;right:-6px;background:linear-gradient(90deg,#fa7e1e,#d62976);color:#fff;font:900 9px/1 Inter,Arial;border-radius:9px;padding:3px 5px;border:2px solid var(--bg)}
.cp-btn{animation:cpPu 2.4s infinite}.cp-btn.lider .dt{background:linear-gradient(90deg,#3B82F6,#22D3EE)}@keyframes cpPu{50%{transform:scale(1.08)}}
#copa{position:fixed;inset:0;z-index:80;background:#05050a;color:#fff;display:none;overflow:hidden}#copa.on{display:block}
#copa .cp-bg{position:absolute;inset:0;width:100%;height:100%;opacity:.4}
#copa .cp-in{position:relative;height:100%;overflow-y:auto;max-width:520px;margin:0 auto;padding:calc(10px + env(safe-area-inset-top)) 14px calc(30px + env(safe-area-inset-bottom))}
.cp-top{display:flex;align-items:center;justify-content:space-between;font:900 11px Inter,Arial;letter-spacing:.24em;opacity:.9}.cp-x{background:none;border:0;color:#fff;font-size:30px;line-height:1;width:36px}
.cp-pos{background:var(--cc);color:#05050a;border-radius:8px;padding:4px 8px;letter-spacing:.05em}
.cp-capa{text-align:center;padding:6px 0 4px}.cp-capa small{display:block;font:900 10px Inter,Arial;letter-spacing:.2em;color:var(--cc);margin-top:4px}.cp-capa h2{font:900 28px/1.05 Inter,Arial;text-transform:uppercase;margin:6px 0 10px}
.cp-capa p{font-size:13px;opacity:.85;line-height:1.45}.cp-bar{height:6px;border-radius:9px;background:rgba(255,255,255,.12);overflow:hidden;margin:0 8px 8px}.cp-bar i{display:block;height:100%;background:var(--cc);border-radius:9px}
.cp-med{position:relative;width:170px;height:170px;margin:4px auto 0;perspective:900px}.cp-med .gira{position:absolute;inset:0;transform-style:preserve-3d;animation:cpGira 9s linear infinite}
@keyframes cpGira{from{transform:rotateX(6deg) rotateY(0)}to{transform:rotateX(6deg) rotateY(360deg)}}
.cp-med .gira>i{position:absolute;inset:0;clip-path:var(--c);-webkit-clip-path:var(--c);background:linear-gradient(90deg,var(--e1),var(--e2) 30%,var(--e3) 50%,var(--e2) 70%,var(--e1))}
.cp-med .face{position:absolute;inset:0;backface-visibility:hidden;-webkit-backface-visibility:hidden}.cp-med .face svg{width:100%;height:100%;display:block}.cp-med .fr{transform:translateZ(7px)}.cp-med .bk{transform:rotateY(180deg) translateZ(7px)}
.cp-abas{display:flex;gap:6px;margin:14px 0 10px;overflow-x:auto}.cp-abas button{flex:0 0 auto;white-space:nowrap;border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.05);color:#fff;border-radius:12px;padding:9px 10px;font:800 12.5px Inter,Arial}.cp-abas button.on{background:var(--cc);color:#05050a;border-color:transparent}
.cp-tab{border-radius:18px;overflow:hidden;border:1px solid rgba(255,255,255,.1);background:rgba(5,5,10,.6);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px)}
.cp-lin{display:grid;grid-template-columns:20px 46px 1fr 44px 40px;gap:8px;align-items:center;padding:8px 10px;border-bottom:1px solid rgba(255,255,255,.07);position:relative;cursor:pointer}.cp-lin:last-child{border:0}
.cp-lin .n{font:900 15px Inter,Arial;text-align:center}.cp-lin .em svg{width:46px;height:54px}.cp-lin .q b{font-size:14px}.cp-lin .pr{height:4px;background:rgba(255,255,255,.1);border-radius:9px;margin-top:5px;overflow:hidden}.cp-lin .pr i{display:block;height:100%;border-radius:9px}
.cp-lin .xp,.cp-lin .bg{font:900 15px Inter,Arial;text-align:center}.cp-lin small{display:block;font-size:8px;opacity:.6;letter-spacing:.1em}.cp-lin .bg{font-size:13px;opacity:.8}
.cp-lin.eu{background:linear-gradient(90deg,rgba(59,130,246,.25),rgba(34,211,238,.08))}.cp-lin.sobe::after,.cp-lin.cai::after{content:"";position:absolute;right:0;top:0;bottom:0;width:4px}.cp-lin.sobe::after{background:#22c55e}.cp-lin.cai::after{background:#ef4444}
.cp-msg{display:flex;gap:10px;align-items:flex-start;background:rgba(10,10,16,.75);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:10px;margin-bottom:8px}.cp-msg .av{width:46px;flex:0 0 46px}.cp-msg small{font:900 9.5px Inter,Arial;letter-spacing:.1em;color:#ff7a6b}.cp-msg p{font-size:14.5px;line-height:1.4;margin-top:3px}
.cp-vz{opacity:.75;font-size:14px;text-align:center;padding:14px 4px;line-height:1.5}
.cp-deg{display:flex;align-items:center;gap:12px;padding:11px 12px;border-radius:14px;background:rgba(10,10,16,.7);border:1px solid rgba(255,255,255,.07);margin-bottom:7px;opacity:.55}.cp-deg.at,.cp-deg.ok{opacity:1}.cp-deg.at{border-color:var(--dc);box-shadow:0 0 18px -6px var(--dc)}
.cp-deg span{width:28px;height:28px;border-radius:50%;display:grid;place-items:center;font:900 13px Inter,Arial;background:rgba(255,255,255,.08)}.cp-deg.at span{background:var(--dc);color:#05050a}.cp-deg b{display:block;font-size:14px}.cp-deg small{font-size:11px;opacity:.7}.cp-deg em{margin-left:auto;font:900 10px Inter,Arial;font-style:normal;letter-spacing:.08em;color:var(--dc)}
.cp-pre{padding:12px;border-radius:14px;background:rgba(10,10,16,.7);border:1px dashed rgba(255,255,255,.18);margin-bottom:7px}.cp-pre.tem{border:1px solid var(--cc)}.cp-pre b{display:block}.cp-pre small{opacity:.7;font-size:12px}.cp-pre em{display:block;font-style:normal;font:900 10px Inter,Arial;letter-spacing:.1em;margin-top:6px;color:var(--cc)}
.cp-leg{font-size:10.5px;opacity:.55;text-align:center;margin-top:12px;line-height:1.5}
.cp-aviso{position:fixed;left:10px;right:10px;top:calc(10px + env(safe-area-inset-top));z-index:90;max-width:500px;margin:0 auto;display:flex;gap:10px;align-items:center;background:#0b0b12;color:#fff;border:1px solid #ef4444;border-radius:18px;padding:10px 12px;box-shadow:0 12px 30px rgba(0,0,0,.5);transform:translateY(-140%);transition:transform .45s cubic-bezier(.2,1.2,.3,1)}.cp-aviso.on{transform:none}
.cp-aviso .cp-av{width:44px;flex:0 0 44px}.cp-aviso b{display:block;font-size:11px;letter-spacing:.06em;color:#ff7a6b}.cp-aviso span{font-size:14px;line-height:1.35}
.cp-festa{position:fixed;inset:0;z-index:95;background:radial-gradient(circle at 50% 35%,#2a1a4a,#05050a 70%);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:30px}.cp-festa h2{font:900 36px Inter,Arial;margin:14px 0 8px}.cp-festa p{opacity:.85;font-size:15px;line-height:1.45;max-width:340px}.cp-festa button{margin-top:22px;border:0;border-radius:14px;padding:13px 24px;font:900 15px Inter,Arial;background:linear-gradient(90deg,#3B82F6,#22D3EE);color:#05050a}
svg.mini{width:64px;height:76px;flex:0 0 64px}
.cp-pre.tem{cursor:pointer;transition:transform .15s}.cp-pre.tem:hover{transform:translateY(-2px)}.cp-pre.tem em{color:#fff;background:var(--cc);display:inline-block;padding:3px 8px;border-radius:6px;color:#05050a}
.cp-pr{position:fixed;inset:0;z-index:97;background:#05050a;color:#fff;display:flex;flex-direction:column;overflow:auto}
.cp-prv{position:relative;height:56vh;min-height:300px;flex:0 0 auto;overflow:hidden;border-bottom:1px solid rgba(255,255,255,.1)}.cp-prv canvas{position:absolute;inset:0;width:100%;height:100%}
.cp-prc{position:absolute;left:0;right:0;bottom:0;padding:18px;background:linear-gradient(transparent,rgba(0,0,0,.85));max-width:720px;margin:0 auto}
.cp-prc small{font:900 10.5px Inter,Arial;letter-spacing:.2em;color:#9ca3af}.cp-prc h3{font:900 26px Inter,Arial;margin:4px 0 10px;text-transform:uppercase}
.cp-prc label{display:flex;justify-content:space-between;font:800 13px Inter,Arial}.cp-prc input{width:100%;accent-color:#22D3EE;margin:6px 0}.cp-prc p{font-size:13px;opacity:.85;line-height:1.4}.cp-prc code{background:rgba(255,255,255,.12);padding:1px 6px;border-radius:5px}
.cp-prx{position:absolute;right:12px;top:calc(10px + env(safe-area-inset-top));width:40px;height:40px;border-radius:50%;border:0;background:rgba(0,0,0,.5);color:#fff;font-size:26px}
.cp-prb{max-width:900px;width:100%;margin:0 auto;padding:16px 14px 40px}.cp-prt{display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:10px}
.cp-prt button{border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.06);color:#fff;border-radius:10px;padding:9px 12px;font:800 13px Inter,Arial;margin-left:6px}.cp-prt button.gr{background:linear-gradient(90deg,#3B82F6,#22D3EE);color:#05050a;border:0}
.cp-prb ol{margin:0 0 12px 20px;font-size:14px;line-height:1.6;opacity:.9}
.cp-prb pre{background:#0d1117;border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:14px;font:12.5px/1.5 Menlo,Consolas,monospace;overflow:auto;max-height:50vh;white-space:pre-wrap;word-break:break-word;color:#c9d1d9}
@media(min-width:900px){
 #copa .cp-in{max-width:1180px;display:grid;grid-template-columns:400px 1fr;column-gap:48px;align-content:start;padding:22px 32px 40px}
 #copa .cp-top{grid-column:1 / -1;margin-bottom:10px}
 #copa .cp-capa{grid-column:1;grid-row:2 / span 3;position:sticky;top:20px;align-self:start;background:rgba(5,5,10,.55);border:1px solid rgba(255,255,255,.08);border-radius:24px;padding:24px 20px;backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px)}
 #copa .cp-med{width:240px;height:240px}
 #copa .cp-capa h2{font-size:32px}
 #copa .cp-abas{grid-column:2;margin-top:0}#copa .cp-corpo{grid-column:2}#copa .cp-leg{grid-column:2;text-align:left}
 #copa .cp-abas button{flex:1;padding:12px}
 #copa .cp-pre{padding:16px;margin-bottom:10px}
 #copa .cp-corpo>.cp-pre{display:inline-block;width:calc(50% - 6px);vertical-align:top;margin-right:8px}#copa .cp-corpo>.cp-pre:nth-of-type(2n){margin-right:0}
 #copa .cp-bg{opacity:.3}
}

.modal.on{z-index:96}
`;
const st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
window.abrirCopa=abrirCopa;
// início
{const c=C();if(!c.zerou){c.zerou=1;c.ini=hoje();c.iniTs=Date.now();c.xp0=xpTotal();c.hist={};salvar()}}C();registrar();botao();setTimeout(provocar,1500);
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible'){registrar();atualizarBotao()}});
})();
