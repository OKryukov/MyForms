import { FC } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { InputStyled } from "./input";
import { useSelector } from "react-redux";
import { InitialStateType } from "../../../BLL/npmjsReducer";
import { StateType } from "../../../BLL/store";


const SignInFormsStyled = styled.form<{errors:any, isValid:boolean}>`
border-radius: var(--border-radius);
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
  border-radius: var(--border-radius);
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
  transition: var(--transition);
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
  background: linear-gradient(-139deg, #fb8817, #ff4b01, #c12127, #e02aff, var(--color-pink));
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
    z-index: 2;
    height: 100%;
    width: 100%;
  }
}

.signIn__redirect{
  text-align: center;
  text-decoration:underline;
  color: #484F59;
  font-size: 16px;
  font-weight: 600;
}
`
export const SignInForm:FC = ()=>{
  const {handleSubmit, reset, formState:{errors, isValid}, register} = useForm({mode:"onBlur"})
  const myHandler = (data:Object)=>{
    console.log(data)
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
    <SignInFormsStyled onSubmit={handleSubmit(myHandler)} errors={errors} isValid={isValid}>
      <a href="https://www.npmjs.com/" target="_blank" style={{marginBottom:"40px", textAlign:"center"}}>
        <svg viewBox="0 0 780 250" width="144px" height="46px">
          <path fill="#231F20" d="M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z"></path>
        </svg>
      </a>
      <fieldset>
        <div className="signIn__window">
          <div className="signIn__curtain"></div>
          <img className="signIn__animal" src={animalPng} alt="animal"/>
        </div>
        <div>
          <legend>Sign In</legend>
        </div>
        <div>
          <label htmlFor="npmjs/in/username">Username</label>
        </div>
        <InputStyled id="npmjs/in/username" type="text" {...register("username", validParams.username)} error={Boolean(errors?.username)}/>
        <div>
          <label htmlFor="npmjs/in/password">Password</label>
        </div>
        <InputStyled id="npmjs/in/password" type="password" {...register("password", validParams.password)} error={Boolean(errors?.password)} autoComplete="on"/>
        <button disabled={!isValid}>Sign In</button>
        <NavLink className='signIn__redirect' to='/npmjs.com/signup'>Create Account</NavLink>
      </fieldset>
    </SignInFormsStyled>
  )
}