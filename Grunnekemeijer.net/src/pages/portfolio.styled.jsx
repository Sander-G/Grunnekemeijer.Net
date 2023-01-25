import styled from 'styled-components'

export const Header = styled.div`
    display: flex;
    width: 100vw;
    height: 3 rem;
    padding: 1.5rem;
    align-items: center;
    justify-content: center;
    font-size: 18px;
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(6, minmax(100px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  margin: 1rem 3rem;
  

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(12, minmax(50px, 1fr));
    grid-row-gap: 1rem;
    grid-column-gap: 0;
  
  }
`;

export const StyledImage = styled.img`
  grid-column: 1 / 2;
  grid-row: span 1;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  align-self: center;
  justify-self: center;
  border: 1px solid currentColor;
  border-radius: 5px;


  @media (max-width: 1024px) {
    grid-column: 1 / 2;
    grid-row: span 1;
    max-width: 60%;
  max-height: auto;
  }
`;
export const Text = styled.div`
  grid-column: 2 / 3;
  grid-row: span 1;
  font-size: 16px;
  text-align: justify;
  @media (max-width: 1024px) {
    grid-column: 1 / 2;
    grid-row: span 1;
    font-size: 16px;
  }
`;


