import styled, {keyframes} from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 1rem;
  color: currentColor;
  font-family: clacon2;
  line-height: 1;
`;

export const Button = styled.button`
  opacity: ${(props) => (props.show ? 0 : 1)};
  transition: opacity 500ms ease-in-out;
  color: currentColor;
  font-family: clacon2;
  background-color: transparent;
  padding: 0.2rem;
  border: 0.5px solid hotpink;
  box-shadow: 0px 0px 1px 1px hotpink; 
  
  
`;

export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const ButtonWrapper = styled(Container)`
  animation: ${fadeIn} 1s ease-in-out;
`;
