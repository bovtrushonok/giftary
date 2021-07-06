import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import { IGiftProps } from '../types';
import { EditingPanel, GiftListItem, GiftWrapper } from '../sharedViews';

export const MyGift : React.FC<IGiftProps> = ({
  giftName, giftLink, giftDescription, id, editItem, deleteItem,
}) => {
  function onEditItem() {
    editItem(id);
  }

  function onDeleteItem() {
    deleteItem(id);
  }

  return (
    <GiftListItem>
      <GiftWrapper>
        <span>{giftName}</span>
        <span>{giftLink}</span>
        <span>{giftDescription}</span>
      </GiftWrapper>
      <EditingPanel>
        <EditIcon onClick={onEditItem} />
        <DeleteOutlineIcon onClick={onDeleteItem} />
      </EditingPanel>
    </GiftListItem>
  );
};
