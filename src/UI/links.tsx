import { FC } from "react"
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ProfileSVG, GitHubSVG, TelegramSVG, RusLanguageSVG, EngLanguageSVG, ThemeMoonSVG, ThemeSunSVG, } from "./commons/svgStorage";
import { useSelector, useDispatch } from "react-redux";

import { StateType } from "../BLL/store";
import { themeActionCreators } from "../BLL/themeReducer";
import { npmjsActionCreators } from "../BLL/npmjsReducer";

const LinksStyled = styled.nav`
display: grid;
grid-gap: var(--basic-gap);
grid-template-rows: calc(150px + var(--basic-gap)*2) 1fr calc(100px + var(--basic-gap));
grid-template-areas: 'links' '.' 'settings';

.links{
  grid-area: links;
  display: grid;
  grid-gap: var(--basic-gap);
}
.settings{
  grid-area: settings;
  display: grid;
  grid-gap: var(--basic-gap);
}
.settings div{
  cursor: pointer;
}
& a, .settings div{
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  border-radius: var(--border-radius);
}
& a:hover, .settings div:hover{
  background-color: var(--color-pink);
}
& svg{
  width: 30px;
  fill: white;
}
`
export const Links:FC = ()=>{
  const isEnglish = useSelector((state:StateType)=>state.profile.language === 'English')
  const isDark = useSelector((state:StateType)=>state.theme.theme === 'dark')
  const dispath = useDispatch()
  const themeHandler = ()=>{
    dispath(themeActionCreators.switchThemeAC())
    dispath(npmjsActionCreators.asyncLoginAC())
  }
  const languageHandler = ()=>{
    dispath(themeActionCreators.switchLanguageAC())
  }

  return(
    <LinksStyled>
    <div className="links">
      <NavLink to="myprofile">
        <ProfileSVG/>
      </NavLink>
      <a href="https://github.com/OKryukov" target="_blank" rel="noopener noreferrer"><GitHubSVG/></a>
      <a href="https://t.me/okryukov" target="_blank" rel="noopener noreferrer"><TelegramSVG/></a>
    </div>
    <div className="settings">
      <div onClick={themeHandler}>{isDark?<ThemeSunSVG/>:<ThemeMoonSVG/>}</div>
      <div onClick={languageHandler}>{isEnglish?<RusLanguageSVG/>:<EngLanguageSVG/>}</div>
    </div>
    </LinksStyled>
  )
}