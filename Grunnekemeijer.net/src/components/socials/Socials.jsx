import React from 'react'
import { Container } from './Socials.styled'
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs'
import { IconContext } from 'react-icons'


export default function Socials() {
    return (

        <Container>
            <IconContext.Provider value={{ fill: "currentcolor", className: "social-icons", size: "30px", style: { marginInline: '0.5rem' } }}>
                <a href="https://github.com/Sander-G" target="_blank"><BsGithub /></a>
                <a href="https://www.linkedin.com/in/sander-grunnekemeijer" target="_blank"><BsLinkedin /></a>
                <a href="https://www.instagram.com/sander_gr_" target="_blank"><BsInstagram /></a>
            </IconContext.Provider>


        </Container>
    )
}
