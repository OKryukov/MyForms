import { FC } from "react"
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Switcher } from "../commons/switcher";

const FormsStyled = styled.div`
  
`
export const NpmjsForm:FC = ()=>{
  return(
    <FormsStyled>
      <div className="switch">
        <Switcher/>
      </div>
      <Routes>
        <Route path="/signup" element={<SignUpForm/>}/>
        <Route path="/signin" element={<SignInForm/>}/>
      </Routes>
    </FormsStyled>
  )
}

const SignUpFormsStyled = styled.form`

`
const SignUpForm:FC = ()=>{
  return(
    <SignUpFormsStyled>
      <fieldset>
        <div>
          <legend>Npmjs Sign Up Form</legend>
        </div>
      </fieldset>
    </SignUpFormsStyled>
  )
}

const SignInFormsStyled = styled.form`
  
`
const SignInForm:FC = ()=>{
  return(
    <SignInFormsStyled>
      <fieldset>
        <div>
          <legend>Npmjs Sign In Form</legend>
        </div>
      </fieldset>
    </SignInFormsStyled>
  )
}