import styled from 'styled-components'

export const Container = styled.div`

  display: grid;
  grid-template-rows: 50% 50%;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "div1 div2";
  gap: 1rem;
`
export const Item1 = styled.div`
  grid-area: div1;
  font-size: 16px;
  border: 1px solid green;
  height: 30vh; 
  margin-left: 1rem;
`

export const Item2 = styled.div`
  grid-area: div2;
  font-size: 16px;
  border: 1px solid green;
  height: 30vh; 
  margin-right: 1rem;
`;