import React, { useContext } from 'react';
import { DmButton } from './DarkModeBtn.styled';
import { MuteContext } from '../../contexts/MuteContext';
import { DarkModeContext } from '../../contexts/DarkModeContext';
import { useTouchEvents } from '../../hooks/useTouchEvents';

export default function DarkModeBtn() {
  const { sounds, isMuted } = useContext(MuteContext);
  const { darkMode, handleToggle } = useContext(DarkModeContext);
  const { handleMouseEnter, handleMouseLeave } = useTouchEvents();

  const handleClick = () => {
    handleToggle();
    !isMuted && sounds[1].volume(0.1);
    !isMuted && sounds[1].play();
  };

  const handleMouseEnterLocal = handleMouseEnter(() => {
    !isMuted && sounds[0].volume(0.1);
    !isMuted && sounds[0].play();
  });

  const handleMouseLeaveLocal = handleMouseLeave(() => {
    sounds[0].stop();
  });


  return (
    <>
      <DmButton onClick={handleClick} onMouseEnter={handleMouseEnterLocal} onMouseLeave={handleMouseLeaveLocal}>
        {darkMode ? (
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' height='22' width='22' aria-labelledby='Darkmode uit' role='presentation'>
            <title lang='nl'>Darkmode uit</title>
            <g data-v-1dd6691c=''>
              <g fill='none' fillRule='evenodd' data-v-1dd6691c=''>
                <path d='M0 0h24v24H0z'></path>
                <rect width='1' height='3' x='12' fill='currentColor' rx='.5'></rect>
                <rect width='1' height='3' x='12' y='21' fill='currentColor' rx='.5'></rect>
                <rect width='1' height='3' x='22' y='10.5' fill='currentColor' rx='.5' transform='rotate(90 22.5 12)'></rect>
                <rect width='1' height='3' x='1' y='10.5' fill='currentColor' rx='.5' transform='rotate(90 1.5 12)'></rect>
                <rect width='1' height='3' x='19' y='3' fill='currentColor' rx='.5' transform='rotate(-135 19.5 4.5)'></rect>
                <rect width='1' height='3' x='19' y='18' fill='currentColor' rx='.5' transform='rotate(135 19.5 19.5)'></rect>
                <rect width='1' height='3' x='4' y='3' fill='currentColor' rx='.5' transform='scale(1 -1) rotate(45 15.37 0)'></rect>
                <rect width='1' height='3' x='4' y='18' fill='currentColor' rx='.5' transform='scale(1 -1) rotate(-45 -42.57 0)'></rect>
                <circle cx='12' cy='12' r='6.5' stroke='currentColor'></circle>
                <path fill='currentColor' stroke='currentColor' d='M12.5 18.48V5.52a6.5 6.5 0 010 12.96z'></path>
              </g>
            </g>
          </svg>
        ) : (
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' height='22' width='22' aria-labelledby='Darkmode aan' role='presentation'>
            <title lang='nl'>Darkmode aan</title>
            <g data-v-1dd6691c=''>
              <g fill='none' fillRule='evenodd' data-v-1dd6691c=''>
                <path d='M0 0h24v24H0z'></path>
                <rect width='1' height='3' x='12' fill='currentColor' rx='.5'></rect>
                <rect width='1' height='3' x='12' y='21' fill='currentColor' rx='.5'></rect>
                <rect width='1' height='3' x='22' y='10.5' fill='currentColor' rx='.5' transform='rotate(90 22.5 12)'></rect>
                <rect width='1' height='3' x='1' y='10.5' fill='currentColor' rx='.5' transform='rotate(90 1.5 12)'></rect>
                <rect width='1' height='3' x='19' y='3' fill='currentColor' rx='.5' transform='rotate(-135 19.5 4.5)'></rect>
                <rect width='1' height='3' x='19' y='18' fill='currentColor' rx='.5' transform='rotate(135 19.5 19.5)'></rect>
                <rect width='1' height='3' x='4' y='3' fill='currentColor' rx='.5' transform='scale(1 -1) rotate(45 15.37 0)'></rect>
                <rect width='1' height='3' x='4' y='18' fill='currentColor' rx='.5' transform='scale(1 -1) rotate(-45 -42.57 0)'></rect>
                <circle cx='12' cy='12' r='6.5' stroke='currentColor'></circle>
                <path fill='currentColor' stroke='currentColor' d='M12.5 18.48V5.52a6.5 6.5 0 010 12.96z'></path>
              </g>
            </g>
          </svg>
        )}
      </DmButton>
    </>
  );
}
