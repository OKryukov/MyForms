import photo from './images/photo.jpg'

const initialState = {
  language: 'Russian' as 'Russian' | 'English',
  data:{
    rus:{
      photo: photo,
      age: 30,
      name:{ firstName: 'Олег', lastName: 'Крюков'},
      location:{ country: 'Россия', city: 'Санкт - Петербург'},
      profession: 'Full Stack разработчик',
      skillsTitle: 'Список моих навыков',
    },
    eng:{
      photo: photo,
      age: 30,
      name:{ firstName: 'Oleg', lastName: 'Kryukov'},
      location:{ country: 'Russia', city: 'Saint Petersburg'},
      profession:'Full Stack developer',
      skillsTitle: 'My skills list',
    },
  },
  skills:[
    'HTML','JS','TS','CSS','React','Redux','Redux','Redux Thunk','React Redux','React Router DOM',
    'React Hook Form','ClassNames','Reselect','Styled Components','Axios','Express', 'Node JS', 'Webpack',
    'jQuery','Phyton','Git',
  ],
}
export type InitialStateType = typeof initialState

const AT = {
  SWITCHLANGUAGE: 'decor/SWITCHLANGUAGE',
} as const
const actionCreators ={
  switchLanguageAC(){return {type: AT.SWITCHLANGUAGE}},
}
type ActionsTypes = ReturnType<typeof actionCreators[keyof typeof actionCreators]>

export const profileReducer = ( state = initialState, action:ActionsTypes):InitialStateType =>{
  switch(action.type){
    case AT.SWITCHLANGUAGE:
      return {...state, language:`${state.language === 'Russian'? 'English' : 'Russian'}`}
    default:
      return state
  }
}