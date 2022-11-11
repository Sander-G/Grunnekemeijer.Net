import React, {useState} from 'react'
import { Container, LeftContainer, RightContainer  } from './Navbar.styled'
import DarkModeBtn from '../darkmodeBtn/DarkModeBtn'
import Flashlight from '../flashlight/flashlight'
import Hamburger from '../hamburger/Hamburger'
import { Menu } from '../menu/Menu'
 
const [menuActive, setmMenuActive] = useState(false)
export default function Navbar() {
 const [menuActive, setMenuActive] = useState (false)
 
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
