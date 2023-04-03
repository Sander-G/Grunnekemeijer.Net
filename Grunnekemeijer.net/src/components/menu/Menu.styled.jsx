import styled from "styled-components";

import { shakeAnimation } from "../nameDiv/NameDiv.styled";
export const Container = styled.div`
  display: flex;

  & a {
    font-size: 1.8rem;
    font-weight: 500;
    display: flex;
    user-select: none;
    align-items: center;
    justify-content: center;
    margin-left: 0.5rem;

    &:last-child {
      margin-right: 0.5rem;
      @media screen and (max-width: 1024px)
      { margin-right: 0.1rem;
      }
    }

    color: #343434;
    text-shadow: -1px 0 hotpink, 0 1px hotpink, 1px 0 hotpink, 0 -1px hotpink;
    @media screen and (max-width: 1024px) {
      font-size: 1.5rem;
      margin-left: 0.4rem;
    }
    @media screen and (max-width: 600px) {
      font-size: 1.3rem;
    }

    &:hover {
      transition: all 0.5s ease-in-out;
      animation: ${shakeAnimation} 0.3s ease-in infinite;
      color: #525252;
      text-shadow: -1px 0 skyblue, 0 1px skyblue, 1px 0 skyblue, 0 -1px skyblue;
    }

    &.active {
      color: #343434;
      text-shadow: -1px 0 skyblue, 0 1px skyblue, 1px 0 skyblue, 0 -1px skyblue;
    }
  }

  &:hover a:not(:hover) {
    transition: all 0.2s ease-in;
    text-shadow: -1px 0 hotpink, 0 1px hotpink, 1px 0 hotpink, 0 -1px hotpink;
  }
`;




