import React, { useState, useEffect } from 'react';
import { Wrapper, PromptWrapper } from './ConsolePrompt.styled';
import { useVisitCounter } from '../../hooks/useVisitCounter';
// import Typed from 'react-typed';
// import Writer from '../writer/Writer';

export function ConsolePrompt() {
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
  }, [currentDate]);

  // const [showCommand, setShowCommand] = useState(true);
  // const [showWriter, setShowWriter] = useState(false);

  // const handleTypedComplete = () => {
  //   setTimeout(() => {
  //     setShowCommand(false);
  //   }, 2000);
  //   setTimeout(() => {
  //     setShowWriter(true);
  //   }, 2500);
  // };
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
        <span className='terminal'>S:\&nbsp;</span>
        {/* {showCommand && (
          <span>
            <Typed strings={['Informatie.exe']} typeSpeed={50} backSpeed={0} startDelay={2000} backDelay={2500} onComplete={handleTypedComplete} cursorChar='|' loopCount={0} className='terminal' />
          </span>
        )} */}
      </PromptWrapper>

      {/* {showWriter && <Writer />} */}
    </>
  );
}
