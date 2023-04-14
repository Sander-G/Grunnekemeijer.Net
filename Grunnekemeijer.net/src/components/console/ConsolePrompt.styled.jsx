import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 1rem 1rem 0rem 1rem;
  align-items: baseline;
  justify-content: flex-start;
  text-align: left;

  letter-spacing: 0.8;

  & .terminal {
    font-size: 1rem;
    color: currentColor;
    font-family: clacon2;
  }
`;

export const PromptWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 0.5rem 1rem;
  align-items: baseline;
  justify-content: flex-start;
  text-align: left;
  line-height: 1;
  letter-spacing: 0.8;

  & .prompt,
  .terminal {
    font-size: 1rem;
    color: currentColor;
    font-family: clacon2;
  }

  ${(props) =>
    props.blink &&
    css`
      & .terminal::after {
        content: '|';
        opacity: 1;
        animation: blink 0.7s infinite;
      }

      @keyframes blink {
        0% {
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
    `}
`;
