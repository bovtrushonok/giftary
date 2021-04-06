import {
  CHANGE_MODE, OPEN_MODAL, CLOSE_MODAL,
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
    default:
      return state;
  }
};

export const changeModeActionCreator = () => ({
  type: CHANGE_MODE,
});

export const openModalActionCreator = () => ({
  type: OPEN_MODAL,
});

export const closeModalActionCreator = () => ({
  type: CLOSE_MODAL,
});
