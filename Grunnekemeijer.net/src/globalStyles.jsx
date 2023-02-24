import { createGlobalStyle, keyframes } from 'styled-components';
import clacon2 from './assets/clacon2.woff2';

export const flicker = keyframes`
  0% {
    opacity: 1
  }
  5% {
    opacity: 0.9
  }
  10% {
    opacity: 1
  }
  20% {
    opacity: 0.95
  }
  30% {
    opacity: 1
  }
  40% {
    opacity: 0.9
  }
  50% {
    opacity: 1
  }
  60% {
    opacity: 0.95
  }
  70% {
    opacity: 1
  }
  80% {
    opacity: 0.9
  }
  90% {
    opacity: 1
  }
  100% {
    opacity: 1
  }
`;
const GlobalStyle = createGlobalStyle`
  :root {
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%; 
}

a {
  font-weight: 400;
  color: #343434;
  text-decoration: initial;
}
a:hover {
  color: #525252;
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
    color: #343434;
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
    color: #343434;
  }

  & a:hover {
    color: #525252;
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
    height: 200px;
  width: 200px;
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
  animation: ${flicker} 0.1s infinite alternate;
  transition: all 50ms;
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
