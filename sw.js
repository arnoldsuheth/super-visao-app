// Funciona no domínio próprio (/) e no GitHub Pages (/super-visao-app/): tudo relativo ao escopo.
const BASE=self.registration.scope;
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
self.addEventListener('push',event=>{let data={title:'#1 SUPER VISÃO',body:'Você tem alertas. Abra o painel para conferir.',url:BASE};try{Object.assign(data,event.data.json())}catch{}const icon=new URL('super-visao-icon-192-v2.png',BASE).href;event.waitUntil(self.registration.showNotification(data.title,{body:data.body,icon,badge:icon,tag:data.tag||'super-visao',data:{url:data.url||BASE}}))});
self.addEventListener('notificationclick',event=>{event.notification.close();let url=new URL(event.notification.data?.url||BASE,BASE);if(!url.href.startsWith(BASE))url=new URL(BASE);event.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(async clients=>{for(const client of clients)if(client.url.startsWith(BASE)){await client.navigate(url.href);return client.focus()}return self.clients.openWindow(url.href)}))});
