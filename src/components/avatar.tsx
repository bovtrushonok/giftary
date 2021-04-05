import React from 'react';
import { iAvatarProps } from '../types/interfaces';
import { AvatarWrapper } from '../sharedViews/index';

export const Avatar: React.FC<iAvatarProps> = ({ friendAvatar }) => (
  <AvatarWrapper>
    <span role="img" aria-label="beetle">{friendAvatar}</span>
  </AvatarWrapper>
);
