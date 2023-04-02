import { FC } from "react"
import styled from "styled-components";
import { NavLink } from "react-router-dom"

const NavItemStyled = styled.div`
display: grid;
grid-template-columns: 30px 1fr 10px;
grid-template-areas: 'logo name lamp';
align-items: center;
grid-gap: var(--secondary-gap);
background-color: var(--color-light-gray);
border-radius: var(--border-radius);
cursor: pointer;
img{
  grid-area: logo;
  height: 30px;
  width: 30px;
  border-radius: var(--border-radius);
}
span{
  grid-area: name;
}
div{
  grid-area: lamp;
  height: 30px;
  width: 10px;
  background-color: #ca4747;
  opacity: 0;
  transition: var(--transition);
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
        <img src={img}/>
        <span>{title}</span>
        <div></div>
      </NavItemStyled>
    </NavLink>
  )
}