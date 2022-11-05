import React,{useState} from "react";
import { MenuLabel, Icon } from "./Hamburger.styled";


export default function Hamburger() {
const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);
  
  
    return (
    <>
    <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>

    <Icon clicked={click}>&nbsp;</Icon>


    </MenuLabel>
    </>
  )
}
