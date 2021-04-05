import { ADD_GIFT, ADD_EVENT } from '../constants/actionCreatorTypes';

export const profileReducer = (state, action) => {
  const stateCopy = { ...state };

  switch (action.type) {
    case ADD_EVENT:
      stateCopy.eventsData = { ...state.eventsData };
      stateCopy.eventsData.push({
        eventName: action.eventName, eventDay: action.eventDate.slice(0, 2), eventMonth: action.eventDate.slice(2, 5), id: '2',
      });
      stateCopy.addMode = false;
      return stateCopy;
    case ADD_GIFT:
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
  type: ADD_GIFT,
  giftName,
  giftLink,
  giftDescription,
});

export const addEventActionCreator = (eventName, eventDay) => ({
  type: ADD_EVENT,
  eventName: { eventName },
  eventDay: { eventDay },
});
