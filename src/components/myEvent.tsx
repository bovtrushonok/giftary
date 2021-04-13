import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import { IEventProps } from '../types';
import { DateBlock, EventListItem, EditingPanel } from '../sharedViews';

export const MyEvent: React.FC<IEventProps> = ({ eventName, eventDay, eventMonth }) => (
  <EventListItem>
    <span>{eventName}</span>
    <EditingPanel>
      <EditIcon />
      <DeleteOutlineIcon />
    </EditingPanel>
    <DateBlock>
      <p>{eventDay}</p>
      <p>{eventMonth}</p>
    </DateBlock>
  </EventListItem>
);
