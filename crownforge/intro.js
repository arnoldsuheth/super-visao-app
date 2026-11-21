/* Crown Forge Academy · abertura animada + tela de desbloqueio com a forja viva */
(function(){
const $=id=>document.getElementById(id);
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
const intro=$('intro'),lock=$('lock');
if(!intro||!lock)return;
const done=()=>{document.documentElement.classList.remove('locked')};
if(!window.THREE||!window.CFM){intro.remove();lock.remove();done();return}
const T=THREE;if(T.ColorManagement)T.ColorManagement.legacyMode=false;
let seen=false;try{seen=localStorage.getItem('cfaIntro')==='1'}catch(e){}
const ease={out:t=>1-Math.pow(1-t,3),inOut:t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,back:t=>{const c=1.70158,c3=c+1;return 1+c3*Math.pow(t-1,3)+c*Math.pow(t-1,2)}};
const cl=(v,a,b)=>Math.max(a,Math.min(b,v)),seg=(t,a,b)=>cl((t-a)/(b-a),0,1);
const COLORS=[0xff4d6d,0xff8a4c,0xffd76a,0x57e389,0x3ad8ff,0x1b6cff,0xb48cff,0xff7ad9,0xffffff];
function renderer(host){const r=new T.WebGLRenderer({antialias:true,alpha:false});r.setPixelRatio(Math.min(2,devicePixelRatio||1));r.outputEncoding=T.sRGBEncoding;r.toneMapping=T.ACESFilmicToneMapping;host.appendChild(r.domElement);return r}
function fit(r,cam,host){const w=host.clientWidth||innerWidth,h=host.clientHeight||innerHeight;r.setSize(w,h,false);cam.aspect=w/h;cam.fov=w/h<.8?62:42;cam.updateProjectionMatrix()}
function env(r){const c=document.createElement('canvas');c.width=64;c.height=256;const g=c.getContext('2d'),gr=g.createLinearGradient(0,0,0,256);gr.addColorStop(0,'#fff');gr.addColorStop(.35,'#d8dde3');gr.addColorStop(.55,'#4a525c');gr.addColorStop(1,'#020a12');g.fillStyle=gr;g.fillRect(0,0,64,256);
 const s=new T.Scene();s.add(new T.Mesh(new T.SphereGeometry(10,32,16),new T.MeshBasicMaterial({map:new T.CanvasTexture(c),side:T.BackSide})));return new T.PMREMGenerator(r).fromScene(s).texture}
function stars(n,r){const p=[];for(let i=0;i<n;i++){const a=Math.random()*Math.PI*2,b=Math.acos(Math.random()*2-1);p.push(r*Math.sin(b)*Math.cos(a),Math.abs(r*Math.cos(b))*.9+2,r*Math.sin(b)*Math.sin(a)-r*.3)}
 const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(p,3));return new T.Points(g,new T.PointsMaterial({color:0xdff6ff,size:.09,sizeAttenuation:true}))}

/* ================= ABERTURA ================= */
function playIntro(){
 document.documentElement.classList.add('locked');intro.hidden=false;lock.hidden=true;
 const host=$('in3d'),ren=renderer(host),sc=new T.Scene(),cam=new T.PerspectiveCamera(42,1,.1,200);
 sc.background=new T.Color(0x040b14);sc.fog=new T.Fog(0x040b14,14,40);sc.environment=env(ren);
 sc.add(new T.HemisphereLight(0xbfe9ff,0x0a1420,.6));const key=new T.DirectionalLight(0xffffff,1.6);key.position.set(3,6,5);sc.add(key);
 sc.add(stars(700,35));
 const moon=new T.Mesh(new T.CircleGeometry(2.6,48),new T.MeshBasicMaterial({color:0xdff6ff}));moon.position.set(0,7.5,-18);sc.add(moon);
 const halo=new T.Mesh(new T.CircleGeometry(4.2,48),new T.MeshBasicMaterial({color:0x3ad8ff,transparent:true,opacity:.18}));halo.position.set(0,7.5,-18.1);sc.add(halo);
 const ecl=new T.Mesh(new T.CircleGeometry(2.62,48),new T.MeshBasicMaterial({color:0x040b14}));ecl.position.set(-7,7.5,-17.9);sc.add(ecl);
 const ground=new T.Mesh(new T.CircleGeometry(9,64),new T.MeshStandardMaterial({color:0x0d2236,roughness:1}));ground.rotation.x=-Math.PI/2;sc.add(ground);
 const crown=CFM.crown();crown.scale.setScalar(.75);sc.add(crown);
 const glow=new T.PointLight(0xfff1c0,2.5,8);sc.add(glow);
 const beam=new T.Mesh(new T.CylinderGeometry(.5,1.4,14,24,1,true),new T.MeshBasicMaterial({color:0x9fe9ff,transparent:true,opacity:0,blending:T.AdditiveBlending,depthWrite:false,side:T.DoubleSide}));sc.add(beam);
 const N=9,pos=[];for(let i=0;i<N;i++){const x=(i-4)*1.05;pos.push(new T.Vector3(x,0,-.6-.12*x*x))}
 const shards=COLORS.map(c=>{const m=new T.Mesh(new T.OctahedronGeometry(.16,0),new T.MeshStandardMaterial({color:c,emissive:c,emissiveIntensity:.9,metalness:.2,roughness:.2,flatShading:true}));m.visible=false;sc.add(m);return m});
 const mkKing=c=>{const g=new T.Group(),robe=new T.MeshStandardMaterial({color:c,roughness:.6}),skin=new T.MeshStandardMaterial({color:0xf3c29b,roughness:.6});
  g.add(new T.Mesh(new T.ConeGeometry(.36,.9,18),robe));g.children[0].position.y=.45;const h=new T.Mesh(new T.SphereGeometry(.24,16,12),skin);h.position.y=1.05;g.add(h);
  const b=new T.Mesh(new T.ConeGeometry(.16,.3,12),new T.MeshStandardMaterial({color:0xeeeeee,roughness:.8}));b.position.set(0,.88,.12);b.rotation.x=Math.PI+.25;g.add(b);
  const cr=CFM.crown(true);cr.scale.setScalar(.2);cr.position.y=1.25;cr.visible=false;g.add(cr);g.userData.cr=cr;g.scale.setScalar(.001);sc.add(g);return g};
 const kings=COLORS.map((c,i)=>{const k=mkKing(new T.Color(c).lerp(new T.Color(0x334455),.35));k.position.copy(pos[i]);return k});
 const base=CFM.monster();
 const mons=COLORS.map((c,i)=>{const m=base.clone(true),tint=new T.Color(c).lerp(new T.Color(0xffffff),.45);m.traverse(o=>{if(o.isMesh&&o.material&&o.material.vertexColors){o.material=o.material.clone();o.material.color=tint}});
  m.scale.setScalar(.001);m.position.copy(pos[i]);m.rotation.y=-pos[i].x*.12;m.visible=false;sc.add(m);return m});
 const puffs=[];
 const cap=$('inCap'),flash=$('inFlash'),logo=$('inLogo');
 const lines=[[.3,'Nove reinos viviam unidos por uma única Coroa Ancestral.'],[3.1,'Num eclipse, ela se partiu em nove.'],[6.2,'Cada coroa transformou o seu rei em monstro.'],[9.6,'Agora a forja precisa de um artista.']];let li=-1;
 const ro=new ResizeObserver(()=>fit(ren,cam,host));ro.observe(host);fit(ren,cam,host);
 let t0=performance.now(),alive=true,flashed=false,logoOn=false;
 function frame(now){if(!alive)return;const t=(now-t0)/1000;
  for(let i=lines.length-1;i>=0;i--)if(t>=lines[i][0]){if(li!==i){li=i;cap.classList.remove('on');setTimeout(()=>{cap.textContent=lines[i][1];cap.classList.add('on')},180)}break}
  // câmera
  const far=cam.aspect<.8?1.75:cam.aspect<1.2?1.3:1,cz=(7.2+seg(t,9.2,12)*3)*far,cy=(1.9+seg(t,9.2,12)*2.2)*(far>1?1.25:1);cam.position.set(Math.sin(t*.15)*.4,cy,cz);cam.lookAt(0,1.1+seg(t,0,3)*.2,0);
  // eclipse
  const e=seg(t,2.6,4.6);ecl.position.x=-7+7*ease.inOut(e);halo.material.opacity=.18*(1-e*.7);
  // coroa desce
  const d=ease.out(seg(t,0,2.8));crown.position.set(0,9-7.2*d+Math.sin(t*2)*.05,0);crown.rotation.y=t*.9;crown.rotation.z=Math.sin(t*1.3)*.06;glow.position.copy(crown.position).y+=.6;
  beam.position.set(0,crown.position.y+7,0);beam.material.opacity=.16*seg(t,.2,1.2)*(1-seg(t,3.6,4.6));
  if(t>4.55&&!flashed){flashed=true;crown.visible=false;glow.intensity=0;flash.classList.add('on');setTimeout(()=>flash.classList.remove('on'),120);shards.forEach(s=>{s.visible=true;s.position.copy(crown.position)})}
  if(t<4.55)crown.scale.setScalar(.75*(1+.04*Math.sin(t*24)*seg(t,4,4.55)));
  // fragmentos voam para os reis
  shards.forEach((s,i)=>{if(!s.visible)return;const k=seg(t,4.6,5.9),a=ease.inOut(k),from=V0,to=pos[i].clone().setY(1.3);s.position.lerpVectors(from,to,a);s.position.y+=Math.sin(a*Math.PI)*1.6;s.rotation.set(t*5+i,t*4,0);if(k>=1){s.visible=false;kings[i].userData.cr.visible=true}});
  // reis aparecem
  kings.forEach((k,i)=>{const a=seg(t,4.6+i*.04,5.2+i*.04);if(k.visible)k.scale.setScalar(Math.max(.001,ease.back(a)));k.rotation.y=Math.sin(t+i)*.15});
  // reis viram monstros
  mons.forEach((m,i)=>{const st=7+i*.14;if(t>=st&&!m.visible){m.visible=true;kings[i].visible=false;for(let p=0;p<14;p++){const q=new T.Mesh(new T.IcosahedronGeometry(.07,0),new T.MeshBasicMaterial({color:0xb48cff,transparent:true,blending:T.AdditiveBlending,depthWrite:false}));q.position.copy(pos[i]).setY(.6+Math.random()*.6);q.userData.v=new T.Vector3((Math.random()-.5)*.06,.03+Math.random()*.05,(Math.random()-.5)*.06);sc.add(q);puffs.push(q)}}
   if(m.visible){const a=seg(t,st,st+.6);m.scale.setScalar(Math.max(.001,.5*ease.back(a)));m.position.y=Math.abs(Math.sin((t-st)*3))*.05*(1-a)}});
  puffs.forEach(q=>{q.position.add(q.userData.v);q.material.opacity=Math.max(0,q.material.opacity-.012)});
  // final: escurece e a logo ressurge
  host.style.opacity=String(1-seg(t,11,12.2));
  if(t>11.6&&!logoOn){logoOn=true;logo.classList.add('on')}
  if(t>15.2){finish();return}
  ren.render(sc,cam);requestAnimationFrame(frame)}
 const V0=new T.Vector3(0,1.8,0);
 function finish(){if(!alive)return;alive=false;try{localStorage.setItem('cfaIntro','1')}catch(e){}ro.disconnect();
  showLock();intro.classList.add('out');setTimeout(()=>{intro.hidden=true;intro.classList.remove('out');logo.classList.remove('on');cap.classList.remove('on');ren.dispose();host.innerHTML='';host.style.opacity='1'},650)}
 $('inSkip').onclick=finish;
 requestAnimationFrame(frame)}

/* ================= TELA DE DESBLOQUEIO: a forja viva ================= */
let lockAlive=false;
function showLock(){
 document.documentElement.classList.add('locked');lock.hidden=false;lock.style.transform='';lock.classList.remove('gone');lockAlive=true;
 const host=$('lk3d'),ren=renderer(host),sc=new T.Scene(),cam=new T.PerspectiveCamera(42,1,.1,100);
 sc.background=new T.Color(0x05101b);sc.fog=new T.Fog(0x05101b,6,16);sc.environment=env(ren);ren.shadowMap.enabled=true;ren.shadowMap.type=T.PCFSoftShadowMap;
 sc.add(new T.HemisphereLight(0x9fdcff,0x0a1420,.35));
 const key=new T.DirectionalLight(0xbfe9ff,1);key.position.set(-2,5,4);key.castShadow=true;key.shadow.mapSize.set(1024,1024);Object.assign(key.shadow.camera,{left:-3,right:3,top:3,bottom:-3});sc.add(key);
 const forge=new T.PointLight(0xff8a2b,2.4,7);forge.position.set(-.9,1.1,-1.8);sc.add(forge);
 const hit=new T.PointLight(0x7fe8ff,0,3);sc.add(hit);
 // chão e parede da forja
 const floor=new T.Mesh(new T.CircleGeometry(8,48),new T.MeshStandardMaterial({color:0x14283b,roughness:.95}));floor.rotation.x=-Math.PI/2;floor.receiveShadow=true;sc.add(floor);
 const wc=document.createElement('canvas');wc.width=wc.height=256;const wg=wc.getContext('2d'),rg=wg.createRadialGradient(128,150,10,128,150,140);rg.addColorStop(0,'#ff9a3c');rg.addColorStop(.25,'#7a2f12');rg.addColorStop(.6,'#1a1424');rg.addColorStop(1,'#05101b');wg.fillStyle=rg;wg.fillRect(0,0,256,256);
 const wall=new T.Mesh(new T.PlaneGeometry(18,10),new T.MeshBasicMaterial({map:new T.CanvasTexture(wc)}));wall.position.set(-1,3.5,-5);sc.add(wall);
 const fire=CFM.campfire();fire.scale.setScalar(.8);fire.position.set(-1.1,0,-2.3);sc.add(fire);
 // bigorna
 const sh=new T.Shape();sh.moveTo(-.9,.9);sh.lineTo(.55,.9);sh.quadraticCurveTo(1.0,.9,1.42,.8);sh.quadraticCurveTo(.9,.64,.5,.62);sh.lineTo(.3,.45);sh.lineTo(.36,.2);sh.lineTo(.62,0);sh.lineTo(-.72,0);sh.lineTo(-.55,.2);sh.lineTo(-.48,.45);sh.lineTo(-.66,.62);sh.lineTo(-.92,.7);sh.closePath();
 const ag=new T.ExtrudeGeometry(sh,{depth:.46,bevelEnabled:true,bevelThickness:.03,bevelSize:.03,bevelSegments:3,curveSegments:12});ag.translate(0,0,-.23);
 const anvil=new T.Group(),am=new T.Mesh(ag,new T.MeshStandardMaterial({color:0x4a5563,metalness:.85,roughness:.38}));am.castShadow=true;anvil.add(am);
 const stump=new T.Mesh(new T.CylinderGeometry(.55,.62,.5,16),new T.MeshStandardMaterial({color:0x6e4526,roughness:.85}));stump.position.y=-.25;stump.castShadow=true;anvil.add(stump);
 anvil.scale.setScalar(.6);anvil.position.set(.45,.3,.78);sc.add(anvil);const ANV_TOP=.3+.9*.6;
 // ferreiro: o herói com o braço do martelo animado
 const smith=CFM.hero();smith.remove(smith.children[smith.children.length-1]);
 smith.children.slice().forEach(c=>{if(c.position.x>.33&&c.position.y>.4&&c.position.y<.8)smith.remove(c)});
 const pivot=new T.Group();pivot.position.set(.38,.9,.05);smith.add(pivot);
 const sil=new T.MeshStandardMaterial({color:0xd9e2ea,metalness:.85,roughness:.3});
 const arm=new T.Mesh(new T.CapsuleGeometry(.085,.22,4,10),sil);arm.position.y=-.2;pivot.add(arm);
 const hand=new T.Mesh(new T.IcosahedronGeometry(.09,1),new T.MeshStandardMaterial({color:0x5a3a22,roughness:.7}));hand.position.y=-.4;pivot.add(hand);
 const handle=new T.Mesh(new T.CylinderGeometry(.03,.03,.42,8),new T.MeshStandardMaterial({color:0x8a5a33,roughness:.8}));handle.position.y=-.55;pivot.add(handle);
 const head=new T.Mesh(new T.BoxGeometry(.13,.13,.3),new T.MeshStandardMaterial({color:0x8d99a6,metalness:.9,roughness:.3}));head.position.set(0,-.74,-.04);pivot.add(head);
 smith.traverse(o=>{if(o.isMesh)o.castShadow=true});smith.position.set(0,0,0);smith.rotation.y=.15;sc.add(smith);
 // brasas 3D subindo da forja
 const emb=[];for(let i=0;i<40;i++){const m=new T.Mesh(new T.OctahedronGeometry(.02,0),new T.MeshBasicMaterial({color:i%3?0xff8a2b:0xffd27a}));m.position.set(-1.1+(Math.random()-.5)*.8,Math.random()*3,-2.3+(Math.random()-.5)*.8);m.userData.v=.004+Math.random()*.01;sc.add(m);emb.push(m)}
 // camada 2D: letras de aprendizado saindo como faíscas
 const fx=$('lkfx'),cx=fx.getContext('2d');let W=0,H=0;const sizeFx=()=>{const r=devicePixelRatio||1;W=lock.clientWidth;H=lock.clientHeight;fx.width=W*r;fx.height=H*r;cx.setTransform(r,0,0,r,0,0)};sizeFx();
 const WORDS=['G','R','S','E','I','Tab','Ctrl+R','Ctrl+B','Bevel','Mirror','Array','Extrude','Solidify','Shade Smooth','Low-poly','Vértice','Aresta','Face','XP','3D','.glb','Subdivision','Displace','UV','Material'];
 const sparks=[];
 function emit(){const p=new T.Vector3(.4,ANV_TOP+.04,.78).project(cam),x=(p.x*.5+.5)*W,y=(-p.y*.5+.5)*H;
  for(let i=0;i<5;i++){const a=-Math.PI/2+(Math.random()-.5)*2.2,v=3+Math.random()*5;sparks.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,life:70+Math.random()*50,max:120,txt:WORDS[Math.floor(Math.random()*WORDS.length)],sz:13+Math.random()*13,rot:(Math.random()-.5)*.6,c:Math.random()<.5?'#7fe8ff':(Math.random()<.5?'#ffd27a':'#ffffff')})}
  for(let i=0;i<22;i++){const a=-Math.PI/2+(Math.random()-.5)*2.8,v=2+Math.random()*7;sparks.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,life:25+Math.random()*25,max:50,dot:1,c:Math.random()<.6?'#ffb347':'#bff4ff'})}
  hit.position.set(.4,ANV_TOP+.3,.9);hit.intensity=4}
 function drawFx(){cx.clearRect(0,0,W,H);cx.globalCompositeOperation='lighter';
  for(let i=sparks.length-1;i>=0;i--){const s=sparks[i];s.x+=s.vx;s.y+=s.vy;s.vy+=s.dot?.18:.06;s.vx*=.985;s.life--;if(s.life<=0){sparks.splice(i,1);continue}
   const a=Math.min(1,s.life/40);if(s.dot){cx.fillStyle=s.c;cx.globalAlpha=a;cx.fillRect(s.x,s.y,2.4,2.4)}else{cx.save();cx.translate(s.x,s.y);cx.rotate(s.rot);cx.globalAlpha=a;cx.font='800 '+s.sz+'px "Exo 2",system-ui,sans-serif';cx.shadowColor=s.c;cx.shadowBlur=14;cx.fillStyle=s.c;cx.textAlign='center';cx.fillText(s.txt,0,0);cx.restore()}}
  cx.globalAlpha=1;cx.globalCompositeOperation='source-over'}
 const ro=new ResizeObserver(()=>{fit(ren,cam,host);sizeFx()});ro.observe(lock);fit(ren,cam,host);
 const t0=performance.now();let lastHit=-1;
 function frame(now){if(!lockAlive)return;const t=(now-t0)/1000,P=1.3,ph=(t%P)/P,cyc=Math.floor(t/P);
  let ang;if(ph<.55)ang=-1.25-1.65*ease.out(ph/.55);else if(ph<.7)ang=-2.9;else if(ph<.8)ang=-2.9+1.65*Math.pow((ph-.7)/.1,2);else ang=-1.25-.08*Math.sin((ph-.8)/.2*Math.PI);
  pivot.rotation.x=ang;smith.position.y=Math.abs(Math.sin(ph*Math.PI))*.015;
  if(ph>=.8&&lastHit!==cyc&&!RM){lastHit=cyc;emit()}
  hit.intensity*=.88;forge.intensity=2.2+Math.sin(t*9)*.25+Math.sin(t*23)*.15;
  emb.forEach(m=>{m.position.y+=m.userData.v;m.position.x+=Math.sin(t*2+m.position.y*3)*.002;if(m.position.y>3.4)m.position.y=.3});
  const wide=cam.aspect>1.1,ox=wide?-1.5:0;cam.position.set(ox+Math.sin(t*.12)*.3,wide?1.55:1.8,wide?5.4:6.6);cam.lookAt(ox+.1,wide?.85:.6,0);
  ren.render(sc,cam);drawFx();requestAnimationFrame(frame)}
 requestAnimationFrame(frame);
 // relógio
 const clock=()=>{const d=new Date();$('lkTime').textContent=d.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'});$('lkDate').textContent=d.toLocaleDateString('pt-BR',{weekday:'long',day:'numeric',month:'long'})};clock();const ci=setInterval(clock,10000);
 // arrastar para cima
 let y0=null,dy=0,tStart=0;
 const unlock=()=>{if(!lockAlive)return;lockAlive=false;clearInterval(ci);lock.style.transition='transform .55s cubic-bezier(.2,.8,.2,1),opacity .55s';lock.style.transform='translateY(-100%)';lock.style.opacity='0';
  try{window.CFA_SOUND&&window.CFA_SOUND('hammer')}catch(e){}
  setTimeout(()=>{lock.hidden=true;lock.style.transition='';lock.style.opacity='';ro.disconnect();ren.dispose();host.innerHTML='';done()},560)};
 lock.onpointerdown=e=>{if(e.target.closest('button'))return;y0=e.clientY;dy=0;tStart=performance.now();lock.style.transition='none';lock.setPointerCapture(e.pointerId)};
 lock.onpointermove=e=>{if(y0===null)return;dy=Math.min(0,e.clientY-y0);lock.style.transform=`translateY(${dy}px)`};
 lock.onpointerup=lock.onpointercancel=()=>{if(y0===null)return;const v=dy/(performance.now()-tStart);y0=null;if(-dy>H*.22||v<-.6)unlock();else{lock.style.transition='transform .3s';lock.style.transform=''}};
 lock.onwheel=e=>{if(e.deltaY>20)unlock()};
 lock.onkeydown=e=>{if(['ArrowUp','Enter',' '].includes(e.key)){e.preventDefault();unlock()}};
 $('lkBtn').onclick=unlock;
 $('lkIntro').onclick=()=>{lockAlive=false;clearInterval(ci);ro.disconnect();ren.dispose();host.innerHTML='';lock.hidden=true;playIntro()};
 setTimeout(()=>lock.focus(),50)}

window.CFA_INTRO=()=>{document.documentElement.classList.add('locked');playIntro()};
if(seen||RM){intro.hidden=true;showLock()}else playIntro();
})();
