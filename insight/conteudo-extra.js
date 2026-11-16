// Conteúdo extra do INSIGHT: os perfis de IA, design e bastidores ganham trilhas de verdade.
window.POSTS.push(
 // ---------- CLAUDE ----------
 {id:'c10', curso:'claude', tipo:'carrossel', titulo:'Pedido bom = resposta boa', slides:[
  {emoji:'🎯', h:'Diga o <i>objetivo</i>', p:'Em vez de "arruma o site", diga "quero que o botão de comprar fique maior e laranja no celular". Quanto mais claro o alvo, menos voltas.'},
  {emoji:'🧾', h:'Dê o <i>contexto</i>', p:'Quem vai usar, onde vai aparecer e o que já existe. É como passar a escalação antes do jogo.'},
  {emoji:'✅', h:'Diga como é o <i>pronto</i>', p:'"Pronto é quando abrir no iPhone sem nada sair da tela." Assim dá para conferir se acertou.'},
  {quiz:{q:'Qual pedido é melhor?', ops:['Melhora meu app','No app da Katiúscia, deixa o botão Salvar maior e fixo embaixo no celular'], ok:1, exp:'O segundo diz onde, o quê e como. O primeiro deixa tudo para adivinhar.'}}]},
 {id:'c11', curso:'claude', tipo:'desafio', q:'O Claude errou o que você pediu. O que fazer primeiro?', ops:['Começar um chat novo do zero','Dizer exatamente o que ficou errado e como deveria ser','Repetir o mesmo pedido'], ok:1, exp:'Apontar o erro com exemplo ("o título ficou cortado no iPhone; deveria quebrar a linha") resolve rápido. Repetir igual tende a dar o mesmo resultado.', dica:'Feedback específico.'},
 {id:'c12', curso:'claude', tipo:'carrossel', titulo:'Quando usar o Claude e quando o AI Node', slides:[
  {emoji:'🧠', h:'Claude: <i>pensar e criar</i>', p:'Criar tela nova, corrigir erro, escrever texto, montar conteúdo. Coisa que precisa de cabeça.'},
  {emoji:'⚙️', h:'AI Node: <i>repetir</i>', p:'Backup, publicar, arrumar pasta, conferir site. Coisa que é sempre igual. Não gasta token.'},
  {emoji:'📋', h:'Os dois juntos', p:'Deu erro? Toque em "copiar para o Claude" no resultado do pedido e cole aqui. O Claude lê e já sabe o que aconteceu.'}]},
 {id:'c13', curso:'claude', tipo:'curiosidade', emoji:'🪙', frente:'O que é "token"?', verso:'É o pedacinho de texto que a IA lê e escreve (mais ou menos meia palavra). Cada conversa gasta tokens. Por isso tarefas repetidas vão para o AI Node: o PC faz sem gastar nenhum.'},
 {id:'c14', curso:'claude', tipo:'carrossel', titulo:'Mande print, não descrição', slides:[
  {emoji:'📸', h:'Uma imagem vale mil palavras', p:'Print da tela com o erro mostra tamanho, cor, posição. Descrever em texto perde detalhe.'},
  {emoji:'✏️', h:'Junto com uma frase', p:'Print + "esse botão está cortado no iPhone 13" é o pedido perfeito.'},
  {emoji:'📋', h:'Erro do PC?', p:'Use o relatório do PC (botão relatório) e cole o texto. Assim o Claude vê espaço, programas e o que deu errado.'}]},

 // ---------- CHATGPT ----------
 {id:'g10', curso:'chatgpt', tipo:'carrossel', titulo:'Cada IA tem o seu forte', slides:[
  {emoji:'💬', h:'ChatGPT', p:'Bom para conversa rápida, ideias soltas, legenda de post e imagens.'},
  {emoji:'🧠', h:'Claude', p:'Bom para código grande, projetos longos e seguir regras detalhadas.'},
  {emoji:'🏠', h:'Gemini', p:'Bom quando a resposta está no seu Gmail, Drive ou Agenda do Google.'},
  {quiz:{q:'Para criar 10 ideias de legenda da BLESSAINT rapidinho, qual combina mais?', ops:['ChatGPT','Gemini'], ok:0, exp:'Legenda e ideia solta é o forte do ChatGPT. O Gemini brilha quando precisa buscar algo no seu Google.'}}]},
 {id:'g11', curso:'chatgpt', tipo:'desafio', q:'Você quer uma imagem de camiseta para o Instagram. Qual ferramenta faz isso direto no chat?', ops:['ChatGPT (gera imagem)','Calculadora','Bloco de notas'], ok:0, exp:'O ChatGPT gera imagens a partir do texto. Mesmo assim, foto de produto real vende mais: use a imagem de IA para ideia e rascunho.', dica:'Qual delas é IA?'},
 {id:'g12', curso:'chatgpt', tipo:'curiosidade', emoji:'🤖', frente:'O que quer dizer GPT?', verso:'Generative Pre-trained Transformer: um programa que aprendeu lendo muito texto e gera texto novo. Claude e Gemini usam a mesma ideia base, mas cada empresa treina do seu jeito.'},
 {id:'g13', curso:'chatgpt', tipo:'carrossel', titulo:'IA erra: confira sempre', slides:[
  {emoji:'🎭', h:'Ela pode inventar', p:'Às vezes a IA responde com confiança algo que não existe (um link, um número, uma lei). Isso se chama "alucinação".'},
  {emoji:'🔎', h:'Confira o que importa', p:'Preço, data, valor de contrato, comando que apaga coisas: sempre confira antes de usar.'},
  {emoji:'🧪', h:'Teste o código', p:'Código de IA tem que ser testado. É o que a Oficina e o Revisar fazem por você.'}]},

 // ---------- GEMINI ----------
 {id:'e10', curso:'gemini', tipo:'carrossel', titulo:'Gemini no seu Google', slides:[
  {emoji:'📧', h:'Gmail', p:'"Resuma os e-mails de clientes desta semana" ou "ache o comprovante da Kiwify".'},
  {emoji:'📁', h:'Drive', p:'"Ache a planilha de vendas de outubro" sem precisar lembrar a pasta.'},
  {emoji:'📅', h:'Agenda', p:'"O que eu tenho na quinta?" e ele olha a sua Agenda do Google.'}]},
 {id:'e11', curso:'gemini', tipo:'desafio', q:'Você quer achar um PDF de contrato que está em algum lugar do seu Drive. O que é mais rápido?', ops:['Abrir pasta por pasta','Pedir ao Gemini ou usar o "procurar arquivo" do AI Node','Baixar o Drive inteiro'], ok:1, exp:'Os dois procuram por você. O AI Node procura pelo nome em Projetos Arnold, sem gastar token.', dica:'Deixe a máquina procurar.'},
 {id:'e12', curso:'gemini', tipo:'curiosidade', emoji:'♊', frente:'Por que o nome Gemini?', verso:'Gêmeos em latim. Foi a união de duas equipes de IA do Google (Brain e DeepMind) que viraram uma só, como gêmeos trabalhando juntos.'},

 // ---------- DESIGN ----------
 {id:'d10', curso:'design', tipo:'carrossel', titulo:'Espaço também é design', slides:[
  {emoji:'🫁', h:'Respiro', p:'Coisas apertadas parecem bagunça. Espaço em volta (padding e margin) deixa tudo mais caro e calmo.'},
  {emoji:'📏', h:'Use sempre os mesmos', p:'Escolha 3 tamanhos de espaço (8, 16, 24) e use só eles. É assim que os apps grandes ficam organizados.'},
  {emoji:'👀', h:'Teste do aperto', p:'Se você precisa forçar a vista para separar duas coisas, falta espaço entre elas.'}]},
 {id:'d11', curso:'design', tipo:'desafio', q:'Qual combinação de letra fica mais fácil de ler?', ops:['Texto cinza-claro em fundo branco','Texto preto em fundo branco','Texto amarelo em fundo branco'], ok:1, exp:'Contraste alto é leitura fácil. Cinza-claro e amarelo no branco cansam a vista e somem no sol.', dica:'Pense no celular na rua.'},
 {id:'d12', curso:'design', tipo:'carrossel', titulo:'Uma ação principal por tela', slides:[
  {emoji:'🎯', h:'O botão mais importante', p:'Cada tela tem UMA coisa que você mais quer que a pessoa faça. Ela ganha a cor forte.'},
  {emoji:'🔇', h:'O resto mais calmo', p:'Ações secundárias ficam com contorno ou texto. Se tudo grita, ninguém escuta.'},
  {emoji:'🧭', h:'No AI Node', p:'O > atualizar_tudo é a ação principal do início. Os menus ficam mais calmos embaixo.'}]},
 {id:'d13', curso:'design', tipo:'curiosidade', emoji:'🔤', frente:'Por que o AI Node usa letra de terminal?', verso:'Letra mono (todas as letras com a mesma largura) lembra código e passa a ideia de máquina trabalhando. Mas títulos grandes usam outra letra (Inter) para ficar fácil de ler. Misturar 2 letras no máximo é a regra de ouro.'},
 {id:'d14', curso:'design', tipo:'desafio', q:'Quantos tipos de letra (fontes) um app deve usar, no máximo?', ops:['1 ou 2','5','Quantos quiser'], ok:0, exp:'Uma para títulos e uma para textos. Mais que isso vira bagunça visual.', dica:'Menos é mais.'},

 // ---------- BASTIDORES ----------
 {id:'b10', curso:'bastidores', tipo:'carrossel', titulo:'Como o AI Node fala com o seu PC', slides:[
  {emoji:'📱', h:'1. O celular escreve um recado', p:'Você toca num botão e o app escreve um pedido num arquivo JSON no GitHub (privado).'},
  {emoji:'⏱️', h:'2. O PC confere a cada minuto', p:'Uma tarefa agendada no Windows abre o PWS escondido, lê o arquivo e vê se tem pedido novo.'},
  {emoji:'⚙️', h:'3. O PWS faz e responde', p:'Executa a função do menu, escreve o resultado no mesmo arquivo e manda de volta. O celular lê e mostra a barra verde.'}]},
 {id:'b11', curso:'bastidores', tipo:'desafio', q:'No AI Node, por que o celular não manda o PC fazer QUALQUER comando?', ops:['Por segurança: só ações da lista, se alguém pegar o celular não manda apagar nada','Porque o PC é lento','Porque o GitHub não deixa'], ok:0, exp:'O PC só aceita os pedidos da lista (backup, publicar, arrumar…). Um comando livre seria perigoso.', dica:'Pense no que aconteceria se alguém mandasse "apagar tudo".'},
 {id:'b12', curso:'bastidores', tipo:'curiosidade', emoji:'🔐', frente:'Onde fica a senha do SUPER VISÃO?', verso:'Em lugar nenhum! O app guarda só um cofre embaralhado (criptografado). A sua senha abre o cofre no seu celular e pega a chave. Sem a senha, o cofre é só um monte de letras sem sentido.'}
);
