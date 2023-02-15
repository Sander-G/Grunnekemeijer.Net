import React, { useContext, useState } from "react";
import { MuteContext } from "../../context/MuteContext";

import { Container, G, R, U, N, N2, E, E2, E3, E4, K, M, I, J, R2, DotNet } from "./NameDiv.styled";

export default function NameDiv() {
  const { sounds, isMuted } = useContext(MuteContext);
  const [hoveredLetter, setHoveredLetter] = useState(null)
  console.log(sounds);
  console.log(isMuted);

  return (
    <Container
      className="nameDiv"
      onMouseEnter={() => {
        if (!isMuted) {
          sounds[3].loop(true);
          sounds[3].play();
          setHoveredLetter(true);

        }
      }}
      onMouseLeave={() => {
        sounds[3].stop();
        setHoveredLetter(null);

      }}
    >
      <G
        className={hoveredLetter === 'G' ? 'hovered' : ''}
        onMouseEnter={() => {
          !isMuted && 
          sounds[2].play();
          setHoveredLetter('G');
        }} onMouseLeave={() => {
          sounds[2].stop();
          setHoveredLetter(null);
        }}
      >
        G
      </G>
      <R
        className={hoveredLetter === 'R' ? 'hovered' : ''}
        onMouseEnter={() => {
          !isMuted && 
          sounds[2].play();
          setHoveredLetter('R');
        }}
        onMouseLeave={() => {
          sounds[2].stop();
          setHoveredLetter(null);
        }}
      >
        R
      </R>
      <U
        className={hoveredLetter === 'U' ? 'hovered' : ''}
        onMouseEnter={() => {
          !isMuted && 
          sounds[2].play();
          setHoveredLetter('U')
        }}
        onMouseLeave={() => {
          sounds[2].stop();
          setHoveredLetter(null);
        }}
      >
        U
      </U>
      <N
        className={hoveredLetter === 'N' ? 'hovered' : ''}
        onMouseEnter={() => {
          !isMuted && 
          sounds[2].play();
          setHoveredLetter('N')
        }}
        onMouseLeave={() => {
          sounds[2].stop();
          setHoveredLetter(null);
        }}
      >
        N
      </N>
      <N2 className={hoveredLetter === 'N2' ? 'hovered' : ''}
        onMouseEnter={() => {
          !isMuted && 
          sounds[2].play();
          setHoveredLetter('N2')
        }} onMouseLeave={() => {
          sounds[2].stop();
          setHoveredLetter(null);
        }}>
        N
      </N2>
      <E className={hoveredLetter === 'E' ? 'hovered' : ''}
        onMouseEnter={() => {
          !isMuted && 
          sounds[2].play();
          setHoveredLetter('E')

        }} onMouseLeave={() => {
          sounds[2].stop();
          setHoveredLetter(null);
        }}>
        E
      </E>
      <K className={hoveredLetter === 'K' ? 'hovered' : ''}
        onMouseEnter={() => {
          !isMuted && 
          sounds[2].play();
          setHoveredLetter('K');
        }} onMouseLeave={() => {
          sounds[2].stop();
          setHoveredLetter(null);
        }}>
        K
      </K>
      <E2 className={hoveredLetter === 'E2' ? 'hovered' : ''}
        onMouseEnter={() => {
          !isMuted && 
          sounds[2].play();
          setHoveredLetter('E2');
        }} onMouseLeave={() => {
          sounds[2].stop();
          setHoveredLetter(null);
        }}>
        E
      </E2>
      <M className={hoveredLetter === 'M' ? 'hovered' : ''}
        onMouseEnter={() => {
          !isMuted && 
          sounds[2].play();
          setHoveredLetter('M');
        }} onMouseLeave={() => {
          sounds[2].stop();
          setHoveredLetter(null);
        }}>
        M
      </M>
      <E3 className={hoveredLetter === 'E3' ? 'hovered' : ''}
        onMouseEnter={() => {
          !isMuted && 
          sounds[2].play();
          setHoveredLetter('E3');
        }} onMouseLeave={() => {
          sounds[2].stop();
          setHoveredLetter(null);
        }}>
        E
      </E3>
      <I className={hoveredLetter === 'I' ? 'hovered' : ''}
        onMouseEnter={() => {
          !isMuted && 
          sounds[2].play();
          setHoveredLetter('I');
        }} onMouseLeave={() => {
          sounds[2].stop();
          setHoveredLetter(null);
        }}>
        I
      </I>
      <J className={hoveredLetter === 'J' ? 'hovered' : ''}
        onMouseEnter={() => {
          !isMuted && 
          sounds[2].play();
          setHoveredLetter('J');
        }} onMouseLeave={() => {
          sounds[2].stop();
          setHoveredLetter(null);
        }}>
        J
      </J>
      <E4 className={hoveredLetter === 'E4' ? 'hovered' : ''}
        onMouseEnter={() => {
          !isMuted && 
          sounds[2].play();
          setHoveredLetter('E4');
        }} onMouseLeave={() => {
          sounds[2].stop();
          setHoveredLetter(null);
        }}>
        E
      </E4>
      <R2 className={hoveredLetter === 'R2' ? 'hovered' : ''}
        onMouseEnter={() => {
          !isMuted && 
          sounds[2].play();
          setHoveredLetter('R2');
        }} onMouseLeave={() => {
          sounds[2].stop();
          setHoveredLetter(null);
        }}>
        R
      </R2>
      <DotNet className={hoveredLetter === 'DotNet' ? 'hovered' : ''}
        onMouseEnter={() => {
          !isMuted && 
          sounds[2].play();
          setHoveredLetter('DotNet')
        }} onMouseLeave={() => {
          sounds[2].stop();
          setHoveredLetter(null);
        }}>.NET</DotNet>
    </Container>
  );
}
