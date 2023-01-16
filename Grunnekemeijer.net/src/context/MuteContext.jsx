import React, { createContext, useState } from 'react';
import Howler from 'howler';

const soundFiles = [
    'src/assets/tick.mp3',
    /// meer mp3's hier
]

export const MuteContext = createContext();

export function MuteProvider(props) {
    const [sounds] = useState(
        soundFiles.map(src =>
            new Howler.Howl({
                src,
                autoplay: false,
                loop: false,
                volume: 1
            }))
    );

    const [isMuted, setIsMuted] = useState(true);
    sounds.forEach((sound) => sound.mute(isMuted));

    const toggleMute = () => {
        setIsMuted(!isMuted);
        sounds.forEach((sound) => sound.mute(isMuted));
    };


    return (
        <MuteContext.Provider value={{ isMuted, toggleMute, sounds }}>
            {props.children}
        </MuteContext.Provider>
    );
}