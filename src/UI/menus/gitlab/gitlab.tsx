import { FC } from 'react'
import { useSelector } from 'react-redux';
import styled from "styled-components";
import { StateType } from '../../../BLL/store';
import { HeaderRight } from './headerRight';
import { HeaderLeft } from './headerLeft';

const GitlabMenuStyled = styled.div`
height: 100%;
.header{
  width: 100%;
  padding: 0 16px;
  overflow: visible;
  height: 72px;
  border-radius: 4px;
  background-color: #292961;
  display: flex;
  justify-content: space-between;
}
`
const GitlabMenu:FC = ()=>{
  const isEnglish = useSelector((state:StateType)=>state.theme.language==='English')
  return(
    <GitlabMenuStyled>
      <header className='header'>
        <HeaderLeft/>
        <HeaderRight/>
      </header>
      <main className='main'></main>
    </GitlabMenuStyled>
  )
}
export default GitlabMenu