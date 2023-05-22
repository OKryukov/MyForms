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
            <label htmlFor="gitlab/sigmin/password">{isEnglish?'Password':'Пароль'}</label>
            <InputStyled type='password' {...register('password')} id='gitlab/sigmin/password'/>
          </div>
          <div className="remember">
            <div>
              <input type="checkbox" {...register('checkbox-one')} id="gitlab/sigmin/checkbox-one" />
              <label htmlFor="gitlab/sigmin/checkbox-one">{isEnglish?'Remember me':'Запомнить меня'}</label>
            </div>
            <Link to='/gitlab.com/signin'>{isEnglish?'Forgot your password':'Забыли пароль'}</Link>
          </div>
          <Button>{isEnglish?'Sgign in':'Войти'}</Button>
          <div className="policy">{isEnglish?'By signing in you accept the ':'Выполняя вход, вы принимаете '}<Link to='/gitlab.com/signin'>{isEnglish?'Terms of Use and acknowledge the Privacy Policy and Cookie Policy.':'Условия использования и соглашаетесь с Политикой конфиденциальности и Политикой в отношении файлов cookie.'}</Link></div>
          <div className="register">{isEnglish?'Don\'t have an account yet? ':'У вас еще нет аккаунта? '}<Link to='/gitlab.com/signin'>{isEnglish?'Register now':'Зарегистрироваться'}</Link></div>
          <div className="or">
            <span>{isEnglish?'or':'или'}</span>
          </div>
          <Services />
          <div className="remember_services">
            <input type="checkbox" {...register('checkbox-two')} id="gitlab/sigmin/checkbox-two" />
            <label htmlFor="gitlab/sigmin/checkbox-two">{isEnglish?'Remember me':'Запомнить меня'}</label>
          </div>
        </fieldset>
      </form>
    </SignInStyled>
  )
}

