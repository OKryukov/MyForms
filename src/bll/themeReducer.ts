const initialState = {
  theme: 'dark' as 'dark' | 'light',
  language:'Russian' as 'Russian' | 'English',
  wbc: '#22272e',
  header:{
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
    c: '#fff',
  },
}
export type ThemeType = typeof initialState

const AT = {
  SWITCH_LANGUAGE: 'SWITCH_LANGUAGE',
  SWITCH_THEME: 'theme/SWITCH_THEME',
  SWITCH_HEADER_THEME: 'theme/SWITCH_HEADER_THEME',
  SWITCH_NAV_THEME: 'theme/SWITCH_NAV_THEME',
  SWITCH_FOOTER_THEME: 'theme/SWITCH_FOOTER_THEME',
  SWITCH_LINKS_THEME: 'theme/SWITCH_LINKS_THEME',
  SWITCH_BACK_THEME: 'theme/SWITCH_BACK_THEME',
  ASYNC_SWITCH_THEME: 'theme/ASYNK_SWITCH_THEME',
} as const

export const themeActionCreators = {
  switchThemeAC(){return {type: AT.SWITCH_THEME}},
  switchLanguageAC(){return {type: AT.SWITCH_LANGUAGE}},
  switchHeaderThemeAC(){return {type: AT.SWITCH_HEADER_THEME}},
  switchNavThemeAC(){return {type: AT.SWITCH_NAV_THEME}},
  switchFooterThemeAC(){return {type: AT.SWITCH_FOOTER_THEME}},
  switchLinksThemeAC(){return {type: AT.SWITCH_LINKS_THEME}},
  switchBackThemeAC(){return {type: AT.SWITCH_BACK_THEME}},
}
type ActionsTypes = ReturnType<typeof themeActionCreators[keyof typeof themeActionCreators]>

export const themeReducer = ( state = initialState, action:ActionsTypes ):ThemeType =>{
  switch (action.type){
    case AT.SWITCH_THEME:
      return {...state, theme:`${state.theme === 'dark'? 'light' : 'dark'}`}
    case AT.SWITCH_LANGUAGE:
      return {...state, language:`${state.language === 'Russian'? 'English' : 'Russian'}`}
    case AT.SWITCH_HEADER_THEME:
      return {...state, 
        header:{...state.header,
          bc:`${state.header.bc === '#2d333b'?'#9394a5':'#2d333b'}`,
          fill:`${state.links.fill === '#fff'?'#426474':'#fff'}`,
        }}
    case AT.SWITCH_NAV_THEME:
      return {...state, 
        nav:{...state.nav,
          bc:`${state.nav.bc === '#2d333b'?'#9394a5':'#2d333b'}`
        }}
      case AT.SWITCH_FOOTER_THEME:
        return {...state, 
          footer:{...state.nav,
            bc:`${state.footer.bc === '#2d333b'?'#9394a5':'#2d333b'}`,
            c:`${state.footer.c === '#fff'?'#000':'#fff'}`,
          }}
      case AT.SWITCH_LINKS_THEME:
        return {...state, 
          links:{...state.nav,
            bc:`${state.links.bc === '#2d333b'?'#9394a5':'#2d333b'}`,
            c:`${state.links.c === '#fff'?'#000':'#fff'}`,
            fill:`${state.links.fill === '#fff'?'#426474':'#fff'}`
          }}
      case AT.SWITCH_BACK_THEME:
        return {...state, wbc:`${state.wbc === '#22272e'?'#e4e5f1':'#22272e'}`}
    default:
      return state
  }
}
