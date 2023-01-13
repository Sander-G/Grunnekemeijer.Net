import React, { useContext } from 'react';
import { MuteContext } from '../../context/MuteContext';


import {
  Container,
  G, R, U, N, E, K, M, I, J, DotNet
} from "./NameDiv.styled"


export default function NameDiv() {

  const { audio, isMuted } = useContext(MuteContext);



  console.log(audio);
  console.log(isMuted);


  return (
    
      <Container className='nameDiv'>
        <G className='G' onMouseEnter={() => {console.log(audio);console.log(isMuted);!isMuted && audio.play();}}>G</G>
        <R className='R' onMouseEnter={() => {if(!isMuted) {
          setTimeout(() => {
          audio.play();
        }, 100);
        }
}}>R</R>
        <U className='U' onMouseEnter={() => !isMuted && audio.play()}>U</U>
        <N className='N1' onMouseEnter={() => !isMuted && audio.play()}>N</N>
        <N className='N2' onMouseEnter={() => !isMuted && audio.play()}>N</N>
        <E className='E' onMouseEnter={() => !isMuted && audio.play()}>E</E>
        <K className='K' onMouseEnter={() => !isMuted && audio.play()}>K</K>
        <E className='E' onMouseEnter={() => !isMuted && audio.play()}>E</E>
        <M className='M' onMouseEnter={() => !isMuted && audio.play()}>M</M>
        <E className='E' onMouseEnter={() => !isMuted && audio.play()}>E</E>
        <I className='I' onMouseEnter={() => !isMuted && audio.play()}>I</I>
        <J className='J' onMouseEnter={() => !isMuted && audio.play()}>J</J>
        <E className='E' onMouseEnter={() => !isMuted && audio.play()}>E</E>
        <R className='R' onMouseEnter={() => !isMuted && audio.play()}>R</R>
        <DotNet onMouseEnter={() => !isMuted && audio.play()}>.NET</DotNet>

      </Container>
  
  )
};



