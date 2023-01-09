import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 4rem;
    max-width: 100vw;
    align-items: center;
    justify-content: flex-end;
    border: 0.5px solid hotpink;
    margin: 0rem 1rem;
    padding: 0.2rem;
    & img {
    margin: 0.5rem;
    }
   
 

  & a {
      filter: drop-shadow(1px 1px 0.5px hotpink);
    }

    
  


`