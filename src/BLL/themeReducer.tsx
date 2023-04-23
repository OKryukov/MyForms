import { DefaultTheme } from "styled-components"
export enum ThemeEnum  {
  light = "light",
  dark = "dark"
}
export interface ITheme {
  colors:{
    pink: string
    lightGray: string
    wbc: string
    bc: string
    c: string
    hover: string
    fill: string
  },
  gaps:{
    extraLarge: string,
    large: string,
    medium: string,
    small: string,
  },
  borrad:{
    base: string,
    minor: string,
  },
  trans:{
    base: string
  },
  media: {
    extraLarge: string
    large: string
    medium: string
    small: string
  }
}

const baseTheme = {
  colors:{
    pink: '#ca4747',
    lightGray: '#abb6bcc9',
  },
  trans:{
    base: 'all 0.3s ease-in-out',
  },
  gaps:{
    extraLarge: '15px',
    large: '10px',
    medium: '',
    small: '',
  },
  borrad:{
    base: '6px',
    minor: '',
  },
  media: {
    extraLarge: '(max-width: 1140px)',
    large: '(max-width: 960px)',
    medium: '(max-width: 720px)',
    small: '(max-width: 540px)',
  },
}
export const darkTheme:DefaultTheme = {
  ...baseTheme,
  colors:{
    ...baseTheme.colors,
    wbc: '#22272e',
    bc: '#2d333b',
    c: '#fff',
    hover: '#ca4747',
    fill: '#fff',
  }
}
export const lightTheme:DefaultTheme = {
  ...baseTheme,
  colors:{
    ...baseTheme.colors,
    wbc: '#fff',
    bc: '#c7cecf',
    c: '#000',
    hover: '#97b1ab',
    fill: '#3b3e40',
  }
}

const initialState = {
  language: 'Russian'as 'Russian'| 'English',
  values:{
    rus:{signIn: 'Форма входа', signUp: 'Форма регистрации'},
    eng:{signIn: 'Sign In Form', signUp: 'Sign Up Form'},
  },
  current: ThemeEnum.dark,
}

export type initialStateType = typeof initialState

export const AT = {
  LANGUAGE: 'LANGUAGE',
  TOGGLE_THEME: 'theme/TOGGLE_THEME',
  ASYNC_THEME: 'theme/ASYNC_THEME',
} as const

export const themeActionCreators = {
  languageAC(){return {type: AT.LANGUAGE}},
  toggleThemeAC(){return {type: AT.TOGGLE_THEME}},
  asyncThemeAC(){return {type: AT.ASYNC_THEME}},

}
type ActionsTypes = ReturnType<typeof themeActionCreators[keyof typeof themeActionCreators]>
export const themeReducer = ( state = initialState, action:ActionsTypes ):initialStateType =>{
  switch (action.type){
    case AT.LANGUAGE:
      return {...state, language:`${state.language === 'Russian'? 'English' : 'Russian'}`}
    case AT.TOGGLE_THEME:
      return {...state, current:state.current===ThemeEnum.dark? ThemeEnum.light: ThemeEnum.dark}
    default:
      return state
  }
}
