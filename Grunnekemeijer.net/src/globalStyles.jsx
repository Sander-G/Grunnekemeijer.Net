import { createGlobalStyle } from 'styled-components';
import clacon2 from './assets/clacon2.woff2'
const GlobalStyle = createGlobalStyle`

  :root {

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  ${"" /* typeIt cursor styling */}
  --ti-cursor-color: green;
  --ti-cursor-line-height: normal;
  --ti-cursor-font-size: 1.2rem;
 
}

a {
  font-weight: 400;
  color: #343434;
  text-decoration: initial;
}
a:hover {
  color: #343434;
 
    
    
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

@font-face {
    font-family: clacon2;
    src: url(${clacon2}) format('woff2');
}

.terminal  {
    
    font-size: 1.5rem;
    color: green;
    ${"" /* font-family: clacon2; */}
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
  color: #1A1A1A;
  background-color: #e6e5e5;
  transition: all 0.3s ease;
  & a {
    color: #525252;
  }
 
  & a:hover {
    color: #525252;
  }
}
.dark,
.dark .App {
  color: #e6e5e5;
  background-color: #1A1A1A;
  transition: all 0.3s ease;

  & a {
    color: #525252;
  }

  & a:hover {
    color: #343434;
  }
}


.nameDiv > p {
   font-size: max(80px, min(
    calc(105px + (500 - 20) * (90vw - 320px) / (2550 - 320)),
    calc(105px + (500 - 20) * (90vh - 500px) / (1400 - 500))
  ));
};



// flashlight cursor
.on {
  height: 175px;
  width: 175px;
  border-radius: 50%;
  position: fixed;
  background: radial-gradient(
    rgba(0, 0, 0, 0) 0%,
    rgba(223, 237, 24, 0.1) 99%);
  top: 0;
  left: 0;
  pointer-events: none;
  cursor: none;
  user-select: none;
  z-index: 1979;
}

.off {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  cursor: none;
  user-select: none;
  z-index: 1979;
}
`;














export default GlobalStyle;