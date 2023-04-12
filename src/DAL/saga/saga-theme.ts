import { themeActionCreators } from '../../BLL/themeReducer';
import { AT } from '../../BLL/themeReducer';
import { put, takeEvery } from 'redux-saga/effects'

const themeDelay = (ms:number)=> new Promise(res=>setTimeout(res,ms))

function* ThemeWorker(){
  yield themeDelay(50)
  yield put(themeActionCreators.toggleThemeAC())
}

export function* Watcher(){
  yield takeEvery(AT.ASYNC_THEME, ThemeWorker)
}