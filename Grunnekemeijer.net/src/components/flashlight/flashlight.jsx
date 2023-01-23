
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {Wrapper, FlashlightButton, } from './flashlight.styled'



export default function Flashlight() {

  const [isOn, setIsOn] = useState('false');
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  // console.log(mousePosition);

  const [cursorVariant, setCursorVariant] = useState("default");
  const variants = {
    default: {
      x: mousePosition.x - 75,
      y: mousePosition.y - 75
    },
    text: {
      x: 0,
      y: 0
    }
  };

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  
  return (
    <>  
    <Wrapper>
    <FlashlightButton onClick={ () => {setIsOn(!isOn)} }>
    { isOn? (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" class="sc-ftTHYK dvmiZA" height="19px" width="19px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M6 2h12v3H6zM6 7v1l2 3v11h8V11l2-3V7H6zm6 8.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></svg>
    ) : (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" class="sc-ezOQGI gFgyev" height="19px" width="19px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M18 5V2H6v1.17L7.83 5zM16 11l2-3V7H9.83L16 13.17zM2.81 2.81L1.39 4.22 8 10.83V22h8v-3.17l3.78 3.78 1.41-1.41L2.81 2.81z"></path></svg>)}

    <motion.div
       className={isOn? "off" : "on"}
       variants={variants}
       animate={cursorVariant}
     ></motion.div>
    </FlashlightButton>
    </Wrapper>
    </>
  )
}
