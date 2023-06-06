import { FC } from 'react'
import { useSelector } from 'react-redux';
import styled from "styled-components";
import { StateType } from '../../../BLL/store';
import AboutDropdown from './aboutDropdown';
import { GitlabLogo } from './logo';
import { Link } from 'react-router-dom';

const GitlabMenuStyled = styled.div`
height: 100%;
.gitlabMenu__header{
  height: 72px;
  border-radius: 4px;
  background-color: #292961;
  padding: 0 12px;
  display: grid;
  grid-template-columns: 42px repeat(3,max-content);
  align-items: center;
  grid-gap: 10px;
  overflow: visible;
}
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
const GitlabMenu:FC = ()=>{
  const isEnglish = useSelector((state:StateType)=>state.theme.language==='English')
  return(
    <GitlabMenuStyled>
      <header className='gitlabMenu__header'>
        <GitlabLogo/> 
        <AboutDropdown/>
        <Link className='pricing' to={'pricing'}>Pricing</Link>
        <Link className='expert' to={'expert'}>Talk to an expert</Link>
        
      </header>
      <main className='gitlabMenu__main'></main>
    </GitlabMenuStyled>
  )
}
export default GitlabMenu