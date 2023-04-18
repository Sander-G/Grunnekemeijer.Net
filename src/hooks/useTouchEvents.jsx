import { useEffect, useState } from 'react';

export function useTouchEvents() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if the device supports touch events
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);
  }, []);

  function handleMouseEnter(callback) {
    return isTouchDevice ? undefined : callback;
  }

  function handleMouseLeave(callback) {
    return isTouchDevice ? undefined : callback;
  }

  return { handleMouseEnter, handleMouseLeave };
}
