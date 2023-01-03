import React from 'react'
import { Container } from './Menu.styled'
import { Link } from 'react-router-dom'
export function Menu() {
    return (
        <>
            <Container>    
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/info'>INFO</Link></li>
            <li><Link to='/portfolio' alt='Portfolio'>PORTFOLIO</Link></li>
            </Container>
        </>
    )
}
