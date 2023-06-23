import { FC } from 'react'
import styled from 'styled-components'
import { Switcher } from '../../commons/switcher'
import { Route, Routes } from 'react-router-dom'
import { Information } from './information'
import { SignIn } from './signIn'
import { SignUp } from './signUp'
const GitlabStyled = styled.div`
display: grid;
grid-template-rows: 50px 1fr;
grid-gap: ${({theme})=>theme.gaps.extraLarge};
height: 100%;
`
const Gitlab:FC = ()=>{
  return(
    <GitlabStyled>
      <Switcher baseURL='/gitlab/forms'/>
      <Routes>
        <Route path='/' element={<Information/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/signup' element={<SignUp/>} />
      </Routes>
    </GitlabStyled>
  )
}
export default Gitlab

