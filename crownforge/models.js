/* Crown Forge Academy · modelos de referência no padrão Nine Crowns
   Estilo: chibi estilizado, peças inteiras e lisas (Shade Smooth), quinas arredondadas (Bevel), poucos triângulos. */
(function(){
const T=THREE;
const P={stoneD:[0x7d776b,0,.85],gold:[0xf2b636,.9,.28],silver:[0xd9e2ea,.85,.3],steel:[0xaab6c2,.85,.35],bronze:[0xc47a3a,.85,.33],wood:[0x8a5a33,0,.8],woodL:[0xd9b07a,0,.75],leather:[0x5a3a22,0,.7],red:[0xc8323c,0,.6],skin:[0xf3c29b,0,.6],hair:[0x5b3a1e,0,.7],stone:[0xb9b2a3,0,.85],dark:[0x1b1420,0,.6]};
const M=(c,m,r,o)=>new T.MeshStandardMaterial(Object.assign({color:c,metalness:m||0,roughness:r==null?.6:r},o||{}));
const pm=(k,o)=>M(...P[k],o);
const basic=(c,o)=>new T.MeshBasicMaterial(Object.assign({color:c},o||{}));
const glowM=c=>M(c,.1,.15,{emissive:c,emissiveIntensity:.35});
const mesh=(g,m,p,r,s)=>{const x=new T.Mesh(g,m);if(p)x.position.set(...p);if(r)x.rotation.set(...r);if(s)(Array.isArray(s)?x.scale.set(...s):x.scale.setScalar(s));return x};
const grp=(...a)=>{const g=new T.Group();a.forEach(x=>x&&g.add(x));return g};
const V=(x,y,z)=>new T.Vector3(x,y,z);
const lathe=(pts,seg)=>new T.LatheGeometry(pts.map(p=>new T.Vector2(p[0],p[1])),seg||32);
const sph=(r,w,h)=>new T.SphereGeometry(r,w||16,h||10);
const cap=(r,l,rs)=>new T.CapsuleGeometry(r,l,4,rs||12);
function smooth(g){const p=g.attributes.position,n=[],acc={},key=i=>p.getX(i).toFixed(4)+','+p.getY(i).toFixed(4)+','+p.getZ(i).toFixed(4);
 const a=new T.Vector3(),b=new T.Vector3(),c=new T.Vector3(),f=new T.Vector3();
 for(let i=0;i<p.count;i+=3){a.fromBufferAttribute(p,i);b.fromBufferAttribute(p,i+1);c.fromBufferAttribute(p,i+2);f.subVectors(c,b).cross(a.clone().sub(b)).normalize();
  for(let k=0;k<3;k++){const K=key(i+k);acc[K]=(acc[K]||new T.Vector3()).add(f)}}
 for(let i=0;i<p.count;i++){const v=acc[key(i)].clone().normalize();n.push(v.x,v.y,v.z)}
 g.setAttribute('normal',new T.Float32BufferAttribute(n,3));return g}
const ico=r=>smooth(new T.IcosahedronGeometry(r,1));
const gem=r=>new T.OctahedronGeometry(r,0);
function bumpy(g,amt,seed){g=g.index?g.toNonIndexed():g;const p=g.attributes.position;for(let i=0;i<p.count;i++){const x=p.getX(i),y=p.getY(i),z=p.getZ(i),
 d=1+amt*(Math.sin(3.1*x+seed)*Math.sin(2.7*y+seed*2)*Math.sin(3.3*z+seed*3)+.5*Math.sin(7*x+seed)*Math.sin(6*z));p.setXYZ(i,x*d,y*d,z*d)}return smooth(g)}
const extrude=(shape,depth,bev)=>{const g=new T.ExtrudeGeometry(shape,{depth,bevelEnabled:true,bevelThickness:bev,bevelSize:bev,bevelSegments:3,curveSegments:10});g.translate(0,0,-depth/2);return g};
const shape=pts=>{const s=new T.Shape();s.moveTo(...pts[0]);pts.slice(1).forEach(q=>q.length===4?s.quadraticCurveTo(...q):s.lineTo(...q));s.closePath();return s};
const GEMS=[0x3ad8ff,0xb48cff,0xff4d6d,0x57e389,0xffffff,0xff8a4c,0x7fe8ff,0xffd76a];
// ruído suave (para pedras e madeira)
const hash=(x,y,z)=>{const h=Math.sin(x*127.1+y*311.7+z*74.7)*43758.5453;return h-Math.floor(h)};
function vnoise(x,y,z){const X=Math.floor(x),Y=Math.floor(y),Z=Math.floor(z),fx=x-X,fy=y-Y,fz=z-Z,u=fx*fx*(3-2*fx),v=fy*fy*(3-2*fy),w=fz*fz*(3-2*fz),L=(a,b,t)=>a+(b-a)*t;
 return L(L(L(hash(X,Y,Z),hash(X+1,Y,Z),u),L(hash(X,Y+1,Z),hash(X+1,Y+1,Z),u),v),L(L(hash(X,Y,Z+1),hash(X+1,Y,Z+1),u),L(hash(X,Y+1,Z+1),hash(X+1,Y+1,Z+1),u),v),w)}
const fbm=(x,y,z)=>vnoise(x,y,z)*.55+vnoise(x*2.1,y*2.1,z*2.1)*.3+vnoise(x*4.3,y*4.3,z*4.3)*.15;
// geometria com índice: vértices compartilhados = superfície contínua, sem emendas
function indexify(g){g=g.index?g.toNonIndexed():g;const p=g.attributes.position,map={},pos=[],idx=[];
 for(let i=0;i<p.count;i++){const k=p.getX(i).toFixed(4)+','+p.getY(i).toFixed(4)+','+p.getZ(i).toFixed(4);if(map[k]===undefined){map[k]=pos.length/3;pos.push(p.getX(i),p.getY(i),p.getZ(i))}idx.push(map[k])}
 const o=new T.BufferGeometry();o.setAttribute('position',new T.Float32BufferAttribute(pos,3));o.setIndex(idx);return o}
// tubo afinado ao longo de uma curva: chifres, mechas de cabelo, garras, cauda (uma peça só, sem emendas)
function taper(pts,r0,r1,o){o=o||{};const seg=o.seg||14,rad=o.rad||8,curve=new T.CatmullRomCurve3(pts.map(p=>V(...p))),fr=curve.computeFrenetFrames(seg,false),pos=[],col=[],idx=[],c0=new T.Color(o.c0||0xffffff),c1=new T.Color(o.c1||o.c0||0xffffff);
 for(let i=0;i<=seg;i++){const t=i/seg,P=curve.getPointAt(t),N=fr.normals[i],B=fr.binormals[i];let r=r0+(r1-r0)*Math.pow(t,o.pow||1);if(o.ribs)r*=1+.1*Math.sin(t*o.ribs*Math.PI*2);if(o.sq)r*=1;
  const c=c0.clone().lerp(c1,Math.pow(t,o.cpow||2));for(let j=0;j<=rad;j++){const a=j/rad*Math.PI*2,sx=Math.cos(a)*(o.flat||1),sy=Math.sin(a);pos.push(P.x+(N.x*sx+B.x*sy)*r,P.y+(N.y*sx+B.y*sy)*r,P.z+(N.z*sx+B.z*sy)*r);col.push(c.r,c.g,c.b)}}
 for(let i=0;i<seg;i++)for(let j=0;j<rad;j++){const a=i*(rad+1)+j,b=a+rad+1;idx.push(a,b,a+1,b,b+1,a+1)}
 const s0=curve.getPointAt(0),ci=pos.length/3;pos.push(s0.x,s0.y,s0.z);col.push(c0.r,c0.g,c0.b);for(let j=0;j<rad;j++)idx.push(ci,j+1,j);
 const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(pos,3));g.setAttribute('color',new T.Float32BufferAttribute(col,3));g.setIndex(idx);g.computeVertexNormals();return g}
const vc=(r,m,o)=>new T.MeshStandardMaterial(Object.assign({vertexColors:true,roughness:r==null?.6:r,metalness:m||0},o||{}));
// caixa arredondada (Bevel grande)
function rbox(w,h,d,r,seg){const g=new T.BoxGeometry(w,h,d,seg||6,seg||6,seg||6),p=g.attributes.position,hw=w/2-r,hh=h/2-r,hd=d/2-r,v=new T.Vector3(),c=new T.Vector3();
 for(let i=0;i<p.count;i++){v.fromBufferAttribute(p,i);c.set(Math.max(-hw,Math.min(hw,v.x)),Math.max(-hh,Math.min(hh,v.y)),Math.max(-hd,Math.min(hd,v.z)));v.sub(c).normalize().multiplyScalar(r).add(c);p.setXYZ(i,v.x,v.y,v.z)}
 const o=indexify(g);o.computeVertexNormals();return o}
// pedra: uma peça só, com ruído suave, base achatada e musgo pintado por cor de vértice
function rockGeo(r,detail,seed,moss){const g=indexify(new T.IcosahedronGeometry(r,detail)),p=g.attributes.position,v=new T.Vector3();
 for(let i=0;i<p.count;i++){v.fromBufferAttribute(p,i);const n=fbm(v.x*1.6/r+seed,v.y*1.6/r+seed*.7,v.z*1.6/r-seed);v.multiplyScalar(.78+.45*n);v.x*=1.15;if(v.y<-.25*r)v.y=-.25*r+(v.y+.25*r)*.15;p.setXYZ(i,v.x,v.y,v.z)}
 g.computeVertexNormals();const nn=g.attributes.normal,col=[],base=new T.Color(0x5b6168),warm=new T.Color(0x6b6359),mo=new T.Color(0x4e8a36),mo2=new T.Color(0x3a6e2a);
 for(let i=0;i<p.count;i++){v.fromBufferAttribute(p,i);const k=fbm(v.x*4+seed,v.y*4,v.z*4),c=base.clone().lerp(warm,k);if(moss){const m=Math.min(1,Math.max(0,(nn.getY(i)+.35*k-.45)/.25));c.lerp(mo.clone().lerp(mo2,k),m)}col.push(c.r,c.g,c.b)}
 g.setAttribute('color',new T.Float32BufferAttribute(col,3));return g}
function crownGeo(){const N=16,R=1,TH=.08,HB=.6,PK=.5,pos=[],O=(a,y,r)=>[Math.cos(a)*r,y,Math.sin(a)*r],quad=(a,b,c,d)=>pos.push(...a,...b,...c,...a,...c,...d),ht=i=>HB+((i%N)%2===0?PK:0);
 for(let i=0;i<N;i++){const a0=i/N*Math.PI*2,a1=(i+1)/N*Math.PI*2,h0=ht(i),h1=ht(i+1),ri=R-TH;
  quad(O(a0,0,R),O(a0,h0,R),O(a1,h1,R),O(a1,0,R));quad(O(a1,0,ri),O(a1,h1,ri),O(a0,h0,ri),O(a0,0,ri));
  quad(O(a0,h0,R),O(a0,h0,ri),O(a1,h1,ri),O(a1,h1,R));quad(O(a1,0,R),O(a1,0,ri),O(a0,0,ri),O(a0,0,R))}
 const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(pos,3));g.computeVertexNormals();return g}
