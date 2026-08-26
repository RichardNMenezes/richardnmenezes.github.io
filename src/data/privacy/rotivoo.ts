import type { PrivacyDoc } from './types'

export const rotivooByLocale: Record<'pt-BR', PrivacyDoc> = {
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
}
