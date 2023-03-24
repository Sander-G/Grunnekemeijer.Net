import React, {useState, useEffect} from 'react';
import GithubCalendar from 'react-github-calendar';
import styled from 'styled-components';


function Heatmap() {
   const [isLoaded, setIsLoaded] = useState(false);
  const selectTimeSpan = (contributions) => {
       const shownMonths = 3;

    // Get the date `shownMonths` months before the current date
    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - shownMonths);


    return contributions.filter((day) => {
      const date = new Date(day.date);

      return date >= startDate && date <= new Date();
      
    });
  };

   useEffect(() => {
     setIsLoaded(true);
   }, []);

  return (
    <Wrapper isLoaded={isLoaded}>
    {isLoaded && 
      (<GithubCalendar username='Sander-G' transformData={selectTimeSpan} transformTotalCount='' hideColorLegend color='Hotpink' showWeekdayLabels='true' />
     )} </Wrapper>
  );
}

export default Heatmap;


const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1rem;
  max-width: 100vw;
`;