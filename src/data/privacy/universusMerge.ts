import type { PrivacyDoc } from './types'

export const universusMergeByLocale: Record<
  'pt-BR' | 'pt-PT' | 'en' | 'es',
  PrivacyDoc
> = {
  'pt-BR': {
    locale: 'pt-BR',
    htmlLang: 'pt-BR',
    title: 'Política de privacidade',
    meta: 'Universus Merge · aplicativo móvel (iOS e Android)',
    intro:
      'Esta página explica como o Universus Merge lida com informações quando você utiliza o aplicativo.',
    sections: [
      {
        heading: '1. Responsável',
        body:
          'O aplicativo é disponibilizado pelo titular indicado nas lojas Apple App Store e Google Play. Contato para privacidade: menezes.nns@icloud.com.',
      },
      {
        heading: '2. Conta e cadastro',
        body:
          'O Universus Merge não exige criação de conta ou e-mail para a experiência principal. O jogo funciona completamente offline e o progresso é armazenado no próprio dispositivo.',
      },
      {
        heading: '3. Dados no dispositivo',
        body:
          'O jogo armazena localmente o estado do tabuleiro (itens e posições), tiers descobertos, Stardust acumulado, recompensas offline e preferências de som, vibração e modo Lo-Fi. Esses dados permanecem no aparelho, salvo backups automáticos do sistema operacional, conforme as políticas da Apple ou do Google.',
      },
      {
        heading: '4. Anúncios (Google Mobile Ads)',
        body:
          'O app pode exibir anúncios recompensados e intersticiais por meio do Google Mobile Ads. Esses anúncios são sempre opcionais (rewarded) ou exibidos em transições naturais (intersticiais com limite de frequência). Os provedores de anúncios podem coletar ou processar identificadores e dados técnicos de acordo com suas políticas e o seu consentimento ou configurações do sistema — inclusive via UMP (User Messaging Platform) no Android, exigido para usuários do Espaço Económico Europeu e Reino Unido. Consulte a documentação do Google sobre anúncios e privacidade para mais informações.',
      },
      {
        heading: '5. Analytics (PostHog)',
        body:
          'O app utiliza o PostHog para analytics de uso, como eventos de início e fim de sessão, merges realizados, descobertas de tiers e interações com anúncios. Os dados são enviados de forma anonimizada e servem exclusivamente para melhorar a experiência do jogo. Não são compartilhados com terceiros para fins publicitários.',
      },
      {
        heading: '6. Relatório de falhas (Sentry)',
        body:
          'Para identificar e corrigir erros, o app envia relatórios de falha ao Sentry. Esses relatórios podem incluir informações técnicas do dispositivo, stack trace e contexto do erro no momento da falha. Não contêm dados pessoais identificáveis.',
      },
      {
        heading: '7. Crianças',
        body:
          'O aplicativo possui classificação etária 12+ e não é direcionado a crianças menores de 12 anos. Não coletamos intencionalmente dados de crianças. Em caso de dúvidas, entre em contato pelo e-mail acima.',
      },
      {
        heading: '8. Segurança',
        body:
          'Não há servidor próprio obrigatório para jogar: a segurança dos dados locais depende também das configurações e do bloqueio do seu dispositivo. Você pode remover todos os dados do jogo desinstalando o aplicativo ou limpando o armazenamento da aplicação nas configurações do sistema.',
      },
      {
        heading: '9. Os seus direitos',
        body:
          'De acordo com a LGPD ou legislação aplicável, você pode exercer direitos sobre dados pessoais tratados por nós. Grande parte do progresso existe apenas localmente — nesse caso, a desinstalação ou limpeza de dados do app é o meio direto de eliminação. Para dados de analytics ou relatórios de falha, entre em contato pelo e-mail acima.',
      },
      {
        heading: '10. Alterações',
        body:
          'Esta política pode ser atualizada quando o app ou os requisitos legais mudarem. Consulte a data abaixo.',
      },
    ],
    lastUpdated: '10 de julho de 2026',
  },
  'pt-PT': {
    locale: 'pt-PT',
    htmlLang: 'pt-PT',
    title: 'Política de privacidade',
    meta: 'Universus Merge · aplicação móvel (iOS e Android)',
    intro:
      'Esta página explica como o Universus Merge trata informações quando utiliza a aplicação.',
    sections: [
      {
        heading: '1. Responsável',
        body:
          'A aplicação é disponibilizada pelo titular indicado nas lojas Apple App Store e Google Play. Contacto para privacidade: menezes.nns@icloud.com.',
      },
      {
        heading: '2. Conta e registo',
        body:
          'O Universus Merge não exige criação de conta ou e-mail para a experiência principal. O jogo funciona completamente offline e o progresso é guardado no próprio dispositivo.',
      },
      {
        heading: '3. Dados no dispositivo',
        body:
          'O jogo guarda localmente o estado do tabuleiro (itens e posições), tiers descobertos, Stardust acumulado, recompensas offline e preferências de som, vibração e modo Lo-Fi. Estes dados permanecem no aparelho, salvo cópias de segurança automáticas do sistema operativo, segundo as políticas da Apple ou do Google.',
      },
      {
        heading: '4. Anúncios (Google Mobile Ads)',
        body:
          'A app pode apresentar anúncios recompensados e intersticiais através do Google Mobile Ads. Os anúncios recompensados são sempre opcionais; os intersticiais são apresentados em transições naturais com limite de frequência. Os fornecedores de anúncios podem recolher ou tratar identificadores e dados técnicos segundo as suas políticas e o seu consentimento ou definições do sistema — incluindo via UMP (User Messaging Platform) no Android, exigido para utilizadores do Espaço Económico Europeu e Reino Unido. Consulte a documentação do Google sobre anúncios e privacidade para mais informações.',
      },
      {
        heading: '5. Analytics (PostHog)',
        body:
          'A app utiliza o PostHog para analytics de utilização, como eventos de início e fim de sessão, merges realizados, descobertas de tiers e interações com anúncios. Os dados são enviados de forma anonimizada e servem exclusivamente para melhorar a experiência do jogo. Não são partilhados com terceiros para fins publicitários.',
      },
      {
        heading: '6. Relatório de falhas (Sentry)',
        body:
          'Para identificar e corrigir erros, a app envia relatórios de falha ao Sentry. Esses relatórios podem incluir informações técnicas do dispositivo, stack trace e contexto do erro no momento da falha. Não contêm dados pessoais identificáveis.',
      },
      {
        heading: '7. Crianças',
        body:
          'A aplicação possui classificação etária 12+ e não é destinada a crianças com menos de 12 anos. Não recolhemos intencionalmente dados de crianças. Em caso de dúvidas, contacte-nos pelo e-mail acima.',
      },
      {
        heading: '8. Segurança',
        body:
          'Não existe servidor próprio obrigatório para jogar: a segurança dos dados locais depende também das definições e do bloqueio do seu dispositivo. Pode remover todos os dados do jogo desinstalando a aplicação ou limpando o armazenamento da aplicação nas definições do sistema.',
      },
      {
        heading: '9. Os seus direitos',
        body:
          'Ao abrigo do RGPD, da LGPD ou de outra legislação aplicável, pode exercer direitos sobre dados pessoais tratados por nós. Grande parte do progresso existe apenas localmente — nesse caso, a desinstalação ou limpeza de dados da app é a forma direta de eliminação. Para dados de analytics ou relatórios de falha, contacte-nos pelo e-mail acima.',
      },
      {
        heading: '10. Alterações',
        body:
          'Esta política pode ser atualizada quando a app ou os requisitos legais mudarem. Consulte a data abaixo.',
      },
    ],
    lastUpdated: '10 de julho de 2026',
  },
  en: {
    locale: 'en',
    htmlLang: 'en',
    title: 'Privacy policy',
    meta: 'Universus Merge · mobile app (iOS and Android)',
    intro:
      'This page explains how Universus Merge handles information when you use the app.',
    sections: [
      {
        heading: '1. Controller',
        body:
          'The app is provided by the party listed on the Apple App Store and Google Play. Privacy contact: menezes.nns@icloud.com.',
      },
      {
        heading: '2. Account and sign-up',
        body:
          'Universus Merge does not require an account or email for the core experience. The game runs fully offline and progress is stored on your device.',
      },
      {
        heading: '3. Data on your device',
        body:
          'The game stores locally: board state (items and positions), discovered tiers, accumulated Stardust, offline rewards, and preferences for sound, haptics, and Lo-Fi mode. This data stays on your device, except for OS-level backups per Apple/Google policies.',
      },
      {
        heading: '4. Ads (Google Mobile Ads)',
        body:
          'The app may show rewarded and interstitial ads through Google Mobile Ads. Rewarded ads are always optional; interstitials appear at natural transitions with a frequency cap. Ad providers may collect or process identifiers and technical data under their policies and your consent or system settings — including via UMP (User Messaging Platform) on Android, required for EEA and UK users. See Google\u2019s documentation on ads and privacy for more information.',
      },
      {
        heading: '5. Analytics (PostHog)',
        body:
          'The app uses PostHog for usage analytics, such as session start/end events, merges performed, tier discoveries, and ad interactions. Data is sent anonymously and is used solely to improve the game experience. It is not shared with third parties for advertising purposes.',
      },
      {
        heading: '6. Crash reporting (Sentry)',
        body:
          'To identify and fix errors, the app sends crash reports to Sentry. These reports may include technical device information, stack traces, and error context at the time of the crash. They do not contain personally identifiable information.',
      },
      {
        heading: '7. Children',
        body:
          'The app is rated 12+ and is not directed at children under 12. We do not intentionally collect data from children. If you have concerns, contact us at the email above.',
      },
      {
        heading: '8. Security',
        body:
          'There is no mandatory server to play: local data security also depends on your device settings and lock screen. You can remove all game data by uninstalling the app or clearing app storage in your device settings.',
      },
      {
        heading: '9. Your rights',
        body:
          'Under LGPD, GDPR, or applicable law you may exercise rights over personal data we process. Most progress exists only locally — uninstalling or clearing app data is the direct way to delete it. For analytics or crash report data, contact us at the email above.',
      },
      {
        heading: '10. Changes',
        body:
          'This policy may be updated when the app or legal requirements change. See the date below.',
      },
    ],
    lastUpdated: 'July 10, 2026',
  },
  es: {
    locale: 'es',
    htmlLang: 'es',
    title: 'Política de privacidad',
    meta: 'Universus Merge · aplicación móvil (iOS y Android)',
    intro:
      'Esta página explica cómo Universus Merge trata la información cuando utilizas la aplicación.',
    sections: [
      {
        heading: '1. Responsable',
        body:
          'La aplicación la ofrece el titular indicado en Apple App Store y Google Play. Contacto de privacidad: menezes.nns@icloud.com.',
      },
      {
        heading: '2. Cuenta y registro',
        body:
          'Universus Merge no exige crear una cuenta ni proporcionar un correo electrónico para la experiencia principal. El juego funciona completamente sin conexión y el progreso se almacena en tu dispositivo.',
      },
      {
        heading: '3. Datos en el dispositivo',
        body:
          'El juego guarda localmente el estado del tablero (ítems y posiciones), tiers descubiertos, Stardust acumulado, recompensas offline y preferencias de sonido, vibración y modo Lo-Fi. Estos datos permanecen en el dispositivo, salvo copias de seguridad automáticas del sistema operativo según las políticas de Apple o Google.',
      },
      {
        heading: '4. Anuncios (Google Mobile Ads)',
        body:
          'La app puede mostrar anuncios recompensados e intersticiales a través de Google Mobile Ads. Los anuncios recompensados son siempre opcionales; los intersticiales aparecen en transiciones naturales con límite de frecuencia. Los proveedores de anuncios pueden recopilar o tratar identificadores y datos técnicos según sus políticas y tu consentimiento o ajustes del sistema — incluyendo mediante UMP (User Messaging Platform) en Android, obligatorio para usuarios del EEE y el Reino Unido. Consulta la documentación de Google sobre anuncios y privacidad para más información.',
      },
      {
        heading: '5. Analytics (PostHog)',
        body:
          'La app utiliza PostHog para analytics de uso, como eventos de inicio y fin de sesión, merges realizados, descubrimientos de tiers e interacciones con anuncios. Los datos se envían de forma anonimizada y se usan exclusivamente para mejorar la experiencia del juego. No se comparten con terceros con fines publicitarios.',
      },
      {
        heading: '6. Informe de fallos (Sentry)',
        body:
          'Para identificar y corregir errores, la app envía informes de fallos a Sentry. Estos informes pueden incluir información técnica del dispositivo, trazas de pila y contexto del error en el momento del fallo. No contienen datos personales identificables.',
      },
      {
        heading: '7. Menores',
        body:
          'La aplicación tiene clasificación 12+ y no está dirigida a menores de 12 años. No recopilamos intencionalmente datos de menores. Si tienes dudas, contáctanos en el correo indicado.',
      },
      {
        heading: '8. Seguridad',
        body:
          'No hay servidor propio obligatorio para jugar: la seguridad de los datos locales depende también de la configuración y el bloqueo de tu dispositivo. Puedes eliminar todos los datos del juego desinstalando la app o borrando su almacenamiento en los ajustes del sistema.',
      },
      {
        heading: '9. Tus derechos',
        body:
          'Según la LGPD, el RGPD u otra ley aplicable, puedes ejercer derechos sobre datos personales que tratemos. Gran parte del progreso existe solo localmente: desinstalar o borrar datos de la app es la forma directa de suprimirlos. Para datos de analytics o informes de fallos, contáctanos en el correo indicado.',
      },
      {
        heading: '10. Cambios',
        body:
          'Esta política puede actualizarse cuando cambien la app o los requisitos legales. Consulta la fecha a continuación.',
      },
    ],
    lastUpdated: '10 de julio de 2026',
  },
}
