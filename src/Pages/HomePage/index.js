
import * as Styles from './HomePageStyles';
import Header from '../../Components/Header';
import MenuBox from '../../Components/MenuBox';
import StatsBox from './StatsBox';
import Roadmap from './Roadmap';
const HomePage = () => {
  return (
    <Styles.HomePageContainer>
        <Header/>
        <Roadmap/>
        <Styles.Body>
          <Styles.MenuSection>
          
          <Styles.GradeRow>
            <Styles.GradeColumn>
              <MenuBox title={"Cursos"}/>
              <MenuBox title={"Benefícios"}/>
            </Styles.GradeColumn>
            <Styles.GradeColumn> 
                 <MenuBox title={"Envie documentos"}/>
                 <MenuBox title={"Sua equipe"}/>
            </Styles.GradeColumn>
            <Styles.GradeColumn>
              <MenuBox title={"Chat com buddy IA"}/>
              <MenuBox title={"Chat com buddy"}/>
           </Styles.GradeColumn> 
           </Styles.GradeRow>
           </Styles.MenuSection>
          <StatsBox/>
        </Styles.Body>
    </Styles.HomePageContainer>
  )}

  export default HomePage;