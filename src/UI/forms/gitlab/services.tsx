import { FC } from 'react'
import styled from 'styled-components'

const ServicesStyled = styled.div`
  
`
export const Services:FC = ()=>{
  return(
    <ServicesStyled>
      <div className="google">
        <img src="#" alt="Google" />
        <span>Google</span>
      </div>
      <div className="github">
        <img src="#" alt="GitHub" />
        <span>GitHub</span>
      </div>
      <div className="twitter">
        <img src="#" alt="Twitter" />
        <span>Twitter</span>
      </div>
      <div className="bitbucket">
        <img src="#" alt="Bitbucket" />
        <span>Bitbucket</span>
      </div>
      <div className="salesforce">
        <img src="#" alt="Salesforce" />
        <span>Salesforce</span>
      </div>
    </ServicesStyled>
  )
}