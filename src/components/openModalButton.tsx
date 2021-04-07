import React from 'react';
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import { IOpenModal } from '../types/interfaces';
import { openModalActionCreator } from '../redux/actions';
import { IconWrapper } from '../sharedViews';

export const OpenModalButton: React.FC<IOpenModal> = ({ dispatch }) => {
  function openModal() {
    dispatch(openModalActionCreator());
  }

  return (
    <IconWrapper onClick={openModal}>
      <AddBoxRoundedIcon />
      <span>Add gifts to your wish list</span>
    </IconWrapper>
  );
};
