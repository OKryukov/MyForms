import { FC } from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";

const HeaderLeftStyled = styled.div`
  
`
export const HeaderLeft:FC = ()=>{
  return(
    <HeaderLeftStyled>
      HeaderLeft
      <div className="container">
        <div className="header__logo"></div>
        <div className="header__delimiter"></div>
        <div className="header__burger"></div>
        <Link to='/questions' className="header__question">Как стать автором</Link>
        <Link to='/career' className="header__path">
          <span>Бэкендеры, вам сюда</span>
        </Link>
      </div>
    </HeaderLeftStyled>
  )
}