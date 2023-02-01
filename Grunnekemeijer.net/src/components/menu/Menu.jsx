import React, { useContext } from 'react'
import { Container } from './Menu.styled'
import { NavLink } from 'react-router-dom'
import { MuteContext } from '../../context/MuteContext';
export function Menu() {
    const { sounds, isMuted } = useContext(MuteContext);
    return (
        <>
            <Container >
                <NavLink onClick={() => {
                    if (!isMuted) {
                        sounds[1].volume(0.1);
                        sounds[1].play();
                    }
                }}
                    onMouseEnter={() => {
                        !isMuted && sounds[0].volume(0.1);
                        sounds[0].play()
                    }}
                    onMouseLeave={() => {
                        sounds[0].stop()
                    }} to='/' alt='Home'>HOME</NavLink>
                <NavLink onClick={() => {
                    if (!isMuted) {
                        sounds[1].volume(0.1);
                        sounds[1].play();
                    }
                }} 
                    onMouseEnter={() => {
                    !isMuted && sounds[0].volume(0.1);
                    sounds[0].play()
                }}
                    onMouseLeave={() => {
                        sounds[0].stop()
                    }} to='/info' alt='Info'>INFO</NavLink>
                <NavLink onClick={() => {
                    if (!isMuted) {
                        sounds[1].volume(0.1);
                        sounds[1].play();
                    }
                }} onMouseEnter={() => {
                    !isMuted && sounds[0].volume(0.1);
                    sounds[0].play()
                }}
                    onMouseLeave={() => {
                        sounds[0].stop()
                    }} to='/portfolio' alt='Portfolio'>PORTFOLIO</NavLink>
            </Container>
        </>
    )
}
