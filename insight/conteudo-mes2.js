// Conteúdo do INSIGHT · Mês 2: O PAINEL DO SUPERVISOR
// Projeto do mês: um painel com as lojas, metas e quanto falta, feito do zero na Oficina (arquivo painel.html).
// Linguagem simples, comparações do mundo do Arnold (lojas, metas, futebol, luta, receitas).

window.CURSOS.forEach(c=>{if(c.id==='logica'){c.bio='Mês 2: o vendedor (JavaScript) chega! Variáveis, decisões, repetição e funções, montando o seu painel de supervisor.';c.aulas=32}});

window.POSTS.push(
 // ---------- SEMANA 5 · CAIXAS (div e class) ----------
 {id:'p1', curso:'site', tipo:'carrossel', titulo:'Mês 2: o seu painel', leg:'Começou o Mês 2! Agora você constrói o painel de supervisor: lojas, metas e quanto falta.', slides:[
  {emoji:'📊', h:'O projeto do <i>Mês 2</i>', p:'Um painel com as suas lojas: nome, meta, quanto vendeu e quanto falta. Igual ao que você confere toda semana, só que feito por você.'},
  {emoji:'📅', h:'O plano', p:'Semana 5: caixas e grade (HTML e CSS).<br>Semana 6: o vendedor chega (JavaScript).<br>Semana 7: números e metas.<br>Semana 8: a lista de lojas.'},
  {emoji:'🗂️', h:'Arquivo novo', p:'Na Oficina, o painel fica num arquivo separado: <b>painel.html</b>. O seu site continua guardado no <b>index.html</b>. Toque no nome do arquivo para trocar.'},
  {quiz:{q:'Onde fica o código do painel?', ops:['No mesmo arquivo do site','Num arquivo novo: painel.html'], ok:1, exp:'Isso! Cada projeto no seu arquivo, como cada loja com o seu caixa.'}}]},
 {id:'p2', curso:'site', tipo:'carrossel', titulo:'div: a caixa que guarda tudo', slides:[
  {emoji:'📦', h:'<i>div</i> é uma caixa', p:'Sozinha ela não aparece. Serve para AGRUPAR coisas, como uma caixa de estoque que junta os produtos de uma loja.', code:'<div>\n  <h2>Loja Centro</h2>\n  <p>Meta: R$ 10.000</p>\n</div>'},
  {emoji:'🏷️', h:'<i>class</i> é a etiqueta', p:'Você cola uma etiqueta na caixa para o CSS achar ela depois. Várias caixas podem ter a mesma etiqueta.', code:'<div class="card">...</div>'},
  {emoji:'🎯', h:'No CSS, a etiqueta tem <i>ponto</i>', p:'Para pintar todas as caixas com a etiqueta card, escreva um ponto antes: .card { }', code:'.card { background: white; }'}]},
 {id:'p3', curso:'site', tipo:'desafio', q:'Como o CSS acha as caixas com class="card"?', ops:['card { }','.card { }','#card { }'], ok:1, exp:'O ponto quer dizer "todas com essa etiqueta (class)". Sem o ponto, o CSS procura uma tag chamada card, que não existe.', dica:'Etiqueta (class) = ponto na frente.'},
 {id:'p4', curso:'site', tipo:'aovivo', titulo:'Um cartão de loja', code:'<style>\n.card{background:#fff;padding:16px;border-radius:14px;\nbox-shadow:0 4px 14px rgba(0,0,0,.12);margin:10px}\n.card h2{margin:0;color:#e30613}\n</style>\n<div class="card">\n  <h2>Loja Centro</h2>\n  <p>Meta: R$ 10.000</p>\n</div>', nota:'<b>.card h2</b> quer dizer: só o h2 que está DENTRO de um card. É como dizer "o goleiro do Inter", não qualquer goleiro.'},
 {id:'p5', curso:'site', tipo:'carrossel', titulo:'Grid: a escalação em campo', slides:[
  {emoji:'⚽', h:'<i>display: grid</i>', p:'Transforma uma caixa num campo com posições. Os cartões que estão dentro dela se arrumam sozinhos em colunas.'},
  {emoji:'📐', h:'Quantas colunas?', p:'grid-template-columns diz as colunas. 1fr 1fr = duas colunas do mesmo tamanho (fr = um pedaço do espaço).', code:'.painel {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}'},
  {emoji:'↔️', h:'<i>gap</i> é o espaço', p:'A distância entre os cartões, como o espaço entre os jogadores na formação.'}]},
 {id:'p6', curso:'site', tipo:'desafio', q:'O que "grid-template-columns: 1fr 1fr 1fr" faz?', ops:['3 colunas iguais','3 linhas iguais','Deixa o texto 3 vezes maior'], ok:0, exp:'Cada 1fr é uma coluna do mesmo tamanho. Três 1fr = três colunas, como três lojas lado a lado.', dica:'columns = colunas.'},
 {id:'p7', curso:'design', tipo:'curiosidade', emoji:'🃏', frente:'Por que quase todo app usa "cartões"?', verso:'Porque o olho entende uma caixa como UMA coisa só. Banco, Instagram e iFood usam cartões: cada cartão é um assunto. No seu painel, cada cartão é uma loja.'},

 // ---------- SEMANA 6 · O VENDEDOR CHEGA (JavaScript) ----------
 {id:'p8', curso:'logica', tipo:'carrossel', titulo:'O vendedor chegou: JavaScript', leg:'Semana 6! A loja já tem estrutura (HTML) e vitrine (CSS). Agora contratamos o vendedor.', slides:[
  {emoji:'🙋', h:'JavaScript = <i>o vendedor</i>', p:'Ele faz coisas acontecerem: muda um texto, faz uma conta, reage a um clique.'},
  {emoji:'📜', h:'Ele mora no <i>&lt;script&gt;</i>', p:'Todo código do vendedor fica entre <script> e </script>. Coloque no FIM do arquivo, depois das caixas, para ele já encontrar tudo pronto.', code:'<h1 id="titulo">Painel</h1>\n<script>\n  // o vendedor trabalha aqui\n</script>'},
  {emoji:'💬', h:'// é um bilhete', p:'Linha que começa com // é um comentário: o computador ignora. Serve para você deixar recado para você mesmo.'}]},
 {id:'p9', curso:'logica', tipo:'carrossel', titulo:'Variável: o armário com etiqueta', slides:[
  {emoji:'🗄️', h:'<i>let</i> cria um armário', p:'let nome = valor guarda uma coisa com um nome. Depois você pega pelo nome.', code:'let loja = "Loja Centro";\nlet meta = 10000;'},
  {emoji:'🔤', h:'Texto vai entre <i>aspas</i>', p:'"Loja Centro" é texto, por isso tem aspas. 10000 é número: sem aspas e sem ponto de milhar.'},
  {emoji:'🔁', h:'Pode trocar', p:'let deixa trocar o valor depois: meta = 12000; Já const é um armário trancado: não troca.', code:'const empresa = "Indus";\nlet meta = 10000;\nmeta = 12000; // pode'},
  {quiz:{q:'Qual está certo para guardar o número 5000?', ops:['let meta = "5.000"','let meta = 5000'], ok:1, exp:'Número sem aspas e sem ponto. Com aspas vira texto e não dá para fazer conta.'}}]},
 {id:'p10', curso:'logica', tipo:'desafio', q:'Em  let vendido = 7500;  o que é "vendido"?', code:'let vendido = 7500;', ops:['O valor','O nome do armário','Um erro'], ok:1, exp:'vendido é o NOME (a etiqueta). 7500 é o que fica guardado dentro.', dica:'O nome vem logo depois do let.'},
 {id:'p11', curso:'logica', tipo:'carrossel', titulo:'id: o crachá de um elemento', slides:[
  {emoji:'🪪', h:'<i>id</i> é um crachá único', p:'Diferente da class (etiqueta que várias caixas usam), o id é único: só um elemento tem aquele crachá.', code:'<p id="status">...</p>'},
  {emoji:'🔎', h:'O vendedor acha pelo crachá', p:'document.getElementById("status") encontra o elemento com aquele id.'},
  {emoji:'✍️', h:'E troca o texto', p:'.textContent = "..." escreve um texto novo lá dentro.', code:'document.getElementById("status").textContent = "Meta batida!";'}]},
 {id:'p12', curso:'logica', tipo:'aovivo', titulo:'O vendedor mudando o texto', code:'<h2 id="titulo">...</h2>\n<script>\n  let loja = "Loja Centro";\n  document.getElementById("titulo").textContent = loja;\n</script>', nota:'O h2 começa com "...", mas o vendedor escreve o nome da loja lá dentro. Mude o texto da variável na Oficina e veja trocar.'},
 {id:'p13', curso:'logica', tipo:'carrossel', titulo:'Botão: o cliente chama', slides:[
  {emoji:'🔔', h:'<i>onclick</i>', p:'onclick diz o que fazer quando alguém toca no botão. É o cliente chamando o vendedor.', code:'<button onclick="alert(\'Oi!\')">Chamar</button>'},
  {emoji:'📋', h:'<i>function</i> é uma receita', p:'Você escreve os passos UMA vez, dá um nome, e chama sempre que precisar. Como a receita do bolo: escreve uma vez, faz várias.', code:'function atualizar() {\n  document.getElementById("status").textContent = "Atualizado!";\n}'},
  {emoji:'🤝', h:'Juntando os dois', p:'O botão chama a receita pelo nome, com parênteses no fim.', code:'<button onclick="atualizar()">Atualizar</button>'}]},
 {id:'p14', curso:'logica', tipo:'desafio', q:'Como o botão chama a função "mostrar"?', ops:['onclick="mostrar"','onclick="mostrar()"','onclick=mostrar[]'], ok:1, exp:'Os parênteses () são o "faça agora". Sem eles, você só falou o nome da receita, mas não mandou fazer.', dica:'Chamar = nome + ().'},
 {id:'p15', curso:'logica', tipo:'curiosidade', emoji:'☕', frente:'JavaScript tem a ver com Java?', verso:'Nada! O nome foi marketing em 1995, porque o Java estava na moda. É como "Inter" de Porto Alegre e "Inter" de Milão: mesmo nome, times diferentes.'},

 // ---------- SEMANA 7 · NÚMEROS E METAS ----------
 {id:'p16', curso:'logica', tipo:'carrossel', titulo:'Contas: o vendedor calcula', leg:'Semana 7: o painel começa a pensar com números.', slides:[
  {emoji:'➕', h:'As 4 operações', p:'+ soma, - tira, * multiplica, / divide. Igual calculadora.', code:'let falta = meta - vendido;'},
  {emoji:'💯', h:'Porcentagem', p:'Quanto da meta já foi: vendido dividido pela meta, vezes 100.', code:'let pct = vendido / meta * 100;'},
  {emoji:'✂️', h:'Arredondar', p:'Math.round tira as casas depois da vírgula: 74.666 vira 75.', code:'let pct = Math.round(vendido / meta * 100);'}]},
 {id:'p17', curso:'logica', tipo:'desafio', q:'meta = 10000 e vendido = 2500. Quanto dá vendido / meta * 100?', ops:['25','4','2500'], ok:0, exp:'2500 / 10000 = 0,25. Vezes 100 = 25. A loja fez 25% da meta.', dica:'Divida primeiro, depois multiplique por 100.'},
 {id:'p18', curso:'logica', tipo:'carrossel', titulo:'if: o juiz decide', slides:[
  {emoji:'🧑‍⚖️', h:'<i>if</i> = se', p:'SE a condição for verdade, faz o que está nas chaves.', code:'if (pct >= 100) {\n  status = "Meta batida!";\n}'},
  {emoji:'↩️', h:'<i>else</i> = senão', p:'Se não for verdade, faz o outro caminho. Como o juiz: gol ou não foi gol.', code:'if (pct >= 100) {\n  status = "Meta batida!";\n} else {\n  status = "Faltam " + falta;\n}'},
  {emoji:'⚖️', h:'Comparar', p:'>= maior ou igual · <= menor ou igual · === igual · !== diferente.'}]},
 {id:'p19', curso:'logica', tipo:'desafio', q:'pct vale 80. O que acontece aqui?', code:'if (pct >= 100) {\n  msg = "Bateu";\n} else {\n  msg = "Ainda não";\n}', ops:['msg fica "Bateu"','msg fica "Ainda não"','Dá erro'], ok:1, exp:'80 não é maior ou igual a 100, então o juiz manda para o else.', dica:'80 >= 100 é verdade ou mentira?'},
 {id:'p20', curso:'logica', tipo:'aovivo', titulo:'Juntando texto e número', code:'<p id="st"></p>\n<script>\n  let meta = 10000, vendido = 7600;\n  let pct = Math.round(vendido / meta * 100);\n  document.getElementById("st").textContent = "Loja Centro: " + pct + "% da meta";\n</script>', nota:'O <b>+</b> entre texto e número COLA os dois: "Loja Centro: " + 76 + "% da meta". Como montar uma frase com peças.'},
 {id:'p21', curso:'logica', tipo:'curiosidade', emoji:'🥊', frente:'Por que três sinais de igual (===)?', verso:'= é "guardar" (coloca no armário). === é "comparar" (são iguais?). Na luta: um é o golpe, o outro é o juiz olhando o placar. Misturar os dois é um dos bugs mais comuns de iniciante.'},

 // ---------- SEMANA 8 · A LISTA DE LOJAS ----------
 {id:'p22', curso:'logica', tipo:'carrossel', titulo:'Lista (array): a escalação', leg:'Semana 8: em vez de uma loja, todas as suas lojas.', slides:[
  {emoji:'📋', h:'Colchetes = <i>lista</i>', p:'[ ] guarda várias coisas em ordem, separadas por vírgula.', code:'let lojas = ["Centro", "Shopping", "Norte"];'},
  {emoji:'0️⃣', h:'Começa do zero', p:'A primeira é a posição 0. lojas[0] é "Centro". Programador conta a partir do zero, como o goleiro de camisa 1 sendo o primeiro da lista... só que começando no 0.'},
  {emoji:'🔢', h:'Quantas tem?', p:'lojas.length diz o tamanho da lista.'}]},
 {id:'p23', curso:'logica', tipo:'desafio', q:'Em  let lojas = ["Centro", "Shopping", "Norte"];  o que é lojas[1]?', ops:['"Centro"','"Shopping"','"Norte"'], ok:1, exp:'Posição 0 = Centro, 1 = Shopping, 2 = Norte. A contagem começa no zero.', dica:'Comece contando do 0.'},
 {id:'p24', curso:'logica', tipo:'carrossel', titulo:'Objeto: a ficha da loja', slides:[
  {emoji:'🗂️', h:'Chaves { } = <i>ficha</i>', p:'Um objeto junta várias informações de UMA coisa, cada uma com nome.', code:'let loja = { nome: "Centro", meta: 10000, vendido: 7600 };'},
  {emoji:'🔍', h:'Pegar um campo', p:'Use o ponto: loja.nome, loja.meta.', code:'loja.meta // 10000'},
  {emoji:'📚', h:'Lista de fichas', p:'O painel de verdade é uma lista de fichas: uma para cada loja.', code:'let lojas = [\n  { nome: "Centro", meta: 10000, vendido: 7600 },\n  { nome: "Shopping", meta: 15000, vendido: 15400 }\n];'}]},
 {id:'p25', curso:'logica', tipo:'carrossel', titulo:'Repetição: um cartão para cada loja', slides:[
  {emoji:'🔁', h:'<i>for...of</i>', p:'Repete os mesmos passos para cada item da lista. É você passando de loja em loja na visita.', code:'for (let loja of lojas) {\n  // faz isso para cada loja\n}'},
  {emoji:'🧩', h:'<i>innerHTML +=</i>', p:'Acrescenta HTML dentro de uma caixa. A cada volta, um cartão novo.', code:'for (let loja of lojas) {\n  painel.innerHTML += "<div class=\'card\'>" + loja.nome + "</div>";\n}'},
  {quiz:{q:'Se a lista tem 4 lojas, quantas vezes o for repete?', ops:['1','4'], ok:1, exp:'Uma volta para cada item. 4 lojas = 4 voltas = 4 cartões.'}}]},
 {id:'p26', curso:'logica', tipo:'aovivo', titulo:'O painel montado sozinho', code:'<style>.p{display:grid;grid-template-columns:1fr 1fr;gap:8px}.c{background:#fff;padding:10px;border-radius:10px;box-shadow:0 2px 8px #0002}</style>\n<div class="p" id="painel"></div>\n<script>\n  let lojas = [\n    {nome:"Centro", meta:10000, vendido:7600},\n    {nome:"Shopping", meta:15000, vendido:15400}\n  ];\n  let painel = document.getElementById("painel");\n  for (let l of lojas) {\n    let pct = Math.round(l.vendido / l.meta * 100);\n    painel.innerHTML += "<div class=\'c\'><b>" + l.nome + "</b><br>" + pct + "%</div>";\n  }\n</script>', nota:'Duas lojas na lista = dois cartões. Coloque uma terceira loja na lista e o painel cresce sozinho. Esse é o poder do vendedor.'},
 {id:'p27', curso:'logica', tipo:'carrossel', titulo:'input: o painel escuta você', slides:[
  {emoji:'⌨️', h:'<i>&lt;input&gt;</i>', p:'Uma caixinha para digitar. Com type="number", só aceita número.', code:'<input id="nova" type="number" placeholder="Nova meta">'},
  {emoji:'👂', h:'Ler o que foi digitado', p:'.value pega o que a pessoa escreveu. Vem como TEXTO; Number() transforma em número para fazer conta.', code:'let nova = Number(document.getElementById("nova").value);'},
  {emoji:'🔄', h:'Botão + input', p:'O botão chama uma função que lê o input, recalcula e mostra de novo. É o painel conversando com você.'}]},
 {id:'p28', curso:'bastidores', tipo:'curiosidade', emoji:'👁️', frente:'O SUPER VISÃO usa isso?', verso:'Sim! As metas e lojas do SUPER VISÃO são listas de fichas (arrays de objetos), e os cartões da tela são montados com repetição, igualzinho ao que você está fazendo no Mês 2. Você está aprendendo o motor do seu próprio app.'}
);

