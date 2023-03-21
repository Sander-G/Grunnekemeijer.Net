import React, { useState, useEffect, useContext, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FlashlightButton } from './Flashlight.styled';
import { MuteContext } from '../../context/MuteContext';

export default function Flashlight() {
  const { sounds, isMuted } = useContext(MuteContext);
  const [isOn, setIsOn] = useState(false);
   const containerRef = useRef(null);
   

  const cursorX = useMotionValue();
  const cursorY = useMotionValue();
  const mapX = useTransform(cursorX, [0, containerRef.current?.width], [0, window.innerWidth]);
  const mapY = useTransform(cursorY, [0, containerRef.current?.height], [0, window.innerHeight]);
   
  const handleTouchMove = (e) => {
     e.preventDefault();
     const containerRect = containerRef.current.getBoundingClientRect();
     const x = e.touches[0].clientX;
     const y = e.touches[0].clientY;
     mapX.set(x - containerRect.left);
     mapY.set(y - containerRect.top);
   };



     useEffect(() => {
       const handleDocumentTouchMove = (e) => {
         if (isOn) {
           e.preventDefault();
         }
       };
       
       document.addEventListener('touchmove', handleDocumentTouchMove, { passive: true });

       return () => {
         document.removeEventListener('touchmove', handleDocumentTouchMove, { passive: false });
       };
     }, [isOn]);

  useEffect(() => {

     if (!containerRef.current) return;
    const moveCursor = (e) => {
      if ('ontouchstart' in window) {
        handleTouchMove(e);
      } else {
        const containerRect = containerRef.current.getBoundingClientRect();
        cursorX.set(e.clientX - containerRect.left - 60);
        cursorY.set(e.clientY - containerRect.top - 75);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('touchmove', handleTouchMove, { passive: false });
    };
  }, [cursorX, cursorY, containerRef.current]);

  return (
    <>
      <FlashlightButton
        ref={containerRef}
        onClick={() => {
          setIsOn(!isOn);
          !isMuted && sounds[1].play();
        }}
        onMouseEnter={() => {
          !isMuted && sounds[0].play();
        }}
        onMouseLeave={() => {
          sounds[0].stop();
        }}
      >
        {!isOn ? (
          <svg fill='currentColor' height='22px' width='22px' aria-labelledby='Zaklamp uit' version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
            <title lang='nl'>Zaklamp uit</title>
            <g>
              <g>
                <path
                  d='M450.494,202.249L308.915,60.671c-19.515-19.514-51.271-19.515-70.787,0l-32.904,32.903
			c-11.373,11.373-19.513,26.114-22.816,42.63l-18.642,93.213L14.637,378.547c-19.516,19.517-19.516,51.272,0,70.788l47.193,47.193
			c19.514,19.515,51.269,19.518,70.788,0l149.129-149.129l93.212-18.643c16.132-3.227,30.973-11.158,42.629-22.815l32.905-32.904
			C470.056,253.475,470.059,221.813,450.494,202.249z M109.022,472.932c-6.505,6.506-17.091,6.506-23.596,0l-47.193-47.193
			c-6.505-6.506-6.505-17.091,0-23.596l11.799-11.799l70.789,70.789L109.022,472.932z M144.417,437.538l-70.789-70.789
			l46.518-46.518l23.596,23.596c6.515,6.516,17.08,6.517,23.596,0c6.516-6.516,6.516-17.08,0-23.596l-23.596-23.596l35.395-35.395
			l70.789,70.789L144.417,437.538z M279.006,313.915l-81.757-81.757l15.731-78.654l144.68,144.68L279.006,313.915z M426.898,249.441
			c-35.833,35.832-33.596,33.664-35.485,35.307L226.418,119.751c1.667-1.918-0.432,0.254,35.307-35.482
			c6.504-6.505,17.089-6.506,23.595,0l141.579,141.577C433.418,232.366,433.42,242.918,426.898,249.441z'
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d='M473.802,36.794c-6.672-6.357-17.232-6.1-23.589,0.57L416.494,72.75c-6.357,6.672-6.102,17.232,0.57,23.589
			c6.673,6.357,17.232,6.101,23.589-0.57l33.718-35.387C480.728,53.711,480.474,43.151,473.802,36.794z'
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d='M361.487,0.834c-9.215,0-16.685,7.471-16.685,16.685v33.37c0,9.215,7.47,16.685,16.685,16.685
			c9.215,0,16.685-7.47,16.685-16.685v-33.37C378.172,8.305,370.701,0.834,361.487,0.834z'
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d='M495.315,134.106h-33.37c-9.215,0-16.685,7.471-16.685,16.685s7.47,16.685,16.685,16.685h33.37
			c9.215,0,16.685-7.471,16.685-16.685S504.529,134.106,495.315,134.106z'
                />
              </g>
            </g>
          </svg>
        ) : (
          <svg fill='currentColor' height='22px' width='22px' aria-labelledby='Zaklamp aan' version='1.1' id='Layer_1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>
            <title lang='nl'>Zaklamp aan</title>
            <g>
              <g>
                <path d='M450.494,202.249L308.915,60.671c-19.515-19.514-51.271-19.515-70.787,0l-32.904,32.903 c-11.373,11.373-19.513,26.114-22.816,42.63l-18.642,93.213L14.637,378.547c-19.516,19.517-19.516,51.272,0,70.788l47.193,47.193 c19.514,19.515,51.269,19.518,70.788,0l149.129-149.129l93.212-18.643c16.132-3.227,30.973-11.158,42.629-22.815l32.905-32.904 C470.056,253.475,470.059,221.813,450.494,202.249z M109.022,472.932c-6.505,6.506-17.091,6.506-23.596,0l-47.193-47.193 c-6.505-6.506-6.505-17.091,0-23.596l11.799-11.799l70.789,70.789L109.022,472.932z M144.417,437.538l-70.789-70.789 l46.518-46.518l23.596,23.596c6.515,6.516,17.08,6.517,23.596,0c6.516-6.516,6.516-17.08,0-23.596l-23.596-23.596l35.395-35.395 l70.789,70.789L144.417,437.538z M279.006,313.915l-81.757-81.757l15.731-78.654l144.68,144.68L279.006,313.915z M426.898,249.441 c-35.833,35.832-33.596,33.664-35.485,35.307L226.418,119.751c1.667-1.918-0.432,0.254,35.307-35.482 c6.504-6.505,17.089-6.506,23.595,0l141.579,141.577C433.418,232.366,433.42,242.918,426.898,249.441z' />
              </g>
            </g>
          </svg>
        )}

        <motion.div
          className={isOn ? 'off' : 'on'}
          style={{
            translateX: 'ontouchstart' in window ? mapX : cursorX,
            translateY: 'ontouchstart' in window ? mapY : cursorY,
          }}
        />
      </FlashlightButton>
    </>
  );
}
