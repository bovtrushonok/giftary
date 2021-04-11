import { createStore, combineReducers } from 'redux';
import { eventsReducer, friendsReducer, profileReducer } from './reducers';

const reducers = combineReducers({
  profilePage: profileReducer,
  friendsPage: friendsReducer,
  eventsPage: eventsReducer,
});

export const store = createStore(reducers);
