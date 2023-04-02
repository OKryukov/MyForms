import { FC } from "react"
import styled from "styled-components";

const ContactStyled = styled.div`
  display: grid;
  grid-template-columns: 40px 150px;
  grid-gap: var(--secondary-gap);
  align-items: center;
  color: white;
`
interface ContactPropsI {
  SVG: FC;
  title: string;
  text: string;
}
export const Contact:FC<ContactPropsI> = (props)=>{
  const {SVG,title,text} = props
  return(
    <ContactStyled>
      <SVG/>
      <div>
        <div>{title}</div>
        <div>{text}</div>
      </div>
    </ContactStyled>
  )
}