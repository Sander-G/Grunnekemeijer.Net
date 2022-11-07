import styled from "styled-components";


export const MenuLabel = styled.label`
  position: fixed;
  top: 0.5rem;
  right: 1.25rem;
  height: 3rem;
  width: 3rem;
  cursor: pointer;
  z-index: 1000;
  text-align: left;

`;



export const Icon = styled.span`
position: relative;
background-color: ${(props) => (props.clicked ? "transparent" : "#525252")};
width: 35px;
height: 7px;
display: inline-block;
margin-top: 1.25rem;
transition: all 0.3s;
border-radius: 6px;
border: ${(props) => (props.clicked ? "1px solid transparent" : "1px solid hotpink")};
&::before,
&::after {
  content: "";
  background-color: #525252;
  width: 40px;
  height: 6px;
  display: inline-block;
  position: absolute;
  left: -1px;
  top:-1px;
  border-radius: 6px;
  border: 1px solid hotpink; 
  transition: all 0.3s;
}
&::before {
  top: ${(props) => (props.clicked ? "0" : "-0.9rem")};
  transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
}
&::after {
  top: ${(props) => (props.clicked ? "0" : "0.8rem")};
  transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
}
/* ${MenuLabel}:hover &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.9rem")};
  }
  ${MenuLabel}:hover &::after {
    top: ${(props) => (props.clicked ? "0" : "0.9rem")};
  } */


`;