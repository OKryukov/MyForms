import { FC } from 'react'
import { useSelector } from 'react-redux';
import styled from "styled-components";
import { StateType } from '../../../BLL/store';

const GitlabMenuStyled = styled.div`
  
`
const GitlabMenu:FC = ()=>{
  const isEnglish = useSelector((state:StateType)=>state.theme.language=='English')
  return(
    <GitlabMenuStyled>
      GitlabMenu
    </GitlabMenuStyled>
  )
}
export default GitlabMenu