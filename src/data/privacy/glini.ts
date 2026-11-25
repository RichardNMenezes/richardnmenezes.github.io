import type { PrivacyDoc } from './types'

export const gliniByLocale: Record<'pt-BR', PrivacyDoc> = {
  'pt-BR': {
    locale: 'pt-BR',
    htmlLang: 'pt-BR',
    title: 'Política de privacidade',
    meta: 'GLini · aplicativo móvel (iOS e Android)',
    intro:
      'O GLini ajuda a organizar, revisar e compartilhar escalas de trabalho. Esta política explica o tratamento de dados da sua conta e de pessoas identificadas nas escalas que você importa.',
    sections: [
      {
        id: 'contato',
        heading: '1. Responsável e contato',
        body:
          'Richard Menezes é responsável pelo GLini e pelo tratamento descrito nesta política. Use o contato abaixo para suporte ao GLini, dúvidas de privacidade e solicitações relacionadas a dados pessoais, inclusive quando seus dados constarem em uma escala importada por outra pessoa.',
        links: [
          { label: 'menezes.nns@icloud.com', href: 'mailto:menezes.nns@icloud.com' },
        ],
      },
      {
        heading: '2. Cadastro, sessões e segurança',
        body:
          'Ao criar uma conta, você informa nome, sobrenome, e-mail e senha. A senha é protegida por hash no servidor. Tratamos identificadores e datas de sessão e dados técnicos de acesso, como endereço IP e contadores de tentativas, para autenticar usuários e limitar abusos. Se você escolher Lembrar de mim, o token de sessão fica no armazenamento seguro do aparelho. As sessões têm prazo de expiração e podem ser revogadas.',
      },
      {
        heading: '3. Escalas de trabalho e dados de colegas',
        body:
          'Quando você importa uma escala, o GLini pode tratar a competência, os nomes das pessoas, os dias de trabalho, os horários de plantão, as folgas e as informações de jornada e banco de horas presentes nos registros. A importação mostra uma prévia para revisão. Ao confirmar o salvamento em uma conta, a versão revisada pode incluir as linhas dos colegas e fica associada a essa conta. A função de consulta da equipe usa as escalas importadas na própria conta. Importe apenas escalas cujo uso e envio você esteja autorizado a fazer para essa finalidade. Evite incluir dados de saúde ou outras informações desnecessárias para organizar a escala.',
      },
      {
        heading: '4. Importação de planilhas, imagens e PDF',
        body:
          'Você escolhe o arquivo que o GLini vai ler. Planilhas CSV e XLSX são processadas pela API do GLini. Quando a leitura de imagens e PDFs estiver disponível no ambiente usado, o GLini pede autorização antes de enviar o arquivo selecionado e a competência à OpenAI para extrair os campos da escala. Você pode optar por uma planilha se preferir dispensar esse envio. O GLini usa o arquivo para gerar a prévia e salva os campos revisados que você confirmar, sem arquivar o original como anexo. A OpenAI pode tratar a solicitação conforme os controles aplicáveis à sua API.',
        links: [
          { label: 'Controles de dados da API OpenAI', href: 'https://developers.openai.com/api/docs/guides/your-data' },
        ],
      },
      {
        heading: '5. Face ID, biometria e compartilhamento',
        body:
          'Você pode ativar ou desativar o Face ID ou a biometria do Android para acessar sua conta. O sistema operacional verifica sua identidade localmente e protege o token armazenado. O GLini não recebe nem guarda imagens, impressões digitais ou modelos biométricos. Ao exportar uma escala como imagem ou PDF, você escolhe no menu do sistema para onde enviá-la. O arquivo pode ficar temporariamente no cache do aparelho. O destinatário ou aplicativo escolhido pode manter sua própria cópia.',
      },
      {
        heading: '6. Finalidades, serviços usados e conservação',
        body:
          'Usamos os dados para oferecer as funções solicitadas, autenticar o acesso, guardar escalas confirmadas, atender solicitações e proteger a operação. Conforme a finalidade, o tratamento se baseia na prestação do serviço, na autorização para recursos opcionais, no interesse legítimo de segurança ou no cumprimento de obrigações legais. Os dados de conta e as versões de escala salvas ficam na infraestrutura do GLini, com armazenamento no MongoDB Atlas, para disponibilizar o serviço. Fornecedores de infraestrutura e de processamento recebem os dados necessários às funções que prestam. Parte desse processamento pode ocorrer fora do Brasil. Dados necessários para cumprir obrigações legais ou exercer direitos podem ser conservados nas hipóteses aplicáveis.',
        links: [
          { label: 'Política de privacidade da MongoDB', href: 'https://www.mongodb.com/legal/privacy/privacy-policy' },
        ],
      },
      {
        heading: '7. Seus direitos e exclusão da conta',
        body:
          'Para solicitar a exclusão da sua conta e dos dados vinculados, escreva para o endereço abaixo e informe o e-mail da conta. Use o mesmo canal para pedir confirmação do tratamento, acesso, correção, informações sobre compartilhamento, revogação de consentimento e outros direitos previstos na LGPD, conforme aplicável. Você pode alterar o nome do perfil ou sair da sessão pelo aplicativo. Para interromper o envio de novos arquivos à OpenAI, deixe de autorizar a leitura de fotos ou PDFs nas próximas importações. Ao entrar em contato, evite enviar sua senha ou escalas com dados de terceiros.',
        links: [
          { label: 'Solicitar exclusão ou exercer direitos', href: 'mailto:menezes.nns@icloud.com?subject=GLini%20-%20privacidade%20e%20exclus%C3%A3o' },
          { label: 'Direitos dos titulares na ANPD', href: 'https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados-1/direito-dos-titulares' },
        ],
      },
    ],
    lastUpdated: '24 de novembro de 2026',
  },
}
