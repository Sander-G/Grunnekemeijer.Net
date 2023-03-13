import React, { useState, useEffect, } from 'react';
import { Wrapper, PromptWrapper, Container, TextBlock, Button } from './TypeWriter.styled';
import { useVisitCounter } from '../../hooks/useVisitCounter';
import { Typewriter } from 'react-simple-typewriter';



export function TypeWriter() {
  const [currentDate, setCurrentDate] = useState('');
  const [lastVisit, setLastVisit] = useState('');
  const [ip, setIp] = useState('');
  const visitCount = useVisitCounter();
  const weekDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  useEffect(() => {
    const d = new Date();
    const day = weekDay[d.getDay()];
    const m = new Date();
    const month = monthName[m.getMonth()];
    const date = new Date().getDate();
    const hours = new Date().getHours();
    const min = new Date().getMinutes();
    const sec = new Date().getSeconds();
    const minutes = ('0' + min).slice(-2);
    const seconds = ('0' + sec).slice(-2);

    setCurrentDate(day + ' ' + month + ' ' + date + ' ' + hours + ':' + minutes + ':' + seconds);
  }, []);

  const getOrdinal = (n) => {
    const visitString = n.toString();
    const lastTwoDigits = parseInt(visitString.slice(-2));
    const lastDigit = parseInt(visitString.slice(-1));
    //exception for 11, 12, and 13
    if (lastTwoDigits === 11 || lastTwoDigits === 12 || lastTwoDigits === 13) {
     return visitString + 'th';
   }
   switch (lastDigit) {
     case 1:
       return visitString + 'st';
     case 2:
       return visitString + 'nd';
     case 3:
       return visitString + 'rd';
     default:
       return visitString + 'th';
   }
 };

 
  useEffect(() => {
    const lastVisitDate = JSON.parse(localStorage.getItem('lastVisit'));
    const lastIpAddress = JSON.parse(localStorage.getItem('lastIp'));

     console.log('onload', lastIpAddress, lastVisit, visitCount);

    if (lastVisitDate) {
      setLastVisit(lastVisitDate);
    }
    if (lastIpAddress) {
      setIp(lastIpAddress);
    }
    
    const getData = async () => {
      try {
        const response = await fetch('https://api.ipify.org');
        const ipAddress = await response.text();
        setIp(ipAddress);
        localStorage.setItem('lastVisit', JSON.stringify(currentDate));
        localStorage.setItem('lastIp', JSON.stringify(ipAddress));
      } catch (error) {
        console.log('Error fetching IP address:', error);
      }
    };
    getData();
    console.log('after fetch', lastIpAddress, ip, lastVisit, visitCount);
  }, [currentDate]);

  const [showLine1, setShowLine1] = useState(false);
  const [showLine2, setShowLine2] = useState(false);
  const [showLine3, setShowLine3] = useState(false);
  const [showAllText, setShowAllText] = useState(false);

useEffect(() => {
  setShowLine1(true);
}, []);


   

  return (
    <>
      <Wrapper>
        {lastVisit ? (
          <span className='terminal'>
            You were last here on {lastVisit} from {ip}, this is your {getOrdinal(visitCount)} visit.
          </span>
        ) : (
          <span className='terminal'>This is your first visit, your IP number is: {ip}.</span>
        )}
      </Wrapper>

      <PromptWrapper>
        <span className='terminal'>S:\ </span>
      </PromptWrapper>

      <Container>
        <TextBlock>
          <Typewriter words={['Line 1 text']} loop={false} cursor={true} cursorStyle='_' typeSpeed={70} onTypingEnd={() => setShowLine1(true)} />
          {showLine1 && (
            <>
              <div>
                <Typewriter words={['Line 2 text']} loop={false} cursor={true} cursorStyle='_' typeSpeed={70} onTypingEnd={() => setShowLine2(true)} />
              </div>
            </>
          )}
          {showLine2 && (
            <>
              <div>
                <Typewriter words={['Line 3 text']} loop={false} cursor={true} cursorStyle='_' typeSpeed={70} onTypingEnd={() => setShowLine3(true)} />
              </div>
            </>
          )}
          {showLine3 && (
            <>
              <div>
                This is the end of the typing.
                <span style={{ visibility: 'hidden' }}>_</span>
              </div>
            </>
          )}
          {!showAllText && showLine3 && (
            <div>
              <button onClick={() => setShowAllText(true)}>Show all text</button>
            </div>
          )}
          {showAllText && (
            <>
              <div>Line 1 text</div>
              <div>Line 2 text</div>
              <div>Line 3 text</div>
            </>
          )}
        </TextBlock>
      </Container>
      <Button onClick={() => setShowLine3(true)}>Show All</Button>
    </>
  );
}
