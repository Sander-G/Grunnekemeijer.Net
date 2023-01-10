import React, {useEffect, useState, useContext} from 'react';
import { MuteContext } from '../../context/MuteContext';
import UIFx from 'uifx';
import sound from '../../assets/tick.mp3';

import {
  Container,
  G, R, U, N, E, K, M, I, J, DotNet
} from "./NameDiv.styled"



export default function NameDiv() {

  const [isMuted, setIsMuted] = useState(true);
  const { state } = useContext(MuteContext);

  useEffect (() => {
    setIsMuted(state);
}, [state]);
  
let beep;
  useEffect(() => { 
   beep = new UIFx(sound);
  }, []);
  
  return (
    <Container className='nameDiv'>
      <G className='G'onMouseEnter={() => !isMuted && beep.play()}>G</G>
      <R className='R'onMouseEnter={() => !isMuted && beep.play()}>R</R>
      <U className='U'onMouseEnter={() => !isMuted && beep.play()}>U</U>
      <N className='N1'onMouseEnter={() => !isMuted && beep.play()}>N</N>
      <N className='N2'onMouseEnter={() => !isMuted && beep.play()}>N</N>
      <E className='E'onMouseEnter={() => !isMuted && beep.play()}>E</E>
      <K className='K'onMouseEnter={() => !isMuted && beep.play()}>K</K>
      <E className='E'onMouseEnter={() => !isMuted && beep.play()}>E</E>
      <M className='M'onMouseEnter={() => !isMuted && beep.play()}>M</M>
      <E className='E'onMouseEnter={() => !isMuted && beep.play()}>E</E>
      <I className='I'onMouseEnter={() => !isMuted && beep.play()}>I</I>
      <J className='J'onMouseEnter={() => !isMuted && beep.play()}>J</J>
      <E className='E'onMouseEnter={() => !isMuted && beep.play()}>E</E>
      <R className='R'onMouseEnter={() => !isMuted && beep.play()}>R</R>
      <DotNet onMouseEnter={() => !isMuted && beep.play()}>.NET</DotNet>

    </Container>

  )
};



