import { FC } from "react"
import styled from "styled-components";
import { NavItem } from "./commons/navItem";

const NavbarStyled = styled.nav`

display: grid;
grid-auto-rows: 30px;
padding: var(--secondary-gap);
grid-gap: var(--secondary-gap);
.active{
  & div div{
    opacity: 1;
    right: 0;
  }
}
`
export const Navbar:FC = ()=>{
  return(
    <NavbarStyled>
      <NavItem title={'npmjs.com'} img={'https://static.npmjs.com/f1786e9b7cba9753ca7b9c40e8b98f67.png'}/>
      <NavItem title={'habr.com'} img={'https://habr.com/img/maskable_icon.png'}/>
    </NavbarStyled>
  )
}