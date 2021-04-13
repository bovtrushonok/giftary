import {
  ADD_GIFT, ADD_EVENT,
} from '../../constants/actionCreatorTypes';

export const addGiftActionCreator = (newGift) => ({
  type: ADD_GIFT,
  newGift,
});

export const addEventActionCreator = (newEvent) => ({
  type: ADD_EVENT,
  newEvent,
});
