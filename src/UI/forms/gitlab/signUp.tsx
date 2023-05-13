import { FC } from 'react'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Services } from './services'
const SignUpStyled = styled.form`
  
`
export const SignUp:FC = ()=>{
  const{ handleSubmit, reset, register, formState:{errors, isValid}} = useForm({mode:'onTouched'})
  const formHandler:SubmitHandler<FieldValues> = (event)=>{
    console.log(event)
  }
  return (
    <SignUpStyled onSubmit={handleSubmit(formHandler)}>
      <div className="logo">
        <img src="#" alt="logo" />
        <div>GitLab.com</div>
      </div>
      <div className="name">
        <div className="firstName">
          <label htmlFor="gitlab/signup/firstName">First name</label>
          <input type="text" id='gitlab/signup/firstName'/>
        </div>
        <div className="lastName">
          <label htmlFor="gitlab/signup/lastName">Last name</label>
          <input type="text" id='gitlab/signup/lastName'/>
        </div>
      </div>
      <div className="username">
        <label htmlFor="gitlab/signup/username">Username</label>
        <input type="text" id='gitlab/signup/username'/>
      </div>
      <div className="email">
        <label htmlFor="gitlab/signup/email">Email</label>
        <input type='email' id='gitlab/signup/email'/>
        <div className="error">We recommend a work email address.</div>
      </div>
      <div className="password">
        <label htmlFor="gitlab/signup/password">Email</label>
        <input type='password' id='gitlab/signup/password'/>
        <div className="error">We recommend a work email address.</div>
      </div>
      <button>Register</button>
      <div className="policy">By clicking Register or registering through a third party you accept the GitLab<Link to={'/gitlab.com/signup'}> Terms of Use and acknowledge the Privacy Policy and Cookie Policy</Link></div>
      <div className="register">
        <div className='register__title'>Register with:</div>
        <Services/>
      </div>
      <div className="signin">Already have an account?<Link to={'/gitlab.com/signin'}> Sign in</Link></div>
    </SignUpStyled>
  )
}
