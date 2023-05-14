import { FC } from 'react'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Services } from './services'
import { InputStyled } from './input'
const SignInStyled = styled.div`

background-color: white;
display: grid;
align-content: center;
justify-items: center;
form{
  width: 465px;
  padding: 0 16px;
}
.password, .email{
  label{
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 2px;
  }
}
[class*=remember]{
  label, input{
    cursor: pointer;
  }
}
a{
  color: #1f75cb;
  :hover{
    text-decoration: underline;
  }
}

`
export const SignIn:FC = ()=>{
  const{ handleSubmit, reset, register, formState:{errors, isValid}} = useForm({mode:'onTouched'})
  const formHandler:SubmitHandler<FieldValues> = (event)=>{
    console.log(event)
    reset()
  }
  return (
    <SignInStyled>
      <form onSubmit={handleSubmit(formHandler)}>
        <div className="logo">
          <img src="#" alt="logo" />
          <div>GitLab.com</div>
        </div>
        <fieldset>
          <div className="email">
            <label htmlFor="gitlab/sigmin/email">Username or email</label>
            <InputStyled type='email' {...register('email')} id='gitlab/sigmin/email'/>
          </div>
          <div className="password">
            <label htmlFor="gitlab/sigmin/password">Password</label>
            <InputStyled type='password' {...register('password')} id='gitlab/sigmin/password'/>
          </div>
          <div className="remember">
            <input type="checkbox" {...register('checkbox-one')} id="gitlab/sigmin/checkbox-one" />
            <label htmlFor="gitlab/sigmin/checkbox-one">Remember me</label>
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
          <Services />
          <div className="remember_services">
            <input type="checkbox" {...register('checkbox-two')} id="gitlab/sigmin/checkbox-two" />
            <label htmlFor="gitlab/sigmin/checkbox-two">Remember me</label>
          </div>
        </fieldset>
      </form>
    </SignInStyled>
  )
}

