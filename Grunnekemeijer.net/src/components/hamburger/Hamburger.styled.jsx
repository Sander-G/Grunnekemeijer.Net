import styled from "styled-components";


export const MenuLabel = styled.label`
  position: relative;
  height: 40px;
  width: 40px;
  padding-top: 10px;
  padding-bottom: 10px;
  cursor: pointer;
  z-index: 100;
  user-select: none;
`;

export const Icon = styled.span`
position: relative;
background-color: ${(props) => (props.clicked ? "transparent" : "#525252")};
width: 35px;
height: 7px;
display: inline-block;
transition: all 0.3s;
border-radius: 6px;
border: ${(props) => (props.clicked ? "1px solid transparent" : "1px solid hotpink")};
&:hover {
  background-color: ${(props) => (props.clicked ? "transparent" : "#343434")};
&:after {
  background-color: ${(props) => (props.clicked ? "transparent" : "#343434")};
}
&:before {
  background-color: ${(props) => (props.clicked ? "transparent" : "#343434")};
}
}

@media screen and (max-width:1024px) {
    scale: 0.75;
}

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
  border: ${(props) => (props.clicked ? "1px solid skyblue" : "1px solid hotpink")};
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

`;