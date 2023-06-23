import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Switcher } from "../../commons/switcher";
import { SignUpForm } from "./signUp";
import { SignInForm } from "./signIn";
import { InformationContainer } from "./information/container";

const FormsStyled = styled.div`
height: 100%;
display: grid;
grid-template-rows: 50px 1fr;
grid-gap: ${({theme})=>theme.gaps.extraLarge};
`
const HabrForm:FC = ()=>{
  return(
    <FormsStyled>
      <Switcher baseURL="/habr/forms"/>
      <Routes>
        <Route path="/" element={<InformationContainer/>}/>
        <Route path="/signup" element={<SignUpForm/>}/>
        <Route path="/signin" element={<SignInForm/>}/>
      </Routes>
    </FormsStyled>
  )
}
export default HabrForm

