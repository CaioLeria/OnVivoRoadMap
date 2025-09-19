import { styled } from 'styled-components';

export const TreinamentosContainer = styled.div`
  margin: 0px;
  padding: 0px;
  min-height: 100vh;
  background-color: #F5E2FF;
  position: relative;
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
  margin: 0;
  font-weight: normal;
`;

export const ControlsSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 40px;
  background: white;
  border-bottom: 2px solid #EECCFF;
`;

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const SelectLabel = styled.label`
  color: #78009D;
  font-size: 16px;
  font-weight: bold;
  white-space: nowrap;
`;

export const Select = styled.select`
  border: 2px solid #EECCFF;
  background-color: #F8F0FF;
  height: 45px;
  width: 350px;
  padding: 0 15px;
  border-radius: 8px;
  font-size: 14px;
  color: #333;
  
  &:focus {
    outline: none;
    border-color: #CD69EB;
  }
`;

export const AddButton = styled.button`
  background-color: #78009D;
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #5a007a;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const Content = styled.div`
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 400px;
`;

export const TreinamentosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin-bottom: 40px;
`;

export const TreinamentoCard = styled.div`
  background: white;
  padding: 25px;
  border-radius: 15px;
  border: 2px solid #EECCFF;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  }
`;

export const TreinamentoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
`;

export const TreinamentoNome = styled.h3`
  color: #78009D;
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  flex: 1;
`;

export const ProgressoPercent = styled.span`
  color: #CD69EB;
  font-size: 20px;
  font-weight: bold;
  background: #F8F0FF;
  padding: 4px 12px;
  border-radius: 20px;
  margin-left: 15px;
`;

export const ProgressoBar = styled.div`
  width: 100%;
  height: 12px;
  background: #F0E0FF;
  border-radius: 10px;
  margin-bottom: 15px;
  overflow: hidden;
`;

export const ProgressoFill = styled.div`
  width: ${props => props.progresso}%;
  height: 100%;
  background: linear-gradient(90deg, #CD69EB, #78009D);
  border-radius: 10px;
  transition: width 0.5s ease;
`;

export const CursosInfo = styled.p`
  color: #666;
  font-size: 14px;
  margin: 0 0 20px 0;
  text-align: center;
`;

export const DetalhesButton = styled.button`
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

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  text-align: center;
`;

export const EmptyStateIcon = styled.div`
  margin-bottom: 20px;
`;

export const EmptyStateText = styled.p`
  color: #666;
  font-size: 18px;
  margin: 0;
`;

export const BackButton = styled.button`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background: #CD69EB;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 25px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #78009D;
    transform: translateX(-50%) scale(1.05);
  }
`;