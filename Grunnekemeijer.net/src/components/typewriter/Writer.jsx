import React, { useState, useEffect, useRef } from 'react';
import Typed from 'react-typed';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 1rem;
  color: currentColor;
  font-family: clacon2;
  line-height: 1;
`;


export default function Writer() {
  const [lines, setLines] = useState(['This is the first line of text.', '', '']);
  const [instantType, setInstantType] = useState(false);
  const typedRef = useRef(null);
  const timeoutIdsRef = useRef([]);

  useEffect(() => {
    if (typedRef.current) {
      typedRef.current.typed.reset();
      timeoutIdsRef.current.push(
        setTimeout(() => {
          setLines(['This is the first line of text.', 'This is the second line of text.', '']);
        }, 5000)
      );
      timeoutIdsRef.current.push(
        setTimeout(() => {
          setLines(['This is the first line of text.', 'This is the second line of text.', 'This is the third line of text.']);
        }, 10000)
      );
    }
  }, []);

  const handleInstantType = () => {
    setInstantType(true);
    setLines(['This is the first line of text.', 'This is the second line of text.', 'This is the third line of text.']);
    timeoutIdsRef.current.forEach(clearTimeout);
  };

  return (
    <>
      {instantType ? (
        <Container>
          <div>{lines[0]}</div>
          <div>{lines[1]}</div>
          <div>{lines[2]}</div>

          {/* blinking cursor hier toevoegen. */}
        </Container>
      ) : (
        <Container>
          <Container>
            <button onClick={handleInstantType}>Cut to the chase</button>
          </Container>
        
            <Typed
              strings={[lines[0]]}
              typeSpeed={40}
              backSpeed={50}
              loop={false}
              shuffle={false}
              backDelay={1500}
              fadeOut={false}
              smartBackspace={true}
              showCursor={false}
              ref={typedRef}
           
            />
            <br />
            <Typed
              strings={[lines[1]]}
              typeSpeed={40}
              backSpeed={50}
              loop={false}
              shuffle={false}
              backDelay={1500}
              fadeOut={false}
              smartBackspace={true}
              startDelay={5500}
              showCursor={false}
           
            />
            <br />
            <Typed
              strings={[lines[2]]}
             
              typeSpeed={40}
              backSpeed={50}
              loop={false}
              shuffle={false}
              backDelay={1500}
              fadeOut={false}
              smartBackspace={true}
              startDelay={10500}
              showCursor={false}
            />
        
        </Container>
      )}
    </>
  );
}
