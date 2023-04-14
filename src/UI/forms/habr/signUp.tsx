import { FC } from "react";
import styled from "styled-components";

const SignUpFormsStyled = styled.form`
  border-radius: ${({theme})=>theme.borrad.base};
  padding: ${({theme})=>theme.gaps.large};
  transition: ${({theme})=>theme.trans.base};
  height: 100%;
`
export const SignUpForm:FC = ()=>{
  return(
    <SignUpFormsStyled>
      <fieldset>
        <div>
          <legend>Habr Sign Up Form</legend>
        </div>
      </fieldset>
    </SignUpFormsStyled>
  )
}