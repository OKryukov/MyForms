import { FC } from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import habrPath from '../../../BLL/images/habrPath.png'

const HeaderLeftStyled = styled.div`
display: grid;
grid-template-columns: repeat(5, max-content);
align-items: center;
.header__question{
  padding: 6px 8px;
  border: 1px solid #6f7577;
  border-radius: 3px;
  text-transform: uppercase;
  font-size: 14px;
  color: white;
  margin-right: 20px;
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
      <div className="header__logo"></div>
      <div className="header__delimiter"></div>
      <div className="header__burger"></div>
      <Link to='/questions' className="header__question">Как стать автором</Link>
      <Link to='/career' className="header__path">
        <img src={habrPath}/>
        <span>Бэкендеры, вам сюда</span>
      </Link>
    </HeaderLeftStyled>
  )
}