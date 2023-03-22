import React from 'react';
import GithubCalendar from 'react-github-calendar';
import styled from 'styled-components';


function Heatmap() {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return date.getFullYear() === currentYear && monthOfDay > currentMonth - shownMonths && monthOfDay <= currentMonth;
    });
  };

  return (
    <Wrapper>
    
      <GithubCalendar username='Sander-G' transformData={selectLastHalfYear} hideColorLegend color='Hotpink'  />
    </Wrapper>
  );
}

export default Heatmap;


const Wrapper = styled.div`
max-width: 80vw;
margin: 1rem 1rem;


  

`