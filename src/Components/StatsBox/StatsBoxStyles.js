import { styled } from 'styled-components';

export const Container = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  height: 444px;
  width: 320px;
  border: solid 2px #EECCFF;
  background: white;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

export const BoxTitle = styled.label`
  font-size: 24px;
  color: #78009D;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

export const ValuesArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  padding: 12px;
  background: #F8F0FF;
  border-radius: 8px;
  border: 1px solid #EECCFF;
  width: 90%;
`;

export const ValuesLabel = styled.h2`
  font-size: 16px;
  color: #78009D;
  font-weight: bold;
  margin: 0;
`;

export const Values = styled.h2`
  font-size: 18px;
  color: #333;
  font-weight: bold;
  margin: 0;
  background: white;
  padding: 4px 12px;
  border-radius: 16px;
  border: 1px solid #CD69EB;
`;