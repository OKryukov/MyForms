import { FC } from "react";
import styled from "styled-components";

const BottomHeaderStyled = styled.div`
background-color: #f5f5f5;
height: 56px;
position: sticky;
`

export const BottomHeader:FC = ()=>{
  return(
    <BottomHeaderStyled>
      BottomHeader
    </BottomHeaderStyled>
  )
}