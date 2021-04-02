import React from 'react';
import { iAvatarProps } from '../types/interfaces';
import { AvatarWrapper } from '../sharedViews/avatar';

export const Avatar: React.FC<iAvatarProps> = ({ friendAvatar } : iAvatarProps) => (
  <AvatarWrapper>
    <span role="img" aria-label="beetle">{friendAvatar}</span>
  </AvatarWrapper>
);
