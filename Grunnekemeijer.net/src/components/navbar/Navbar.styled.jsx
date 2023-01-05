import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
height: 4rem;
max-width: 100vw;
background-color: transparent;
border: 0.5px solid hotpink;
margin: 0rem 1rem;
`

export const LeftContainer = styled.div`
display: flex;
`

export const RightContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 0.5rem;
padding-right: 1rem; 

`
export const Button = styled.button`
border: 0;
height: 40px;
width: 40px;
margin-top:0.4rem;
background: transparent;

`