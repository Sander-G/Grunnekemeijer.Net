import styled from "styled-components";
import { shakeAnimation } from "../nameDiv/NameDiv.styled";
export const Container = styled.div`
display: flex;


& ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 1rem;
}
& li {
    list-style-type: none;
    font-size: 1.5rem;
    margin-inline: 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
   
  
    
}
& a {    color: #343434;
  
    text-shadow: -0.75px 0 hotpink, 0 0.75px hotpink, 0.75px 0 hotpink, 0 -0.75px hotpink;}

& a:hover {
    transition: all 0.6s ease;
			/* text-shadow: var(--x-shadow) var(--y-shadow) 10px #1A1A1A; */
			animation: ${shakeAnimation} 0.6s linear infinite;	
            color: #171717;
			text-shadow: -0.75px 0 skyblue, 0 -0.75px skyblue, 0.75px 0 skyblue, 0 -0.75px skyblue;

}
`



