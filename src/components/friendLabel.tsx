import React from 'react';
import { EventListItem } from '../sharedViews/listItem';

interface Props {
  friendName: string;
}

export const FriendLabel: React.FC<Props> = ({ friendName } : Props) => (
  <EventListItem>
    <span>{friendName}</span>
  </EventListItem>
);
