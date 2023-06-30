import { FC } from 'react'
import { Link, NavLink } from 'react-router-dom';
import styled from "styled-components";
import habrPath from '../../../BLL/images/habrPath.png'
import { DropdownSVG } from '../../commons/svgStorage';

const HeaderLeftStyled = styled.div`
display: grid;
grid-template-columns: repeat(5, max-content);
align-items: center;
.logo{
  color: white;
  font-size: 24px;
  font-weight: 600;
  margin-right: 8px;
}
.header__burger{
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: transparent;
  svg{
    width: 15px;
    fill: white;
  }
  ::before{
    content: '';
    width: 4px;
    height: 24px;
    display: inline-block;
    border-left: 1px solid hsla(0,0%,100%,.24);
  }
}
.header__question{
  padding: 6px 8px;
  border: 1px solid #6f7577;
  border-radius: 3px;
  text-transform: uppercase;
  font-size: 14px;
  color: white;
  margin:0 20px 0 10px;
  :hover{
    border-color: white;
  }
}
.header__path{
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-gap: 8px;
  img{
    width: 20px;
    height: 20px;
  }
  span{
    color: white;
  }
  :hover{
    span{
      color: #548eaa;
    }
  }
}
`
export const HeaderLeft:FC = ()=>{
  return(
    <HeaderLeftStyled>
      <Link to='/home' className="logo">Хабр</Link>
      <div className="header__delimiter"></div>
      <button className="header__burger">
        <DropdownSVG/>
      </button>
      <Link to='/questions' className="header__question">Как стать автором</Link>
      <Link to='/career' className="header__path">
        <img src={habrPath}/>
        <span>Бэкендеры, вам сюда</span>
      </Link>
    </HeaderLeftStyled>
  )
}