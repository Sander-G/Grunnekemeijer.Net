import styled, { keyframes } from 'styled-components'
import texture from '../../assets/texture_alpha.png'
export const shakeAnimation = keyframes`  
	0% { transform: translateX(0)}
	13% {transform: translateY(-0.25px) }
	25% { transform: translateX(0.25px) }
	50% { transform: translateX(0px) }
	63% {transform: translateY(0.1px) }
	75% { transform: translateX(-0.25px) }
	95% { transform: translateY(0.25px)}
	100% { transform: translateX(0) }
   `;

export const Container = styled.div`
display: flex;
z-index: 0;
position: static;
max-height: 100%;
max-width: 100%;
flex-wrap: wrap;
margin: 0rem 1rem;
/* padding-top: 1rem; */
justify-content: space-between;
color: #343434;
cursor: crosshair;
user-select: none;
pointer-events: unset;
animation: ${shakeAnimation} 3s linear infinite;
/* animate whole container..? */
--x-shadow: 20;
--y-shadow: 20;
transition: all 0.6s ease;
&:hover > p {
			transition: all 0.2s ease;
			text-shadow: var(--x-shadow) var(--y-shadow) 15px #1A1A1A;
			transform: scaleX(-1);
			text-shadow: -1px 0 skyblue, 0 1px skyblue, 1px 0 skyblue, 0 -1px skyblue;
		}

`
export const G = styled.p`
display:flex;
line-height: 0.9;
letter-spacing: 0.1em;
font-weight: 800;
margin-top: -0.5rem;
transform: scaleY(1);

max-height: auto;
width: fit-content;
text-shadow: -1px 0 hotpink, 0 1px hotpink, 1px 0 hotpink, 0 -1px hotpink;

/* background: url(${texture});  */
--x-shadow: 20;
--y-shadow: 20;
transition: all 0.2s ease;
	&.hovered {
		transform: scaleY(-1);
			transition: all 0.6s ease;
			text-shadow: var(--x-shadow) var(--y-shadow) 10px #1A1A1A;
			animation: ${shakeAnimation} 0.5s linear infinite;
			
			text-shadow: -1px 0 hotpink, 0 1px hotpink, 1px 0 hotpink, 0 -1px hotpink;
		}

		
`

export const R = styled(G)`
`
export const U = styled(G)`
`
export const N = styled(G)`
`
export const N2 = styled(G)`
`
export const E = styled(G)`
`
export const E2 = styled(G)`
`
export const E3 = styled(G)`
`
export const E4 = styled(G)`
`
export const K = styled(G)`
`
export const M = styled(G)`

`
export const I = styled(G)`
`
export const J = styled(G)`
`
export const R2 = styled(G)`
`
export const DotNet = styled.p`
display: flex;
height: auto;
margin-top: -0.5rem;
/* margin-left: 1rem; */
/* margin-right: 0.5rem; */
width: fit-content;
align-self: flex-end;
/* writing-mode: vertical-lr; */
line-height: 0.9;
letter-spacing: 0.2rem;
font-weight: 800;
justify-content: center ;
text-shadow: -1px 0 hotpink, 0 1px hotpink, 1px 0 hotpink, 0 -1px hotpink;




--x-shadow: 0;
--y-shadow: 0;
--x:50%;
--y:50%;
transition: all 0.2s ease;
	&:hover{
			transition: all 0.6s ease;
			text-shadow: var(--x-shadow) var(--y-shadow) 10px #1A1A1A;
			animation: ${shakeAnimation} 0.5s linear infinite;
			text-shadow: -1px 0 skyblue, 0 1px skyblue, 1px 0 skyblue, 0 -1px skyblue;
		}
		

	
`;



