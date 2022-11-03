import styled from 'styled-components'


export const Container = styled.div`
display: flex;
max-width: 100vw;
max-height: 100%;
flex-wrap: wrap;
margin: 1rem;
justify-content: space-between;
border: 0.5px solid hotpink;
color: #343434;
cursor: crosshair;

--x-shadow: 0;
--y-shadow: 0;
--x:50%;
--y:50%;
transition: all 0.2s ease;
&:hover > div{
			transition: all 0.2s ease;
			text-shadow: var(--x-shadow) var(--y-shadow) 10px #1A1A1A;
		}

`
export const G = styled.div`
display:flex;
font-size: 16rem;
letter-spacing: 0.4rem;
font-weight: 800;
border: 0.5px solid hotpink;
height: auto;
width: fit-content;



`
// export const R = styled.div`
// display: flex;
// height: auto;
// min-width: fit-content;
// writing-mode: vertical-lr;
// font-size: 6rem;
// letter-spacing: 0.03em;
// font-weight: 800;
// justify-content: center ;
// border: 0.5px solid hotpink;
// `

export const R = styled(G)`
`
export const U = styled(G)`
`
export const N = styled(G)`
`
export const E = styled(G)`
`
export const K = styled(G)`
`
export const M = styled(G)`
`
export const I = styled(G)`
`
export const J = styled(G)`
`
export const DotNet = styled.div`
display: flex;
height: auto;
min-width: fit-content;
writing-mode: vertical-lr;
font-size: 8rem;
font-stretch: expanded;
letter-spacing: -0.2rem;
font-weight: 800;
justify-content: center ;
border: 0.5px solid hotpink; 

--x-shadow: 0;
--y-shadow: 0;
--x:50%;
--y:50%;
transition: all 0.2s ease;
&:hover{
			transition: all 0.2s ease;
			text-shadow: var(--x-shadow) var(--y-shadow) 10px #1A1A1A;
		}
`;

