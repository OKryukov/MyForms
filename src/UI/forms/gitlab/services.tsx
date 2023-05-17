import { FC } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { StateType } from '../../../BLL/store'

const ServicesStyled = styled.div`
display: grid;
grid-gap: 12px;
.service{
  border: 1px solid #bfbfc3;
  border-radius: 4px;
  color: #333238;
  height: 32px;
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.05s linear;
}
.service:hover{
  border-width: 3px;
  background-color: #ececef;
}
img{
  width: 16px;
}
`
export const Services:FC = ()=>{
  const logos = useSelector((state:StateType)=>state.gitlab.services)
  return(
    <ServicesStyled>
      <div className="service google">
        <img src={logos.google} alt="logo" />
        <span>Google</span>
      </div>
      <div className="service github">
        <img src={logos.github} alt="logo" />
        <span>GitHub</span>
      </div>
      <div className="service twitter">
        <img src={logos.twitter} alt="logo" />
        <span>Twitter</span>
      </div>
      <div className="service bitbucket">
        <img src={logos.bitbucket} alt="logo" />
        <span>Bitbucket</span>
      </div>
      <div className="service salesforce">
        <img src={logos.salesforce} alt="logo" />
        <span>Salesforce</span>
      </div>
    </ServicesStyled>
  )
}