import { FC } from "react"
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ProfileSVG, GitHubSVG, TelegramSVG, LanguageSVG, ThemeSVG} from "./commons/svgStorage";
import { useSelector, useDispatch } from "react-redux";
import { StateType } from "../BLL/store";
import { themeActionCreators } from "../BLL/themeReducer";

const LinksStyled = styled.nav`
grid-area: links;
display: grid;
grid-gap: ${({theme})=>theme.gaps.extraLarge};
grid-template-rows: calc(150px + 30px) 1fr calc(100px + 15px);
grid-template-areas: 'links' '.' 'settings';
background-color: ${({theme})=>theme.colors.bc};

.links{
  grid-area: links;
  display: grid;
  grid-gap: ${({theme})=>theme.gaps.extraLarge};
}
.settings{
  grid-area: settings;
  display: grid;
  grid-gap: ${({theme})=>theme.gaps.extraLarge};
}
.settings div{
  cursor: pointer;
}
a, .settings div{
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  border-radius: ${({theme})=>theme.borrad.base};
}
a:hover, .settings div:hover{
  background-color: ${({theme})=>theme.colors.hover};
}
svg{
  width: 30px;
  height: 30px;
  fill: ${({theme})=>theme.colors.fill};
  transition: ${({theme})=>theme.trans.base};
}
`
export const Links:FC = ()=>{
  const language = useSelector((state:StateType)=>state.profile.language)
  const type = useSelector((state:StateType)=>state.theme.current)
  const dispath = useDispatch()
  const themeHandler = ()=>{
    dispath(themeActionCreators.asyncThemeAC())
  }
  const languageHandler = ()=>{
    dispath(themeActionCreators.languageAC())
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
      <div onClick={themeHandler}><ThemeSVG type={type}/></div>
      <div onClick={languageHandler}><LanguageSVG language={language}/></div>
    </div>
    </LinksStyled>
  )
}