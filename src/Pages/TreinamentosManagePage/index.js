import * as Styles from './TreinamentosManageStyle';
import Header from '../../Components/Header';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const TreinamentosPage = () => {
  const navigate = useNavigate();
  const [funcionarioSelecionado, setFuncionarioSelecionado] = useState('');

  // Lista de funcionários para o dropdown
  const funcionarios = [
    { id: 1, nome: "João Silva", cargo: "Desenvolvedor Junior" },
    { id: 2, nome: "Maria Santos", cargo: "Analista de Marketing" },
    { id: 3, nome: "Pedro Costa", cargo: "Assistente Comercial" },
    { id: 4, nome: "Ana Oliveira", cargo: "Designer UX/UI" }
  ];

  // Dados mockados dos treinamentos
  const treinamentos = [
    {
      id: 1,
      nome: "Introdução à Vivo",
      progresso: 25,
      cursosFeitos: "1/4 cursos feitos"
    },
    {
      id: 2,
      nome: "Tecnologias de Rede",
      progresso: 75,
      cursosFeitos: "3/4 cursos feitos"
    },
    {
      id: 3,
      nome: "Atendimento ao Cliente",
      progresso: 25,
      cursosFeitos: "1/4 cursos feitos"
    },
    {
      id: 4,
      nome: "Vendas e Produtos",
      progresso: 75,
      cursosFeitos: "3/4 cursos feitos"
    }
  ];

  const handleAdicionarCurso = () => {
    console.log('Abrir modal para adicionar novo curso');
    // Lógica para abrir modal ou navegar para página de adição de curso
  };

  return (
    <Styles.TreinamentosContainer>
      <Header />
      
      <Styles.HeaderSection>
        <Styles.MainTitle>On.Vivo Roadmap</Styles.MainTitle>
        <Styles.PageTitle>Treinamentos do colaborador</Styles.PageTitle>
      </Styles.HeaderSection>

      <Styles.ControlsSection>
        <Styles.SelectContainer>
          <Styles.SelectLabel>Selecionar Funcionário:</Styles.SelectLabel>
          <Styles.Select 
            value={funcionarioSelecionado} 
            onChange={(e) => setFuncionarioSelecionado(e.target.value)}
          >
            <option value="">Selecione um funcionário</option>
            {funcionarios.map((funcionario) => (
              <option key={funcionario.id} value={funcionario.id}>
                {funcionario.nome} - {funcionario.cargo}
              </option>
            ))}
          </Styles.Select>
        </Styles.SelectContainer>

        <Styles.AddButton onClick={handleAdicionarCurso}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
          </svg>
          Adicionar Curso
        </Styles.AddButton>
      </Styles.ControlsSection>

      <Styles.Content>
        {funcionarioSelecionado ? (
          <Styles.TreinamentosGrid>
            {treinamentos.map((treinamento) => (
              <Styles.TreinamentoCard key={treinamento.id}>
                <Styles.TreinamentoHeader>
                  <Styles.TreinamentoNome>
                    {treinamento.nome}
                  </Styles.TreinamentoNome>
                  <Styles.ProgressoPercent>
                    {treinamento.progresso}%
                  </Styles.ProgressoPercent>
                </Styles.TreinamentoHeader>
                
                <Styles.ProgressoBar>
                  <Styles.ProgressoFill progresso={treinamento.progresso} />
                </Styles.ProgressoBar>
                
                <Styles.CursosInfo>
                  {treinamento.cursosFeitos}
                </Styles.CursosInfo>
                
                <Styles.DetalhesButton>
                  Ver Detalhes
                </Styles.DetalhesButton>
              </Styles.TreinamentoCard>
            ))}
          </Styles.TreinamentosGrid>
        ) : (
          <Styles.EmptyState>
            <Styles.EmptyStateIcon>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="#CD69EB">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </Styles.EmptyStateIcon>
            <Styles.EmptyStateText>
              Selecione um funcionário para visualizar os treinamentos
            </Styles.EmptyStateText>
          </Styles.EmptyState>
        )}
      </Styles.Content>

      <Styles.BackButton onClick={() => navigate(-1)}>
        Voltar
      </Styles.BackButton>
    </Styles.TreinamentosContainer>
  );
};

export default TreinamentosPage;