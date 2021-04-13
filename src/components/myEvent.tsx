import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import { IEventProps } from '../types';
import { DateBlock, EventListItem, EditingPanel } from '../sharedViews';

export const MyEvent: React.FC<IEventProps> = ({
  eventName, eventDay, eventMonth, deleteItem, editItem, id,
}) => {
  function onEditItem() {
    editItem(id);
  }

  function onDeleteItem() {
    deleteItem(id);
  }

  return (
    <EventListItem>
      <span>{eventName}</span>
      <EditingPanel>
        <EditIcon onClick={onEditItem} />
        <DeleteOutlineIcon onClick={onDeleteItem} />
      </EditingPanel>
      <DateBlock>
        <p>{eventDay}</p>
        <p>{eventMonth}</p>
      </DateBlock>
    </EventListItem>
  );
};
