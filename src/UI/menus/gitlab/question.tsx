import { FC, useState } from 'react'
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
  position: relative;
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
.question__list{
  background-color: #fbfafd;
  display: grid;
  border-radius: 4px;
  padding: 8px 0px;
  position: absolute;
  z-index: 3;
  top: 83px;
}
.question__item{
  height: 32px;
  width: 238px;
  padding: 8px 12px;
  display: flex;
  cursor: pointer;
  font-size: 16px;
  color: #333238;
  :hover{
    background-color: #c4c8cadf;
  }
}
.display_none{
  display: none;
}
`
export const Question:FC = ()=>{
  const [isSelected, setIsSelected] = useState(false)
  const clickHandler = ()=>{
    isSelected?setIsSelected(false):setIsSelected(true)
  }
  return(
    <QuestionStyled>
      <button className='question' onClick={clickHandler} onBlur={clickHandler}>
        <QuestionSVG/>
        <DotSVG/>
        <DropdownSVG/>
      </button>
      <ul className={isSelected?'question__list': 'question__list display_none'}>
        <li className="question__item">What's new</li>
        <li className="question__item">Help</li>
        <li className="question__item">Support</li>
        <li className="question__item">Community forum</li>
        <li className="question__item">Keyboard shortcuts</li>
        <li className="question__item">Submit feedback</li>
        <li className="question__item">Contribute to GitLab</li>
      </ul>
    </QuestionStyled>
  )
}