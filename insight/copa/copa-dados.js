// Copa do INSIGHT · equipes e robôs (dados que vão para o app)
// forma: 0 escudo clássico · 1 escudo pontudo · 2 hexágono · 3 brasão · 4 círculo
// padrao: 0 liso · 1 listras · 2 diagonal · 3 divisa · 4 quartos
window.DIVISOES=[
 {id:'mun',nome:'Municipal',cor:'#ff9a3c'},{id:'est',nome:'Estadual',cor:'#2bff88'},{id:'reg',nome:'Regional',cor:'#2ee6ff'},
 {id:'sd',nome:'Série D',cor:'#ff3c5a'},{id:'sc',nome:'Série C',cor:'#ff3c5a'},{id:'sb',nome:'Série B',cor:'#ff3c5a'},
 {id:'bra',nome:'Brasileirão do Código',cor:'#ffd23f'},{id:'con',nome:'Copa Continental',cor:'#c9a7ff'},{id:'mw',nome:'Mundial',cor:'#f0c75e'}];
window.EQUIPES=[
 // ---- você ----
 {id:'se',nome:'Studio Evolution Tech',sigla:'SET',div:'mun',c1:'#050b1f',c2:'#1E3A8A',forma:3,padrao:0,icone:'logo',orn:'asas',lema:'Do zero ao topo.',voce:true,
  robos:[{n:'Arnold',f:'Capitão',voce:true},{n:'Nova',f:'Front-end',fr:'Deixa que o visual é comigo.'},{n:'Loki',f:'Back-end',fr:'Se quebrar, eu conserto antes de você ver.'}]},
 // ---- Municipal ----
 {id:'tab',nome:'Garagem Hacker',sigla:'GH',div:'mun',c1:'#1d4ed8',c2:'#facc15',forma:0,padrao:1,icone:'chave',orn:'nenhum',lema:'Começamos na garagem.',
  robos:[{n:'Byte',f:'Front-end',fr:'Você ainda está no <h1>? Fofo.'},{n:'Ronda',f:'Back-end',fr:'Eu não durmo. Literalmente.'},{n:'Tuco',f:'Design',fr:'Seu site parece um boleto.'}]},
 {id:'bug',nome:'Caçadores de Bug',sigla:'CB',div:'mun',c1:'#0b1f12',c2:'#22c55e',forma:1,padrao:3,icone:'besouro',orn:'chifres',lema:'Nenhum bug escapa.',
  robos:[{n:'Pixel',f:'Design',fr:'Cor feia não passa por mim.'},{n:'Xeno',f:'Back-end',fr:'Já errei mais que você e mesmo assim tô na frente.'},{n:'Olga',f:'Testes',fr:'Achei 7 erros no seu código. Quer a lista?'}]},
 {id:'cmp',nome:'Turbo Compiladores',sigla:'TC',div:'mun',c1:'#7f1d1d',c2:'#f97316',forma:2,padrao:2,icone:'turbo',orn:'chamas',lema:'Compila ou chora.',
  robos:[{n:'Kernel',f:'Back-end',fr:'Lento, mas chego.'},{n:'Jade',f:'Front-end',fr:'Hoje eu viro a tabela.'},{n:'Mox',f:'Design',fr:'Simples é melhor. Igual a sua cabeça.'}]},
 // ---- Estadual ----
 {id:'kp',nome:'Kernel Panic',sigla:'KP',div:'est',c1:'#1f0505',c2:'#dc2626',forma:1,padrao:4,icone:'caveira',orn:'espinhos',lema:'Caos é método.',
  robos:[{n:'Vex',f:'Capitão',fr:'Supervisor de loja, mas não supervisiona nem o próprio código.',rival:true},{n:'Grim',f:'Back-end',fr:'Eu como servidor no café da manhã.'},{n:'Sable',f:'Design',fr:'Sua paleta de cores me deu dor de cabeça.'}]},
 {id:'pv',nome:'Legião Ponto-e-Vírgula',sigla:'LPV',div:'est',c1:'#0f766e',c2:'#99f6e4',forma:5,padrao:2,icone:'elmo',orn:'louros',lema:'Nenhuma linha sem fim.',
  robos:[{n:'Semi',f:'Back-end',fr:'Esqueceu o ponto e vírgula de novo?'},{n:'Lina',f:'Front-end',fr:'Responsivo é meu sobrenome.'},{n:'Dot',f:'Testes',fr:'Eu vejo tudo.'}]},
 {id:'loop',nome:'Serpentes do Loop',sigla:'SL',div:'est',c1:'#3b0764',c2:'#d946ef',forma:4,padrao:1,icone:'serpente',orn:'aureola',lema:'A gente nunca para.',
  robos:[{n:'Eko',f:'Back-end',fr:'Enquanto você descansa, eu repito.'},{n:'Rhea',f:'Design',fr:'Gira, gira, e eu continuo na frente.'},{n:'Tick',f:'Front-end',fr:'Tic-tac. Seu prazo tá acabando.'}]},
 // ---- Regional ----
 {id:'dr',nome:'Esquadrão Deploy',sigla:'ED',div:'reg',c1:'#0c4a6e',c2:'#38bdf8',forma:6,padrao:3,icone:'foguete',orn:'estrelas3',lema:'Sexta-feira? Sobe!',
  robos:[{n:'Rush',f:'Capitão',fr:'Já subi 3 sites hoje. E você?'},{n:'Vela',f:'Front-end',fr:'Leve e rápida.'},{n:'Tork',f:'Back-end',fr:'Meu servidor aguenta, e o seu?'}]},
 {id:'np',nome:'Null Pointer Mafia',sigla:'NPM',div:'reg',c1:'#0a0a0a',c2:'#a1a1aa',forma:7,padrao:4,icone:'chapeu',orn:'faixa',lema:'Do nada, tudo.',
  robos:[{n:'Nil',f:'Back-end',fr:'Você é tipo variável vazia: existe, mas não serve.'},{n:'Void',f:'Design',fr:'Menos é mais. Você é menos.'},{n:'Ref',f:'Testes',fr:'Te encontrei. De novo. Em último.'}]},
 {id:'cq',nome:'Cache Inferno',sigla:'CI',div:'reg',c1:'#431407',c2:'#fb923c',forma:8,padrao:2,icone:'chama',orn:'chamas',lema:'Memória que queima.',
  robos:[{n:'Brasa',f:'Front-end',fr:'Carrego antes de você clicar.'},{n:'Fumo',f:'Back-end',fr:'Lembro de cada erro seu.'},{n:'Chama',f:'Design',fr:'Seu site tá frio. Vou esquentar.'}]},
 // ---- Série D ----
 {id:'pp',nome:'Pixel Samurai',sigla:'PS',div:'sd',c1:'#450a0a',c2:'#fecaca',forma:2,padrao:0,icone:'katanas',orn:'sol',lema:'Um pixel, um golpe.',
  robos:[{n:'Mira',f:'Design',fr:'Seu botão tá 2 pixels torto.'},{n:'Grid',f:'Front-end',fr:'Alinhado igual exército.'},{n:'Hex',f:'Testes',fr:'#errado. Tenta de novo.'}]},
 {id:'pc',nome:'Stack Titans',sigla:'ST',div:'sd',c1:'#1c1917',c2:'#d6d3d1',forma:0,padrao:1,icone:'coluna',orn:'coroa',lema:'Empilhamos impérios.',
  robos:[{n:'Stak',f:'Back-end',fr:'Empilhei 300 tarefas. Você?'},{n:'Popi',f:'Front-end',fr:'Último a entrar, primeiro a sair. Igual você da liderança.'},{n:'Bloco',f:'Design',fr:'Quadrado, mas eficiente.'}]},
 {id:'gp',nome:'Git Vikings',sigla:'GV',div:'sd',c1:'#172554',c2:'#fbbf24',forma:3,padrao:3,icone:'viking',orn:'chifres',lema:'Commit ou morte.',
  robos:[{n:'Merge',f:'Capitão',fr:'Conflito? Eu resolvo na porrada.'},{n:'Branch',f:'Front-end',fr:'Tenho 12 versões melhores que a sua.'},{n:'Stash',f:'Back-end',fr:'Guardei sua vaga no rebaixamento.'}]},
 // ---- Série C ----
 {id:'bb',nome:'Byte Bandits',sigla:'BB',div:'sc',c1:'#1e1b4b',c2:'#a78bfa',forma:1,padrao:2,icone:'mascara',orn:'espinhos',lema:'Roubamos pontos.',
  robos:[{n:'Rato',f:'Back-end',fr:'Peguei seus pontos e você nem viu.'},{n:'Zara',f:'Design',fr:'Elegância criminosa.'},{n:'Kilo',f:'Front-end',fr:'1024 motivos pra te vencer.'}]},
 {id:'fw',nome:'Firewall Spartans',sigla:'FS',div:'sc',c1:'#7f1d1d',c2:'#fbbf24',forma:5,padrao:3,icone:'esparta',orn:'crista',lema:'Aqui não passa.',
  robos:[{n:'Muro',f:'Back-end',fr:'Bloqueado. Igual sua evolução.'},{n:'Senha',f:'Testes',fr:'Sua defesa é 123456.'},{n:'Porta',f:'Front-end',fr:'Só entra quem estuda.'}]},
 {id:'ac',nome:'Async Ninjas',sigla:'AN',div:'sc',c1:'#0f172a',c2:'#22d3ee',forma:6,padrao:4,icone:'shuriken',orn:'nenhum',lema:'Invisíveis e rápidos.',
  robos:[{n:'Await',f:'Capitão',fr:'Espera aí… não, não espera, já passei.'},{n:'Promi',f:'Back-end',fr:'Prometo que vou te ultrapassar. E cumpro.'},{n:'Call',f:'Front-end',fr:'Te ligo quando você chegar.'}]},
 // ---- Série B ----
 {id:'qc',nome:'Quantum Wolves',sigla:'QW',div:'sb',c1:'#1e1b4b',c2:'#67e8f9',forma:2,padrao:1,icone:'lobo',orn:'orbitas',lema:'A matilha calcula.',
  robos:[{n:'Qubit',f:'Back-end',fr:'Sou 0 e 1. Você é só 0.'},{n:'Spin',f:'Design',fr:'Giro e acerto.'},{n:'Flux',f:'Front-end',fr:'Velocidade da luz, querido.'}]},
 {id:'nd',nome:'Neon Dragons',sigla:'ND',div:'sb',c1:'#4a044e',c2:'#22d3ee',forma:8,padrao:2,icone:'dragao',orn:'asas',lema:'Fogo que brilha.',
  robos:[{n:'Luma',f:'Design',fr:'Seu tema escuro é só… escuro.'},{n:'Volt',f:'Back-end',fr:'Carga máxima. Você tá no modo economia.'},{n:'Glow',f:'Front-end',fr:'Vou te ofuscar.'}]},
 {id:'cr',nome:'Cloud Raiders',sigla:'CR',div:'sb',c1:'#082f49',c2:'#e0f2fe',forma:4,padrao:3,icone:'raio',orn:'estrelas3',lema:'Do céu a gente ataca.',
  robos:[{n:'Nimbus',f:'Capitão',fr:'Lá de cima você parece bem pequeno.'},{n:'Storm',f:'Back-end',fr:'Tempestade de commits chegando.'},{n:'Aero',f:'Front-end',fr:'Leve, rápido, e na sua frente.'}]},
 // ---- Brasileirão do Código ----
 {id:'ts',nome:'Leões do Silício',sigla:'LS',div:'bra',c1:'#064e3b',c2:'#fde047',forma:7,padrao:4,icone:'leao',orn:'coroa',lema:'Rei do código.',
  robos:[{n:'Atlas',f:'Capitão',fr:'Carrego o time nas costas. Você carrega o quê?'},{n:'Sílica',f:'Back-end',fr:'Duro como chip.'},{n:'Torre',f:'Design',fr:'Do alto, vejo seus erros.'}]},
 {id:'ar',nome:'Algoritmo Imperial',sigla:'AI',div:'bra',c1:'#1e3a8a',c2:'#fbbf24',forma:5,padrao:2,icone:'aguia',orn:'louros',lema:'Império do código.',
  robos:[{n:'Rainha',f:'Capitã',fr:'Ajoelha e estuda.'},{n:'Bispo',f:'Back-end',fr:'Sempre na diagonal da sua derrota.'},{n:'Peão',f:'Front-end',fr:'Até eu tô na sua frente.'}]},
 {id:'hs',nome:'Hackers do Pampa',sigla:'HP',div:'bra',c1:'#14532d',c2:'#dc2626',forma:0,padrao:3,icone:'cavalo',orn:'sol',lema:'Bah, que deploy.',
  robos:[{n:'Minuano',f:'Capitão',fr:'Vento gelado na sua nuca.'},{n:'Erva',f:'Back-end',fr:'Chimarrão e deploy, bah.'},{n:'Pampa',f:'Front-end',fr:'Campo aberto e eu correndo sozinho.'}]},
 // ---- Copa Continental ----
 {id:'goo',site:'google.com',nome:'Equipe Google',sigla:'G',div:'con',c1:'#1a3d8f',c2:'#34a853',forma:4,padrao:4,icone:'mono',orn:'estrelas5',lema:'Achamos tudo.',gigante:true,
  robos:[{n:'Busca',f:'Back-end',fr:'Pesquisei seu nome. Zero resultados no topo.'},{n:'Mapa',f:'Front-end',fr:'Você está aqui: lá embaixo.'},{n:'Nuvem',f:'Infra',fr:'Guardo tudo. Até sua derrota.'}]},
 {id:'meta',site:'meta.com',nome:'Equipe Meta',sigla:'M',div:'con',c1:'#0a1f5c',c2:'#0866ff',forma:2,padrao:2,icone:'mono',orn:'estrelas5',lema:'Conectamos o mundo.',gigante:true,
  robos:[{n:'Feed',f:'Front-end',fr:'Rolei seu código e não curti.'},{n:'Reel',f:'Design',fr:'15 segundos pra te passar.'},{n:'Graph',f:'Back-end',fr:'Mapeei seus pontos fracos.'}]},
 {id:'sam',site:'samsung.com',nome:'Equipe Samsung',sigla:'S',div:'con',c1:'#050b3a',c2:'#1428a0',forma:6,padrao:1,icone:'mono',orn:'estrelas5',lema:'Telas que dobram o jogo.',gigante:true,
  robos:[{n:'Fold',f:'Design',fr:'Dobro a tela e dobro o placar.'},{n:'Galax',f:'Front-end',fr:'Brilho no máximo, você no mínimo.'},{n:'Chip',f:'Back-end',fr:'Eu fabrico o que você usa.'}]},
 // ---- Mundial ----
 {id:'apl',site:'apple.com',nome:'Equipe Apple',sigla:'A',div:'mw',c1:'#111827',c2:'#e5e7eb',forma:3,padrao:0,icone:'mono',orn:'coroa',lema:'Pensamos diferente.',gigante:true,
  robos:[{n:'Polido',f:'Design',fr:'Cada pixel seu me ofende.'},{n:'Swift',f:'Front-end',fr:'Rápido e elegante. Você é só… rápido pra errar.'},{n:'Silício',f:'Back-end',fr:'Meu chip pensa mais que você.'}]},
 {id:'gpt',site:'chatgpt.com',nome:'Equipe GPT',sigla:'GPT',div:'mw',c1:'#022c22',c2:'#10a37f',forma:8,padrao:3,icone:'mono',orn:'coroa',lema:'Respondemos tudo.',gigante:true,
  robos:[{n:'Prompt',f:'Capitão',fr:'Me pergunte como ganhar de você. Eu sei.'},{n:'Token',f:'Back-end',fr:'Gastei menos tokens que seu esforço.'},{n:'Turbo',f:'Front-end',fr:'Gerando vitória…'}]},
 {id:'cla',site:'claude.ai',nome:'Equipe Claude',sigla:'C',div:'mw',c1:'#3b1a0f',c2:'#d97757',forma:1,padrao:2,icone:'mono',orn:'coroa',lema:'Pensamos fundo.',gigante:true,
  robos:[{n:'Opus',f:'Capitão',fr:'Li seu código inteiro. Vamos conversar.'},{n:'Sonnet',f:'Front-end',fr:'Escrevo melhor que você em 14 linhas.'},{n:'Haiku',f:'Back-end',fr:'Curto. Rápido. Na frente.'}]}
];
