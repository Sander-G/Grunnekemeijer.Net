import styled from "styled-components";

import { shakeAnimation } from "../nameDiv/NameDiv.styled";
export const Container = styled.div`
display: flex;


& a {
    font-size: 1.75rem;
    margin-inline: 0.5rem;
    display: flex;
    user-select: none;
    position: relative;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: #343434;
    text-shadow: -1px 0 hotpink, 0 1px hotpink, 1px 0 hotpink, 0 -1px hotpink;

    @media screen and (max-width:1024px) {
        font-size: 1.35rem;
        margin-inline: 0.3rem;
    }
    
    &:hover {
      transition: all 0.4s ease;
      animation: ${shakeAnimation} 0.6s linear infinite;
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
`




