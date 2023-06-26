import { FC } from 'react'
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavigationLeftStyled = styled.ul`
display: grid;
grid-template-columns: repeat(7, max-content);
align-items: center;
grid-gap: 20px;
li{
  color: #909090;
  transition: color 0.1s linear;
  :hover{
    color: #007aff;
  }
}
`
export const NavigationLeft:FC = ()=>{
  return(
    <NavigationLeftStyled>
      <li><NavLink to={'allthreads'}>Все потоки</NavLink></li>
      <li><NavLink to={'development'}>Разработка</NavLink></li>
      <li><NavLink to={'administration'}>Администрирование</NavLink></li>
      <li><NavLink to={'design'}>Дизайн</NavLink></li>
      <li><NavLink to={'management'}>Менеджмент</NavLink></li>
      <li><NavLink to={'marketing'}>Маркетинг</NavLink></li>
      <li><NavLink to={'sciencepop'}>Научпоп</NavLink></li>
    </NavigationLeftStyled>
  )
}