function crownBlock(mat){const N=16,R=1,TH=.08,HB=.6,PK=.5,geo=crownGeo(),g=grp(new T.Mesh(geo,mat)),gg=new T.IcosahedronGeometry(.07,0);
 for(let i=0;i<N;i++){const a=i/N*Math.PI*2,c=GEMS[Math.floor(i/2)%8],r=i%2===0?R-TH/2:R+.03,y=i%2===0?HB+PK:HB*.45;g.add(mesh(gg,M(c,0,.2,{emissive:c,emissiveIntensity:.45,flatShading:true}),[Math.cos(a)*r,y,Math.sin(a)*r]))}
 g.userData.geo=geo;return g}

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
function column(){const g=grp(),st=pm('stoneD');
 const flute=(geo,jag)=>{const p=geo.attributes.position;let top=-1e9;for(let i=0;i<p.count;i++)top=Math.max(top,p.getY(i));
  for(let i=0;i<p.count;i++){const x=p.getX(i),z=p.getZ(i),y=p.getY(i),r=Math.hypot(x,z);if(r<1e-4)continue;const th=Math.atan2(z,x),f=1-.045*(.5+.5*Math.cos(16*th));
   p.setXYZ(i,x*f,(jag&&y>top-1e-3)?y-(.08+.14*Math.abs(Math.sin(th*3+1))):y,z*f)}geo.computeVertexNormals();return geo};
 g.add(mesh(new T.BoxGeometry(.9,.12,.9),st,[0,.06,0]),mesh(new T.BoxGeometry(.78,.1,.78),st,[0,.17,0]));
 g.add(mesh(flute(new T.CylinderGeometry(.29,.32,1.3,48,8),true),st,[0,.87,0]));
 g.add(mesh(flute(new T.CylinderGeometry(.29,.29,.45,48,3),false),st,[.62,.27,.25],[Math.PI/2,0,.5]));
 [[-.5,.07,.4,.1,2],[.2,.06,-.55,.08,5],[-.25,.05,.6,.06,9]].forEach(r=>g.add(mesh(bumpy(new T.IcosahedronGeometry(r[3],1),.2,r[4]),st,[r[0],r[1],r[2]])));
 return g}
