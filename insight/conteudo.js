// Conteúdo do INSIGHT · Trilha do Mês 1 (semana 1). Linguagem simples, comparações do mundo do Arnold.
window.CURSOS = [
 {id:'site', nome:'Site do zero', user:'site.do.zero', sigla:'WEB', bio:'Mês 1: você vai construir o seu site pessoal, escrevendo cada letra. Do "o que é um site" até o link no ar.', modulos:['Tijolos','Bonito','Celular','No ar'], aulas:28, cor:'#fa7e1e'},
 {id:'logica', nome:'Lógica do zero', user:'logica.do.zero', sigla:'LÓG', bio:'A base de tudo, sem pressa. Pensar como programador usando futebol, receita e desenho.', modulos:['Variáveis','Decisões','Repetição','Funções'], aulas:32, cor:'#d62976'},
 {id:'ia', nome:'IA do zero', user:'ia.do.zero', sigla:'IA', bio:'Claude, ChatGPT, Gemini e as outras. Do "o que é" até criar as suas ferramentas.', modulos:['Básico','ChatGPT','Claude','Gemini','Prompts','Ferramentas'], aulas:48, cor:'#962fbf'},
 {id:'design', nome:'Design', user:'design.que.funciona', sigla:'UI', bio:'Cores, letras e telas. Treinar o olho para saber por que uma tela é boa.', modulos:['Hierarquia','Cores','Letras','Telas'], aulas:20, cor:'#4f5bd5'},
 {id:'bastidores', nome:'Bastidores', user:'bastidores.seus.apps', sigla:'SV', bio:'Pedaços reais dos SEUS apps (SUPER VISÃO, Gestão, Life Trail) explicados por dentro.', modulos:['SUPER VISÃO','Gestão','Life Trail'], aulas:12, cor:'#feda75'},
 {id:'faculdade', nome:'Faculdade', user:'ciencia.da.computacao', sigla:'CC', bio:'As matérias do semestre. Me mande o plano das aulas e eu encho este perfil.', modulos:['Em breve'], aulas:0, cor:'#4f5bd5', vazio:true}
];

