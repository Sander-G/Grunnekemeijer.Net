import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  z-index: 0;
  flex-direction: row;
  height: 4rem;
  place-self: flex-end;
  align-items: center;
  justify-content: flex-end;
  margin: 0.25rem 1.25rem;

  & a {
    filter: drop-shadow(0.5px 0.5px 0.5px hotpink) drop-shadow(-0.5px -0.5px 0.5px hotpink);
    margin-inline: 1rem;
    @media screen and (max-width: 1024px) {
      margin-inline: 0.5rem;
    }
  }

  & svg {
    scale: 1.2;
    @media screen and (max-width: 1024px) {
      scale: 1;
    }
  }
`;


export const EmailLinkStyled = styled.div`
  filter: drop-shadow(0.5px 0.5px 0.5px hotpink) drop-shadow(-0.5px -0.5px 0.5px hotpink);
  margin-inline: 1rem;
  cursor: pointer;
  @media screen and (max-width: 1024px) {
    margin-inline: 0.5rem;
  }

  & svg {
    stroke: #343434;
    fill: #343434;
    scale: 1.2;
    @media screen and (max-width: 1024px) {
      scale: 1;
    }
    &:hover {
      stroke: #525252 !important;
      fill: #525252 !important;
    }
  }
`;