import { FC, lazy, Suspense } from "react"
import styled from "styled-components";
import { Routes, Route } from "react-router-dom"
import { MyProfile } from "./profile";
import { withSuspense } from "./commons/hocs";

const NpmjsForm = lazy(()=>import("./forms/npmjs/npmjs"));
const HabrForm = lazy(()=>import("./forms/habr/habr"))
const GitlabForm = lazy(()=>import("./forms/gitlab/gitlab"))
const GitlabMenu = lazy(()=>import("./menus/gitlab/gitlab"))
const HabrMenu = lazy(()=>import('./menus/habr/habr'))
const LazyNpmjsForm = withSuspense(NpmjsForm)
const LazyHabrForm = withSuspense(HabrForm)
const LazyGitlabForm = withSuspense(GitlabForm)
const LazyGitlabMenu = withSuspense(GitlabMenu)
const LazyHabrMenu = withSuspense(HabrMenu)

const MainStyled = styled.main`
grid-area: main;
`
export const Main:FC = ()=>{
  return(
    <MainStyled>
      <Routes>
        <Route path="/npmjs/forms/*" element={<LazyNpmjsForm/>}/>
        <Route path="/habr/forms/*" element={<LazyHabrForm/>}/>
        <Route path="/gitlab/forms/*" element={<LazyGitlabForm/>}/>
        <Route path="/myprofile" element={<MyProfile/>}/>
        <Route path="/gitLab/menu/*" element={<LazyGitlabMenu/>}/>
        <Route path="/habr/menu" element={<LazyHabrMenu/>}/>
      </Routes>
    </MainStyled>
  )
}