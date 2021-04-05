import React from 'react';
import { iFriendProps } from '../types/interfaces';
import { FriendAvatar } from './avatar';
import { FriendInfo, EventListItem } from '../sharedViews/index';

export const FriendLabel: React.FC<iFriendProps> = ({ friendName, friendAvatar }) => (
  <FriendInfo>
    <FriendAvatar friendAvatar={friendAvatar} />
    <EventListItem>
      <span>{friendName}</span>
    </EventListItem>
  </FriendInfo>
);
