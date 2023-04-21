import { FC } from "react";
import styled from "styled-components";
import {useForm} from 'react-hook-form'
import { Input } from "./input";
import { Link } from "react-router-dom";
import { FacebookSVG, GitHubSVG, GoogleSVG, InfoSVG, LiveIDSVG, TwitterSVG, VKSVG } from "../../commons/svgStorage";


const SignInFormsStyled = styled.div`
border-radius: ${({theme})=>theme.borrad.base};
padding: ${({theme})=>theme.gaps.large};
transition: ${({theme})=>theme.trans.base};
height: 100%;
background-color: #f4f4f4;
display: grid;
align-items: center;
justify-items: center;
.form{
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
.form__btn{
  width: 100%;
  height: 48px;
  background-color: #558cb7;
  color: white;
  cursor: pointer;
  opacity: 0.5;
  font-size: 15px;
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
`
export const SignInForm:FC = ()=>{
  const {register, formState:{errors, isValid}, handleSubmit, reset} = useForm({mode:'onTouched'})
  return(
    <SignInFormsStyled>
      <form className="form">
        <fieldset>
          <div className="legend">
            <legend>Вход</legend>
          </div>
          <div className="label">
            <label htmlFor="habr/email">E-mail</label>
          </div>
          <div className="form__email">
            <Input id="habr/email" isError={true} type="email" {...register('email')}/>
          </div>
          <div className="label">
            <label htmlFor="habr/password">Пароль</label>
          </div>
          <div className="form__password">
            <Input id="habr/password" isError={true} type="password" {...register('password')}/>
          </div>
          <button className="form__btn" disabled={!isValid}>Войти</button>
          <div className="restorePassword">
            <Link to={'/habr.com/signin'}>Забыли пароль?</Link>
          </div>
          <div className="services">
          <div className="services__title">Или войдите с помощью других сервисов</div>
          <div className="services__icons">
            <div className="services__Facebook"><FacebookSVG/></div>
            <div className="services__VK"><VKSVG/></div>
            <div className="services__Twitter"><TwitterSVG/></div>
            <div className="services__GitHub"><GitHubSVG/></div>
            <div className="services__LiveID"><LiveIDSVG/></div>
            <div className="services__Google"><GoogleSVG/></div>
          </div>
        </div>
        </fieldset>
      </form>
      <div className="signUp">
        <span>Ещё нет аккаунта? <Link to='/habr.com/signup'>Зарегистрируйтесь</Link></span>
      </div>
    </SignInFormsStyled>
  )
}