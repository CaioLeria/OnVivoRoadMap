import * as GlobalStyle from "../../Components/GlobalStyle";
import Header from "../../Components/Header";
import * as Styles from './RegisterNewEmployeeStyle'
import CampoTexto from "../../Components/CampoTexto";
import SuspendedList from "../../Components/SuspendedList";
import { useState } from "react";
import { data } from "react-router-dom";

const buddys = [
  "Caio Oliveira",
  "Ana Silva"]

  const gestores = [
    "Marcos Paulo",
    "Juliana Souza"]

    
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
  const [login, setLongin] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [area, setArea] = useState('');
  const [dataInicio, setDataInicio] = useState('');
  const [buddy, setBuddy] = useState('');
  const [gestor, setGestor] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [senha, setSenha] = useState('');

   const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };


  return (
    <Styles.RegisterNewEmployeeContainer>
        <Header/>
        <Styles.Header>
          <Styles.Label>Cadastro de Novo Colaborador</Styles.Label>
        </Styles.Header>
        <Styles.Body>
          <GlobalStyle.Column>
            <CampoTexto label="Login do novo colaborador" placeholder="Digite o email do funcionário" obrigatorio={true} valor={""} />
            <CampoTexto  type="date" label="Data de nascimento do novo colaborador"
        placeholder="Data de nascimento" obrigatorio={true}
        value={dataNascimento}
        onChange={handleDateChange}/>
            <CampoTexto label="Login do Área do novo colaborador"   placeholder="Área  de atuação" obrigatorio={true} valor={login} aoAlterado={(valor)=>{setLongin(valor)}}/>
            <CampoTexto  type="date" label="Data de início do novo colaborador"   placeholder="Inicio do novo colaborador" obrigatorio={true} valor={dataInicio} aoAlterado={(valor)=>{setDataInicio(valor)}}/>
            <SuspendedList label="Buddy designado"  obrigatorio={true}   placeholder="Selecione o buddy" valor={buddy} itens={buddys} aoAlterado={(valor)=>{setBuddy(valor)}}/>
            <SuspendedList label="Gestor da área"  obrigatorio={true}  placeholder="Selecione o gestor" valor={gestor} itens={gestores}aoAlterado={(valor)=>{setArea(valor)}}/>
            
            <CampoTexto label="Senha do novo colaborador"  obrigatorio={true}  placeholder="Gere a senha" valor={gerarSenha()} aoAlterado={(valor)=>{setSenha(valor)}}/>

            <CampoTexto label="Foto do novo colaborador" type="file" accept="image/*" obrigatorio={true} valor={""}  placeholder="Faça o upload da foto do novo colaborador" aoAlterado={()=>{}}/>
          </GlobalStyle.Column>
        </Styles.Body>
    </Styles.RegisterNewEmployeeContainer>
  )
}       


export default RegisterNewEmployeePage;