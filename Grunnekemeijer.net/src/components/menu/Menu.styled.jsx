import styled from "styled-components";

import { shakeAnimation } from "../nameDiv/NameDiv.styled";
export const Container = styled.div`
display: flex;


& a {
    font-size: 1.75rem;
    margin-inline: 0.5rem;
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    ;
    @media screen and (max-width:1024px) {
        font-size: 1.3rem;
        margin-inline: 0.3rem;
    }
    color: #171717;
    text-shadow: -0.95px 0 hotpink, 0 0.95px hotpink, 0.95px 0 hotpink, 0 -0.95px hotpink;

    &:hover {
      transition: all 0.4s ease;
      animation: ${shakeAnimation} 0.6s linear infinite;
      color: #171717;
      text-shadow: -0.95px 0 skyblue, 0 0.95px skyblue, 0.95px 0 skyblue, 0 -0.95px skyblue;
    }

    &.active {
      color: #171717;
      text-shadow: -0.95px 0 skyblue, 0 0.95px skyblue, 0.95px 0 skyblue, 0 -0.95px skyblue;
    }
  }

  &:hover a:not(:hover) {
    transition: all 0.4s ease;
    text-shadow: -0.95px 0 hotpink, 0 0.95px hotpink, 0.95px 0 hotpink, 0 -0.95px hotpink;
  
}
`




