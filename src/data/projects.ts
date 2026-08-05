export type ProjectSlug = 'commi-app' | 'linkes' | 'crystal-lab' | 'universus-merge' | 'bellafy'

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
  {
    slug: 'universus-merge',
    title: 'Universus Merge',
    shortDescription:
      'Merge cósmico: funde partículas, forja buracos negros e expande o universo.',
    description:
      'No Universus Merge você começa com um grão de poeira e vai fundindo — dois iguais viram um maior — até forjar estrelas, galáxias e buracos negros. O jogo roda offline, rende recompensas enquanto você está fora e tem visuais neon procedurais feitos com Skia. Trinta tiers para descobrir, do Fragmento à Singularidade Cósmica, com um codex que registra cada descoberta e anúncios apenas quando você quiser.',
    features: [
      'Loop de merge infinito com 30 tiers cósmicos — de Poeira a Singularidade Cósmica',
      'Visuais neon procedurais em tempo real: partículas, glow e StarField parallax com Skia',
      'Idle offline — o universo continua crescendo mesmo quando você fecha o app',
      'Codex de descobertas: cada tier inédito desbloqueado fica registrado com nome e sprite'
    ],
    appStoreUrl: null,
    playStoreUrl: null,
  },
  {
    slug: 'bellafy',
    title: 'Bellafy',
    shortDescription:
      'Agenda inteligente para salões: serviços, equipe e clientes em um só lugar.',
    description:
      'O Bellafy foi pensado para quem vive o salão no dia a dia — donos, profissionais e clientes. Administradores organizam serviços, equipe, horários e agendamentos; profissionais acompanham a agenda; clientes descobrem salões, escolhem serviços e reservam horários com poucos toques. Tudo sincronizado em tempo real, com fotos nos serviços e ferramentas para compartilhar disponibilidade.',
    features: [
      'Agenda completa para salões — visualização por profissional, detalhes e cancelamentos',
      'Cadastro de serviços, clientes e profissionais com fotos e horários de funcionamento',
      'Fluxo de agendamento para clientes: salões, serviços, data e confirmação',
      'Perfis distintos para administrador, profissional e cliente, cada um com sua área',
      'Compartilhamento de horários disponíveis e sincronização com a API Bellafy',
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
