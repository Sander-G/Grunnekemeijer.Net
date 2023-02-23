import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 0.25em 1rem;

  align-items: baseline;
  justify-content: flex-start;
  text-align: left;
  line-height: 1;
  letter-spacing: 0.8;

  ${'' /* typeIt cursor styling */}
  --ti-cursor-color: green;
  --ti-cursor-line-height: normal;
  --ti-cursor-font-size: 1rem;

  & .terminal {
    font-size: 1rem;
    color: currentColor;
    font-family: clacon2;
    color: green;
    line-height: 1;
    margin-right: -0.3em;
  }
`;