// tipos: carrossel {slides:[{h,p,code?,emoji?}]} · desafio {q,code?,ops,ok,exp,dica} · aovivo {code,nota} · curiosidade {frente,verso,emoji}
window.POSTS = [
 {id:'s1', curso:'site', tipo:'carrossel', titulo:'O que é um site?', slides:[
  {emoji:'🏬', h:'Um site é uma <i>loja</i>', p:'Você conhece loja melhor que ninguém. Um site é igualzinho: tem estrutura, tem decoração e tem alguém que atende.'},
  {emoji:'🧱', h:'HTML = <i>a estrutura</i>', p:'As paredes, as prateleiras, o balcão. Onde fica cada coisa. Sem isso, não existe loja.'},
  {emoji:'🎨', h:'CSS = <i>a vitrine</i>', p:'A pintura, as cores, a arrumação bonita. A mesma loja pode ficar linda ou feia só mudando isso.'},
  {emoji:'🙋', h:'JavaScript = <i>o vendedor</i>', p:'Quem reage quando o cliente faz algo: aperta um botão, abre um menu. Vamos chegar nele mais pra frente.'}],
  leg:'No mês 1 você vai usar HTML e CSS. O vendedor (JavaScript) fica para depois, sem pressa.'},
 {id:'s2', curso:'site', tipo:'desafio', q:'Na loja do site, quem cuida das CORES e da arrumação bonita?', ops:['HTML','CSS','JavaScript'], ok:1, exp:'CSS é a vitrine: cor, tamanho, espaço. HTML é a estrutura e JavaScript é o vendedor.', dica:'Lembra: vitrine…'},
 {id:'s3', curso:'site', tipo:'carrossel', titulo:'Tags: as etiquetas', slides:[
  {emoji:'🏷️', h:'HTML é feito de <i>etiquetas</i>', p:'Sabe a etiqueta na caixa do estoque que diz o que tem dentro? No HTML elas se chamam <b>tags</b>.'},
  {h:'Uma tag tem <i>cara</i> assim:', code:'&lt;h1&gt;Arnold Suheth&lt;/h1&gt;', p:'<b>&lt;h1&gt;</b> abre a etiqueta, o texto fica no meio e <b>&lt;/h1&gt;</b> (com a barrinha) fecha.'},
  {emoji:'🥅', h:'Abre e <i>fecha</i>', p:'É como a porta da loja: abriu de manhã, tem que fechar à noite. Esquecer de fechar é o erro nº 1 de quem começa. Normal!'}],
  leg:'h1 vem de "heading 1": o título mais importante da página.'},
 {id:'s4', curso:'site', tipo:'aovivo', titulo:'Veja acontecer', code:'<h1>Arnold Suheth</h1>\n<p>Supervisor e fundador do Studio Evolution Tech</p>', nota:'À esquerda o que você escreve, à direita o que aparece. <b>h1</b> = título grande. <b>p</b> = parágrafo (texto normal).'},
 {id:'s5', curso:'site', tipo:'desafio', q:'Qual tag faz o TÍTULO GRANDE da página?', ops:['<p>','<h1>','<titulo>'], ok:1, exp:'<h1> é o título principal. <p> é texto normal. <titulo> não existe: as tags têm nomes em inglês.', dica:'h de "heading", que é título em inglês.'},
 {id:'s6', curso:'site', tipo:'curiosidade', emoji:'🌍', frente:'Qual foi o primeiro site do mundo?', verso:'Foi feito em 1991 por Tim Berners-Lee, o inventor da web, num laboratório na Suíça (o CERN). E ele ainda está no ar: info.cern.ch. Era só texto e links, bem parecido com o que você vai escrever esta semana.'},
 {id:'s7', curso:'site', tipo:'aovivo', titulo:'Lista = escalação', code:'<h2>Meu time</h2>\n<ul>\n  <li>Goleiro</li>\n  <li>Zagueiro</li>\n  <li>Centroavante</li>\n</ul>', nota:'<b>ul</b> é a lista (a súmula do jogo). Cada <b>li</b> é um jogador da lista. Troque os nomes na Oficina (botão +) e veja mudar.'},
 {id:'s8', curso:'site', tipo:'desafio', q:'O que está faltando aqui?', code:'<p>Bem-vindo ao meu site', ops:['</p> no final','<p> no começo','nada, está certo'], ok:0, exp:'Abriu a porta com <p>, tem que fechar com </p>. Sem fechar, o navegador até tenta adivinhar, mas um dia dá problema.', dica:'Toda porta que abre…'},
 {id:'s9', curso:'site', tipo:'carrossel', titulo:'Imagem e link', slides:[
  {emoji:'🖼️', h:'&lt;img&gt; = a <i>figurinha</i>', code:'&lt;img src="foto.jpg"&gt;', p:'Igual figurinha do álbum: o <b>src</b> diz qual foto colar. Essa tag não precisa fechar, porque não tem nada "dentro".'},
  {emoji:'⚡', h:'&lt;a&gt; = o <i>teletransporte</i>', code:'&lt;a href="https://..."&gt;Meu Instagram&lt;/a&gt;', p:'Igual o Goku com dois dedos na testa: clicou, foi parar em outro lugar. O <b>href</b> é o destino.'}],
  leg:'src = de onde vem a imagem. href = para onde o link leva.'},
 {id:'s10', curso:'site', tipo:'aovivo', titulo:'Seu cartão de visita', code:'<h1>Arnold Suheth</h1>\n<p>Crio sites e apps sob medida.</p>\n<a href="https://arnoldsuheth.github.io/super-visao-app/">Ver meu app</a>', nota:'Isso já é um site de verdade, com título, texto e link. Na Oficina você vai escrever o SEU, do zero.'},
 {id:'s11', curso:'site', tipo:'desafio', q:'Qual tag cria um LINK, que leva para outra página?', ops:['<link>','<a>','<go>'], ok:1, exp:'<a> é o link (vem de "anchor", âncora). O destino vai no href.', dica:'É a tag do teletransporte.'},
 {id:'s12', curso:'site', tipo:'curiosidade', emoji:'🤔', frente:'HTML é linguagem de programação?', verso:'Não! É uma linguagem de MARCAÇÃO: ela só diz o que é cada coisa (título, texto, imagem). Ela não "pensa" nem toma decisões. Quem pensa é o JavaScript. Por isso o HTML é a porta de entrada perfeita.'},
 {id:'l1', curso:'logica', tipo:'carrossel', titulo:'O que é uma variável?', slides:[
  {emoji:'⚽', h:'Pensa na <i>escalação</i>', p:'A posição "capitão" existe em todo jogo. Quem usa a braçadeira é que muda.'},
  {h:'A posição é o <i>nome</i>.<br>O jogador é o <i>valor</i>.', code:'let capitao = "Fernandão"\ncapitao = "D\'Alessandro"', p:'Mesma posição, outro jogador. Isso é uma variável: um nome fixo que guarda um valor que pode trocar.'},
  {emoji:'🍳', h:'Na <i>cozinha</i> também', p:'Na receita, "ovos" é a variável. Hoje são 2, amanhã 3. A receita é a mesma; só muda a quantidade.'}],
  leg:'"let" quer dizer "deixa": deixa capitão ser Fernandão.'},
 {id:'l2', curso:'logica', tipo:'desafio', q:'Em let gols = 3, qual é o NOME da variável?', code:'let gols = 3', ops:['let','gols','3'], ok:1, exp:'"gols" é o nome (a posição). 3 é o valor (o jogador). "let" é só a palavra que cria a variável.', dica:'O nome é a "posição".'},
 {id:'l3', curso:'logica', tipo:'curiosidade', emoji:'🦋', frente:'Por que erro em programa se chama "bug"?', verso:'Em 1947 uma mariposa de verdade (bug = inseto em inglês) travou o computador Mark II, em Harvard. A equipe da Grace Hopper colou o inseto no caderno com a nota "primeiro caso real de bug encontrado".'},
 {id:'i1', curso:'ia', tipo:'carrossel', titulo:'O que é uma IA?', slides:[
  {emoji:'👨‍🍳', h:'A IA é um <i>cozinheiro</i>', p:'Ela já "provou" milhões de receitas (textos) e aprendeu os padrões. Quando você pede algo, ela monta a resposta mais provável, como um cozinheiro experiente.'},
  {emoji:'📝', h:'O prompt é a <i>comanda</i>', p:'O que você escreve é o pedido. Comanda bagunçada = prato errado. Comanda clara = prato certo.'},
  {emoji:'🏆', h:'Claude, ChatGPT, Gemini', p:'São cozinheiros de restaurantes diferentes. Cada um tem o seu jeito; você vai aprender a escalar o certo para cada jogo.'}],
  leg:'Você já usa IA todo dia comigo. Agora vai entender por dentro.'},
 {id:'i2', curso:'ia', tipo:'desafio', q:'Qual pedido vai dar uma resposta MELHOR?', ops:['"Faz um post"','"Escreva um post curto para o Instagram da BLESSAINT, tom jovem e cristão, sobre o lançamento da camiseta preta"'], ok:1, exp:'Quanto mais detalhe na comanda (para quem, onde, que tom, sobre o quê), melhor o prato. Isso é a base de um bom prompt.', dica:'Comanda clara = prato certo.'},
 {id:'i3', curso:'ia', tipo:'carrossel', titulo:'O que é um token?', slides:[
  {h:'A IA não lê <i>palavras</i>', p:'Ela corta o texto em pedacinhos chamados tokens. Como cortar uma pizza em fatias antes de comer.'},
  {h:'Olha o corte:', code:'Super | Vis | ão | é | top', p:'5 tokens. Cada um vira um número, e a IA faz contas com esses números.'},
  {h:'Por que <i>importa</i>?', p:'Quanto mais tokens, mais caro e mais lento. Texto curto e claro = IA mais rápida e mais barata nos apps do Studio.'}],
  leg:'Pedaço de texto = token.'},
 {id:'d1', curso:'design', tipo:'carrossel', titulo:'Hierarquia', slides:[
  {emoji:'👀', h:'O olho precisa saber <i>onde olhar</i>', p:'Se tudo tem o mesmo tamanho, o olho se perde. Como um time sem camisa 10: ninguém sabe para quem passar.'},
  {h:'A regra do <i>1-1-1</i>', p:'1 coisa grande (o título), 1 coisa média (a explicação), 1 ação clara (o botão). Pronto.'},
  {h:'Você já usa isso', p:'É por isso que no SUPER VISÃO o seu nome aparece gigante e o resto menor. Agora você sabe o porquê.'}],
  leg:'Hierarquia = ordem de importância na tela.'},
 {id:'b1', curso:'bastidores', tipo:'aovivo', titulo:'Como o olho do SUPER VISÃO pisca', code:'<style>\n.olho{width:120px;height:60px;border-radius:50%;\nbackground:#ff8a2a;margin:30px auto;\nanimation:pisca 2s infinite}\n@keyframes pisca{\n 0%,45%,55%,100%{transform:scaleY(1)}\n 50%{transform:scaleY(.06)}\n}\n</style>\n<div class="olho"></div>', nota:'O olho não "fecha": ele é <b>achatado</b> (scaleY) para 6% da altura por um instante e volta. Esse é o mesmo truque que está no seu app.'}
];

