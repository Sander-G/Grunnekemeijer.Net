import React from 'react';
import TypeIt from 'typeit-react';
import styled from 'styled-components';
import axios from 'axios'
import { useState, useEffect } from 'react'








export default function TypeWriter() {
    const weekDay = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const monthName = ["Jan", "Feb","Mar", "Apr", "May", "Jun", "Jul", "Aug","Sep", "Oct", "Nov", "Dec"]
 
    const [currentDate, setCurrentDate] = useState('');
    useEffect(() => {
        const d = new Date();
        let day = weekDay[d.getDay()];
        const m = new Date();
        let month = monthName[m.getMonth()]
        const date = new Date().getDate(); //Current Date
       
   

        const hours = new Date().getHours(); //Current Hours
        const min = new Date().getMinutes(); //Current Minutes
        const sec = new Date().getSeconds(); //Current Seconds
       

        setCurrentDate(
            day + ' ' + month + ' ' + date 
            + ' ' + hours + ':' + min + ':' + sec
        );
    }, []);


    const [ip, setIp] = useState('');
    //creating function to load ip address from the API
    const getData = async () => {
        const res = await axios.get('https://geolocation-db.com/json/')
        console.log(res.data);
        setIp(res.data.IPv4)
    }
    useEffect(() => {
        //passing getData method to the lifecycle method
        getData()
    }, [])

    return (

        <>
            <Wrapper>
                <span className='terminal'>Last Check-in: {currentDate} from {ip} </span>
            </Wrapper>
            <Wrapper>

                <span className='terminal'>SG:\&nbsp; </span>
                <TypeIt className="terminal"
                    getBeforeInit={(instance) => {
                        instance.type("And now for something completely").pause(300).delete(10).pause(800).type("not so completely different.");
                        return instance;
                    }}

                />

            </Wrapper>

        </>
    )
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