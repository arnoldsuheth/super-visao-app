// Conteúdo do INSIGHT · Trilha do Mês 1 (semana 1). Linguagem simples, comparações do mundo do Arnold.
window.CURSOS = [
 {id:'site', ico:'🌐', nome:'Site do zero', user:'site.do.zero', sigla:'WEB', bio:'Mês 1: você vai construir o seu site pessoal, escrevendo cada letra. Do "o que é um site" até o link no ar.', modulos:['Tijolos','Bonito','Celular','No ar'], aulas:28, cor:'#fa7e1e'},
 {id:'logica', ico:'🧠', nome:'Lógica do zero', user:'logica.do.zero', sigla:'LÓG', bio:'A base de tudo, sem pressa. Pensar como programador usando futebol, receita e desenho.', modulos:['Variáveis','Decisões','Repetição','Funções'], aulas:32, cor:'#d62976'},
 {id:'design', ico:'🎨', nome:'Design', user:'design.que.funciona', sigla:'UI', bio:'Cores, letras e telas. Treinar o olho para saber por que uma tela é boa.', modulos:['Hierarquia','Cores','Letras','Telas'], aulas:20, cor:'#4f5bd5'},
 {id:'bastidores', ico:'👁️', nome:'Bastidores', user:'bastidores.seus.apps', sigla:'SV', bio:'Pedaços reais dos SEUS apps (SUPER VISÃO, Gestão, Life Trail) explicados por dentro.', modulos:['SUPER VISÃO','Gestão','Life Trail'], aulas:12, cor:'#feda75'},
 {id:'faculdade', ico:'🎓', nome:'Faculdade', user:'ciencia.da.computacao', sigla:'CC', bio:'As matérias do semestre. Me mande o plano das aulas e eu encho este perfil.', modulos:['Em breve'], aulas:0, cor:'#4f5bd5', vazio:true}
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
 {id:'i1', curso:'claude', tipo:'carrossel', titulo:'O que é uma IA?', slides:[
  {emoji:'👨‍🍳', h:'A IA é um <i>cozinheiro</i>', p:'Ela já "provou" milhões de receitas (textos) e aprendeu os padrões. Quando você pede algo, ela monta a resposta mais provável, como um cozinheiro experiente.'},
  {emoji:'📝', h:'O prompt é a <i>comanda</i>', p:'O que você escreve é o pedido. Comanda bagunçada = prato errado. Comanda clara = prato certo.'},
  {emoji:'🏆', h:'Claude, ChatGPT, Gemini', p:'São cozinheiros de restaurantes diferentes. Cada um tem o seu jeito; você vai aprender a escalar o certo para cada jogo.'}],
  leg:'Você já usa IA todo dia comigo. Agora vai entender por dentro.'},
 {id:'i2', curso:'chatgpt', tipo:'desafio', q:'Qual pedido vai dar uma resposta MELHOR?', ops:['"Faz um post"','"Escreva um post curto para o Instagram da BLESSAINT, tom jovem e cristão, sobre o lançamento da camiseta preta"'], ok:1, exp:'Quanto mais detalhe na comanda (para quem, onde, que tom, sobre o quê), melhor o prato. Isso é a base de um bom prompt.', dica:'Comanda clara = prato certo.'},
 {id:'i3', curso:'claude', tipo:'carrossel', titulo:'O que é um token?', slides:[
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

window.POSTS.push(
 {id:'g1', curso:'gemini', tipo:'carrossel', titulo:'Gemini mora no Google', slides:[
  {emoji:'🏠', h:'O Gemini é o <i>vizinho</i> do Google', p:'Ele foi feito pelo Google. Por isso conversa direto com Gmail, Drive, Docs e Agenda, como um vizinho que tem a chave da casa.'},
  {emoji:'📂', h:'Na prática', p:'Você pode pedir: "resuma os e-mails da semana" ou "ache no meu Drive a planilha da BLESSAINT". Ele busca lá dentro.'},
  {emoji:'⚽', h:'Escalação certa', p:'Cada IA tem a sua posição. Gemini é ótimo quando o jogo é dentro do Google. Claude e ChatGPT brilham em outras jogadas. Você vai aprender quando escalar cada um.'}],
  leg:'Cada plataforma tem o seu perfil. Siga as que você mais usa.'},
 {id:'g2', curso:'gemini', tipo:'desafio', q:'Você quer achar um arquivo no seu Google Drive conversando com uma IA. Qual combina mais?', ops:['Gemini','Nenhuma IA consegue'], ok:0, exp:'O Gemini é do Google e conversa com o Drive. (Outras IAs também conseguem quando você conecta o Drive nelas, como você já faz comigo.)', dica:'Quem mora no Google?'},
 {id:'c1', curso:'chatgpt', tipo:'curiosidade', emoji:'💬', frente:'O que quer dizer o "GPT" de ChatGPT?', verso:'Generative Pre-trained Transformer: um "transformador" (um tipo de cérebro de IA) pré-treinado que gera texto. Traduzindo para o nosso mundo: um cozinheiro que já provou milhões de receitas antes de abrir o restaurante.'}
);

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
 {curso:'claude', slides:[
  {emoji:'👨‍🍳', h:'IA = <i>cozinheiro</i>', p:'Você conversa com o Claude todo dia. Ele é um cozinheiro: prompt é a comanda. Comanda clara, prato certo.'},
  {quiz:{q:'"Faz um texto" é uma comanda…', ops:['Clara','Bagunçada'], ok:1, exp:'Faltou para quem, onde, que tom e sobre o quê.'}}]},
 {curso:'chatgpt', slides:[
  {emoji:'💬', h:'ChatGPT', p:'Outro cozinheiro famoso, de outro restaurante. Nesta trilha você vai aprender quando escalar cada um.'}]},
 {curso:'gemini', slides:[
  {emoji:'🏠', h:'Gemini', p:'O vizinho do Google: conversa com Gmail, Drive e Docs.'}]},
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
 {id:'claude', site:'claude.ai', nome:'Claude', user:'curso.claude', sigla:'Cl', cor:'#d97757', bio:'Usar o Claude do zero ao avançado: conversas, projetos, artefatos e agentes.', modulos:['Básico','Projetos','Artefatos','Agentes'], aulas:24},
 {id:'chatgpt', site:'chatgpt.com', nome:'ChatGPT', user:'curso.chatgpt', sigla:'GPT', cor:'#10a37f', bio:'ChatGPT do zero: pedidos, GPTs personalizados, imagens e voz.', modulos:['Básico','GPTs','Imagens','Voz'], aulas:24},
 {id:'gemini', site:'gemini.google.com', nome:'Gemini', user:'curso.gemini', sigla:'Ge', cor:'#4f7df3', bio:'Gemini do zero e como ele conversa com Google Drive, Docs e Gmail.', modulos:['Básico','Google','Imagens'], aulas:24},
 {id:'vscode', site:'code.visualstudio.com', nome:'VS Code', user:'curso.vscode', sigla:'&lt;/&gt;', cor:'#2f80ed', bio:'O editor onde programadores escrevem código. Instalar, abrir projeto, atalhos.', modulos:['Instalar','Primeiro arquivo','Atalhos','Extensões'], aulas:0, vazio:true},
 {id:'github', site:'github.com', nome:'GitHub', user:'curso.github', sigla:'GH', cor:'#24292f', bio:'Onde ficam os seus projetos (SUPER VISÃO, Gestão...). Repositório, commit, publicar site.', modulos:['O que é','Repositório','Commit','Pages'], aulas:0, vazio:true},
 {id:'terminal', ico:'⌨️', nome:'Terminal', user:'curso.terminal', sigla:'&gt;_', cor:'#111111', bio:'A "tela preta" sem medo: comandos básicos explicados como ordens para a equipe.', modulos:['Primeiros comandos','Pastas','Git'], aulas:0, vazio:true},
 {id:'figma', site:'figma.com', nome:'Figma', user:'curso.figma', sigla:'Fg', cor:'#a259ff', bio:'Desenhar telas antes de programar. Do zero até protótipo clicável.', modulos:['Básico','Telas','Componentes','Protótipo'], aulas:0, vazio:true},
 {id:'canva', site:'canva.com', nome:'Canva', user:'curso.canva', sigla:'Cv', cor:'#00c4cc', bio:'Posts, apresentações e artes para a BLESSAINT e o Studio.', modulos:['Básico','Posts','Marca'], aulas:0, vazio:true},
 {id:'lovable', site:'lovable.dev', nome:'Lovable', user:'curso.lovable', sigla:'Lv', cor:'#ff4f8b', bio:'Criar apps conversando com IA, e entender o que ela fez por baixo.', modulos:['Básico','Primeiro app','Banco de dados'], aulas:0, vazio:true},
 {id:'supabase', site:'supabase.com', nome:'Supabase', user:'curso.supabase', sigla:'Sb', cor:'#3ecf8e', bio:'Banco de dados explicado como o estoque da loja: guardar, buscar, proteger.', modulos:['O que é','Tabelas','Login'], aulas:0, vazio:true},
 {id:'notion', site:'notion.so', nome:'Notion', user:'curso.notion', sigla:'N', cor:'#37352f', bio:'Organizar estudos, projetos e clientes num lugar só.', modulos:['Básico','Bancos','Modelos'], aulas:0, vazio:true}
);

// Seus projetos (portfólio do seu perfil)
window.PROJETOS = [
 {id:'sv', kick:'MEU APP · 01', hl:'Minha rotina sob uma <em>nova visão.</em>', est:'dark', tag:'Minha rotina sob uma nova visão', nome:'SUPER VISÃO', tipo:'apps', img:'./proj/sv.png', cor:'#ff8a2a', desc:'Meu painel de gestão pessoal: rotina, lojas, equipe, finanças e metas. Abertura animada, olho como botão Início e linha do tempo ao vivo.', link:'https://arnoldsuheth.github.io/super-visao-app/', status:'No ar'},
 {id:'gestao', ac:'#3b82f6', kick:'CASE · MINHA EMPRESA', hl:'A central do <em>meu negócio.</em>', est:'navy', tag:'A central da minha empresa', nome:'Gestão do Studio', tipo:'apps', img:'./proj/gestao.png', cor:'#3b82f6', desc:'O painel da minha empresa: clientes, cobranças, recibos, contratos e o funil de vendas do Studio Evolution Tech.', status:'No ar · privado'},
 {id:'insight', kick:'MEU APP · 03', hl:'Troquei o rolar pelo <em>aprender.</em>', est:'light', tag:'Troque o rolar pelo aprender', nome:'insight', tipo:'apps', img:'./proj/insight.png', cor:'#d62976', desc:'Esta rede social de estudos. Troquei o rolar pelo aprender.', status:'No ar'},
 {id:'lifetrail', kick:'CLIENTES', hl:'Rotinas sob medida que <em>viram app.</em>', est:'light', tag:'Rotinas sob medida para clientes', nome:'Life Trail', tipo:'clientes', emoji:'🌳', cor:'#3fbf7a', desc:'Apps de rotina sob medida para clientes: blocos do dia, hábitos, metas, árvore que cresce e Bíblia. Cada cliente com senha e dados na nuvem.', status:'Vários clientes'},
 {id:'blessaint', ac:'#c9cdd4', kick:'CASE #01 · MARCA', hl:'Streetwear com <em>propósito.</em>', est:'dark', tag:'Streetwear com propósito', nome:'BLESSAINT', tipo:'marcas', img:'./proj/blessaint.png', cor:'#111111', desc:'Minha marca de streetwear gospel com o Mário. Site da marca em construção, é o meu projeto de estudo.', status:'Em construção'},
 {id:'studio', ac:'#22d3ee', kick:'MINHA EMPRESA', hl:'Sites e apps <em>sob medida.</em>', est:'navy', tag:'Sites e apps sob medida', nome:'Studio Evolution Tech', tipo:'marcas', img:'./proj/studio.svg', cor:'#0b1736', desc:'Minha empresa de sites e apps sob medida.', status:'Ativa'},
 {id:'lions', kick:'ESTUDOS', hl:'Aprender programação <em>jogando.</em>', est:'dark', tag:'Aprender programação jogando', nome:"Lion's Cave", tipo:'estudos', emoji:'🦁', cor:'#7a4b1d', desc:'Meu RPG de estudos de programação (fase Lovelace Kingdom).', status:'Em desenvolvimento'},
 {id:'lab', ac:'#7c9cff', kick:'ESTUDOS', hl:'Onde tudo <em>começou.</em>', est:'navy', tag:'Onde tudo começou', nome:'Evolution Lab', tipo:'estudos', img:'./proj/lab.png', cor:'#1b1f4a', desc:'Minha plataforma de estudos, que virou o jogo.', status:'Arquivado no jogo'},
 {id:'sitepessoal', kick:'MÊS 1 · PROJETO', hl:'Escrito por mim, <em>do zero.</em>', est:'light', tag:'Escrito por mim, do zero', nome:'Meu site pessoal', tipo:'estudos', emoji:'🌐', cor:'#fa7e1e', desc:'O projeto do Mês 1: escrito por mim, do zero, na Oficina.', status:'Mês 1', oficina:true}
];

// "Explica de outro jeito": outras comparações para cada post (botão 🔄 no post)
window.ALT = {
 s1:[{e:'🍔',t:'Jeito receita',x:'Um site é um prato pronto. O HTML são os ingredientes (pão, carne, queijo). O CSS é a montagem bonita no prato. O JavaScript é o garçom que reage quando você pede algo.'},
     {e:'🍩',t:'Jeito Simpsons',x:'A casa dos Simpsons: as paredes e os cômodos são o HTML, a pintura amarela e os móveis são o CSS, e o Homer abrindo a geladeira é o JavaScript (a ação).'}],
 s3:[{e:'📦',t:'Jeito mudança',x:'Tag é a etiqueta da caixa na mudança: "COZINHA", "QUARTO". O navegador lê a etiqueta e sabe onde colocar cada coisa. Abre a caixa com <p> e fecha com </p>.'},
     {e:'👕',t:'Jeito vestiário',x:'É como o número na camisa: o 9 já diz que é o centroavante. A tag <h1> já diz "eu sou o título principal".'}],
 s4:[{e:'🍳',t:'Jeito receita',x:'É como ver o bolo crescer pelo vidro do forno: você muda o código e vê o resultado na hora, sem esperar.'},
     {e:'📺',t:'Jeito replay',x:'É o replay do lance: você vê exatamente o que o código fez, quadro a quadro.'}],
 s6:[{e:'🦖',t:'Jeito museu',x:'O primeiro site (1991) é tipo o primeiro uniforme do Inter: simples, só texto, mas começou tudo. Ainda dá para visitar ele hoje.'},
     {e:'📰',t:'Jeito jornal',x:'Era como um jornal de uma página só, sem foto: só letras e links azuis. A internet inteira nasceu disso.'}],
 s7:[{e:'⚽',t:'Jeito vestiário',x:'<ul> é a prancheta do técnico. Cada <li> é um jogador escrito nela, um embaixo do outro.'},
     {e:'🛒',t:'Jeito mercado',x:'<ul> é a lista do mercado. Cada <li> é um item: arroz, feijão, picanha. O navegador coloca a bolinha antes de cada um.'}],
 s9:[{e:'🖼️',t:'Jeito porta-retrato',x:'<img> é o porta-retrato: você só diz onde está a foto (src) e ele mostra. Não tem tag de fechar porque não tem nada dentro.'},
     {e:'🚪',t:'Jeito porta',x:'<a> é uma porta. O href é o endereço do outro cômodo. Clicou, atravessou.'}],
 s10:[{e:'🪪',t:'Jeito crachá',x:'É o seu crachá da Indus, só que na internet: nome em destaque (h1), cargo embaixo (p) e o contato (link).'},
      {e:'🥋',t:'Jeito luta',x:'É a apresentação antes da luta: nome do lutador, de onde vem e o cartel. Curto e direto.'}],
 s12:[{e:'📝',t:'Jeito receita',x:'HTML é a lista de ingredientes: diz O QUE tem. Programação é o modo de preparo: diz o que FAZER, com decisões ("se queimar, abaixa o fogo"). HTML não decide nada.'},
      {e:'🎨',t:'Jeito desenho',x:'HTML é o desenho parado. Programação (JavaScript) é o desenho animado: as coisas se mexem e reagem.'}],
 l1:[{e:'🥫',t:'Jeito cozinha',x:'Variável é o pote com etiqueta "AÇÚCAR". O pote é sempre o mesmo, mas o que tem dentro pode acabar e você enche de novo.'},
     {e:'🐉',t:'Jeito Dragon Ball',x:'O rastreador do Vegeta mostra o "poder de luta". O nome é fixo, mas o número muda: 8000, depois "mais de 8000!". Isso é uma variável.'}],
 l3:[{e:'🦋',t:'Jeito história',x:'Em 1947 acharam uma mariposa de verdade presa dentro de um computador gigante, causando erro. Colaram ela no caderno: "primeiro bug encontrado".'},
     {e:'🍩',t:'Jeito Simpsons',x:'É o Homer na usina: um detalhezinho errado e a máquina toda dá problema. O bug é esse detalhe escondido.'}],
 i1:[{e:'📚',t:'Jeito estudante',x:'A IA leu uma biblioteca gigante e aprendeu a adivinhar a próxima palavra muito bem. Ela não "sabe" como gente, ela prevê o que faz sentido.'},
     {e:'⚽',t:'Jeito narrador',x:'É como um narrador que viu milhares de jogos: pelo lance, ele já imagina o que vem depois. A IA faz isso com palavras.'}],
 i3:[{e:'🧩',t:'Jeito quebra-cabeça',x:'Token é a pecinha. A IA corta o texto em pecinhas (pedaços de palavra) para ler. Quanto mais pecinhas, mais "cansada" a conversa fica.'},
     {e:'🍕',t:'Jeito pizza',x:'O texto é a pizza, o token é cada fatia. A IA come fatia por fatia, e cada plano tem um limite de fatias.'}],
 d1:[{e:'⚽',t:'Jeito placar',x:'No placar da TV o resultado é GRANDE, o tempo é médio e o nome do canal é pequeno. Seu olho sabe o que olhar primeiro. Isso é hierarquia.'},
     {e:'🍽️',t:'Jeito cardápio',x:'No cardápio, o nome do prato vem em destaque, a descrição menor e o preço do lado. Organizado assim, você escolhe rápido.'}],
 b1:[{e:'🎬',t:'Jeito desenho animado',x:'O olho pisca igual desenho animado antigo: a pálpebra é "achatada" por um instante e depois volta. Rápido demais para notar o truque.'},
     {e:'🪟',t:'Jeito persiana',x:'A pálpebra é uma persiana: desce, fica fechada uma fração de segundo e sobe. O código só manda ela descer e subir.'}],
 g1:[{e:'🏠',t:'Jeito família',x:'O Gemini é o primo que mora na casa do Google: conhece o Gmail, o Drive e a agenda porque estão todos debaixo do mesmo teto.'},
     {e:'🧰',t:'Jeito caixa de ferramentas',x:'Cada IA é uma ferramenta. O Gemini é a chave que encaixa melhor nos parafusos do Google.'}],
 c1:[{e:'🧠',t:'Jeito simples',x:'GPT = "Transformador Pré-treinado Generativo". Traduzindo: um cérebro que já estudou antes (pré-treinado) e cria texto novo (generativo).'},
     {e:'🥋',t:'Jeito luta',x:'É o lutador que treinou anos antes da luta (pré-treinado) e na hora improvisa os golpes (generativo).'}]
};
