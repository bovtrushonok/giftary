import React from 'react';
import { DateBlock, EventListItem } from '../sharedViews/listItem';

export interface eventProps {
  eventName: string;
  eventDay: string;
  eventMonth: string;
  id: string;
}

export const MyEvent: React.FC<eventProps> = ({ eventName, eventDay, eventMonth } : eventProps) => (
  <EventListItem>
    <span>{eventName}</span>
    <DateBlock>
      <p>{eventDay}</p>
      <p>{eventMonth}</p>
    </DateBlock>
  </EventListItem>
);
