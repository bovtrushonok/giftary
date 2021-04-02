import React from 'react';
import { iFriendProps } from '../types/interfaces';
import { Avatar } from './avatar';
import { FriendInfo } from '../sharedViews/contentWrap';
import { EventListItem } from '../sharedViews/listItem';

export const FriendLabel: React.FC<iFriendProps> = ({ friendName, friendAvatar }: iFriendProps) => (
  <FriendInfo>
    <Avatar friendAvatar={friendAvatar} />
    <EventListItem>
      <span>{friendName}</span>
    </EventListItem>
  </FriendInfo>
);
