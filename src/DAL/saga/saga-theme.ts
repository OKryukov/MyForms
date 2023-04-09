import { themeActionCreators } from '../../BLL/themeReducer';
import { AT } from '../../BLL/npmjsReducer';
import { put,takeEvery } from 'redux-saga/effects'

const delay = (ms:number)=> new Promise(res=>setTimeout(res,ms))

function* Worker(){
  yield delay(100)
  yield put(themeActionCreators.switchHeaderThemeAC())
  yield delay(100)
  yield put(themeActionCreators.switchNavThemeAC())
  yield delay(100)
  yield put(themeActionCreators.switchFooterThemeAC())
  yield delay(100)
  yield put(themeActionCreators.switchLinksThemeAC())
  yield delay(30)
  yield put(themeActionCreators.switchBackThemeAC())
}

export function* Watcher(){
  yield takeEvery(AT.ASYNCLOGIN, Worker)
}

