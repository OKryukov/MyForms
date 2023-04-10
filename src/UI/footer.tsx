import { FC } from "react"
import styled from "styled-components";
import { CountrySVG } from "./commons/svgStorage";
import { NavLink } from "react-router-dom";

const FooterStyled = styled.footer`
display: grid;
grid-template-columns: repeat(4, 50px);
grid-gap: var(--basic-gap);

svg{
  width: 30px;
  fill: white;
}
a{
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  border-radius: var(--border-radius);
}
>a:hover{
  background-color: var(--color-pink);
}
`
export const Footer:FC = ()=>{
  return(
    <FooterStyled>
      <NavLink to=''><CountrySVG/></NavLink>
    </FooterStyled>
  )
}