/* ---- Coroa Ancestral: anel e pontas numa peça só ---- */
function crownBody(N,MM){N=N||72;MM=MM||4;const TH=.06,top=th=>.36+.5*Math.pow(.5+.5*Math.cos(8*th),5)+.07*Math.pow(.5+.5*Math.cos(8*th+Math.PI),10),R=y=>1+.05*y,pos=[],idx=[];let K=0;
 for(let i=0;i<N;i++){const th=i/N*Math.PI*2,c=Math.cos(th),s=Math.sin(th),h=top(th),col=[];
  for(let m=0;m<=MM;m++){const y=h*m/MM;col.push([R(y),y])}col.push([R(h)-TH/2,h+.018]);
  for(let m=MM;m>=0;m--){const y=h*m/MM;col.push([R(y)-TH,y])}col.push([R(0)-TH/2,-.018]);K=col.length;col.forEach(q=>pos.push(q[0]*c,q[1],q[0]*s))}
 for(let i=0;i<N;i++)for(let k=0;k<K;k++){const a=i*K+k,b=((i+1)%N)*K+k,a2=i*K+(k+1)%K,b2=((i+1)%N)*K+(k+1)%K;idx.push(a,b,a2,b,b2,a2)}
 const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(pos,3));g.setIndex(idx);g.computeVertexNormals();g.userData.top=top;g.userData.R=R;return g}
