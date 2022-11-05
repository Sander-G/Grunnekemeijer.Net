import React from 'react'
import {Wrapper, FlashlightButton} from './Flashlight.styled'
import flashlight from './../../assets/flashlight.png'

export default function Flashlight() {
  

  return (
    <>  
    <Wrapper>
    <FlashlightButton>
    <img src={flashlight} />
   
    </FlashlightButton>
    </Wrapper>
    </>
  )
}
