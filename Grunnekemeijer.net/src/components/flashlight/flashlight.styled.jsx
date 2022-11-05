import styled from "styled-components";


export const Wrapper = styled.div`
display: flex ;
flex-direction: row;
justify-content: flex-start;
align-items: center;
/* padding: 0 0.5rem; */
`
export const FlashlightButton = styled.div`
/* margin: 0.5rem 1rem; */
cursor: pointer;
& img {
-webkit-filter: invert(.99); /* safari 6.0 - 9.0 */
          filter: invert(.99);
          height: 24px;
          transform: rotate(-40deg);

          
}
`