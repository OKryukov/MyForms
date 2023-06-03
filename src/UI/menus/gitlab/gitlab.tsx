import { FC } from 'react'
import { useSelector } from 'react-redux';
import styled from "styled-components";
import { StateType } from '../../../BLL/store';
import AboutDropdown from './aboutDropdown';

const GitlabMenuStyled = styled.div`
background-color: #292961;
`
const GitlabMenu:FC = ()=>{
  const isEnglish = useSelector((state:StateType)=>state.theme.language==='English')
  return(
    <GitlabMenuStyled>
      <header className='gitlabMenu__header'>
        <AboutDropdown/>
      </header>
      <main className='gitlabMenu__main'></main>
    </GitlabMenuStyled>
  )
}
export default GitlabMenu