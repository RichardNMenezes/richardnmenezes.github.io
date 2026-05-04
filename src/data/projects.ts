export type ProjectSlug = 'commi-app' | 'linkes' | 'crystal-lab'

export type Project = {
  slug: ProjectSlug
  title: string
  shortDescription: string
  description: string
  platform: string
  release: string
  technologies: string
  role: string
  features: string[]
  tags: string[]
}

export const projects: Project[] = [
  {
    slug: 'commi-app',
    title: 'Commi',
    shortDescription:
      'App mobile para operações comerciais: vendas, estoque, clientes e relatórios.',
    description:
      'O Commi é o aplicativo mobile que acompanha o ecossistema Commi. Permite registrar vendas com várias formas de pagamento, acompanhar estoque, cadastrar clientes e produtos, gerir caixa e visualizar gráficos e relatórios. Integra-se à API em produção (api.commi.com.br) e foi construído com Expo e React Native, com notificações push e interface preparada para uso em campo.',
    platform: 'iOS, Android e exportação web estática (Expo)',
    release: 'Versão 1.0.4 (build iOS 20)',
    technologies:
      'React Native, Expo 54, TypeScript, expo-router, axios, Recharts (react-native-chart-kit), expo-notifications, Reanimated',
    role: 'Desenvolvedor independente',
    features: [
      'Vendas com múltiplos produtos, PIX, cartões e métodos personalizados',
      'Estoque, alertas, produtos compostos e variantes',
      'Clientes, filiais e assinaturas quando aplicável à conta',
      'Relatórios, gráficos e exportação / compartilhamento (ex.: impressão)',
      'Notificações e fluxo de autenticação alinhado à API Commi',
    ],
    tags: ['React Native', 'Expo', 'TypeScript', 'API REST'],
  },
  {
    slug: 'linkes',
    title: 'Linkes',
    shortDescription:
      'Jogo de raciocínio com mundos, modo zen, velocidade e desafio diário.',
    description:
      'Linkes é um puzzle para celular com progressão por mundos e fases, modo Zen sem pressão, modo Velocidade contra o cronômetro e desafio diário com fases aleatórias. Usa armazenamento local (SQLite no dispositivo), internacionalização (vários idiomas) e anúncios via Google Mobile Ads. Desenvolvido com Expo e React Native.',
    platform: 'iOS e Android',
    release: 'Versão 1.0.1 (Android versionCode 4)',
    technologies:
      'React Native, Expo 55, TypeScript, expo-router, expo-sqlite, Zustand, i18next, react-native-google-mobile-ads, Reanimated',
    role: 'Desenvolvedor independente',
    features: [
      'Aventura com mundos e dezenas de fases',
      'Modo Zen para jogar sem limite de tempo',
      'Modo Velocidade com cronômetro e recordes',
      'Desafio diário e economia de moedas / dicas',
      'Suporte multilíngue e armazenamento offline',
    ],
    tags: ['React Native', 'Expo', 'SQLite', 'AdMob'],
  },
  {
    slug: 'crystal-lab',
    title: 'Crystal Lab',
    shortDescription:
      'Jogo incremental: minere cristais, evolua laboratórios, equipamentos e joalheria.',
    description:
      'Crystal Lab é um idle/incremental em que você toca no cristal para gerar recursos, desbloqueia laboratórios subsequentes, melhora ferramentas em Equipamentos, lapida cristais brutos e troca lapidados na joalheria por joias da coleção. Inclui produção passiva, galeria de progresso e anúncios (Google Mobile Ads). Stack Expo com navegação nativa, Zustand e animações com Reanimated.',
    platform: 'iOS e Android',
    release: 'Versão 1.0.0',
    technologies:
      'React Native, Expo 55, TypeScript, React Navigation, Zustand, i18next, react-native-google-mobile-ads, Reanimated',
    role: 'Desenvolvedor independente',
    features: [
      'Batalha por toques no cristal e mineração automática',
      'Vários laboratórios com progressão por equipamentos',
      'Galeria: lapidação, joalheria e coleção de joias',
      'Persistência local e feedback háptico',
      'Política de privacidade alinhada ao uso de anúncios (AdMob)',
    ],
    tags: ['React Native', 'Expo', 'Zustand', 'AdMob'],
  },
]

export function getProjectBySlug (slug: string): Project | undefined {
  return projects.find ((p) => p.slug === slug)
}

export function isProjectSlug (slug: string): slug is ProjectSlug {
  return projects.some ((p) => p.slug === slug)
}
