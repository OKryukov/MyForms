import { FC, useState } from 'react'
import styled from "styled-components";
import { HabrCalendarSVG, HabrProfileSVG, HabrSearchSVG } from "../../commons/svgStorage";
import { Link } from "react-router-dom";

const NavigationRightStyled = styled.div`
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
  .submenu{
    position: absolute;
    z-index: 5;
    width: 300px;
    height: 264px;
    border-radius: 4px;
    padding: 12px 0;
    background-color: white;
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
            <li>
              <button className="item">Как стать автором</button>
            </li>
            <li>
              <button className="item">Правила сайта</button>
            </li>
            <li>
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