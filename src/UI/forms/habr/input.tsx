
import styled from 'styled-components'

export const Input = styled.input.attrs(()=>({autoComplete:"off"}))<{isError:boolean}>`
  height: 40px;
  offset: none;
  width: 100%;
  border: 1px solid #dbdbdb;
  padding: 0 14px;
  font-size: 14px;
`


