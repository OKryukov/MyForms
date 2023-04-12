import { FC } from "react"
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { ForkSVG } from "./svgStorage";

const SwitcherStyled = styled.div<{isBaseURL:boolean}>`
display: grid;
grid-template-columns: 225px 30px 225px;
grid-auto-rows: 30px;
justify-content: center;
grid-gap: ${({theme})=>theme.gaps.large};
background-color: ${({theme})=>theme.colors.bc};
transition: ${({theme})=>theme.trans.base};
padding: ${({theme})=>theme.gaps.large};
border-radius: ${({theme})=>theme.borrad.base};
margin-bottom: ${({theme})=>theme.gaps.extraLarge};
&>*{
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
  background-color: ${({theme})=>theme.colors.lightGray};
  border-radius: ${({theme})=>theme.borrad.base};
}
.active{
  font-weight: 800;
}
svg{
  height: 25px;
  width: 25px;
  cursor: pointer;
  transition: ${({theme})=>theme.trans.base};
  fill:${props=>props.isBaseURL && props.theme.colors.pink}
}
a{
  position: relative;
  z-index: 1;
}
.switcher__up::after, .switcher__in::after{
  content: '';
  height: 30px;
  width: ${({theme})=>theme.gaps.large};
  background-color: ${({theme})=>theme.colors.pink};
  opacity: 1;
  transition: ${({theme})=>theme.trans.base};
  position: absolute;
  z-index: 2;
  top: 0;
}
.switcher__up::after{
  border-radius: ${({theme})=>theme.borrad.base} 0 0  ${({theme})=>theme.borrad.base};
  right: -${({theme})=>theme.gaps.large};
}
.active .switcher__up::after{
  right: 0px;
}
.switcher__in::after{
  border-radius: 0 ${({theme})=>theme.borrad.base} ${({theme})=>theme.borrad.base} 0;
  left: -${({theme})=>theme.gaps.large};
}
.active .switcher__in::after{
  left: 0px;
}
`
interface SwitcherPropsI{
  baseURL:string
}
export const Switcher:FC<SwitcherPropsI> = (props)=>{
  const {baseURL} = props
  const location = useLocation().pathname
  const isBaseURL = baseURL === location
  return(
    <SwitcherStyled isBaseURL={!isBaseURL}>
      <NavLink to={'signup'} onClick={event=>location === `${baseURL}/signup` && event.preventDefault()}>
        <span className="switcher__up">Sign Up Form</span>
      </NavLink>
      <NavLink to={baseURL} onClick={event=>isBaseURL && event.preventDefault()}>
        <ForkSVG/>
      </NavLink>
      <NavLink to={'signin'} onClick={event=>location === `${baseURL}/signin` && event.preventDefault()}>
        <span className="switcher__in">Sign In Form</span>
      </NavLink>
    </SwitcherStyled>
  )
}