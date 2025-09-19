import { styled } from 'styled-components';

export const RegisterNewEmployeeContainer = styled.div`
  margin: 0px;
  padding: 0px;
  min-height: 100vh;
  background-color: #F5E2FF;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  background-color: #78009D;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;

export const Label = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: #ffffff;
  margin: 0;
  text-align: center;
`;

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  gap: 60px;
  padding: 0 40px;
  margin-bottom: 40px;
`;

export const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 45%;
  max-width: 500px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SenhaContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const BotaoGerarSenha = styled.button`
  background-color: #9c27b0;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  white-space: nowrap;

  &:hover {
    background-color: #7b1fa2;
  }
`;

export const FileInputContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

export const FileInput = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const FileLabel = styled.span`
  display: block;
  padding: 8px 12px;
  border: 1px solid #78009D;
  background-color: #F4F3F3;
  border-radius: 4px;
  cursor: pointer;
  color: #666;
  text-align: center;

  &:hover {
    background-color: #e9e9e9;
  }
`;

export const AcoesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  margin-top: 30px;
`;

export const BotaoEnviar = styled.button`
  background-color: #78009D;
  color: white;
  padding: 15px 40px;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #5a007a;
  }
`;

export const BotaoCancelar = styled.button`
  background-color: #cccccc;
  color: #666;
  padding: 15px 40px;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #bbbbbb;
  }
`;