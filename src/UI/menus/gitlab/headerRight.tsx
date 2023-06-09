import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { BurgerSVG } from '../../commons/svgStorage'
import { Question } from './components/question'
import { Burger } from './components/burger'

const HeaderRightStyled = styled.div`
justify-self: end;
display: grid;
grid-template-columns: repeat(4, max-content);
grid-gap: 8px;
align-items: center;
overflow: visible;

.signUp, .signIn{
  display: inline-block;
  border-radius: 4px;
  height: 32px;
  padding: 4px 6px;
  border: 2px solid transparent;
  font-weight: 600;
  font-size: 14px;
}
.signUp{
  background-color: #d1d1f0;
  :hover{
    
  }
}
`
export const HeaderRight:FC = ()=>{
  return(
    <HeaderRightStyled>
      <button className="question">
        <Question/>
      </button>
      <button className="burger">
        <Burger/>
      </button>
      <Link to={'/signup'} className="signUp">Register</Link>
      <Link to={'/signin'} className="signIn">Sign in</Link>
    </HeaderRightStyled>
  )
}