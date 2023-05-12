import { FC } from 'react'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Services } from './services'
const SignInStyled = styled.form`
  
`
export const SignIn:FC = ()=>{
  const{ handleSubmit, reset, register, formState:{errors, isValid}} = useForm({mode:'onTouched'})
  const formHandler:SubmitHandler<FieldValues> = (event)=>{
    console.log(event)
  }
  return(
    <SignInStyled onSubmit={handleSubmit(formHandler)}>
      <div className="logo">
        <img src="#" alt="logo" />
        <div>GitLab.com</div>
      </div>
      <div className="email">
        <label htmlFor="gitlab/email">Username or email</label>
        <input type='email' {...register('email')} id='gitlab/email'/>
      </div>
      <div className="password">
        <label htmlFor="">Password</label>
        <input type='password' {...register('password')} id='gitlab/password'/>
      </div>
      <div className="remember">
        <input type="checkbox" {...register('checkbox-one')} id="gitlab/checkbox-one"/>
        <label htmlFor="gitlab/checkbox-one">Remember me</label>
        <Link to='/gitlab.com/signin'>Forgot your password</Link>
      </div>
      <button>Sgign in</button>
      <div className="policy">By signing in you accept the
        <Link to='/gitlab.com/signin'> Terms of Use and acknowledge the Privacy Policy and Cookie Policy.</Link>
        </div>
      <div className="register">Don't have an account yet?
        <Link to='/gitlab.com/signin'> Register now</Link>
      </div>
      <div className="or">
        <span>or</span>
      </div>
      <Services/>
      <div className="remember_services">
        <input type="checkbox" {...register('checkbox-two')} id="gitlab/checkbox-two"/>
        <label htmlFor="gitlab/checkbox-two">Remember me</label>
      </div>
    </SignInStyled>
  )
}

