import { FC } from "react";
import styled from "styled-components";

const SignInFormsStyled = styled.form`
  
`
export const SignInForm:FC = ()=>{
  return(
    <SignInFormsStyled>
      <fieldset>
        <div>
          <legend>Npmjs Sign In Form</legend>
        </div>
      </fieldset>
    </SignInFormsStyled>
  )
}