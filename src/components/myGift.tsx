import React from 'react';
import { giftProps } from '../types/interfaces';
import {
  GiftListItem, GiftWrapper,
} from '../sharedViews/listItem';

export const MyGift : React.FC<giftProps> = ({ giftName, giftLink, giftDescription }
  : giftProps) => (
    <GiftListItem>
      <GiftWrapper>
        <span>{giftName}</span>
        <span>{giftLink}</span>
        <span>{giftDescription}</span>
      </GiftWrapper>
    </GiftListItem>
);
