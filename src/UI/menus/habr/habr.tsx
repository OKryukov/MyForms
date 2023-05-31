import { FC } from 'react'
import { useSelector } from 'react-redux';
import styled from "styled-components";
import { StateType } from '../../../BLL/store';

const HabrMenuStyled = styled.div`
  
`
const HabrMenu:FC = ()=>{
  const isEnglish = useSelector((state:StateType)=>state.theme.language=='English')
  return(
    <HabrMenuStyled>
      HabrMenu
    </HabrMenuStyled>
  )
}
export default HabrMenu