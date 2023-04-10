import Animalpng from'./images/npmjsAnimal.png'
const initialState = {
  isAutch: false,
  animal: Animalpng,
}
export type InitialStateType = typeof initialState

export const AT = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  ASYNCLOGIN: 'npmjs/ASYNCLOGIN',
  ASYNCLOGOUT: 'npmjs/ASYNCLOGOUT',
} as const
export const npmjsActionCreators = {
  loginAC(){ return{type:AT.LOGIN} },
  logoutAC(){ return{type:AT.LOGOUT} },
  asyncLoginAC(){ return{type:AT.ASYNCLOGIN} },
  asyncLogoutAC(){ return{type:AT.ASYNCLOGOUT} },
}
type ActionsTypes = ReturnType<typeof npmjsActionCreators[keyof typeof npmjsActionCreators]>

export const npmjsReducer = (state=initialState, action:ActionsTypes):InitialStateType =>{
  switch(action.type){
    case AT.LOGIN:
      return {...state, isAutch: true}
    case AT.LOGOUT:
      return {...state, isAutch: false}
    default:
      return state
  }
}