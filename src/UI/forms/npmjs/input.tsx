import styled from "styled-components";

export const InputStyled = styled.input.attrs(()=>({autoComplete:"off"}))<{error:boolean}>`
width: 100%;
height: 36px;
margin: 8px 0;
padding: 16px 8px; 
outline: none;
border-radius: 8px;
border: ${props=>props.error? "1px solid var(--color-middle)":"1px solid #8F8F8F"};
:focus{
  border: 2px solid #2a7dd0;
}

`