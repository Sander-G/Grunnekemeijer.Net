import styled, {keyframes} from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  font-size: 1rem;
  color: currentColor;
  font-family: clacon2;
  line-height: 1;
  margin: 0rem 1rem 0rem 1rem;
  user-select: none;
max-height: 90vh;
text-align: left;

`;

export const Button = styled.button`
  position: sticky;
  top: 7rem;
  left: 1rem;
  z-index:2;
  border-radius: 5px;
  color: currentColor;
  font-family: clacon2;
  background-color: transparent;
  padding: 0.3rem;
  border: 0.5px solid hotpink;
`;

export const fadeIn = keyframes`
   0% { opacity: 0 }
  100% { opacity: 1 }
`;

export const ButtonWrapper = styled(Container)`
  animation: ${fadeIn} 2500ms ease-in-out;
  transition: opacity 2500ms ease-in-out; 
`;

export const Row = styled.div`
    display: flex;
    margin-bottom: 1rem;
    margin-top: 1rem;
`

export const LastRow = styled.div`
  display: inline-block;
  margin-bottom: 2rem;
  margin-top: 1rem;
`;
export const HeatmapLink = styled.a` 
`;

export const HeatmapWrapper = styled.div`
  position: sticky;
  bottom:0;
  left: 50%;
  max-width: 50vw;
  transform: translateX(-50%);
`;