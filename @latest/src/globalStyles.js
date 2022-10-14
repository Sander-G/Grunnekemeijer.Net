import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`

  :root {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  text-align: center;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}





@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
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
  font-size: 62.5%;
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
/* Button Styles */

.dark-mode-toggle {
  width: 50px;
  height: 23px;
  border-radius: 45px;
  top: 0;
  left: 0;
}
.dark-mode-toggle svg {
  fill: #000;
}
.dark-mode-slider {
  height: 15px;
  width: 15px;
  margin: 2px;
  border-radius: 50%;
  background-color: #2e3440;
  display: flex;
  position: relative;
  transform: translateX(3px);
  transition: all 0.2s ease;
}

.dark .dark-mode-slider {
  transform: translateX(25px);
}

`;
 
export default GlobalStyle;