import React from 'react';
import { iFriendEventProps } from '../types/interfaces';
import { Avatar } from './avatar';
import { DateBlock, EventListItem } from '../sharedViews/listItem';
import { FriendInfo } from '../sharedViews/contentWrap';

export const FriendEvent: React.FC<iFriendEventProps> = ({
  friendName, friendAvatar, eventName, eventDay, eventMonth,
} : iFriendEventProps) => (
  <FriendInfo>
    <Avatar friendAvatar={friendAvatar} />
    <EventListItem>
      <span>{friendName}</span>
      <DateBlock>
        <p>{eventDay}</p>
        <p>{eventMonth}</p>
      </DateBlock>
      <p>{eventName}</p>
    </EventListItem>
  </FriendInfo>
);
