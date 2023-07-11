import { FC } from "react";
import styled from "styled-components";

const TopHeaderStyled = styled.div`
background-color: #69ea52;
height: 36px;
`

export const TopHeader:FC = ()=>{
  return(
    <TopHeaderStyled>
      TopHeader
    </TopHeaderStyled>
  )
}