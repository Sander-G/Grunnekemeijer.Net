import React from 'react'
import { Container, 
  G,R,U,N,E,K,M,I,J, DotNet} from "./NameDiv.styled"

export default function NameDiv() {

const title = document.querySelector('.shadow_txt')

// licht
document.onmousemove = function(e) {
  let x = e.pageX - window.innerWidth/2;
  let y = e.pageY - window.innerHeight/2;

  title.style.setProperty('--x', x + 'px')
  title.style.setProperty('--y', y + 'px')
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
    <Container className='shadow_txt'>
    
    <G>G</G>
    <R>R</R>
    <U>U</U>
    <N>N</N>
    <N>N</N>
    <E>E</E> 
    <K>K</K>
    <E>E</E>
    <M>M</M>
    <E>E</E>
    <I>I</I>
    <J>J</J>
    <E>E</E>
    <R>R</R>
    <DotNet>.NET</DotNet>
    </Container>

  )
};



