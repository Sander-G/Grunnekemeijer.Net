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
    justify-content: space-between;
    margin-inline: 0.3rem;
    

    color: #343434;
    text-shadow: 0.5px 0px 1px hotpink, -0.5px 0px 1px hotpink, 0px 0.5px 1px hotpink, 0px -0.5px 1px hotpink, 0.5px 0.5px 1px hotpink, -0.5px -0.5px 1px hotpink;

    @media screen and (max-width: 1024px) {
      font-size: 1.5rem;
      margin-inline: 0.3rem;
    }
    @media screen and (max-width: 600px) {
      font-size: 1.3rem;
      font-weight: 400;
      
      padding-bottom: 2px;
      margin-inline: 2px;
     
    }

    &:hover {
      transition: all 0.5s ease-in-out;
      animation: ${shakeAnimation} 0.3s ease-in infinite;
      color: #525252;
      text-shadow: 0.5px 0px 1px skyblue, -0.5px 0px 1px skyblue, 0px 0.5px 1px skyblue, 0px -0.5px 1px skyblue, 0.5px 0.5px 1px skyblue, -0.5px -0.5px 1px skyblue;
    }

    &.active {
      color: #343434;
      text-shadow: 0.5px 0px 1px skyblue, -0.5px 0px 1px skyblue, 0px 0.5px 1px skyblue, 0px -0.5px 1px skyblue, 0.5px 0.5px 1px skyblue, -0.5px -0.5px 1px skyblue;
    }
  }

  &:hover a:not(:hover) {
    transition: all 0.4s ease;
    text-shadow: 0.5px 0px 1px hotpink, -0.5px 0px 1px hotpink, 0px 0.5px 1px hotpink, 0px -0.5px 1px hotpink, 0.5px 0.5px 1px hotpink, -0.5px -0.5px 1px hotpink;
  }
`;




