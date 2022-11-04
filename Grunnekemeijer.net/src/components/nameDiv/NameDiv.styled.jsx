import styled, { keyframes} from 'styled-components'
import texture from '../../assets/texture_alpha.png'
const shakeAnimation = keyframes`  
	0% { transform: translateX(0) }
	25% { transform: translateX(0.5px) }
	50% { transform: translateX(0px) }
	75% { transform: translateX(-0.5px) }
	100% { transform: translateX(0) }
   `;

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
transition: all 0.6s ease;
&:hover > .M {
			transition: all 0.2s ease;
			text-shadow: var(--x-shadow) var(--y-shadow) 15px #1A1A1A;
			transform: scaleX(1);
			text-shadow: -1px 0 skyblue, 0 1px skyblue, 1px 0 skyblue, 0 -1px skyblue;
		}

		&:hover > p {
			transition: all 0.2s ease;
			text-shadow: var(--x-shadow) var(--y-shadow) 15px #1A1A1A;
			transform: scaleX(-1);
			text-shadow: -1px 0 skyblue, 0 1px skyblue, 1px 0 skyblue, 0 -1px skyblue;
		}

`
export const G = styled.p`
display:flex;
font-size: 16rem;
letter-spacing: 0.4rem;
font-weight: 800;
;
border: 0.5px solid hotpink;
height: auto;
width: fit-content;
text-shadow: -1px 0 hotpink, 0 1px hotpink, 1px 0 hotpink, 0 -1px hotpink;
/* background: url(${texture});  */
--x-shadow: 0;
--y-shadow: 0;
--x:50%;
--y:50%;
&:hover{
			transition: all 0.6s ease;
			text-shadow: var(--x-shadow) var(--y-shadow) 10px #1A1A1A;
			animation: ${shakeAnimation} 0.2s linear infinite;
			
			

			
		}




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
export const DotNet = styled.p`
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
text-shadow: -1px 0 hotpink, 0 1px hotpink, 1px 0 hotpink, 0 -1px hotpink;

--x-shadow: 0;
--y-shadow: 0;
--x:50%;
--y:50%;
transition: all 0.s ease;
&:hover{
			transition: all 0.6s ease;
			text-shadow: var(--x-shadow) var(--y-shadow) 10px #1A1A1A;
			animation: ${shakeAnimation} 0.5s linear infinite;
			text-shadow: -1px 0 skyblue, 0 1px skyblue, 1px 0 skyblue, 0 -1px skyblue;
		}
`;



