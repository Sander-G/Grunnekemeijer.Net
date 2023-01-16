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

    <Container className='nameDiv'>
      <G className='G' onMouseEnter={() => { console.log(sounds[0]); console.log(isMuted); !isMuted && sounds[0].play()}}>G</G>
      <R className='R' onMouseEnter={() => !isMuted && sounds[0].play()}>R</R>
      <U className='U' onMouseEnter={() => !isMuted && sounds[1].play()}>U</U>
      <N className='N1' onMouseEnter={() => !isMuted && sounds[0].play()}>N</N>
      <N className='N2' onMouseEnter={() => !isMuted && sounds[0].play()}>N</N>
      <E className='E' onMouseEnter={() => !isMuted && sounds[1].play()}>E</E>
      <K className='K' onMouseEnter={() => !isMuted && sounds[0].play()}>K</K>
      <E className='E' onMouseEnter={() => !isMuted && sounds[1].play()}>E</E>
      <M className='M' onMouseEnter={() => !isMuted && sounds[0].play()}>M</M>
      <E className='E' onMouseEnter={() => !isMuted && sounds[1].play()}>E</E>
      <I className='I' onMouseEnter={() => !isMuted && sounds[0].play()}>I</I>
      <J className='J' onMouseEnter={() => !isMuted && sounds[1].play()}>J</J>
      <E className='E' onMouseEnter={() => !isMuted && sounds[0].play()}>E</E>
      <R className='R' onMouseEnter={() => !isMuted && sounds[1].play()}>R</R>
      <DotNet onMouseEnter={() => !isMuted && sounds[0].play()}>.NET</DotNet>

    </Container>

  )
};



