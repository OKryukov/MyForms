import { FC, useState } from 'react'
import styled from "styled-components";
import { HabrCalendarSVG, HabrProfileSVG, HabrSearchSVG } from "../../commons/svgStorage";
import { Link } from "react-router-dom";

const NavigationRightStyled = styled.div`
height: 100%;
display: flex;
align-items: center;
.menu-right{
  display: grid;
  grid-template-columns: repeat(2, 24px);
  grid-gap: 12px;
  align-items: center;
}
.search svg{
  fill: #929ca5;
  width: 18px;
  transition: color 0.1s linear;
  :hover{
    fill: #007aff;
  }
}
.profile{
  &>button{
    background-color: transparent;
    cursor: pointer;
    svg{
      width: 20px;
      background-color: transparent;
      fill: #929ca5;
      transition: color 0.1s linear;
      :hover{
        fill: #007aff;
      }
    }
  }
  .submenu{
    position: absolute;
    z-index: 5;
    width: 300px;
    height: 264px;
    border-radius: 4px;
    padding-bottom: 12px;
    background-color: white;
    & button{
      height: 48px;
      width: 100%;
      padding: 0 20px;
      transition: background-color 0.1s linear;
      cursor: pointer;
      font-size: 16px;
      display: flex;
      align-items: center;
      background-color: transparent;
      :hover{
        background-color: #007bff24;
        color: #548eaa;
      }
    }
    .forms{
      display: flex;
      gap: 12px;
      padding: 20px;
      position: relative;
      .signin a{
        width: 68px;
        height: 34px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 3px;
        border: 1px #548eaa solid;
        color: #548eaa;
      }
      .signup a{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 110px;
        height: 34px;
        border-radius: 3px;
        background-color: #548eaa;
        color: white;
        :hover{
          background-color: #709aae;
        }
      }
    }
    .forms::after{
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: #8080807a;
      bottom: 0;
      left: 0;
    }
    .language{
      position: relative;
      button{
        margin-top: 8px;
        display: flex;
        gap: 8px;
        svg{
          width: 20px;
          fill: #929ca5; 
        }
        span{
          color: #929ca5;
        }
      }
    }
    .language::before{
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: #8080807a;
      top: 0;
      left: 0;
    }
    .question{
      margin-top: 12px;
    }
    .rules{
      margin-bottom: 12px;
    }
  }
  .hide{
    display: none;
  }
}
`
export const NavigationRight:FC = ()=>{
  const [isSelected, setIsSelected] = useState(false)
  const clickHandler = ()=>{
    isSelected?setIsSelected(false):setIsSelected(true)
  }
  return(
    <NavigationRightStyled>
      <ul className='menu-right'>
        <li className='search'>
          <Link to='search'>
            <HabrSearchSVG />
          </Link>
        </li>
        <li className='profile'>
          <button onClick={clickHandler} onBlur={clickHandler}><HabrProfileSVG /></button>
          <ul className={isSelected ? 'submenu' : 'submenu hide'}>
            <li className="forms">
              <div className="signin"><Link to={'signin'}>Войти</Link></div>
              <div className="signup"><Link to={'signup'}>Регистрация</Link></div>
            </li>
            <li className='question'>
              <button className="item">Как стать автором</button>
            </li>
            <li className='rules'>
              <button className="item">Правила сайта</button>
            </li>
            <li className='language'>
              <button className="item">
                <HabrCalendarSVG />
                <span>Язык, лента</span>
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </NavigationRightStyled>
  )
}