function crown(lite){const gold=pm('gold',{side:T.DoubleSide}),body=lite?crownBody(40,3):crownBody(),top=body.userData.top,R=body.userData.R,g=grp(mesh(body,gold));
 g.add(mesh(new T.TorusGeometry(1.005,.03,5,48),pm('gold'),[0,.03,0],[Math.PI/2,0,0]));
 g.add(mesh(new T.TorusGeometry(R(.3)+.005,.022,5,48),pm('gold'),[0,.3,0],[Math.PI/2,0,0]));
 g.add(mesh(sph(.92,20,8),M(0x5a0f22,0,.95),[0,.12,0],null,[.95,.62,.95]));
 g.add(mesh(ico(.08),pm('gold'),[0,.73,0]));g.add(mesh(new T.BoxGeometry(.03,.14,.03),pm('gold'),[0,.85,0]));g.add(mesh(new T.BoxGeometry(.1,.03,.03),pm('gold'),[0,.86,0]));
 for(let k=0;k<8;k++){const th=k/8*Math.PI*2,h=top(th);g.add(mesh(ico(.06),glowM(GEMS[k]),[Math.cos(th)*(R(h)-.03),h+.06,Math.sin(th)*(R(h)-.03)]));
  const t2=th+Math.PI/8,pv=new T.Group();pv.rotation.y=-t2;pv.add(mesh(new T.TorusGeometry(.075,.018,4,10),pm('gold'),[R(.16)+.01,.16,0],[0,Math.PI/2,0]));pv.add(mesh(gem(.065),glowM(GEMS[(k+3)%8]),[R(.16)+.02,.16,0],null,[.5,1,1]));g.add(pv)}
 return g}

/* ---- Poções: HP (vermelha), MP (azul) e Stamina (amarela) ---- */
const HEART=[[0,-.1],[.11,0,.12,.06],[.06,.11,0,.05],[-.06,.11,-.12,.06],[-.11,0,0,-.1]];
const STAR=(()=>{const a=[];for(let i=0;i<10;i++){const r=i%2?.05:.12,t=i/10*Math.PI*2+Math.PI/2;a.push([Math.cos(t)*r,Math.sin(t)*r])}return a})();
const BOLT=[[.03,.13],[-.07,-.01],[0,-.01],[-.04,-.13],[.07,.02],[0,.02]];
function bottle(prof,liq,level,emb){const g=grp(),glass=M(0xe6f7ff,.1,.04,{transparent:true,opacity:.2,side:T.DoubleSide,depthWrite:false});
 const lp=[];prof.forEach(q=>{if(q[1]<=level)lp.push([q[0]*.88,Math.max(.03,q[1])])});lp.push([lp[lp.length-1][0],level],[0,level]);lp.unshift([0,.03]);
 g.add(mesh(lathe(lp,26),M(liq,0,.2,{emissive:liq,emissiveIntensity:.22})));g.add(mesh(lathe(prof,26),glass));
 const nk=prof[prof.length-2],ny=nk[1];g.add(mesh(lathe([[0,ny-.06],[nk[0]-.01,ny-.06],[nk[0]+.03,ny+.02],[nk[0],ny+.12],[0,ny+.13]],16),pm('woodL')));
 g.add(mesh(new T.TorusGeometry(nk[0]+.02,.02,6,18),M(0xb98a52,0,.9),[0,ny-.1,0],[Math.PI/2,0,0]));
 let ry=level*.45,rr=0;prof.forEach(q=>{if(Math.abs(q[1]-ry)<.2)rr=Math.max(rr,q[0])});
 g.add(mesh(new T.CylinderGeometry(rr+.006,rr+.006,.2,24,1,true,-.55,1.1),M(0xf1e3c2,0,.9,{side:T.DoubleSide}),[0,ry,0]));
 g.add(mesh(extrude(shape(emb),.02,.008),M(liq,.2,.4),[0,ry,rr+.02]));
 for(let k=0;k<3;k++)g.add(mesh(ico(.02+k*.006),M(0xffffff,0,.2,{emissive:liq,emissiveIntensity:.8}),[(k-1)*.08,level*.3+k*.08,(k%2-.5)*.1]));
 const l=new T.PointLight(liq,.8,1.6);l.position.set(0,level*.5,0);g.add(l);return g}
function potions(){const g=grp();
 const hp=bottle([[0,0],[.3,0],[.42,.08],[.47,.28],[.42,.5],[.25,.62],[.12,.68],[.11,.86],[0,.86]],0xe8283c,.5,HEART);hp.position.set(-.62,0,.15);
 const mp=bottle([[0,0],[.28,0],[.32,.05],[.32,.7],[.24,.8],[.11,.86],[.1,1.05],[0,1.05]],0x2f6bff,.68,STAR);mp.position.set(0,0,-.15);
 const st=bottle([[0,0],[.4,0],[.42,.04],[.3,.5],[.12,.66],[.11,.82],[0,.82]],0xffc21a,.42,BOLT);st.position.set(.64,0,.18);
 hp.rotation.y=.3;st.rotation.y=-.3;g.add(hp,mp,st);return g}

