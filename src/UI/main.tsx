import { FC } from "react"
import styled from "styled-components";
import { Routes, Route } from "react-router-dom"
import { NpmjsForm } from "./forms/npmjs/npmjs";
import { HabrForm } from "./forms/habr/habr";
import { MyProfile } from "./profile";

const MainStyled = styled.main`
grid-area: main;
`
export const Main:FC = ()=>{
  return(
    <MainStyled>
      <Routes>
        <Route path="/npmjs.com/*" element={<NpmjsForm/>}/>
        <Route path="/habr.com/*" element={<HabrForm/>}/>
        <Route path="/myprofile" element={<MyProfile/>}/>
      </Routes>
    </MainStyled>
  )
}