// ===== NUVEM DO INSIGHT =====
// Salva o progresso (missões, XP, Copa, logos) no repositório PRIVADO super-visao-dados,
// usando a MESMA chave do SUPER VISÃO (cofre.json criptografado com a sua senha).
// A senha e a chave nunca saem do seu aparelho.
(function(){
const OWNER='arnoldsuheth',REPO='super-visao-dados',ARQ='insight.json',ARQ_LOGOS='insight-logos.json';
const K_TOKEN='insight_nuvem_v1',K_SV='super_visao_sessao_v1';
const te=new TextEncoder(),td=new TextDecoder();
const unb64=s=>Uint8Array.from(atob(s),c=>c.charCodeAt(0));
const b64u=str=>{const a=te.encode(str);let s='';for(let i=0;i<a.length;i+=0x8000)s+=String.fromCharCode(...a.subarray(i,i+0x8000));return btoa(s)};
const deb64u=s=>td.decode(unb64(s.replace(/\n/g,'')));
const lsg=k=>{try{return JSON.parse(localStorage.getItem(k)||'null')}catch{return null}};
function token(){const a=lsg(K_TOKEN);if(a&&a.token)return a.token;const b=lsg(K_SV);return b&&b.token||null}
async function gh(path,opts={}){const t=token();const r=await fetch('https://api.github.com'+path,{...opts,cache:'no-store',headers:{Accept:'application/vnd.github+json','X-GitHub-Api-Version':'2022-11-28',Authorization:'Bearer '+t,...(opts.body?{'Content-Type':'application/json'}:{})}});if(!r.ok){const e=Error('GitHub '+r.status);e.status=r.status;throw e}return r.json()}
const sha={};
async function ler(arq){try{const j=await gh(`/repos/${OWNER}/${REPO}/contents/${arq}?t=${Date.now()}`);sha[arq]=j.sha;
  if(j.content)return JSON.parse(deb64u(j.content));
  const r=await fetch(j.download_url+'?t='+Date.now(),{cache:'no-store'});return await r.json()}catch(e){if(e.status===404){sha[arq]=undefined;return null}throw e}}
async function gravar(arq,obj,msg){const body=()=>JSON.stringify({message:msg,content:b64u(JSON.stringify(obj)),sha:sha[arq]});
 try{const j=await gh(`/repos/${OWNER}/${REPO}/contents/${arq}`,{method:'PUT',body:body()});sha[arq]=j.content.sha}
 catch(e){if(e.status===409||e.status===422){await ler(arq);const j=await gh(`/repos/${OWNER}/${REPO}/contents/${arq}`,{method:'PUT',body:body()});sha[arq]=j.content.sha}else throw e}}
// junta dois estados sem perder nada: objetos se somam, o resto vale o mais novo
function juntar(a,b,bNovo){if(a&&b&&typeof a==='object'&&typeof b==='object'&&!Array.isArray(a)&&!Array.isArray(b)){const o={...a};for(const k in b)o[k]=k in a?juntar(a[k],b[k],bNovo):b[k];return o}
 if(Array.isArray(a)&&Array.isArray(b)){const chave=x=>x&&typeof x==='object'?(x.id||x.t||JSON.stringify(x)):JSON.stringify(x);const m=new Map();(bNovo?[...a,...b]:[...b,...a]).forEach(x=>m.set(chave(x),x));return [...m.values()]}
 if(typeof a==='number'&&typeof b==='number')return Math.max(a,b);
 if(b===undefined)return a;if(a===undefined)return b;return bNovo?b:a}
function juntarS(loc,rem){const rNovo=(rem._t||0)>(loc._t||0);const m=juntar(loc,rem,rNovo);
 const vazio=c=>!c||c.replace(/<!--[\s\S]*?-->/g,'').trim().length<5;m.code=vazio(rem.code)?loc.code:vazio(loc.code)?rem.code:(rNovo?rem.code:loc.code);m.tema=rNovo?rem.tema:loc.tema;m.copa=rNovo?(rem.copa||loc.copa):(loc.copa||rem.copa);
 if(m.copa&&loc.copa&&rem.copa){m.copa.tit=[...new Set([...(loc.copa.tit||[]),...(rem.copa.tit||[])])];m.copa.fundos=[...new Set([...(loc.copa.fundos||[]),...(rem.copa.fundos||[])])]}
 m._t=Math.max(loc._t||0,rem._t||0);return m}
let estado='off',ocupado=false,timer=0,timerL=0;
function chip(){const c=document.getElementById('nvChip');if(!c)return;const tx={off:'☁️ Conectar à nuvem',ok:'☁️ Sincronizado',sync:'☁️ Sincronizando…',erro:'⚠️ Nuvem com erro'}[estado];c.textContent=tx;c.classList.toggle('ok',estado==='ok')}
function redesenhar(){try{localStorage.setItem('insight_v1',JSON.stringify(S))}catch{};try{aplicarTema()}catch{};try{montarStories();montarFeed()}catch{};try{window.montarSide&&montarSide()}catch{};try{ir(telaAtual,telaAtual==='pf'?'me':undefined)}catch{}}
async function puxar(){if(!token())return;estado='sync';chip();
 try{const rem=await ler(ARQ);if(rem){const m=juntarS(S,rem);const antes=JSON.stringify(S);S=m;if(JSON.stringify(S)!==antes)redesenhar()}
  const rl=await ler(ARQ_LOGOS);if(rl&&rl.img){let loc={};try{loc=JSON.parse(localStorage.getItem('copa_img')||'{}')}catch{}const tl=+(localStorage.getItem('copa_img_t')||0);
   const m=(rl.t||0)>tl?{...loc,...rl.img}:{...rl.img,...loc};try{localStorage.setItem('copa_img',JSON.stringify(m));localStorage.setItem('copa_img_t',Math.max(tl,rl.t||0))}catch{};window.copaRelerImgs&&copaRelerImgs()}
  estado='ok';await empurrar(true)}catch(e){estado=e.status===401?'off':'erro';if(e.status===401){localStorage.removeItem(K_TOKEN)}}chip()}
async function empurrar(silencio){if(!token()||ocupado)return;ocupado=true;if(!silencio){estado='sync';chip()}
 try{const rem=await ler(ARQ);if(rem){const antes=JSON.stringify(S);S=juntarS(S,rem);if(JSON.stringify(S)!==antes){try{localStorage.setItem('insight_v1',JSON.stringify(S))}catch{};if(typeof telaAtual!=='undefined'&&telaAtual==='ofc'){try{ir('ofc')}catch{}}}}await gravar(ARQ,S,'INSIGHT: progresso');estado='ok'}catch(e){estado='erro'}ocupado=false;chip()}
async function empurrarLogos(){if(!token())return;try{let im={};try{im=JSON.parse(localStorage.getItem('copa_img')||'{}')}catch{}await ler(ARQ_LOGOS).catch(()=>null);await gravar(ARQ_LOGOS,{t:+(localStorage.getItem('copa_img_t')||Date.now()),img:im},'INSIGHT: logos da Copa')}catch{}}
window.aoSalvar=()=>{if(!token())return;clearTimeout(timer);timer=setTimeout(()=>empurrar(),4000)};
window.aoSalvarLogos=()=>{if(!token())return;clearTimeout(timerL);timerL=setTimeout(empurrarLogos,1500)};
document.addEventListener('visibilitychange',()=>{if(!token())return;if(document.visibilityState==='hidden'){clearTimeout(timer);empurrar(true)}else puxar()});
// ---- conectar com a senha do SUPER VISÃO ----
async function conectar(){const m=$('#modal'),sh=m.querySelector('.sheet');
 sh.innerHTML=`<h4>☁️ Salvar na nuvem</h4><p style="font-size:14px;color:var(--mu);margin:4px 0 12px">Use a <b>mesma senha do SUPER VISÃO</b>. Seu progresso, missões, Copa e logos ficam iguais no celular e no computador.</p>
 <input id="nvPw" type="password" placeholder="Senha do SUPER VISÃO" autocomplete="current-password" style="width:100%;font-size:16px;padding:12px;border-radius:12px;border:1.5px solid var(--ln);background:var(--bg);color:var(--tx)">
 <p id="nvErr" style="color:#e0473a;font-size:13px;min-height:18px;margin-top:6px"></p><div class="row"><button id="nvCa">Agora não</button><button class="gr" id="nvOk">Conectar</button></div>`;
 m.classList.add('on');$('#nvPw').focus();$('#nvCa').onclick=()=>m.classList.remove('on');
 const ir2=async()=>{const pw=$('#nvPw').value;if(!pw)return;$('#nvOk').textContent='Abrindo…';
  try{let cf=null;try{const r=await fetch('../cofre.json?t='+Date.now(),{cache:'no-store'});if(r.ok)cf=await r.json()}catch{}
   if(!cf)cf=lsg('super_visao_cofre_v1');if(!cf)throw Error('sem cofre');
   const base=await crypto.subtle.importKey('raw',te.encode(pw),'PBKDF2',false,['deriveKey']);
   const k=await crypto.subtle.deriveKey({name:'PBKDF2',salt:unb64(cf.salt),iterations:cf.iter||250000,hash:'SHA-256'},base,{name:'AES-GCM',length:256},false,['decrypt']);
   const pt=await crypto.subtle.decrypt({name:'AES-GCM',iv:unb64(cf.box.iv)},k,unb64(cf.box.ct));const {token:t}=JSON.parse(td.decode(pt));
   localStorage.setItem(K_TOKEN,JSON.stringify({token:t}));m.classList.remove('on');toast('Conectado à nuvem ☁️');await puxar();await empurrarLogos()}
  catch(e){$('#nvOk').textContent='Conectar';$('#nvErr').textContent=e.message==='sem cofre'?'Não achei o cofre do SUPER VISÃO.':'Senha incorreta. Tente de novo.'}};
 $('#nvOk').onclick=ir2;$('#nvPw').onkeydown=e=>{if(e.key==='Enter')ir2()}}
// ---- botão de status (perfil e coluna do computador) ----
const st=document.createElement('style');st.textContent=`#nvChip{display:block;margin:8px 16px 0;width:calc(100% - 32px);border:1.5px dashed var(--ln);background:var(--chip);color:var(--tx);border-radius:12px;padding:10px;font:800 13.5px inherit;font-family:inherit;cursor:pointer}#nvChip.ok{border-style:solid;opacity:.8}`;document.head.appendChild(st);
function porChip(){if(document.getElementById('nvChip'))return;const alvo=document.getElementById('pfRetro');if(!alvo)return;const b=document.createElement('button');b.id='nvChip';b.onclick=()=>token()&&estado!=='erro'?puxar().then(()=>toast(estado==='ok'?'Tudo sincronizado ☁️':'Não consegui sincronizar')):conectar();alvo.after(b);chip()}
new MutationObserver(porChip).observe(document.body,{childList:true,subtree:true});
window.conectarNuvem=conectar;
// começa: se o SUPER VISÃO já está aberto neste aparelho, usa a mesma chave sem pedir nada
if(token())puxar();else setTimeout(()=>{if(!lsg('insight_nuvem_aviso')){localStorage.setItem('insight_nuvem_aviso','1');conectar()}},2500);
})();
