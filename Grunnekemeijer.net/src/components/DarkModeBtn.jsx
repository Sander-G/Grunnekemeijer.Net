import React from 'react'
import { useState, useEffect } from "react";
import styled from 'styled-components';



export default function DarkModeBtn() {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <>
            <Wrapper>
            <DmButton
                                onClick={() => {
                        setDarkMode(!darkMode);
                    }}
                >
                {darkMode ?

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="19" width="19" aria-labelledby="Wissel kleurenschema" role="presentation" ><title lang="nl" data-v-1dd6691c="">Wissel kleurenschema</title><g data-v-1dd6691c=""><g fill="none" fill-rule="evenodd" data-v-1dd6691c=""><path d="M0 0h24v24H0z"></path><rect width="1" height="3" x="12" fill="currentColor" rx=".5"></rect><rect width="1" height="3" x="12" y="21" fill="currentColor" rx=".5"></rect><rect width="1" height="3" x="22" y="10.5" fill="currentColor" rx=".5" transform="rotate(90 22.5 12)"></rect><rect width="1" height="3" x="1" y="10.5" fill="currentColor" rx=".5" transform="rotate(90 1.5 12)"></rect><rect width="1" height="3" x="19" y="3" fill="currentColor" rx=".5" transform="rotate(-135 19.5 4.5)"></rect><rect width="1" height="3" x="19" y="18" fill="currentColor" rx=".5" transform="rotate(135 19.5 19.5)"></rect><rect width="1" height="3" x="4" y="3" fill="currentColor" rx=".5" transform="scale(1 -1) rotate(45 15.37 0)"></rect><rect width="1" height="3" x="4" y="18" fill="currentColor" rx=".5" transform="scale(1 -1) rotate(-45 -42.57 0)"></rect><circle cx="12" cy="12" r="6.5" stroke="currentColor"></circle><path fill="currentColor" stroke="currentColor" d="M12.5 18.48V5.52a6.5 6.5 0 010 12.96z"></path></g></g></svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="19" width="19" aria-labelledby="Wissel kleurenschema" role="presentation" ><title lang="nl" data-v-1dd6691c="">Wissel kleurenschema</title><g data-v-1dd6691c=""><g fill="none" fill-rule="evenodd" data-v-1dd6691c=""><path d="M0 0h24v24H0z"></path><rect width="1" height="3" x="12" fill="currentColor" rx=".5"></rect><rect width="1" height="3" x="12" y="21" fill="currentColor" rx=".5"></rect><rect width="1" height="3" x="22" y="10.5" fill="currentColor" rx=".5" transform="rotate(90 22.5 12)"></rect><rect width="1" height="3" x="1" y="10.5" fill="currentColor" rx=".5" transform="rotate(90 1.5 12)"></rect><rect width="1" height="3" x="19" y="3" fill="currentColor" rx=".5" transform="rotate(-135 19.5 4.5)"></rect><rect width="1" height="3" x="19" y="18" fill="currentColor" rx=".5" transform="rotate(135 19.5 19.5)"></rect><rect width="1" height="3" x="4" y="3" fill="currentColor" rx=".5" transform="scale(1 -1) rotate(45 15.37 0)"></rect><rect width="1" height="3" x="4" y="18" fill="currentColor" rx=".5" transform="scale(1 -1) rotate(-45 -42.57 0)"></rect><circle cx="12" cy="12" r="6.5" stroke="currentColor"></circle><path fill="currentColor" stroke="currentColor" d="M12.5 18.48V5.52a6.5 6.5 0 010 12.96z"></path></g></g></svg>

                }

                </DmButton>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
display: flex ;
flex-direction: row;
justify-content: flex-start;
align-items: center;
padding: 0.5rem;
gap: 0.5rem;
`
const DmButton = styled.div`
margin: 0.5rem 1rem;

`