import { useState, useEffect } from 'react';

export const useVisitCounter = () => {
  const [visitCount, setVisitCount] = useState(0);


  useEffect(() => {
    const storedVisitCount = parseInt(localStorage.getItem('visitCount'));
    const storedLastVisitTime = parseInt(localStorage.getItem('lastVisitTime'));
  
    if (storedLastVisitTime) {
      const now = new Date().getTime();
      if (now - storedLastVisitTime >= 60 * 60 * 1000) {
        setVisitCount(storedVisitCount + 1);
      
        localStorage.setItem('visitCount', storedVisitCount + 1);
        localStorage.setItem('lastVisitTime', now);
      } else {
        setVisitCount(storedVisitCount);
       
      }
    } else {
     
      setVisitCount(1);
      const now = new Date().getTime();
     
      localStorage.setItem('visitCount', 1);
      localStorage.setItem('lastVisitTime', now);
    }
  }, []);

  return visitCount;
};