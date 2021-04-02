import React from 'react';
import {
  GiftListItem, GiftWrapper,
} from '../sharedViews/listItem';

export interface giftProps {
  giftName: string;
  giftLink: string;
  giftDescription: string;
  key: string;
}

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
