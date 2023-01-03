import React from 'react'
import { Container } from './Menu.styled'
import { NavLink } from 'react-router-dom'
export function Menu() {
    return (
        <>
            <Container>    
            <li><NavLink to='/'>HOME</NavLink></li>
            <li><NavLink to='/info'>INFO</NavLink></li>
            <li><NavLink to='/portfolio' alt='Portfolio'>PORTFOLIO</NavLink></li>
            </Container>
        </>
    )
}
