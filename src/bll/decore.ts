import { ThemeMoonSVG, ThemeSunSVG } from '../components/commons/svgStorage'

const initialState = {
  theme:{
    value: 'dark' as 'dark' | 'light',
    icon: ThemeSunSVG as typeof ThemeSunSVG | typeof ThemeMoonSVG,
  },
  language:{
    value: 'Russian' as 'Russian' | 'English',
    icon: ThemeSunSVG as typeof ThemeSunSVG | typeof ThemeMoonSVG,
  },
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
      if (state.theme.value === 'dark'){
        return {...state, theme:{...state.theme, value:'light', icon:ThemeMoonSVG}}
      }else{
        return {...state, theme:{...state.theme, value:'dark', icon:ThemeSunSVG}}
      }
    case AT.SWITCHLANGUAGE:
        if (state.language.value === 'Russian'){
          return {...state, language:{...state.language, value:"English", icon:ThemeMoonSVG}}
        }else{
          return {...state, language:{...state.language, value:'Russian', icon:ThemeSunSVG}}
        }
    default:
      return state
  }
}

