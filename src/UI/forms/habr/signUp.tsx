import { FC } from "react";
import styled from "styled-components";

const SignUpFormsStyled = styled.form`
  
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