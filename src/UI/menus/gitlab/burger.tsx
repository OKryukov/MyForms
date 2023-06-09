import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { BurgerSVG } from '../../commons/svgStorage'

const BurgerStyled = styled.div`
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