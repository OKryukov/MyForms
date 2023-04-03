import { FC } from "react"
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { ForkSVG } from "./svgStorage";

const SwitcherStyled = styled.div<{isBaseURL:boolean}>`
display: grid;
grid-template-columns: 225px 30px 225px;
grid-auto-rows: 30px;
justify-content: center;
grid-gap: var(--secondary-gap);
padding: var(--secondary-gap);
background-color:var(--secondary-background-color);
&>*{
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
  background-color: var(--color-light-gray);
  border-radius: var(--border-radius);
}
.active{
  font-weight: 800;
}
& svg{
  height: 25px;
  width: 25px;
  cursor: pointer;
  transition: var(--transition);
  fill:${props=>props.isBaseURL && 'var(--color-pink)'}
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
        <span>Sign Up Form</span>
      </NavLink>
      <NavLink to={baseURL} onClick={event=>isBaseURL && event.preventDefault()}>
        <ForkSVG/>
      </NavLink>
      <NavLink to={'signin'} onClick={event=>location === `${baseURL}/signin` && event.preventDefault()}>
        <span>Sign In Form</span>
      </NavLink>
    </SwitcherStyled>
  )
}