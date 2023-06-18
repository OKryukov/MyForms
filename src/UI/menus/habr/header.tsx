import { FC } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const HeaderStyled = styled.header`
.header__container{
max-width: 1144px;
margin: 0 auto;
padding: 0 25px;
}
.header__top{
  height: 48px;
  background-color: #303b44;
}
.header__bottom{
  background-color: #fff;
  border-bottom: 1px solid #dedede;
  .header__container{
    height: 57px;
    display: flex;
    justify-content: space-between;
    .menu{
      display: grid;
      grid-template-columns: repeat(7, max-content);
      align-items: center;
      grid-gap: 20px;
      .menu__item{
        color: #909090;
        transition: color 0.1s linear;
        :hover{
          color: #007aff;
        }
      }
    }
  }
}
`

export const Header:FC = ()=>{
  return(
    <HeaderStyled>
      <div className="header__top">
        <div className="header__container">
          <div className="header__logo"></div>
          <div className="header__delimiter"></div>
          <div className="header__burger"></div>
          <div className="header__question"></div>
          <div className="header__news"></div>
        </div>
      </div>
      <div className="header__bottom">
        <div className="header__container">
          <ul className="menu">
          <li className="menu__item"><NavLink to={'allthreads'}>Все потоки</NavLink></li>
          <li className="menu__item"><NavLink to={''}>Разработка</NavLink></li>
          <li className="menu__item"><NavLink to={''}>Администрирование</NavLink></li>
          <li className="menu__item"><NavLink to={''}>Дизайн</NavLink></li>
          <li className="menu__item"><NavLink to={''}>Менеджмент</NavLink></li>
          <li className="menu__item"><NavLink to={''}>Маркетинг</NavLink></li>
          <li className="menu__item"><NavLink to={''}>Научпоп</NavLink></li>
          </ul>
          <div className="searchAndProfile">
            search
          </div>
        </div>
      </div>
    </HeaderStyled>
  )
}