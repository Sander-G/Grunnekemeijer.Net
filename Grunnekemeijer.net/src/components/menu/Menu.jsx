import React, {useContext} from 'react'
import { Container } from './Menu.styled'
import { NavLink } from 'react-router-dom'

import { MuteContext } from '../../context/MuteContext';
export function Menu() {
    const { sounds, isMuted } = useContext(MuteContext);
    return (
        <>
            <Container>    
            <li><NavLink onMouseEnter={() => {
                !isMuted && sounds[3].volume(0.1);
                sounds[3].play()}}
                onMouseLeave={() => {
                sounds[3].stop()}} to='/' alt='Home'>HOME</NavLink></li>
            <li><NavLink onMouseEnter={() => {
                !isMuted && sounds[3].volume(0.1);
                sounds[3].play()}}
                onMouseLeave={() => {
                sounds[3].stop()}} to='/info' alt='Info'>INFO</NavLink></li>
            <li><NavLink onMouseEnter={() => {
                !isMuted && sounds[3].volume(0.1);
                sounds[3].play()}}
                onMouseLeave={() => {
                sounds[3].stop()}} to='/portfolio' alt='Portfolio'>PORTFOLIO</NavLink></li>
            </Container>
        </>
    )
}
