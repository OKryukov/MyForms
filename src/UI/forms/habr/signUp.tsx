import { FC } from "react";
import styled from "styled-components";
import { Input } from "./input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FacebookSVG, GitHubSVG, GoogleSVG, InfoSVG, LiveIDSVG, TwitterSVG, VKSVG } from "../../commons/svgStorage";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { StateType } from "../../../BLL/store";

const SignUpFormsStyled = styled.div`
background-color: #f4f4f4;
border-radius: ${({theme})=>theme.borrad.base};
padding: ${({theme})=>theme.gaps.large};
transition: ${({theme})=>theme.trans.base};
overflow-y: scroll;

.form{
  margin: 0 auto;
  background-color: white;
  width: 460px;
  padding: 40px;
  border-radius: ${({theme})=>theme.borrad.base};
}
.legend{
font-size: 22px;
font-weight: 700;
color: #333;
}
.information{
  background:linear-gradient(0deg, rgba(84, 142, 170, 0.12), rgba(84, 142, 170, 0.12)),#fff;
  margin-top: 16px;
  display: grid;
  grid-template-columns: 40px 1fr;
  padding: 14px 20px;
  font-size: 15px;
  line-height: 20px;
  color: #333;
}
.information__icon svg{
  width: 20px;
  fill: #548eaa;
}
.services__icons{
  display: flex;
  justify-content: space-between;
}
.services__icons div{
  height: 36px;
  width: 36px;
  display: grid;
  align-items: center;
  justify-items: center;
  border-radius: ${({theme})=>theme.borrad.base};

  background-color: #cecece;
  cursor: pointer;
}
.services__Facebook:hover {
  background-color: #4867aa;
}
.services__VK:hover {
  background-color: #0077ff;

}
.services__Twitter:hover {
  background-color: #1d9bf0;
}
.services__GitHub:hover {
  background-color: #2b2c2d;
}
.services__LiveID:hover {
  background-color: #4285f4;
}
.services__Google:hover {
  background-color: #e94235;
}
.services__icons svg{
  width: 12px;
  height: 12px;
  fill: white;
}
.form__btn{
  width: 100%;
  height: 48px;
  background-color: #558cb7;
  color: white;
  cursor: pointer;
  opacity: 0.5;
  font-size: 15px;
}
.label, .services__title{
  margin: 31px 0 16px;
  font-weight: 700;
}
.checkbox{
  margin: 31px 0;
  display: grid;
  grid-template-columns: 18px 1fr;
  align-items: center;
  grid-gap: 8px;
  font-size: 14px;
  a{
    color: #558cb7;
  }
  input{
    height: 18px;
    width: 18px;
  }
}
.signIn{
  width: 460px;
  background-color: white;
  border-radius: ${({theme})=>theme.borrad.base};
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px auto 0;
  a{
    color: #558cb7;
  }
}
.other{
  margin: 16px auto;
  width: 460px;
  display: flex;
  justify-content: space-between;
  color: #8d97a0;
  padding: 0 15px;
  .language{
    cursor: pointer;
  }
}
.form__error{
  font-size: 12px;
  color: #de5959;
}
`
export const SignUpForm:FC = ()=>{
  const {register, formState:{errors, isValid}, handleSubmit, reset} = useForm({mode:'onTouched'})
  const formHandler:SubmitHandler<FieldValues> = (event)=>{
    console.log(event)
    reset()
  }
  const validParams = {
    email:{
      required:'Необходимо заполнить поле',
      pattern:{value:/\S+@[a-z]+.[a-z]+/, message: 'Введите корректный e-mail'}
    },
    nickname:{
      required:'Необходимо заполнить поле',
      minLength:{value:3, message:'Не менее 3-х символов'}
    },
    password:{
      required:'Введите пароль',
      minLength:{value:5, message:'Не менее 5-ти символов'}
    },
    repeatPassword:{
      required:'Введите пароль',
      minLength:{value:5, message:'Не менее 5-ти символов'}
    }
  }
  const isEnglish = useSelector((state:StateType)=>state.theme.language=='English')
  return(
    <SignUpFormsStyled>
      <form className="form" onSubmit={handleSubmit(formHandler)}>
      <fieldset className="fieldset">
        <div className="legend">
          <legend>{isEnglish?'Registration':'Регистрация'}</legend>
        </div>
        <div className="information">
          <div className="information__icon">
            <InfoSVG/>
          </div>
          <div className="information__text">{isEnglish?'Sign up on Habr Account to join millions of people in Habr tech community, learn and share experience, and always stay on top of modern trends and latest achievements of technology and science.':
          'Зарегистрируйте Хабр Аккаунт, чтобы вступить в крупнейшее русскоязычное IT-сообщество, учиться и делиться опытом, всегда быть в курсе того, что происходит в IT.'}</div>
        </div>
        <div className="services">
          <div className="services__title">{isEnglish?'Or sign up with':'C помощью сервиса'}</div>
          <div className="services__icons">
            <div className="services__Facebook"><FacebookSVG/></div>
            <div className="services__VK"><VKSVG/></div>
            <div className="services__Twitter"><TwitterSVG/></div>
            <div className="services__GitHub"><GitHubSVG/></div>
            <div className="services__LiveID"><LiveIDSVG/></div>
            <div className="services__Google"><GoogleSVG/></div>
          </div>
        </div>
        <div className="label">
          <label htmlFor="habr/email">{isEnglish?'Email':'E-mail'}</label>
        </div>
        <div className="form__email">
          <Input id="habr/email" isError={true} type="email" {...register('email', validParams.email)}/>
          {errors?.email && <span className="form__error">{errors.email?.message as string}</span>}
        </div>
        <div className="label">
          <label htmlFor="habr/nickname">{isEnglish?'Username':'Никнейм'}</label>
        </div>
        <div className="form__nickname">
          <Input id="habr/nickname" isError={true} type="text" {...register('nickname', validParams.nickname)}/>
          {errors?.nickname && <span className="form__error">{errors.nickname?.message as string}</span>}
        </div>
        <div className="label">
          <label htmlFor="habr/password">{isEnglish?'Password':'Пароль'}</label>
        </div>
        <div className="form__password">
          <Input id="habr/password" isError={true} type="password" {...register('password', validParams.password)}/>
          {errors?.password && <span className="form__error">{errors.password?.message as string}</span>}
        </div>
        <div className="label">
          <label htmlFor="habr/password/repeat">{isEnglish?'Repeat password':'Пароль ещё раз'}</label>
        </div>
        <div className="form__password_repeat">
          <Input id="habr/password/repeat" isError={true} type="password" {...register('repeatPassword')}/>
          {errors?.repeatPassword && <span className="form__error">{errors.repeatPassword?.message as string}</span>}
        </div>
        <div className="checkbox">
          <input id="habr/checkbox" type="checkbox" />
          <label htmlFor="habr/checkbox">{isEnglish?'I accept the ':'Я принимаю условия '}<a href="">{isEnglish?'User agreement':'Пользовательского соглашения'}</a></label>
        </div>
        
        <button className="form__btn" disabled={!isValid}>{isEnglish?'Sign Up':'Зарегистрироваться'}</button>
      </fieldset>
      </form>
      <div className="signIn">
        <span>{isEnglish?'Already registered?':'Уже зарегистрировались?'}<Link to='/habr.com/signup'>{isEnglish?' Log in':' Войдите'}</Link></span>
      </div>
      <div className="other">
        <div className="language">
          <div className="language__svg"></div>
          <div className="language__text">{isEnglish?'Русский':'English'}</div>
        </div>
        <Link to={'http://localhost:3000/habr.com/signin'} className="service">{isEnglish?'About':'О сервисе'}</Link>
        <Link to={'http://localhost:3000/habr.com/signin'} className="feedback">{isEnglish?'Feedback':'Обратная связь'}</Link>
        <Link to={'http://localhost:3000/habr.com/signin'} className="agreement">{isEnglish?'User agreement':'Соглашение'}</Link>
      </div>
    </SignUpFormsStyled>
  )
}