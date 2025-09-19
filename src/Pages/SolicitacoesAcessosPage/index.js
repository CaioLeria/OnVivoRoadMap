import * as Styles from './SolicitacoesAcessoStyle';
import Header from '../../Components/Header';
import { useState } from 'react';

const SolicitacoesAcessoPage = () => {
  const [solicitacoes, setSolicitacoes] = useState([
    {
      id: 1,
      plataforma: "Sistema de Vendas",
      descricao: "Acesso ao CRM de vendas e gestão de clientes",
      status: "pendente",
      dataSolicitacao: "2024-01-15",
      prazo: "2024-01-18"
    },
    {
      id: 2,
      plataforma: "Portal do Colaborador",
      descricao: "Acesso ao portal interno de benefícios e informações",
      status: "aprovado",
      dataSolicitacao: "2024-01-10",
      dataLiberacao: "2024-01-12"
    },
    {
      id: 3,
      plataforma: "Ferramentas de TI",
      descricao: "Acesso às ferramentas de desenvolvimento",
      status: "atrasado",
      dataSolicitacao: "2024-01-05",
      prazo: "2024-01-08"
    },
    {
      id: 4,
      plataforma: "Sistema Financeiro",
      descricao: "Acesso às planilhas e relatórios financeiros",
      status: "pendente",
      dataSolicitacao: "2024-01-17",
      prazo: "2024-01-20"
    }
  ]);

  const handleSolicitarAcesso = (plataforma) => {
    console.log(`Solicitando acesso para: ${plataforma}`);
    // Lógica para solicitar acesso
  };

  const handleEnviarLembrete = (solicitacaoId) => {
    console.log(`Enviando lembrete para solicitação: ${solicitacaoId}`);
    // Lógica para enviar lembrete
  };

  const handleChatBuddy = () => {
    console.log('Abrindo chat com Buddy');
    // Lógica para abrir chat
  };

  const handleChatGestor = () => {
    console.log('Abrindo chat com Gestor');
    // Lógica para abrir chat
  };

  const getStatusInfo = (status) => {
    const statusConfig = {
      pendente: { texto: "Pendente", cor: "#FFA500" },
      aprovado: { texto: "Acesso Liberado", cor: "#00AA00" },
      atrasado: { texto: "Atrasado", cor: "#FF0000" }
    };
    return statusConfig[status] || { texto: "Desconhecido", cor: "#666" };
  };

  return (
    <Styles.SolicitacoesContainer>
      <Header />
      
      <Styles.HeaderSection>
        <Styles.MainTitle>On.Vivo Roadmap</Styles.MainTitle>
        <Styles.PageTitle>Solicitações de Acesso</Styles.PageTitle>
        <Styles.Description>
          Solicite e acompanhe seus acessos de forma simples e rápida. 
          Não espere dias por um acesso - resolva em poucos cliques!
        </Styles.Description>
      </Styles.HeaderSection>

      <Styles.ChatButtonsContainer>
        <Styles.ChatButton onClick={handleChatBuddy}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
          </svg>
          Chat com Buddy
        </Styles.ChatButton>
        
        <Styles.ChatButton onClick={handleChatGestor}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
          </svg>
          Chat com Gestor
        </Styles.ChatButton>
      </Styles.ChatButtonsContainer>

      <Styles.Content>
        <Styles.SolicitacoesGrid>
          {solicitacoes.map((solicitacao) => {
            const statusInfo = getStatusInfo(solicitacao.status);
            
            return (
              <Styles.SolicitacaoCard key={solicitacao.id} status={solicitacao.status}>
                <Styles.CardHeader>
                  <Styles.PlataformaNome>
                    {solicitacao.plataforma}
                  </Styles.PlataformaNome>
                  <Styles.StatusBadge cor={statusInfo.cor}>
                    {statusInfo.texto}
                  </Styles.StatusBadge>
                </Styles.CardHeader>
                
                <Styles.Descricao>
                  {solicitacao.descricao}
                </Styles.Descricao>
                
                <Styles.InfoRow>
                  <Styles.InfoLabel>Solicitado em:</Styles.InfoLabel>
                  <Styles.InfoValue>
                    {new Date(solicitacao.dataSolicitacao).toLocaleDateString('pt-BR')}
                  </Styles.InfoValue>
                </Styles.InfoRow>
                
                {solicitacao.prazo && (
                  <Styles.InfoRow>
                    <Styles.InfoLabel>Prazo estimado:</Styles.InfoLabel>
                    <Styles.InfoValue>
                      {new Date(solicitacao.prazo).toLocaleDateString('pt-BR')}
                    </Styles.InfoValue>
                  </Styles.InfoRow>
                )}
                
                {solicitacao.dataLiberacao && (
                  <Styles.InfoRow>
                    <Styles.InfoLabel>Liberado em:</Styles.InfoLabel>
                    <Styles.InfoValue>
                      {new Date(solicitacao.dataLiberacao).toLocaleDateString('pt-BR')}
                    </Styles.InfoValue>
                  </Styles.InfoRow>
                )}
                
                <Styles.ActionsContainer>
                  {solicitacao.status === 'pendente' && (
                    <Styles.ActionButton onClick={() => handleSolicitarAcesso(solicitacao.plataforma)}>
                      Solicitar Acesso
                    </Styles.ActionButton>
                  )}
                  
                  {solicitacao.status === 'atrasado' && (
                    <Styles.LembreteButton onClick={() => handleEnviarLembrete(solicitacao.id)}>
                      Enviar Lembrete
                    </Styles.LembreteButton>
                  )}
                  
                  {solicitacao.status === 'aprovado' && (
                    <Styles.AcessoLiberadoButton>
                      Acesso Liberado ✓
                    </Styles.AcessoLiberadoButton>
                  )}
                </Styles.ActionsContainer>
              </Styles.SolicitacaoCard>
            );
          })}
        </Styles.SolicitacoesGrid>
      </Styles.Content>

      <Styles.InfoSection>
        <Styles.InfoTitle>Como funciona?</Styles.InfoTitle>
        <Styles.InfoText>
          • Solicite acessos com um clique<br/>
          • Acompanhe o status em tempo real<br/>
          • Receba notificações quando for liberado<br/>
          • Envie lembretes se o prazo passar<br/>
          • Converse com seu Buddy ou Gestor a qualquer momento
        </Styles.InfoText>
      </Styles.InfoSection>
    </Styles.SolicitacoesContainer>
  );
};

export default SolicitacoesAcessoPage;