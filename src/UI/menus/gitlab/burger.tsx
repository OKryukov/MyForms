import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { BurgerSVG } from '../../commons/svgStorage'

const BurgerStyled = styled.div`
background-color: #292961;
.burger{
  width: 32px;
  height: 32px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: transparent;
  :hover{
  background-color: #6666c4;
}
}
svg{
  width: 20px;
  fill: #d1d1f0;
}
.burger__list{
  position: absolute;
  display: grid;
  padding: 8px;
}
.burger__item{
  height: 32px;
  width: 120px;
  padding: 8px 8px 12px;
}
`
export const Burger:FC = ()=>{
  return(
    <BurgerStyled>
      <button className="burger">
        <BurgerSVG/>
      </button>
      <ul className="burger__list">
        <li className="burger__item">
          <span>Explore</span>
        </li>
        <li className="burger__item">
          <span>Projects</span>
        </li>
        <li className="burger__item">
          <span>Groups</span>
        </li>
        <li className="burger__item">
          <span>Topics</span>
        </li>
        <li className="burger__item">
          <span>Snippets</span>
        </li>
      </ul>
    </BurgerStyled>
  )
}