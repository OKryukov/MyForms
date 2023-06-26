import { FC } from "react";
import styled from "styled-components";
import { HeaderLeft } from './headerLeft'
import { HeaderRight } from './headerRight'

const HeaderStyled = styled.header`
height: 48px;
background-color: #303b44;
overflow: visible;
.container{
max-width: 1144px;
margin: 0 auto;
padding: 0 25px;
overflow: visible;
}

`

export const Header:FC = ()=>{
  return(
    <HeaderStyled>
      <div className="container">
        <div className="header__logo"></div>
        <div className="header__delimiter"></div>
        <div className="header__burger"></div>
        <div className="header__question"></div>
        <div className="header__news"></div>
      </div>
    </HeaderStyled>
  )
}