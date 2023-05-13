const initialState = {
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