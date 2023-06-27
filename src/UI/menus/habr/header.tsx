import { FC } from "react";
import styled from "styled-components";
import { HeaderLeft } from './headerLeft'
import { HeaderRight } from './headerRight'

const HeaderStyled = styled.header`
height: 48px;
width: 100%;
background-color: #303b44;
overflow: visible;
.container{
max-width: 1144px;
height: 100%;
margin: 0 auto;
padding: 0 25px;
overflow: visible;
display: flex;
justify-content: space-between;
align-items: center;
}

`

export const Header:FC = ()=>{
  return(
    <HeaderStyled>
      <div className="container">
        <HeaderLeft/>
        <HeaderRight/>
      </div>
    </HeaderStyled>
  )
}