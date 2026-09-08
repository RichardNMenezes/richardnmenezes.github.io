import type { PrivacyDoc } from './types'

export const palworldPaldeckByLocale: Record<'pt-BR' | 'en', PrivacyDoc> = {
  'pt-BR': {
    locale: 'pt-BR',
    htmlLang: 'pt-BR',
    title: 'Política de privacidade',
    meta: 'Palworld Paldeck · aplicativo para iOS, Android e versão web',
    intro:
      'Esta política explica como o Palworld Paldeck trata informações no aplicativo e em sua versão web, quando disponível. É um guia independente feito por fãs, sem afiliação ou endosso da Pocketpair. As práticas abaixo descrevem a versão atual; a disponibilidade de anúncios e serviços depende da plataforma e da configuração da versão distribuída.',
    sections: [
      {
        heading: '1. Responsável e contato',
        body:
          'Richard Menezes é o responsável pelo Palworld Paldeck e pelo tratamento de dados sob seu controle. Para dúvidas, pedidos relacionados a dados pessoais ou assuntos de privacidade, escreva para menezes.nns@icloud.com. Se você entrar em contato, trataremos seu endereço de e-mail, o conteúdo da mensagem e os anexos que decidir enviar para responder à solicitação.',
        links: [{ label: 'Entrar em contato sobre privacidade', href: 'mailto:menezes.nns@icloud.com' }],
      },
      {
        heading: '2. Conta e permissões',
        body:
          'O app não exige cadastro, login ou conta de Palworld, e não solicita nome, telefone, documentos ou dados de pagamento para consultar o guia. As funcionalidades não acessam contatos, câmera, microfone ou localização GPS. As posições nos mapas representam locais do jogo, não a localização real do usuário. Dados técnicos tratados pelos serviços de anúncios são descritos separadamente abaixo.',
      },
      {
        heading: '3. Informações salvas no dispositivo',
        body:
          'O app salva o catálogo para consultas offline, favoritos, espécies da coleção, equipes (nome, Pals, finalidade e notas) e preferência de idioma. No celular, esses dados ficam em um banco local; no navegador, no armazenamento local do site. Não há sincronização de conta nem envio desses registros pessoais à API do catálogo. Backups do sistema ou do navegador podem incluir esses dados, conforme suas configurações. Evite incluir informações sensíveis nas notas das equipes.',
      },
      {
        heading: '4. Uso local, recompensas e avaliações',
        body:
          'Para limitar a frequência dos convites de anúncio e de avaliação, o app guarda localmente datas de uso, contadores de sessões e ações, convites exibidos ou recusados, solicitações de avaliação e o prazo do benefício sem banners. Esses contadores não são enviados a um serviço próprio de análise de uso. O vídeo com recompensa é opcional e pode conceder 24 horas sem banners naquele dispositivo; recusar não bloqueia o catálogo. Avaliações são processadas pela Apple ou pelo Google: o app não recebe sua nota nem confirma se você enviou uma avaliação.',
      },
      {
        heading: '5. Catálogo online e registros técnicos',
        body:
          'Quando há conexão, o app consulta a API para atualizar o catálogo público. A infraestrutura recebe o endereço IP e dados da requisição, como rota, horário e informações técnicas de conexão, que podem constar de registros operacionais. Esses dados são usados para entregar o conteúdo, diagnosticar falhas e limitar acessos abusivos. A busca e os cálculos de reprodução são executados localmente; o app não envia favoritos, coleção ou notas de equipes nessa consulta.',
      },
      {
        heading: '6. Anúncios no celular — Google AdMob',
        body:
          'As versões com publicidade usam Google Mobile Ads (AdMob) para banners e vídeos opcionais. O SDK pode coletar e compartilhar IP (inclusive para estimar região), identificadores de dispositivo ou publicidade, interações e diagnósticos para anúncios, medição e prevenção de fraude. O app solicita anúncios não personalizados; isso não elimina toda coleta. Identificadores sujeitos à autorização dependem das permissões e escolhas aplicáveis.',
        links: [
          { label: 'Política de privacidade do Google', href: 'https://policies.google.com/privacy?hl=pt-BR' },
          { label: 'Dados tratados pelo Google Mobile Ads', href: 'https://developers.google.com/admob/android/privacy/play-data-disclosure' },
        ],
      },
      {
        heading: '7. Consentimento e preferências de anúncios',
        body:
          'No aplicativo nativo, a integração consulta o Google UMP antes de inicializar anúncios e só solicita publicidade quando esse serviço permite. Quando exigido pelo serviço, você pode reabrir “Gerenciar preferências de privacidade” nas configurações. No iOS, a autorização de rastreamento segue o aviso do sistema quando aplicável; recusá-la não impede o uso do guia. Você também pode gerenciar permissões de rastreamento no iOS e identificadores de publicidade no Android pelas configurações do aparelho.',
      },
      {
        heading: '8. Versão web e cookies de publicidade',
        body:
          'Quando anúncios AdSense estiverem ativos na versão web, Google e seus parceiros podem usar cookies e identificadores para exibir e medir anúncios, inclusive com base em visitas anteriores a este e a outros sites, conforme suas escolhas. Gerencie cookies no navegador e personalização nas configurações de anúncios do Google. O armazenamento local descrito na seção 3 mantém suas preferências e coleção. Esta página de política no portfólio não carrega o AdSense do app.',
        links: [
          { label: 'Configurações de anúncios do Google', href: 'https://www.google.com/settings/ads' },
          { label: 'Como o Google usa informações de apps e sites parceiros', href: 'https://policies.google.com/technologies/partner-sites?hl=pt-BR' },
        ],
      },
      {
        heading: '9. Atualizações e serviços externos',
        body:
          'Versões nativas compatíveis consultam o serviço Expo EAS Update para receber correções e recursos. Essas requisições envolvem IP e informações técnicas, como plataforma e versão de execução, para entregar uma atualização compatível. Essa integração não envia favoritos, coleção ou notas de equipes. Ao usar avaliações, lojas ou links externos, aplicam-se também as políticas dos respectivos fornecedores.',
        links: [
          { label: 'Política de privacidade da Expo', href: 'https://expo.dev/privacy' },
          { label: 'Política de privacidade da Apple', href: 'https://www.apple.com/legal/privacy/' },
        ],
      },
      {
        heading: '10. Finalidades e compartilhamento',
        body:
          'Tratamos informações para fornecer as funções solicitadas, responder ao suporte, manter a segurança e viabilizar publicidade conforme as escolhas aplicáveis. Dependendo da operação, o tratamento se fundamenta na prestação do serviço, no legítimo interesse em segurança e funcionamento, no cumprimento de obrigação legal ou no consentimento quando exigido. Provedores de hospedagem, atualização e publicidade tratam os dados necessários aos serviços descritos. Esses serviços podem operar fora do Brasil, sujeitos às regras aplicáveis a transferências internacionais. Pedidos legais válidos também podem exigir divulgação de dados sob nosso controle.',
      },
      {
        heading: '11. Conservação, exclusão e segurança',
        body:
          'Os dados locais permanecem até você alterá-los, excluí-los pelas funções disponíveis ou remover o armazenamento. No Android, limpe os dados do app; no iOS, apague o aplicativo (desinstalar mantendo documentos não remove todos os dados); na web, limpe os dados do site. Isso também remove preferências e benefícios locais. Backups precisam ser gerenciados separadamente. Registros técnicos e mensagens de suporte são conservados pelo período necessário à operação, ao atendimento e às obrigações legais; dados mantidos por fornecedores seguem suas políticas. A API de produção usa HTTPS, mas nenhum sistema é totalmente imune a incidentes. Proteja o acesso ao seu dispositivo.',
      },
      {
        heading: '12. Seus direitos',
        body:
          'Conforme a LGPD e a legislação aplicável, você pode solicitar confirmação de tratamento, acesso, correção, informações sobre compartilhamento, portabilidade quando aplicável e anonimização, bloqueio ou exclusão nas hipóteses legais. Também pode revogar consentimento e apresentar reclamação à ANPD. Envie o pedido ao contato da seção 1; poderemos solicitar apenas as informações necessárias para verificar a identidade e localizar os dados. Não temos acesso remoto aos registros que existem somente no seu aparelho: para eles, use as opções de exclusão da seção 11.',
        links: [{ label: 'Direitos dos titulares — ANPD', href: 'https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados-1/direito-dos-titulares' }],
      },
      {
        heading: '13. Crianças e adolescentes',
        body:
          'O guia trata de conteúdo de Palworld. Observe a classificação etária do jogo e a indicada na loja do aplicativo. Não solicitamos cadastro nem informações de idade no app. Se você for responsável por um menor e tiver dúvidas ou identificar informações pessoais enviadas ao nosso suporte, entre em contato para avaliação e atendimento do pedido conforme a legislação aplicável.',
      },
      {
        heading: '14. Alterações desta política',
        body:
          'Esta política pode ser atualizada para refletir mudanças no app, nos serviços integrados ou nos requisitos aplicáveis. A data abaixo identifica a revisão vigente. Mudanças que exijam nova informação ou consentimento serão apresentadas pelos meios apropriados. As versões em português brasileiro e inglês descrevem as mesmas práticas.',
      },
    ],
    lastUpdated: '8 de setembro de 2026',
  },
  en: {
    locale: 'en',
    htmlLang: 'en',
    title: 'Privacy policy',
    meta: 'Palworld Paldeck · iOS, Android and web app',
    intro:
      'This policy explains how Palworld Paldeck handles information in the app and its web version, where available. It is an independent fan-made guide, without affiliation with or endorsement by Pocketpair. The practices below describe the current version; the availability of ads and services depends on the platform and the configuration of the distributed release.',
    sections: [
      {
        heading: '1. Controller and contact',
        body:
          'Richard Menezes is responsible for Palworld Paldeck and the processing of data under his control. For questions, personal data requests or privacy matters, email menezes.nns@icloud.com. If you contact us, we process your email address, message and any attachments you choose to send in order to respond to your request.',
        links: [{ label: 'Contact us about privacy', href: 'mailto:menezes.nns@icloud.com' }],
      },
      {
        heading: '2. Accounts and permissions',
        body:
          'The app does not require registration, login or a Palworld account, and does not request your name, phone number, identity documents or payment details to browse the guide. Its features do not access contacts, the camera, microphone or GPS location. Map positions represent locations in the game, not your real location. Technical data handled by advertising services is described separately below.',
      },
      {
        heading: '3. Information stored on your device',
        body:
          'The app saves the catalog for offline access, favorites, species in your collection, teams (name, Pals, purpose and notes) and language preference. On mobile, these records are kept in a local database; in a browser, in the site’s local storage. There is no account synchronization or upload of these personal records to the catalog API. System or browser backups may include this data, depending on your settings. Avoid including sensitive information in team notes.',
      },
      {
        heading: '4. Local usage, rewards and reviews',
        body:
          'To limit ad invitations and review prompts, the app stores usage dates, session and action counters, invitations shown or dismissed, review requests and the banner-free benefit’s expiry locally. These counters are not sent to our own usage analytics service. Rewarded video is optional and may grant 24 hours without banners on that device; declining does not block the catalog. Reviews are processed by Apple or Google: the app does not receive your rating or confirm whether you submitted a review.',
      },
      {
        heading: '5. Online catalog and technical logs',
        body:
          'When connected, the app queries the API to update the public catalog. The infrastructure receives your IP address and request data, such as the route, time and technical connection information, which may appear in operational logs. This data is used to deliver content, diagnose failures and limit abusive access. Search and breeding calculations run locally; the app does not send favorites, your collection or team notes in this request.',
      },
      {
        heading: '6. Mobile advertising — Google AdMob',
        body:
          'Ad-supported releases use Google Mobile Ads (AdMob) for banners and optional videos. The SDK may collect and share IP addresses (including to estimate region), device or advertising identifiers, interactions and diagnostics for advertising, measurement and fraud prevention. The app requests non-personalized ads; this does not eliminate all collection. Identifiers requiring authorization depend on applicable permissions and choices.',
        links: [
          { label: 'Google Privacy Policy', href: 'https://policies.google.com/privacy?hl=en' },
          { label: 'Data handled by Google Mobile Ads', href: 'https://developers.google.com/admob/android/privacy/play-data-disclosure' },
        ],
      },
      {
        heading: '7. Consent and advertising preferences',
        body:
          'In the native app, the integration checks Google UMP before initializing ads and only requests advertising when that service allows it. When required by the service, you can reopen “Manage privacy preferences” in Settings. On iOS, tracking authorization follows the system prompt where applicable; declining does not prevent use of the guide. You can also manage tracking permissions on iOS and advertising identifiers on Android in your device settings.',
      },
      {
        heading: '8. Web version and advertising cookies',
        body:
          'When AdSense ads are active in the web version, Google and its partners may use cookies and identifiers to serve and measure ads, including based on previous visits to this and other sites, subject to your choices. Manage cookies in your browser and personalization in Google’s ad settings. The local storage described in section 3 keeps your preferences and collection. This policy page on the portfolio does not load the app’s AdSense integration.',
        links: [
          { label: 'Google ad settings', href: 'https://www.google.com/settings/ads' },
          { label: 'How Google uses information from partner apps and sites', href: 'https://policies.google.com/technologies/partner-sites?hl=en' },
        ],
      },
      {
        heading: '9. Updates and external services',
        body:
          'Compatible native releases contact Expo EAS Update to receive fixes and features. These requests involve your IP address and technical information, such as platform and runtime version, to deliver a compatible update. This integration does not upload favorites, your collection or team notes. When you use reviews, stores or external links, the respective providers’ policies also apply.',
        links: [
          { label: 'Expo Privacy Policy', href: 'https://expo.dev/privacy' },
          { label: 'Apple Privacy Policy', href: 'https://www.apple.com/legal/privacy/' },
        ],
      },
      {
        heading: '10. Purposes and sharing',
        body:
          'We process information to provide requested features, respond to support inquiries, maintain security and enable advertising in line with applicable choices. Depending on the operation, processing relies on providing the service, legitimate interests in security and operation, compliance with legal obligations or consent where required. Hosting, update and advertising providers process data needed for the services described. These services may operate outside Brazil, subject to applicable international transfer rules. Valid legal requests may also require disclosure of data under our control.',
      },
      {
        heading: '11. Retention, deletion and security',
        body:
          'Local data remains until you change it, delete it using available features or remove the storage. On Android, clear the app’s data; on iOS, delete the app (offloading while keeping documents does not remove all data); on the web, clear the site’s data. This also removes local preferences and benefits. Backups must be managed separately. Technical logs and support messages are retained for as long as needed for operation, support and legal obligations; data held by providers follows their policies. The production API uses HTTPS, but no system is entirely immune to incidents. Protect access to your device.',
      },
      {
        heading: '12. Your rights',
        body:
          'Under Brazil’s LGPD and applicable law, you may request confirmation of processing, access, correction, information about sharing, portability where applicable, and anonymization, blocking or deletion in the circumstances provided by law. You may also withdraw consent and lodge a complaint with the ANPD. Send your request to the contact in section 1; we may request only the information needed to verify your identity and locate the data. We cannot remotely access records that exist only on your device: use the deletion options in section 11 for those records.',
        links: [{ label: 'Data subject rights — ANPD (Portuguese)', href: 'https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados-1/direito-dos-titulares' }],
      },
      {
        heading: '13. Children and teenagers',
        body:
          'The guide covers Palworld content. Observe the game’s age rating and the rating shown in the app store. We do not request registration or age information in the app. If you are responsible for a minor and have questions or identify personal information sent to our support, contact us so we can assess and handle the request under applicable law.',
      },
      {
        heading: '14. Changes to this policy',
        body:
          'This policy may be updated to reflect changes to the app, integrated services or applicable requirements. The date below identifies the current revision. Changes requiring new information or consent will be presented through appropriate channels. The Brazilian Portuguese and English versions describe the same practices.',
      },
    ],
    lastUpdated: 'September 8, 2026',
  },
}
