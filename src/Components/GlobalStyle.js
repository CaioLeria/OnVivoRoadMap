import {styled} from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const Column = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;`

  export const H1 = styled.h1`
  color: #78009D;
  font-size: 16px;
  margin:0px`;

  export const H2 = styled.h2`
  color: rgb(120,0,157, 0.62);
  font-size: 20px;
  margin:0px;
  `;


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
`;

export default GlobalStyle;