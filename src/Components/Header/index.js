import * as Styles from './HeaderStyles';
const Header = () => {
  return (
    <Styles.HeaderContainer>
      <Styles.Link href="/"><Styles.ProfileIcon><Styles.H1>On.Vivo </Styles.H1><Styles.H1>RoadMap</Styles.H1> </Styles.ProfileIcon></Styles.Link>
       
      <Styles.Link href="/perfil">Perfil</Styles.Link>
    </Styles.HeaderContainer>
  );
}
  export default Header;