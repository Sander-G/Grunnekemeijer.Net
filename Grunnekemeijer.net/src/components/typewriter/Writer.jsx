import React, { useState, useEffect, useRef } from 'react';
import Typed from 'react-typed';
import { Container, Button, ButtonWrapper, BlinkingCursor, Row } from './Writer.styled';
import Heatmap from '../heatmap/Heatmap.jsx'
import TimeDifference from './TimeDifference';

export default function Writer() {
  const { years, months, weeks, days, hours } = TimeDifference();
  const [lines, setLines] = useState([`This is the first line ${years} ${months} ${weeks} ${days} ${hours} of text.`, '', '']);
  const [instantType, setInstantType] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [typingCompleted, setTypingCompleted] = useState(false);
  const typedRef = useRef(null);
  const timeoutIdsRef = useRef([]);

  

  useEffect(() => {
    if (typedRef.current) {
      typedRef.current.typed.reset();
      timeoutIdsRef.current.push(
        setTimeout(() => {
          setLines(['This is the first line of text.', 'This is the second line of text.', '']);
        }, 4000)
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
    setShowButton(false);
    setLines([`This is the first line ${years} ${months} ${weeks} ${days} ${hours} of text.`, 'This is the second line of text.', 'This is the third line of text.']);
    timeoutIdsRef.current.forEach(clearTimeout);
  };

  const handleTypingComplete = () => {
    setShowButton(false);
    setTypingCompleted(true);
  };

  return (
    <>
      {instantType ? (
        <Container>
          <div>{lines[0]}</div>
          <div>{lines[1]}</div>
          <Row>
            <div>{lines[2]}</div>
            <BlinkingCursor />
          </Row>
        </Container>
      ) : (
        <Container>
          {typingCompleted ? null : (
            <ButtonWrapper show={showButton}>
              <Button onClick={handleInstantType}>Cut to the chase</Button>
            </ButtonWrapper>
          )}

          <Typed
            strings={[lines[0]]}
            typeSpeed={30}
            backSpeed={50}
            loop={false}
            shuffle={false}
            backDelay={1500}
            fadeOut={false}
            smartBackspace={true}
            showCursor={false}
            ref={typedRef}
            startDelay={500}
          />

          <Typed strings={[lines[1]]} typeSpeed={30} backSpeed={50} loop={false} shuffle={false} backDelay={1500} fadeOut={false} smartBackspace={true} startDelay={5500} showCursor={false} />
          <Row>
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
              onComplete={handleTypingComplete}
            />
            {!typingCompleted ? null : <BlinkingCursor />}
          </Row>
        </Container>
      )}
      <ButtonWrapper show={showButton}>
        <Heatmap />
      </ButtonWrapper>
    </>
  );
}