/* ---- Moedas: ouro, prata e bronze ---- */
const CROWNS=[[-.22,-.1],[.22,-.1],[.24,.12],[.12,.02],[0,.16],[-.12,.02],[-.24,.12]],SHIELD=[[-.15,.13],[.15,.13],[.15,0],[.13,-.09,0,-.16],[-.13,-.09,-.15,0]];
function coins(){const g=grp(),prof=[[0,-.04],[.42,-.04],[.46,-.06],[.53,-.055],[.565,-.025],[.57,0],[.565,.025],[.53,.055],[.46,.06],[.42,.04],[0,.04]],cg=lathe(prof,24);
 const mk=(k,emb,es)=>{const m=pm(k),c=grp(mesh(cg,m));c.add(mesh(extrude(shape(emb),.02,.008),m,[0,.05,0],[-Math.PI/2,0,0],es));c.add(mesh(extrude(shape(emb),.02,.008),m,[0,-.05,0],[Math.PI/2,0,0],es));return c};
 [['gold',CROWNS,[.9,.9,1],-.75,.08],['silver',STAR,[1.7,1.7,1],0,-.1],['bronze',SHIELD,[1.4,1.4,1],.75,.08]].forEach(c=>{const o=mk(c[0],c[1],c[2]);o.rotation.set(Math.PI/2-.12,0,0);o.position.set(c[3],.6,c[4]);o.rotation.y=-c[3]*.35;g.add(o)});
 ['bronze','silver','gold','gold'].forEach((k,i)=>g.add(mesh(cg,pm(k),[-.05+i*.012,.06+i*.122,.75],[0,i*.7,0])));return g}

/* ---- Pedras com musgo ---- */
function rocks(){return grp(mesh(rockGeo(.55,3,1.3,1),vc(.9),[0,.32,0]),mesh(rockGeo(.32,2,4.1,1),vc(.9),[.72,.18,.25],[0,.8,0]),mesh(rockGeo(.22,2,7.7,1),vc(.9),[-.66,.12,.3],[0,2,0]))}

/* ---- Fogueira: o checkpoint do jogo ---- */
function logGeo(len,r,seed){const g=new T.CylinderGeometry(r,r*1.08,len,10,6),p=g.attributes.position,col=[],v=new T.Vector3(),bark=new T.Color(0x6e4526),bark2=new T.Color(0x8a5a33),ch=new T.Color(0x1d1512),end=new T.Color(0xd9b07a);
 for(let i=0;i<p.count;i++){v.fromBufferAttribute(p,i);const rr=Math.hypot(v.x,v.z),isSide=rr>r*.95,t=(v.y+len/2)/len;let c;
  if(isSide){const a=Math.atan2(v.z,v.x),k=.92+.1*Math.sin(a*5+seed)*Math.sin(v.y*9+seed);v.x*=k;v.z*=k;c=bark.clone().lerp(bark2,.5+.5*Math.sin(a*5+seed)).lerp(ch,Math.min(1,Math.max(0,(t-.45)*1.8)))}
  else c=t>.5?ch:end;p.setXYZ(i,v.x,v.y,v.z);col.push(c.r,c.g,c.b)}
 g.setAttribute('color',new T.Float32BufferAttribute(col,3));g.computeVertexNormals();return g}
function flameGeo(h,w,tw,seed){const g=lathe([[0,0],[w*.75,h*.08],[w,h*.25],[w*.8,h*.5],[w*.35,h*.8],[0,h]],10),p=g.attributes.position,v=new T.Vector3();
 for(let i=0;i<p.count;i++){v.fromBufferAttribute(p,i);const t=v.y/h,a=t*tw;const x=v.x*Math.cos(a)-v.z*Math.sin(a),z=v.x*Math.sin(a)+v.z*Math.cos(a);p.setXYZ(i,x+Math.sin(t*3+seed)*.05*t,v.y,z)}g.computeVertexNormals();return g}
function campfire(){const g=grp();
 g.add(mesh(new T.CylinderGeometry(.6,.66,.05,28),M(0x2a2220,0,1),[0,.025,0]));
 for(let i=0;i<16;i++){const a=i/16*Math.PI*2,s=.17+.04*Math.sin(i*2.3);const rk=mesh(rockGeo(s,1,i*1.7,0),vc(.9),[Math.cos(a)*.8,s*.55,Math.sin(a)*.8],[0,-a,0],[1.1,.8,1]);g.add(rk);
  if(i%2===0){const pv=new T.Group();pv.rotation.y=-a;pv.add(mesh(new T.BoxGeometry(.012,.07,.02),basic(0x7fe8ff),[.8+s*.95,s*.6,0]));pv.add(mesh(new T.BoxGeometry(.012,.04,.02),basic(0x7fe8ff),[.8+s*.95,s*.6,.025],[0,0,.7]));g.add(pv)}}
 for(let i=0;i<5;i++){const pv=new T.Group();pv.rotation.y=i/5*Math.PI*2+.3;pv.add(mesh(logGeo(1.05,.075,i*3),vc(.85),[.24,.36,0],[0,0,.68]));g.add(pv)}
 [[0,.08,.32,1.4],[.1,.08,-.3,-1.3]].forEach((l,i)=>g.add(mesh(logGeo(1.0,.08,9+i),vc(.85),[l[0],l[1],l[2]],[0,l[3],Math.PI/2])));
 for(let i=0;i<30;i++){const a=i*2.4,r=.1+.4*hash(i,1,2);g.add(mesh(gem(.04+.03*hash(i,2,3)),M(0x3a1208,0,.6,{emissive:i%3?0xff4a10:0xffa030,emissiveIntensity:1.2}),[Math.cos(a)*r,.06,Math.sin(a)*r],null,[1,.6,1]))}
 const add=c=>basic(c,{transparent:true,opacity:.85,blending:T.AdditiveBlending,depthWrite:false});
 for(let i=0;i<7;i++){const a=i/7*Math.PI*2,r=i?.17:0,h=i?.6+.25*hash(i,3,1):1.2,w=i?.13:.22;
  [[1,0xff4a0a],[.7,0xff9a1f],[.42,0xfff0a0]].forEach(L=>g.add(mesh(flameGeo(h*L[0],w*L[0]+.015,2.8+i*.4,i),add(L[1]),[Math.cos(a)*r,.08,Math.sin(a)*r],[Math.sin(a)*.25*(i?1:0),0,-Math.cos(a)*.25*(i?1:0)])))}
 for(let i=0;i<12;i++)g.add(mesh(gem(.02),basic(i%2?0xffd27a:0xff8a2b),[Math.sin(i*1.7)*.35,1.0+hash(i,5,5)*.7,Math.cos(i*2.3)*.3]));
 const l=new T.PointLight(0xff8a2b,3,4);l.position.set(0,.55,0);g.add(l);return g}

