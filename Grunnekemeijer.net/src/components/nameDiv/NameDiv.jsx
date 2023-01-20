import React, { useContext } from 'react';
import { MuteContext } from '../../context/MuteContext';


import {
  Container,
  G, R, U, N, E, K, M, I, J, DotNet
} from "./NameDiv.styled"


export default function NameDiv() {

  const { sounds, isMuted } = useContext(MuteContext);



  console.log(sounds);
  console.log(isMuted);


  return (

    <Container className='nameDiv' 
    onMouseEnter={() => {
      if (!isMuted) { 
      sounds[3].loop(true);
      sounds[3].volume(0.5);
      sounds[3].play();
      }
    }
    }
    onMouseLeave={() => {
      sounds[3].stop();
    }
    }
    >
      <G className='G' onMouseEnter={() => { console.log(sounds[4]); console.log(isMuted); !isMuted && sounds[4].play()}}>G</G>
      <R className='R' onMouseEnter={() => !isMuted && sounds[5].play()} onMouseLeave={() => {
      sounds[5].stop()}}>R</R>
      <U className='U' onMouseEnter={() => !isMuted && sounds[6].play()}>U</U>
      <N className='N1' onMouseEnter={() => !isMuted && sounds[7].play()}>N</N>
      <N className='N2' onMouseEnter={() => !isMuted && sounds[8].play()}>N</N>
      <E className='E' onMouseEnter={() => !isMuted && sounds[9].play()}>E</E>
      <K className='K' onMouseEnter={() => !isMuted && sounds[10].play()}>K</K>
      <E className='E' onMouseEnter={() => !isMuted && sounds[11].play()}>E</E>
      <M className='M' onMouseEnter={() => !isMuted && sounds[12].play()}>M</M>
      <E className='E' onMouseEnter={() => !isMuted && sounds[13].play()}>E</E>
      <I className='I' onMouseEnter={() => !isMuted && sounds[14].play()}>I</I>
      <J className='J' onMouseEnter={() => !isMuted && sounds[15].play()}>J</J>
      <E className='E' onMouseEnter={() => !isMuted && sounds[16].play()}>E</E>
      <R className='R' onMouseEnter={() => !isMuted && sounds[17].play()}>R</R>
      <DotNet onMouseEnter={() => !isMuted && sounds[18].play()}>.NET</DotNet>

    </Container>

  )
};



