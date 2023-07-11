import { FC } from "react";
import styled from "styled-components";

const MiddleHeaderStyled = styled.div`
background-color: #5261ea;
height: 100px;
`

export const MiddleHeader:FC = ()=>{
  return(
    <MiddleHeaderStyled>
      MiddleHeader
    </MiddleHeaderStyled>
  )
}