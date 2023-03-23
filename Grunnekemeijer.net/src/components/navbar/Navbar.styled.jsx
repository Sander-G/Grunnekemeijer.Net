import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  z-index: 1;
  max-width: 100vw;
  background-color: transparent;
  border-bottom: 0.5px solid hotpink;
  user-select: none;
  
  margin-left: 0.5rem;
  margin-right:0.5rem;

  @media screen and (max-width: 600px) {
    height: 3.5rem;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  & svg {
    margin-inline: 1px;

  }
  

  @media screen and (max-width: 1024px) {
    scale: 0.8;
    
  }
  @media screen and (max-width: 600px) {
    
  }
`;

export const RightContainer = styled.div`
display: flex;
padding-right: 1rem;
/* flex-direction: row;
align-items: center;
justify-content: flex-end; */
gap: 0.3rem;
@media screen and (max-width:600px) {
  gap:0.2rem;
  

}


`
export const Button = styled.button`
  border: 0;
  height: 40px;
  width: 40px;
  margin-top: 0.4rem;
  background: transparent;
  margin-right: -0.5rem;
 

  @media screen and (max-width: 600px) {
    margin-left: -0.2rem;
  }
`;