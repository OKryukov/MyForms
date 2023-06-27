import { FC } from 'react'
import styled from "styled-components";
import { NavigationLeft } from './navigationLeft'
import { NavigationRight } from './navigationRight'

const NavigationStyled = styled.div`
background-color: #fff;
border-bottom: 1px solid #dedede;
overflow: visible;
.container{
  height: 57px;
  max-width: 1144px;
  padding: 0 25px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
`
export const Navigation:FC = ()=>{
  return (
    <NavigationStyled>
      <div className="container">
        <NavigationLeft />
        <NavigationRight />
      </div>
    </NavigationStyled>
  )
}