import { createGlobalStyle } from 'styled-components';
import clacon2 from './assets/clacon2.woff2'
const GlobalStyle = createGlobalStyle`

  :root {


  color-scheme: dark light; 
color: rgba(255, 255, 255, 0.87); 
   background-color: #1A1A1A;

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
  color: #343434;
  text-decoration: inherit;
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
    color: #525252;
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

  & a {
    color: #525252;
  }

  & a:hover {
    color: #343434;
  }
}
/* Button Styles */

${'' /* .dark-mode-toggle {
  width: 50px;
  height: 23px;
  border-radius: 45px;
  top: 0;
  left: 0;
}
.dark-mode-toggle svg {
  fill: #de2626;
} */}

.nameDiv > p {
  
  font-size: calc(6500% + 0.25 * (100vw - 8000%) / 40);

  
  @media (min-width: 768px) and (max-width: 1024px) and (min-height: 1281px) and (orientation: portrait) {
    
    font-size: calc(4100% + 0.25 * (100vw - 8000%) / 40);
  
    }
  @media (min-width: 768px) and (max-width: 1024px) and (max-height: 1280px) and (orientation: portrait) {
    
  font-size: calc(3500% + 0.25 * (100vw - 8000%) / 40);

  }
  @media (min-width: 768px) and (max-width: 1024px) and (max-height: 1024px) and (orientation: portrait) {
    
    font-size: calc(2950% + 0.25 * (100vw - 8000%) / 40);
  
    }
  @media (min-width: 500px) and (max-width: 767px) and (max-height: 1100px) and (orientation: portrait) {
   
  font-size: calc(3000% + 0.25 * (100vw - 8000%) / 40);

  }
  @media (min-width: 500px) and (max-width: 768px) and (min-height: 668px) and (max-height: 900px) and (orientation: portrait) {
   
  font-size: calc(2030% + 0.25 * (100vw - 8000%) / 40);

  }
  @media (min-width: 400px) and (max-width: 500px) and (max-height: 1024px) and (orientation: portrait) {
   
  font-size: calc(2050% + 0.25 * (100vw - 8000%) / 40);

  }
  @media (min-width) and (max-width: 500px) and (max-height: 667px) and (orientation: portrait) {
    
  font-size: calc(1760% + 0.25 * (100vw - 8000%) / 40);

  }
   @media (max-width: 400px) and (max-height: 667px) and (orientation: portrait) {
    
  font-size: calc(1760% + 0.25 * (100vw - 8000%) / 40);

  }
  @media (max-width: 400px) and (min-height: 668px) and (orientation: portrait) {
    
  font-size: calc(1730% + 0.25 * (100vw - 8000%) / 40);

  }
  @media (max-width: 400px) and (min-height: 768px) and (max-height:900px) and (orientation: portrait) {
    
    font-size: calc(1920% + 0.25 * (100vw - 8000%) / 40);
  
    }
  @media (max-width: 300px) and (max-height: 667px) and (orientation: portrait) {
    
    font-size: calc(1430% + 0.25 * (100vw - 8000%) / 40);
  
    }
  //landscape

 

  
  @media (min-width: 500px) and (max-width: 768px) and (max-height: 300px) and (orientation: landscape) {
    
    font-size: calc(1000% + 0.25 * (100vw - 8000%) / 40);
  }

@media (min-width: 500px) and (max-width: 768px) and (min-height:300px) and (max-height: 550px) and (orientation: landscape) {
    
    font-size: calc(1575% + 0.25 * (100vw - 8000%) / 40);
  }
  
  @media (min-width: 769px) and (max-width: 1024px) and (min-height:901px) and (orientation: landscape) {
    
  font-size: calc(2680% + 0.25 * (100vw - 8000%) / 40);

  }
  @media (min-width: 769px) and (max-width: 1024px) and (max-height: 768px) and (orientation: landscape) {
    
    font-size: calc(2700% + 0.25 * (100vw - 8000%) / 40);
  
    }
  @media (min-width: 769px) and (max-width: 1024px) and (max-height: 450px) and (orientation: landscape) {
    
    font-size: calc(1900% + 0.25 * (100vw - 8000%) / 40);
  
    }
    @media (min-width: 769px) and (max-width: 1024px) and (max-height: 400px) and (orientation: landscape) {
    
    font-size: calc(1700% + 0.25 * (100vw - 8000%) / 40);
  
    }
  @media (min-width: 1025px) and (max-width: 1280px) and (max-height: 900px) and (orientation: landscape) {
    
  font-size: calc(3350% + 0.25 * (100vw - 8000%) / 40);

  }
  @media (min-width: 1025px) and (max-width: 1280px) and (max-height: 900px) and (orientation: landscape) {
    
    font-size: calc(3100% + 0.25 * (100vw - 8000%) / 40);
  
    }

    @media (min-width: 1281px) and (max-height: 950px) and (orientation: landscape) {
    
    font-size: calc(3612% + 0.25 * (100vw - 8000%) / 40);
  
    }

    @media (min-width: 1751px) and (max-width: 1880px) and (min-height: 951px) and (orientation: landscape) {
    
    font-size: calc(6000% + 0.25 * (100vw - 8000%) / 40);
  
    }
    @media (min-width: 1300px) and (max-width: 1750px) and (min-height: 951px) and (orientation: landscape) {
    
    font-size: calc(5000% + 0.25 * (100vw - 8000%) / 40);
  
    }
    @media (min-width: 1025px) and (max-width: 1300px) and (min-height: 951px)  {
    
    font-size: calc(4500% + 0.25 * (100vw - 8000%) / 40);
  
    }
    @media (min-width: 769px) and (max-width: 1024px) and (min-height: 951px) {
    
    font-size: calc(3500% + 0.25 * (100vw - 8000%) / 40);
  
    }
    @media (min-width: 300px) and (max-width: 768px) and (min-height: 951px) {
    
    font-size: calc(2500% + 0.25 * (100vw - 8000%) / 40);
  
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