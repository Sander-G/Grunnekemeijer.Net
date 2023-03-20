import React, {useEffect} from 'react'
import { TypeWriter } from '../components/typewriter/TypeWriter'


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
      
        <TypeWriter />
        </>
    )
}
