import { FC } from "react"
import styled from "styled-components";
import { NavItem } from "./commons/navItem";
import x from '../BLL/images/readme/logo-911de323fa0def29aaf817fca33916653fc92f3ff31647ac41d2c39bbe243edb.svg'
import { useSelector } from "react-redux";
import { StateType } from "../BLL/store";

const NavbarStyled = styled.nav`
grid-area: navbar;
display: grid;
grid-auto-rows: 30px;
padding: ${({theme})=>theme.gaps.large};
grid-gap: ${({theme})=>theme.gaps.large};
background-color: ${({theme})=>theme.colors.bc};
`
export const Navbar:FC = ()=>{
  const isEnglish = useSelector((state:StateType)=>state.theme.language=='English')
  return(
    <NavbarStyled>
      <div className="title">{isEnglish?'Forms':'Формы'}</div>
      <NavItem title={'Npmjs.com'} img={'https://static.npmjs.com/f1786e9b7cba9753ca7b9c40e8b98f67.png'}/>
      <NavItem title={'Habr.com'} img={'https://habr.com/img/maskable_icon.png'}/>
      <NavItem title={'GitLab.com'} img={'https://gitlab.com/assets/logo-911de323fa0def29aaf817fca33916653fc92f3ff31647ac41d2c39bbe243edb.svg'}/>
    </NavbarStyled>
  )
}