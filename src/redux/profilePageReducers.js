import { ADD_GIFT_TYPE, ADD_EVENT_TYPE } from '../constants/actionCreatorTypes';

export const profileReducer = (state, action) => {
  const stateCopy = { ...state };

  switch (action.type) {
    case ADD_EVENT_TYPE:
      stateCopy.eventsData = { ...state.eventsData };
      stateCopy.eventsData.push({
        eventName: action.eventName, eventDay: action.eventDate.slice(0, 2), eventMonth: action.eventDate.slice(2, 5), id: '2',
      });
      stateCopy.addMode = false;
      return stateCopy;
    case ADD_GIFT_TYPE:
      stateCopy.giftsData = { ...state.giftsData };
      stateCopy.giftsData.push({
        giftName: action.eventName, giftLink: action.giftLink, giftDescription: action.giftDescription, id: '2',
      });
      stateCopy.addMode = false;
      return stateCopy;
    default:
      return state;
  }
};

export const addGiftActionCreator = (giftName, giftLink, giftDescription) => ({
  type: ADD_GIFT_TYPE,
  giftName,
  giftLink,
  giftDescription,
});

export const addEventActionCreator = (eventName, eventDay) => ({
  type: ADD_EVENT_TYPE,
  eventName: { eventName },
  eventDay: { eventDay },
});
