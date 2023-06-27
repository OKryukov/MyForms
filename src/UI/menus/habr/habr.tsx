import { FC } from 'react'
import { useSelector } from 'react-redux';
import styled from "styled-components";
import { StateType } from '../../../BLL/store';
import { Header } from './header';
import { Main } from './main';
import { Navigation } from './navigation';

const HabrMenuStyled = styled.div`
  
`
const HabrMenu:FC = ()=>{
  const isEnglish = useSelector((state:StateType)=>state.theme.language==='English')
  return(
    <HabrMenuStyled>
      <Header/>
      <Navigation/>
      <Main/>
    </HabrMenuStyled>
  )
}
export default HabrMenu