import React, { useState, useContext } from 'react'
import { Container, LeftContainer, RightContainer, Button } from './Navbar.styled'
import DarkModeBtn from '../darkmodeBtn/DarkModeBtn'
import Flashlight from '../flashlight/flashlight'
import MuteBtn from '../muteButton/MuteBtn'
import Hamburger from '../hamburger/Hamburger'
import { Menu } from '../menu/Menu'
import { MuteContext } from '../../contexts/MuteContext'
import { DarkModeContext } from "../../contexts/DarkModeContext";
import { useTouchEvents } from '../../hooks/useTouchEvents'



export default function Navbar() {
    const { sounds, isMuted } = useContext(MuteContext);
     const { darkMode } = useContext(DarkModeContext);
  const [menuActive, setMenuActive] = useState(false);
  const { handleMouseEnter, handleMouseLeave } = useTouchEvents();

  const handleClick = () => {
    setMenuActive(!menuActive);
    !isMuted && sounds[1].volume(0.1);
    !isMuted && sounds[1].play();
  };

  const handleMouseEnterLocal = handleMouseEnter(() => {
    !isMuted && sounds[0].volume(0.1);
    !isMuted && sounds[0].play();
  });

  const handleMouseLeaveLocal = handleMouseLeave(() => {
    sounds[0].stop();
  });


 
  return (
    <>
      <Container>
        <LeftContainer>
          <DarkModeBtn />
          {darkMode && <Flashlight />}
          <MuteBtn />
        </LeftContainer>

        <RightContainer>
          {menuActive && <Menu />}
          <Button onClick={handleClick} onMouseEnter={handleMouseEnterLocal} onMouseLeave={handleMouseLeaveLocal}>
            <Hamburger />
          </Button>
        </RightContainer>
      </Container>
    </>
  );
}
