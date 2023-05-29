import { FC } from "react"
import styled from "styled-components";
import { NavLink } from "react-router-dom"

const NavItemStyled = styled.div`
a{
  display: grid;
  grid-template-columns: 30px 1fr;
  grid-gap: ${({theme})=>theme.gaps.extraLarge};
  grid-template-areas: 'logo name';
  grid-gap: ${({theme})=>theme.gaps.large};
  border-radius: ${({theme})=>theme.borrad.base};
  position: relative;
  cursor: pointer;
}
.active span{
  font-weight: 700;
}
.active .navItem__lamp{
  opacity: 1;
  right: 0;
}
.navItem__logo{
  grid-area: logo;
  height: 30px;
  width: 30px;
  border-radius: ${({theme})=>theme.borrad.base};
}
.navItem__title{
  grid-area: name;
  display: grid;
  align-items: center;
  background-color: ${({theme})=>theme.colors.lightGray};
  border-radius: ${({theme})=>theme.borrad.base};
  padding: 0 ${({theme})=>theme.gaps.large};
}
.navItem__lamp{
  height: 30px;
  width: ${({theme})=>theme.gaps.large};
  border-radius: ${({theme})=>theme.borrad.base} 0 0 ${({theme})=>theme.borrad.base};
  background-color: ${({theme})=>theme.colors.pink};
  opacity: 0;
  transition: ${({theme})=>theme.trans.base};
  position: absolute;
  right: -${({theme})=>theme.gaps.extraLarge};
}
`
interface NavItemPropsI {
  img:string;
  title:string;
  to:string;
}
export const NavItem:FC<NavItemPropsI> = (props)=>{
  const {img,title,to} = props
  return(
    <NavItemStyled>
      <NavLink to={`/${to.toLowerCase()}`}>
        <img className="navItem__logo" src={img} alt="logo"/>
        <span className="navItem__title">{title}</span>
        <div className="navItem__lamp"></div>
      </NavLink>
    </NavItemStyled>
  )
}