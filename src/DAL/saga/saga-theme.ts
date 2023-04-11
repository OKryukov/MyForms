import { themeActionCreators } from '../../BLL/themeReducer';
import { AT } from '../../BLL/npmjsReducer';
import { put, takeEvery } from 'redux-saga/effects'

const delay = (ms:number)=> new Promise(res=>setTimeout(res,ms))

function* Worker(){
  yield delay(50)
  yield put(themeActionCreators.toogleThemeAC())
}

export function* Watcher(){
  yield takeEvery(AT.ASYNCLOGIN, Worker)
}