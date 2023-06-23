import { FC } from "react";
import styled from "styled-components";
import { HabrCalendarSVG } from "../../../commons/svgStorage";
import { Link } from "react-router-dom";

const ProfileBurgerStyled = styled.div`
position: absolute;
width: 300px;
background-color: #966e6e;
a{
  overflow: visible;
}
.item{
  overflow: visible;
}
button{
  width: 300px;
}

`
export const ProfileBurger:FC = ()=>{
  return(
    <ProfileBurgerStyled>
      <div className="item">
        <Link to='/signin'>Войти</Link>
        <Link to='/signup'>Регистрация</Link>
      </div>
      <button className="item">Как стать автором</button>
      <button className="item">Правила сайта</button>
      <button className="item">
        <HabrCalendarSVG/>
        <span>Язык, лента</span>
      </button>
    </ProfileBurgerStyled>
  )
}