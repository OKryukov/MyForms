import { FC, lazy, Suspense } from "react"
import styled from "styled-components";
import { Routes, Route } from "react-router-dom"
import { MyProfile } from "./profile";
import { withSuspense } from "./commons/hocs";

const NpmjsForm = lazy(()=>import("./forms/npmjs/npmjs"));
const HabrForm = lazy(()=>import("./forms/habr/habr"))
const LazyNpmjsForm = withSuspense(NpmjsForm)
const LazyHabrForm = withSuspense(HabrForm)

const MainStyled = styled.main`
grid-area: main;
`
export const Main:FC = ()=>{
  return(
    <MainStyled>
      <Routes>
        <Route path="/npmjs.com/*" element={<LazyNpmjsForm/>}/>
        <Route path="/habr.com/*" element={<LazyHabrForm/>}/>
        <Route path="/myprofile" element={<MyProfile/>}/>
      </Routes>
    </MainStyled>
  )
}