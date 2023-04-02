import { FC } from "react"
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SwitcherStyled = styled.div`
.active{
  color: red;
}
`
export const Switcher:FC = ()=>{
  return(
    <SwitcherStyled>
      <NavLink to={'signup'}>Sign Up Form</NavLink>
      <NavLink to={'signin'}>Sign In Form</NavLink>
    </SwitcherStyled>
  )
}