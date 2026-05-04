import type { PrivacyDoc } from './types'

export const linkesByLocale: Record<
  'pt-BR' | 'pt-PT' | 'en' | 'es' | 'ru',
  PrivacyDoc
> = {
  'pt-BR': {
    locale: 'pt-BR',
    htmlLang: 'pt-BR',
    title: 'Política de privacidade',
    meta: 'Linkes · aplicativo móvel (iOS e Android)',
    intro:
      'Esta página descreve como o aplicativo Linkes trata informações quando você o utiliza. Ao usar o app, você concorda com esta política na versão vigente no momento do uso.',
    sections: [
      {
        heading: '1. Responsável',
        body:
          'O aplicativo é disponibilizado pelo titular indicado nas lojas de aplicativos (Apple App Store / Google Play). Para solicitações relacionadas a privacidade ou aos seus dados, utilize o canal de suporte ou e-mail indicado na página da loja ou dentro do aplicativo.',
      },
      {
        heading: '2. Dados que não solicitamos de forma ativa',
        body:
          'O Linkes não exige cadastro com nome, e-mail ou conta própria no aplicativo para jogar. Não há, neste momento, perfil de utilizador centralizado nos nossos servidores ligado ao uso típico do jogo.',
      },
      {
        heading: '3. Dados armazenados no seu dispositivo',
        body:
          'Para funcionar offline em grande parte das funcionalidades, o app pode guardar localmente no dispositivo informações como progresso de jogo, preferências, moedas ou recursos virtuais, estado do modo Velocidade (por exemplo tentativas diárias associadas ao dia do calendário do dispositivo), dados do desafio diário e idioma da interface. Este armazenamento usa mecanismos do próprio sistema e permanece no aparelho, salvo cópias feitas pelo sistema de backup da Apple/Google, conforme as respetivas políticas.',
      },
      {
        heading: '4. Idioma e configuração regional',
        body:
          'O aplicativo pode utilizar informações de idioma ou região do sistema apenas para apresentar textos e formatação adequados. Esse uso tende a ocorrer no próprio dispositivo.',
      },
      {
        heading: '5. Anúncios',
        body:
          'O aplicativo Linkes pode exibir anúncios. Os anúncios são fornecidos por terceiros e podem aparecer em diferentes momentos durante o uso do app.',
      },
      {
        heading: '6. Análise estatística',
        body:
          'Caso passemos a utilizar ferramentas de métricas ou diagnóstico, atualizaremos esta política quando aplicável.',
      },
      {
        heading: '7. Crianças',
        body:
          'O app é direcionado a público geral. Se você é responsável por menor e tem dúvidas sobre o uso dos dados, contacte-nos pelo canal indicado na loja.',
      },
      {
        heading: '8. Segurança e retenção',
        body:
          'Dados mantidos apenas localmente seguem o ciclo de vida do aplicativo e das cópias de segurança do dispositivo. Pode apagar dados do app desinstalando-o ou limpando dados da aplicação nas definições do sistema, conforme permitido pela plataforma.',
      },
      {
        heading: '9. Os seus direitos (LGPD e legislação aplicável)',
        body:
          'Consoante a lei brasileira ou outra lei aplicável ao titular dos dados, você pode solicitar confirmação de tratamento, acesso, correção, anonimização, portabilidade ou eliminação de dados pessoais quando existirem dados tratados por nós em nome sua. Para dados apenas locais no telefone, muitas operações podem ser feitas diretamente nas definições do aparelho ou ao remover o app.',
      },
      {
        heading: '10. Alterações',
        body:
          'Podemos atualizar esta política para refletir mudanças no aplicativo ou nas obrigações legais. O uso continuado após alterações constitui aceitação da versão publicada.',
      },
      {
        heading: '11. Suporte',
        body:
          'Para dúvidas sobre privacidade ou suporte ao app, contacte menezes.nns@icloud.com.',
      },
    ],
    lastUpdated: '30 de abril de 2026',
  },
  'pt-PT': {
    locale: 'pt-PT',
    htmlLang: 'pt-PT',
    title: 'Política de privacidade',
    meta: 'Linkes · aplicação móvel (iOS e Android)',
    intro:
      'Esta página descreve como a aplicação Linkes trata informações quando a utiliza. Ao usar a app, concorda com esta política na versão vigente no momento da utilização.',
    sections: [
      {
        heading: '1. Responsável',
        body:
          'A aplicação é disponibilizada pelo titular indicado nas lojas de aplicações (Apple App Store / Google Play). Para pedidos relacionados com privacidade ou com os seus dados, utilize o canal de apoio ou o e-mail indicado na página da loja ou dentro da aplicação.',
      },
      {
        heading: '2. Dados que não solicitamos de forma ativa',
        body:
          'O Linkes não exige registo com nome, e-mail ou conta própria na aplicação para jogar. Não existe, neste momento, perfil de utilizador centralizado nos nossos servidores associado ao uso típico do jogo.',
      },
      {
        heading: '3. Dados armazenados no seu dispositivo',
        body:
          'Para funcionar offline na maior parte das funcionalidades, a app pode guardar localmente no dispositivo informações como progresso de jogo, preferências, moedas ou recursos virtuais, estado do modo Velocidade (por exemplo tentativas diárias associadas ao dia do calendário do dispositivo), dados do desafio diário e idioma da interface. Este armazenamento usa mecanismos do próprio sistema (por exemplo armazenamento local da plataforma) e permanece no aparelho, salvo cópias feitas pela cópia de segurança da Apple/Google, segundo as respetivas políticas.',
      },
      {
        heading: '4. Idioma e configuração regional',
        body:
          'A aplicação pode utilizar informações de idioma ou região do sistema apenas para apresentar textos e formatação adequados. Este uso tende a ocorrer no próprio dispositivo.',
      },
      {
        heading: '5. Anúncios',
        body:
          'A aplicação Linkes pode apresentar anúncios. Os anúncios são fornecidos por terceiros e podem surgir em diferentes momentos durante a utilização da app.',
      },
      {
        heading: '6. Análise estatística',
        body:
          'Caso passemos a utilizar ferramentas de métricas ou diagnóstico, atualizaremos esta política quando aplicável.',
      },
      {
        heading: '7. Crianças',
        body:
          'A app dirige-se ao público em geral. Se é responsável por um menor e tem dúvidas sobre o uso dos dados, contacte-nos pelo canal indicado na loja.',
      },
      {
        heading: '8. Segurança e conservação',
        body:
          'Dados mantidos apenas localmente seguem o ciclo de vida da aplicação e das cópias de segurança do dispositivo. Pode apagar dados da app ao desinstalá-la ou ao limpar dados da aplicação nas definições do sistema, quando a plataforma o permitir.',
      },
      {
        heading: '9. Os seus direitos (RGPD, LGPD e legislação aplicável)',
        body:
          'Dependendo da lei aplicável (incluindo o RGPD na UE ou a LGPD no Brasil, quando relevante), pode solicitar confirmação de tratamento, acesso, retificação, anonimização, portabilidade ou eliminação de dados pessoais quando existirem dados tratados por nós relativamente a si. Para dados apenas locais no telemóvel, muitas operações podem ser feitas diretamente nas definições do aparelho ou ao remover a app.',
      },
      {
        heading: '10. Alterações',
        body:
          'Podemos atualizar esta política para refletir alterações na aplicação ou nas obrigações legais. A data da última atualização surge abaixo. A utilização continuada após alterações constitui aceitação da versão publicada.',
      },
      {
        heading: '11. Suporte',
        body:
          'Para questões de privacidade ou apoio à aplicação, contacte menezes.nns@icloud.com.',
      },
    ],
    lastUpdated: '30 de abril de 2026',
  },
  en: {
    locale: 'en',
    htmlLang: 'en',
    title: 'Privacy policy',
    meta: 'Linkes · mobile app (iOS and Android)',
    intro:
      'This page describes how the Linkes app handles information when you use it. By using the app, you agree to this policy as in effect at that time.',
    sections: [
      {
        heading: '1. Data controller',
        body:
          'The app is provided by the party listed on the app stores (Apple App Store / Google Play). For privacy-related requests or questions about your data, use the support channel or email shown on the store listing or inside the app.',
      },
      {
        heading: '2. Data we do not actively collect from you',
        body:
          'Linkes does not require a sign-up with name, email, or an in-app account to play. We do not currently maintain a centralized user profile on our servers for typical gameplay.',
      },
      {
        heading: '3. Data stored on your device',
        body:
          'To work offline for much of the experience, the app may store information locally on your device, such as game progress, preferences, coins or virtual items, Speed mode state (for example daily attempts tied to the device calendar day), daily challenge data, and interface language. This uses platform storage on the device and stays on the device unless copied by Apple/Google backup features, per their policies.',
      },
      {
        heading: '4. Language and region',
        body:
          'The app may use system language or region settings only to show appropriate text and formatting. This usually happens on the device itself.',
      },
      {
        heading: '5. Ads',
        body:
          'The Linkes app may show ads. Ads are provided by third parties and may appear at different times while you use the app.',
      },
      {
        heading: '6. Analytics',
        body:
          'If we add analytics or diagnostics tools, we will update this policy when applicable.',
      },
      {
        heading: '7. Children',
        body:
          'The app is aimed at a general audience. If you are a parent or guardian and have questions about data use, contact us through the channel listed on the store.',
      },
      {
        heading: '8. Security and retention',
        body:
          'Data kept only on your device follows the lifecycle of the app and device backups. You can delete app data by uninstalling the app or clearing app data in system settings, where the platform allows.',
      },
      {
        heading: '9. Your rights (applicable law)',
        body:
          'Depending on the law that applies to you (for example LGPD in Brazil or GDPR in the EU, where relevant), you may ask for confirmation of processing, access, correction, anonymization, portability, or deletion of personal data when we process such data on our side. For data that exists only locally on your phone, many actions can be done in device settings or by removing the app.',
      },
      {
        heading: '10. Changes',
        body:
          'We may update this policy to reflect changes to the app or legal requirements. The last updated date is shown below. Continued use after changes means you accept the published version.',
      },
      {
        heading: '11. Support',
        body:
          'For privacy-related questions or app support, contact us at menezes.nns@icloud.com.',
      },
    ],
    lastUpdated: 'April 30, 2026',
  },
  es: {
    locale: 'es',
    htmlLang: 'es',
    title: 'Política de privacidad',
    meta: 'Linkes · aplicación móvil (iOS y Android)',
    intro:
      'Esta página describe cómo la aplicación Linkes trata la información cuando la utilizas. Al usar la app, aceptas esta política en la versión vigente en ese momento.',
    sections: [
      {
        heading: '1. Responsable',
        body:
          'La aplicación la ofrece el titular indicado en las tiendas (Apple App Store / Google Play). Para solicitudes relacionadas con la privacidad o tus datos, usa el canal de soporte o el correo indicado en la ficha de la tienda o dentro de la aplicación.',
      },
      {
        heading: '2. Datos que no solicitamos de forma activa',
        body:
          'Linkes no exige registro con nombre, correo ni cuenta propia en la app para jugar. Por ahora no hay un perfil de usuario centralizado en nuestros servidores vinculado al uso habitual del juego.',
      },
      {
        heading: '3. Datos almacenados en tu dispositivo',
        body:
          'Para funcionar sin conexión en gran parte de las funciones, la app puede guardar localmente información como progreso del juego, preferencias, monedas u objetos virtuales, estado del modo Velocidad (por ejemplo intentos diarios ligados al día del calendario del dispositivo), datos del desafío diario e idioma de la interfaz. Este almacenamiento usa los mecanismos del sistema en el dispositivo y permanece en el aparato, salvo copias hechas por la copia de seguridad de Apple/Google, según sus políticas.',
      },
      {
        heading: '4. Idioma y configuración regional',
        body:
          'La aplicación puede usar el idioma o la región del sistema solo para mostrar textos y formato adecuados. Eso suele ocurrir en el propio dispositivo.',
      },
      {
        heading: '5. Anuncios',
        body:
          'La aplicación Linkes puede mostrar anuncios. Los anuncios los proporcionan terceros y pueden aparecer en distintos momentos mientras usas la app.',
      },
      {
        heading: '6. Análisis estadístico',
        body:
          'Si empezamos a usar herramientas de métricas o diagnóstico, actualizaremos esta política cuando corresponda.',
      },
      {
        heading: '7. Menores',
        body:
          'La app está dirigida al público general. Si eres tutor de un menor y tienes dudas sobre el uso de los datos, contáctanos por el canal indicado en la tienda.',
      },
      {
        heading: '8. Seguridad y conservación',
        body:
          'Los datos que solo están en el dispositivo siguen el ciclo de vida de la app y de las copias de seguridad del equipo. Puedes borrar los datos desinstalando la app o borrando datos de la aplicación en los ajustes del sistema, si la plataforma lo permite.',
      },
      {
        heading: '9. Tus derechos (ley aplicable)',
        body:
          'Según la ley que te aplique (por ejemplo LGPD en Brasil o RGPD en la UE cuando corresponda), puedes solicitar confirmación del tratamiento, acceso, rectificación, anonimización, portabilidad o supresión de datos personales cuando existan datos tratados por nosotros. Para datos solo locales en el teléfono, muchas acciones se pueden hacer en los ajustes del dispositivo o eliminando la app.',
      },
      {
        heading: '10. Cambios',
        body:
          'Podemos actualizar esta política para reflejar cambios en la aplicación o en obligaciones legales. La fecha de la última actualización figura abajo. El uso continuado tras los cambios supone la aceptación de la versión publicada.',
      },
      {
        heading: '11. Soporte',
        body:
          'Para consultas sobre privacidad o soporte de la app, escribe a menezes.nns@icloud.com.',
      },
    ],
    lastUpdated: '30 de abril de 2026',
  },
  ru: {
    locale: 'ru',
    htmlLang: 'ru',
    title: 'Политика конфиденциальности',
    meta: 'Linkes · мобильное приложение (iOS и Android)',
    intro:
      'На этой странице описано, как приложение Linkes обрабатывает информацию при вашем использовании. Пользуясь приложением, вы соглашаетесь с действующей на тот момент версией этой политики.',
    sections: [
      {
        heading: '1. Ответственное лицо',
        body:
          'Приложение предоставляется лицом, указанным в магазинах приложений (Apple App Store / Google Play). По вопросам конфиденциальности и персональных данных используйте канал поддержки или адрес электронной почты, указанные на странице приложения в магазине или внутри приложения.',
      },
      {
        heading: '2. Данные, которые мы не запрашиваем активно',
        body:
          'Linkes не требует регистрации с именем, электронной почтой или собственной учётной записью в приложении для игры. В настоящее время у нас нет централизованного профиля пользователя на наших серверах, связанного с обычным игровым процессом.',
      },
      {
        heading: '3. Данные, хранимые на вашем устройстве',
        body:
          'Чтобы большая часть функций работала офлайн, приложение может локально сохранять на устройстве такие сведения, как прогресс игры, настройки, монеты или виртуальные предметы, состояние режима «Скорость» (например дневные попытки, привязанные к календарному дню устройства), данные ежедневного испытания и язык интерфейса. Хранение выполняется средствами платформы и остаётся на устройстве, за исключением резервных копий Apple/Google согласно их правилам.',
      },
      {
        heading: '4. Язык и региональные настройки',
        body:
          'Приложение может использовать язык или регион системы только для отображения текстов и форматирования. Обычно это происходит на самом устройстве.',
      },
      {
        heading: '5. Реклама',
        body:
          'Приложение Linkes может показывать рекламу. Рекламу предоставляют сторонние партнёры; объявления могут появляться в разное время во время использования приложения.',
      },
      {
        heading: '6. Аналитика',
        body:
          'Если мы начнём использовать инструменты аналитики или диагностики, мы обновим эту политику при необходимости.',
      },
      {
        heading: '7. Дети',
        body:
          'Приложение рассчитано на широкую аудиторию. Если вы родитель или опекун и у вас есть вопросы об использовании данных, свяжитесь с нами через канал, указанный в магазине.',
      },
      {
        heading: '8. Безопасность и хранение',
        body:
          'Данные, которые хранятся только на устройстве, зависят от жизненного цикла приложения и резервных копий устройства. Вы можете удалить данные приложения, удалив приложение или очистив данные приложения в настройках системы, если платформа это позволяет.',
      },
      {
        heading: '9. Ваши права (применимое право)',
        body:
          'В зависимости от законодательства, применимого к вам (например LGPD в Бразилии или GDPR в ЕС, где это уместно), вы можете запросить подтверждение обработки, доступ, исправление, обезличивание, переносимость или удаление персональных данных, если мы обрабатываем такие данные. Для данных, которые существуют только локально на телефоне, многие действия можно выполнить в настройках устройства или удалив приложение.',
      },
      {
        heading: '10. Изменения',
        body:
          'Мы можем обновлять эту политику с учётом изменений в приложении или юридических требований. Дата последнего обновления указана ниже. Продолжение использования после изменений означает принятие опубликованной версии.',
      },
      {
        heading: '11. Поддержка',
        body:
          'По вопросам конфиденциальности или поддержки приложения пишите на menezes.nns@icloud.com.',
      },
    ],
    lastUpdated: '30 апреля 2026 г.',
  },
}
