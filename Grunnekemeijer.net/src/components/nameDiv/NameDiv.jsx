import React, { useState, useEffect, useContext } from 'react';
import { MuteContext } from '../../context/MuteContext';
import soundG from '../../assets/tick.mp3';

import {
  Container,
  G, R, U, N, E, K, M, I, J, DotNet
} from "./NameDiv.styled"

  
export default function NameDiv() {
  const { isMuted } = useContext(MuteContext);
  const [audioG, setAudioG] = useState(new Audio(soundG));

  useEffect (() => {
    if (isMuted) {
      audioG.pause();
    } else {
      audioG.play();
    }
  }, [isMuted, audioG]);
  
console.log(audioG);
console.log(isMuted);

  
  return (
    <Container className='nameDiv'>
      <G className='G'onMouseEnter={() => !isMuted && audioG.play()}>G</G>
      <R className='R'onMouseEnter={() => !isMuted && audioG.play()}>R</R>
      <U className='U'onMouseEnter={() => !isMuted && audioG.play()}>U</U>
      <N className='N1'onMouseEnter={() => !isMuted && audioG.play()}>N</N>
      <N className='N2'onMouseEnter={() => !isMuted && audioG.play()}>N</N>
      <E className='E'onMouseEnter={() => !isMuted && audioG.play()}>E</E>
      <K className='K'onMouseEnter={() => !isMuted && audioG.play()}>K</K>
      <E className='E'onMouseEnter={() => !isMuted && audioG.play()}>E</E>
      <M className='M'onMouseEnter={() => !isMuted && audioG.play()}>M</M>
      <E className='E'onMouseEnter={() => !isMuted && audioG.play()}>E</E>
      <I className='I'onMouseEnter={() => !isMuted && audioG.play()}>I</I>
      <J className='J'onMouseEnter={() => !isMuted && audioG.play()}>J</J>
      <E className='E'onMouseEnter={() => !isMuted && audioG.play()}>E</E>
      <R className='R'onMouseEnter={() => !isMuted && audioG.play()}>R</R>
      <DotNet onMouseEnter={() => !isMuted && audioG.play()}>.NET</DotNet>

    </Container>

  )
};



