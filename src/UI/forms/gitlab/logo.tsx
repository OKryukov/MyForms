import { FC } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { StateType } from '../../../BLL/store'

const LogoStyled = styled.div`
display: grid;
justify-items: center;
margin-top: 65px;
img{
  width: 56px;
}
div{
  font-size: 19px;
  font-weight: 600;
  color: #333238;
  padding: 20px 0;
}
`
export const Logo:FC = ()=>{
  const logo = useSelector((state:StateType)=>state.gitlab.logo)
  return(
    <LogoStyled>
      <img src={logo} alt="logo" />
      <div>GitLab.com</div>
    </LogoStyled>
  )
}