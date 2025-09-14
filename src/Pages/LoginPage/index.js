import * as Styles from './LoginPageStyle.js';
import LoginForm from './Form/index.js';
import * as GlobalStyles from '../../Components/GlobalStyle';

function LoginPage() {

    return (
        <Styles.container>
            <Styles.logo src='/images/logovivo.png' alt='logo Vivo'/>
            
            <Styles.titleArea>
            <Styles.h3>Bem-vindo ao </Styles.h3>
            <Styles.h3>On.Vivo roadmap</Styles.h3>
            </Styles.titleArea>
            
            <LoginForm />
            
            <Styles.confirmButton>
                <Styles.buttonText>Conectar</Styles.buttonText>
            </Styles.confirmButton>

        </Styles.container>
    )
}
export default LoginPage;