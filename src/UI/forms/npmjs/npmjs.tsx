import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Switcher } from "../../commons/switcher";
import { SignUpForm } from "./signUp";
import { SignInForm } from "./signIn";
import { Information } from "./information";

const FormsStyled = styled.div`
height: 100%;
display: grid;
grid-template-rows: max-content 1fr;
`
export const NpmjsForm:FC = ()=>{
  return(
    <FormsStyled>
      <Switcher baseURL="/npmjs.com"/>
      <Routes>
        <Route path="/" element={<Information/>}/>
        <Route path="/signup" element={<SignUpForm/>}/>
        <Route path="/signin" element={<SignInForm/>}/>
      </Routes>
    </FormsStyled>
  )
}