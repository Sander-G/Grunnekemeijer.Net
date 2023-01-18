import React from 'react'
import { Container } from './Menu.styled'
import { NavLink } from 'react-router-dom'
export function Menu() {
    return (
        <>
            <Container>    
            <li><NavLink to='/home' alt='Home'>HOME</NavLink></li>
            <li><NavLink to='/info' alt='Info'>INFO</NavLink></li>
            <li><NavLink to='/portfolio' alt='Portfolio'>PORTFOLIO</NavLink></li>
            </Container>
        </>
    )
}
