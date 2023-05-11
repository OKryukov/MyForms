import { FC } from 'react'
import styled from 'styled-components'
import { Switcher } from '../../commons/switcher'
import { Route, Routes } from 'react-router-dom'
import { Information } from './information'
import { SignIn } from './signIn'
import { SignUp } from './signUp'
const GitlabStyled = styled.div`
  
`
const Gitlab:FC = ()=>{
  return(
    <GitlabStyled>
      <Switcher baseURL='/gitlab.com'/>
      <Routes>
        <Route path='/' element={<Information/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/signup' element={<SignUp/>} />
      </Routes>
    </GitlabStyled>
  )
}
export default Gitlab

