import { FC } from "react"
import styled  from "styled-components";
import { ProfileSVG, GitHubSVG, TelegramSVG } from "./commons/svgStorage";

const LinksStyled = styled.nav`
display: grid;
grid-auto-rows: 50px;
grid-gap: var(--basic-gap);
div{
  display: grid;
  justify-items: center;
  align-items: center;
  border-radius: var(--border-radius);
}
div:hover{
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
      <div>
        <a href="" target="_blank"><ProfileSVG/></a>
      </div>
      <div>
        <a className="GH" href="https://github.com/OKryukov" target="_blank"><GitHubSVG/></a>
      </div>
      <div>
        <a href="https://t.me/okryukov" target="_blank"><TelegramSVG/></a>
      </div>
    </LinksStyled>
  )
}