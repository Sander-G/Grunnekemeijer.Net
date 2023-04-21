import React, { useState } from 'react';
import { MenuLabel, Icon } from './Hamburger.styled';


export default function Hamburger() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);


  return (
    <>
      <MenuLabel aria-label='Menu Button' 
      onClick={handleClick}>
        <Icon clicked={click}></Icon>
      </MenuLabel>
    </>
  );
}
