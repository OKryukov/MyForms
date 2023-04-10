import { FC } from "react";
import styled from "styled-components";

const InformationStyled = styled.div.attrs({className:'npmjs__information'})`
position: relative;
transition: var(--transition);
border-radius: var(--border-radius);
padding: var(--secondary-gap);
height: 100%;
&::after{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 10px;
  width: 100%;
  z-index: 2;
  background: linear-gradient(-139deg, #fb8817, #ff4b01, #c12127, #e02aff, var(--color-pink));
}
`
export const Information:FC = ()=>{
  return(
    <InformationStyled>
      Bla bla bla
    </InformationStyled>
  )
}