/* ---- Bolsa de cintura medieval ---- */
function bag(){const g=grp(),lea=M(0x7a4a2a,0,.75),dark=M(0x553219,0,.7),thr=M(0xe8d3a8,0,.8),gold=pm('gold');
 const body=rbox(.82,.66,.36,.14,8),p=body.attributes.position;for(let i=0;i<p.count;i++){const y=p.getY(i),k=1+.07*(1-Math.pow(y/.33,2));p.setX(i,p.getX(i)*k);p.setZ(i,p.getZ(i)*k)}body.computeVertexNormals();
 g.add(mesh(body,lea,[0,.4,0]));
 g.add(mesh(rbox(.86,.07,.42,.03,4),dark,[0,.74,0]));
 const flap=shape([[-.42,.2],[.42,.2],[.42,0],[.4,-.24,0,-.27],[-.4,-.24,-.42,0]]);g.add(mesh(extrude(flap,.03,.014),dark,[0,.55,.215]));
 const fp=[];for(let k=0;k<=5;k++)fp.push([-.38,.16-k*.032]);for(let k=1;k<=10;k++){const t=k/10,u=1-t,x=u*u*-.38+2*u*t*-.36+t*t*0,y=u*u*0+2*u*t*-.215+t*t*-.235;fp.push([x,y])}
 for(let k=9;k>=0;k--){const q=fp[5+k+1];fp.push([-q[0],q[1]])}for(let k=5;k>=0;k--)fp.push([.38,.16-k*.032]);
 for(let k=0;k<fp.length-1;k+=1){const a1=fp[k],a2=fp[k+1],ang=Math.atan2(a2[1]-a1[1],a2[0]-a1[0]);g.add(mesh(new T.BoxGeometry(.026,.008,.008),thr,[(a1[0]+a2[0])/2,.55+(a1[1]+a2[1])/2,.248],[0,0,ang]))}
 g.add(mesh(new T.BoxGeometry(.09,.2,.02),dark,[0,.24,.205]));
 g.add(mesh(new T.TorusGeometry(.055,.014,4,4),gold,[0,.2,.22],[0,0,Math.PI/4]));g.add(mesh(new T.BoxGeometry(.012,.11,.012),gold,[0,.2,.23]));
 g.add(mesh(new T.BoxGeometry(.07,.12,.02),dark,[0,.33,.215]));
 [[-.36,.68],[.36,.68],[-.38,.16],[.38,.16]].forEach(q=>g.add(mesh(ico(.022),gold,[q[0],q[1],.2])));
 g.add(mesh(rbox(1.9,.17,.05,.02,3),M(0x3e2516,0,.7),[0,.62,-.25]));g.add(mesh(new T.TorusGeometry(.07,.016,4,4),gold,[-.8,.62,-.22],[0,0,Math.PI/4]));
 [-.22,.22].forEach(x=>g.add(mesh(rbox(.12,.3,.05,.02,3),dark,[x,.62,-.29])));
 const med=grp(mesh(new T.CylinderGeometry(.07,.07,.02,20),gold,null,[Math.PI/2,0,0]),mesh(extrude(shape(CROWNS),.01,.004),gold,[0,0,.012],null,[.22,.22,1]));med.position.set(.32,.08,.2);g.add(med);
 g.add(mesh(new T.TorusGeometry(.03,.008,4,10),gold,[.32,.17,.2]));
 g.rotation.y=-.3;return g}

