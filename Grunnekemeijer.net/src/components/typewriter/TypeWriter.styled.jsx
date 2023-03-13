import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0.25em 1rem;
  align-items: baseline;
  justify-content: flex-start;
  text-align: left;
  line-height: 1;
  letter-spacing: 0.8;

 

  & .terminal {
    font-size: 1rem;
    color: currentColor;
    font-family: clacon2;
    line-height: 1;
    margin-right: -0.3em;
  }

`;

export const PromptWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 0.25em 1rem;
  align-items: baseline;
  justify-content: flex-start;
  text-align: left;
  line-height: 1;
  letter-spacing: 0.8;

  & .prompt, .terminal {
    font-size: 1rem;
    color: currentColor;
    font-family: clacon2;
    line-height: 1;
   
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TextBlock = styled.div`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  display: inline-block;
`;




export const Button = styled.button`
  background-color: #0077b6;
  border: none;
  color: white;
  padding: 10px 20px;
  font-size: 18px;
  margin-top: 20px;
`;