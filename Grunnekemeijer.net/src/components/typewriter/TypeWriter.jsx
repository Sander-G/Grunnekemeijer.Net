import React, { useState, useEffect,  } from 'react';
import TypeIt from 'typeit-react';
import axios from 'axios';
import { Wrapper } from './TypeWriter.styled';
import { useVisitCounter } from '../visitcounter/useVisitCounter';

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
      const res = await axios.get('http://www.geolocation-db.com/json/');
      setIp(res.data.IPv4);
      localStorage.setItem('lastVisit', JSON.stringify(currentDate));
      localStorage.setItem('lastIp', JSON.stringify(res.data.IPv4));
  
      console.log('after fetch', lastIpAddress, lastVisit, visitCount);
    };
    getData();
  }, [currentDate]);

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
      <Wrapper>
        <span className='terminal'>S:\&nbsp; </span>
        {/* <TypeIt
          className='terminal'
          options={{
            strings: ['load info.bat '],
            speed: 1,
            waitUntilVisible: true,
          }}
        /> */}
        <TypeIt
          className='terminal'
          options={{
            speed: 1,
            lifeLike: true,
            waitUntilVisible: true,
          }}
          getBeforeInit={(instance) => {
            instance
              .type('l')
              .pause(111)
              .type('o')
              .pause(144)
              .type('a')
              .pause(160)
              .type('d')
              .pause(204)
              .type(' ')
              .pause(160)
              .type('i')
              .pause(128)
              .type('n')
              .pause(184)
              .type('f')
              .pause(96)
              .type('o')
              .pause(176)
              .type('.')
              .pause(132)
              .type('b')
              .pause(160)
              .type('a')
              .pause(144)
              .type('t')
              .pause(432)
              .break()
              .go();
            return instance;
          }}
        />

        {/* <TypeIt className='terminal'
                    getBeforeInit={(instance) => {
                        instance.type('And now for something completely').pause(300).delete(10).pause(800).type('not so completely different.')
                        ;
                        return instance;
                    }}

                /> */}

        {/* <TypeIt
          className='terminal'
          options={{
            strings: [
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at dignissimos veritatis qui veniam temporibus velit placeat! Suscipit libero laudantium commodi vel excepturi non, reiciendis delectus velit expedita deleniti cum. Vero debitis aliquam amet possimus repellat ut, odio accusantium eos nisi molestias laudantium. Veritatis molestias eveniet vel neque molestiae nostrum ipsum omnis voluptates facere quo animi, doloribus, dignissimos dolore quidem eligendi error necessitatibus. Corrupti assumenda provident delectus placeat quasi tenetur voluptate cupiditate ut explicabo, exercitationem soluta id sed nisi ullam.',
            ],
            speed: 1,
            waitUntilVisible: true,
          }}
        /> */}
      </Wrapper>
    </>
  );
}
