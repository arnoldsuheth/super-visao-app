// Conteúdo do INSIGHT · Mês 3: O PAINEL DE VERDADE
// Mesmo arquivo do Mês 2 (painel.html). Agora o painel vira um app de verdade:
// funções, formulário para adicionar lojas, dados que ficam guardados, ordem e cores.

window.POSTS.push(
 // ---------- SEMANA 9 · FUNÇÕES DE VERDADE ----------
 {id:'q1', curso:'logica', tipo:'carrossel', titulo:'Mês 3: o painel de verdade', leg:'Começou o Mês 3! O painel do Mês 2 vira um app que você usaria no trabalho.', slides:[
  {emoji:'🏗️', h:'O que muda no <i>Mês 3</i>', p:'Você vai poder ADICIONAR lojas pelo próprio painel, os dados ficam GUARDADOS mesmo fechando, e o painel ORDENA e COLORE as lojas sozinho.'},
  {emoji:'📅', h:'O plano', p:'Semana 9: funções de verdade.<br>Semana 10: o painel escuta (formulário).<br>Semana 11: guardar os dados.<br>Semana 12: ordenar e colorir.'},
  {emoji:'📁', h:'Mesmo arquivo', p:'Continua no <b>painel.html</b>. Você vai melhorar o que já fez, como reformar uma loja sem fechar as portas.'}]},
 {id:'q2', curso:'logica', tipo:'carrossel', titulo:'Função que recebe e devolve', slides:[
  {emoji:'📥', h:'Parâmetro = o que <i>entra</i>', p:'A função pode receber uma informação para trabalhar. É como o liquidificador: você coloca a fruta.', code:'function pct(loja) {\n  // loja é o que entrou\n}'},
  {emoji:'📤', h:'<i>return</i> = o que <i>sai</i>', p:'return devolve o resultado para quem chamou. O liquidificador devolve o suco.', code:'function pct(loja) {\n  return Math.round(loja.vendido / loja.meta * 100);\n}'},
  {emoji:'🔁', h:'Usar quantas vezes quiser', p:'Agora em qualquer lugar: pct(loja). Escreveu uma vez, usa sempre.', code:'let p = pct(lojas[0]); // 76'},
  {quiz:{q:'O que o return faz?', ops:['Mostra na tela','Devolve o resultado para quem chamou'], ok:1, exp:'Isso! return entrega o valor. Mostrar na tela é com textContent ou innerHTML.'}}]},
 {id:'q3', curso:'logica', tipo:'desafio', q:'O que aparece em x?', code:'function dobro(n) {\n  return n * 2;\n}\nlet x = dobro(5);', ops:['5','10','dobro'], ok:1, exp:'O 5 entra no n, a função devolve 5 × 2 = 10, e o 10 vai para o x.', dica:'Siga o caminho: o 5 entra, o que sai?'},
 {id:'q4', curso:'logica', tipo:'carrossel', titulo:'Crase: texto com buracos', slides:[
  {emoji:'🧩', h:'Template string', p:'Com a crase ( ` ) você escreve o texto inteiro e coloca as variáveis dentro de ${ }. Bem mais fácil que ficar somando com +.', code:'let txt = `${loja.nome}: ${pct(loja)}% da meta`;'},
  {emoji:'📄', h:'Pode quebrar linha', p:'Dentro da crase dá para escrever HTML em várias linhas, igual você escreve no arquivo.', code:'painel.innerHTML += `\n  <div class="card">\n    <h2>${loja.nome}</h2>\n  </div>`;'},
  {emoji:'⌨️', h:'Onde fica a crase?', p:'No teclado do PC, é a tecla do acento agudo/crase, junto com o Shift ou sozinha. No celular, segure o apóstrofo.'}]},
 {id:'q5', curso:'logica', tipo:'desafio', q:'Qual destes escreve "Centro: 76%" usando crase?', ops:['`${nome}: ${p}%`','"${nome}: ${p}%"','`nome: p%`'], ok:0, exp:'Só com crase o ${ } funciona. Com aspas normais, sai escrito ${nome} igualzinho. E sem ${ }, sai a palavra "nome" em vez do valor.', dica:'Crase + ${ } = buraco que recebe o valor.'},
 {id:'q6', curso:'logica', tipo:'aovivo', titulo:'Uma função que monta o cartão', code:'<div id="painel"></div>\n<script>\n  function cartao(l) {\n    let p = Math.round(l.vendido / l.meta * 100);\n    return `<p><b>${l.nome}</b>: ${p}%</p>`;\n  }\n  let lojas = [{nome:"Centro",meta:10000,vendido:7600},{nome:"Norte",meta:8000,vendido:8400}];\n  for (let l of lojas) {\n    document.getElementById("painel").innerHTML += cartao(l);\n  }\n</script>', nota:'A função <b>cartao</b> recebe uma loja e DEVOLVE o HTML pronto. O for só chama ela. Cada peça faz uma coisa: isso é programar organizado.'},
 {id:'q7', curso:'logica', tipo:'curiosidade', emoji:'🥋', frente:'Por que separar em funções?', verso:'Na luta, você treina cada golpe separado até ficar perfeito, depois junta na luta. Função é isso: cada golpe (calcular %, montar cartão, mostrar total) treinado sozinho. Se der erro, você sabe qual golpe consertar.'},

 // ---------- SEMANA 10 · O PAINEL ESCUTA (formulário) ----------
 {id:'q8', curso:'logica', tipo:'carrossel', titulo:'Formulário: o painel recebe lojas', leg:'Semana 10: você vai cadastrar lojas pelo próprio painel.', slides:[
  {emoji:'📝', h:'Os campos', p:'Um input para cada informação: nome, meta e vendido.', code:'<input id="nome" placeholder="Nome da loja">\n<input id="meta" type="number" placeholder="Meta">\n<input id="vendido" type="number" placeholder="Vendido">\n<button onclick="adicionar()">Adicionar</button>'},
  {emoji:'📦', h:'push: coloca na lista', p:'lojas.push(novaLoja) põe uma ficha nova no FIM da lista. Como chegar mais um jogador no banco de reservas.', code:'lojas.push({ nome: n, meta: m, vendido: v });'},
  {emoji:'🔄', h:'Desenhar de novo', p:'Depois de mudar a lista, chame a função que monta o painel. Ela limpa e desenha tudo outra vez.', code:'function montar() {\n  painel.innerHTML = "";\n  for (let l of lojas) { painel.innerHTML += cartao(l); }\n}'}]},
 {id:'q9', curso:'logica', tipo:'desafio', q:'Por que montar() começa com painel.innerHTML = ""?', ops:['Para apagar os cartões antigos antes de desenhar de novo','Para dar erro','Para deixar o fundo branco'], ok:0, exp:'Sem limpar, cada vez que você chama montar() os cartões se repetem: 3, depois 6, depois 9… Limpar primeiro garante só os da lista.', dica:'O que aconteceria se desenhasse por cima?'},
 {id:'q10', curso:'logica', tipo:'carrossel', titulo:'Tirar uma loja da lista', slides:[
  {emoji:'🗑️', h:'<i>filter</i>: fica quem passa', p:'filter cria uma lista nova só com quem passa no teste. Para remover a loja "Norte", fica todo mundo que NÃO é Norte.', code:'lojas = lojas.filter(l => l.nome !== "Norte");'},
  {emoji:'➡️', h:'A setinha =>', p:'l => l.nome !== "Norte" é uma função curtinha: recebe l e devolve verdadeiro ou falso. É o juiz da peneira.'},
  {emoji:'🔢', h:'Pelo número', p:'Também dá para tirar pela posição na lista: lojas.splice(i, 1) tira 1 item na posição i.', code:'function remover(i) {\n  lojas.splice(i, 1);\n  montar();\n}'}]},
 {id:'q11', curso:'logica', tipo:'desafio', q:'O que sobra em nums?', code:'let nums = [5, 12, 3, 20];\nnums = nums.filter(n => n > 4);', ops:['[5, 12, 20]','[3]','[12, 20]'], ok:0, exp:'Fica quem é maior que 4: 5, 12 e 20. O 3 é peneirado.', dica:'Teste cada número: ele é maior que 4?'},
 {id:'q12', curso:'logica', tipo:'carrossel', titulo:'Conferir antes de salvar', slides:[
  {emoji:'🛑', h:'Campo vazio?', p:'Se o nome estiver vazio, não adiciona. return sozinho sai da função na hora, como o árbitro parando a jogada.', code:'if (nome === "") {\n  alert("Escreva o nome da loja");\n  return;\n}'},
  {emoji:'🔢', h:'Número de verdade?', p:'Number("abc") vira NaN (não é número). isNaN confere isso.', code:'if (isNaN(meta) || meta <= 0) { return; }'},
  {quiz:{q:'O que o return sozinho faz dentro do if?', ops:['Para a função ali mesmo','Repete a função'], ok:0, exp:'Isso! Ele sai da função, e nada abaixo dele roda.'}}]},
 {id:'q13', curso:'logica', tipo:'aovivo', titulo:'Adicionando lojas ao vivo', code:'<input id="n" placeholder="Loja"> <button onclick="add()">+</button>\n<ul id="lista"></ul>\n<script>\n  let lojas = ["Centro"];\n  function montar() {\n    let ul = document.getElementById("lista");\n    ul.innerHTML = "";\n    for (let l of lojas) { ul.innerHTML += `<li>${l}</li>`; }\n  }\n  function add() {\n    let n = document.getElementById("n").value;\n    if (n === "") return;\n    lojas.push(n);\n    montar();\n  }\n  montar();\n</script>', nota:'Escreva o nome de uma loja e toque no + (aqui funciona!). A lista cresce porque o push coloca na lista e o montar() desenha de novo.'},
 {id:'q14', curso:'design', tipo:'curiosidade', emoji:'🧾', frente:'Por que formulário bom tem pouco campo?', verso:'Cada campo a mais é um motivo para a pessoa desistir. Peça só o essencial (nome, meta, vendido) e deixe o resto para depois. No seu painel, 3 campos bastam.'},

 // ---------- SEMANA 11 · GUARDAR OS DADOS ----------
 {id:'q15', curso:'logica', tipo:'carrossel', titulo:'localStorage: a gaveta do navegador', leg:'Semana 11: fechou o painel, as lojas continuam lá.', slides:[
  {emoji:'🗄️', h:'Uma gaveta com etiqueta', p:'O navegador tem uma gaveta onde o site guarda texto. Fecha a aba, desliga o celular: continua lá.', code:'localStorage.setItem("nome", "Arnold");\nlocalStorage.getItem("nome"); // "Arnold"'},
  {emoji:'📦', h:'Só cabe TEXTO', p:'A gaveta só guarda texto. Para guardar a lista de lojas, transforme em texto com JSON.stringify.', code:'localStorage.setItem("lojas", JSON.stringify(lojas));'},
  {emoji:'📤', h:'E de volta', p:'JSON.parse transforma o texto em lista de novo.', code:'let lojas = JSON.parse(localStorage.getItem("lojas")) || [];'},
  {quiz:{q:'Por que usar JSON.stringify?', ops:['Porque a gaveta só guarda texto','Para deixar mais rápido'], ok:0, exp:'Exato! A lista vira texto para entrar na gaveta, e o parse volta ela a ser lista.'}}]},
 {id:'q16', curso:'logica', tipo:'desafio', q:'Na primeira vez, a gaveta está vazia. O que o || [] faz aqui?', code:'let lojas = JSON.parse(localStorage.getItem("lojas")) || [];', ops:['Se não tiver nada guardado, começa com lista vazia','Apaga a gaveta','Dá erro de propósito'], ok:0, exp:'getItem devolve null quando não tem nada. JSON.parse(null) também dá null, e o || [] troca o null por uma lista vazia. Assim o painel não quebra na primeira vez.', dica:'|| quer dizer "ou então".'},
 {id:'q17', curso:'logica', tipo:'carrossel', titulo:'Salvar toda vez que mudar', slides:[
  {emoji:'💾', h:'Uma função salvar()', p:'Crie uma função que guarda a lista. Chame ela depois de adicionar e depois de remover.', code:'function salvar() {\n  localStorage.setItem("lojas", JSON.stringify(lojas));\n}'},
  {emoji:'🔗', h:'Juntando', p:'Mudou → salvar() → montar(). Essa é a receita de todo app que guarda dados, inclusive o SUPER VISÃO.', code:'function add() {\n  lojas.push(nova);\n  salvar();\n  montar();\n}'},
  {emoji:'🧪', h:'Na Oficina', p:'Na Oficina, a gaveta do painel fica guardada no INSIGHT. Adicione uma loja, saia e volte: ela continua lá.'}]},
 {id:'q18', curso:'bastidores', tipo:'curiosidade', emoji:'👁️', frente:'Onde o INSIGHT guarda o seu progresso?', verso:'No localStorage do seu celular, com JSON.stringify, igualzinho ao que você está aprendendo! E uma cópia vai para a nuvem (GitHub privado), para o computador e o celular ficarem iguais.'},
 {id:'q19', curso:'logica', tipo:'desafio', q:'O que está faltando para a lista sobreviver ao fechar o painel?', code:'function add() {\n  lojas.push(nova);\n  montar();\n}', ops:['Chamar salvar()','Chamar alert()','Nada'], ok:0, exp:'Sem salvar(), a loja nova só existe enquanto a página está aberta. Fechou, sumiu.', dica:'Quem guarda na gaveta?'},
 {id:'q20', curso:'logica', tipo:'curiosidade', emoji:'📦', frente:'O que quer dizer JSON?', verso:'JavaScript Object Notation: o jeito de escrever listas e fichas como texto. Quase todo app do mundo conversa em JSON, inclusive o AI Node e o seu PC, que trocam os pedidos num arquivo .json.'},

 // ---------- SEMANA 12 · ORDENAR E COLORIR ----------
 {id:'q21', curso:'logica', tipo:'carrossel', titulo:'sort: a tabela do campeonato', leg:'Semana 12: o painel mostra quem está melhor primeiro.', slides:[
  {emoji:'🏆', h:'Ordenar a lista', p:'sort coloca em ordem. Você diz a regra comparando duas lojas, a e b.', code:'lojas.sort((a, b) => pct(b) - pct(a));'},
  {emoji:'⬇️', h:'Maior primeiro', p:'pct(b) - pct(a) = do maior para o menor, igual tabela do Brasileirão. Trocando para pct(a) - pct(b) fica do menor para o maior.'},
  {quiz:{q:'Para a loja mais longe da meta aparecer primeiro, qual usar?', ops:['pct(b) - pct(a)','pct(a) - pct(b)'], ok:1, exp:'Do menor para o maior: a - b. Assim você vê primeiro quem precisa de ajuda.'}}]},
 {id:'q22', curso:'logica', tipo:'carrossel', titulo:'Barra de meta com JavaScript', slides:[
  {emoji:'📊', h:'Largura = porcentagem', p:'Uma div de fundo e uma div dentro. A de dentro tem a largura da %.', code:'<div class="trilho"><div class="enche" style="width:76%"></div></div>'},
  {emoji:'🎨', h:'O CSS', p:'O trilho é cinza e a barra é colorida.', code:'.trilho { background: #eee; height: 10px; border-radius: 9px; }\n.enche { background: green; height: 100%; border-radius: 9px; }'},
  {emoji:'🧩', h:'Montado pelo vendedor', p:'Dentro da crase, a % entra no style.', code:'`<div class="trilho"><div class="enche" style="width:${pct(l)}%"></div></div>`'}]},
 {id:'q23', curso:'logica', tipo:'carrossel', titulo:'Cor que muda sozinha', slides:[
  {emoji:'🚦', h:'Uma classe para cada situação', p:'No CSS: .ok (verde), .perto (amarelo), .longe (vermelho).', code:'.ok { border-left: 6px solid green; }\n.perto { border-left: 6px solid orange; }\n.longe { border-left: 6px solid red; }'},
  {emoji:'🧑‍⚖️', h:'O juiz escolhe', p:'Uma função decide a classe pela %.', code:'function cor(p) {\n  if (p >= 100) return "ok";\n  if (p >= 70) return "perto";\n  return "longe";\n}'},
  {emoji:'🏷️', h:'Cola no cartão', p:'A classe entra junto com card.', code:'`<div class="card ${cor(pct(l))}">`'}]},
 {id:'q24', curso:'logica', tipo:'desafio', q:'pct = 85. Que classe a função cor devolve?', code:'function cor(p) {\n  if (p >= 100) return "ok";\n  if (p >= 70) return "perto";\n  return "longe";\n}', ops:['"ok"','"perto"','"longe"'], ok:1, exp:'85 não chega a 100, mas é maior ou igual a 70. Primeiro if que acerta manda: "perto".', dica:'Teste os ifs de cima para baixo.'},
 {id:'q25', curso:'logica', tipo:'carrossel', titulo:'Total da rede: reduce', slides:[
  {emoji:'➕', h:'Somar todas as lojas', p:'Um for que vai somando numa variável.', code:'let total = 0;\nfor (let l of lojas) { total += l.vendido; }'},
  {emoji:'⚡', h:'O jeito curto', p:'reduce faz a mesma coisa em uma linha. Pode usar o que achar mais fácil.', code:'let total = lojas.reduce((s, l) => s + l.vendido, 0);'},
  {emoji:'💰', h:'Formatar em reais', p:'toLocaleString deixa bonito: 31000 vira R$ 31.000,00.', code:'total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })'}]},
 {id:'q26', curso:'logica', tipo:'aovivo', titulo:'Painel colorido e ordenado', code:'<style>.c{padding:8px;margin:6px 0;border-radius:8px;background:#f5f5f5}.ok{border-left:6px solid #16a34a}.perto{border-left:6px solid #f59e0b}.longe{border-left:6px solid #dc2626}.t{background:#ddd;height:8px;border-radius:8px}.e{height:100%;border-radius:8px;background:#2563eb}</style>\n<div id="p"></div>\n<script>\n  let lojas=[{nome:"Centro",meta:10000,vendido:7600},{nome:"Shopping",meta:15000,vendido:15400},{nome:"Norte",meta:8000,vendido:4000}];\n  const pct=l=>Math.round(l.vendido/l.meta*100);\n  const cor=p=>p>=100?"ok":p>=70?"perto":"longe";\n  lojas.sort((a,b)=>pct(b)-pct(a));\n  for(let l of lojas){document.getElementById("p").innerHTML+=`<div class="c ${cor(pct(l))}"><b>${l.nome}</b> ${pct(l)}%<div class="t"><div class="e" style="width:${Math.min(pct(l),100)}%"></div></div></div>`}\n</script>', nota:'Tudo junto: função de %, juiz de cor, sort e barra. É o painel que você vai ter no fim da semana 12, só que com as SUAS lojas.'},
 {id:'q27', curso:'design', tipo:'curiosidade', emoji:'🚥', frente:'Por que verde, amarelo e vermelho?', verso:'Porque todo mundo entende sem ler: é o semáforo. Bons painéis usam poucas cores e cada uma tem um significado só. Se tudo é colorido, nada chama atenção.'},
 {id:'q28', curso:'bastidores', tipo:'curiosidade', emoji:'📈', frente:'Isso é o que as empresas usam?', verso:'É a mesma base! Painéis de vendas de grandes redes também têm uma lista de lojas (array de fichas), uma função de %, ordenação e cores. A diferença é que os dados vêm de um servidor em vez do localStorage, e isso você aprende depois.'}
);

