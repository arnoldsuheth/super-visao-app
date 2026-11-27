/* gerado pelo build.py - não edite */
const V = 'ads-nc-1';
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('ads-') && k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  const r = e.request, u = new URL(r.url);
  if(r.method !== 'GET' || u.origin !== location.origin) return;
  if(r.mode === 'navigate' || u.pathname.endsWith('/assets.json') || u.pathname.endsWith('/sw.js')){   // página e lista: rede primeiro, cache se estiver sem internet
    /* 27/11/2026 (Arnold): com internet fraca a página ficava esperando a rede. Agora espera no máximo 3 s; depois abre a cópia salva (offline) e atualiza por trás */
    const rede = fetch(r).then(x => { if(x.ok && r.mode === 'navigate'){ const c = x.clone(); caches.open(V).then(h => h.put(new Request(u.origin + u.pathname), c)); } return x; });
    const salvo = () => caches.match(r, {ignoreSearch:true}).then(x => x || caches.match(u.origin + u.pathname, {ignoreSearch:true})).then(x => x || caches.match('./'));
    e.respondWith(new Promise(ok => { let feito = false; const t = setTimeout(() => salvo().then(x => { if(x && !feito){ feito = true; ok(x); } }), 3000);
      rede.then(x => { if(!feito){ feito = true; clearTimeout(t); ok(x); } }).catch(() => salvo().then(x => { if(!feito){ feito = true; clearTimeout(t); ok(x || Response.error()); } })); }));
    return;
  }
  e.respondWith(caches.match(r).then(x => x || fetch(r).then(y => { if(y.ok){ const c = y.clone(); caches.open(V).then(h => h.put(r, c)); } return y; })));   // assets: cache primeiro
});
