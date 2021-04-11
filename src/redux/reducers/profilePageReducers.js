import {
  CHANGE_MODE, OPEN_MODAL, CLOSE_MODAL,
  ADD_GIFT, ADD_EVENT, ADD_NEW_EVENT_DATE, ADD_NEW_EVENT_NAME, ADD_NEW_EVENT_MONTH,
  ADD_NEW_GIFT_DESCRIPTION, ADD_NEW_GIFT_LINK, ADD_NEW_GIFT_NAME,
} from '../../constants/actionCreatorTypes';

const initialState = {
  userId: 0,
  mode: true, // or onEvent
  addMode: 'false',
  giftsData: [
    {
      giftName: 'First gift', giftLink: 'some link', giftDescription: 'awesome present', id: '0',
    },
    {
      giftName: 'Second gift', giftLink: 'another link', giftDescription: 'cool present', id: '1',
    },
  ],
  eventsData: [
    {
      eventName: 'First event', eventDay: '26', eventMonth: 'March', id: '0',
    },
    {
      eventName: 'Second event', eventDay: '26', eventMonth: 'April', id: '1',
    },
  ],
  newGiftData: {
    giftName: '', giftLink: '', giftDescription: '', id: '5',
  },
  newEventData: {
    eventName: '', eventDay: '', eventMonth: '', id: '5',
  },
};

export const profileReducer = (state = initialState, action) => {
  const stateCopy = { ...state };

  switch (action.type) {
    case CHANGE_MODE:
      stateCopy.mode = !stateCopy.mode;
      return stateCopy;
    case OPEN_MODAL:
      stateCopy.addMode = 'true';
      return stateCopy;
    case CLOSE_MODAL:
      stateCopy.addMode = 'false';
      return stateCopy;
    case ADD_EVENT:
      stateCopy.newEventData = { ...state.newEventData };
      stateCopy.eventsData.push(stateCopy.newEventData);
      stateCopy.addMode = 'false';
      return stateCopy;
    case ADD_NEW_EVENT_DATE:
      stateCopy.newEventData = { ...state.newEventData };
      stateCopy.newEventData.eventDay = action.eventDay;
      return stateCopy;
    case ADD_NEW_EVENT_MONTH:
      stateCopy.newEventData = { ...state.newEventData };
      stateCopy.newEventData.eventMonth = action.eventMonth;
      return stateCopy;
    case ADD_NEW_EVENT_NAME:
      stateCopy.newEventData = { ...state.newEventData };
      stateCopy.newEventData.eventName = action.eventName;
      return stateCopy;
    case ADD_GIFT:
      stateCopy.newGiftData = { ...state.newGiftData };
      stateCopy.giftsData.push(stateCopy.newGiftData);
      stateCopy.addMode = 'false';
      return stateCopy;
    case ADD_NEW_GIFT_NAME:
      stateCopy.newGiftData = { ...state.newGiftData };
      stateCopy.newGiftData.giftName = action.giftName;
      return stateCopy;
    case ADD_NEW_GIFT_LINK:
      stateCopy.newGiftData = { ...state.newGiftData };
      stateCopy.newGiftData.giftLink = action.giftLink;
      return stateCopy;
    case ADD_NEW_GIFT_DESCRIPTION:
      stateCopy.newGiftData = { ...state.newGiftData };
      stateCopy.newGiftData.giftDescription = action.giftDescription;
      return stateCopy;
    default:
      return state;
  }
};
