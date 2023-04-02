import { FC } from "react"
import styled from "styled-components";
import { Contact } from "./commons/contact";
import { CountrySVG, CitySVG } from "./commons/svgStorage";

const FooterStyled = styled.footer`
display: grid;
grid-template-columns: repeat(2, min-content);
justify-content: end;
svg{
  width: 40px;
  height: 40px;
}
`
export const Footer:FC = ()=>{
  return(
    <FooterStyled>
      <Contact SVG={CountrySVG} title="COUNTRY" text="Russia"/>
      <Contact SVG={CitySVG} title="CITY" text="Saint Petersburg"/>
    </FooterStyled>
  )
}