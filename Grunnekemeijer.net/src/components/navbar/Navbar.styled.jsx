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

  @media screen and (max-width: 600px) {
    height: 3rem;
  }
`;

export const LeftContainer = styled.div`
  display: flex;

  @media screen and (max-width: 1024px) {
    scale: 0.7;
  }
  @media screen and (max-width: 600px) {
  
    gap: 0.2rem;
  }
`;

export const RightContainer = styled.div`
display: flex;
padding-right: 0.5rem;
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

  @media screen and (max-width: 600px) {
    margin-left: -0.2rem;
  }
`;