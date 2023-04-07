import photo from './images/photo.jpg'

const initialState = {
  photo: photo,
  age: 30,
  name:{
      rus:{
        firstName: 'Олег',
        lastName: 'Крюков',
      },
      eng:{
        firstName: 'Oleg',
        lastName: 'Kryukov',
      },
  },
  location:{
      rus:{
        country: 'Россия',
        city: 'Санкт - Петербург',
      },
      eng:{
        country: 'Russia',
        city: 'Saint Petersburg',
      },
  },
  profession:{
      rus: 'Full Stack разработчик',
      eng: 'Full Stack developer',
  },
  skills:[
    'HTML','JS','TS','CSS','React','Redux','Redux','Redux Thunk','React Redux','React Router DOM',
    'React Hook Form','ClassNames','Reselect','Styled Components','axios','jQuery','Phyton',
  ]
}
export type InitialStateType = typeof initialState

export const profileReducer = ( state = initialState):InitialStateType =>{
  return state
}