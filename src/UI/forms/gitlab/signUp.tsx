import { FC } from 'react'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Services } from './services'
import { InputStyled } from './input'
import { Logo } from './logo'
const SignUpStyled = styled.div`
border-radius: ${({theme})=>theme.borrad.base};
background-color: #fff;
display: grid;
align-content: center;
justify-items: center;
form{
  max-width: 441px;
  label{
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 2px;
    line-height: 1;
    display: inline-grid;
    margin-bottom: 2px;
  }
  .error{
    font-size: 13px;
    color: #737278;
  }
  &>div{
    margin-bottom: 16px;
  }
}
.name{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  
}
.register__title{
  margin-bottom: 8px;
  font-size: 16px;
  text-align: center;
  color: #333238
}
.signin{
  display: flex;
  justify-content: center;
  padding-top: 16px;
  color: #333238;
  a{
    color: #558cb7;
    :hover{
      text-decoration: underline;
    }
  }
}
`
export const SignUp:FC = ()=>{
  const{ handleSubmit, reset, register, formState:{errors, isValid}} = useForm({mode:'onTouched'})
  const validParams = {
    firstName:{
      required:'This field is required.',
    },
    lastName:{
      required:'This field is required.',
    },
    email:{
      required:'Please provide a valid email address.',
      pattern:{value:/\S+@[a-z]+.[a-z]+/, message: 'This email address does not look right, are you sure you typed it correctly?'}
    },
    password:{
      required:'Minimum length is 8 characters.',
      minLength: {value: 8, message:'Minimum length is 8 characters.'}
    },
  }
  const formHandler:SubmitHandler<FieldValues> = (event)=>{
    console.log(event)
  }
  return (
    <SignUpStyled>
      <Logo />
      <form onSubmit={handleSubmit(formHandler)}>
        <div className="name">
          <div className="firstName">
            <label htmlFor="gitlab/signup/firstName">First name</label>
            <InputStyled type="text" id='gitlab/signup/firstName' {...register('gitlab/signup/firstName', validParams.firstName)}/>
            {errors['gitlab/signup/firstName'] && <div className="error">{errors['gitlab/signup/firstName']?.message as string}</div>}
          </div>
          <div className="lastName">
            <label htmlFor="gitlab/signup/lastName">Last name</label>
            <InputStyled type="text" id='gitlab/signup/lastName' />
          </div>
        </div>
        <div className="username">
          <label htmlFor="gitlab/signup/username">Username</label>
          <InputStyled type="text" id='gitlab/signup/username' />
        </div>
        <div className="email">
          <label htmlFor="gitlab/signup/email">Email</label>
          <InputStyled type='email' id='gitlab/signup/email' {...register('gitlab/signup/email', validParams.email)}/>
          <div className="error">{errors['gitlab/signup/email']?errors['gitlab/signup/email']?.message as string:"We recommend a work email address."}</div>
        </div>
        <div className="password">
          <label htmlFor="gitlab/signup/password">Password</label>
          <InputStyled type='password' id='gitlab/signup/password' {...register('gitlab/signup/password', validParams.password)}/>
          <div className="error">{errors['gitlab/signup/password']?errors['gitlab/signup/password']?.message as string:'Minimum length is 8 characters.'}</div>
        </div>
        <button>Register</button>
        <div className="policy">By clicking Register or registering through a third party you accept the GitLab<Link to={'/gitlab.com/signup'}> Terms of Use and acknowledge the Privacy Policy and Cookie Policy</Link></div>
        <div className="register">
          <div className='register__title'>Register with:</div>
          <Services />
        </div>
        <span className="signin">Already have an account?<Link to={'/gitlab.com/signin'}>Sign in</Link></span>
      </form>
    </SignUpStyled>
  )
}
