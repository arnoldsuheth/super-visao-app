/* gerado pelo build.py - não edite */
const V = 'ads-nc-1';
const VOO = new Map();
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('ads-nc-') && k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  const r = e.request, u = new URL(r.url);
  if(r.method !== 'GET' || u.origin !== location.origin) return;
  if(r.mode === 'navigate' || u.pathname.endsWith('/assets.json') || u.pathname.endsWith('/sw.js')){   // página e lista: rede primeiro, cache se estiver sem internet
    /* 27/11/2026 (Arnold): com internet fraca o jogo demorava ou abria pela metade. Agora a página abre na hora pela cópia salva no celular
       e a versão nova é baixada por trás (entra na próxima vez que abrir). Sem cópia salva, usa a internet */
    const chave = u.origin + u.pathname;
    if(r.mode !== 'navigate'){ e.respondWith(fetch(r).catch(() => caches.match(r, {ignoreSearch:true}))); return; }
    /* a página de fora e o jogo dentro da moldura pedem o mesmo arquivo: baixa uma vez só e divide (internet fraca) */
    let p = VOO.get(chave);
    if(!p){ p = fetch(chave, {credentials:'same-origin'}).then(x => { if(x.ok){ const c = x.clone(); caches.open(V).then(h => h.put(chave, c)); } return x; }); VOO.set(chave, p); p.catch(() => {}).then(() => setTimeout(() => VOO.delete(chave), 15000)); }
    const rede = p.then(x => x.clone());
    /* 27/11/2026 (Arnold): a versão nova ficava presa até abrir o jogo duas vezes. Agora, se a cópia baixada por trás for diferente,
       avisa o jogo, que recarrega sozinho quando não está no meio de uma fase */
    const avisa = (velha, nova) => Promise.all([velha.text(), nova.text()]).then(([a, b]) => { if(a.length && b.length && a !== b) return self.clients.matchAll({type:'window'}).then(L => L.forEach(cl => cl.postMessage({nc:'nova'}))); }).catch(() => {});
    /* 28/11/2026 (Arnold: "fechar e abrir 2x toda vez, não"): com internet boa a versão nova abre direto (espera até 2,5 s pela rede);
       com internet fraca abre a cópia salva na hora e, quando a nova chegar, o jogo recarrega sozinho fora da fase */
    e.respondWith(caches.match(chave).then(c => { if(c){ const velha = c.clone(); let usouCopia = false;
      const espera = new Promise(r => setTimeout(() => { usouCopia = true; r(c); }, 2500));
      e.waitUntil(rede.then(x => (usouCopia && x.ok) ? avisa(velha, x.clone()) : 0).catch(() => {}));
      return Promise.race([rede.then(x => x.ok ? x : espera).catch(() => (usouCopia = true, c)), espera]); } return rede.catch(() => caches.match(r, {ignoreSearch:true}).then(x => x || caches.match('./'))); }));
    return;
  }
  e.respondWith(caches.match(r).then(x => x || fetch(r).then(y => { if(y.ok){ const c = y.clone(); caches.open(V).then(h => h.put(r, c)); } return y; })));   // assets: cache primeiro
});
