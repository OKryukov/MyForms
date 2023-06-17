import { FC } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const HeaderStyled = styled.header`
height: 48px;
background-color: #303b44;
.header__container{
max-width: 1144px;
margin: 0 auto;
padding: 0 25px;
}
`

export const Header:FC = ()=>{
  return(
    <HeaderStyled>
      <div className="header__container">
      <div className="header_top">        
        <div className="header__logo"></div>
        <div className="header__delimiter"></div>
        <div className="header__burger"></div>
        <div className="header__question"></div>
        <div className="header__news"></div>
      HEADER
      </div>
      <div className="header_bottom"></div>
        <ul className="menu">
          <li className="menu__item"><NavLink to={'allthreads'}>Все потоки</NavLink></li>
          <li className="menu__item"><NavLink to={''}></NavLink></li>
          <li className="menu__item"><NavLink to={''}></NavLink></li>
          <li className="menu__item"><NavLink to={''}></NavLink></li>
          <li className="menu__item"><NavLink to={''}></NavLink></li>
          <li className="menu__item"><NavLink to={''}></NavLink></li>
          <li className="menu__item"><NavLink to={''}></NavLink></li>
        </ul>
      </div>
    </HeaderStyled>
  )
}