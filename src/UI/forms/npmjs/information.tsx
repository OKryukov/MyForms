import { FC } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { StateType } from "../../../BLL/store";

const InformationStyled = styled.div<({bi:any})>`
height: 100%;
position: relative;
transition: ${({theme})=>theme.trans.base};
border-radius: ${({theme})=>theme.borrad.base};
background-image: url(${({bi})=>bi});
.npmjs__opacity{
  height: 100%;
  padding: ${({theme})=>theme.gaps.large};
  background-color: #2d333b4e;
}
`
export const Information:FC = ()=>{
  const inform = useSelector((state:StateType)=>state.npmjs.inform)
  const bi = useSelector((state:StateType)=>state.npmjs.bi)
  return(
    <InformationStyled bi={bi}>
      <div className="npmjs__opacity">
      <div className="information__title"></div>
        <div className="information__text">{inform}</div>
      </div>
    </InformationStyled>
  )
}