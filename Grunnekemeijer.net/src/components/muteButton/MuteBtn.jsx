import React,{ useContext } from 'react'
import { Wrapper, MuteButton } from './muteBtn.styled'
import { MuteContext } from '../../context/MuteContext';




export default function MuteBtn() {
  const { isMuted, toggleMute, sounds } =
   useContext(MuteContext);



  function handleClick() {
   toggleMute();    
  }



    return (
        <>
            <Wrapper>
                    <MuteButton onClick={()=> {
                      handleClick();
                      !isMuted && 
          sounds[1].play();
                      }} onMouseEnter={() => {
          !isMuted && 
          
          sounds[0].play();

        }} onMouseLeave={() => {
          sounds[0].stop();

        }}>
                        {isMuted ? (
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="22px" width="22px" aria-labelledby="Geluid uit" xmlns="http://www.w3.org/2000/svg"><title lang="nl">Geluid aan</title><path fillRule="evenodd" clipRule="evenodd" d="M1.5 5h2.79l3.86-3.83.85.35v13l-.85.33L4.29 11H1.5l-.5-.5v-5l.5-.5zm3.35 5.17L8 13.31V2.73L4.85 5.85 4.5 6H2v4h2.5l.35.17zm9.381-4.108l.707.707L13.207 8.5l1.731 1.732-.707.707L12.5 9.207l-1.732 1.732-.707-.707L11.793 8.5 10.06 6.77l.707-.707 1.733 1.73 1.731-1.731z"></path></svg>
                        ) : (
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="22px" width="22px" aria-labelledby="Geluid aan" xmlns="http://www.w3.org/2000/svg"><title lang="nl">Geluid uit</title><path fillRule="evenodd" clipRule="evenodd" d="M1.5 4.83h2.79L8.15 1l.85.35v13l-.85.33-3.86-3.85H1.5l-.5-.5v-5l.5-.5zM4.85 10L8 13.14V2.56L4.85 5.68l-.35.15H2v4h2.5l.35.17zM15 7.83a6.97 6.97 0 0 1-1.578 4.428l-.712-.71A5.975 5.975 0 0 0 14 7.83c0-1.4-.48-2.689-1.284-3.71l.712-.71A6.971 6.971 0 0 1 15 7.83zm-2 0a4.978 4.978 0 0 1-1.002 3.004l-.716-.716A3.982 3.982 0 0 0 12 7.83a3.98 3.98 0 0 0-.713-2.28l.716-.716c.626.835.997 1.872.997 2.996zm-2 0c0 .574-.16 1.11-.44 1.566l-.739-.738a1.993 1.993 0 0 0 .005-1.647l.739-.739c.276.454.435.988.435 1.558z"></path></svg>
                        )}
                    </MuteButton>
             
            </Wrapper>
        </>
    )
}
