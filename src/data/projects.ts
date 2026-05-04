export type ProjectSlug = 'commi-app' | 'linkes' | 'crystal-lab'

export type Project = {
  slug: ProjectSlug
  title: string
  shortDescription: string
  description: string
  features: string[]
  /** null = botão desativado / em breve */
  appStoreUrl: string | null
  playStoreUrl: string | null
}

export const projects: Project[] = [
  {
    slug: 'commi-app',
    title: 'Commi',
    shortDescription:
      'Loja no bolso: vendas, estoque e relatórios sem dor de cabeça.',
    description:
      'O Commi é feito para quem precisa vender de verdade no dia a dia — na banca, no balcão ou na rua. Registre vendas em segundos, veja o que entra e sai do estoque, acompanhe clientes e entenda num relance como o negócio vai, com gráficos e relatórios que ajudam a decidir na hora.',
    features: [
      'Vendas com vários produtos e pagamentos à sua medida (PIX, cartão, dinheiro e mais)',
      'Estoque sob controle, com alertas e produtos simples ou com variações',
      'Clientes e filiais organizados — ideal para equipes que compartilham a mesma operação',
      'Relatórios e exportações para compartilhar ou imprimir quando precisar',
      'Notificações e início de sessão seguro para você e para a sua equipe',
    ],
    appStoreUrl: 'https://apps.apple.com/us/app/commi/id6756511448',
    playStoreUrl: null,
  },
  {
    slug: 'linkes',
    title: 'Linkes',
    shortDescription:
      'Puzzle de lógica: mundos, zen, velocidade e desafio diário.',
    description:
      'Linkes convida você a traçar o caminho certo em cada nível — simples de aprender, difícil de largar. Explore mundos cheios de fases, desligue o estresse no modo Zen ou desafie a si mesmo contra o relógio na Velocidade. Todo dia tem um desafio novo: ideal para uma pausa rápida ou para ficar “só mais uma”. Vários idiomas e dá para jogar mesmo quando a internet fraqueja.',
    features: [
      'Aventura com mundos e muitas fases para ir subindo de nível',
      'Modo Zen — jogue ao seu ritmo, sem pressa',
      'Modo Velocidade — bata os seus recordes e sinta a adrenalina',
      'Desafio diário e recompensas para quem gosta de voltar todos os dias',
      'Progresso guardado no celular — o seu jogo, sempre com você',
    ],
    appStoreUrl: 'https://apps.apple.com/us/app/linkes/id6763957011',
    playStoreUrl: null,
  },
  {
    slug: 'crystal-lab',
    title: 'Crystal Lab',
    shortDescription:
      'Toque no cristal, evolua labs e colecione joias raras.',
    description:
      'No Crystal Lab cada toque conta: o seu cristal gera riqueza, os laboratórios abrem novas possibilidades e os equipamentos multiplicam o que você produz. Transforme brutos em pedras brilhantes, invista na joalheria e complete a galeria com joias raras. Perfeito para quem curte ver tudo crescer, desbloquear o próximo passo e abrir o app “só mais cinco minutinhos”.',
    features: [
      'Ritmo viciante: cada toque no cristal conta, e a produção continua rendendo quando você volta ao jogo',
      'Vários laboratórios — cada um com ferramentas para melhorar e evoluir',
      'Lapidação, joalheria e uma coleção de joias para completar',
      'Feedback na tela e vibração que deixam cada melhoria mais gostosa de aplicar',
      'Ideal para pausas curtas ou para acompanhar a evolução ao longo do dia',
    ],
    appStoreUrl: null,
    playStoreUrl: null,
  },
]

export function getProjectBySlug (slug: string): Project | undefined {
  return projects.find ((p) => p.slug === slug)
}

export function isProjectSlug (slug: string): slug is ProjectSlug {
  return projects.some ((p) => p.slug === slug)
}
