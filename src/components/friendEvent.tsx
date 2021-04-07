import React from 'react';
import { IFriendEventProps } from '../types/interfaces';
import { FriendAvatar } from './friendAvatar';
import {
  DateBlock, EventListItem, FriendInfo,
} from '../sharedViews';

export const FriendEvent: React.FC<IFriendEventProps> = ({
  friendName, friendAvatar, eventName, eventDay, eventMonth,
}) => (
  <FriendInfo>
    <FriendAvatar friendAvatar={friendAvatar} />
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
