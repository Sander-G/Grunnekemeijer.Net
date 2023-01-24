import styled from "styled-components";

export const Container = styled.div`
position:relative;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
height: 4rem;
z-index:1;
max-width: 100vw;
background-color: transparent;
border-bottom: 0.5px solid hotpink;
margin: 0rem 1rem;

`

export const LeftContainer = styled.div`
display: flex;
@media screen and (max-width:1024px) {
    scale: 0.8;
}
`

export const RightContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-end;
gap: 0.5rem;
padding-right: 0.75rem; 

`
export const Button = styled.button`
border: 0;
height: 40px;
width: 40px;
margin-top:0.4rem;
background: transparent;

`