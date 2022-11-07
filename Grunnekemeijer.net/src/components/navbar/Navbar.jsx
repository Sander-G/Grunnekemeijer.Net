import React from 'react'
import { Container, LeftContainer, RightContainer  } from './Navbar.styled'
import DarkModeBtn from '../darkmodeBtn/DarkModeBtn'
import Flashlight from '../flashlight/flashlight'
import Hamburger from '../hamburger/Hamburger'
import { Menu } from '../menu/Menu'


export default function Navbar() {
  return (
    <>
    <Container>
    <LeftContainer>
    <DarkModeBtn/>
    <Flashlight/>
    </LeftContainer>
    <RightContainer>
    <Menu/>
    <Hamburger/>
    </RightContainer>
    </Container>
    
    </>
  )
}
