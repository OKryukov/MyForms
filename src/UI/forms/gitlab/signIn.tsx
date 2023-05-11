import { FC } from 'react'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import styled from 'styled-components'
const SignInStyled = styled.form`
  
`
export const SignIn:FC = ()=>{
  const{ handleSubmit, reset, register, formState:{errors, isValid}} = useForm({mode:'onTouched'})
  const formHandler:SubmitHandler<FieldValues> = (event)=>{
    console.log(event)
  }
  return(
    <SignInStyled onSubmit={handleSubmit(formHandler)}>
      SignIn
    </SignInStyled>
  )
}

