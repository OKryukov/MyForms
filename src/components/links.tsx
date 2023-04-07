import { FC } from "react"
import { NavLink } from "react-router-dom";
import styled  from "styled-components";
import { ProfileSVG, GitHubSVG, TelegramSVG } from "./commons/svgStorage";

const LinksStyled = styled.nav`
display: grid;
grid-auto-rows: 50px;
grid-gap: var(--basic-gap);

& a{
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  border-radius: var(--border-radius);
}
& a:hover{
  background-color: var(--color-pink);
}
& svg{
  width: 30px;
  fill: white;
}
`
export const Links:FC = ()=>{
  return(
    <LinksStyled>
      <NavLink to="myprofile">
        <ProfileSVG/>
      </NavLink>
      <a href="https://github.com/OKryukov" target="_blank"><GitHubSVG/></a>
      <a href="https://t.me/okryukov" target="_blank"><TelegramSVG/></a>
    </LinksStyled>
  )
}