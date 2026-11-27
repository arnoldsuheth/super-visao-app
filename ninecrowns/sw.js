/* gerado pelo build.py - não edite */
const V = 'ads-nc-1';
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('ads-nc-') && k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  const r = e.request, u = new URL(r.url);
  if(r.method !== 'GET' || u.origin !== location.origin) return;
  if(r.mode === 'navigate' || u.pathname.endsWith('/assets.json') || u.pathname.endsWith('/sw.js')){   // página e lista: rede primeiro, cache se estiver sem internet
    /* 27/11/2026 (Arnold): com internet fraca o jogo demorava ou abria pela metade. Agora a página abre na hora pela cópia salva no celular
       e a versão nova é baixada por trás (entra na próxima vez que abrir). Sem cópia salva, usa a internet */
    const chave = u.origin + u.pathname;
    const rede = fetch(r).then(x => { if(x.ok && r.mode === 'navigate'){ const c = x.clone(); caches.open(V).then(h => h.put(chave, c)); } return x; });
    if(r.mode !== 'navigate'){ e.respondWith(rede.catch(() => caches.match(r, {ignoreSearch:true}))); return; }
    e.respondWith(caches.match(chave).then(c => { if(c){ e.waitUntil(rede.catch(() => {})); return c; } return rede.catch(() => caches.match(r, {ignoreSearch:true}).then(x => x || caches.match('./'))); }));
    return;
  }
  e.respondWith(caches.match(r).then(x => x || fetch(r).then(y => { if(y.ok){ const c = y.clone(); caches.open(V).then(h => h.put(r, c)); } return y; })));   // assets: cache primeiro
});
