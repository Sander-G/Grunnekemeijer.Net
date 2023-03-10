import styled from "styled-components";

export const Italics = styled.span`
  font-style: italic;
`;

export const TextShadow = styled.span`
  color: hotpink;
  &:hover {
    color: skyblue;
  }
`;

export const Container = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: repeat(5, minmax( 1fr));
  grid-row-gap: 1.5rem;
  grid-column-gap: 1rem;
  padding: 1.5rem 1rem 0rem 0rem;
  line-height: 1.1;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(10, minmax( 1fr));
    grid-row-gap: 0.5rem;
    margin: 0rem 2rem 0rem 2rem;
    padding: 1.5rem 0rem 0rem 0rem;
    line-height: 1.2;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0rem 1rem 1rem 0rem;
  padding-left: 2rem;
`;
export const StyledImage = styled.img`
  grid-column: 1 / 2;
  grid-row: span 1;
  max-width: 350px;
  object-fit: contain;
  border: 1px solid currentColor;
  border-radius: 5px;

  @media (max-width: 800px) {
    grid-column: 1 / 1;
    grid-row: span 1;
    max-height: 200px;
    margin-top: 1rem;
  }
`;
export const Text = styled.p`
  grid-column: 2 / 3;
  grid-row: span 1;
  font-size: 17px;
  text-align: justify;
  margin: 0rem 0.5rem 0rem 0rem;
  &:first-letter {
    float: left;
    font-size: 32px;
    line-height: 28px;
    padding-top: 1px;
    padding-right: 3px;
    padding-left: 1px;
    font-weight: 600;
   
    
  }

  @media (max-width: 800px) {
    grid-column: 1 / 2;
    grid-row: span 1;
    font-size: 16px;

    margin: 0rem 0rem 0rem 0rem;
  }
`;
