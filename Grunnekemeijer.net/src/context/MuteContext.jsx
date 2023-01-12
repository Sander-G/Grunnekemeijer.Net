import React, { useEffect, createContext, useState } from 'react';
import sound from '../assets/tick.mp3';

export const MuteContext = createContext();

export const MuteProvider = (props) => {
    const [isMuted, setIsMuted] = useState(true);
    const [audio] = useState(new Audio(sound));
   
    const toggleMute = () => {
              
        setIsMuted(!isMuted);
        if (audio) {
            audio.muted = isMuted;
        }
    }
    useEffect(() => {
        audio.muted = isMuted;
    }, [isMuted, audio]);
    
    return (
        <MuteContext.Provider value={{ isMuted, toggleMute, audio }}>
            {props.children}
        </MuteContext.Provider>
    );
}
