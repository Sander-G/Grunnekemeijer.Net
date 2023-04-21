import styled from "styled-components";
import { shakeAnimation } from "../nameDiv/NameDiv.styled";

export const Container = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  z-index: 0;
  flex-direction: row;
  height: 4rem;
  place-self: flex-end;
  align-items: center;
  justify-content: flex-end;
  margin: 0.25rem 0.25rem;


 

  & svg {
    scale: 1.1;
    stroke: #343434;
    fill: #343434;
    margin-inline: 1rem;

    animation: ${shakeAnimation} 7s linear infinite;
  filter: drop-shadow(-1px 0px hsl(330, 70%, 70%)) drop-shadow(0px 1px hsl(330, 70%, 70%)) drop-shadow(1px 0px hsl(330, 70%, 70%)) drop-shadow(0px -1px hsl(330, 70%, 70%));
 @media screen and (max-width: 1024px) {
      scale: 1;
    }
    &:hover {
      animation: ${shakeAnimation} 0.3s ease-in infinite;
      stroke: #525252;
      fill: #525252;
    }

    @media screen and (max-width: 1024px) {
      margin-inline: 0.5rem;
    }
  }
`;


export const EmailLinkStyled = styled.div`
  
  cursor: pointer;

`;