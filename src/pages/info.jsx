import React, {useEffect} from 'react'
import {ConsolePrompt} from '../components/console/ConsolePrompt'




export default function Info() {
    useEffect(() => {
      document.removeEventListener('touchmove', preventDefault);
    }, []);

    function preventDefault(e) {
      e.preventDefault();
    }


    return (
      <>
     
          <ConsolePrompt />

      </>
    );
}


