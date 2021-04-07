import { combineReducers, createStore } from 'redux';
import { modalReducer, profileReducer } from './reducers';

const reducers = combineReducers({
  modalReducer,
  profileReducer,
});

export const store = createStore(reducers);
