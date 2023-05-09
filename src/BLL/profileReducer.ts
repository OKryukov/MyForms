import photo from './images/photo.jpg'

const initialState = {
  language: 'Russian' as 'Russian' | 'English',
  data:{
    rus:{
      photo: photo,
      age: 30,
      name:'Олег Крюков',
      location:{ country: 'Россия', city: 'Санкт - Петербург'},
      profession: 'FrontEnd разработчик',
      skillsTitle: 'Список моих навыков',
    },
    eng:{
      photo: photo,
      age: 30,
      name:'Oleg Kryukov',
      location:{ country: 'Russia', city: 'Saint Petersburg'},
      profession:'FrontEnd developer',
      skillsTitle: 'My skills list',
    },
  },
  skills:{
    frontend:['HTML','JS','TS','CSS','React','Redux','Redux Saga','Redux Thunk','React Redux','React Router DOM',
    'React Hook Form','ClassNames','Reselect','Styled Components','Axios'],
    backend:['Node JS','Express','GraphQL','MongoDB'],
    other:['Webpack','Phyton','jQuery','Git'],
  }
}
export type InitialStateType = typeof initialState

const AT = {
  LANGUAGE: 'LANGUAGE',
} as const
const actionCreators ={
  switchLanguageAC(){return {type: AT.LANGUAGE}},
}
type ActionsTypes = ReturnType<typeof actionCreators[keyof typeof actionCreators]>

export const profileReducer = ( state = initialState, action:ActionsTypes):InitialStateType =>{
  switch(action.type){
    case AT.LANGUAGE:
      return {...state, language:`${state.language === 'Russian'? 'English' : 'Russian'}`}
    default:
      return state
  }
}