import type { PrivacyDoc } from './types'

export const commiByLocale: Record<'pt-BR' | 'en', PrivacyDoc> = {
  'pt-BR': {
    locale: 'pt-BR',
    htmlLang: 'pt-BR',
    title: 'Política de privacidade',
    meta: 'Commi · aplicativo móvel (iOS e Android)',
    intro:
      'Esta página descreve como o aplicativo Commi trata informações quando você o utiliza, em linha com o funcionamento do app como cliente da plataforma Commi e da respetiva API.',
    sections: [
      {
        heading: '1. Responsável e contato',
        body:
          'O aplicativo é disponibilizado pelo titular indicado nas lojas (Apple App Store / Google Play). Para questões de privacidade ou dos seus dados: menezes.nns@icloud.com.',
      },
      {
        heading: '2. Natureza do serviço',
        body:
          'O Commi destina-se a utilizadores com conta na plataforma Commi. O app sincroniza dados comerciais (por exemplo vendas, estoque, clientes e configurações) através da API configurada na aplicação.',
      },
      {
        heading: '3. Dados tratados',
        body:
          'Podem ser tratados identificadores de sessão ou tokens de autenticação, dados que a sua organização introduz no app (dados comerciais e de configuração), identificadores do dispositivo relevantes para notificações push quando ativadas, e informações técnicas necessárias ao funcionamento da API.',
      },
      {
        heading: '4. Finalidades',
        body:
          'Operar o serviço de gestão comercial, autenticar o utilizador, sincronizar dados com a infraestrutura Commi, enviar notificações relacionadas com a atividade da conta quando aplicável, e cumprir obrigações legais.',
      },
      {
        heading: '5. Base legal e conservação',
        body:
          'O tratamento assenta na execução do serviço solicitado e no legítimo interesse de operar a plataforma, conforme a legislação aplicável (incluindo LGPD quando relevante). Os períodos de conservação seguem a configuração da plataforma e as necessidades legais e contabilísticas da conta.',
      },
      {
        heading: '6. Partilha',
        body:
          'Os dados introduzidos são processados pela infraestrutura associada à API Commi da sua organização. Não vendemos os seus dados pessoais. Prestadores (por exemplo hospedagem ou notificações) podem atuar como encarregados de tratamento na medida necessária ao serviço.',
      },
      {
        heading: '7. Segurança',
        body:
          'São adotadas medidas técnicas e organizativas adequadas, incluindo comunicação com a API sobre HTTPS e boas práticas de armazenamento local de tokens no dispositivo, dentro das limitações da plataforma móvel.',
      },
      {
        heading: '8. Os seus direitos',
        body:
          'Nos termos da LGPD ou de outra lei aplicável, pode solicitar confirmação, acesso, correção, anonimização, portabilidade ou eliminação de dados pessoais quando tratados por nós, através do contacto indicado acima ou do responsável pela conta Commi da sua organização.',
      },
      {
        heading: '9. Alterações',
        body:
          'Esta política pode ser atualizada. A data da última revisão figura abaixo. O uso continuado após alterações implica aceitação da versão publicada.',
      },
    ],
    lastUpdated: '3 de maio de 2026',
  },
  en: {
    locale: 'en',
    htmlLang: 'en',
    title: 'Privacy policy',
    meta: 'Commi · mobile app (iOS and Android)',
    intro:
      'This page describes how the Commi app handles information when you use it, in line with the app acting as a client of the Commi platform and its API.',
    sections: [
      {
        heading: '1. Controller and contact',
        body:
          'The app is provided by the party listed on the Apple App Store / Google Play. For privacy or data requests: menezes.nns@icloud.com.',
      },
      {
        heading: '2. Nature of the service',
        body:
          'Commi is intended for users with an account on the Commi platform. The app synchronises business data (e.g. sales, inventory, customers and settings) through the API configured in the application.',
      },
      {
        heading: '3. Data processed',
        body:
          'We may process session identifiers or authentication tokens, data your organisation enters in the app (business and configuration data), device identifiers relevant to push notifications when enabled, and technical information required for the API to operate.',
      },
      {
        heading: '4. Purposes',
        body:
          'To provide the business management service, authenticate users, synchronise data with Commi infrastructure, send notifications related to account activity where applicable, and meet legal obligations.',
      },
      {
        heading: '5. Legal basis and retention',
        body:
          'Processing is based on performing the service you request and our legitimate interests in operating the platform, under applicable law (including LGPD where relevant). Retention follows platform configuration and the legal and accounting needs of the account.',
      },
      {
        heading: '6. Sharing',
        body:
          'Data you enter is processed by the infrastructure linked to your organisation’s Commi API. We do not sell your personal data. Providers (e.g. hosting or notifications) may act as processors where necessary.',
      },
      {
        heading: '7. Security',
        body:
          'We apply appropriate technical and organisational measures, including HTTPS to the API and sound practices for storing tokens locally on the device, within the limits of the mobile platforms.',
      },
      {
        heading: '8. Your rights',
        body:
          'Under LGPD or other applicable law, you may request confirmation, access, correction, anonymisation, portability or erasure of personal data we process, using the contact above or your organisation’s Commi account owner.',
      },
      {
        heading: '9. Changes',
        body:
          'This policy may be updated. The last revision date is below. Continued use after changes means you accept the published version.',
      },
    ],
    lastUpdated: 'May 3, 2026',
  },
}
