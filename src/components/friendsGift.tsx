import React from 'react';
import { FriendGiftListItem, GiftWrapper } from '../sharedViews/listItem';
import { Props } from './myGift';

export const FriendsGift: React.FC<Props> = ({ giftName, giftLink, giftDescription } : Props) => (
  <FriendGiftListItem>
    <GiftWrapper>
      <span>{giftName}</span>
      <span>{giftLink}</span>
      <span>{giftDescription}</span>
    </GiftWrapper>
    <input type="checkbox" />
  </FriendGiftListItem>
);
