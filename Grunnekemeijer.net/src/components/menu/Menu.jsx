import React, { useContext } from 'react';
import { Container } from './Menu.styled';
import { NavLink } from 'react-router-dom';
import { MuteContext } from '../../contexts/MuteContext';
export function Menu() {
  const { sounds, isMuted } = useContext(MuteContext);
  return (
    <>
      <Container>
        <NavLink
          onClick={() => {
            if (!isMuted) {
              sounds[1].play();
            }
          }}
          onMouseEnter={() => {
            !isMuted && sounds[0].play();
          }}
          onMouseLeave={() => {
            sounds[0].stop();
          }}
          to='/Home'
          alt='Home'
        >
          HOME
        </NavLink>
        <NavLink
          onClick={() => {
            if (!isMuted) {
              sounds[1].play();
            }
          }}
          onMouseEnter={() => {
            !isMuted && sounds[0].play();
          }}
          onMouseLeave={() => {
            sounds[0].stop();
          }}
          to='/Info'
          alt='Info'
        >
          INFO
        </NavLink>
        <NavLink
          onClick={() => {
            if (!isMuted) {
              sounds[1].play();
            }
          }}
          onMouseEnter={() => {
            !isMuted && sounds[0].play();
          }}
          onMouseLeave={() => {
            sounds[0].stop();
          }}
          to='/Portfolio'
          alt='Portfolio'
        >
          PORTFOLIO
        </NavLink>
      </Container>
    </>
  );
}
