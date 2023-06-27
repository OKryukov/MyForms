import { FC } from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";

const HeaderRightStyled = styled.div`
color: #99ffa7;

`
export const HeaderRight:FC = ()=>{
  return(
    <HeaderRightStyled>
      <Link to='/events'>Поехали в гик-трип по Календарю IT-ивентов?</Link>
    </HeaderRightStyled>
  )
}