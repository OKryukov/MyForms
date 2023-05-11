import { FC } from 'react'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import styled from 'styled-components'
const SignUpStyled = styled.form`
  
`
export const SignUp:FC = ()=>{
  const{ handleSubmit, reset, register, formState:{errors, isValid}} = useForm({mode:'onTouched'})
  const formHandler:SubmitHandler<FieldValues> = (event)=>{
    console.log(event)
  }
  return(
    <SignUpStyled onSubmit={handleSubmit(formHandler)}>
      SignUp
    </SignUpStyled>
  )
}
