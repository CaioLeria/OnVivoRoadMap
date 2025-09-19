import { styled } from 'styled-components';

export const HomePageContainer = styled.div`
  margin: 0px;
  padding: 0px;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;

export const ChatIconsContainer = styled.div`
  position: absolute;
  top: 100px;
  left: 20px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ChatIcon = styled.button`
  background: white;
  border: 2px solid #CD69EB;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background: #F8F0FF;
    transform: scale(1.1);
    
    & > span {
      opacity: 1;
      visibility: visible;
    }
  }

  svg {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.2);
  }
`;

export const IconLabel = styled.span`
  position: absolute;
  left: 50px;
  top: 50%;
  transform: translateY(-50%);
  background: #CD69EB;
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: bold;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 101;

  &::before {
    content: '';
    position: absolute;
    left: -5px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-right: 5px solid #CD69EB;
  }
`;

export const Body = styled.div`
  margin: 0px;
  padding: 0px;
  background-color: #F5E2FF;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuSection = styled.section`
  width: 65%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const StatsSection = styled.section`
  width: 35%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const GradeRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
  height: 100%;
`;

export const GradeColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 100%;
`;

export const MenuBoxWrapper = styled.div`
  transform: scale(0.9);
`;