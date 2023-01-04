import React from 'react';
import UIFx from 'uifx';
import sound from '../../assets/tick.mp3';
import {
  Container,
  G, R, U, N, E, K, M, I, J, DotNet
} from "./NameDiv.styled"

export default function NameDiv() {

let beep = new UIFx(sound)


  return (
    <Container className='nameDiv'>
      <G className='G'onMouseEnter={()=>beep.play()}>G</G>
      <R className='R'onMouseEnter={()=>beep.play()}>R</R>
      <U className='U'onMouseEnter={()=>beep.play()}>U</U>
      <N className='N1'onMouseEnter={()=>beep.play()}>N</N>
      <N className='N2'onMouseEnter={()=>beep.play()}>N</N>
      <E className='E'onMouseEnter={()=>beep.play()}>E</E>
      <K className='K'onMouseEnter={()=>beep.play()}>K</K>
      <E className='E'onMouseEnter={()=>beep.play()}>E</E>
      <M className='M'onMouseEnter={()=>beep.play()}>M</M>
      <E className='E'onMouseEnter={()=>beep.play()}>E</E>
      <I className='I'onMouseEnter={()=>beep.play()}>I</I>
      <J className='J'onMouseEnter={()=>beep.play()}>J</J>
      <E className='E'onMouseEnter={()=>beep.play()}>E</E>
      <R className='R'onMouseEnter={()=>beep.play()}>R</R>
      <DotNet onMouseEnter={()=>beep.play()}>.NET</DotNet>

    </Container>

  )
};



