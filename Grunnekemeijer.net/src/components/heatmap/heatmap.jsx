import React, { useState, useEffect } from 'react';
import GithubCalendar from 'react-github-calendar';
import styled from 'styled-components';

function Heatmap() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const selectTimeSpan = (contributions) => {
    let shownMonths = 3;

    if (screenWidth >= 768 && screenWidth < 1024) {
      shownMonths = 6;
    } else if (screenWidth >= 1024) {
      shownMonths = 12;
    }

    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - shownMonths);

    return contributions.filter((day) => {
      const date = new Date(day.date);

      return date >= startDate && date <= new Date() && !day.total; 
    });
  };


  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Wrapper isLoaded={isLoaded}>
      {isLoaded && <GithubCalendar username='Sander-G' color='Hotpink' showWeekdayLabels='true' hideColorLegend={screenWidth < 768} transformData={selectTimeSpan} transformTotalCount='false' />}
    </Wrapper>
  );
}

export default Heatmap;

const Wrapper = styled.div`
  color: currentColor;
  margin-top: 2rem;
`;
