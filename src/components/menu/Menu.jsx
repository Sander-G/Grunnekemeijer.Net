import React, { useContext } from 'react';
import { Container } from './Menu.styled';
import { NavLink } from 'react-router-dom';
import { MuteContext } from '../../contexts/MuteContext';
import { useTouchEvents } from "../../hooks/useTouchEvents"

export function Menu() {
  const { sounds, isMuted } = useContext(MuteContext);
   const { handleMouseEnter, handleMouseLeave } = useTouchEvents();

  const handleClick = () => {
    !isMuted && sounds[1].volume(0.1);
    !isMuted && sounds[1].play();
  };

  const handleMouseEnterMenu = handleMouseEnter(() => {
    !isMuted && sounds[0].volume(0.1);
    !isMuted && sounds[0].play();
  });

  const handleMouseLeaveMenu = handleMouseLeave(() => {
    sounds[0].stop();
  });



  return (
    <>
      <Container>
        <NavLink onClick={handleClick} aria-label='menu item - Home Page' onMouseEnter={handleMouseEnterMenu} onMouseLeave={handleMouseLeaveMenu} to='/Home' alt='Home'>
          HOME
        </NavLink>
        <NavLink onClick={handleClick} aria-label='menu item - Info Page' onMouseEnter={handleMouseEnterMenu} onMouseLeave={handleMouseLeaveMenu} to='/Info' alt='Info'>
          INFO
        </NavLink>
        <NavLink onClick={handleClick} aria-label='menu item - Portfolio Page' onMouseEnter={handleMouseEnterMenu} onMouseLeave={handleMouseLeaveMenu} to='/Portfolio' alt='Portfolio'>
          PORTFOLIO
        </NavLink>
      </Container>
    </>
  );
}
