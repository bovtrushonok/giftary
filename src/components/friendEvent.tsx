import React from 'react';
import { DateBlock, EventListItem } from '../sharedViews/listItem';

interface Props {
  friendName: string;
  eventName: string;
  eventDay: string;
  eventMonth: string;
}

export const FriendEvent: React.FC<Props> = ({
  friendName, eventName, eventDay, eventMonth,
} : Props) => (
  <EventListItem>
    <span>{friendName}</span>
    <DateBlock>
      <p>{eventDay}</p>
      <p>{eventMonth}</p>
    </DateBlock>
    <p>{eventName}</p>
  </EventListItem>
);
