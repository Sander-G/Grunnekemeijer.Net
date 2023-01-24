import React,{useState, useContext} from "react";
import { MenuLabel, Icon } from "./Hamburger.styled";
import { MuteContext } from '../../context/MuteContext';

export default function Hamburger() {
const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);
  
  
const { sounds, isMuted } = useContext(MuteContext);
    return (
      
    <>
    <MenuLabel 
     onClick={handleClick}
     onMouseEnter={() => {!isMuted && sounds[3].volume(0.1);
     sounds[3].play()}}
    onMouseLeave={() => {
      sounds[3].stop()}}>


    <Icon clicked={click}>&nbsp;</Icon>


    </MenuLabel>
    </>
  )
}

