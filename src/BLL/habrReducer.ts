import logo from '../BLL/images/habr.png'
const initialState = {
  logo:logo,
  data:{
    rus:{name:'Хабр', description: 'Сообщество IT - специалистов',},
    eng:{name:'Habr', description: 'Community of IT - specialists',},
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