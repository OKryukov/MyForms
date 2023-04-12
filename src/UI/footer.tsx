import { FC } from "react"
import styled from "styled-components";
import { CountrySVG } from "./commons/svgStorage";
import { NavLink } from "react-router-dom";

const FooterStyled = styled.footer`
grid-area: footer;
display: grid;
grid-template-columns: repeat(4, 50px);
grid-gap: ${({theme})=>theme.gaps.extraLarge};
background-color: ${({theme})=>theme.colors.bc};
border-radius: ${({theme})=>theme.borrad.base};
color: ${({theme})=>theme.colors.wbc};
svg{
  width: 30px;
  height: 30px;
  fill: ${({theme})=>theme.colors.fill};
  transition: ${({theme})=>theme.trans.base};
}
a{
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  border-radius: ${({theme})=>theme.borrad.base};
}
>a:hover{
  background-color: ${({theme})=>theme.colors.hover};
}
`
export const Footer:FC = ()=>{
  return(
    <FooterStyled>
      <NavLink to=''><CountrySVG/></NavLink>
    </FooterStyled>
  )
}