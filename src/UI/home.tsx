import { FC } from "react"
import { Link } from "react-router-dom";
import styled from "styled-components";
import { StartSVG } from "./commons/svgStorage";

const HomeStyled = styled.header`
grid-area: home;
display: grid;
grid-gap: ${({theme})=>theme.gaps.extraLarge};
padding: ${({theme})=>theme.gaps.large};
background-color: ${({theme})=>theme.colors.bc};
text-align: right;
cursor: pointer;
svg{
  height: 30px;
  width: 30px;
  transition: ${({theme})=>theme.trans.base};
  fill: ${({theme})=>theme.colors.fill};
}
:hover{
  svg{
    fill: ${({theme})=>theme.colors.pink};
    transform: translateX(-10px);
  }
}
`
export const Home:FC = ()=>{
  return(
    <HomeStyled>
      <Link to="/">
        <StartSVG/>
      </Link>
    </HomeStyled>
  )
}