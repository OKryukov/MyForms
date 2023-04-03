import { FC } from "react"
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { StartSVG } from "./commons/svgStorage";

const HeaderStyled = styled.header`
display: grid;
grid-template-columns: 245px 1fr;
grid-gap: var(--basic-gap);
padding: var(--secondary-gap);
& svg{
  height: 40px;
  width: 40px;
  cursor: pointer;
  transition: var(--transition);
}
& svg:hover{
  fill: var(--color-pink); 
}
`
export const Header:FC = ()=>{
  return(
    <HeaderStyled>
      <NavLink to="/">
        <StartSVG/>
      </NavLink>
    </HeaderStyled>
  )
}