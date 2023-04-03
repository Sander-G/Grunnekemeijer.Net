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
  margin-right: 0.5rem;

  @media screen and (max-width: 600px) {
    height: 3.5rem; 
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 0.5rem;
  gap: 1rem;
  

  @media screen and (max-width: 1024px) {
    scale: 0.8;
  }

`;

export const RightContainer = styled.div`
display: flex;
align-items: center;
flex-direction: row;
justify-content: center;
padding-right: 0.5rem;
gap: 0.3rem;
@media screen and (max-width:600px) {
  gap: 2px;

  

}


`
export const Button = styled.button`
  border: 0;
 
  height: 45px;
  width: 45px;
  margin-top: 10px;
 
  
  background: transparent;

 


`;