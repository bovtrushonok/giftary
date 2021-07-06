import React from 'react';
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import { IOpenModal } from '../types';
import { IconWrapper } from '../sharedViews';

export const OpenModalButton: React.FC<IOpenModal> = ({ openModal }) => {
  function onOpenModal() {
    openModal();
  }

  return (
    <IconWrapper onClick={onOpenModal}>
      <AddBoxRoundedIcon />
      <span>Add gifts to your wish list</span>
    </IconWrapper>
  );
};
