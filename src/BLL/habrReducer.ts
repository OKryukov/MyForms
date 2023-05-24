import logo from '../BLL/images/habr.png'
const initialState = {
  logo:logo,
  data:{
    rus:{
      name:'Хабр',
      btn: 'Войти',
      services: 'Или войдите с помощью других сервисов',
      sigUp:{
        question: 'Ещё нет аккаунта?',
        link: 'Зарегистрируйтесь',
      },
      information:{
        history: 'Хабр (бывший Хабрахабр) — русскоязычный веб-сайт в формате системы тематических коллективных блогов (именуемых хабами) с элементами новостного сайта, созданный для публикации новостей, аналитических статей, мыслей, связанных с информационными технологиями, бизнесом и интернетом.',
        date: 'Основан Денисом Крючковым в июне 2006 года.',
        rating: 'В рейтинге «Медиалогии» среди тематических изданий (IT и телеком СМИ — III квартал 2014) «Хабрахабр» занимал 3-е место[2], в I квартале 2022 года — 6-е место[3]. Входил в 1000 самых посещаемых сайтов в мире на март 2015 по рейтингу Alexa Internet.',
      },
      description: 'Сообщество IT - специалистов',
      language: 'English',
      service: 'О сервисе',
      feedback: 'Обратная связь',
      agreement: 'Соглашение',
    },
    eng:{
      name:'Habr',
      btn: 'Log in',
      services: 'Or log in with',
      sigUp:{
        question: 'Have no account yet?',
        link: 'Sign up',
      },
      information:{
        history: 'Habr (formerly Habrakhabr) is a Russian-language website in the format of a system of thematic collective blogs (called hubs) with elements of a news site, created to publish news, analytical articles, thoughts related to information technology, business and the Internet.',
        date: 'Founded by Denis Kryuchkov in June 2006.',
        rating: 'In the Medialogia rating among thematic publications (IT and telecom media - Q3 2014), Habrahabr took 3rd place[2], in Q1 2022 - 6th place[3]. Included in the 1000 most visited sites in the world as of March 2015 according to the Alexa Internet rating.',
      },
      description: 'Community of IT - specialists',
      language: 'Русский',
      service: 'About',
      feedback: 'Feedback',
      agreement: 'User agreement',
    },
  }
}
type InitialStateType = typeof initialState

const AT = {
  SIGNUP: 'habr/SIGNUP',
  SIGNIN: 'habr/SIGNIN',
} as const

const actionCreators = {
  signUpAC(data:any){return {type:AT.SIGNUP, payload:data}},
  signInAC(data:any){return {type:AT.SIGNIN, payload:data}}
}
type ActionsTypes = ReturnType<typeof actionCreators[keyof typeof actionCreators]>

export const habrReducer = (state:InitialStateType = initialState, action:ActionsTypes):InitialStateType=>{
  switch(action.type){
    case AT.SIGNUP:
      return state
    case AT.SIGNIN:
      return state
    default:
      return state
  }
}