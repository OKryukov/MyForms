import { FC } from "react";
import styled from "styled-components";

const SignInFormsStyled = styled.form`
  
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