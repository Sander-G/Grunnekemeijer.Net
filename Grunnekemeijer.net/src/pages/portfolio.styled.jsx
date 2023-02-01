import styled from 'styled-components'


export const Italics = styled.span`
  font-style: italic;
`
export const Header = styled.div`
    display: flex;
    width: auto;
    height: 2 rem;
    padding: 1rem;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    margin: 0rem 1rem 0rem 1rem;
`
export const Container = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(5, minmax(100px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  margin: 2rem 6rem 0rem 6rem;
  line-height: 1.1;


  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(10, minmax(50px, 1fr));
    grid-row-gap: 1rem;
    grid-column-gap: 1rem;
    margin: 0rem 3rem 0rem 3rem;
    line-height: 1.2;
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
  margin: 0rem 0rem 0rem 1.5rem;
 


  @media (max-width: 1024px) {
    grid-column: 1 / 1;
    grid-row: span 1;
    max-width: 65%;
    max-height: 200px;
  }
`;
export const Text = styled.p`
  grid-column: 2 / 3;
  grid-row: span 1;
  font-size: 17px;
  text-align: justify;
  margin: 0rem 0rem 0rem 1rem;
    &:first-letter {
  initial-letter: 4.5 4;
  font-weight: bold;
  line-height: 1;
  font-size: 22px;
  padding: 0.1rem;
} 


  @media (max-width: 1024px) {
    grid-column: 1 / 2;
    grid-row: span 1;
    font-size: 16px;
    margin: 0rem 0rem 0rem 0rem;
    
   
  }
`;


