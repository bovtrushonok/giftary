import React from 'react';
import { IAvatarProps } from '../types';
import { AvatarWrapper } from '../sharedViews';

export const FriendAvatar: React.FC<IAvatarProps> = ({ friendAvatar }) => (
  <AvatarWrapper>
    <span role="img" aria-label="beetle">{friendAvatar}</span>
  </AvatarWrapper>
);
