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

      return date >= startDate && date <= new Date();
    });
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Wrapper isLoaded={isLoaded}>
      {isLoaded && <GithubCalendar 
                      username='Sander-G' 
                      transformData={selectTimeSpan} 
                      transformTotalCount='' 
                      color='Hotpink' 
                      showWeekdayLabels='true' 
                      hideColorLegend={screenWidth < 768} 

                      />}
    </Wrapper>
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
