import { FC, useState } from "react";
import styled from "styled-components";
import { HabrCalendarSVG, HabrProfileSVG } from "../../../commons/svgStorage";
import { Link } from "react-router-dom";

const ProfileBurgerStyled = styled.div`
.list{
  position: absolute;
  top: 120px;
  width: 300px;
  border-radius: 4px;
  padding: 12px 0;
  background-color: white;

}
.hide{
  display: none;
}
button svg{
  width: 24px;
}
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
  const [isSelected, setIsSelected] = useState(false)
  const clickHandler = ()=>{
    isSelected?setIsSelected(false):setIsSelected(true)
  }
  return(
    <ProfileBurgerStyled>
      <button onClick={clickHandler} onBlur={clickHandler}><HabrProfileSVG/></button>
      <div className={isSelected?'list':'list hide'}>
        <div className="item">
          <Link to='/signin'>Войти</Link>
          <Link to='/signup'>Регистрация</Link>
        </div>
        <button className="item">Как стать автором</button>
        <button className="item">Правила сайта</button>
        <button className="item">
          <HabrCalendarSVG />
          <span>Язык, лента</span>
        </button>
      </div>
    </ProfileBurgerStyled>
  )
}