Object.assign(window.ALT,{
 q2:[{e:'🍹',t:'Jeito liquidificador',x:'Você coloca a fruta (parâmetro), aperta o botão e sai o suco (return). Pode fazer suco de qualquer fruta com o mesmo liquidificador.'}],
 q15:[{e:'🧊',t:'Jeito geladeira',x:'localStorage é a geladeira de casa: o que você guarda continua lá amanhã. Mas só cabe coisa embalada (texto), por isso a lista vai embrulhada no JSON.'}],
 q21:[{e:'⚽',t:'Jeito tabela',x:'sort é a tabela do campeonato: você diz a regra (pontos) e ela coloca em ordem. b - a = líder no topo.'}]
});

(function(){
 const js=c=>((c.match(/<script>([\s\S]*?)(<\/script>|$)/i)||[])[1]||'').replace(/\/\/[^\n]*/g,'');
 const html=c=>c.replace(/<script>[\s\S]*?(<\/script>|$)/gi,'').replace(/<style>[\s\S]*?(<\/style>|$)/gi,'');
 const css=c=>(c.match(/<style>([\s\S]*?)(<\/style>|$)/gi)||[]).join('\n');
 const P='painel';
 window.MISSOES.push(
  {id:'m36', proj:P, semana:9, titulo:'A função da porcentagem', pede:'Crie function pct(l) { return Math.round(l.vendido / l.meta * 100); } e use pct(l) dentro do for.', testa:c=>/function\s+pct\s*\(\s*\w+\s*\)\s*\{[\s\S]*return\s+Math\.round\(/.test(js(c))&&/pct\(\s*\w+\s*\)/.test(js(c).replace(/function\s+pct\s*\(/,''))},
  {id:'m37', proj:P, semana:9, titulo:'Crase', pede:'Monte o cartão com crase e ${ }: painel.innerHTML += `<div class="card">${l.nome} ${pct(l)}%</div>`;', testa:c=>/`[^`]*\$\{[^}]+\}[^`]*`/.test(js(c))},
  {id:'m38', proj:P, semana:9, titulo:'A função do cartão', pede:'Crie function cartao(l) que DEVOLVE (return) o HTML de um cartão com crase. O for só chama cartao(l).', testa:c=>/function\s+cartao\s*\([^)]*\)\s*\{[\s\S]*return\s*`/.test(js(c))&&/innerHTML\s*\+=\s*cartao\(/.test(js(c))},
  {id:'m39', proj:P, semana:9, titulo:'A função montar', pede:'Coloque o for dentro de function montar() { painel.innerHTML = ""; for (...) {...} } e chame montar(); no fim.', testa:c=>{const j=js(c);return /function\s+montar\s*\(\s*\)\s*\{[\s\S]*innerHTML\s*=\s*["'`]{2}[\s\S]*for\s*\(/.test(j)&&/(^|[^\w.])montar\(\s*\)\s*;?\s*$/m.test(j.replace(/function\s+montar\s*\(\s*\)/,''))}},

  {id:'m40', proj:P, semana:10, titulo:'Os campos', pede:'Crie 3 inputs com id: nome (texto), meta e vendido (type="number") e um botão onclick="adicionar()".', testa:c=>{const h=html(c);return /<input[^>]*id=["']nome["']/i.test(h)&&/<input[^>]*id=["']meta["'][^>]*type=["']number["']|<input[^>]*type=["']number["'][^>]*id=["']meta["']/i.test(h)&&/<input[^>]*id=["']vendido["']/i.test(h)&&/onclick=["']\s*adicionar\(\s*\)/i.test(h)}},
  {id:'m41', proj:P, semana:10, titulo:'Adicionar', pede:'Crie function adicionar() que lê os 3 campos (Number para os números), faz lojas.push({...}) e chama montar().', testa:c=>/function\s+adicionar\s*\(\s*\)\s*\{[\s\S]*\.push\(\s*\{[\s\S]*\}\s*\)[\s\S]*montar\(\s*\)/.test(js(c))},
  {id:'m42', proj:P, semana:10, titulo:'Sem campo vazio', pede:'Dentro de adicionar, antes do push: se o nome estiver vazio, return (não adiciona).', testa:c=>/function\s+adicionar[\s\S]*if\s*\([^)]*(===?\s*["']{2}|!\s*\w+|\.trim\(\)\s*===?\s*["']{2}|length\s*===?\s*0)[^)]*\)\s*\{?\s*(alert\([^)]*\)\s*;?\s*)?return/.test(js(c))},
  {id:'m43', proj:P, semana:10, titulo:'Remover', pede:'Em cada cartão, um botão que remove a loja: function remover(i) { lojas.splice(i, 1); montar(); } (ou com filter).', testa:c=>/function\s+remover\s*\([^)]*\)\s*\{[\s\S]*(\.splice\(|\.filter\()[\s\S]*montar\(\s*\)/.test(js(c))&&/remover\(/.test(js(c).replace(/function\s+remover/,''))},

  {id:'m44', proj:P, semana:11, titulo:'Guardar na gaveta', pede:'Crie function salvar() { localStorage.setItem("lojas", JSON.stringify(lojas)); }', testa:c=>/function\s+salvar\s*\(\s*\)\s*\{[\s\S]*localStorage\.setItem\(\s*["']\w+["']\s*,\s*JSON\.stringify\(/.test(js(c))},
  {id:'m45', proj:P, semana:11, titulo:'Salvar sempre', pede:'Chame salvar() dentro de adicionar e dentro de remover.', testa:c=>{const j=js(c);const f=n=>{const m=j.match(new RegExp('function\\s+'+n+'\\s*\\([^)]*\\)\\s*\\{([\\s\\S]*?)\\n\\s*\\}'));return !!m&&/salvar\(\s*\)/.test(m[1])};return f('adicionar')&&f('remover')}},
  {id:'m46', proj:P, semana:11, titulo:'Abrir a gaveta', pede:'Na hora de criar a lista, leia da gaveta: let lojas = JSON.parse(localStorage.getItem("lojas")) || [ ...suas lojas... ];', testa:c=>/JSON\.parse\(\s*localStorage\.getItem\(\s*["']\w+["']\s*\)\s*\)\s*\|\|/.test(js(c))},
  {id:'m47', proj:P, semana:11, titulo:'Teste de verdade', pede:'Adicione uma loja pelo formulário do Site, saia da Oficina, volte e veja se ela continua lá. Depois escreva um comentário // testei no código.', testa:c=>/\/\/\s*testei/i.test(c)&&/localStorage\.getItem/.test(c)},

  {id:'m48', proj:P, semana:12, titulo:'Tabela do campeonato', pede:'Antes do for, ordene: lojas.sort((a, b) => pct(b) - pct(a));', testa:c=>/\.sort\(\s*\(?\s*\w+\s*,\s*\w+\s*\)?\s*=>/.test(js(c))||/\.sort\(\s*function/.test(js(c))},
  {id:'m49', proj:P, semana:12, titulo:'O semáforo', pede:'Crie function cor(p) que devolve "ok", "perto" ou "longe", as 3 classes no CSS, e use ${cor(pct(l))} na classe do cartão.', testa:c=>/function\s+cor\s*\([^)]*\)\s*\{[\s\S]*return[\s\S]*return/.test(js(c))&&/\.ok\s*\{/.test(css(c))&&/\.longe\s*\{/.test(css(c))&&/\$\{\s*cor\(/.test(js(c))},
  {id:'m50', proj:P, semana:12, titulo:'Barra da meta', pede:'Em cada cartão, uma barra: trilho com uma div dentro com style="width:${pct(l)}%".', testa:c=>/width\s*:\s*\$\{[^}]*\}\s*%/.test(js(c))},
  {id:'m51', proj:P, semana:12, titulo:'Total da rede', pede:'Mostre o total vendido de todas as lojas (com for ou reduce) num elemento com id="total", em reais com toLocaleString.', testa:c=>{const j=js(c);return (/\.reduce\(/.test(j)||/\+=\s*\w+\.vendido/.test(j))&&/toLocaleString\(/.test(j)&&/id=["']total["']/i.test(html(c))}},
  {id:'m52', proj:P, semana:12, titulo:'Revisão do Mês 3', pede:'Zero erros no Revisar e todas as missões do Mês 3 no lugar. Depois poste o painel no perfil!', testa:c=>typeof revisar==='function'&&revisar(c).filter(x=>x.g==='erro').length===0&&window.MISSOES.filter(m=>m.proj==='painel'&&m.semana>=9&&m.id!=='m52').every(m=>m.testa(c)), dica:'Toque em Revisar e conserte de cima para baixo. No JavaScript, conte se cada { tem o seu }.'}
 );
 Object.assign(window.APOIO,{
  m36:{estude:['q2','q3'],dica:'function pct(l) { return Math.round(l.vendido / l.meta * 100); } e no for troque a conta por pct(l).'},
  m37:{estude:['q4','q5'],dica:'Troque as aspas e os + por crase: `<div class="card">${l.nome} ${pct(l)}%</div>`'},
  m38:{estude:['q6'],dica:'function cartao(l) { return `<div class="card">${l.nome}</div>`; } e no for: painel.innerHTML += cartao(l);'},
  m39:{estude:['q8','q9'],dica:'function montar() { painel.innerHTML = ""; for (let l of lojas) { painel.innerHTML += cartao(l); } } e na última linha do script: montar();'},
  m40:{estude:['q8'],dica:'<input id="nome"> <input id="meta" type="number"> <input id="vendido" type="number"> <button onclick="adicionar()">Adicionar</button>'},
  m41:{estude:['q8','q13'],dica:'let n = document.getElementById("nome").value; let m = Number(document.getElementById("meta").value); ... lojas.push({nome:n, meta:m, vendido:v}); montar();'},
  m42:{estude:['q12'],dica:'if (n === "") { return; } antes do push.'},
  m43:{estude:['q10','q11'],dica:'No cartão: <button onclick="remover(${i})">x</button> (use um for com índice) ou remova pelo nome com filter.'},
  m44:{estude:['q15','q17'],dica:'function salvar() { localStorage.setItem("lojas", JSON.stringify(lojas)); }'},
  m45:{estude:['q17','q19'],dica:'Depois do push e depois do splice: salvar(); e depois montar();'},
  m46:{estude:['q15','q16'],dica:'let lojas = JSON.parse(localStorage.getItem("lojas")) || [ {nome:"Centro", meta:10000, vendido:7600} ];'},
  m47:{estude:['q17','q18'],dica:'Teste no botão Site da Oficina. Funcionou? Escreva // testei em qualquer linha do script.'},
  m48:{estude:['q21'],dica:'Dentro do montar, antes do for: lojas.sort((a, b) => pct(b) - pct(a));'},
  m49:{estude:['q23','q24'],dica:'function cor(p) { if (p >= 100) return "ok"; if (p >= 70) return "perto"; return "longe"; } e no CSS: .ok{...} .perto{...} .longe{...}'},
  m50:{estude:['q22','q26'],dica:'Dentro do cartão: <div class="trilho"><div class="enche" style="width:${pct(l)}%"></div></div>'},
  m51:{estude:['q25'],dica:'let total = lojas.reduce((s, l) => s + l.vendido, 0); e mostre no <p id="total"> com toLocaleString("pt-BR", {style:"currency", currency:"BRL"}).'}
 });
 window.MISSOES.forEach(m=>{if(/^m(3[6-9]|4\d|5[0-2])$/.test(m.id))Object.assign(m,window.APOIO[m.id]||{})});
 // Revisão do Mês 2 olha só as semanas 5 a 8 (o Mês 3 continua no mesmo arquivo)
 const m35=window.MISSOES.find(m=>m.id==='m35');
 if(m35)m35.testa=c=>typeof revisar==='function'&&revisar(c).filter(x=>x.g==='erro').length===0&&window.MISSOES.filter(m=>m.proj==='painel'&&m.semana<=8&&m.id!=='m35').every(m=>m.testa(c));
 // a lista do Mês 2 pode vir da gaveta: let lojas = JSON.parse(...) || [ ... ]
 const m31=window.MISSOES.find(m=>m.id==='m31');
 if(m31){const t1=m31.testa;m31.testa=c=>t1(c)||(()=>{const a=js(c).match(/\|\|\s*\[([\s\S]*?)\]\s*;?/);return !!a&&(a[1].match(/\{[^}]*nome\s*:/g)||[]).length>=3})()}
 // a % do Mês 2 pode ter ido para dentro da função pct (Mês 3)
 const m33=window.MISSOES.find(m=>m.id==='m33');
 if(m33){const t0=m33.testa;m33.testa=c=>t0(c)||(/Math\.round\(\s*\w+\.vendido\s*\/\s*\w+\.meta\s*\*\s*100\s*\)/.test(js(c))&&/for\s*\([\s\S]*innerHTML/.test(js(c)))}
})();