window.STORIES = [
 {curso:'site', slides:[
  {emoji:'👋', h:'Bem-vindo ao <i>Mês 1</i>', p:'Meta: no fim do mês, o SEU site pessoal no ar, com link de verdade, escrito por você.'},
  {emoji:'📅', h:'O plano', p:'Semana 1: os tijolos (HTML).<br>Semana 2: deixar bonito (CSS).<br>Semana 3: celular.<br>Semana 4: no ar 🎉'},
  {emoji:'⏱️', h:'30 minutos por dia', p:'Só isso. Dia cansado? Faz 5 minutos e já conta.'},
  {quiz:{q:'Qual é a meta do Mês 1?', ops:['Fazer um app de gerentes','Meu site pessoal no ar'], ok:1, exp:'Isso! Primeiro a vitória rápida. O app dos gerentes vem nos meses 4 a 6.'}}]},
 {curso:'logica', slides:[
  {emoji:'⚽', h:'O que é uma <i>variável</i>?', p:'Pensa na escalação: a posição "capitão" existe sempre. Quem usa a braçadeira é que muda.'},
  {h:'Posição = <i>nome</i><br>Jogador = <i>valor</i>', code:'let capitao = "Fernandão"', p:'Mesma posição, jogadores diferentes ao longo dos anos.'},
  {quiz:{q:'Em let capitao = "D\'Alessandro", qual é o NOME?', ops:['capitao','D\'Alessandro'], ok:0, exp:'"capitao" é o nome (a posição). D\'Alessandro é o valor (o jogador).'}}]},
 {curso:'ia', slides:[
  {emoji:'👨‍🍳', h:'IA = <i>cozinheiro</i>', p:'Prompt = comanda. Comanda clara, prato certo.'},
  {quiz:{q:'"Faz um texto" é uma comanda…', ops:['Clara','Bagunçada'], ok:1, exp:'Faltou para quem, onde, que tom e sobre o quê.'}}]},
 {curso:'design', slides:[
  {emoji:'👀', h:'Regra do <i>1-1-1</i>', p:'1 coisa grande, 1 média e 1 ação clara.'}]}
];

