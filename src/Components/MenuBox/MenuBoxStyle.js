import { styled } from 'styled-components';

export const Container = styled.div`
  margin: 0;
  padding: 0;
  display: flex;

`;

export const Box = styled.button`
  height: 206.97px;
  width: 186.44px;
  border: solid 2px #EECCFF;
  background: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 15px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    border-color: #CD69EB;
    background: #F8F0FF;
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  }

  &:focus {
    outline: none;
    border-color: #78009D;
  }
`;

export const BoxTitle = styled.label`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
`;