import React from 'react'
import DarkModeBtn from '../darkmodeBtn/DarkModeBtn'
import Flashlight from '../flashlight/flashlight'
import Hamburger from '../hamburger/Hamburger'
import { Container } from './navbar.styled'

export default function Navbar() {
  return (
    <>
    <Container>
    <DarkModeBtn/>
    <Flashlight/>
    <Hamburger/>
    </Container>
    
    </>
  )
}
