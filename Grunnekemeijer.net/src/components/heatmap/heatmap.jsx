import React from 'react';
import GithubCalendar from 'react-github-calendar';
import styled from 'styled-components';


function Heatmap() {
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

  

  return (
    <Wrapper>
      <GithubCalendar username='Sander-G' transformData={selectTimeSpan} transformTotalCount='' hideColorLegend color='Hotpink' showWeekdayLabels='true' />
    </Wrapper>
  );
}

export default Heatmap;


const Wrapper = styled.div`
  display: flex;
  max-width: 100vw;
  padding: 1rem 2rem;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0%;
  left: 50vw;
  margin-left: -50%;


`;