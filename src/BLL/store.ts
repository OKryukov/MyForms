import {combineReducers, legacy_createStore as createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import { Watcher } from '../DAL/saga/saga-theme';
import { themeReducer } from './themeReducer';
import { profileReducer } from './profileReducer';
import { npmjsReducer } from './npmjsReducer';
import { habrReducer } from './habrReducer';
import { gitlabReducer } from './gitlabReducer';

const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
  profile: profileReducer,
  theme: themeReducer,
  npmjs: npmjsReducer,
  habr: habrReducer,
  gitlab: gitlabReducer
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware, sagaMiddleware))

sagaMiddleware.run(Watcher)

export type StateType = ReturnType<typeof reducers>
export type DispatchType = typeof store.dispatch