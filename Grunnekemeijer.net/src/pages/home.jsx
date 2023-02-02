import React from 'react'

import NameDiv from '../components/nameDiv/NameDiv'
import Socials from '../components/socials/Socials'
import {Container} from './Home.styled'

export default function Home() {
    return (
        <>
        <Container>
        <NameDiv />
        <Socials />
        </Container>
        </>
    )
}
