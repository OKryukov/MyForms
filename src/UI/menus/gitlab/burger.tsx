import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { BurgerSVG, DoorSVG, GroupsSVG, ScissorsSVG, TagsSVG } from '../../commons/svgStorage'

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
  svg{
    fill: #fbfafd;
    width: 21px;
  }
}
svg{
  width: 16px;
  fill: #333238;
}
.burger__list{
  position: absolute;
  display: grid;
  padding: 8px;
  width: 240px;
  background-color: #fbfafd;
  border-radius: 4px;
}
.burger__item{
  justify-self: start;
  height: 32px;
  width: 100%;
  padding: 8px 8px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  border-radius: 4px;
  :hover:not(:first-of-type){
    background-color: #c4c8cadf;
  }
  span{
    font-size: 14px;
    color: #333238;
  }
}
.burger__item:first-of-type{
  span{
    font-weight: 700;
  }
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
          <DoorSVG/>
          <span>Projects</span>
        </li>
        <li className="burger__item">
          <GroupsSVG/>
          <span>Groups</span>
        </li>
        <li className="burger__item">
          <TagsSVG/>
          <span>Topics</span>
        </li>
        <li className="burger__item">
          <ScissorsSVG/>
          <span>Snippets</span>
        </li>
      </ul>
    </BurgerStyled>
  )
}