import React from 'react';
import { IEventProps } from '../types/interfaces';
import { DateBlock, EventListItem } from '../sharedViews/index';

export const MyEvent: React.FC<IEventProps> = ({ eventName, eventDay, eventMonth }) => (
  <EventListItem>
    <span>{eventName}</span>
    <DateBlock>
      <p>{eventDay}</p>
      <p>{eventMonth}</p>
    </DateBlock>
  </EventListItem>
);
