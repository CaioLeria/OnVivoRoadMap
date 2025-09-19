import * as Styles from './BuddyGestorHomeStyles';
import Header from '../../Components/Header';
import Roadmap from '../../Components/Roadmap';

const BuddyGestorHomePage = () => {
  return (
    <Styles.HomePageContainer>
      <Header />
      <Roadmap />
      
      <Styles.MainContent>
        {/* Cabeçalho com Título e Nome */}
        <Styles.HeaderSection>
          <Styles.MainTitle>On.Vivo Roadmap</Styles.MainTitle>
          <Styles.UserName>[Nome do novo colaborador]</Styles.UserName>
        </Styles.HeaderSection>

        {/* Seção de Informações e Ações */}
        <Styles.InfoSection>
          <Styles.LeftColumn>
            <Styles.InfoGroup>
              <Styles.InfoLabel>Perfil:</Styles.InfoLabel>
              <Styles.InfoValue>Desenvolvedor Junior</Styles.InfoValue>
            </Styles.InfoGroup>
            
            <Styles.ActionButton>Gerar relatório</Styles.ActionButton>
          </Styles.LeftColumn>

          <Styles.RightColumn>
            <Styles.StatBox>
              <Styles.StatLabel>Progresso do buddy:</Styles.StatLabel>
              <Styles.StatValue>75%</Styles.StatValue>
            </Styles.StatBox>

            <Styles.StatBox>
              <Styles.StatLabel>Treinamentos:</Styles.StatLabel>
              <Styles.StatValue>5/8 concluídos</Styles.StatValue>
            </Styles.StatBox>

            <Styles.StatBox>
              <Styles.StatLabel>Curso:</Styles.StatLabel>
              <Styles.StatValue>8 horas</Styles.StatValue>
            </Styles.StatBox>

            <Styles.StatBox>
              <Styles.StatLabel>HP:</Styles.StatLabel>
              <Styles.StatValue>8</Styles.StatValue>
            </Styles.StatBox>
          </Styles.RightColumn>
        </Styles.InfoSection>

        {/* Seção de Perguntas do Buddy */}
        <Styles.QuestionsSection>
          <Styles.SectionTitle>Perguntas do buddy</Styles.SectionTitle>
          
          <Styles.QuestionsGrid>
            <Styles.QuestionCard>
              <Styles.QuestionText>Como configurar o acesso ao sistema?</Styles.QuestionText>
              <Styles.QuestionStatus>Pendente</Styles.QuestionStatus>
            </Styles.QuestionCard>

            <Styles.QuestionCard>
              <Styles.QuestionText>Quais documentos preciso enviar?</Styles.QuestionText>
              <Styles.QuestionStatus>Respondida</Styles.QuestionStatus>
            </Styles.QuestionCard>

            <Styles.QuestionCard>
              <Styles.QuestionText>Como marcar presença no treinamento?</Styles.QuestionText>
              <Styles.QuestionStatus>Em andamento</Styles.QuestionStatus>
            </Styles.QuestionCard>

            <Styles.QuestionCard>
              <Styles.QuestionText>Problema com login no portal</Styles.QuestionText>
              <Styles.QuestionStatus>Nova</Styles.QuestionStatus>
            </Styles.QuestionCard>
          </Styles.QuestionsGrid>
        </Styles.QuestionsSection>
      </Styles.MainContent>
    </Styles.HomePageContainer>
  );
};

export default BuddyGestorHomePage;