/* Crown Forge Academy · modelos de referência no padrão Nine Crowns
   Estilo: chibi estilizado, superfície lisa (Shade Smooth), quinas arredondadas (Bevel), poucos triângulos. */
(function(){
const T=THREE;
const P={gold:[0xf2b636,.9,.28],silver:[0xd9e2ea,.85,.3],steel:[0xaab6c2,.85,.35],wood:[0x8a5a33,0,.8],woodL:[0xd9b07a,0,.75],leather:[0x5a3a22,0,.7],red:[0xc8323c,0,.6],skin:[0xf3c29b,0,.6],hair:[0x5b3a1e,0,.7],stone:[0xb9b2a3,0,.85],dark:[0x1b1420,0,.6]};
const M=(c,m,r,o)=>new T.MeshStandardMaterial(Object.assign({color:c,metalness:m||0,roughness:r==null?.6:r},o||{}));
const pm=k=>M(...P[k]);
const basic=c=>new T.MeshBasicMaterial({color:c});
const glowM=c=>M(c,.1,.15,{emissive:c,emissiveIntensity:.35});
const mesh=(g,m,p,r,s)=>{const x=new T.Mesh(g,m);if(p)x.position.set(...p);if(r)x.rotation.set(...r);if(s)(Array.isArray(s)?x.scale.set(...s):x.scale.setScalar(s));return x};
const grp=(...a)=>{const g=new T.Group();a.forEach(x=>x&&g.add(x));return g};
const lathe=(pts,seg)=>new T.LatheGeometry(pts.map(p=>new T.Vector2(p[0],p[1])),seg||32);
const sph=(r,w,h)=>new T.SphereGeometry(r,w||16,h||10);
const ico=r=>smooth(new T.IcosahedronGeometry(r,1));
const gem=r=>new T.OctahedronGeometry(r,0);
const cap=(r,l,rs)=>new T.CapsuleGeometry(r,l,4,rs||12);
// normais suaves em geometria sem índice (o "Shade Smooth" do Blender)
function smooth(g){const p=g.attributes.position,n=[],acc={},key=i=>p.getX(i).toFixed(4)+','+p.getY(i).toFixed(4)+','+p.getZ(i).toFixed(4);
 const a=new T.Vector3(),b=new T.Vector3(),c=new T.Vector3(),f=new T.Vector3();
 for(let i=0;i<p.count;i+=3){a.fromBufferAttribute(p,i);b.fromBufferAttribute(p,i+1);c.fromBufferAttribute(p,i+2);f.subVectors(c,b).cross(a.clone().sub(b)).normalize();
  for(let k=0;k<3;k++){const K=key(i+k);acc[K]=(acc[K]||new T.Vector3()).add(f)}}
 for(let i=0;i<p.count;i++){const v=acc[key(i)].clone().normalize();n.push(v.x,v.y,v.z)}
 g.setAttribute('normal',new T.Float32BufferAttribute(n,3));return g}
function bumpy(g,amt,seed){g=g.index?g.toNonIndexed():g;const p=g.attributes.position;for(let i=0;i<p.count;i++){const x=p.getX(i),y=p.getY(i),z=p.getZ(i),
 d=1+amt*(Math.sin(3.1*x+seed)*Math.sin(2.7*y+seed*2)*Math.sin(3.3*z+seed*3)+.5*Math.sin(7*x+seed)*Math.sin(6*z));p.setXYZ(i,x*d,y*d,z*d)}return smooth(g)}
const extrude=(shape,depth,bev)=>{const g=new T.ExtrudeGeometry(shape,{depth,bevelEnabled:true,bevelThickness:bev,bevelSize:bev,bevelSegments:3,curveSegments:10});g.translate(0,0,-depth/2);return g};
const shape=pts=>{const s=new T.Shape();s.moveTo(...pts[0]);pts.slice(1).forEach(q=>q.length===4?s.quadraticCurveTo(...q):s.lineTo(...q));s.closePath();return s};
const GEMS=[0x3ad8ff,0xb48cff,0xff4d6d,0x57e389,0xffffff,0xff8a4c,0x7fe8ff,0xffd76a];

/* ---- Blockout: a coroa exatamente como sai dos passos da Missão 5 ---- */
function crownGeo(){const N=16,R=1,TH=.08,HB=.6,PK=.5,pos=[],O=(a,y,r)=>[Math.cos(a)*r,y,Math.sin(a)*r],quad=(a,b,c,d)=>pos.push(...a,...b,...c,...a,...c,...d),ht=i=>HB+((i%N)%2===0?PK:0);
 for(let i=0;i<N;i++){const a0=i/N*Math.PI*2,a1=(i+1)/N*Math.PI*2,h0=ht(i),h1=ht(i+1),ri=R-TH;
  quad(O(a0,0,R),O(a0,h0,R),O(a1,h1,R),O(a1,0,R));quad(O(a1,0,ri),O(a1,h1,ri),O(a0,h0,ri),O(a0,0,ri));
  quad(O(a0,h0,R),O(a0,h0,ri),O(a1,h1,ri),O(a1,h1,R));quad(O(a1,0,R),O(a1,0,ri),O(a0,0,ri),O(a0,0,R))}
 const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(pos,3));g.computeVertexNormals();return g}
function crownBlock(mat){const N=16,R=1,TH=.08,HB=.6,PK=.5,geo=crownGeo(),g=grp(new T.Mesh(geo,mat)),gg=new T.IcosahedronGeometry(.07,0);
 for(let i=0;i<N;i++){const a=i/N*Math.PI*2,c=GEMS[Math.floor(i/2)%8],r=i%2===0?R-TH/2:R+.03,y=i%2===0?HB+PK:HB*.45;g.add(mesh(gg,M(c,0,.2,{emissive:c,emissiveIntensity:.45,flatShading:true}),[Math.cos(a)*r,y,Math.sin(a)*r]))}
 g.userData.geo=geo;return g}

/* ---- Versão final de cada modelo ---- */
function crown(){const gold=pm('gold'),g=grp();
 g.add(mesh(lathe([[.9,0],[1,0],[1.04,.05],[1.04,.37],[1,.42],[.9,.42],[.9,0]],40),gold));
 [.02,.4].forEach(y=>g.add(mesh(new T.TorusGeometry(1.04,.035,6,32),gold,[0,y,0],[Math.PI/2,0,0])));
 g.add(mesh(sph(.9,20,8),M(0x7a1630,0,.9),[0,.12,0],null,[.97,.62,.97]));
 const spk=lathe([[0,0],[.17,0],[.15,.2],[.08,.42],[0,.56]],14);
 for(let i=0;i<8;i++){const a=i/8*Math.PI*2,pv=new T.Group();pv.rotation.y=-a;const s=mesh(spk,gold,[.97,.38,0],[0,0,-.12]);s.add(mesh(gem(.08),glowM(GEMS[i]),[0,.6,0]));pv.add(s);
  const b=new T.Group();b.rotation.y=-a-Math.PI/8;b.add(mesh(new T.TorusGeometry(.085,.022,4,10),gold,[1.06,.21,0],[0,Math.PI/2,0]));b.add(mesh(gem(.08),glowM(GEMS[(i+3)%8]),[1.06,.21,0],null,[.6,1,1]));g.add(pv,b)}
 return g}
function potion(){const glass=M(0xdff6ff,.1,.05,{transparent:true,opacity:.38}),g=grp();
 g.add(mesh(lathe([[0,0],[.42,0],[.5,.06],[.55,.3],[.5,.6],[.36,.78],[.17,.88],[.16,1.06],[.21,1.1],[.21,1.15],[.15,1.17],[0,1.17]],28),glass));
 g.add(mesh(lathe([[0,.04],[.38,.05],[.46,.28],[.45,.55],[.3,.6],[0,.6]],28),M(0xa040ff,0,.3,{emissive:0x8a2be2,emissiveIntensity:.7})));
 g.add(mesh(lathe([[0,1.08],[.14,1.08],[.17,1.18],[.15,1.29],[0,1.3]],18),pm('woodL')));
 g.add(mesh(new T.TorusGeometry(.18,.028,8,24),M(0xb98a52,0,.9),[0,.98,0],[Math.PI/2,0,0]));
 g.add(mesh(new T.CylinderGeometry(.553,.553,.24,24,1,true,-.5,1),M(0xf1e3c2,0,.9,{side:T.DoubleSide}),[0,.3,0]));
 [[.12,.25,.2,.04],[-.1,.4,.18,.03],[.05,.48,-.15,.025]].forEach(b=>g.add(mesh(ico(b[3]),M(0xf3d9ff,0,.2,{emissive:0xd9a6ff,emissiveIntensity:.6}),[b[0],b[1],b[2]])));
 const l=new T.PointLight(0xb44cff,1.2,2.5);l.position.set(0,.35,0);g.add(l);return g}
function coin(){const sil=pm('silver'),prof=[[0,-.05],[.5,-.05],[.55,-.03],[.56,0],[.55,.03],[.5,.05],[.45,.05],[.43,.03],[0,.03]],cg=lathe(prof,24),g=grp();
 [[0,.05,0,0],[.15,.15,.05,.4],[-.05,.25,-.02,1.1]].forEach(c=>g.add(mesh(cg,sil,[c[0],c[1],c[2]],[0,c[3],0])));
 const st=mesh(cg,sil,[.35,.62,.45],[Math.PI/2,0,-.2]);g.add(st);
 const em=extrude(shape([[-.22,-.1],[.22,-.1],[.24,.12],[.12,.02],[0,.16],[-.12,.02],[-.24,.12]]),.02,.01);
 st.add(mesh(em,pm('silver'),[0,.045,0],[-Math.PI/2,0,0]));return g}
function campfire(){const g=grp(),bark=pm('wood'),end=pm('woodL');
 for(let i=0;i<6;i++){const pv=new T.Group();pv.rotation.y=i/6*Math.PI*2;pv.add(mesh(new T.CylinderGeometry(.08,.09,1,12),[bark,end,end],[.24,.34,0],[0,0,.72]));g.add(pv)}
 for(let i=0;i<11;i++){const a=i/11*Math.PI*2;g.add(mesh(bumpy(new T.IcosahedronGeometry(.17,1),.12,i),M([0x8a8f96,0x737980,0x9aa0a6][i%3],0,.9),[Math.cos(a)*.72,.09,Math.sin(a)*.72],[0,a,0],[1,.7,1]))}
 g.add(mesh(new T.CircleGeometry(.6,24),M(0x2a2220,0,1),[0,.01,0],[-Math.PI/2,0,0]));
 const fl=lathe([[0,0],[.2,.08],[.22,.26],[.13,.52],[0,.85]],18);
 [[1,0xff6a1a,0],[.72,0xffa62b,.02],[.45,0xfff1a8,.04]].forEach(f=>g.add(mesh(fl,basic(f[1]),[0,.12+f[2],0],null,f[0])));
 [[.13,.08,.5,.55],[-.12,-.06,.45,-.5]].forEach(f=>g.add(mesh(fl,basic(0xff8a2b),[f[0],.12,f[1]],[0,0,f[3]*.3],f[2])));
 const l=new T.PointLight(0xff8a2b,2.4,3.5);l.position.set(0,.5,0);g.add(l);return g}
function sword(){const st=pm('silver'),gold=pm('gold'),g=grp();
 g.add(mesh(extrude(shape([[-.075,0],[-.075,1.25],[0,1.46],[.075,1.25],[.075,0]]),.025,.012),st,[0,.05,0]));
 g.add(mesh(new T.BoxGeometry(.022,1.05,.05),pm('steel'),[0,.62,0]));
 g.add(mesh(extrude(shape([[-.36,.03],[-.38,-.03,0,-.07],[.38,-.03],[.36,.03],[.38,.07,0,.04],[-.38,.07]]),.07,.015),gold,[0,0,0]));
 g.add(mesh(new T.CylinderGeometry(.045,.045,.3,14),pm('leather'),[0,-.2,0]));
 for(let k=0;k<5;k++)g.add(mesh(new T.TorusGeometry(.047,.011,6,14),pm('leather'),[0,-.08-k*.055,0],[Math.PI/2,0,0]));
 g.add(mesh(sph(.08,16,10),gold,[0,-.41,0]));g.add(mesh(ico(.04),glowM(0x3ad8ff),[0,-.41,.06]));return g}
function shield(){const g=grp(),out=[[-.6,.55],[.6,.55],[.6,0],[.55,-.55,0,-.85],[-.55,-.55,-.6,0]];
 g.add(mesh(extrude(shape(out),.06,.035),pm('silver')));
 g.add(mesh(extrude(shape(out.map(p=>p.map(v=>v*.86))),.05,.015),M(0x2f5fb3,0,.55),[0,.0,.05]));
 const em=extrude(shape([[-.22,-.1],[.22,-.1],[.24,.12],[.12,.02],[0,.16],[-.12,.02],[-.24,.12]]),.03,.012);g.add(mesh(em,pm('gold'),[0,.02,.1],null,[1.5,1.5,1]));
 const rv=[[-.5,.45],[0,.47],[.5,.45],[.53,.05],[-.53,.05],[.38,-.42],[-.38,-.42],[0,-.7]];rv.forEach(r=>g.add(mesh(ico(.035),pm('gold'),[r[0],r[1],.09])));
 g.rotation.y=-.35;return g}
function helmet(){const s=pm('silver'),g=grp(),cut=.55*Math.cos(Math.PI*.55);
 g.add(mesh(new T.SphereGeometry(.55,28,14,0,Math.PI*2,0,Math.PI*.55),s));
 g.add(mesh(new T.CylinderGeometry(.543,.5,.5,28,1,true),M(...P.silver,{side:T.DoubleSide}),[0,cut-.25,0]));
 g.add(mesh(new T.BoxGeometry(.62,.06,.12),pm('dark'),[0,-.08,.5]));
 for(let r=0;r<2;r++)for(let c=-2;c<=2;c++)g.add(mesh(ico(.018),pm('dark'),[c*.07,-.3-r*.07,.535]));
 g.add(mesh(new T.TorusGeometry(.565,.03,6,28,Math.PI),pm('gold'),[0,0,0],[0,Math.PI/2,0]));
 g.add(mesh(new T.TorusGeometry(.5,.035,6,32),pm('gold'),[0,cut-.5,0],[Math.PI/2,0,0]));
 for(let k=0;k<6;k++){const a=(.15+k*.11)*Math.PI;g.add(mesh(ico(.12),pm('red'),[0,Math.cos(a-.35)*.66+.05,-Math.sin(a-.35)*.66],[a,0,0],[.55,1.5,.9]))}
 g.rotation.y=.5;return g}
function tree(){const g=grp(),bark=M(0x7a4f2c,0,.85);
 g.add(mesh(lathe([[0,0],[.24,0],[.16,.1],[.12,.6],[.1,1.05],[0,1.05]],14),bark));
 [0,2.1,4.2].forEach(a=>g.add(mesh(new T.ConeGeometry(.07,.35,8),bark,[Math.cos(a)*.17,.06,Math.sin(a)*.17],[Math.sin(a)*1.2,0,-Math.cos(a)*1.2])));
 [[0,1.35,0,.55,0x3f9e4d],[.38,1.15,.12,.38,0x4fb85a],[-.36,1.12,-.05,.4,0x45a852],[.05,1.1,.36,.36,0x56c060],[-.05,1.12,-.36,.36,0x3a9447],[.12,1.7,.05,.36,0x6bd16f]].forEach((c,i)=>g.add(mesh(bumpy(new T.IcosahedronGeometry(c[3],2),.08,i+1),M(c[4],0,.8),[c[0],c[1],c[2]])))
 return g}
function rocks(){const g=grp(),mk=(r,s,p,sc)=>{const geo=bumpy(new T.IcosahedronGeometry(r,2),.16,s),col=[],n=geo.attributes.normal,base=new T.Color(0x8e959c),moss=new T.Color(0x5f9e48);
  for(let i=0;i<n.count;i++){const c=n.getY(i)>.55?moss:base;col.push(c.r,c.g,c.b)}geo.setAttribute('color',new T.Float32BufferAttribute(col,3));return mesh(geo,M(0xffffff,0,.9,{vertexColors:true}),p,null,sc)};
 g.add(mk(.55,1,[0,.36,0],[1.25,.78,1]),mk(.32,4,[.68,.2,.3],[1,.8,1]),mk(.2,7,[-.6,.13,.35],[1,.8,1.1]));return g}
function column(){const g=grp(),st=pm('stone');
 const flute=(geo,jag)=>{const p=geo.attributes.position;let top=-1e9;for(let i=0;i<p.count;i++)top=Math.max(top,p.getY(i));
  for(let i=0;i<p.count;i++){const x=p.getX(i),z=p.getZ(i),y=p.getY(i),r=Math.hypot(x,z);if(r<1e-4)continue;const th=Math.atan2(z,x),f=1-.045*(.5+.5*Math.cos(16*th));
   p.setXYZ(i,x*f,(jag&&y>top-1e-3)?y-(.08+.14*Math.abs(Math.sin(th*3+1))):y,z*f)}geo.computeVertexNormals();return geo};
 g.add(mesh(new T.BoxGeometry(.9,.12,.9),st,[0,.06,0]),mesh(new T.BoxGeometry(.78,.1,.78),st,[0,.17,0]));
 g.add(mesh(flute(new T.CylinderGeometry(.29,.32,1.3,48,8),true),st,[0,.87,0]));
 g.add(mesh(flute(new T.CylinderGeometry(.29,.29,.45,48,3),false),st,[.62,.27,.25],[Math.PI/2,0,.5]));
 [[-.5,.07,.4,.1,2],[.2,.06,-.55,.08,5],[-.25,.05,.6,.06,9]].forEach(r=>g.add(mesh(bumpy(new T.IcosahedronGeometry(r[3],1),.2,r[4]),st,[r[0],r[1],r[2]])));
 return g}
function monster(){const g=grp(),skin=M(0x7b3fa0,0,.55),belly=M(0xb27ad1,0,.6),ivory=M(0xf2e6cf,0,.5);
 g.add(mesh(sph(.55,18,12),skin,[0,.78,0],null,[1,1.1,.9]));g.add(mesh(sph(.4,16,10),belly,[0,.72,.18],null,[1,1.1,.6]));
 g.add(mesh(sph(.5,18,12),skin,[0,1.55,0]));
 [-1,1].forEach(s=>{for(let k=0;k<7;k++){const t=k/6;g.add(mesh(sph(.1*(1-t*.75),10,8),ivory,[s*(.3+t*.28),1.82+Math.sin(t*2.4)*.32,-.05-t*.1]))}
  g.add(mesh(ico(.085),basic(0xffe14d),[s*.17,1.6,.43],null,[1,.75,.6]));
  g.add(mesh(new T.BoxGeometry(.2,.05,.05),pm('dark'),[s*.17,1.72,.44],[0,0,-s*.35]));
  g.add(mesh(new T.ConeGeometry(.04,.12,8),ivory,[s*.1,1.36,.45],[Math.PI,0,0]));
  g.add(mesh(cap(.14,.4),skin,[s*.66,.9,0],[0,0,s*.6]));for(let c=-1;c<=1;c++)g.add(mesh(new T.ConeGeometry(.035,.12,6),ivory,[s*.86+c*.05*s,.66,c*.05],[0,0,s*2.7]));
  g.add(mesh(cap(.17,.18),skin,[s*.25,.25,0]));g.add(mesh(ico(.19),M(0x5a2b78,0,.6),[s*.27,.08,.08],null,[1,.55,1.3]))});
 g.add(mesh(ico(.16),pm('dark'),[0,1.4,.42],null,[1.4,.45,.5]));
 g.add(mesh(new T.CylinderGeometry(.62,.82,1.15,24,1,true,Math.PI*.6,Math.PI*.8),M(0x9e1b32,0,.7,{side:T.DoubleSide}),[0,.95,-.05]));
 const c=crown();c.scale.setScalar(.34);c.position.set(0,1.92,0);c.rotation.z=.12;g.add(c);
 for(let k=0;k<6;k++)g.add(mesh(ico(.07-k*.008),skin,[0,.45+k*.02,-.5-k*.12]));return g}
function hero(){const g=grp(),sil=pm('silver'),skin=pm('skin'),hair=pm('hair'),red=pm('red');
 [-1,1].forEach(s=>{g.add(mesh(cap(.1,.18),M(0x3a3f4a,0,.6),[s*.13,.28,0]));g.add(mesh(ico(.13),pm('leather'),[s*.13,.08,.05],null,[1,.7,1.4]));
  g.add(mesh(sph(.15,16,10),sil,[s*.33,.92,0]));g.add(mesh(cap(.085,.22),sil,[s*.4,.68,.02],[0,0,s*.25]));g.add(mesh(ico(.09),pm('leather'),[s*.47,.48,.05]))});
 g.add(mesh(cap(.27,.22),sil,[0,.68,0]));g.add(mesh(sph(.24,18,12),M(...P.silver),[0,.74,.1],null,[1.05,.9,.6]));
 g.add(mesh(new T.TorusGeometry(.27,.045,8,24),pm('leather'),[0,.5,0],[Math.PI/2,0,0]));g.add(mesh(new T.BoxGeometry(.08,.07,.05),pm('gold'),[0,.5,.29]));
 g.add(mesh(new T.CylinderGeometry(.29,.36,.2,18,1,true),M(...P.silver,{side:T.DoubleSide}),[0,.4,0]));
 g.add(mesh(new T.TorusGeometry(.36,.02,6,24),pm('gold'),[0,.3,0],[Math.PI/2,0,0]));
 g.add(mesh(extrude(shape([[-.22,-.1],[.22,-.1],[.24,.12],[.12,.02],[0,.16],[-.12,.02],[-.24,.12]]),.02,.008),pm('gold'),[0,.78,.27],[-.25,0,0],[.35,.35,1]));
 [-1,1].forEach(s=>{g.add(mesh(new T.TorusGeometry(.13,.022,6,18),pm('gold'),[s*.33,.88,0],[Math.PI/2,0,s*.5]));g.add(mesh(ico(.065),sil,[s*.13,.3,.09]))});
 g.add(mesh(new T.CylinderGeometry(.3,.48,.75,20,1,true,Math.PI*.65,Math.PI*.7),M(...P.red,{side:T.DoubleSide}),[0,.6,-.04]));
 g.add(mesh(sph(.42,22,16),skin,[0,1.32,0]));
 [-1,1].forEach(s=>{g.add(mesh(ico(.065),pm('dark'),[s*.14,1.3,.37],null,[.75,1,.45]));g.add(mesh(ico(.02),basic(0xffffff),[s*.14+.02,1.33,.4]));
  g.add(mesh(new T.BoxGeometry(.13,.035,.04),hair,[s*.14,1.42,.38],[0,0,s*.12]));g.add(mesh(ico(.07),skin,[s*.42,1.3,0],null,[.6,1,.8]))});
 g.add(mesh(new T.TorusGeometry(.06,.012,6,16,Math.PI),pm('dark'),[0,1.19,.4],[Math.PI,0,0]));
 g.add(mesh(new T.SphereGeometry(.45,20,10,0,Math.PI*2,0,Math.PI*.48),hair,[0,1.36,-.03],[-.25,0,0]));
 [[-.2,1.62,.25,.15],[0,1.66,.3,.16],[.2,1.62,.25,.15],[.32,1.48,.18,.12],[-.32,1.48,.18,.12]].forEach(h=>g.add(mesh(ico(h[3]),hair,[h[0],h[1],h[2]],[.4,0,0],[1,.8,1.2])));
 const sw=sword();sw.scale.setScalar(.42);sw.position.set(.5,.48,.12);sw.rotation.set(.3,0,-.2);g.add(sw);return g}

window.CFM={crownBlock,crown,potion,coin,campfire,sword,shield,helmet,tree,rocks,column,monster,hero,smooth,bumpy};
})();
