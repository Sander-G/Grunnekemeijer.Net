import React, { useState, useContext } from 'react'
import { Container, LeftContainer, RightContainer, Button } from './Navbar.styled'
import DarkModeBtn from '../darkmodeBtn/DarkModeBtn'
import Flashlight from '../flashlight/flashlight'
import MuteBtn from '../muteButton/MuteBtn'
import Hamburger from '../hamburger/Hamburger'
import { Menu } from '../menu/Menu'
import { MuteContext } from '../../context/MuteContext'

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuActive, setMenuActive] = useState(false)
  const onToggle = () => {
    setDarkMode(!darkMode)
  }
  const handleMenuToggle = () => {
    setMenuActive(!menuActive);
  }
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark', darkMode);
  }


  const { sounds, isMuted } = useContext(MuteContext);
    



    console.log(sounds);
    console.log(isMuted);
  return (

   
    <>
      <Container>
        <LeftContainer>
          <DarkModeBtn darkMode={darkMode} onToggle=
          {handleDarkModeToggle} />
          {!darkMode && <Flashlight />}
          <MuteBtn />
        </LeftContainer>
        
        <RightContainer>
          {menuActive && (
            <Menu />)}
          <Button onClick={ () => {
            handleMenuToggle ();
            if (!isMuted) {
              sounds[2].volume(0.1);
              sounds[2].play();
              

            }
          }}>
            <Hamburger /></Button>
        </RightContainer>
      </Container>

    </>
  )
}
