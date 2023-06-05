import { FC } from 'react'
import { useSelector } from 'react-redux';
import styled from "styled-components";
import { StateType } from '../../../BLL/store';
import AboutDropdown from './aboutDropdown';
import { GitlabLogo } from './logo';

const GitlabMenuStyled = styled.div`
height: 100%;
.gitlabMenu__header{
  height: 72px;
  border-radius: 4px;
  background-color: #292961;
  padding: 0 12px;
  display: grid;
  grid-template-columns: 42px 1fr;
  align-items: center;
  grid-gap: 10px;
  overflow: visible;
}
`
const GitlabMenu:FC = ()=>{
  const isEnglish = useSelector((state:StateType)=>state.theme.language==='English')
  return(
    <GitlabMenuStyled>
      <header className='gitlabMenu__header'>
        <GitlabLogo/>
        <AboutDropdown/>
      </header>
      <main className='gitlabMenu__main'></main>
    </GitlabMenuStyled>
  )
}
export default GitlabMenu