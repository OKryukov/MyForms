import {FC} from "react"
import styled from "styled-components";

const NavItemStyled = styled.div`
display: grid;
grid-template-columns: 25px 1fr;
align-items: center;
cursor: pointer;
img{
  height: 25px;
  width: 25px;
  border-radius: 5px;
}
`
interface NavItemPropsI {
  img:string;
  title:string;
}
export const NavItem:FC<NavItemPropsI> = (props)=>{
  const {img,title} = props
  return(
    <NavItemStyled>
      <img src={img}/>
      <span>{title}</span>
    </NavItemStyled>
  )
}