import React, { useState, useEffect, useRef } from 'react';
import Typed from 'react-typed';

export default function Writer() {
  const [lines, setLines] = useState(['This is the first line of text.', '', '']);
  const typedRef = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      typedRef.current.typed.reset();
      setTimeout(() => {
        setLines(['This is the first line of text.', 'This is the second line of text.', '']);
      }, 5000);
      setTimeout(() => {
        setLines(['This is the first line of text.', 'This is the second line of text.', 'This is the third line of text.']);
      }, 10000);
    }
  }, []);

  const resetAnimation = () => {
    if (typedRef.current) {
      typedRef.current.typed.reset();
      setLines(['This is the first line of text.', '', '']);
      setTimeout(() => {
        setLines(['This is the first line of text.', 'This is the second line of text.', '']);
      }, 5000);
      setTimeout(() => {
        setLines(['This is the first line of text.', 'This is the second line of text.', 'This is the third line of text.']);
      }, 10000);
    }
  };

  return (
    <>
      <Typed strings={[lines[0]]} typeSpeed={40} backSpeed={50} loop={false} shuffle={false} backDelay={1500} fadeOut={false} smartBackspace={true} showCursor={false} ref={typedRef} />
      <br />
      <Typed strings={[lines[1]]} typeSpeed={40} backSpeed={50} loop={false} shuffle={false} backDelay={1500} fadeOut={false} smartBackspace={true} startDelay={5500} showCursor={false} />
      <br />
      <Typed strings={[lines[2]]} typeSpeed={40} backSpeed={50} loop={false} shuffle={false} backDelay={1500} fadeOut={false} smartBackspace={true} startDelay={10500} showCursor={false} />
      <br />
    
    </>
  );
}
