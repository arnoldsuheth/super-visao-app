// Funciona no domínio próprio (/) e no GitHub Pages (/super-visao-app/): tudo relativo ao escopo.
const BASE=self.registration.scope;
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
// 26/11/2026: aviso na hora de cada tarefa chega cifrado; a chave fica só neste aparelho (IndexedDB super-visao-push)
const un64=s=>Uint8Array.from(atob(s.replace(/-/g,'+').replace(/_/g,'/')),c=>c.charCodeAt(0));
async function abrir(p){const db=await new Promise((ok,no)=>{const r=indexedDB.open('super-visao-push',1);r.onupgradeneeded=()=>r.result.createObjectStore('keys');r.onsuccess=()=>ok(r.result);r.onerror=()=>no(r.error)});const raw=await new Promise((ok,no)=>{const r=db.transaction('keys','readonly').objectStore('keys').get('payload');r.onsuccess=()=>ok(r.result);r.onerror=()=>no(r.error)});db.close();const k=await crypto.subtle.importKey('raw',un64(raw),'AES-GCM',false,['decrypt']);return JSON.parse(new TextDecoder().decode(await crypto.subtle.decrypt({name:'AES-GCM',iv:un64(p.iv)},k,un64(p.data))))}
self.addEventListener('push',event=>event.waitUntil((async()=>{let data={title:'#1 SUPER VISÃO',body:'Você tem alertas. Abra o painel para conferir.',url:BASE};let p={};try{p=event.data.json()}catch{}
 if(p&&p.encrypted){data.body='Está na hora de uma tarefa. Toque para ver.';try{const m=await abrir(p.encrypted);data.body=(m.hora?m.hora+' · ':'')+String(m.t||'Tarefa').slice(0,240)}catch{}data.tag=p.tag}else Object.assign(data,p);
 const icon=new URL('super-visao-icon-192-v3.png',BASE).href;await self.registration.showNotification(data.title,{body:data.body,icon,badge:icon,tag:data.tag||'super-visao',data:{url:data.url||BASE}})})()));
self.addEventListener('notificationclick',event=>{event.notification.close();let url=new URL(event.notification.data?.url||BASE,BASE);if(!url.href.startsWith(BASE))url=new URL(BASE);event.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(async clients=>{for(const client of clients)if(client.url.startsWith(BASE)){await client.navigate(url.href);return client.focus()}return self.clients.openWindow(url.href)}))});
