import {
  CHANGE_MODE, OPEN_MODAL, CLOSE_MODAL,
} from '../../constants/actionCreatorTypes';

export const changeMode = () => ({
  type: CHANGE_MODE,
});

export const openModal = () => ({
  type: OPEN_MODAL,
});

export const closeModalActionCreator = () => ({
  type: CLOSE_MODAL,
});
