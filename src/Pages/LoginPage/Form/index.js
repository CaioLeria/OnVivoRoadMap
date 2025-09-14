import { useState } from 'react';
import CampoTexto from '../../../Components/CampoTexto';
import * as Styles from './formStyle.js';
import * as GlobalStyles from '../../../Components/GlobalStyle';
function LoginForm() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    
    <Styles.formContainer>
      <Styles.formBox>
      <CampoTexto
        obrigatorio={true}
        label="Login"
        valor={email}
        aoAlterado={valor => setEmail(valor)}
        placeholder="Digite seu email"
      />
      <CampoTexto
        obrigatorio={true}
        label="Senha"
        valor={senha}
        aoAlterado={valor => setSenha(valor)}
        placeholder="Digite sua senha"
      />
      </Styles.formBox>
      <Styles.textAreas>
                     
                  
       <Styles.link href="https://www.google.com.br" style={{ textDecoration: 'none' }}>
                          <GlobalStyles.H2>Esqueceu a senha?</GlobalStyles.H2>
                          </Styles.link> 
                          </Styles.textAreas>
    </Styles.formContainer>
  )
}

export default LoginForm;