import { FC } from 'react'
import styled from 'styled-components'
const InformationStyled = styled.div`
.causes{
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  .cause_one{align-self: flex-start;}
  .cause_two{align-self: center;}
  .cause_three{align-self: flex-end;}
}
.question{
  font-size: 32px;
  font-weight: 600;
  padding: 20px;
  width: 100%;
  background-color: #d5cdeb;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cause{
  display: grid;
  grid-template-columns: 20px 520px;
  grid-template-rows: 40px 80px;
  grid-template-areas: 'number title' 'number description';
  grid-gap: 16px;
  background-color: #f6f3fe;
  padding: 20px;
  border-radius: 20px;
}
.number{
  grid-area: number;
  font-size: 32px;
  font-weight: 600;
  color: #7759c2;
}
.title{
  grid-area: title;
  font-size: 32px;
  font-weight: 600;
}
.description{
  grid-area: description;
  font-size: 22px;
  line-height: 26px;
}
`
export const Information:FC = ()=>{
  return(
    <InformationStyled>
      <div className="causes">
        <div className="question">Three reasons why Developers choose GitLab</div>
        <div className='cause cause_one'>
          <div className="number">1</div>
          <div className="title">Single application</div>
          <div className="description">GitLab brings all DevSecOps capabilities into one application with a unified data store so everything is all in one place.</div>
        </div>
        <div className='cause cause_two'>
          <div className="number">2</div>
          <div className="title">Enhanced productivity</div>
          <div className="description">GitLab’s single application delivers a superior user experience, which improves cycle time and helps prevent context switching.</div>
        </div>
        <div className='cause cause_three'>
          <div className="number">3</div>
          <div className="title">Better automation, where it really counts</div>
          <div className="description">GitLab’s automation tools are more reliable and feature rich, helping remove cognitive load and unnecessary grunt work.</div>
        </div>
      </div>
    </InformationStyled>
  )
}