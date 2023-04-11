import { DefaultTheme } from "styled-components"
export enum ThemeEnum  {
  light = "light",
  dark = "dark"
}
export interface ITheme {
  colors:{
    wbc: string
    bc: string
    hover: string
    fill: string
  },
  trans:{
    transition: string
  },
  media: {
    extraLarge: string
    large: string
    medium: string
    small: string
  }
}

const baseTheme = {
  trans:{
    transition: 'all 0.3s ease-in-out',
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
    wbc: '#22272e',
    bc: '#2d333b',
    hover: '#ca4747',
    fill: '#fff',
  }
}
export const lightTheme:DefaultTheme = {
  ...baseTheme,
  colors:{
    wbc: '#fff',
    bc: '#c7cecf',
    hover: '#97b1ab',
    fill: '#3b3e40',
  }
}

const initialState = {
  language: 'Russian'as 'Russian'| 'English',
  current: ThemeEnum.dark
}

export type initialStateType = typeof initialState

const AT = {
  LANGUAGE: 'LANGUAGE',
  TOOGLE_THEME: 'theme/TOOGLE_THEME',
  ASYNC_THEME: 'theme/ASYNC_THEME',
} as const

export const themeActionCreators = {
  languageAC(){return {type: AT.LANGUAGE}},
  toogleThemeAC(){return {type: AT.TOOGLE_THEME}},
  asyncThemeAC(){return {type: AT.ASYNC_THEME}},

}
type ActionsTypes = ReturnType<typeof themeActionCreators[keyof typeof themeActionCreators]>
export const themeReducer = ( state = initialState, action:ActionsTypes ):initialStateType =>{
  switch (action.type){
    case AT.LANGUAGE:
      return {...state, language:`${state.language === 'Russian'? 'English' : 'Russian'}`}
    case AT.TOOGLE_THEME:
      return {...state, current:state.current===ThemeEnum.dark? ThemeEnum.light: ThemeEnum.dark}
    default:
      return state
  }
}
