import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #091921;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.App {
  height: 100vh;
  width: auto;
  text-align: center;
  font-size: 5em;
  color: #2e3440;
  background-color: #d8dee9;
  transition: all 0.2s ease;
}
.dark,
.dark .App {
  color: #d8dee9;
  background-color: #2e3440;
  transition: all 0.2s ease;
}


`;
 
export default GlobalStyle;