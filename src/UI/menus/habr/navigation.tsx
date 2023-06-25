import { FC } from 'react'
import styled from "styled-components";
import { NavigationLeft } from './navigationLeft'
import { NavigationRight } from './navigationRight'

const NavigationStyled = styled.div`
  
`
export const Navigation:FC = ()=>{
  return(
    <NavigationStyled>
      <NavigationLeft/>
      <NavigationRight/>
    </NavigationStyled>
  )
}