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

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding-bottom: 3rem;
  }
  @media screen and (min-width: 1025px) {
    padding-bottom: 6rem;
  }
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
  cursor:pointer;
  padding: 0.3rem;
  border: 0.5px solid hotpink;
`;

export const fadeIn = keyframes`
   0% { opacity: 0 }
  100% { opacity: 1 }
`;

export const ButtonWrapper = styled.div`
  animation: ${fadeIn} 2500ms ease-in-out;
  transition: opacity 2500ms ease-in-out; 
`;

export const Row = styled.div`
    display: flex;
    margin-bottom: 1rem;
    margin-top: 1rem;
    text-align: left;
`

export const LastRow = styled.div`
  display: inline-block;
  margin-top: 1rem;
`;

export const HeatmapLink = styled.a`
  color: currentColor !important;
`;

export const HeatmapWrapper = styled.div`
  position: relative;
  left: 50%;
  max-width: 90vw;
  transform: translateX(-50%);
  padding-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 4500ms ease-in-out;
  transition: opacity 4500ms ease-in-out;
`;