import { styled } from 'styled-components';

export const SolicitacoesContainer = styled.div`
  margin: 0px;
  padding: 0px;
  min-height: 100vh;
  background-color: #F5E2FF;
`;

export const HeaderSection = styled.div`
  background-color: #78009D;
  padding: 40px 20px;
  text-align: center;
`;

export const MainTitle = styled.h1`
  color: #FFFFFF;
  font-size: 36px;
  margin: 0 0 10px 0;
  font-weight: bold;
`;

export const PageTitle = styled.h2`
  color: #FFFFFF;
  font-size: 28px;
  margin: 0 0 20px 0;
  font-weight: normal;
`;

export const Description = styled.p`
  color: #FFFFFF;
  font-size: 16px;
  margin: 0;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.5;
`;

export const ChatButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background: white;
  border-bottom: 2px solid #EECCFF;
`;

export const ChatButton = styled.button`
  background-color: #CD69EB;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #78009D;
    transform: translateY(-2px);
  }
`;

export const Content = styled.div`
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const SolicitacoesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 25px;
  margin-bottom: 40px;
`;

export const SolicitacaoCard = styled.div`
  background: white;
  padding: 25px;
  border-radius: 15px;
  border: 2px solid ${props => 
    props.status === 'aprovado' ? '#00AA00' : 
    props.status === 'atrasado' ? '#FF0000' : '#EECCFF'};
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
`;

export const PlataformaNome = styled.h3`
  color: #78009D;
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  flex: 1;
`;

export const StatusBadge = styled.span`
  background: ${props => props.cor};
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
`;

export const Descricao = styled.p`
  color: #666;
  font-size: 14px;
  margin: 0 0 20px 0;
  line-height: 1.4;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  padding: 5px 0;
  border-bottom: 1px solid #F0F0F0;
`;

export const InfoLabel = styled.span`
  color: #78009D;
  font-size: 12px;
  font-weight: bold;
`;

export const InfoValue = styled.span`
  color: #333;
  font-size: 12px;
`;

export const ActionsContainer = styled.div`
  margin-top: 20px;
`;

export const ActionButton = styled.button`
  width: 100%;
  background: #78009D;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #5a007a;
  }
`;

export const LembreteButton = styled.button`
  width: 100%;
  background: #FFA500;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #E59400;
  }
`;

export const AcessoLiberadoButton = styled.button`
  width: 100%;
  background: #00AA00;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: default;
`;

export const InfoSection = styled.div`
  background: white;
  padding: 30px;
  margin: 20px;
  border-radius: 15px;
  border: 2px solid #EECCFF;
  text-align: center;
`;

export const InfoTitle = styled.h3`
  color: #78009D;
  font-size: 20px;
  margin: 0 0 15px 0;
`;

export const InfoText = styled.p`
  color: #666;
  font-size: 14px;
  margin: 0;
  line-height: 1.6;
`;