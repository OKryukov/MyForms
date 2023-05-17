import logo from '../BLL/images/gitlab.svg'
import google from '../BLL/images/gitlab/cervices/google.png'
import github from '../BLL/images/gitlab/cervices/github.png'
import twitter from '../BLL/images/gitlab/cervices/twitter.png'
import bitbucket from '../BLL/images/gitlab/cervices/bitbucket.png'
import salesforce from '../BLL/images/gitlab/cervices/salesforce.png'
const initialState = {
  logo: logo,
  services:{google,github,twitter,bitbucket,salesforce},
  data:{
    rus:{},
    eng:{}
  }
}
type InitialStateType = typeof initialState
const AT = {
  SIGNUP: 'habr/SIGNUP',
  SIGNIN: 'habr/SIGNIN',
} as const
const gitlabActionCreators = {
  signupAsyncAC(data:any){return {type:AT.SIGNUP}},
  signinAsyncAC(data:any){return {type:AT.SIGNIN}},
}
type ActionsTypes = ReturnType<typeof gitlabActionCreators[keyof typeof gitlabActionCreators]>
export const gitlabReducer = (state=initialState, action:ActionsTypes):InitialStateType=>{
  switch (action.type){
    default:
      return state
  }
}