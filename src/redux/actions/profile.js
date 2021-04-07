import {
  CHANGE_MODE, OPEN_MODAL, CLOSE_MODAL,
} from '../../constants/actionCreatorTypes';

export const changeModeActionCreator = () => ({
  type: CHANGE_MODE,
});

export const openModalActionCreator = () => ({
  type: OPEN_MODAL,
});

export const closeModalActionCreator = () => ({
  type: CLOSE_MODAL,
});
