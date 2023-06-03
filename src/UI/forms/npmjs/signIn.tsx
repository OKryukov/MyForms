import { FC } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import styled, {keyframes} from "styled-components";
import { InputStyled } from "./input";
import { useSelector } from "react-redux";
import { StateType } from "../../../BLL/store";

const rotateAnimation = keyframes`
  0%{transform: rotate(-4deg)}
  50%{transform: rotate(4deg)}
  100%{transform: rotate(-4deg)}
`
const translateAnimation = keyframes`
  0%{transform: translateY(0)}
  50%{transform: translateY(-4px)}
  100%{transform: translateY(0)}
`
const SignInFormsStyled = styled.form<{errors:any, isValid:boolean}>`
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
.signIn__window{
  position: relative;
  justify-self: center;
  height: 200px;
  width: 200px;
  margin-bottom: 20px;
  background-color: #ddd;
  border-radius: 50%;
  .signIn__curtain{
    background-color: #333333;
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 3;
    top: -190px;
  }
  .signIn__animal{
    position: absolute;
    bottom: -10px;
    z-index: 2;
    animation: ${translateAnimation} 1.5s ease infinite;
    transform-origin: bottom center;
  }
  .signIn__animal img{
    height: 100%;
    width: 100%;
    animation: ${rotateAnimation} 3s ease infinite;
    transform-origin: bottom center;
  }
  .face{
    position: absolute;
    z-index: 3;
    top: 116px;
    right: 80px;
    animation: ${translateAnimation} 1.5s ease infinite;
    .mouth{
    animation: ${rotateAnimation} 3s ease infinite;
    width: 40px;
    height: 20px;
    border-radius: 55%;
    background-color: #000;
    
    }
  }
}
.signIn__redirect{
  text-align: center;
  text-decoration:underline;
  color: #484F59;
  font-size: 16px;
  font-weight: 600;
}
.signIn__error{
  color: #cf462d;
  font-size: 0.875rem;
}
`
export const SignInForm:FC = ()=>{
  const isEnglish = useSelector((state:StateType)=>state.theme.language==='English')
  const {handleSubmit, reset, formState:{errors, isValid}, register} = useForm({mode:"onBlur"})
  const formHandler:SubmitHandler<FieldValues> = (event)=>{
    console.log(event)
    reset()
  }
  const validParams = {
    username:{
      required:'Please enter a username',
      pattern:{value:/[a-z]+/, message:"Name must be lowercase"}
    },
    password:{
      required:'Please enter a valid password that is at least 10 characters',
      minLength:{value:10, message:"Please enter a valid password that is at least 10 characters"}
    }
  }
  const animalPng = useSelector((state:StateType)=>state.npmjs.animal)
  return(
    <SignInFormsStyled onSubmit={handleSubmit(formHandler)} errors={errors} isValid={isValid}>
      <a href="https://www.npmjs.com/" target="_blank" style={{marginBottom:"40px", textAlign:"center"}}>
        <svg viewBox="0 0 780 250" width="144px" height="46px">
          <path fill="#231F20" d="M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z"></path>
        </svg>
      </a>
      <fieldset>
        <div className="signIn__window">
          <div className="signIn__curtain"></div>
          <div className="signIn__animal">
            <img src={animalPng} alt="animal"/>
            <div className="face">
              <div className="eyes">
                <div className="left"></div>
                <div className="right"></div>
              </div>
              <div className="mouth"></div>
            </div>
          </div>
        </div>
        <div>
          <legend>{isEnglish?'Sign In':'Войти'}</legend>
        </div>
        <div>
          <label htmlFor="npmjs/in/username">{isEnglish?'Username':'Имя пользователя'}</label>
        </div>
        <InputStyled id="npmjs/in/username" type="text" {...register("username", validParams.username)} error={Boolean(errors?.username)}/>
        {errors?.username && <span className="signIn__error">{errors.username?.message as string}</span>}
        <div>
          <label htmlFor="npmjs/in/password">{isEnglish?'Password':'Пароль'}</label>
        </div>
        <InputStyled className="password" id="npmjs/in/password" type="password" {...register("password", validParams.password)} error={Boolean(errors?.password)}/>
        {errors?.password && <span className="signIn__error">{errors.password?.message as string}</span>}
        <button disabled={!isValid}>{isEnglish?'Sign In':'Войти'}</button>
        <NavLink className='signIn__redirect' to='/npmjs.com/signup'>{isEnglish?'Create Account':'Зарегистрироваться'}</NavLink>
      </fieldset>
    </SignInFormsStyled>
  )
}