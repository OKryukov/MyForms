import { FC } from 'react'
import styled from 'styled-components'


const LogoStyled = styled.div`
height: 60px;
padding: 2px 8px;
border-radius: 4px;
display: flex;
cursor: pointer;
:hover{
  background-color: #6666c4;
}
img{
  width: 25px;
}
path{
  transition: fill 0.15s linear;
}
path:nth-child(1):hover{
  fill: #ea7e6d;
}
path:nth-child(2):hover, path:nth-child(3):hover, path:nth-child(4):hover{
  fill: #f6c98b;
}
`
export const GitlabLogo:FC = ()=>{
  return(
    <LogoStyled>
      <svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="m24.507 9.5-.034-.09L21.082.562a.896.896 0 0 0-1.694.091l-2.29 7.01H7.825L5.535.653a.898.898 0 0 0-1.694-.09L.451 9.411.416 9.5a6.297 6.297 0 0 0 2.09 7.278l.012.01.03.022 5.16 3.867 2.56 1.935 1.554 1.176a1.051 1.051 0 0 0 1.268 0l1.555-1.176 2.56-1.935 5.197-3.89.014-.01A6.297 6.297 0 0 0 24.507 9.5Z" fill="#E24329"></path>
        <path d="m24.507 9.5-.034-.09a11.44 11.44 0 0 0-4.56 2.051l-7.447 5.632 4.742 3.584 5.197-3.89.014-.01A6.297 6.297 0 0 0 24.507 9.5Z" fill="#FC6D26"></path>
        <path d="m7.707 20.677 2.56 1.935 1.555 1.176a1.051 1.051 0 0 0 1.268 0l1.555-1.176 2.56-1.935-4.743-3.584-4.755 3.584Z" fill="#FCA326"></path>
        <path d="M5.01 11.461a11.43 11.43 0 0 0-4.56-2.05L.416 9.5a6.297 6.297 0 0 0 2.09 7.278l.012.01.03.022 5.16 3.867 4.745-3.584-7.444-5.632Z" fill="#FC6D26"></path>
      </svg>
    </LogoStyled>
  )
}