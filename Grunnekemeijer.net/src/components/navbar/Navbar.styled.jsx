import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  z-index: 1;
  max-width: 100%;
  background-color: transparent;
  border-bottom: 0.5px solid hotpink;
  user-select: none;
  margin: 0rem 0.5rem 0rem 0.5rem;
  padding: 0rem 0.5rem 0rem 0.5rem;

  @media screen and (max-width: 600px) {
    height: 3.5rem; 
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;

  & svg {
    margin-right: 10px;

    & last-child: {
      margin-right: 0px;
    }
    @media screen and (max-width: 1024px) {
      scale: 0.9;
      margin-right: 10px;

      & last-child: {
        margin-right: 0px;
      }
    }
    @media screen and (max-width: 400px) {
      scale: 0.8;
      margin-right: 3px;

      & last-child: {
        margin-right: 0px;
      }
    }
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  
 
`;
export const Button = styled.button`
  border: 0;
  position: relative;
  height: 2.5rem;
  width: 2.5rem;
  margin-bottom: 3px;

  

 
  
  background: transparent;

 


`;