import { FC } from "react"
import cn from 'classnames'
import m from './style.module.css'


export const Information:FC = (props:any)=>{
  const {isEnglish, data, logo} = props
  return(
    <div className={cn(m.wrapper)}>
      <div className={cn(m.header)}>
        <div className={cn(m.name)}>{isEnglish?'Habr':'Хабр'}</div>
        <div className={cn(m.description)}>{isEnglish?'Community of IT - specialists':'Сообщество IT - специалистов'}</div>
      </div>
      <div className={cn(m.main)}>
        <div className={cn(m.logo)}>
          <img src={logo}/>
        </div>
        <div className={cn(m.history)}>
          <p className={cn(m.history__item)}>{data.history}</p>
          <p className={cn(m.history__item)}>{data.date}</p>
          <p className={cn(m.history__item)}>{data.rating}</p>
        </div>
      </div>
      <div className={cn(m.footer)}>
        <button className={cn(m.more)}><a href="https://habr.com/" target="blank">{isEnglish?'Go to the website and find out more':'Перейти на сайт и узнать подробнее'}</a></button>
      </div>
    </div>
  )
}