import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Switcher } from "../../commons/switcher";
import { SignUpForm } from "./signUp";
import { SignInForm } from "./signIn";

const FormsStyled = styled.div`
height: 100%;
`
const HabrForm:FC = ()=>{
  return(
    <FormsStyled>
      <Switcher baseURL="/habr.com"/>
      <Routes>
        <Route path="/" element={<Information/>}/>
        <Route path="/signup" element={<SignUpForm/>}/>
        <Route path="/signin" element={<SignInForm/>}/>
      </Routes>
    </FormsStyled>
  )
}
export default HabrForm

const InformationStyled = styled.div`
  background-color: ${({theme})=>theme.colors.bc};
  border-radius: ${({theme})=>theme.borrad.base};
  padding: ${({theme})=>theme.gaps.large};
  transition: ${({theme})=>theme.trans.base};
  height: 100%;
`
const Information:FC = ()=>{
  return(
    <InformationStyled>
      Bla bla bla
    </InformationStyled>
  )
}