window.MISSOES = [
 {id:'m1', semana:1, titulo:'Seu primeiro título', pede:'Escreva um <h1> com o seu nome.', testa:c=>/<h1>[\s\S]*\S[\s\S]*<\/h1>/i.test(c), inicio:'<!-- Escreva aqui embaixo -->\n'},
 {id:'m2', semana:1, titulo:'Quem é você', pede:'Embaixo do título, um <p> contando o que você faz.', testa:c=>/<p>[\s\S]*\S[\s\S]*<\/p>/i.test(c)},
 {id:'m3', semana:1, titulo:'Sua escalação', pede:'Uma lista <ul> com 3 <li>: três coisas que você faz (ex.: sites, apps, supervisão).', testa:c=>(c.match(/<li>/gi)||[]).length>=3&&/<ul>/i.test(c)&&/<\/ul>/i.test(c)},
 {id:'m4', semana:1, titulo:'Teletransporte', pede:'Um link <a href="..."> para o seu app SUPER VISÃO.', testa:c=>/<a\s+href=["'][^"']+["'][^>]*>[\s\S]*\S[\s\S]*<\/a>/i.test(c)}
];

// Ferramentas (perfis novos; os posts chegam conforme a trilha)
window.CURSOS.push(
 {id:'claude', nome:'Claude', user:'curso.claude', sigla:'Cl', cor:'#d97757', bio:'Usar o Claude do zero ao avançado: conversas, projetos, artefatos e agentes.', modulos:['Básico','Projetos','Artefatos','Agentes'], aulas:0, vazio:true},
 {id:'chatgpt', nome:'ChatGPT', user:'curso.chatgpt', sigla:'GPT', cor:'#10a37f', bio:'ChatGPT do zero: pedidos, GPTs personalizados, imagens e voz.', modulos:['Básico','GPTs','Imagens','Voz'], aulas:0, vazio:true},
 {id:'gemini', nome:'Gemini', user:'curso.gemini', sigla:'Ge', cor:'#4f7df3', bio:'Gemini do zero e como ele conversa com Google Drive, Docs e Gmail.', modulos:['Básico','Google','Imagens'], aulas:0, vazio:true},
 {id:'vscode', nome:'VS Code', user:'curso.vscode', sigla:'&lt;/&gt;', cor:'#2f80ed', bio:'O editor onde programadores escrevem código. Instalar, abrir projeto, atalhos.', modulos:['Instalar','Primeiro arquivo','Atalhos','Extensões'], aulas:0, vazio:true},
 {id:'github', nome:'GitHub', user:'curso.github', sigla:'GH', cor:'#24292f', bio:'Onde ficam os seus projetos (SUPER VISÃO, Gestão...). Repositório, commit, publicar site.', modulos:['O que é','Repositório','Commit','Pages'], aulas:0, vazio:true},
 {id:'terminal', nome:'Terminal', user:'curso.terminal', sigla:'&gt;_', cor:'#111111', bio:'A "tela preta" sem medo: comandos básicos explicados como ordens para a equipe.', modulos:['Primeiros comandos','Pastas','Git'], aulas:0, vazio:true},
 {id:'figma', nome:'Figma', user:'curso.figma', sigla:'Fg', cor:'#a259ff', bio:'Desenhar telas antes de programar. Do zero até protótipo clicável.', modulos:['Básico','Telas','Componentes','Protótipo'], aulas:0, vazio:true},
 {id:'canva', nome:'Canva', user:'curso.canva', sigla:'Cv', cor:'#00c4cc', bio:'Posts, apresentações e artes para a BLESSAINT e o Studio.', modulos:['Básico','Posts','Marca'], aulas:0, vazio:true},
 {id:'lovable', nome:'Lovable', user:'curso.lovable', sigla:'Lv', cor:'#ff4f8b', bio:'Criar apps conversando com IA, e entender o que ela fez por baixo.', modulos:['Básico','Primeiro app','Banco de dados'], aulas:0, vazio:true},
 {id:'supabase', nome:'Supabase', user:'curso.supabase', sigla:'Sb', cor:'#3ecf8e', bio:'Banco de dados explicado como o estoque da loja: guardar, buscar, proteger.', modulos:['O que é','Tabelas','Login'], aulas:0, vazio:true},
 {id:'notion', nome:'Notion', user:'curso.notion', sigla:'N', cor:'#37352f', bio:'Organizar estudos, projetos e clientes num lugar só.', modulos:['Básico','Bancos','Modelos'], aulas:0, vazio:true}
);
