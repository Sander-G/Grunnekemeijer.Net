import React from 'react'
import DarkModeBtn from '../darkmodeBtn/DarkModeBtn'
import Flashlight from '../flashlight/flashlight'
import { Container } from './navbar.styled'
export default function Navbar() {
  return (
    <>
    <Container>
    <DarkModeBtn/>
    <Flashlight/>

    </Container>
    
    </>
  )
}
