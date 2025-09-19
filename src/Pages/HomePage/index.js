import * as Styles from './HomePageStyles';
import Header from '../../Components/Header';
import MenuBox from '../../Components/MenuBox';
import StatsBox from '../../Components/StatsBox';
import Roadmap from '../../Components/Roadmap';

const HomePage = () => {
  const handleOpenBuddyChat = () => {
    console.log('Abrir chat com Buddy');
  };

  const handleOpenBuddyIAChat = () => {
    console.log('Abrir chat com Buddy IA');
  };

  return (
    <Styles.HomePageContainer>
      <Header />
      <Roadmap />
      
      <Styles.ChatIconsContainer>
        <Styles.ChatIcon onClick={handleOpenBuddyIAChat}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#CD69EB">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
          <Styles.IconLabel>Buddy IA</Styles.IconLabel>
        </Styles.ChatIcon>
        
        <Styles.ChatIcon onClick={handleOpenBuddyChat}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#CD69EB">
            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
          </svg>
          <Styles.IconLabel>Buddy</Styles.IconLabel>
        </Styles.ChatIcon>
      </Styles.ChatIconsContainer>

      <Styles.Body>
        <Styles.MenuSection>
          <Styles.GradeRow>
            <Styles.GradeColumn>
              <Styles.MenuBoxWrapper>
                <MenuBox title={"Cursos"}/>
              </Styles.MenuBoxWrapper>
              <Styles.MenuBoxWrapper>
                <MenuBox title={"Benefícios"}/>
              </Styles.MenuBoxWrapper>
            </Styles.GradeColumn>
            <Styles.GradeColumn> 
              <Styles.MenuBoxWrapper>
                <MenuBox title={"Envie documentos"}/>
              </Styles.MenuBoxWrapper>
              <Styles.MenuBoxWrapper>
                <MenuBox title={"Sua equipe"}/>
              </Styles.MenuBoxWrapper>
            </Styles.GradeColumn>
            <Styles.GradeColumn>
              <Styles.MenuBoxWrapper>
                <MenuBox title={"Chat com buddy IA"}/>
              </Styles.MenuBoxWrapper>
              <Styles.MenuBoxWrapper>
                <MenuBox title={"Chat com buddy"}/>
              </Styles.MenuBoxWrapper>
            </Styles.GradeColumn> 
          </Styles.GradeRow>
        </Styles.MenuSection>
        
        <Styles.StatsSection>
          <StatsBox/>
        </Styles.StatsSection>
      </Styles.Body>
    </Styles.HomePageContainer>
  );
};

export default HomePage;