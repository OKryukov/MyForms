import styled from "styled-components";

export const InputStyled = styled.input.attrs(()=>({autoComplete:"off"}))`
width: 100%;
border-radius: 4px;
box-shadow: inset 0 0 0 1px #89888d;
height: 32px;
padding: 8px 12px;
outline:none;
font-size: 16px;
:focus{
  border: 2px solid #007bff;
}
`