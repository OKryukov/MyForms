import { FC } from 'react'
import styled from "styled-components";
import { HabrSearchSVG } from "../../commons/svgStorage";
import { ProfileBurger } from "./components/profileBurger";
import { Link } from "react-router-dom";

const NavigationRightStyled = styled.div`
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

`
export const NavigationRight:FC = ()=>{
  return(
    <NavigationRightStyled>
      <Link to='search'><HabrSearchSVG /></Link>
      <div className="profile">
        <ProfileBurger />
      </div>
    </NavigationRightStyled>
  )
}