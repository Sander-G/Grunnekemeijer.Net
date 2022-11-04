import React from 'react'
import { Container, 
  G,R,U,N,E,K,M,I,J, DotNet} from "./NameDiv.styled"

export default function NameDiv() {

const title = document.querySelector('.shadow_txt')

// licht
document.onmousemove = function(e) {
  let x = e.pageX - window.innerWidth/2;
  let y = e.pageY - window.innerHeight/2;

  // title.style.setProperty('--x', x + 'px')
  // title.style.setProperty('--y', y + 'px')
}

// schaduw

// title.onmousemove = function(e) {
//   let x = e.pageX - window.innerWidth/2;
//   let y = e.pageY - window.innerHeight/2;

//   let rad = Math.atan2(y, x).toFixed(2); 
//   let length = Math.round(Math.sqrt((Math.pow(x,2))+(Math.pow(y,2)))/10); 

//   let x_shadow = Math.round(length * Math.cos(rad));
//   let y_shadow = Math.round(length * Math.sin(rad));

//   title.style.setProperty('--x-shadow', - x_shadow + 'px')
//   title.style.setProperty('--y-shadow', - y_shadow + 'px')

// }


  return (
    <Container className='nameDiv'>
    
    <G className='shadow_txt'>G</G>
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



