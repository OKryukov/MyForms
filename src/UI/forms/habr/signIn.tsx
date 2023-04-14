import { FC } from "react";
import styled from "styled-components";

const SignInFormsStyled = styled.form`
  border-radius: ${({theme})=>theme.borrad.base};
  padding: ${({theme})=>theme.gaps.large};
  transition: ${({theme})=>theme.trans.base};
  height: 100%;
`
export const SignInForm:FC = ()=>{
  return(
    <SignInFormsStyled>
      <fieldset>
        <div>
          <legend>Habr Sign In Form</legend>
        </div>
      </fieldset>
    </SignInFormsStyled>
  )
}