import React from 'react';
import { DateBlock, EventListItem } from '../sharedViews/listItem';

interface Props {
  eventName: string;
  eventDay: string;
  eventMonth: string;
}

export const MyEvent: React.FC<Props> = ({ eventName, eventDay, eventMonth } : Props) => (
  <EventListItem>
    <span>{eventName}</span>
    <DateBlock>
      <p>{eventDay}</p>
      <p>{eventMonth}</p>
    </DateBlock>
  </EventListItem>
);
