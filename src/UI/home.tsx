import { FC } from "react"
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { StartSVG } from "./commons/svgStorage";

const HomeStyled = styled.header`
display: grid;
grid-gap: var(--basic-gap);
padding: var(--secondary-gap);
text-align: right;
cursor: pointer;
:hover{
  & svg{
    fill: var(--color-pink);
    transform: translateX(-10px);
  }
}
& svg{
  height: 30px;
  width: 30px;
  transition: var(--transition);
}
`
export const Home:FC = ()=>{
  return(
    <HomeStyled>
      <NavLink to="/">
        <StartSVG/>
      </NavLink>
    </HomeStyled>
  )
}