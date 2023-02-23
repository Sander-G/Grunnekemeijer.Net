import React, { useState, useEffect, useRef } from 'react';
import TypeIt from 'typeit-react';
import axios from 'axios';
import { Wrapper } from './TypeWriter.styled';









export function TypeWriter() {
  const weekDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const [currentDate, setCurrentDate] = useState('');
  const [lastVisit, setLastVisit] = useState('');
  const [ip, setIp] = useState('');
  const [count, setCount] = useState(0);
  const visitCountRef = useRef(parseInt(localStorage.getItem('visitCount') ?? '0'));


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

  useEffect(() => {
    const lastVisitDate = JSON.parse(localStorage.getItem('lastVisit'));
    const lastIpAddress = JSON.parse(localStorage.getItem('lastIp'));
     console.log('onload', lastVisitDate);
     console.log('onload', lastIpAddress);
   
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
      console.log(lastVisit);
      console.log('after fetch', lastIpAddress);
      console.log('after fetch', visitCountRef);
    };
    getData();
  }, [ currentDate]);


  useEffect(() => {
    visitCountRef.current +=1;
    localStorage.setItem('visitCount', visitCountRef.current);
   
  }, []); 

  const VisitCount = localStorage.getItem('visitCount');
  

  return (
    <>
      <Wrapper>
        {lastVisit ? (
          <span className='terminal'>
            You were last here on {lastVisit} from {ip}, this is your {VisitCount} time here.
          </span>
        ) : (
          <span className='terminal'>This is your first visit, your IP number is: {ip}</span>
        )}
      </Wrapper>
      <Wrapper>
        <span className='terminal'>S:\&nbsp; </span>
        {/* <TypeIt className='terminal'
                    getBeforeInit={(instance) => {
                        instance.type('And now for something completely').pause(300).delete(10).pause(800).type('not so completely different.')
                        ;
                        return instance;
                    }}

                /> */}

        <TypeIt
          className='terminal'
          options={{
            strings: [
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at dignissimos veritatis qui veniam temporibus velit placeat! Suscipit libero laudantium commodi vel excepturi non, reiciendis delectus velit expedita deleniti cum. Vero debitis aliquam amet possimus repellat ut, odio accusantium eos nisi molestias laudantium. Veritatis molestias eveniet vel neque molestiae nostrum ipsum omnis voluptates facere quo animi, doloribus, dignissimos dolore quidem eligendi error necessitatibus. Corrupti assumenda provident delectus placeat quasi tenetur voluptate cupiditate ut explicabo, exercitationem soluta id sed nisi ullam.',
            ],
            speed: 1,
            waitUntilVisible: true,
          }}
        />
      </Wrapper>
    </>
  );
}
