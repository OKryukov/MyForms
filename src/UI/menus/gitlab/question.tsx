import { FC } from 'react'
import styled from 'styled-components'
import { DotSVG, DropdownSVG, QuestionSVG } from '../../commons/svgStorage'
const QuestionStyled = styled.div`
background-color: #292961;

.question{
  width: 52px;
  height: 32px;
  background-color: #292961;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 16px);
  align-items: center;
  justify-content: center;
  grid-gap: 8px;
  :hover{
  background-color: #6666c4;
  }
}
svg{
  width: 16px;
  fill: #fbfafd;
}
svg:nth-child(2){
  top: -11px;
  right: 8px;
  position: absolute;
  width: 40px;
}
`
export const Question:FC = ()=>{
  return(
    <QuestionStyled>
      <button className='question'>
        <QuestionSVG/>
        <DotSVG/>
        <DropdownSVG/>
      </button>
      <ul className='question__list'>
      </ul>
    </QuestionStyled>
  )
}