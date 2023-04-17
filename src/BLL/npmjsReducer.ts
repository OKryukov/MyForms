import Animalpng from'./images/npmjsAnimal.png'
import bi from './images/bi.png'
import { DispatchType } from './store'
import { axiosNpmjs } from '../DAL/api'
const initialState = {
  isAutch: false,
  animal: Animalpng,
  bi: bi,
  inform:'Relied upon by more than 17 million developers worldwide, npm is committed to making JavaScript development elegant, productive, and safe. The free npm Registry has become the center of JavaScript code sharing, and with more than two million packages, the largest software registry in the world.',
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

export type SignUpDataType = {username:String, email:String, password:String}
export const signUpTC = (data:SignUpDataType)=>{
  return async (dispatch:DispatchType)=>{
    const resultCode = await axiosNpmjs.signUp(data)
    if (resultCode === 0){
      alert('регистрация прошла успешно')
    }else if(resultCode === 1){
      alert('Не удалось зарегистрироваться')
    }
  }
}