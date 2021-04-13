import React from 'react';
import { IEventProps } from '../types';
import { DateBlock, EventListItem } from '../sharedViews';

export const MyEvent: React.FC<IEventProps> = ({ eventName, eventDay, eventMonth }) => (
  <EventListItem>
    <span>{eventName}</span>
    <DateBlock>
      <p>{eventDay}</p>
      <p>{eventMonth}</p>
    </DateBlock>
  </EventListItem>
);
