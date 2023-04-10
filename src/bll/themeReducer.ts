const tv ={
  wbc:{
    dark: '#22272e',
    light: '#fff',
  },
  bc:{
    dark: '#2d333b',
    light: '#c7cecf',
  },
  hover:{
    dark: '#ca4747',
    light: '#97b1ab',
  },
  fill:{
    dark: '#fff',
    light: '#3b3e40',
  }
}
const initialState = {
  theme: 'dark' as 'dark' | 'light',
  language:'Russian' as 'Russian' | 'English',
  wbc: '#22272e',
  home:{
    bc: '#2d333b',
    fill: '#fff',
  },
  nav:{
    bc: '#2d333b',
  },
  footer:{
    bc: '#2d333b',
    c: '#fff',
  },
  links:{
    bc: '#2d333b',
    fill: '#fff',
  },
  header:{
    bc: '#2d333b',
    fill: '#fff',
  },
  main:{
    bc: '#2d333b',
    fill: '#fff',
  },
}
export type ThemeType = typeof initialState

const AT = {
  SWITCH_LANGUAGE: 'SWITCH_LANGUAGE',
  SWITCH_THEME: 'theme/SWITCH_THEME',
  SWITCH_HOME_THEME: 'theme/SWITCH_HOME_THEME',
  SWITCH_NAV_THEME: 'theme/SWITCH_NAV_THEME',
  SWITCH_FOOTER_THEME: 'theme/SWITCH_FOOTER_THEME',
  SWITCH_LINKS_THEME: 'theme/SWITCH_LINKS_THEME',
  SWITCH_HEADER_THEME: 'theme/SWITCH_HEADER_THEME',
  SWITCH_MAIN_THEME: 'theme/SWITCH_MAIN_THEME',
  SWITCH_BACK_THEME: 'theme/SWITCH_BACK_THEME',
  ASYNC_SWITCH_THEME: 'theme/ASYNK_SWITCH_THEME',
} as const

export const themeActionCreators = {
  switchThemeAC(){return {type: AT.SWITCH_THEME}},
  switchLanguageAC(){return {type: AT.SWITCH_LANGUAGE}},
  switchHomeThemeAC(){return {type: AT.SWITCH_HOME_THEME}},
  switchNavThemeAC(){return {type: AT.SWITCH_NAV_THEME}},
  switchFooterThemeAC(){return {type: AT.SWITCH_FOOTER_THEME}},
  switchLinksThemeAC(){return {type: AT.SWITCH_LINKS_THEME}},
  switchHeaderThemeAC(){return {type: AT.SWITCH_HEADER_THEME}},
  switchMainrThemeAC(){return {type: AT.SWITCH_MAIN_THEME}},
  switchBackThemeAC(){return {type: AT.SWITCH_BACK_THEME}},
}
type ActionsTypes = ReturnType<typeof themeActionCreators[keyof typeof themeActionCreators]>

export const themeReducer = ( state = initialState, action:ActionsTypes ):ThemeType =>{
  switch (action.type){
    case AT.SWITCH_THEME:
      return {...state, theme:`${state.theme === 'dark'? 'light' : 'dark'}`}
    case AT.SWITCH_LANGUAGE:
      return {...state, language:`${state.language === 'Russian'? 'English' : 'Russian'}`}
    case AT.SWITCH_HOME_THEME:
      return {...state,
        home:{...state.home,
          bc:`${state.home.bc === tv.bc.dark?tv.bc.light:tv.bc.dark}`,
          fill:`${state.links.fill === tv.fill.dark?tv.fill.light:tv.fill.dark}`,
        }}
    case AT.SWITCH_NAV_THEME:
      return {...state, 
        nav:{...state.nav,
          bc:`${state.nav.bc === tv.bc.dark?tv.bc.light:tv.bc.dark}`
        }}
    case AT.SWITCH_FOOTER_THEME:
        return {...state, 
          footer:{...state.nav,
            bc:`${state.footer.bc === tv.bc.dark?tv.bc.light:tv.bc.dark}`,
            c:`${state.footer.c === '#fff'?'#000':'#fff'}`,
        }}
    case AT.SWITCH_LINKS_THEME:
        return {...state, 
          links:{...state.nav,
            bc:`${state.links.bc === tv.bc.dark?tv.bc.light:tv.bc.dark}`,
            fill:`${state.links.fill === tv.fill.dark?tv.fill.light:tv.fill.dark}`,
        }}
    case AT.SWITCH_HEADER_THEME:
      return {...state,
        header:{...state.header,
          bc:`${state.header.bc === tv.bc.dark?tv.bc.light:tv.bc.dark}`,
          fill:`${state.header.fill === tv.fill.dark?tv.fill.light:tv.fill.dark}`,
        }}
    case AT.SWITCH_MAIN_THEME:
      return {...state,
        main:{...state.main,
          bc:`${state.main.bc === tv.bc.dark?tv.bc.light:tv.bc.dark}`,
          fill:`${state.main.fill === tv.fill.dark?tv.fill.light:tv.fill.dark}`,
        }}
    case AT.SWITCH_BACK_THEME:
      return {...state, wbc:`${state.wbc === tv.wbc.dark?tv.wbc.light:tv.wbc.dark}`}
    default:
      return state
  }
}
