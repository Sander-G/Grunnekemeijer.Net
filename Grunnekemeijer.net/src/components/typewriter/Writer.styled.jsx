import styled, {keyframes} from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 1rem;
  color: currentColor;
  font-family: clacon2;
  line-height: 1;
  margin: 0rem 1.5rem 0rem 1rem;
  user-select: none;
max-height: 90vh;

`;

export const Button = styled.button`
  opacity: ${(props) => (props.show ? 0 : 1)};
  transition: opacity 2500ms ease-in-out;
  position: absolute;
  top: 6.8rem;
  right: 1rem;
  z-index:2;
  border-radius: 5px;
  color: currentColor;
  font-family: clacon2;
  background-color: transparent;
  padding: 0.2rem;
  border: 0.5px solid hotpink;
  box-shadow: 0px 0px 0.5px 0.5px hotpink; 
`;

export const fadeIn = keyframes`
   0% { opacity: 0 }
  50% { opacity: 0 }
  100% { opacity: 1 }
`;

export const ButtonWrapper = styled(Container)`
  animation: ${fadeIn} 2500ms ease-in-out;

`;

export const blink = keyframes`
  0% { opacity: 0 }
  50% { opacity: 1 }
  100% { opacity: 0 }
`;

export const BlinkingCursor = styled.span`
  &:after {
    content: '\u007C';
    margin-left: 5px;
    animation: ${blink} 0.7s linear infinite;
  }
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
`