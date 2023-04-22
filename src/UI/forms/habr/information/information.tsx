import { FC } from "react"
import cn from 'classnames'
import m from './style.module.css'


// const InformationStyled = styled.div`
//   background-color: ${({theme})=>theme.colors.bc};
//   border-radius: ${({theme})=>theme.borrad.base};
//   padding: ${({theme})=>theme.gaps.large};
//   transition: ${({theme})=>theme.trans.base};
//   height: 100%;
// `
export const Information:FC = ()=>{
  return(
    <div className={cn(m.wrapper)}>
      <div className={cn(m.header)}>
        <div className={cn(m.logo)}>Хабр</div>
        <div className={cn(m.description)}>Сообщество IT - специалистов</div>
      </div>
      <div className={cn(m.main)}>Main</div>
      <div className={cn(m.footer)}>
        <button className={cn(m.more)}><a href="https://habr.com/" target="_blank">Перейти на сайт и узнать подробнее</a></button>
      </div>
    </div>
  )
}