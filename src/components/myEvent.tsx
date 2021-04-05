import React from 'react';
import { eventProps } from '../types/interfaces';
import { DateBlock, EventListItem } from '../sharedViews/index';

export const MyEvent: React.FC<eventProps> = ({ eventName, eventDay, eventMonth } : eventProps) => (
  <EventListItem>
    <span>{eventName}</span>
    <DateBlock>
      <p>{eventDay}</p>
      <p>{eventMonth}</p>
    </DateBlock>
  </EventListItem>
);