/* ---- Rei-Monstro ---- */
function monster(){const g=grp(),pur=0x7b3fa0,lil=0xb27ad1,ivo=0xf2e6cf,tip=0x5a3a2a;
 const body=lathe([[0,0],[.42,.02],[.56,.2],[.6,.45],[.52,.75],[.42,.9],[.44,1.0],[.52,1.15],[.55,1.35],[.48,1.56],[.32,1.7],[0,1.74]],30);
 const p=body.attributes.position,col=[],cA=new T.Color(pur),cB=new T.Color(lil),v=new T.Vector3();
 for(let i=0;i<p.count;i++){v.fromBufferAttribute(p,i);v.z*=.86;if(v.y>1)v.z+=(v.y-1)*.08;p.setXYZ(i,v.x,v.y,v.z);const b=Math.max(0,Math.min(1,(v.z-.15)/.25))*Math.max(0,1-Math.pow((v.y-.45)/.38,2))*Math.max(0,1-Math.abs(v.x)/.42);const c=cA.clone().lerp(cB,b);col.push(c.r,c.g,c.b)}
 body.setAttribute('color',new T.Float32BufferAttribute(col,3));body.computeVertexNormals();g.add(mesh(body,vc(.55)));
 [-1,1].forEach(s=>{
  g.add(mesh(taper([[s*.3,1.6,0],[s*.52,1.85,-.05],[s*.62,2.15,-.15],[s*.5,2.38,-.3]],.11,0,{c0:ivo,c1:tip,ribs:5,seg:22}),vc(.45)));
  g.add(mesh(taper([[s*.44,1.42,0],[s*.66,1.5,-.05],[s*.8,1.6,-.12]],.08,0,{c0:pur,c1:lil,flat:.45}),vc(.6)));
  g.add(mesh(sph(.13,14,10),M(0x1b1420,0,.5),[s*.18,1.47,.38],[0,0,-s*.3],[1,.7,.55]));
  g.add(mesh(sph(.085,12,8),basic(0xffe14d),[s*.18,1.47,.43],[0,0,-s*.3],[1,.62,.5]));g.add(mesh(new T.BoxGeometry(.018,.1,.02),M(0x1b1420),[s*.18,1.47,.47]));
  g.add(mesh(taper([[s*.06,1.58,.45],[s*.18,1.64,.44],[s*.32,1.6,.38]],.035,.012,{c0:0x4a2266}),vc(.6)));
  g.add(mesh(taper([[s*.52,.95,0],[s*.72,.8,.05],[s*.8,.55,.1]],.16,.1,{c0:pur,seg:12}),vc(.55)));
  g.add(mesh(sph(.14,14,10),M(pur,0,.55),[s*.8,.48,.11]));
  for(let c=-1;c<=1;c++)g.add(mesh(taper([[s*.82+c*.06*s,.38,.15+c*.03],[s*.86+c*.07*s,.27,.2+c*.04],[s*.82+c*.08*s,.2,.27+c*.04]],.035,0,{c0:ivo,c1:tip,seg:8,rad:6}),vc(.4)));
  g.add(mesh(new T.SphereGeometry(.24,16,10,0,Math.PI*2,0,Math.PI/2),M(0x56607a,.75,.35),[s*.5,.98,-.02],[0,0,-s*.5],[.8,.8,.8]));
  for(let k=0;k<2;k++)g.add(mesh(new T.ConeGeometry(.05,.2,8),M(0xc9d6e3,.8,.3),[s*(.6+k*.08),1.18-k*.07,-.05+k*.08],[0,0,-s*(.7+k*.2)]));
  g.add(mesh(taper([[s*.24,.25,0],[s*.26,.1,.03]],.18,.15,{c0:pur,seg:6}),vc(.55)));
  g.add(mesh(sph(.2,14,10),M(0x5a2b78,0,.6),[s*.27,.06,.1],null,[1,.5,1.4]));
  for(let c=-1;c<=1;c++)g.add(mesh(new T.ConeGeometry(.035,.1,6),M(ivo,0,.4),[s*.27+c*.08,.05,.36],[Math.PI/2,0,0]))});
 g.add(mesh(sph(.2,16,10),M(0x2a0f1e,0,.6),[0,1.28,.37],null,[1.4,.45,.28]));
 for(let k=-2;k<=2;k++)g.add(mesh(new T.ConeGeometry(.03,.08,6),M(ivo,0,.4),[k*.07,1.33,.48],[Math.PI+.15,0,0]));
 [-1,1].forEach(s=>g.add(mesh(new T.ConeGeometry(.04,.14,6),M(ivo,0,.4),[s*.17,1.21,.48],[0,0,0])));
 g.add(mesh(new T.TorusGeometry(.57,.045,8,32),pm('gold'),[0,.62,0],[Math.PI/2,0,0],[1,.86,1]));
 g.add(mesh(extrude(shape(CROWNS),.03,.01),pm('gold'),[0,.62,.5],null,[.5,.5,1]));
 for(let k=0;k<4;k++)g.add(mesh(new T.ConeGeometry(.06,.18,8),M(lil,0,.5),[0,1.2-k*.22,-.42+k*.02],[-1.9,0,0]));
 g.add(mesh(taper([[0,.3,-.4],[0,.2,-.75],[.15,.25,-1.0],[.35,.45,-1.1]],.09,.03,{c0:pur,seg:18}),vc(.55)));
 g.add(mesh(extrude(shape([[0,.12],[.08,0],[0,-.12],[-.08,0]]),.03,.01),M(pur,0,.55),[.37,.5,-1.1],[0,1.2,.6]));
 const cape=new T.CylinderGeometry(.62,.85,1.15,28,6,true,Math.PI*.62,Math.PI*.76),cp=cape.attributes.position;
 for(let i=0;i<cp.count;i++){const y=cp.getY(i);if(y<-.5){const a=Math.atan2(cp.getX(i),cp.getZ(i));cp.setY(i,y+.12*Math.abs(Math.sin(a*9)))}}cape.computeVertexNormals();
 g.add(mesh(cape,M(0x8e1630,0,.7,{side:T.DoubleSide}),[0,.98,-.04]));
 const c=crown(true);c.scale.setScalar(.33);c.position.set(.05,1.78,0);c.rotation.z=-.14;g.add(c);return g}

