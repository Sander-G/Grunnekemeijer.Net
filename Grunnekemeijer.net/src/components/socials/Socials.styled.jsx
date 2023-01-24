import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    z-index:2;
    flex-direction: row;
    height: 4rem;
    place-self: flex-end;
    align-items: center;
    justify-content: flex-end;
    margin: 0.25rem 1.25rem;
   
   
   
 

  & a {
      filter: drop-shadow(1px 1px 0.5px hotpink);
      margin-inline: 1rem;
      @media screen and (max-width:1024px) {
        margin-inline: 0.5rem;
    }
  }

  & svg { 
    scale: 1.2;
    @media screen and (max-width:1024px) {
    scale: 1;
    }
  }
    
  


`