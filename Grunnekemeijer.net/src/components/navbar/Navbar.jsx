import React, { useState } from 'react'
import { Container, LeftContainer, RightContainer, Button } from './Navbar.styled'
import DarkModeBtn from '../darkmodeBtn/DarkModeBtn'
import Flashlight from '../flashlight/flashlight'
import MuteBtn from '../muteButton/MuteBtn'
import Hamburger from '../hamburger/Hamburger'
import { Menu } from '../menu/Menu'


export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false)
  const handleMenuToggle = () => {
    setMenuActive(!menuActive);
  }

  return (
    <>
      <Container>
        <LeftContainer>
        <MuteContext.Provider value={{ isMuted, toggleMute }}>
          <DarkModeBtn />
          <Flashlight />
          <MuteBtn />
          </MuteContext.Provider>
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
