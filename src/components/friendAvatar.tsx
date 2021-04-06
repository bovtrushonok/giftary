import React from 'react';
import { IAvatarProps } from '../types/interfaces';
import { AvatarWrapper } from '../sharedViews/index';

export const FriendAvatar: React.FC<IAvatarProps> = ({ friendAvatar }) => (
  <AvatarWrapper>
    <span role="img" aria-label="beetle">{friendAvatar}</span>
  </AvatarWrapper>
);
