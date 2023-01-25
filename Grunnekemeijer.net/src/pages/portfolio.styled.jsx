import styled from 'styled-components'

export const Header = styled.div`
    display: flex;
    width: 100vw;
    height: 2 rem;
    padding: 1rem;
    align-items: center;
    justify-content: center;
    font-size: 18px;
`
export const Container = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(6, minmax(100px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  margin: 1rem 1rem;
  

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(12, minmax(50px, 1fr));
    grid-row-gap: 1rem;
    grid-column-gap: 1rem;
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
export const Text = styled.p`
  grid-column: 2 / 3;
  grid-row: span 1;
  font-size: 16px;
  text-align: justify;
  margin: 0rem 1rem;
  
  &:first-letter {
  /* font-family: "Merriweather", serif; */
  initial-letter: 4.5 4;
  font-weight: bold;
  line-height: 1;
  font-size: 22px;
  /* margin-right: 0.5rem; */
  /* color: hotpink; */
  /* background: #be4bdb; */
  padding: 0.1rem;
  /* border-radius: 5px; */
  /* box-shadow: 0.5rem 0.5rem 0 #3b5bdb; */
}
  @media (max-width: 1024px) {
    grid-column: 1 / 2;
    grid-row: span 1;
    font-size: 16px;
   
  }
`;


