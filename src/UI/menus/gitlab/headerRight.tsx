import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderRightStyled = styled.div`
justify-self: end;
`
export const HeaderRight:FC = ()=>{
  return(
    <HeaderRightStyled>
      <div className="support"></div>
      <div className="burger"></div>
      <Link to={'/signup'} className="signUp">Register</Link>
      <Link to={'/signin'} className="signIn">Sign in</Link>
    </HeaderRightStyled>
  )
}