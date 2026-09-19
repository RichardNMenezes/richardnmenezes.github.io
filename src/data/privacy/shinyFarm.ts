import type { PrivacyDoc } from './types'

export const shinyFarmByLocale: Record<'pt-BR' | 'en' | 'es', PrivacyDoc> = {
  'pt-BR': {
    locale: 'pt-BR',
    htmlLang: 'pt-BR',
    title: 'Política de privacidade',
    meta: 'Shiny Farm · jogo para Android e iOS',
    intro:
      'Esta política explica como o Shiny Farm trata informações ao jogar, receber anúncios e atualizações ou entrar em contato com o suporte. Ela descreve a versão atual do jogo; a disponibilidade de serviços depende da plataforma e da versão instalada.',
    sections: [
      {
        heading: '1. Responsável e contato',
        body:
          'Richard Menezes é o responsável pelo Shiny Farm e pelo tratamento de dados sob seu controle. Para dúvidas ou solicitações sobre privacidade, escreva para menezes.nns@icloud.com. Ao entrar em contato, seu endereço de e-mail, mensagem e anexos enviados voluntariamente serão usados para atender ao pedido. Evite enviar informações sensíveis desnecessárias.',
        links: [{ label: 'Contato sobre privacidade', href: 'mailto:menezes.nns@icloud.com' }],
      },
      {
        heading: '2. Conta, pagamentos e permissões',
        body:
          'O jogo não exige cadastro ou login e não solicita nome, telefone, documentos ou dados de pagamento. A versão atual não oferece compras com dinheiro real; moedas, produtos e pedidos do mercado são elementos virtuais do jogo. As funções de fazenda não acessam contatos, câmera, microfone ou localização GPS. Isso não impede o tratamento de dados técnicos pelos serviços descritos abaixo.',
      },
      {
        heading: '3. Progresso e preferências no aparelho',
        body:
          'O jogo salva localmente moedas, experiência, nível, terrenos, cultivos e horários de crescimento, inventário, animais, moinho, pomar, pedidos, missões e recompensas. Também guarda idioma, tutoriais concluídos, preferências de notificações, a conclusão da apresentação de privacidade e registros usados para limitar anúncios e evitar recompensas duplicadas. Esses dados permitem retomar a fazenda e calcular o crescimento após fechar o app. Não há conta nem sincronização própria do save em nuvem. Eventos de algumas ações e indicadores de progresso são enviados ao serviço de análise descrito na seção 4; eles não constituem uma cópia recuperável da fazenda. Backups do sistema podem incluir dados locais conforme suas configurações.',
      },
      {
        heading: '4. Análise de uso — Google Analytics para Firebase',
        body:
          'Nas versões com Firebase Analytics disponível, o app envia eventos de início de sessão, telas visitadas, plantio, rega, colheita, produção, pedidos, desbloqueios, missões, atividades e anúncios. Os eventos podem incluir tipos de cultivo, identificadores de terrenos e missões, moedas virtuais, experiência e quantidades. Também são registrados falhas e recuperação do salvamento, resultados e duração de anúncios, escolhas de consentimento, estado das permissões e interações com notificações. Nível e número de terrenos liberados são associados à instalação para entender a progressão e melhorar o equilíbrio e a estabilidade do jogo. O serviço pode tratar identificadores da instalação ou do dispositivo e informações técnicas, como versão do app, sistema, idioma e região aproximada. Esses eventos e diagnósticos podem estar vinculados à instalação; não são necessariamente anônimos, mesmo sem cadastro. O conteúdo completo do save e suas cópias locais de recuperação não são enviados ao Analytics.',
        links: [{ label: 'Privacidade e segurança no Firebase', href: 'https://firebase.google.com/support/privacy?hl=pt-br' }],
      },
      {
        heading: '5. Publicidade — Google AdMob',
        body:
          'O Shiny Farm usa Google AdMob para vídeos opcionais que concedem recompensas e anúncios em tela cheia em oportunidades entre colheitas. Recusar um vídeo significa não receber seu bônus adicional, mas permite continuar jogando e manter recompensas já obtidas. Os anúncios podem ser personalizados quando as escolhas de consentimento e as permissões aplicáveis permitirem. No iOS, o app solicita anúncios não personalizados quando a autorização de rastreamento não foi concedida, desde que o serviço permita exibir anúncios. Anúncios não personalizados ainda podem envolver coleta de dados: IP e região aproximada, identificadores de publicidade ou dispositivo, anúncios exibidos, interações, dados de desempenho, falhas e outros diagnósticos, para publicidade, medição, análise e prevenção de fraude. Quando autorizado, o identificador de publicidade pode ser usado pelo Google e seus parceiros para relacionar a atividade com dados de apps e sites de outras empresas para publicidade direcionada e medição. A permissão de rastreamento do iOS é separada das escolhas de consentimento de anúncios.',
        links: [
          { label: 'Política de privacidade do Google', href: 'https://policies.google.com/privacy?hl=pt-BR' },
          { label: 'Dados tratados pelo Google Mobile Ads (Android)', href: 'https://developers.google.com/admob/android/privacy/play-data-disclosure' },
          { label: 'Dados tratados pelo Google Mobile Ads (iOS)', href: 'https://developers.google.com/admob/ios/privacy/data-disclosure' },
        ],
      },
      {
        heading: '6. Escolhas e consentimento',
        body:
          'O app apresenta uma explicação sobre privacidade e utiliza a Google User Messaging Platform (UMP) para verificar o consentimento e apresentar formulários quando exigidos para sua região e pelas configurações do serviço. Essa integração pode tratar região aproximada, interações e informações de desempenho para operar os formulários e as opções de privacidade. No iOS, o sistema também pode pedir autorização de rastreamento por meio do App Tracking Transparency (ATT). Você pode recusar essa autorização e continuar jogando. Em Configurações > Privacidade e anúncios, a opção Revisar escolhas de anúncios aparece quando o Google exige a disponibilização desse formulário; nela você pode revisar as escolhas oferecidas. Também é possível gerenciar o rastreamento no iOS e os identificadores de publicidade no Android pelos ajustes do aparelho. O app não possui um botão separado para desativar o Firebase Analytics. Recusar um vídeo, notificações ou a permissão ATT não desativa, por si só, toda a análise de uso. Para solicitações sobre dados ou consentimento, utilize o contato da seção 1.',
      },
      {
        heading: '7. Notificações, atualizações e conexões externas',
        body:
          'Com sua permissão, o app agenda no próprio aparelho lembretes de produção pronta e de missões diárias usando Expo Notifications. Você pode escolher as categorias nas configurações do jogo e desativar a permissão nos ajustes do sistema. Na versão atual, esses lembretes são locais: o app não registra um token de push para enviá-lo a um servidor de notificações. Eventos de agendamento, abertura e preferências podem ser enviados ao Firebase conforme a seção 4. O app também utiliza Expo EAS Update para consultar e baixar atualizações compatíveis. Essas conexões envolvem IP e informações técnicas da requisição, incluindo plataforma e versão de execução. O save da fazenda não é enviado como parte dessa atualização. Google e Expo tratam informações necessárias aos respectivos serviços. Ao acessar lojas ou links externos, aplicam-se também as políticas dos responsáveis por esses destinos.',
        links: [{ label: 'Política de privacidade da Expo', href: 'https://expo.dev/privacy' }],
      },
      {
        heading: '8. Finalidades, bases legais e compartilhamento',
        body:
          'As informações são usadas para executar e salvar o jogo, entender a progressão, melhorar a experiência, entregar atualizações, viabilizar anúncios, evitar abuso de recompensas e responder ao suporte. Conforme a operação e a legislação aplicável, as bases legais podem incluir execução do serviço solicitado, legítimo interesse avaliado para funcionamento e melhoria, obrigação legal e consentimento quando exigido. Os serviços Google e Expo recebem os dados relacionados às integrações descritas nesta política. Não disponibilizamos o save local a outros jogadores. Informações sob nosso controle também podem ser divulgadas para cumprir exigências legais válidas.',
      },
      {
        heading: '9. Conservação e transferências internacionais',
        body:
          'O progresso permanece no aparelho até a remoção dos dados locais. Mensagens de suporte são conservadas pelo tempo necessário ao atendimento e a eventuais obrigações legais. Dados de anúncios, análise e atualização seguem os prazos e configurações dos respectivos serviços; não há um prazo único para todas as categorias. Esses provedores podem processar informações fora do Brasil, inclusive nos Estados Unidos, conforme seus termos e as regras aplicáveis a transferências internacionais.',
      },
      {
        heading: '10. Exclusão e segurança',
        body:
          'No Android, você pode limpar o armazenamento do app nas configurações do sistema. No iOS, apague o aplicativo e seus dados; a opção de desinstalar preservando documentos não equivale à exclusão completa. Isso remove o progresso e as preferências locais, e não oferecemos recuperação por conta. Gerencie backups separadamente para evitar restauração dos dados. Apagar o app não exclui automaticamente registros já enviados aos provedores ou mensagens de suporte. Para esses dados, entre em contato. Proteja o acesso ao aparelho: nenhum armazenamento ou transmissão é totalmente imune a falhas ou incidentes.',
      },
      {
        heading: '11. Seus direitos',
        body:
          'Conforme a LGPD e outras leis aplicáveis, você pode solicitar confirmação de tratamento, acesso, correção, informações sobre compartilhamento, portabilidade quando cabível e anonimização, bloqueio ou exclusão nas hipóteses legais. Também pode revogar consentimento e apresentar reclamação à ANPD ou à autoridade competente. Envie o pedido ao contato da seção 1. Podemos solicitar informações proporcionais para verificar a identidade e localizar os registros. Como não há conta de jogador, pode ser necessário identificar a instalação para localizar dados de análise; não temos acesso remoto ao save que existe somente no aparelho.',
        links: [{ label: 'Direitos dos titulares — ANPD', href: 'https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados/direito-dos-titulares' }],
      },
      {
        heading: '12. Crianças e adolescentes',
        body:
          'Observe a classificação etária e as orientações da loja em que o jogo foi obtido. O app não solicita idade ou cadastro; isso não elimina a coleta técnica pelos serviços integrados. Pais e responsáveis podem usar os controles do aparelho e da loja para acompanhar o uso e a publicidade. Se identificar informações de uma criança ou adolescente tratadas indevidamente, entre em contato para avaliação e adoção das medidas aplicáveis, considerando seu melhor interesse.',
      },
      {
        heading: '13. Alterações desta política',
        body:
          'Esta política pode ser atualizada quando o jogo, os serviços integrados ou os requisitos aplicáveis mudarem. A data abaixo identifica a revisão. Alterações que exijam aviso ou consentimento adicional deverão ser comunicadas pelos meios apropriados. As versões em português, inglês e espanhol descrevem as mesmas práticas.',
      },
    ],
    lastUpdated: '19 de setembro de 2026',
  },
  en: {
    locale: 'en',
    htmlLang: 'en',
    title: 'Privacy policy',
    meta: 'Shiny Farm · game for Android and iOS',
    intro:
      'This policy explains how Shiny Farm handles information when you play, receive ads and updates, or contact support. It describes the current version of the game; service availability depends on the platform and installed version.',
    sections: [
      {
        heading: '1. Controller and contact',
        body:
          'Richard Menezes is responsible for Shiny Farm and the processing of data under his control. For privacy questions or requests, email menezes.nns@icloud.com. When you contact us, your email address, message and any attachments you voluntarily provide will be used to handle your request. Avoid sending unnecessary sensitive information.',
        links: [{ label: 'Privacy contact', href: 'mailto:menezes.nns@icloud.com' }],
      },
      {
        heading: '2. Accounts, payments and permissions',
        body:
          'The game does not require registration or login and does not request your name, phone number, identity documents or payment details. The current version does not offer purchases with real money; coins, products and market orders are virtual game elements. Farming features do not access contacts, the camera, microphone or GPS location. This does not prevent the processing of technical data by the services described below.',
      },
      {
        heading: '3. Progress and preferences on your device',
        body:
          'The game locally saves coins, experience, level, plots, crops and growth times, inventory, animals, the mill, orchard, orders, missions and rewards. It also stores your language, completed tutorials, notification preferences, completion of the privacy introduction and records used to limit ads and prevent duplicate rewards. These records let you resume your farm and calculate growth after closing the app. There is no account or game-managed cloud save synchronization. Events for some actions and progress indicators are sent to the analytics service described in section 4; they do not constitute a recoverable copy of your farm. System backups may include local data depending on your settings.',
      },
      {
        heading: '4. Usage analytics — Google Analytics for Firebase',
        body:
          'In versions where Firebase Analytics is available, the app sends events for session starts, screens viewed, planting, watering, harvesting, production, orders, unlocks, missions, activities and ads. Events may include crop types, plot and mission identifiers, virtual coins, experience and quantities. Save failures and recovery, ad outcomes and duration, consent choices, permission status and notification interactions are also recorded. Level and the number of unlocked plots are associated with the installation to understand progression and improve game balance and stability. The service may process installation or device identifiers and technical information such as app version, operating system, language and approximate region. These events and diagnostics may be linked to the installation; they are not necessarily anonymous, even without registration. The complete save and its local recovery copies are not sent to Analytics.',
        links: [{ label: 'Privacy and security in Firebase', href: 'https://firebase.google.com/support/privacy' }],
      },
      {
        heading: '5. Advertising — Google AdMob',
        body:
          'Shiny Farm uses Google AdMob for optional videos that grant rewards and full-screen ads at opportunities between harvests. Declining a video means you do not receive its additional bonus, but you can continue playing and keep rewards already earned. Ads may be personalized when consent choices and applicable permissions allow it. On iOS, the app requests non-personalized ads when tracking authorization has not been granted, provided the service allows ads to be shown. Non-personalized ads may still involve data collection: IP address and approximate region, advertising or device identifiers, ads displayed, interactions, performance data, crashes and other diagnostics, for advertising, measurement, analytics and fraud prevention. When authorized, Google and its partners may use the advertising identifier to connect activity with data from other companies’ apps and websites for targeted advertising and measurement. iOS tracking permission is separate from ad consent choices.',
        links: [
          { label: 'Google privacy policy', href: 'https://policies.google.com/privacy?hl=en' },
          { label: 'Data handled by Google Mobile Ads (Android)', href: 'https://developers.google.com/admob/android/privacy/play-data-disclosure' },
          { label: 'Data handled by Google Mobile Ads (iOS)', href: 'https://developers.google.com/admob/ios/privacy/data-disclosure' },
        ],
      },
      {
        heading: '6. Choices and consent',
        body:
          'The app provides a privacy introduction and uses Google User Messaging Platform (UMP) to check consent and present forms when required for your region and by service settings. This integration may process approximate region, interactions and performance information to operate the forms and privacy options. On iOS, the system may also request tracking authorization through App Tracking Transparency (ATT). You can decline this authorization and continue playing. Under Settings > Privacy and ads, Review ad choices appears when Google requires this form to be made available; you can use it to review the choices offered. You can also manage tracking on iOS and advertising identifiers on Android through device settings. The app does not have a separate switch to disable Firebase Analytics. Declining a video, notifications or ATT permission does not, by itself, disable all usage analytics. For requests about data or consent, use the contact in section 1.',
      },
      {
        heading: '7. Notifications, updates and external connections',
        body:
          'With your permission, the app schedules production-ready and daily-mission reminders on your device using Expo Notifications. You can choose categories in game settings and disable permission in system settings. In the current version these reminders are local: the app does not register a push token to send to a notification server. Scheduling, opening and preference events may be sent to Firebase as described in section 4. The app also uses Expo EAS Update to check for and download compatible updates. These connections involve an IP address and technical request information, including platform and runtime version. Your farm save is not sent as part of this update. Google and Expo process information needed for their respective services. When you visit stores or external links, the policies of those destinations also apply.',
        links: [{ label: 'Expo privacy policy', href: 'https://expo.dev/privacy' }],
      },
      {
        heading: '8. Purposes, legal bases and sharing',
        body:
          'Information is used to run and save the game, understand progression, improve the experience, deliver updates, support advertising, prevent reward abuse and respond to support requests. Depending on the operation and applicable law, legal bases may include providing the requested service, legitimate interests assessed for operation and improvement, legal obligations and consent where required. Google and Expo services receive data related to the integrations described in this policy. We do not make your local save available to other players. Information under our control may also be disclosed to comply with valid legal requirements.',
      },
      {
        heading: '9. Retention and international transfers',
        body:
          'Progress remains on your device until local data is removed. Support messages are retained for as long as needed to handle requests and meet any legal obligations. Advertising, analytics and update data follow the retention periods and settings of the respective services; there is no single period for all categories. These providers may process information outside Brazil, including in the United States, under their terms and the rules applicable to international transfers.',
      },
      {
        heading: '10. Deletion and security',
        body:
          'On Android, you can clear app storage in system settings. On iOS, delete the app and its data; offloading while keeping documents is not equivalent to complete deletion. This removes local progress and preferences, and we do not offer account-based recovery. Manage backups separately to prevent data restoration. Deleting the app does not automatically delete records already sent to providers or support messages. Contact us about those records. Protect access to your device: no storage or transmission is completely immune to failures or incidents.',
      },
      {
        heading: '11. Your rights',
        body:
          'Under Brazil’s LGPD and other applicable laws, you may request confirmation of processing, access, correction, information about sharing, portability where applicable, and anonymization, blocking or deletion in the circumstances provided by law. You may also withdraw consent and lodge a complaint with the ANPD or the competent authority. Send requests to the contact in section 1. We may request proportionate information to verify your identity and locate records. Because there is no player account, identifying the installation may be necessary to locate analytics data; we cannot remotely access the save that exists only on your device.',
        links: [{ label: 'Data subject rights — ANPD (Portuguese)', href: 'https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados/direito-dos-titulares' }],
      },
      {
        heading: '12. Children and teenagers',
        body:
          'Observe the age rating and guidance of the store where you obtained the game. The app does not request age or registration; this does not eliminate technical data collection by integrated services. Parents and guardians can use device and store controls to supervise use and advertising. If you identify improperly processed information about a child or teenager, contact us so we can assess it and take applicable measures, considering their best interests.',
      },
      {
        heading: '13. Changes to this policy',
        body:
          'This policy may be updated when the game, integrated services or applicable requirements change. The date below identifies the revision. Changes requiring additional notice or consent must be communicated through appropriate channels. The Portuguese, English and Spanish versions describe the same practices.',
      },
    ],
    lastUpdated: 'September 19, 2026',
  },
  es: {
    locale: 'es',
    htmlLang: 'es',
    title: 'Política de privacidad',
    meta: 'Shiny Farm · juego para Android e iOS',
    intro:
      'Esta política explica cómo Shiny Farm trata la información al jugar, recibir anuncios y actualizaciones o contactar con el soporte. Describe la versión actual del juego; la disponibilidad de los servicios depende de la plataforma y de la versión instalada.',
    sections: [
      {
        heading: '1. Responsable y contacto',
        body:
          'Richard Menezes es el responsable de Shiny Farm y del tratamiento de los datos bajo su control. Para preguntas o solicitudes sobre privacidad, escribe a menezes.nns@icloud.com. Al contactarnos, tu dirección de correo, mensaje y los archivos adjuntos que envíes voluntariamente se utilizarán para atender tu solicitud. Evita enviar información sensible innecesaria.',
        links: [{ label: 'Contacto sobre privacidad', href: 'mailto:menezes.nns@icloud.com' }],
      },
      {
        heading: '2. Cuentas, pagos y permisos',
        body:
          'El juego no requiere registro ni inicio de sesión y no solicita nombre, teléfono, documentos de identidad ni datos de pago. La versión actual no ofrece compras con dinero real; las monedas, los productos y los pedidos del mercado son elementos virtuales del juego. Las funciones de la granja no acceden a contactos, cámara, micrófono ni ubicación GPS. Esto no impide el tratamiento de datos técnicos por parte de los servicios descritos a continuación.',
      },
      {
        heading: '3. Progreso y preferencias en el dispositivo',
        body:
          'El juego guarda localmente monedas, experiencia, nivel, parcelas, cultivos y tiempos de crecimiento, inventario, animales, molino, huerto, pedidos, misiones y recompensas. También guarda el idioma, los tutoriales completados, las preferencias de notificaciones, la finalización de la introducción sobre privacidad y los registros utilizados para limitar anuncios y evitar recompensas duplicadas. Estos datos permiten retomar la granja y calcular el crecimiento después de cerrar la aplicación. No hay cuenta ni sincronización propia de la partida en la nube. Los eventos de algunas acciones y los indicadores de progreso se envían al servicio de análisis descrito en la sección 4; no constituyen una copia recuperable de la granja. Las copias de seguridad del sistema pueden incluir datos locales según tu configuración.',
      },
      {
        heading: '4. Análisis de uso — Google Analytics para Firebase',
        body:
          'En las versiones con Firebase Analytics disponible, la aplicación envía eventos de inicio de sesión de juego, pantallas visitadas, siembra, riego, cosecha, producción, pedidos, desbloqueos, misiones, actividades y anuncios. Los eventos pueden incluir tipos de cultivo, identificadores de parcelas y misiones, monedas virtuales, experiencia y cantidades. También se registran fallos y recuperación del guardado, resultados y duración de anuncios, elecciones de consentimiento, estado de los permisos e interacciones con notificaciones. El nivel y el número de parcelas desbloqueadas se asocian a la instalación para entender la progresión y mejorar el equilibrio y la estabilidad del juego. El servicio puede tratar identificadores de instalación o dispositivo e información técnica, como versión de la aplicación, sistema, idioma y región aproximada. Estos eventos y diagnósticos pueden estar vinculados a la instalación; no son necesariamente anónimos, incluso sin registro. La partida completa y sus copias locales de recuperación no se envían a Analytics.',
        links: [{ label: 'Privacidad y seguridad en Firebase', href: 'https://firebase.google.com/support/privacy?hl=es' }],
      },
      {
        heading: '5. Publicidad — Google AdMob',
        body:
          'Shiny Farm utiliza Google AdMob para videos opcionales que otorgan recompensas y anuncios a pantalla completa en oportunidades entre cosechas. Rechazar un video significa no recibir su bonificación adicional, pero permite seguir jugando y conservar las recompensas ya obtenidas. Los anuncios pueden ser personalizados cuando las elecciones de consentimiento y los permisos aplicables lo permitan. En iOS, la aplicación solicita anuncios no personalizados cuando no se ha concedido la autorización de rastreo, siempre que el servicio permita mostrar anuncios. Los anuncios no personalizados aún pueden implicar recopilación de datos: IP y región aproximada, identificadores de publicidad o dispositivo, anuncios mostrados, interacciones, datos de rendimiento, fallos y otros diagnósticos, para publicidad, medición, análisis y prevención de fraudes. Cuando esté autorizado, Google y sus socios pueden utilizar el identificador publicitario para relacionar la actividad con datos de aplicaciones y sitios de otras empresas para publicidad dirigida y medición. El permiso de rastreo de iOS es independiente de las elecciones de consentimiento publicitario.',
        links: [
          { label: 'Política de privacidad de Google', href: 'https://policies.google.com/privacy?hl=es' },
          { label: 'Datos tratados por Google Mobile Ads (Android)', href: 'https://developers.google.com/admob/android/privacy/play-data-disclosure' },
          { label: 'Datos tratados por Google Mobile Ads (iOS)', href: 'https://developers.google.com/admob/ios/privacy/data-disclosure' },
        ],
      },
      {
        heading: '6. Opciones y consentimiento',
        body:
          'La aplicación presenta una explicación sobre privacidad y utiliza Google User Messaging Platform (UMP) para comprobar el consentimiento y mostrar formularios cuando lo exijan tu región y la configuración del servicio. Esta integración puede tratar la región aproximada, interacciones e información de rendimiento para operar los formularios y las opciones de privacidad. En iOS, el sistema también puede solicitar autorización de rastreo mediante App Tracking Transparency (ATT). Puedes rechazar esta autorización y seguir jugando. En Configuración > Privacidad y anuncios, la opción Revisar elecciones de anuncios aparece cuando Google exige que ese formulario esté disponible; allí puedes revisar las opciones ofrecidas. También puedes gestionar el rastreo en iOS y los identificadores publicitarios en Android desde los ajustes del dispositivo. La aplicación no tiene un botón separado para desactivar Firebase Analytics. Rechazar un video, las notificaciones o el permiso ATT no desactiva, por sí solo, todo el análisis de uso. Para solicitudes sobre datos o consentimiento, utiliza el contacto de la sección 1.',
      },
      {
        heading: '7. Notificaciones, actualizaciones y conexiones externas',
        body:
          'Con tu permiso, la aplicación programa en el propio dispositivo recordatorios de producción lista y de misiones diarias mediante Expo Notifications. Puedes elegir las categorías en la configuración del juego y desactivar el permiso en los ajustes del sistema. En la versión actual, estos recordatorios son locales: la aplicación no registra un token de push para enviarlo a un servidor de notificaciones. Los eventos de programación, apertura y preferencias pueden enviarse a Firebase según la sección 4. La aplicación también utiliza Expo EAS Update para consultar y descargar actualizaciones compatibles. Estas conexiones incluyen la dirección IP e información técnica de la solicitud, como plataforma y versión de ejecución. La partida de la granja no se envía como parte de esta actualización. Google y Expo tratan la información necesaria para sus respectivos servicios. Al acceder a tiendas o enlaces externos, también se aplican las políticas de los responsables de esos destinos.',
        links: [{ label: 'Política de privacidad de Expo', href: 'https://expo.dev/privacy' }],
      },
      {
        heading: '8. Finalidades, bases legales y divulgación',
        body:
          'La información se utiliza para ejecutar y guardar el juego, entender la progresión, mejorar la experiencia, entregar actualizaciones, ofrecer publicidad, evitar abusos de recompensas y responder al soporte. Según la operación y la legislación aplicable, las bases legales pueden incluir la prestación del servicio solicitado, intereses legítimos evaluados para el funcionamiento y la mejora, obligaciones legales y consentimiento cuando sea necesario. Los servicios de Google y Expo reciben los datos relacionados con las integraciones descritas en esta política. No ponemos la partida local a disposición de otros jugadores. La información bajo nuestro control también puede divulgarse para cumplir requerimientos legales válidos.',
      },
      {
        heading: '9. Conservación y transferencias internacionales',
        body:
          'El progreso permanece en el dispositivo hasta que se eliminen los datos locales. Los mensajes de soporte se conservan durante el tiempo necesario para atender las solicitudes y cumplir posibles obligaciones legales. Los datos de publicidad, análisis y actualización siguen los plazos y la configuración de los respectivos servicios; no hay un plazo único para todas las categorías. Estos proveedores pueden tratar información fuera de Brasil, incluso en Estados Unidos, conforme a sus condiciones y a las normas aplicables a las transferencias internacionales.',
      },
      {
        heading: '10. Eliminación y seguridad',
        body:
          'En Android puedes borrar el almacenamiento de la aplicación en los ajustes del sistema. En iOS, elimina la aplicación y sus datos; desinstalarla conservando documentos no equivale a una eliminación completa. Esto elimina el progreso y las preferencias locales, y no ofrecemos recuperación mediante una cuenta. Gestiona las copias de seguridad por separado para evitar la restauración de datos. Eliminar la aplicación no borra automáticamente los registros ya enviados a proveedores ni los mensajes de soporte. Contáctanos para esos datos. Protege el acceso al dispositivo: ningún almacenamiento ni transmisión está totalmente libre de fallos o incidentes.',
      },
      {
        heading: '11. Tus derechos',
        body:
          'Según la LGPD de Brasil y otras leyes aplicables, puedes solicitar confirmación del tratamiento, acceso, rectificación, información sobre divulgación, portabilidad cuando corresponda y anonimización, bloqueo o eliminación en los supuestos legales. También puedes retirar el consentimiento y presentar una reclamación ante la ANPD o la autoridad competente. Envía tu solicitud al contacto de la sección 1. Podemos pedir información proporcional para verificar tu identidad y localizar los registros. Al no existir una cuenta de jugador, puede ser necesario identificar la instalación para localizar datos de análisis; no tenemos acceso remoto a la partida que existe únicamente en tu dispositivo.',
        links: [{ label: 'Derechos de los titulares — ANPD (portugués)', href: 'https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados/direito-dos-titulares' }],
      },
      {
        heading: '12. Niños y adolescentes',
        body:
          'Respeta la clasificación por edades y las indicaciones de la tienda donde obtuviste el juego. La aplicación no solicita edad ni registro; esto no elimina la recopilación técnica de datos por los servicios integrados. Los padres y tutores pueden usar los controles del dispositivo y de la tienda para supervisar el uso y la publicidad. Si identificas información de un niño o adolescente tratada indebidamente, contáctanos para evaluarla y adoptar las medidas aplicables, considerando su interés superior.',
      },
      {
        heading: '13. Cambios en esta política',
        body:
          'Esta política puede actualizarse cuando cambien el juego, los servicios integrados o los requisitos aplicables. La fecha indicada a continuación identifica la revisión. Los cambios que requieran aviso o consentimiento adicional deberán comunicarse por los medios apropiados. Las versiones en portugués, inglés y español describen las mismas prácticas.',
      },
    ],
    lastUpdated: '19 de septiembre de 2026',
  },
}