Object.assign(window.ALT,{
 p2:[{e:'📦',t:'Jeito estoque',x:'div é a caixa de papelão. class é a etiqueta escrita "Loja Centro". O CSS procura todas as caixas com aquela etiqueta.'}],
 p9:[{e:'🧃',t:'Jeito geladeira',x:'Variável é um pote com nome na tampa. "suco" guarda o suco; quando precisar, você pega pelo nome, sem lembrar onde colocou.'}],
 p13:[{e:'🍰',t:'Jeito receita',x:'function é a receita escrita no caderno. onclick="bolo()" é alguém pedindo: "faz o bolo agora". Os parênteses são o "agora".'}],
 p18:[{e:'🚦',t:'Jeito semáforo',x:'SE estiver verde, passa. SENÃO, para. O if só escolhe um dos dois caminhos.'}],
 p25:[{e:'🚶',t:'Jeito visita',x:'Na visita, você repete o mesmo roteiro em cada loja: confere meta, vê a equipe, anota. O for faz o mesmo roteiro para cada item da lista.'}]
});

// ---------- MISSÕES DO MÊS 2 (arquivo painel.html) ----------
(function(){
 const js=c=>((c.match(/<script>([\s\S]*?)(<\/script>|$)/i)||[])[1]||'').replace(/\/\/[^\n]*/g,'');
 const html=c=>c.replace(/<script>[\s\S]*?(<\/script>|$)/gi,'').replace(/<style>[\s\S]*?(<\/style>|$)/gi,'');
 const css=c=>(c.match(/<style>([\s\S]*?)(<\/style>|$)/gi)||[]).join('\n');
 const P='painel';
 window.MISSOES.push(
  {id:'m19', proj:P, semana:5, titulo:'A primeira caixa', pede:'Crie uma <div class="card"> com um <h2> (nome de uma loja) e um <p> (a meta) dentro.', inicio:'<!-- painel.html: o seu painel de supervisor -->\n', testa:c=>/<div\s+class=["']card["']\s*>[\s\S]*<h2>[\s\S]*\S[\s\S]*<\/h2>[\s\S]*<p>[\s\S]*\S[\s\S]*<\/p>[\s\S]*<\/div>/i.test(html(c))},
  {id:'m20', proj:P, semana:5, titulo:'Três lojas', pede:'Faça 3 cards (3 caixas com class="card"), um para cada loja.', testa:c=>(html(c).match(/<div\s+class=["']card["']/gi)||[]).length>=3},
  {id:'m21', proj:P, semana:5, titulo:'Cartão bonito', pede:'No <style>, deixe o card com fundo, respiro e cantos redondos: .card { background: ...; padding: ...; border-radius: ...; }', testa:c=>{const s=css(c);return /\.card\s*\{[^}]*background/i.test(s)&&/\.card\s*\{[^}]*padding/i.test(s)&&/\.card\s*\{[^}]*border-radius/i.test(s)}},
  {id:'m22', proj:P, semana:5, titulo:'Escalação em campo', pede:'Coloque os 3 cards dentro de uma <div class="painel"> e faça a grade: .painel { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }', testa:c=>/<div\s+class=["']painel["']/i.test(html(c))&&/\.painel\s*\{[^}]*display\s*:\s*grid/i.test(css(c))&&/\.painel\s*\{[^}]*grid-template-columns/i.test(css(c))},

  {id:'m23', proj:P, semana:6, titulo:'Contratando o vendedor', pede:'No fim do arquivo, abra um <script> e crie uma variável: let loja = "Loja Centro";', testa:c=>/let\s+[a-zA-Z_]\w*\s*=\s*["'][^"']+["']/.test(js(c))},
  {id:'m24', proj:P, semana:6, titulo:'Crachá', pede:'Dê um id para um título (ex.: <h1 id="titulo">) e faça o vendedor escrever nele: document.getElementById("titulo").textContent = loja;', testa:c=>{const j=js(c);const m=j.match(/getElementById\(\s*["']([\w-]+)["']\s*\)\s*\.textContent\s*=/);return !!m&&new RegExp('id=["\']'+m[1]+'["\']').test(html(c))}},
  {id:'m25', proj:P, semana:6, titulo:'A receita', pede:'Escreva uma function (ex.: function atualizar() { ... }) que troca um texto com getElementById e textContent.', testa:c=>/function\s+\w+\s*\([^)]*\)\s*\{[\s\S]*getElementById[\s\S]*textContent[\s\S]*\}/.test(js(c))},
  {id:'m26', proj:P, semana:6, titulo:'O cliente chama', pede:'Crie um <button onclick="atualizar()"> que chama a sua function. Toque nele no Site para testar.', testa:c=>{const b=html(c).match(/<button[^>]*onclick=["']\s*(\w+)\s*\(\s*\)/i);return !!b&&new RegExp('function\\s+'+b[1]+'\\s*\\(').test(js(c))}},

  {id:'m27', proj:P, semana:7, titulo:'Os números', pede:'No script, crie duas variáveis de NÚMERO (sem aspas): let meta = 10000; e let vendido = 7600;', testa:c=>(js(c).match(/let\s+\w+\s*=\s*\d+(\.\d+)?\s*[;,\n]/g)||[]).length>=2},
  {id:'m28', proj:P, semana:7, titulo:'Quanto falta', pede:'Calcule e mostre quanto falta: let falta = meta - vendido; e escreva na tela com textContent.', testa:c=>{const j=js(c);return /=\s*\w+\s*-\s*\w+/.test(j)&&/textContent\s*=/.test(j)}},
  {id:'m29', proj:P, semana:7, titulo:'A porcentagem', pede:'Calcule a % da meta com Math.round: let pct = Math.round(vendido / meta * 100); e mostre "76%" na tela.', testa:c=>/Math\.round\(\s*\w+\s*\/\s*\w+\s*\*\s*100\s*\)/.test(js(c))},
  {id:'m30', proj:P, semana:7, titulo:'O juiz', pede:'Use if / else: se pct >= 100, mostre "Meta batida!"; senão, mostre quanto falta.', testa:c=>/if\s*\([^)]*>=\s*100[^)]*\)\s*\{[\s\S]*\}\s*else\s*\{[\s\S]*\}/.test(js(c))},

  {id:'m31', proj:P, semana:8, titulo:'A lista', pede:'Crie uma lista de lojas com fichas: let lojas = [ {nome: "Centro", meta: 10000, vendido: 7600}, ... ] com pelo menos 3 lojas.', testa:c=>{const j=js(c);const a=j.match(/let\s+\w+\s*=\s*\[([\s\S]*?)\]\s*;?/);return !!a&&(a[1].match(/\{[^}]*nome\s*:/g)||[]).length>=3}},
  {id:'m32', proj:P, semana:8, titulo:'Um cartão para cada', pede:'Apague os cards escritos à mão e deixe a div painel vazia com id="painel". Com for (let l of lojas) { ... innerHTML += ... } o vendedor monta os cartões.', testa:c=>/for\s*\(\s*(let|const)\s+\w+\s+of\s+\w+\s*\)\s*\{[\s\S]*innerHTML\s*\+=/.test(js(c))&&/id=["']painel["']/i.test(html(c))},
  {id:'m33', proj:P, semana:8, titulo:'% em cada loja', pede:'Dentro do for, calcule a % de cada loja (l.vendido / l.meta * 100) e mostre no cartão.', testa:c=>/for\s*\([\s\S]*\)\s*\{[\s\S]*Math\.round\(\s*\w+\.vendido\s*\/\s*\w+\.meta\s*\*\s*100\s*\)[\s\S]*innerHTML/.test(js(c))},
  {id:'m34', proj:P, semana:8, titulo:'O painel escuta', pede:'Crie um <input type="number" id="..."> e um botão que lê o valor com Number(...value) e mostra o resultado na tela.', testa:c=>/<input[^>]*type=["']number["']/i.test(html(c))&&/Number\(\s*document\.getElementById\(\s*["'][\w-]+["']\s*\)\.value\s*\)/.test(js(c))},
  {id:'m35', proj:P, semana:8, titulo:'Revisão do Mês 2', pede:'Painel com ZERO erros no botão Revisar e todas as missões do mês no lugar. Depois, poste no perfil!', testa:c=>typeof revisar==='function'&&revisar(c).filter(x=>x.g==='erro').length===0&&window.MISSOES.filter(m=>m.proj==='painel'&&m.id!=='m35').every(m=>m.testa(c)), dica:'Toque em Revisar e conserte de cima para baixo. Erro comum no JavaScript: esquecer de fechar uma chave } ou um parêntese ).'}
 );
 Object.assign(window.APOIO,{
  m19:{estude:['p1','p2','p4'],dica:'Abre <div class="card">, coloca <h2>Loja Centro</h2> e <p>Meta: R$ 10.000</p>, fecha </div>.'},
  m20:{estude:['p2'],dica:'Copie o card inteiro (do <div> até o </div>) e cole mais duas vezes, trocando o nome das lojas.'},
  m21:{estude:['p3','p4'],dica:'.card { background: white; padding: 16px; border-radius: 14px; } — lembre do PONTO antes de card.'},
  m22:{estude:['p5','p6'],dica:'Coloque <div class="painel"> antes do primeiro card e </div> depois do último. No style: .painel { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }'},
  m23:{estude:['p8','p9','p10'],dica:'No fim: <script> na primeira linha, let loja = "Loja Centro"; na segunda, </script> na terceira.'},
  m24:{estude:['p11','p12'],dica:'O id do HTML e o que vai entre aspas no getElementById têm que ser IGUAIS, letra por letra.'},
  m25:{estude:['p13'],dica:'function atualizar() { document.getElementById("titulo").textContent = "Atualizado!"; }'},
  m26:{estude:['p13','p14'],dica:'<button onclick="atualizar()">Atualizar</button> — o nome tem que ser igual ao da function, com () no fim.'},
  m27:{estude:['p9','p16'],dica:'Número vai sem aspas e sem ponto de milhar: let meta = 10000;'},
  m28:{estude:['p16','p20'],dica:'let falta = meta - vendido; depois document.getElementById("st").textContent = "Faltam R$ " + falta;'},
  m29:{estude:['p16','p17','p20'],dica:'let pct = Math.round(vendido / meta * 100); e depois mostre: ... .textContent = pct + "%";'},
  m30:{estude:['p18','p19','p21'],dica:'if (pct >= 100) { ...textContent = "Meta batida!"; } else { ...textContent = "Faltam R$ " + falta; }'},
  m31:{estude:['p22','p23','p24'],dica:'Cada loja é uma ficha { } com nome, meta e vendido, separadas por vírgula, tudo dentro de [ ].'},
  m32:{estude:['p25','p26'],dica:'let painel = document.getElementById("painel"); for (let l of lojas) { painel.innerHTML += "<div class=\'card\'>" + l.nome + "</div>"; }'},
  m33:{estude:['p26'],dica:'Dentro do for: let pct = Math.round(l.vendido / l.meta * 100); e cole o pct no texto do cartão.'},
  m34:{estude:['p27'],dica:'<input id="nova" type="number"> e na function: let nova = Number(document.getElementById("nova").value);'}
 });
 window.MISSOES.forEach(m=>{if(m.proj===P)Object.assign(m,window.APOIO[m.id]||{})});
})();

window.PROJETOS&&window.PROJETOS.push({id:'painelsup', kick:'MÊS 2 · PROJETO', hl:'O vendedor <em>chegou.</em>', est:'light', tag:'Feito por mim, com JavaScript', nome:'Painel do supervisor', tipo:'estudos', emoji:'📊', cor:'#d62976', desc:'O projeto do Mês 2: lojas, metas e porcentagem, montados pelo JavaScript.', status:'Mês 2', oficina:true});
