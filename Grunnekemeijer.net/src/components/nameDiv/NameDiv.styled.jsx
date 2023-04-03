import styled, { keyframes } from 'styled-components';
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
  overflow: none;
  z-index: 0;
  position: inherit;

  max-height: 100%
  width: calc(100%);
  flex-wrap: wrap;
  margin-top: 1rem;
  align-items: center;
  justify-content: space-between;
  color: #343434;
  cursor: crosshair;
  user-select: none;
  pointer-events: unset;
  animation: ${shakeAnimation} 3s linear infinite;

  transition: all 0.6s ease;
  &:hover, &:active  > p {
    transition: all 0.3s ease;
    transform: scaleX(-1);
    transform: scaleY(-1);
    text-shadow: -1px 0 skyblue, 0 1px skyblue, 1px 0 skyblue, 0 -1px skyblue;
   
  }

  > p {
    font-size: max(80px, min(calc(105px + (500 - 20) * (90vw - 320px) / (2550 - 320)), calc(105px + (500 - 20) * (90vh - 500px) / (1440 - 500))));
  }
`;
export const G = styled.p`
  display: flex;
  line-height: 0.9;
  letter-spacing: 0.1em;
  font-weight: 800;
  margin-top: -0.5rem;

  max-height: auto;
  width: fit-content;
  text-shadow: -1px 0 hotpink, 0 1px hotpink, 1px 0 hotpink, 0 -1px hotpink;
  transition: all 0.2s ease;
  &.hovered {
    transform: scaleY(-1);
    transition: all 0.6s ease;
    animation: ${shakeAnimation} 0.3s linear infinite;
    text-shadow: -1px 0 hotpink, 0 1px hotpink, 1px 0 hotpink, 0 -1px hotpink;
  }
`;

export const R = styled(G)``;
export const U = styled(G)``;
export const N = styled(G)``;
export const N2 = styled(G)``;
export const E = styled(G)``;
export const E2 = styled(G)``;
export const E3 = styled(G)``;
export const E4 = styled(G)``;
export const K = styled(G)``;
export const M = styled(G)``;
export const I = styled(G)``;
export const J = styled(G)``;
export const R2 = styled(G)``;
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
  justify-content: center;
  text-shadow: -1px 0 hotpink, 0 1px hotpink, 1px 0 hotpink, 0 -1px hotpink;
  transition: all 0.2s ease;
  &:hover {
    transition: all 0.6s ease;
    animation: ${shakeAnimation} 0.3s linear infinite;
  }
`;
