import React from 'react';
import styled from 'styled-components';

const StyledSvg = styled.svg`
  scale: 1.2;
  transition: color 0.3s ease-in-out;
  stroke: #343434;
  

  &:hover {
    color: #525252;
  }

  @media screen and (max-width: 1024px) {
    scale: 1;
  }
`;

function obfuscateEmail(email) {
  const obfuscated = [];
  for (let i = 0; i < email.length; i++) {
    obfuscated.push(`&#x${email.charCodeAt(i).toString(16)};`);
  }
  return obfuscated.join('');
}

function EmailLink() {
  const encodedEmail = 'c2FuZGVyQGdydW5uZWtlbWVpamVyLm5ldA=='; // Base64 encoded email address

  function handleClick() {
    const decodedEmail = atob(encodedEmail); // Decode the email address from base64
    window.location.href = `mailto:${decodedEmail}`;
  }

  return (
    <div onClick={handleClick} data-email={obfuscateEmail(atob(encodedEmail))}>
      {/* <StyledSvg  stroke='currentColor'fill='!currentColor' strokeWidth='0' viewBox='0 0 16 16' height='30px' width='30px' xmlns='http://www.w3.org/2000/svg'>
        <path d='M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z'></path>
        <path d='M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z'></path>
      </StyledSvg> */}
      <StyledSvg xmlns='http://www.w3.org/2000/svg' width='37px' height='37px' strokeWidth='0.6px' viewBox='0 0 24 24' fill='currentColor'>
        <g id='style=doutone'>
          <g id='email'>
            <path
              id='vector (Stroke)'
              fillRule='evenodd'
              clipRule='evenodd'
              d='M3.88534 5.2371C3.20538 5.86848 2.75 6.89295 2.75 8.5V15.5C2.75 17.107 3.20538 18.1315 3.88534 18.7629C4.57535 19.4036 5.61497 19.75 7 19.75H17C18.385 19.75 19.4246 19.4036 20.1147 18.7629C20.7946 18.1315 21.25 17.107 21.25 15.5V8.5C21.25 6.89295 20.7946 5.86848 20.1147 5.2371C19.4246 4.59637 18.385 4.25 17 4.25H7C5.61497 4.25 4.57535 4.59637 3.88534 5.2371ZM2.86466 4.1379C3.92465 3.15363 5.38503 2.75 7 2.75H17C18.615 2.75 20.0754 3.15363 21.1353 4.1379C22.2054 5.13152 22.75 6.60705 22.75 8.5V15.5C22.75 17.393 22.2054 18.8685 21.1353 19.8621C20.0754 20.8464 18.615 21.25 17 21.25H7C5.38503 21.25 3.92465 20.8464 2.86466 19.8621C1.79462 18.8685 1.25 17.393 1.25 15.5V8.5C1.25 6.60705 1.79462 5.13152 2.86466 4.1379Z'
              fill='!currentColor'
            />
            <path
              id='vector (Stroke)_2'
              fillRule='evenodd'
              clipRule='evenodd'
              d='M19.3633 7.31026C19.6166 7.63802 19.5562 8.10904 19.2285 8.3623L13.6814 12.6486C12.691 13.4138 11.3089 13.4138 10.3185 12.6486L4.77144 8.3623C4.44367 8.10904 4.38328 7.63802 4.63655 7.31026C4.88982 6.98249 5.36083 6.9221 5.6886 7.17537L11.2356 11.4616C11.6858 11.8095 12.3141 11.8095 12.7642 11.4616L18.3113 7.17537C18.6391 6.9221 19.1101 6.98249 19.3633 7.31026Z'
              fill='#currentColor'
            />
          </g>
        </g>
      </StyledSvg>
    </div>
  );
}

export default EmailLink;
