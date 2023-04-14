import React, {useEffect} from 'react'
import {ConsolePrompt} from '../components/console/ConsolePrompt'



export default function Info() {
  useEffect(() => {
    document.addEventListener('touchmove', preventDefault, { passive: false });

    return () => {
      document.removeEventListener('touchmove', preventDefault);
    };
  }, []);

  function preventDefault(e) {
    e.preventDefault();
  }


    return (
        <>
      
        <ConsolePrompt />
       
    

        </>


    )
}
