import React from 'react';
import { giftProps } from '../types/interfaces';
import {
  GiftListItem, GiftWrapper,
} from '../sharedViews/index';

export const MyGift : React.FC<giftProps> = ({ giftName, giftLink, giftDescription }) => (
  <GiftListItem>
    <GiftWrapper>
      <span>{giftName}</span>
      <span>{giftLink}</span>
      <span>{giftDescription}</span>
    </GiftWrapper>
  </GiftListItem>
);
