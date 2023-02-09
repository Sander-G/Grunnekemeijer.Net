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
  grid-template-rows: repeat(5, minmax(200px, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap: 2rem;
  padding: 1rem 1rem 0rem 0rem;
  line-height: 1.1;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(10, minmax(100px, 1fr));
    grid-row-gap: 0.5rem;
    margin: 0rem 2rem 0rem 2rem;
    padding: 0rem 0rem 0rem 0rem;
    line-height: 1.2;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 1rem 0rem 0rem;
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
export const Text = styled.span`
  grid-column: 2 / 3;
  grid-row: span 1;
  font-size: 17px;
  text-align: justify;
  margin: 0rem 0.5rem 0rem 0rem;
  &:first-letter {
    initial-letter: 4.5 4;
    font-weight: bold;
    line-height: 1;
    font-size: 22px;
  }

  @media (max-width: 800px) {
    grid-column: 1 / 2;
    grid-row: span 1;
    font-size: 16px;

    margin: 0rem 0rem 0rem 0rem;
  }
`;
