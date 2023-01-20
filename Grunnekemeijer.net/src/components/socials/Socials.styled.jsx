import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 4rem;
    place-self: flex-end;
    align-items: center;
    justify-content: flex-end;
    margin: 0rem 1rem;
   
   
   
 

  & a {
      filter: drop-shadow(1px 1px 0.5px hotpink);
      margin-inline: 0.5rem;
      @media screen and (max-width:1024px) {
        margin-inline: 0rem;
    }
  }

  & svg { 
    scale: 1.2;
    @media screen and (max-width:1024px) {
    scale: 1;
    }
  }
    
  


`