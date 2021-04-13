import {
  ADD_GIFT, ADD_EVENT, ADD_NEW_EVENT_DATE, ADD_NEW_EVENT_NAME, ADD_NEW_EVENT_MONTH,
  ADD_NEW_GIFT_DESCRIPTION, ADD_NEW_GIFT_LINK, ADD_NEW_GIFT_NAME,
} from '../../constants/actionCreatorTypes';

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
