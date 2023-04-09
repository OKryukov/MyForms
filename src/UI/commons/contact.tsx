import { FC } from "react"
import styled, {keyframes, Keyframes} from "styled-components";

const ContactStyled = styled.div<{svgKeyFrames:Keyframes}>`
  display: grid;
  grid-template-columns: 40px 150px;
  grid-gap: var(--secondary-gap);
  align-items: center;
  cursor: pointer;
  transition: var(--transition);
  & svg{
    transition: var(--transition);
  }
  &:hover{
    & svg{
      animation-name: ${props=>props.svgKeyFrames};
      animation-duration: 0.5s;
      animation-timing-function: ease-in-out;
    }
  }
`
interface ContactPropsI {
  SVG: FC;
  title: string;
  text: string;
}
export const Contact:FC<ContactPropsI> = (props)=>{
  const {SVG,title,text} = props
  const svgKeyFrames = keyframes`
  0%{transform: rotateZ(0deg);}
  25%{transform: rotateZ(15deg);}
  75%{transform: rotateZ(-15deg);}
  100%{transform: rotateZ(0deg);}
  `
  return(
    <ContactStyled svgKeyFrames={svgKeyFrames}>
      <SVG/>
      <div>
        <div>{title}</div>
        <div>{text}</div>
      </div>
    </ContactStyled>
  )
}