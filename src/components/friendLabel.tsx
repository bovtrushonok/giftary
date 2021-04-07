import React from 'react';
import { IFriendProps } from '../types';
import { FriendAvatar } from './friendAvatar';
import { FriendInfo, EventListItem } from '../sharedViews';

export const FriendLabel: React.FC<IFriendProps> = ({ friendName, friendAvatar }) => (
  <FriendInfo>
    <FriendAvatar friendAvatar={friendAvatar} />
    <EventListItem>
      <span>{friendName}</span>
    </EventListItem>
  </FriendInfo>
);
