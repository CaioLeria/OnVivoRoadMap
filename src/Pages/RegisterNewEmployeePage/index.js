import { useState } from 'react';
import Header from "../../Components/Header";
import * as Styles from './RegisterNewEmployeeStyle';
import CampoTexto from "../../Components/CampoTexto";
import SuspendedList from "../../Components/SuspendedList";
import * as GlobalStyles from "../../Components/GlobalStyle";

const buddys = [
  "Caio Oliveira",
  "Ana Silva"
];

const gestores = [
  "Marcos Paulo",
  "Juliana Souza"
];

const areas = [
  "Tecnologia",
  "Marketing",
  "Vendas",
  "Recursos Humanos",
  "Financeiro"
];

function gerarSenha() {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  let senha = '';
  for (let i = 0; i < 8; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    senha += caracteres.charAt(indiceAleatorio);
  }
  return senha;
}

const RegisterNewEmployeePage = () => {
  const [login, setLogin] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [area, setArea] = useState('');
  const [dataInicio, setDataInicio] = useState('');
  const [buddy, setBuddy] = useState('');
  const [gestor, setGestor] = useState('');
  const [senha, setSenha] = useState(gerarSenha());
  const [foto, setFoto] = useState(null);

  const handleGerarNovaSenha = () => {
    setSenha(gerarSenha());
  };

  const handleFileChange = (event) => {
    setFoto(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para enviar os dados do formulário
    console.log({ login, dataNascimento, area, dataInicio, buddy, gestor, senha, foto });
  };

  return (
    <Styles.RegisterNewEmployeeContainer>
      <Header />
      
      <Styles.Header>
        <Styles.Label>Cadastro dos novos colaboradores</Styles.Label>
      </Styles.Header>

      <Styles.FormContainer onSubmit={handleSubmit}>
        <Styles.FormColumn>
          {/* Coluna Esquerda */}
          <Styles.InputGroup>
            <GlobalStyles.H1>Login do novo colaborador</GlobalStyles.H1>
            <CampoTexto
              placeholder="Digite o email do funcionário"
              obrigatorio={true}
              valor={login}
              aoAlterado={setLogin}
            />
          </Styles.InputGroup>

          <Styles.InputGroup>
            <GlobalStyles.H1>Data de nascimento do novo colaborador</GlobalStyles.H1>
            <CampoTexto
              type="date"
              obrigatorio={true}
              valor={dataNascimento}
              aoAlterado={setDataNascimento}
            />
          </Styles.InputGroup>

          <Styles.InputGroup>
            <GlobalStyles.H1>Área de novo colaborador</GlobalStyles.H1>
            <SuspendedList
              obrigatorio={true}
              valor={area}
              itens={areas}
              aoAlterado={setArea}
            />
          </Styles.InputGroup>

          <Styles.InputGroup>
            <GlobalStyles.H1>Buddy designado</GlobalStyles.H1>
            <SuspendedList
              obrigatorio={true}
              valor={buddy}
              itens={buddys}
              aoAlterado={setBuddy}
            />
          </Styles.InputGroup>
        </Styles.FormColumn>

        <Styles.FormColumn>
          {/* Coluna Direita */}
          <Styles.InputGroup>
            <GlobalStyles.H1>Início de novo colaborador</GlobalStyles.H1>
            <CampoTexto
              type="date"
              obrigatorio={true}
              valor={dataInicio}
              aoAlterado={setDataInicio}
            />
          </Styles.InputGroup>

          <Styles.InputGroup>
            <GlobalStyles.H1>Gestor da área</GlobalStyles.H1>
            <SuspendedList
              obrigatorio={true}
              valor={gestor}
              itens={gestores}
              aoAlterado={setGestor}
            />
          </Styles.InputGroup>

          <Styles.InputGroup>
            <GlobalStyles.H1>Senha de novo colaborador</GlobalStyles.H1>
            <Styles.SenhaContainer>
              <CampoTexto
                obrigatorio={true}
                valor={senha}
                aoAlterado={setSenha}
                placeholder="Senha gerada automaticamente"
              />
              <Styles.BotaoGerarSenha onClick={handleGerarNovaSenha}>
                Gerar Nova
              </Styles.BotaoGerarSenha>
            </Styles.SenhaContainer>
          </Styles.InputGroup>

          <Styles.InputGroup>
            <GlobalStyles.H1>Foto de novo colaborador</GlobalStyles.H1>
            <Styles.FileInputContainer>
              <Styles.FileInput
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
              <Styles.FileLabel>
                {foto ? foto.name : 'Clique para selecionar a foto...'}
              </Styles.FileLabel>
            </Styles.FileInputContainer>
          </Styles.InputGroup>
        </Styles.FormColumn>
      </Styles.FormContainer>

      <Styles.AcoesContainer>
        <Styles.BotaoEnviar type="submit">
          Cadastrar Colaborador
        </Styles.BotaoEnviar>
        
        <Styles.BotaoCancelar type="button">
          Cancelar
        </Styles.BotaoCancelar>
      </Styles.AcoesContainer>
    </Styles.RegisterNewEmployeeContainer>
  );
};

export default RegisterNewEmployeePage;