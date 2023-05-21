import { FC } from 'react'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Services } from './services'
import { InputStyled } from './input'
import { Logo } from './logo'
import { Button } from './button'
import { useSelector } from 'react-redux'
import { StateType } from '../../../BLL/store'
const SignInStyled = styled.div`
background-color: white;
display: grid;
align-content: center;
justify-items: center;
border-radius: ${({theme})=>theme.borrad.base};
form{
  width: 465px;
  padding: 0 16px;
  fieldset>div{
    margin-bottom: 16px;
  }
  label{
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    display: inline-grid;
    margin-bottom: 2px;
  }
}
.password, .email{
  label{
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 2px;
  }
}
[class*=remember]{
  display: flex;
  align-items: center;
  label, input{
    cursor: pointer;
  }
  label{
    margin-left: 8px;
  }
}
a{
  color: #1f75cb;
  :hover{
    text-decoration: underline;
  }
}
.remember{
  display: flex;
  justify-content: space-between;
}
.policy, .register{
  margin-top: 16px;
  font-size: 14px;
  color: #333238;
  line-height: 1.5;
}
.register{
  text-align: center;
}
`
export const SignIn:FC = ()=>{
  const{ handleSubmit, reset, register, formState:{errors, isValid}} = useForm({mode:'onTouched'})
  const formHandler:SubmitHandler<FieldValues> = (event)=>{
    console.log(event)
    reset()
  }
  const isEnglish = useSelector((state:StateType)=>state.theme.language=='English')
  return (
    <SignInStyled>
      <form onSubmit={handleSubmit(formHandler)}>
        <Logo/>
        <fieldset>
          <div className="email">
            <label htmlFor="gitlab/sigmin/email">{isEnglish?'Username or email':'Имя пользователя или адрес электронной почты'}</label>
            <InputStyled type='email' {...register('email')} id='gitlab/sigmin/email'/>
          </div>
          <div className="password">
            <label htmlFor="gitlab/sigmin/password">Password</label>
            <InputStyled type='password' {...register('password')} id='gitlab/sigmin/password'/>
          </div>
          <div className="remember">
            <div>
              <input type="checkbox" {...register('checkbox-one')} id="gitlab/sigmin/checkbox-one" />
              <label htmlFor="gitlab/sigmin/checkbox-one">Remember me</label>
            </div>
            <Link to='/gitlab.com/signin'>Forgot your password</Link>
          </div>
          <Button>Sgign in</Button>
          <div className="policy">By signing in you accept the <Link to='/gitlab.com/signin'>Terms of Use and acknowledge the Privacy Policy and Cookie Policy.</Link></div>
          <div className="register">Don't have an account yet? <Link to='/gitlab.com/signin'>Register now</Link></div>
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

