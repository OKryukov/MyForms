import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Switcher } from "../../commons/switcher";
import { SignUpForm } from "./signUp";
import { SignInForm } from "./signIn";
import { useSelector } from "react-redux";
import { StateType } from "../../../BLL/store";
import { ThemeType } from "../../../BLL/themeReducer";
import { Information } from "./information";

const FormsStyled = styled.div<({theme:ThemeType})>`
display: grid;
grid-template-rows: max-content 1fr;
.npmjs__switcher{
  background-color: ${({theme})=>theme.main.bc};
}
.npmjs__information{
  background-color: ${({theme})=>theme.main.bc};
}
`
export const NpmjsForm:FC = ()=>{
  const theme = useSelector((state:StateType)=>state.theme)
  return(
    <FormsStyled theme={theme}>
      <Switcher baseURL="/npmjs.com"/>
      <Routes>
        <Route path="/" element={<Information/>}/>
        <Route path="/signup" element={<SignUpForm/>}/>
        <Route path="/signin" element={<SignInForm/>}/>
      </Routes>
    </FormsStyled>
  )
}