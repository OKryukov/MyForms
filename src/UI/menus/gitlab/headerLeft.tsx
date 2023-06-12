import { FC } from 'react'
import styled from 'styled-components'
import { GitlabLogo } from './logo'
import AboutDropdown from './aboutDropdown'
import { Link } from 'react-router-dom'


const HeaderLeftStyled = styled.div`
height: 100%;
display: grid;
grid-template-columns: 42px repeat(3,max-content);
align-items: center;
grid-gap: 10px;
overflow: visible;
.pricing, .expert{
  height: 32px;
  padding: 6px 8px;
  background-color: transparent;
  display: flex;
  align-items: center;
  border-radius: 4px;
  color: #d1d1f0;
  font-size: 14px;
  font-weight: 600;
  :hover{
    background-color: #6666c4;
  }
}
`
export const HeaderLeft:FC = ()=>{
  return(
    <HeaderLeftStyled>
      <GitlabLogo/>
      <AboutDropdown/>
      <Link className='pricing' to={'pricing'}>Pricing</Link>
      <Link className='expert' to={'expert'}>Talk to an expert</Link>
    </HeaderLeftStyled>
  )
}