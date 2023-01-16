import React from 'react'
import { Wrapper, DmButton } from './DarkModeBtn.styled'




export default function DarkModeBtn({ darkMode, onToggle }) {
    const handleClick = () => {
        onToggle()
        if (document.body.classList.contains("dark")) {
            document.body.classList.remove("dark");
        } else {
            document.body.classList.add("dark");
        }
    }
    return (
        <>
            <Wrapper>
            <DmButton onClick={handleClick}>
                {darkMode ?
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="19" width="19" aria-labelledby="Wissel kleurenschema" role="presentation" ><title lang="nl" data-v-1dd6691c="">Wissel kleurenschema</title><g data-v-1dd6691c=""><g fill="none" fillRule="evenodd" data-v-1dd6691c=""><path d="M0 0h24v24H0z"></path><rect width="1" height="3" x="12" fill="currentColor" rx=".5"></rect><rect width="1" height="3" x="12" y="21" fill="currentColor" rx=".5"></rect><rect width="1" height="3" x="22" y="10.5" fill="currentColor" rx=".5" transform="rotate(90 22.5 12)"></rect><rect width="1" height="3" x="1" y="10.5" fill="currentColor" rx=".5" transform="rotate(90 1.5 12)"></rect><rect width="1" height="3" x="19" y="3" fill="currentColor" rx=".5" transform="rotate(-135 19.5 4.5)"></rect><rect width="1" height="3" x="19" y="18" fill="currentColor" rx=".5" transform="rotate(135 19.5 19.5)"></rect><rect width="1" height="3" x="4" y="3" fill="currentColor" rx=".5" transform="scale(1 -1) rotate(45 15.37 0)"></rect><rect width="1" height="3" x="4" y="18" fill="currentColor" rx=".5" transform="scale(1 -1) rotate(-45 -42.57 0)"></rect><circle cx="12" cy="12" r="6.5" stroke="currentColor"></circle><path fill="currentColor" stroke="currentColor" d="M12.5 18.48V5.52a6.5 6.5 0 010 12.96z"></path></g></g></svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="19" width="19" aria-labelledby="Wissel kleurenschema" role="presentation" ><title lang="nl" data-v-1dd6691c="">Wissel kleurenschema</title><g data-v-1dd6691c=""><g fill="none" fillRule="evenodd" data-v-1dd6691c=""><path d="M0 0h24v24H0z"></path><rect width="1" height="3" x="12" fill="currentColor" rx=".5"></rect><rect width="1" height="3" x="12" y="21" fill="currentColor" rx=".5"></rect><rect width="1" height="3" x="22" y="10.5" fill="currentColor" rx=".5" transform="rotate(90 22.5 12)"></rect><rect width="1" height="3" x="1" y="10.5" fill="currentColor" rx=".5" transform="rotate(90 1.5 12)"></rect><rect width="1" height="3" x="19" y="3" fill="currentColor" rx=".5" transform="rotate(-135 19.5 4.5)"></rect><rect width="1" height="3" x="19" y="18" fill="currentColor" rx=".5" transform="rotate(135 19.5 19.5)"></rect><rect width="1" height="3" x="4" y="3" fill="currentColor" rx=".5" transform="scale(1 -1) rotate(45 15.37 0)"></rect><rect width="1" height="3" x="4" y="18" fill="currentColor" rx=".5" transform="scale(1 -1) rotate(-45 -42.57 0)"></rect><circle cx="12" cy="12" r="6.5" stroke="currentColor"></circle><path fill="currentColor" stroke="currentColor" d="M12.5 18.48V5.52a6.5 6.5 0 010 12.96z"></path></g></g></svg>
                }
                </DmButton>
            </Wrapper>
        </>
    )
}
