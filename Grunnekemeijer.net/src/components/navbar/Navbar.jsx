import React, { useState, useContext } from 'react'
import { Container, LeftContainer, RightContainer, Button } from './Navbar.styled'
import DarkModeBtn from '../darkmodeBtn/DarkModeBtn'
import Flashlight from '../flashlight/flashlight'
import MuteBtn from '../muteButton/MuteBtn'
import Hamburger from '../hamburger/Hamburger'
import { Menu } from '../menu/Menu'
import { MuteContext } from '../../contexts/MuteContext'
import { DarkModeContext } from "../../contexts/DarkModeContext";



export default function Navbar() {
    const { sounds, isMuted } = useContext(MuteContext);
     const { darkMode } = useContext(DarkModeContext);
  const [menuActive, setMenuActive] = useState(false);
  
  const handleMenuToggle = () => {
    setMenuActive(!menuActive);
  }
 
  return (
    <>
      <Container>
        <LeftContainer>
          <DarkModeBtn
           
          
          />
          {darkMode && <Flashlight />}
          <MuteBtn />
        </LeftContainer>

        <RightContainer>
          {menuActive && <Menu />}
          <Button
            onClick={() => {
              handleMenuToggle();
              if (!isMuted) {
                sounds[1].volume(0.1);
                sounds[1].play();
              }
            }}
          >
            <Hamburger />
          </Button>
        </RightContainer>
      </Container>
    </>
  );
}
