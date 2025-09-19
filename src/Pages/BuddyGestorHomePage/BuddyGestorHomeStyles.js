import { styled } from 'styled-components';

export const HomePageContainer = styled.div`
  margin: 0px;
  padding: 0px;
  min-height: 100vh;
  background-color: #F5E2FF;
`;

export const MainContent = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 30px;
  padding: 20px;
`;

export const MainTitle = styled.h1`
  color: #78009D;
  font-size: 36px;
  margin: 0 0 10px 0;
  font-weight: bold;
`;

export const UserName = styled.h2`
  color: #333;
  font-size: 24px;
  margin: 0;
  font-weight: normal;
`;

export const InfoSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: 40px;
  padding: 20px;
  background: white;
  border-radius: 12px;
  border: 2px solid #EECCFF;
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
`;

export const RightColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  flex: 1;
`;

export const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const InfoLabel = styled.span`
  color: #78009D;
  font-size: 16px;
  font-weight: bold;
`;

export const InfoValue = styled.span`
  color: #333;
  font-size: 18px;
`;

export const ActionButton = styled.button`
  background-color: #78009D;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  align-self: flex-start;

  &:hover {
    background-color: #5a007a;
  }
`;

export const StatBox = styled.div`
  background: #F8F0FF;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #EECCFF;
  text-align: center;
`;

export const StatLabel = styled.div`
  color: #78009D;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const StatValue = styled.div`
  color: #333;
  font-size: 20px;
  font-weight: bold;
`;

export const QuestionsSection = styled.div`
  padding: 20px;
  background: white;
  border-radius: 12px;
  border: 2px solid #EECCFF;
`;

export const SectionTitle = styled.h2`
  color: #78009D;
  font-size: 24px;
  margin: 0 0 20px 0;
  text-align: center;
  font-weight: bold;
`;

export const QuestionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
`;

export const QuestionCard = styled.div`
  background: #F8F0FF;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #EECCFF;
  cursor: pointer;

  &:hover {
    background: #F0E0FF;
  }
`;

export const QuestionText = styled.div`
  color: #333;
  font-size: 14px;
  margin-bottom: 8px;
`;

export const QuestionStatus = styled.div`
  color: #78009D;
  font-size: 12px;
  font-weight: bold;
  text-align: right;
`;