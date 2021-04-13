import {
  CHANGE_MODE, OPEN_MODAL, CLOSE_MODAL,
} from '../../constants/actionCreatorTypes';

const initialState = {
  userId: 0,
  mode: 'onGift', // or onEvent
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
      stateCopy.mode = (stateCopy.mode === 'onGift') ? 'onEvent' : 'onGift';
      return stateCopy;
    case OPEN_MODAL:
      stateCopy.addMode = 'true';
      return stateCopy;
    case CLOSE_MODAL:
      stateCopy.addMode = 'false';
      return stateCopy;
    default:
      return state;
  }
};
