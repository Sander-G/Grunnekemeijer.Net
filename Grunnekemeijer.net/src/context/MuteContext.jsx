import React, { createContext, useState } from 'react';

export const MuteContext = createContext();

export const MuteProvider = (props) => {
    const [isMuted, setIsMuted] = useState(true);
  
    const toggleMute = () => setIsMuted(!isMuted);
    return (
        <MuteContext.Provider value={{ isMuted, toggleMute }}>
            {props.children}
        </MuteContext.Provider>
    );
}
