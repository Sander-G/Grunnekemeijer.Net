import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  :root {


  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  --ti-cursor-color: green;
  --ti-cursor-line-height: normal;
  --ti-cursor-font-size: 1.2rem;
 
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
    margin:  0;
    font-family:  -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing:  antialiased;
    -moz-osx-font-smoothing:  grayscale;
    font-size: 62.5%;
    overflow-x: hidden;
    min-height: 100vh;
    position: relative;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}



.largeTxt  {
    font-size: 2rem;
    color: green;
    font-family: monospace;
}

@media screen and (max-width: 768px) {
    .largeTxt {font-size: 1rem;
        color: green;
     }

}

@media screen and (max-width: 450px) {
    .largeTxt {font-size: 0.8rem }

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
  color: #091921;
  background-color: #e6e5e5;
  transition: all 0.6s ease;
}
.dark,
.dark .App {
  color: #e6e5e5;
  background-color: #091921;
  transition: all 0.8s ease;
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
  background-color: #091921;
  display: flex;
  position: relative;
  transform: translateX(3px);
  transition: all 0.4s ease;
}

.dark .dark-mode-slider {
  transform: translateX(25px);
}

`;

export default GlobalStyle;