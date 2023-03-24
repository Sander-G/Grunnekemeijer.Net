import styled from "styled-components";


export const MenuLabel = styled.label`
  position: relative;
  height: 2rem;
  width: 2rem;
 
  cursor: pointer;
  z-index: 100;
  user-select: none;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-right: 0.5rem;
`;

export const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? 'transparent' : '#343434')};
  width: 35px;
  height: 7px;
  user-select: none;
  display: inline-block;
  transition: all 0.3s;
  border-radius: 6px;
  border: ${(props) => (props.clicked ? '1px solid transparent' : '1px solid hotpink')};
  &:hover {
    background-color: ${(props) => (props.clicked ? 'transparent' : '#525252')};
    &:after {
      background-color: #525252;
    }
    &:before {
      background-color: #525252;
    }
  }

  @media screen and (max-width: 1024px) {
    scale: 0.87;
  }
  @media screen and (max-width: 600px) {
    scale: 0.75;
  }
  &::before,
  &::after {
    content: '';
    background-color: #343434;
    width: 40px;
    height: 6px;
    display: inline-block;
    position: absolute;
    left: -1px;
    top: -1px;
    border-radius: 6px;
    border: ${(props) => (props.clicked ? '1px solid hotpink' : '1px solid hotpink')};
    transition: all 0.3s;
  }

  &::before {
    top: ${(props) => (props.clicked ? '0' : '-0.9rem')};
    transform: ${(props) => (props.clicked ? 'rotate(135deg)' : 'rotate(0)')};
  }

  &::after {
    top: ${(props) => (props.clicked ? '0' : '0.8rem')};
    transform: ${(props) => (props.clicked ? 'rotate(-135deg)' : 'rotate(0)')};
  }
`;