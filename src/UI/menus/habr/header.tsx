import { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { HabrProfileSVG, HabrSearchSVG } from "../../commons/svgStorage";
import { ProfileBurger } from "./profileBurger";
const HeaderStyled = styled.header`
overflow: visible;
.header__container{
max-width: 1144px;
margin: 0 auto;
padding: 0 25px;
overflow: visible;
}
.header__top{
  height: 48px;
  background-color: #303b44;
}
.header__bottom{
  background-color: #fff;
  border-bottom: 1px solid #dedede;
  overflow: visible;
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
    .searchAndProfile{
      display: grid;
      grid-template-columns: repeat(2, 24px);
      grid-gap: 12px;
      align-items: center;
      overflow: visible;
      svg{
        fill: #929ca5;
        transition: color 0.1s linear;
        :hover{
          fill: #007aff;
        }
      }
      button, a{
        width: 24px;
        height: 24px;
        background-color: transparent;
        cursor: pointer;
        display: grid;
        align-items: center;
        justify-items: center;
      }
      a svg{
        width: 18px;
      }
      button svg{
        width: 24px;
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
          <li className="menu__item"><NavLink to={'development'}>Разработка</NavLink></li>
          <li className="menu__item"><NavLink to={'administration'}>Администрирование</NavLink></li>
          <li className="menu__item"><NavLink to={'design'}>Дизайн</NavLink></li>
          <li className="menu__item"><NavLink to={'management'}>Менеджмент</NavLink></li>
          <li className="menu__item"><NavLink to={'marketing'}>Маркетинг</NavLink></li>
          <li className="menu__item"><NavLink to={'sciencepop'}>Научпоп</NavLink></li>
          </ul>
          <div className="searchAndProfile">
            <Link to='search'><HabrSearchSVG/></Link>
            <div className="profile">
              <button><HabrProfileSVG/></button>
              <ProfileBurger/>
            </div>
          </div>
        </div>
      </div>
    </HeaderStyled>
  )
}