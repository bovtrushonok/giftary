import {
  ADD_GIFT, ADD_EVENT, ADD_NEW_EVENT_DATE, ADD_NEW_EVENT_NAME, ADD_NEW_EVENT_MONTH,
  ADD_NEW_GIFT_DESCRIPTION, ADD_NEW_GIFT_LINK, ADD_NEW_GIFT_NAME, CHANGE_MODE,
  OPEN_MODAL, CLOSE_MODAL,
} from '../constants/actionCreatorTypes';

export const profileReducer = (state, action) => {
  const stateCopy = { ...state };

  switch (action.type) {
    case CHANGE_MODE:
      stateCopy.mode = (stateCopy.mode === 'onGift') ? 'onEvent' : 'onGift';
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
    case ADD_GIFT:
      stateCopy.newGiftData = { ...state.newGiftData };
      stateCopy.giftsData.push(stateCopy.newGiftData);
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

export const addGiftActionCreator = () => ({
  type: ADD_GIFT,
});

export const addEventActionCreator = () => ({
  type: ADD_EVENT,
});

export const addNewEventNameActionCreator = (eventName) => ({
  type: ADD_NEW_EVENT_NAME,
  eventName,
});

export const addNewEventDayActionCreator = (eventDay) => ({
  type: ADD_NEW_EVENT_DATE,
  eventDay,
});

export const addNewEventMonthActionCreator = (eventMonth) => ({
  type: ADD_NEW_EVENT_MONTH,
  eventMonth,
});

export const addNewGiftNameActionCreator = (giftName) => ({
  type: ADD_NEW_GIFT_NAME,
  giftName,
});

export const addNewGiftLinkActionCreator = (giftLink) => ({
  type: ADD_NEW_GIFT_LINK,
  giftLink,
});

export const addNewGiftDescriptionActionCreator = (giftDescription) => ({
  type: ADD_NEW_GIFT_DESCRIPTION,
  giftDescription,
});

export const changeModeActionCreator = () => ({
  type: CHANGE_MODE,
});

export const openModalActionCreator = () => ({
  type: OPEN_MODAL,
});

export const closeModalActionCreator = () => ({
  type: CLOSE_MODAL,
});
