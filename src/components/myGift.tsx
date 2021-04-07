import React from 'react';
import { IGiftProps } from '../types/interfaces';
import {
  GiftListItem, GiftWrapper,
} from '../sharedViews';

export const MyGift : React.FC<IGiftProps> = ({ giftName, giftLink, giftDescription }) => (
  <GiftListItem>
    <GiftWrapper>
      <span>{giftName}</span>
      <span>{giftLink}</span>
      <span>{giftDescription}</span>
    </GiftWrapper>
  </GiftListItem>
);
