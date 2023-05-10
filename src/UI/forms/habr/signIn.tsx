import { FC } from "react";
import styled from "styled-components";
import {FieldValues, SubmitHandler, useForm} from 'react-hook-form'
import { Input } from "./input";
import { Link } from "react-router-dom";
import { FacebookSVG, GitHubSVG, GoogleSVG, LiveIDSVG, TwitterSVG, VKSVG } from "../../commons/svgStorage";
import { useSelector } from "react-redux";
import { StateType } from "../../../BLL/store";


const SignInFormsStyled = styled.div`
border-radius: ${({theme})=>theme.borrad.base};
padding: ${({theme})=>theme.gaps.large};
transition: ${({theme})=>theme.trans.base};
height: 100%;
background-color: #f4f4f4;
display: grid;
grid-gap:16px;
align-content: center;
justify-items: center;
.form{
  background-color: white;
  width: 460px;
  padding: 40px;
  border-radius: ${({theme})=>theme.borrad.base};
  legend{
    font-size: 22px;
    font-weight: 700;
    color: #333;
    margin-bottom: 57px;
  }
  .label{
    display: block;
    margin-bottom: 12px;
  }
}
.form__password{
  margin-top: 28px;
}
.form__btn{
  width: 100%;
  height: 48px;
  background-color: #558cb7;
  color: white;
  cursor: pointer;
  opacity: 0.5;
  font-size: 15px;
  margin-top: 28px;
}
.restorePassword{
  margin: 15px 0 28px;
  color: #558cb7;
}
.services__title{
  padding-bottom: 12px;
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
.signUp{
  width: 460px;
  background-color: white;
  border-radius: ${({theme})=>theme.borrad.base};
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  a{
    color: #558cb7;
  }
}
.other{
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
export const SignInForm:FC = ()=>{
  const {register, formState:{errors, isValid}, handleSubmit, reset} = useForm({mode:"onBlur"})
  const formHandler:SubmitHandler<FieldValues> = (event)=>{
    console.log(event)
    reset()
  }
  const validParams = {
    email:{
      required:'Необходимо заполнить поле',
      pattern:{value:/\S+@[a-z]+.[a-z]+/, message: 'Введите корректный e-mail'}
    },
    password:{
      required:'Введите пароль',
    },
  }
  const isEnglish = useSelector((state:StateType)=>state.theme.language==='English')
  const data = useSelector((state:StateType)=>isEnglish?state.habr.data.eng:state.habr.data.rus)
  return(
    <SignInFormsStyled>
      <form className="form" onSubmit={handleSubmit(formHandler)}>
        <fieldset>
          <div className="legend">
            <legend>{data.title}</legend>
          </div>
          <div className="form__email">
            <label className="label" htmlFor="habr/email">{data.email}</label>
            <Input id="habr/email" isError={true} type="email" {...register('email', validParams.email)}/>
            {errors?.email && <span className="form__error">{errors.email?.message as string}</span>}
          </div>
          <div className="form__password">
            <label className="label" htmlFor="habr/password">{data.password}</label>
            <Input id="habr/password" isError={true} type="password" {...register('password', validParams.password)}/>
            {errors?.password && <span className="form__error">{errors.password?.message as string}</span>}
          </div>
          <button className="form__btn" disabled={!isValid}>{data.btn}</button>
          <div className="restorePassword">
            <Link to={'/habr.com/signin'}>{data.forgot}</Link>
          </div>
          <div className="services">
            <div className="services__title">{data.services}</div>
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
        <span>{data.sigUp.question}  <Link to='/habr.com/signup'>{data.sigUp.link}</Link></span>
      </div>
      <div className="other">
        <div className="language">
          <div className="language__svg"></div>
          <div className="language__text">{data.language}</div>
        </div>
        <Link to={'http://localhost:3000/habr.com/signin'} className="service">{data.service}</Link>
        <Link to={'http://localhost:3000/habr.com/signin'} className="feedback">{data.feedback}</Link>
        <Link to={'http://localhost:3000/habr.com/signin'} className="agreement">{data.agreement}</Link>
      </div>
    </SignInFormsStyled>
  )
}