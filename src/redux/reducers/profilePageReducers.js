import {
  CHANGE_MODE, OPEN_MODAL, CLOSE_MODAL,
  ADD_GIFT, ADD_EVENT,
} from '../../constants/actionCreatorTypes';

const initialState = {
  userId: 0,
  mode: true,
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
      stateCopy.eventsData = { ...state.eventsData };
      stateCopy.eventsData.push(...action.newEvent);
      stateCopy.addMode = 'false';
      return stateCopy;
    case ADD_GIFT:
      stateCopy.giftsData = { ...state.giftsData };
      stateCopy.giftsData.push(...action.newGift);
      stateCopy.addMode = 'false';
      return stateCopy;
    default:
      return state;
  }
};
