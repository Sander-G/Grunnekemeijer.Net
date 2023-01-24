import styled from "styled-components";

import { shakeAnimation } from "../nameDiv/NameDiv.styled";
export const Container = styled.div`
display: flex;


& ul {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-right: 1rem;
    @media screen and (max-width:1024px) {
        margin-right: 0rem;
        
    
}
   
}
& li {
    list-style-type: none;
    font-size: 1.75rem;
    margin-inline: 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width:1024px) {
        font-size: 1.1rem;
        margin-inline: 0.3rem;
    
}
   
  
    
}

& a {    color: #343434;
  
    text-shadow: -0.95px 0 hotpink, 0 0.95px hotpink, 0.95px 0 hotpink, 0 -0.95px hotpink;}

& a:hover {
    transition: all 0.4s ease;
						animation: ${shakeAnimation} 0.6s linear infinite;	
            color: #171717;
			text-shadow: -0.95px 0 skyblue, 0 0.95px skyblue, 0.95px 0 skyblue, 0 -0.95px skyblue;

}
& .active {
    /* animation: ${shakeAnimation} 0.6s linear infinite;	
    color: #171717; */
			text-shadow: -0.95px 0 skyblue, 0 0.95px skyblue, 0.95px 0 skyblue, 0 -0.95px skyblue;

}

`




