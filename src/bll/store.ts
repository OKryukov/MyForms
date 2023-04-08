import {combineReducers, legacy_createStore as createStore} from 'redux'
import { decorReducer } from './decore';
import { profileReducer } from './profile';

const reducers = combineReducers({
  profile: profileReducer,
  decor: decorReducer,
})

export const store = createStore(reducers)

export type StateType = ReturnType<typeof reducers>
export type DispatchType = typeof store.dispatch