/* ---- Herói chibi ---- */
function hero(){const g=grp(),sil=pm('silver'),skin=pm('skin'),hairC=0x5b3a1e,hairT=0x7a5230,red=pm('red');
 [-1,1].forEach(s=>{g.add(mesh(cap(.1,.18),M(0x3a3f4a,0,.6),[s*.13,.28,0]));g.add(mesh(sph(.13,14,10),pm('leather'),[s*.13,.08,.05],null,[1,.7,1.4]));
  g.add(mesh(sph(.15,12,8),sil,[s*.33,.92,0]));g.add(mesh(cap(.085,.22),sil,[s*.4,.68,.02],[0,0,s*.25]));g.add(mesh(ico(.09),pm('leather'),[s*.47,.48,.05]))});
 g.add(mesh(cap(.27,.22),sil,[0,.68,0]));g.add(mesh(sph(.24,18,12),M(...P.silver),[0,.74,.1],null,[1.05,.9,.6]));
 g.add(mesh(new T.TorusGeometry(.27,.045,8,24),pm('leather'),[0,.5,0],[Math.PI/2,0,0]));g.add(mesh(new T.BoxGeometry(.08,.07,.05),pm('gold'),[0,.5,.29]));
 g.add(mesh(new T.CylinderGeometry(.29,.36,.2,18,1,true),M(...P.silver,{side:T.DoubleSide}),[0,.4,0]));
 g.add(mesh(new T.TorusGeometry(.36,.02,6,24),pm('gold'),[0,.3,0],[Math.PI/2,0,0]));
 g.add(mesh(extrude(shape(CROWNS),.02,.008),pm('gold'),[0,.78,.27],[-.25,0,0],[.35,.35,1]));
 [-1,1].forEach(s=>{g.add(mesh(new T.TorusGeometry(.13,.022,6,18),pm('gold'),[s*.33,.88,0],[Math.PI/2,0,s*.5]));g.add(mesh(ico(.065),sil,[s*.13,.3,.09]))});
 g.add(mesh(new T.CylinderGeometry(.3,.48,.75,20,1,true,Math.PI*.65,Math.PI*.7),M(...P.red,{side:T.DoubleSide}),[0,.6,-.04]));
 g.add(mesh(sph(.42,18,12),skin,[0,1.32,0]));
 [-1,1].forEach(s=>{g.add(mesh(sph(.065,14,10),pm('dark'),[s*.14,1.3,.37],null,[.75,1,.45]));g.add(mesh(ico(.02),basic(0xffffff),[s*.14+.02,1.33,.4]));
  g.add(mesh(taper([[s*.07,1.42,.39],[s*.14,1.44,.39],[s*.21,1.42,.37]],.022,.012,{c0:hairC,seg:8,rad:6}),vc(.7)));g.add(mesh(ico(.07),skin,[s*.42,1.3,0],null,[.6,1,.8]))});
 g.add(mesh(new T.TorusGeometry(.06,.012,6,16,Math.PI),pm('dark'),[0,1.19,.4],[Math.PI,0,0]));
 g.add(mesh(new T.SphereGeometry(.45,24,12,0,Math.PI*2,0,Math.PI*.5),M(hairC,0,.7),[0,1.36,-.03],[-.25,0,0]));
 const locks=[[[-.05,1.78,.05],[-.18,1.7,.32],[-.26,1.52,.42]],[[.05,1.8,.05],[.08,1.72,.34],[.06,1.55,.45]],[[.12,1.78,0],[.28,1.68,.3],[.36,1.5,.36]],[[-.15,1.76,0],[-.34,1.62,.22],[-.42,1.42,.25]],
  [[.2,1.74,-.05],[.42,1.58,.1],[.47,1.36,.12]],[[-.25,1.7,-.1],[-.46,1.5,-.05],[-.47,1.28,.0]],[[0,1.8,-.1],[.05,1.68,-.4],[.02,1.42,-.48]],[[-.15,1.76,-.15],[-.25,1.6,-.42],[-.3,1.36,-.42]],[[.15,1.76,-.15],[.28,1.6,-.4],[.32,1.38,-.4]],[[0,1.82,0],[0,1.9,.15],[.05,1.84,.3]]];
 locks.forEach((l,i)=>g.add(mesh(taper(l,.1,.0,{c0:hairC,c1:hairT,seg:9,rad:6,flat:.7,pow:1.3}),vc(.7))));
 const sw=sword();sw.scale.setScalar(.42);sw.position.set(.5,.48,.12);sw.rotation.set(.3,0,-.2);g.add(sw);return g}

window.CFM={crownBlock,crown,potions,coins,campfire,sword,shield,helmet,tree,rocks,column,monster,hero,bag,smooth,bumpy};
})();
