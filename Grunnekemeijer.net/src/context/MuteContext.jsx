import React, { createContext, useState } from 'react';
import Howler from 'howler';

const soundFiles = [
    'src/assets/tick.mp3',
    'src/assets/clickTone.mp3',
    'src/assets/interfaceTap.mp3',
    'src/assets/staticBuzz.mp3',
    'src/assets/nameDiv/G.mp3',
    'src/assets/nameDiv/R.mp3',
    'src/assets/nameDiv/U.mp3',
    'src/assets/nameDiv/N1.mp3',
    'src/assets/nameDiv/N2.mp3',
    'src/assets/nameDiv/E1.mp3',
    'src/assets/nameDiv/K.mp3',
    'src/assets/nameDiv/E2.mp3',
    'src/assets/nameDiv/M.mp3',
    'src/assets/nameDiv/E3.mp3',
    'src/assets/nameDiv/I.mp3',
    'src/assets/nameDiv/J.mp3',
    'src/assets/nameDiv/E4.mp3',
    'src/assets/nameDiv/R2.mp3',
    'src/assets/nameDiv/dotnet.mp3'
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