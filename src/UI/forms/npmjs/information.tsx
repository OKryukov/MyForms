import { FC } from "react";
import styled from "styled-components";

const InformationStyled = styled.div`
height: 100%;
position: relative;
transition: ${({theme})=>theme.trans.base};
border-radius: ${({theme})=>theme.borrad.base};
padding: ${({theme})=>theme.gaps.large};
background-color: ${({theme})=>theme.colors.bc};
&::after{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 10px;
  width: 100%;
  z-index: 2;
  background: ${({theme})=> `linear-gradient(-139deg, #fb8817, #ff4b01, #c12127, #e02aff,${theme.colors.pink})`};
}
`
export const Information:FC = ()=>{
  return(
    <InformationStyled>
      Bla bla bla
    </InformationStyled>
  )
}