import { createGlobalStyle } from 'styled-components';
import clacon2 from './assets/clacon2.woff2'
const GlobalStyle = createGlobalStyle`

  :root {


  ${'' /* color-scheme: dark light; */}
  ${'' /* color: rgba(255, 255, 255, 0.87); */}
  ${'' /* background-color: #1A1A1A; */}

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

@font-face {
    font-family: clacon2;
    src: url(${clacon2}) format('woff2');
}

.terminal  {
    
    font-size: 1rem;
    color: green;
    font-family: clacon2;
}

@media screen and (max-width: 768px) {
    .largeTxt {font-size: 1rem;
        color: green;
     }

}

@media screen and (max-width: 450px) {
    .largeTxt {font-size: 0.8rem;
    font-family: 'Terminal' }

}


@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #d0d0d0;
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
  color: #1A1A1A;
  background-color: #e6e5e5;
  transition: all 0.3s ease;
}
.dark,
.dark .App {
  color: #e6e5e5;
  background-color: #1A1A1A;
  transition: all 0.3s ease;
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
  fill: #964141;
}

.nameDiv > p {
  font-size: calc(30rem + 0.25 * (100vw - 80em) / 40);
  font-size: -webkit-calc(3000% + 0.25 * (100vw - 8000%) / 40);

  @media (max-width: 1024px) {
    font-size: calc(25rem + 0.25 * (100vw - 80em) / 40);
  font-size: -webkit-calc(2500% + 0.25 * (100vw - 8000%) / 40);

  }

}
 /* scale namediv here with media queries: .. 

 
 
 
 */


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


   /* *,
*::before,
*::after {
  margin: 0;
  padding: 0;
  cursor: none;
} */

.off {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  cursor: none;
  user-select: none;
  z-index: 1979;
}


.active {
color: red;

}

`;














export default GlobalStyle;