const initialState = {
  theme: 'dark' as 'dark' | 'light',
  language:'Russian' as 'Russian' | 'English',
}
export type InitialStateType = typeof initialState

const AT = {
  SWITCHTHEME: 'decor/SWITCHTHEME',
  SWITCHLANGUAGE: 'decor/SWITCHLANGUAGE',
} as const

export const actionCreators = {
  switchThemeAC(){return {type: AT.SWITCHTHEME}},
  switchLanguageAC(){return {type: AT.SWITCHLANGUAGE}},
}
type ActionsTypes = ReturnType<typeof actionCreators[keyof typeof actionCreators]>


export const decorReducer = ( state = initialState, action:ActionsTypes ):InitialStateType =>{
  switch (action.type){
    case AT.SWITCHTHEME:
      return {...state, theme:`${state.theme === 'dark'? 'light' : 'dark'}`}
    case AT.SWITCHLANGUAGE:
      return {...state, language:`${state.language === 'Russian'? 'English' : 'Russian'}`}
    default:
      return state
  }
}
