import { themeActionCreators } from '../../BLL/themeReducer';
import { AT } from '../../BLL/themeReducer';
import { call, put, takeEvery } from 'redux-saga/effects'
import { getFromGraphQL } from '../ajax/ajax';

const themeDelay = (ms:number)=> new Promise(res=>setTimeout(res,ms))

function* ThemeWorker(){
  yield themeDelay(50)
  yield put(themeActionCreators.toggleThemeAC())
  yield call(getFromGraphQL)
}

export function* Watcher(){
  yield takeEvery(AT.ASYNC_THEME, ThemeWorker)
}