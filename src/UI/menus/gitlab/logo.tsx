import { FC } from 'react'
import styled from 'styled-components'


const LogoStyled = styled.div`
height: 60px;
padding: 2px 8px;
border-radius: 4px;
display: flex;
cursor: pointer;
:hover{
  background-color: #6666c4;
}

img{
  width: 25px;
}
`
export const GitlabLogo:FC = ()=>{
  return(
    <LogoStyled>
        <img src="https://gitlab.com/assets/logo-911de323fa0def29aaf817fca33916653fc92f3ff31647ac41d2c39bbe243edb.svg"/>
    </LogoStyled>
  )
}