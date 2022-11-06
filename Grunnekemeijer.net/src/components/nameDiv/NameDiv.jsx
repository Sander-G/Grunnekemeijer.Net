import React from 'react'
import UIfx from 'uifx'
import tickMp3 from './../../assets/tick.mp3'

import {
  Container,
  G, R, U, N, E, K, M, I, J, DotNet
} from "./NameDiv.styled"

export default function NameDiv() {

  const tick = new UIfx(
    tickMp3,
    {
      volume: 0.5, // value must be between 0.0 ⇔ 1.0
      throttleMs: 50
    }
  )


  return (
    <Container className='nameDiv'>

      <G className='G' onMouseOver={tick.play}>G</G>
      <R className='R'>R</R>
      <U className='U'>U</U>
      <N className='N1'>N</N>
      <N className='N2'>N</N>
      <E className='E'>E</E>
      <K className='K'>K</K>
      <E className='E'>E</E>
      <M className='M'>M</M>
      <E className='E'>E</E>
      <I className='I'>I</I>
      <J className='J'>J</J>
      <E className='E'>E</E>
      <R className='R'>R</R>
      <DotNet>.NET</DotNet>

    </Container>

  )
};



