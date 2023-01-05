import styled from "styled-components";
import { MdFlashlightOn } from 'react-icons/md'

export const Wrapper = styled.div`
display: flex ;
flex-direction: row;
justify-content: flex-start;
align-items: center;
`
export const FlashlightButton = styled.div`

cursor: pointer;
user-select: none;



`

export const RotatedIcon = styled(MdFlashlightOn)`
  transform: rotate(40deg);
  `;