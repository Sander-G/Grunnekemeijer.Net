import styled from "styled-components";

import { shakeAnimation } from "../nameDiv/NameDiv.styled";
export const Container = styled.div`
  display: flex;

 

  & a {
    font-size: 1.75rem;
    display: flex;
    user-select: none;
    align-items: center;
    justify-content: space-between;
    margin-inline: 0.3rem;

    color: #343434;
    text-shadow: -1px 0 hotpink, 0 1px hotpink, 1px 0 hotpink, 0 -1px hotpink;

 

    @media screen and (max-width: 600px) {
      font-size: 1.2rem;
      margin-inline: 0.2rem;

    }

    &:hover {
      transition: all 0.5s ease-in-out;
      animation: ${shakeAnimation} 0.3s ease-in infinite;
      color: #171717;
      text-shadow: -1px 0 skyblue, 0 1px skyblue, 1px 0 skyblue, 0 -1px skyblue;
    }

    &.active {
      color: #343434;
      text-shadow: -1px 0 skyblue, 0 1px skyblue, 1px 0 skyblue, 0 -1px skyblue;
    }
  }

  &:hover a:not(:hover) {
    transition: all 0.4s ease;
    text-shadow: -1px 0 hotpink, 0 1px hotpink, 1px 0 hotpink, 0 -1px hotpink;
  }
`;




