import { FC, useState } from 'react'
import { Link } from 'react-router-dom';
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
.burger{
  .burger__button{
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
  .burger__list{
    position: absolute;
    top: 63px;
    width: 300px;
    padding: 12px 0;
    background-color: white;
    border-radius: 4px;
    .burger__item{
      padding: 12px 24px;
      cursor: pointer;
      :hover{
        background-color: #c0bebe85;
      }
      .title{
      font-size: 20px;
      color: #333;
      }
      .description{
        font-size: 14px;
        color: #909090;
      }
    }
  }
  .none{
    display: none;
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
  const [isActive, setIsActive] = useState(false)
  const burgerClickHandler = ()=>{
    setIsActive(isActive?false:true)
  }
  return(
    <HeaderLeftStyled>
      <Link to='/home' className="logo">Хабр</Link>
      <div className="header__delimiter"></div>
      <div className="burger">
        <button className="burger__button" onClick={burgerClickHandler} onBlur={burgerClickHandler}>
          <DropdownSVG/>
        </button>
        <ul className={isActive?'burger__list':'burger__list none'}>
          <li className='burger__item'>
            <div className="title">Хабр</div>
            <div className="description">Сообщество IT-специалистов</div>
          </li>
          <li className='burger__item'>
            <div className="title">Q&A</div>
            <div className="description">Ответы на любые вопросы об IT</div>
          </li>
          <li className='burger__item'>
            <div className="title">Карьера</div>
            <div className="description">Профессиональное развитие в IT</div>
          </li>
          <li className='burger__item'>
            <div className="title">Фриланс</div>
            <div className="description">Удаленная работа для IT-специалистов</div>
          </li>
        </ul>
      </div>

      <Link to='/questions' className="header__question">Как стать автором</Link>
      <Link to='/career' className="header__path">
        <img src={habrPath}/>
        <span>Бэкендеры, вам сюда</span>
      </Link>
    </HeaderLeftStyled>
  )
}