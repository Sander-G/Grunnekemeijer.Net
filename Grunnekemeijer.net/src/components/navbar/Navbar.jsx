import React, { useState, useEffect } from 'react'
import { Container, LeftContainer, RightContainer, Button } from './Navbar.styled'
import DarkModeBtn from '../darkmodeBtn/DarkModeBtn'
import Flashlight from '../flashlight/flashlight'
import MuteBtn from '../muteButton/MuteBtn'
import Hamburger from '../hamburger/Hamburger'
import { Menu } from '../menu/Menu'


export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuActive, setMenuActive] = useState(false)
  const onToggle = () => {
    setDarkMode(!darkMode)
  }
  const handleMenuToggle = () => {
    setMenuActive(!menuActive);
  }
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  }

  return (
    <>
      <Container>
        <LeftContainer>
        <DarkModeBtn darkMode={darkMode} onToggle={handleDarkModeToggle} />
          {!darkMode ? <Flashlight /> : null }
          <MuteBtn />
        </LeftContainer>
        <RightContainer>

          {menuActive && (
            <Menu />)}
          <Button onClick={handleMenuToggle}>
            <Hamburger /></Button>
        </RightContainer>
      </Container>

    </>
  )
}
