import { FC } from "react"
import styled from "styled-components";
import { NavLink } from "react-router-dom"

const NavItemStyled = styled.div`
display: grid;
grid-template-columns: 30px 1fr;
grid-gap: var(--basic-gap);
grid-template-areas: 'logo name';
grid-gap: var(--secondary-gap);
border-radius: var(--border-radius);
position: relative;
cursor: pointer;
img{
  grid-area: logo;
  height: 30px;
  width: 30px;
  border-radius: var(--border-radius);
}
span{
  grid-area: name;
  display: grid;
  align-items: center;
  background-color: var(--color-light-gray);
  border-radius: var(--border-radius);
  padding: 0 var(--secondary-gap);
}
div{
  height: 30px;
  width: 15px;
  border-radius: var(--border-radius) 0 0 var(--border-radius);
  background-color: var(--color-pink);
  opacity: 0;
  transition: var(--transition);
  position: absolute;
  right: -30px;
}
`
interface NavItemPropsI {
  img:string;
  title:string;
}
export const NavItem:FC<NavItemPropsI> = (props)=>{
  const {img,title} = props
  return(
    <NavLink to={`/${title}`}>
      <NavItemStyled>
        <img src={img} alt="logo"/>
        <span>{title}</span>
        <div></div>
      </NavItemStyled>
    </NavLink>
  )
}