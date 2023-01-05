import React from 'react'
import { Wrapper, MuteButton } from './muteBtn.styled'
import { VscUnmute, VscMute } from 'react-icons/vsc'
import { IconContext } from 'react-icons';



export default function MuteBtn() {
    return (
        <>
            <Wrapper>
            <IconContext.Provider value={{ size: "19px"}}>
                <MuteButton>

                    <VscUnmute />
                    {/* <VscMute /> */}
                </MuteButton>
            </IconContext.Provider>
            </Wrapper>
        </>
    )
}
