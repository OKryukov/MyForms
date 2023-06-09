import { FC } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { InputStyled } from "./input";
import { useSelector } from "react-redux";
import { StateType } from "../../../BLL/store";


const SignUpFormsStyled = styled.form<{errors:any, isValid:boolean}>`
border-radius: ${({theme})=>theme.borrad.base};
display: grid;
justify-content: center;
align-content: center;
grid-template-columns: minmax(50px, 480px);
background-color: white;
color: #000000b3;
position: relative;
& fieldset{
  display: grid;
  padding: 40px 40px 24px 40px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 20%);
  border-radius: ${({theme})=>theme.borrad.base};
}
& legend{
  padding-bottom: 16px;
  border-bottom: 1px solid #0000001a;
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 600;
}
& label{
  display: inline-block;
  margin-top: 4px;
  font-size: 16px;
  font-weight: 600;
}
& button{
  height: 38px;
  border: ${({isValid})=>isValid?"1px solid #8F8F8F":"1px solid #e8e8e8"};
  border-radius: 8px;
  margin: 8px 0;
  background-color: #fafafa;
  cursor: ${props=>props.isValid && "pointer"};
  transition: ${({theme})=>theme.trans.base};
}
& button:hover{
  background-color: ${props=>props.isValid && "#efecec"};
}
& fieldset::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 10px;
  width: 100%;
  z-index: 2;
  background: ${({theme})=> `linear-gradient(-139deg, #fb8817, #ff4b01, #c12127, #e02aff,${theme.colors.pink})`};
}
& .inputDescription{
  font-size: 14px;
  margin-bottom: 16px;
  color: #000000cc;
}
& > span:last-of-type{
  text-align: center;
  margin: 32px 0 16px;
}
& .linkSigin{
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  text-decoration:underline;
}
& .linkPassword{
  text-decoration:underline;
  color: black;
}
.signUp__error{
  color: #cf462d;
  font-size: 0.875rem;
}
`
export const SignUpForm:FC = ()=>{
  const isEnglish = useSelector((state:StateType)=>state.theme.language==='English')
  const {handleSubmit, reset, formState:{errors, isValid}, register} = useForm({mode:"onBlur"})
  const formHandler:SubmitHandler<FieldValues> = (event)=>{
    console.log(event)
    reset()
  }
  const validParams = {
    username:{
      required:'Please enter a username',
      pattern:{value:/([a-z]{5})+/, message:"Please enter a username"},
    },
    email:{
      required:'Please enter a valid email',
      pattern:{value:/\S+@[a-z]+.[a-z]+/, message: 'Please enter a valid email'}
    },
    password:{
      required:'Please enter a valid password that is at least 10 characters',
      minLength:{value:10, message:"Please enter a valid password that is at least 10 characters"}
    }
  }
  return(
    <SignUpFormsStyled onSubmit={handleSubmit(formHandler)} errors={errors} isValid={isValid}>
      <a href="https://www.npmjs.com/" target="_blank" style={{marginBottom:"40px", textAlign:"center"}}>
        <svg viewBox="0 0 780 250" width="144px" height="46px">
          <path fill="#231F20" d="M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z"></path>
        </svg>
      </a>
      <fieldset>
        <div>
          <legend>{isEnglish?'Sign Up':'Зарегистрироваться'}</legend>
        </div>
        <div>
          <label htmlFor="npmjs/up/username">{isEnglish?'Username *':'Имя пользователя *'}</label>
        </div>
        <InputStyled id="npmjs/up/username" type="text" {...register("username", validParams.username)} error={Boolean(errors?.username)}/>
        {errors?.username && <span className="signUp__error">{errors.username?.message as string}</span>}
        <div>
          <label htmlFor="npmjs/up/email">{isEnglish?'Email address *':'Адрес электронной почты *'}</label>
        </div>
        <InputStyled id="npmjs/up/email" type="email" {...register("email", validParams.email)} error={Boolean(errors?.email)}/>
        {errors?.email && <span className="signUp__error">{errors.email?.message as string}</span>}
        <span className="inputDescription">{isEnglish?'Your email address will be added to the metadata of packages that you publish, so it may be seen publicly.':
          'Ваш адрес электронной почты будет добавлен в метаданные пакетов, которые вы публикуете, чтобы его можно было увидеть публично.'}</span>
        <div>
          <label htmlFor="npmjs/up/password">{isEnglish?'Password *':'Пароль *'}</label>
        </div>
        <InputStyled id="npmjs/up/password" type="password" {...register("password", validParams.password)} error={Boolean(errors?.password)}/>
        {errors?.password && <span className="signUp__error">{errors.password?.message as string}</span>}
        <span className="inputDescription">{isEnglish?'Minimum of 10 characters and must meet our ':'Минимум 10 символов и должны соответствовать нашим '}<NavLink to="https://docs.npmjs.com/creating-a-strong-password" target="_blank" className="linkPassword">{isEnglish?'password guidelines':'требованиям к паролю'}</NavLink></span>
        <button disabled={!isValid}>{isEnglish?'Create an Account':'Завести аккаунт'}</button>
      </fieldset>
      <span>{isEnglish?'Already have an account?':'У вас уже есть аккаунт?'}</span>
      <NavLink to="/npmjs.com/signin" className="linkSigin">{isEnglish?'Sign in':'Войти'}</NavLink>
    </SignUpFormsStyled>
  )
}