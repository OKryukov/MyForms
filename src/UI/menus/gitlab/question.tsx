import { FC } from 'react'
import styled from 'styled-components'
import { DotSVG, DropdownSVG, QuestionSVG } from '../../commons/svgStorage'
const QuestionStyled = styled.div`
`
export const Question:FC = ()=>{
  return(
    <QuestionStyled>
      <button>
        <QuestionSVG/>
        <DotSVG/>
        <DropdownSVG/>
      </button>
    </QuestionStyled>
  )
}