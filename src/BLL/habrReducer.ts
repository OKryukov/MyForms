import logo from '../BLL/images/habr.png'
const initialState = {
  logo:logo,
  data:{
    rus:{
      name:'Хабр',
      title: 'Вход',
      email: 'E-mail',
      password: 'Пароль',
      btn: 'Войти',
      forgot: 'Забыли пароль?',
      services: 'Или войдите с помощью других сервисов',
      sigUp:{
        question: 'Ещё нет аккаунта?',
        link: 'Зарегистрируйтесь',
      },
      description: 'Сообщество IT - специалистов',
      language: 'English',
      service: 'О сервисе',
      feedback: 'Обратная связь',
      agreement: 'Соглашение',
    },
    eng:{
      name:'Habr',
      title: 'Log in',
      email: 'Email',
      password: 'Password',
      btn: 'Log in',
      forgot: 'Forgot password?',
      services: 'Or log in with',
      sigUp:{
        question: 'Have no account yet?',
        link: 'Sign up',
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