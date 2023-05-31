import { FC } from "react"
import styled from "styled-components";
import { NavItem } from "./commons/navItem";
import { useSelector } from "react-redux";
import { StateType } from "../BLL/store";

const FooterStyled = styled.footer`
grid-area: footer;
display: grid;
grid-auto-rows: 30px;
padding: ${({theme})=>theme.gaps.large};
grid-gap: ${({theme})=>theme.gaps.large};
background-color: ${({theme})=>theme.colors.bc};
.title{
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({theme})=>theme.colors.lightGray};
  border-radius: ${({theme})=>theme.borrad.base};
}
`
export const Footer:FC = ()=>{
  const isEnglish = useSelector((state:StateType)=>state.theme.language=='English')
  return(
    <FooterStyled>
      <div className="title">{isEnglish?'Menu':'Меню'}</div>
      <NavItem to={"gitLab/menu"} title="GitLab" img="https://gitlab.com/assets/logo-911de323fa0def29aaf817fca33916653fc92f3ff31647ac41d2c39bbe243edb.svg"/>
      <NavItem to={"habr/menu"} title="Habr" img="https://habr.com/img/maskable_icon.png"/>
    </FooterStyled>
  )
}