import { FC, useState } from "react";
import styled from "styled-components";
import { HabrCalendarSVG, HabrProfileSVG } from "../../../commons/svgStorage";
import { Link } from "react-router-dom";

const ProfileBurgerStyled = styled.div`
position: relative;
overflow: visible;
.list{
  position: absolute;
  width: 300px;
  height: 264px;
  border-radius: 4px;
  padding: 12px 0;
  background-color: white;
  &>*{
    width: 100%;
  }
  .forms{
  display: flex;
  .signin{
    width: 52px;
    padding: 8px 16px;
  }
  .signup{
    width: 108px;
  }
}
}
.hide{
  display: none;
}
button svg{
  width: 24px;
}

button{
  width: 300px;
  overflow: visible;
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
        <div className="forms">
          <div className="signin"><Link to={'signin'}>Войти</Link></div>
          <div className="signup"><Link to={'signup'}>Регистрация</Link></div>
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