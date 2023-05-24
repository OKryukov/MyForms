import { FC } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { StateType } from '../../../BLL/store'
const InformationStyled = styled.div`
overflow-y: auto;
padding: 20px;
.causes{
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  .cause_one{align-self: flex-start;}
  .cause_two{align-self: center;}
  .cause_three{align-self: flex-end;}
}
.question, .more{
  font-size: 32px;
  font-weight: 600;
  padding: 15px;
  width: 100%;
  background-color: #d5cdeb;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.more {
  width: 50%;
  margin: 0 auto;
}
.more:hover{
  background-color: #d5cdeb;
  color: #7759c2;
  a{
    font-weight: 600;
  }
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
  const isEnglish = useSelector((state:StateType)=>state.theme.language=='English')
  return(
    <InformationStyled>
      <div className="causes">
        <div className="question">{isEnglish?'Three reasons why Developers choose GitLab':'Три причины, по которым разработчики выбирают GitLab'}</div>
        <div className='cause cause_one'>
          <div className="number">1</div>
          <div className="title">{isEnglish?'Single application':'Одно приложение'}</div>
          <div className="description">{isEnglish?
          'GitLab brings all DevSecOps capabilities into one application with a unified data store so everything is all in one place.':
          'GitLab объединяет все возможности DevSecOps в одном приложении с унифицированным хранилищем данных, чтобы все было в одном месте.'}</div>
        </div>
        <div className='cause cause_two'>
          <div className="number">2</div>
          <div className="title">{isEnglish?'Enhanced productivity':'Повышенная производительность'}</div>
          <div className="description">{isEnglish?
          'GitLab’s single application delivers a superior user experience, which improves cycle time and helps prevent context switching.':
          'Одно приложение GitLab предоставляет превосходный пользовательский интерфейс, что сокращает время переключения контекста.'}</div>
        </div>
        <div className='cause cause_three'>
          <div className="number">3</div>
          <div className="title">{isEnglish?'Better automation, where it really counts':'Лучшая автоматизация где надо'}</div>
          <div className="description">{isEnglish?
          'GitLab’s automation tools are more reliable and feature rich, helping remove cognitive load and unnecessary grunt work.':
          'Инструменты автоматизации GitLab более надежны и многофункциональны, помогая снять когнитивную нагрузку и ненужную рутинную работу.'}</div>
        </div>
        <button className='more'><a href="https://about.gitlab.com/" target="blank">{isEnglish?'Go to the website and find out more':'Перейти на сайт и узнать подробнее'}</a></button>
      </div>
    </InformationStyled>
  )
}