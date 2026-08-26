import type { PrivacyDoc } from './types'

export const rotivooByLocale: Record<'pt-BR' | 'en', PrivacyDoc> = {
  'pt-BR': {
    locale: 'pt-BR',
    htmlLang: 'pt-BR',
    title: 'Política de privacidade',
    meta: 'Rotivoo · aplicativo móvel (iOS e Android)',
    intro:
      'Esta Política de Privacidade explica como o Rotivoo trata dados pessoais para oferecer organização de pacotes, otimização de rotas, acompanhamento de entregas e gestão de custos e ganhos. Ela abrange dados do titular da conta e informações de destinatários que o entregador insere no aplicativo.',
    sections: [
      {
        heading: '1. Responsável e contato',
        body:
          'O Rotivoo é disponibilizado por Richard Menezes, responsável pelo tratamento dos dados de conta, segurança e operação do serviço. Para dúvidas, solicitações de titulares ou assuntos de privacidade, escreva para menezes.nns@icloud.com.',
      },
      {
        heading: '2. Escopo e papéis no tratamento',
        body:
          'Em relação ao cadastro, autenticação, preferências e segurança do usuário, o Rotivoo define as finalidades do tratamento. Quando um entregador inclui dados de destinatários ou clientes para executar suas próprias entregas, ele é responsável por ter uma finalidade legítima e autorização adequada para usar essas informações. O Rotivoo fornece a ferramenta e trata esses dados para prestar o serviço solicitado. Um destinatário pode contatar o entregador responsável e também o canal acima para que a solicitação seja encaminhada corretamente.',
      },
      {
        heading: '3. Dados de conta, perfil e segurança',
        body:
          'Tratamos nome, e-mail, senha protegida por hash no servidor, estado de verificação do e-mail, preferências do aplicativo e escolha sobre localização. Também podem ser tratados identificadores e datas de sessões, agente do dispositivo ou navegador, tokens de autenticação, códigos temporários de verificação ou recuperação e registros técnicos necessários para segurança, diagnóstico e prevenção de abuso. Tokens e uma cópia da sessão podem ficar no armazenamento seguro do aparelho quando o usuário escolhe permanecer conectado.',
      },
      {
        heading: '4. Localização, endereços e rotas',
        body:
          'Com a permissão do sistema, o app acessa a localização do aparelho somente enquanto está em uso. A posição pode ser usada para definir o início da rota, recalcular o percurso, mostrar a posição no mapa e identificar a proximidade da próxima parada. O Rotivoo não solicita localização em segundo plano. Também tratamos endereços, bairros, pontos de partida e chegada, coordenadas geográficas, ordem das paradas, geometria do percurso, distância, duração e dados de otimização. Endereços podem ser convertidos em coordenadas pelo serviço de geocodificação do sistema operacional.',
      },
      {
        heading: '5. Etiquetas, câmera, OCR e importações',
        body:
          'A câmera pode ler códigos de barras, QR Codes e etiquetas. No OCR, a imagem é processada localmente no aparelho por recursos da plataforma; a foto temporária é apagada após o processamento e não é enviada à API do Rotivoo. O texto extraído pode incluir código do pacote, destinatário e endereço e sempre é apresentado para revisão antes de ser salvo. Planilhas e textos colados do WhatsApp são enviados à API apenas para interpretação e retorno de uma prévia editável. Podem conter código, nome, telefone, instruções, referência, endereço, bairro e valor da entrega. O arquivo ou texto original não é mantido como anexo da rota; somente os campos que o usuário revisar e confirmar passam a integrar os dados da entrega.',
      },
      {
        heading: '6. Histórico de entregas, veículo e dados financeiros',
        body:
          'Tratamos rotas planejadas e concluídas, datas e horários, status de cada parada, entregas realizadas, tentativas sem sucesso, motivo, observações, quantidade de tentativas e eventos da rota. Também podem ser registrados veículo, combustível ou energia, consumo, abastecimentos, odômetro, custos, receita, manutenção e estimativas de lucro e lucro por hora. Esses dados permitem exibir histórico e relatórios por período e duplicar rotas anteriores.',
      },
      {
        heading: '7. Finalidades do tratamento',
        body:
          'Usamos os dados para criar e proteger contas; manter sessões; verificar e recuperar acesso; validar endereços; montar, otimizar e recalcular rotas; apresentar mapas e navegação; registrar o resultado das entregas; sincronizar operações feitas sem conexão; calcular métricas de custos e ganhos; importar e organizar informações fornecidas pelo usuário; oferecer exportação e exclusão da conta; atender suporte; prevenir fraude e abuso; corrigir falhas; e cumprir obrigações legais.',
      },
      {
        heading: '8. Bases legais',
        body:
          'Conforme a LGPD, o tratamento pode se apoiar na execução do contrato e de procedimentos solicitados pelo usuário; no consentimento, quando uma função opcional depende da escolha do titular, como o acesso à localização; no legítimo interesse de manter o serviço seguro, estável e protegido contra abuso, após avaliação de necessidade e salvaguardas; e no cumprimento de obrigações legais ou exercício regular de direitos. A permissão concedida no iOS ou Android pode ser revogada a qualquer momento nas configurações do aparelho.',
      },
      {
        heading: '9. Compartilhamento e serviços de terceiros',
        body:
          'Os dados podem ser tratados por fornecedores de hospedagem, banco de dados, segurança e envio de e-mails, na medida necessária à operação. Dependendo do aparelho, Apple ou Google podem receber consultas de geocodificação e dados necessários à exibição de mapas conforme suas próprias políticas. O serviço de roteamento configurado, como o OSRM, recebe coordenadas de origem e paradas para calcular matriz, distância e percurso. Quando o usuário decide abrir um app externo de navegação, o destino é enviado a esse app. Também podemos compartilhar informações quando exigido por lei ou ordem válida. Não vendemos dados pessoais e o Rotivoo não usa SDK de publicidade comportamental.',
      },
      {
        heading: '10. Armazenamento e conservação',
        body:
          'Dados da conta, rotas, entregas, veículo, abastecimentos e histórico ficam nos servidores enquanto a conta estiver ativa e pelo período necessário às finalidades descritas. Sessões expiram ou são revogadas conforme as configurações de segurança. Rascunhos, cache da rota e operações pendentes também podem ficar localmente no aparelho para permitir continuidade e uso sem conexão. A exclusão da conta remove os dados ativos vinculados à conta dos bancos operacionais do Rotivoo, mas dados locais podem permanecer no dispositivo; para removê-los, limpe os dados do app ou desinstale-o. Registros mínimos ou cópias de segurança podem ser conservados por prazo limitado quando necessários para segurança, cumprimento de lei ou exercício de direitos.',
      },
      {
        heading: '11. Transferências internacionais',
        body:
          'Alguns fornecedores de infraestrutura, mapas, geocodificação, roteamento ou e-mail podem processar dados fora do Brasil. Quando aplicável, buscamos utilizar fornecedores e mecanismos compatíveis com a LGPD e limitar o compartilhamento ao necessário para a função utilizada.',
      },
      {
        heading: '12. Segurança',
        body:
          'Adotamos medidas técnicas e organizacionais proporcionais aos riscos, incluindo comunicação HTTPS com a API, senhas protegidas por hash, tokens de sessão revogáveis, armazenamento seguro no aparelho, limitação e expiração de códigos de acesso e controles de autenticação. Nenhum sistema é totalmente imune a incidentes; caso ocorra evento relevante, adotaremos as medidas exigidas pela legislação aplicável.',
      },
      {
        heading: '13. Direitos do titular',
        body:
          'Nos limites da LGPD, o titular pode solicitar confirmação e acesso ao tratamento, correção, informação sobre compartilhamento, portabilidade quando regulamentada, anonimização, bloqueio ou eliminação de dados desnecessários ou tratados irregularmente, oposição quando cabível e revisão de decisões automatizadas aplicáveis. Também pode revogar o consentimento e pedir eliminação de dados tratados com essa base, observadas as hipóteses legais de conservação. O usuário pode exportar seus dados e excluir a conta dentro do próprio app ou usar o e-mail de contato. Poderemos solicitar informações para confirmar a identidade do requerente.',
      },
      {
        heading: '14. Dados de destinatários',
        body:
          'O entregador deve inserir somente os dados de destinatários necessários para organizar e concluir a entrega, evitar observações excessivas e restringir o acesso ao seu aparelho e à conta. O Rotivoo não deve ser usado para armazenar dados sensíveis ou informações alheias à finalidade logística. Solicitações de destinatários podem exigir a cooperação do entregador que cadastrou a entrega.',
      },
      {
        heading: '15. Crianças e adolescentes',
        body:
          'O Rotivoo é destinado a entregadores com capacidade legal para exercer a atividade e não é direcionado a crianças. O usuário não deve inserir dados de crianças ou adolescentes, salvo quando estritamente necessário e amparado por base legal adequada e pelo melhor interesse do titular.',
      },
      {
        heading: '16. Alterações desta política',
        body:
          'Esta política pode ser atualizada para refletir mudanças no aplicativo, nos fornecedores ou na legislação. Alterações relevantes serão comunicadas por meios razoáveis, como aviso no app ou atualização desta página. A versão vigente e a data da revisão ficam sempre disponíveis neste endereço.',
      },
    ],
    lastUpdated: '26 de agosto de 2026',
  },
  en: {
    locale: 'en',
    htmlLang: 'en',
    title: 'Privacy Policy',
    meta: 'Rotivoo · mobile app (iOS and Android)',
    intro:
      'This Privacy Policy explains how Rotivoo processes personal data to provide package organization, route optimization, delivery tracking, and cost and earnings management. It covers data about the account holder and information about recipients that a courier enters in the app.',
    sections: [
      {
        heading: '1. Controller and contact',
        body:
          'Rotivoo is provided by Richard Menezes, who is responsible for processing account, security, and service operation data. For questions, data subject requests, or privacy matters, contact menezes.nns@icloud.com.',
      },
      {
        heading: '2. Scope and processing roles',
        body:
          'Rotivoo determines the purposes of processing for user registration, authentication, preferences, and security. When a courier adds recipient or customer data to perform their own deliveries, the courier is responsible for having a legitimate purpose and appropriate authorization to use that information. Rotivoo provides the tool and processes this data to deliver the requested service. A recipient may contact the responsible courier and may also use the contact channel above so the request can be directed appropriately.',
      },
      {
        heading: '3. Account, profile, and security data',
        body:
          'We process name, email address, a password protected by hashing on the server, email verification status, app preferences, and the user’s location choice. We may also process session identifiers and dates, device or browser user agent, authentication tokens, temporary verification or recovery codes, and technical records needed for security, diagnostics, and abuse prevention. Tokens and a copy of the session may remain in secure device storage when the user chooses to stay signed in.',
      },
      {
        heading: '4. Location, addresses, and routes',
        body:
          'With system permission, the app accesses device location only while it is in use. The position may be used to set the route starting point, recalculate the route, display the user’s position on the map, and identify proximity to the next stop. Rotivoo does not request background location. We also process addresses, neighborhoods, start and end points, geographic coordinates, stop order, route geometry, distance, duration, and optimization data. Addresses may be converted into coordinates by the operating system’s geocoding service.',
      },
      {
        heading: '5. Labels, camera, OCR, and imports',
        body:
          'The camera may be used to scan barcodes, QR codes, and package labels. For OCR, the image is processed locally on the device using platform features; the temporary photo is deleted after processing and is not sent to the Rotivoo API. Extracted text may include the package code, recipient, and address and is always presented for review before it is saved. Spreadsheets and pasted WhatsApp text are sent to the API only to be interpreted and returned as an editable preview. They may contain a code, name, phone number, instructions, reference, address, neighborhood, and delivery value. The original file or text is not kept as a route attachment; only the fields the user reviews and confirms become part of the delivery data.',
      },
      {
        heading: '6. Delivery history, vehicle, and financial data',
        body:
          'We process planned and completed routes, dates and times, the status of each stop, completed deliveries, failed attempts, reasons, notes, number of attempts, and route events. Users may also record vehicle information, fuel or energy type, consumption, refueling or charging entries, odometer readings, costs, revenue, maintenance, and estimated profit and profit per hour. This data is used to display history and reports by period and to duplicate previous routes.',
      },
      {
        heading: '7. Purposes of processing',
        body:
          'We use data to create and protect accounts; maintain sessions; verify and recover access; validate addresses; build, optimize, and recalculate routes; provide maps and navigation; record delivery outcomes; synchronize operations performed offline; calculate cost and earnings metrics; import and organize information supplied by the user; provide account export and deletion; deliver support; prevent fraud and abuse; fix failures; and comply with legal obligations.',
      },
      {
        heading: '8. Legal bases',
        body:
          'Under Brazil’s General Data Protection Law (LGPD), processing may rely on performance of a contract and steps requested by the user; consent when an optional feature depends on the data subject’s choice, such as location access; legitimate interests in keeping the service secure, stable, and protected against abuse, following an assessment of necessity and safeguards; and compliance with legal obligations or the exercise of legal rights. Permission granted in iOS or Android can be revoked at any time in the device settings.',
      },
      {
        heading: '9. Sharing and third-party services',
        body:
          'Data may be processed by hosting, database, security, and email providers to the extent needed to operate the service. Depending on the device, Apple or Google may receive geocoding queries and information needed to display maps under their own policies. The configured routing service, such as OSRM, receives origin and stop coordinates to calculate a matrix, distance, and route. When the user chooses to open an external navigation app, the destination is sent to that app. We may also share information when required by law or a valid order. We do not sell personal data, and Rotivoo does not use behavioral advertising SDKs.',
      },
      {
        heading: '10. Storage and retention',
        body:
          'Account, route, delivery, vehicle, refueling, and history data remains on the servers while the account is active and for as long as needed for the purposes described above. Sessions expire or are revoked according to security settings. Route drafts, route cache, and pending operations may also remain locally on the device to support continuity and offline use. Deleting the account removes active data linked to the account from Rotivoo’s operational databases, but local data may remain on the device; to remove it, clear the app data or uninstall the app. Minimal records or backup copies may be retained for a limited period when needed for security, legal compliance, or the exercise of legal rights.',
      },
      {
        heading: '11. International data transfers',
        body:
          'Some infrastructure, mapping, geocoding, routing, or email providers may process data outside Brazil. Where applicable, we seek to use providers and mechanisms consistent with the LGPD and limit sharing to what is necessary for the selected feature.',
      },
      {
        heading: '12. Security',
        body:
          'We use technical and organizational measures proportionate to the risks, including HTTPS communication with the API, hashed passwords, revocable session tokens, secure device storage, limits and expiration for access codes, and authentication controls. No system is completely immune to incidents. If a relevant event occurs, we will take the measures required by applicable law.',
      },
      {
        heading: '13. Data subject rights',
        body:
          'Subject to the LGPD, a data subject may request confirmation and access to processing, correction, information about sharing, portability when regulated, anonymization, blocking or deletion of unnecessary or unlawfully processed data, objection where applicable, and review of applicable automated decisions. The data subject may also withdraw consent and request deletion of data processed on that basis, subject to legal retention grounds. Users can export their data and delete their account within the app or use the contact email. We may request information to verify the requester’s identity.',
      },
      {
        heading: '14. Recipient data',
        body:
          'Couriers must enter only the recipient data needed to organize and complete a delivery, avoid excessive notes, and restrict access to their device and account. Rotivoo must not be used to store sensitive data or information unrelated to the logistics purpose. Requests from recipients may require cooperation from the courier who registered the delivery.',
      },
      {
        heading: '15. Children and adolescents',
        body:
          'Rotivoo is intended for couriers who have the legal capacity to perform delivery work and is not directed to children. Users must not enter data about children or adolescents unless it is strictly necessary, supported by an appropriate legal basis, and consistent with the best interests of the data subject.',
      },
      {
        heading: '16. Changes to this policy',
        body:
          'This policy may be updated to reflect changes to the app, providers, or applicable law. Material changes will be communicated through reasonable means, such as an in-app notice or an update to this page. The current version and revision date will always be available at this address.',
      },
    ],
    lastUpdated: 'August 26, 2026',
  },
}
