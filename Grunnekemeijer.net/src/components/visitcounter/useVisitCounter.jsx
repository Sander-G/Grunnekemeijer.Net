import { useState, useEffect } from 'react';



export const useVisitCounter = () => {
  const [visitCount, setVisitCount] = useState(parseInt(localStorage.getItem('visitCount')) || 0);
  const [lastVisitTime, setLastVisitTime] = useState(localStorage.getItem('lastVisitTime'));

  useEffect(() => {
    const lastVisit = localStorage.getItem('lastVisitTime');
    const now = new Date().getTime();
    

    if (lastVisitTime && now - lastVisitTime > 1) {
      setVisitCount((prevCount) => prevCount + 1);
      localStorage.setItem('visitCount', visitCount + 1);
    }

    localStorage.setItem('lastVisitTime', now);
    setLastVisitTime(now);
  }, []);

  return visitCount;
};
