import {
  CHANGE_MODE, OPEN_MODAL, CLOSE_MODAL, EDIT_ITEM, DELETE_ITEM,
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

export const editItem = (itemID) => ({
  type: EDIT_ITEM,
  itemID,
});

export const deleteItem = (itemID) => ({
  type: DELETE_ITEM,
  itemID,
});
