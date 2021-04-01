import React from 'react';
import {
  GiftListItem, GiftWrapper,
} from '../sharedViews/listItem';

export interface Props {
  giftName: string,
  giftLink: string,
  giftDescription: string,
}

export const MyGift : React.FC<Props> = ({ giftName, giftLink, giftDescription } : Props) => (
  <GiftListItem>
    <GiftWrapper>
      <span>{giftName}</span>
      <span>{giftLink}</span>
      <span>{giftDescription}</span>
    </GiftWrapper>
  </GiftListItem>
);
