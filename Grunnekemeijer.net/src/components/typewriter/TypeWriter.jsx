import React from 'react';
import TypeIt from 'typeit-react';
import styled from 'styled-components';
import axios from 'axios'
import { useState, useEffect } from 'react'

export function TypeWriter() {
    const weekDay = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    const monthName = ['Jan', 'Feb','Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep', 'Oct', 'Nov', 'Dec'];
 
    const [currentDate, setCurrentDate] = useState('');
    const [lastVisit, setLastVisit] = useState('');
    const [ip, setIp] = useState('');
    const [dataLoaded, setDataLoaded] = useState(false);
    const [visitCount, setVisitCount] = useState(0);
     
    const getOrdinal = (n) => {
       const visitString = n.toString();
       const lastDigit = parseInt(visitString[visitString.length - 1]);
       switch (lastDigit) {
         case 1:
           return visitString + "st";
         case 2:
           return visitString + "nd";
         case 3:
           return visitString + "rd";
         default:
           return visitString + "th";
       }
     };

  

    useEffect(() => {
       const storedVisitCount = localStorage.getItem("visitCount");
       if (storedVisitCount) {
         setVisitCount(parseInt(storedVisitCount));
       }
        const d = new Date();
        const day = weekDay[d.getDay()];
        const m = new Date();
        const month = monthName[m.getMonth()]
        const date = new Date().getDate(); 
        const hours = new Date().getHours(); 
        const min = new Date().getMinutes();
        const sec = new Date().getSeconds(); 
        const minutes = ('0' + min).slice(-2);
        const seconds = ('0' + sec).slice(-2);
       

        setCurrentDate(
            day + ' ' + month + ' ' + date 
            + ' ' + hours + ':' + minutes + ':' + seconds
        ) ;
       
   
        const lastVisitDate = JSON.parse(localStorage.getItem("lastVisit"));
        const lastIpAddress = JSON.parse(localStorage.getItem("lastIp"));

        if (lastVisitDate) {
          setLastVisit(lastVisitDate);
        } else {
          setLastVisit("");
        }

        if (lastIpAddress) {
          setIp(lastIpAddress);
        }

        const getData = async (count) => {
          const res = await axios.get("http://www.geolocation-db.com/json/");
          setIp(res.data.IPv4);
          setDataLoaded(true);
          localStorage.setItem("lastVisit", JSON.stringify(currentDate));
          localStorage.setItem("lastIp", JSON.stringify(res.data.IPv4));
          setVisitCount(count + 1);
          localStorage.setItem("visitCount", count + 1);
        };

        if (!lastVisitDate) {
          getData(visitCount);
        }
      }, []);


    return (
      <>
        <Wrapper>
        {dataLoaded && (lastVisit ? (

          
            <span className="terminal">
              You were last here on {lastVisit} from {ip}
            </span>
          ) : (
            <span className="terminal">
              This is your first visit, your IP number is: {ip}
            </span>
          ))}
        </Wrapper> 
        <Wrapper>
          <span className="terminal">S:\&nbsp; </span>
          {/* <TypeIt className='terminal'
                    getBeforeInit={(instance) => {
                        instance.type('And now for something completely').pause(300).delete(10).pause(800).type('not so completely different.')
                        ;
                        return instance;
                    }}

                /> */}

          <TypeIt
            className="terminal"
            options={{
              strings: [
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at dignissimos veritatis qui veniam temporibus velit placeat! Suscipit libero laudantium commodi vel excepturi non, reiciendis delectus velit expedita deleniti cum. Vero debitis aliquam amet possimus repellat ut, odio accusantium eos nisi molestias laudantium. Veritatis molestias eveniet vel neque molestiae nostrum ipsum omnis voluptates facere quo animi, doloribus, dignissimos dolore quidem eligendi error necessitatibus. Corrupti assumenda provident delectus placeat quasi tenetur voluptate cupiditate ut explicabo, exercitationem soluta id sed nisi ullam.",
              ],
              speed: 1,
              waitUntilVisible: true,
            }}
          />
        </Wrapper>
      </>
    );
}

const Wrapper = styled.div`
 display: flex;
 align-items: center;
 flex-direction: row;
 padding: 0.25em 1rem;
 
    align-items: baseline;
    justify-content: flex-start;
    text-align: left;
    line-height: 1;
    letter-spacing: 0.8;
    `
