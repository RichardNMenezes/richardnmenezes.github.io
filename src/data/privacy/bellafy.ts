import type { PrivacyDoc } from './types'

export const bellafyByLocale: Record<'pt-BR' | 'en', PrivacyDoc> = {
  'pt-BR': {
    locale: 'pt-BR',
    htmlLang: 'pt-BR',
    title: 'Política de privacidade',
    meta: 'Bellafy · aplicativo móvel (iOS e Android)',
    intro:
      'Esta página descreve como o aplicativo Bellafy trata informações quando você o utiliza. O Bellafy é uma plataforma de agendamento e gestão para salões de beleza e profissionais autônomos. Ao usar o app, você concorda com esta política na versão vigente no momento do uso.',
    sections: [
      {
        heading: '1. Responsável e contato',
        body:
          'O aplicativo é disponibilizado pelo titular indicado nas lojas (Apple App Store / Google Play). Para questões de privacidade ou dos seus dados: menezes.nns@icloud.com.',
      },
      {
        heading: '2. Natureza do serviço',
        body:
          'O Bellafy conecta salões, profissionais e clientes. Dependendo do seu perfil (administrador do salão, profissional ou cliente), o app permite gerenciar ou consultar agendamentos, serviços, equipe, clientes e informações do estabelecimento, com sincronização pela API do Bellafy.',
      },
      {
        heading: '3. Dados que podemos tratar',
        body:
          'Podem ser tratados: nome, e-mail, telefone e senha (armazenada de forma segura pelo backend); dados de perfil e do salão (nome, endereço, horários, serviços, fotos); dados de agendamentos; tokens de sessão e credenciais guardados localmente no dispositivo (por exemplo via armazenamento seguro); imagens que você escolhe enviar pela câmera ou galeria para serviços ou materiais do salão; e informações técnicas necessárias ao funcionamento da API (como registros de erro ou identificadores de dispositivo quando aplicável).',
      },
      {
        heading: '4. Permissões do dispositivo',
        body:
          'O app pode solicitar acesso à câmera e à galeria de fotos para adicionar imagens a serviços, e permissão para salvar imagens na galeria quando você exporta horários disponíveis. Essas permissões só são usadas quando você aciona a funcionalidade correspondente. Você pode revogá-las nas configurações do sistema operacional.',
      },
      {
        heading: '5. Finalidades',
        body:
          'Operar o serviço de agendamento e gestão do salão; autenticar usuários e manter sessões; sincronizar dados entre o app e a infraestrutura Bellafy; exibir informações corretas a clientes, profissionais e administradores; permitir upload e exibição de imagens relacionadas aos serviços; e cumprir obrigações legais.',
      },
      {
        heading: '6. Base legal e conservação',
        body:
          'O tratamento assenta na execução do serviço solicitado, no legítimo interesse de operar a plataforma e, quando aplicável, no consentimento para funcionalidades opcionais (como acesso a fotos). Os dados são conservados enquanto a conta estiver ativa e pelo tempo necessário para cumprir obrigações legais, resolver disputas ou fazer cumprir acordos.',
      },
      {
        heading: '7. Compartilhamento',
        body:
          'Os dados são processados pela infraestrutura do Bellafy (API e serviços associados). Informações de agendamento e do salão podem ser visíveis a outros usuários autorizados dentro da mesma operação (por exemplo, profissionais e clientes vinculados ao salão). Não vendemos seus dados pessoais. Prestadores de infraestrutura (como hospedagem) podem atuar como encarregados de tratamento na medida necessária ao serviço.',
      },
      {
        heading: '8. Segurança',
        body:
          'Adotamos medidas técnicas e organizacionais adequadas, incluindo comunicação com a API sobre HTTPS, armazenamento seguro de tokens no dispositivo e boas práticas de autenticação, dentro das limitações das plataformas móveis.',
      },
      {
        heading: '9. Seus direitos (LGPD)',
        body:
          'Nos termos da Lei Geral de Proteção de Dados (LGPD) e de outra legislação aplicável, você pode solicitar confirmação de tratamento, acesso, correção, anonimização, portabilidade ou eliminação de dados pessoais, além de revogar consentimentos quando cabível, entrando em contato pelo e-mail indicado acima.',
      },
      {
        heading: '10. Crianças',
        body:
          'O app não se destina a menores de 13 anos. Se você acredita que dados de menor foram fornecidos indevidamente, contacte-nos para que possamos avaliar a exclusão.',
      },
      {
        heading: '11. Alterações',
        body:
          'Esta política pode ser atualizada para refletir mudanças no aplicativo ou nas obrigações legais. A data da última revisão figura abaixo. O uso continuado após alterações implica aceitação da versão publicada.',
      },
    ],
    lastUpdated: '5 de agosto de 2026',
  },
  en: {
    locale: 'en',
    htmlLang: 'en',
    title: 'Privacy policy',
    meta: 'Bellafy · mobile app (iOS and Android)',
    intro:
      'This page describes how the Bellafy app handles information when you use it. Bellafy is a booking and management platform for beauty salons and independent professionals. By using the app, you agree to this policy as in effect at that time.',
    sections: [
      {
        heading: '1. Controller and contact',
        body:
          'The app is provided by the party listed on the Apple App Store / Google Play. For privacy or data requests: menezes.nns@icloud.com.',
      },
      {
        heading: '2. Nature of the service',
        body:
          'Bellafy connects salons, professionals and clients. Depending on your role (salon administrator, professional or client), the app lets you manage or view appointments, services, staff, clients and business information, synchronised through the Bellafy API.',
      },
      {
        heading: '3. Data we may process',
        body:
          'We may process: name, email, phone number and password (stored securely on the backend); profile and salon data (name, address, hours, services, photos); appointment data; session tokens and credentials stored locally on the device (for example via secure storage); images you choose to upload from the camera or photo library for services or salon materials; and technical information required for the API to operate (such as error logs or device identifiers where applicable).',
      },
      {
        heading: '4. Device permissions',
        body:
          'The app may request access to the camera and photo library to add images to services, and permission to save images to your gallery when you export available time slots. These permissions are only used when you trigger the related feature. You can revoke them in your device system settings.',
      },
      {
        heading: '5. Purposes',
        body:
          'To provide the booking and salon management service; authenticate users and maintain sessions; synchronise data between the app and Bellafy infrastructure; show accurate information to clients, professionals and administrators; allow upload and display of service-related images; and meet legal obligations.',
      },
      {
        heading: '6. Legal basis and retention',
        body:
          'Processing is based on performing the service you request, our legitimate interests in operating the platform and, where applicable, consent for optional features (such as photo access). Data is kept while your account is active and for as long as needed to comply with legal obligations, resolve disputes or enforce agreements.',
      },
      {
        heading: '7. Sharing',
        body:
          'Data is processed by Bellafy infrastructure (API and related services). Appointment and salon information may be visible to other authorised users within the same operation (for example staff and clients linked to the salon). We do not sell your personal data. Infrastructure providers (such as hosting) may act as processors where necessary.',
      },
      {
        heading: '8. Security',
        body:
          'We apply appropriate technical and organisational measures, including HTTPS to the API, secure storage of tokens on the device and sound authentication practices, within the limits of the mobile platforms.',
      },
      {
        heading: '9. Your rights',
        body:
          'Under applicable law (including Brazil’s LGPD where relevant), you may request confirmation of processing, access, correction, anonymisation, portability or erasure of personal data, and withdraw consent where applicable, by contacting us at the email above.',
      },
      {
        heading: '10. Children',
        body:
          'The app is not directed at children under 13. If you believe a minor’s data was provided improperly, contact us so we can assess deletion.',
      },
      {
        heading: '11. Changes',
        body:
          'This policy may be updated to reflect changes to the app or legal requirements. The last revision date is below. Continued use after changes means you accept the published version.',
      },
    ],
    lastUpdated: 'August 5, 2026',
  },
}
